import React, { useEffect, useState, useContext  } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../service/api/productApi.js';
import { fetchReviews } from '../../service/api/reviewApi.js';
import Layout from '../../layout/Layout.jsx';
import BreadCrumb from '../../components/BreadCrumb.jsx';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { Heart, Bath, Droplets } from 'lucide-react';
import Tabs from '../../components/Tabs.jsx';
import CardProducts from '../../components/Card/CardProducts.jsx';
import { CartContext } from '/src/context/CartContext';
import ReviewList from '../../components/Reviews.jsx';

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);

        const reviewsData = await fetchReviews();
        setReviews(reviewsData.filter(review => review.product_id === Number(id)));

        const related = data.RelatedProducts?.map(rp => rp.related) || [];
        setRelatedProducts(related);

      } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 15) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Layout>
      {/* Product Detail */}
      <section className="mx-4 min-[320px]:mt-12 sm:mx-8 md:mx-20 lg:mx-52 px-2 sm:px-4 md:px-6 lg:px-8 mt-6 md:mt-10 lg:mt-12 py-6 md:py-10 lg:py-12">
        <BreadCrumb namepage={product.name} />
        <div className="container px-0 sm:px-2 md:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 mt-4 md:mt-6">
            {/* Product Images */}
            <div className="flex justify-center items-center">
              <img
                src={product.main_image_url}
                alt={product.name}
                className="object-cover w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
              />
            </div>
            {/* Product Info */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">{product.name}</h1>
                <div className="flex items-center mt-1 sm:mt-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-xs sm:text-sm text-soap-600">( {reviews.length} reviews )</span>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-xl sm:text-2xl font-medium text-herb-700">
                  {product.price} VND
                </span>
              </div>

              <p className="text-[#4a4747] text-xs sm:text-sm md:text-base">{product.short_desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                <div className="flex flex-col items-center p-3 md:p-4 bg-soap-50 rounded-lg">
                  <Bath className="h-6 w-6 text-[#2D6E53] mb-2" />
                  <h3 className="font-medium text-xs md:text-sm">Handcrafted</h3>
                  <p className="text-xs text-soap-600 text-center mt-1">
                    Made in small batches to ensure quality
                  </p>
                </div>
                <div className="flex flex-col items-center p-3 md:p-4 bg-soap-50 rounded-lg">
                  <Droplets className="h-6 w-6 text-[#2D6E53] mb-2" />
                  <h3 className="font-medium text-xs md:text-sm">100% Natural</h3>
                  <p className="text-xs text-soap-600 text-center mt-1">
                    No artificial fragrances or harsh chemicals
                  </p>
                </div>
                <div className="flex flex-col items-center p-3 md:p-4 bg-soap-50 rounded-lg">
                  <Bath className="h-6 w-6 text-[#2D6E53] mb-2" />
                  <h3 className="font-medium text-xs md:text-sm">Long-lasting</h3>
                  <p className="text-xs text-soap-600 text-center mt-1">
                    Cured for 4-6 weeks for a harder, longer-lasting bar
                  </p>
                </div>
              </div>

              <div className="pt-3 md:pt-4 border-t border-soap-100">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <span className="text-soap-600 text-xs sm:text-sm">Quantity:</span>
                  <div className="flex items-center border border-soap-200 rounded">
                    <button
                      onClick={decreaseQuantity}
                      className="w-8 h-8 flex items-center justify-center cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-8 sm:w-10 text-center">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="w-8 h-8 flex items-center justify-center cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs sm:text-sm text-soap-600">15 available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Button 
                    variant="contained" 
                    sx={{backgroundColor:'#2D6E53'}}
                    onClick={() => addToCart(product, quantity)}
                    >
                    Add to Cart - {product.price * quantity} VND
                  </Button>
                  <Button
                      variant="outlined"
                      sx={{borderColor:'#2D6E53', color:'#2D6E53'}}
                  >
                      <Heart className="h-4 w-4 mr-2" />
                      Add to Wishlist
                  </Button>
              </div>

              <div className="pt-3 md:pt-4 border-t border-soap-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-soap-600">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 text-herb-600"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    Natural Ingredients
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 text-herb-600"
                    >
                      <path d="M9 12h6" />
                      <path d="M11 18V6" />
                      <path d="M17 18a5 5 0 0 0-10 0" />
                      <path d="M21 19h-2a2 2 0 0 1-2-2 2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2 2 2 0 0 1-2 2H7a2 2 0 0 1-2-2 8 8 0 0 1 16 0 2 2 0 0 1-2 2Z" />
                    </svg>
                    Cruelty-Free
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 text-herb-600"
                    >
                      <rect width="20" height="14" x="2" y="3" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                    Free Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-10 md:mt-16">
            <Tabs 
                description={product.long_desc}
                ingredients={product.ingredients}
                reviews={<ReviewList reviews={reviews} />}
            />
          </div>

          {/* Related Products */}
          <div className="mt-12 md:mt-20">
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.length === 0 ? (
                <p className="text-xl">No related products</p>
              ) : (
                relatedProducts.map((item) => (
                  <Link key={item.id} to={`/detail/${item.id}`}>
                    <CardProducts
                      name={item.name}
                      image={
                        <div className="bg-[#ecf8f3]">
                          <img src={item.main_image_url} alt={item.name} className="scale-75 object-cover max-w-full" />
                        </div>
                      }
                      price={`${item.price} VND`}
                    />
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Detail;