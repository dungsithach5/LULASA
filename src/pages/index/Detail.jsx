import React, { useEffect, useState, useContext  } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../service/api/productApi.js';
import Layout from '../../layout/Layout.jsx';
import BreadCrumb from '../../components/BreadCrumb.jsx';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { Heart, Bath, Droplets } from 'lucide-react';
import Tabs from '../../components/Tabs.jsx';
import CardProducts from '../../components/Card/CardProducts.jsx';
import { CartContext } from '/src/context/CartContext';

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
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
      <section className="mx-52 mt-12 py-12">
        <BreadCrumb namepage={product.name} />
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className='flex justify-center items-center'>
              <img
                src={product.main_image_url}
                alt={product.name}
                className="object-cover min-w-[500px]"
              />
            </div>
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-semibold">{product.name}</h1>
                <div className="flex items-center mt-2">
                    <div className='flex space-x-1'>
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className='text-yellow-400'

                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  <span className="ml-2 text-sm text-soap-600">
                    ( 3 review )
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-2xl font-medium text-herb-700">
                  {product.price} VND
                </span>
              </div>

              <p className="text-[#4a4747]">{product.short_desc}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-soap-50 rounded-lg">
                  <Bath className="h-6 w-6 text-[#2D6E53] mb-2" />
                  <h3 className="font-medium text-sm">Handcrafted</h3>
                  <p className="text-xs text-soap-600 text-center mt-1">
                    Made in small batches to ensure quality
                  </p>
                </div>
                <div className="flex flex-col items-center p-4 bg-soap-50 rounded-lg">
                  <Droplets className="h-6 w-6 text-[#2D6E53] mb-2" />
                  <h3 className="font-medium text-sm">100% Natural</h3>
                  <p className="text-xs text-soap-600 text-center mt-1">
                    No artificial fragrances or harsh chemicals
                  </p>
                </div>
                <div className="flex flex-col items-center p-4 bg-soap-50 rounded-lg">
                  <Bath className="h-6 w-6 text-[#2D6E53] mb-2" />
                  <h3 className="font-medium text-sm">Long-lasting</h3>
                  <p className="text-xs text-soap-600 text-center mt-1">
                    Cured for 4-6 weeks for a harder, longer-lasting bar
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-soap-100">
                <div className="flex items-center">
                  <span className="text-soap-600 mr-4">Quantity:</span>
                  <div className="flex items-center border border-soap-200 rounded">
                    <button
                      onClick={decreaseQuantity}
                      className="w-8 h-8 flex items-center justify-center cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-10 text-center">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="w-8 h-8 flex items-center justify-center cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="ml-4 text-sm text-soap-600">
                    15 available
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">

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

              <div className="pt-4 border-t border-soap-100">
                <div className="flex items-center gap-4 text-sm text-soap-600">
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
          <div className="mt-16">
              <Tabs 
                  description={product.long_desc}
                  ingredients={product.ingredients}
                  reviews="reviews"
              />
              {/* <TabsContent value="reviews" className="p-6 border rounded-md mt-2">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-medium">Customer Reviews</h3>
                  <Button className="bg-herb-600 hover:bg-herb-700">Write a Review</Button>
                </div>
                <div className="space-y-6">
                  {productDetails.reviews.map((review) => (
                    <div key={review.id} className="border-b border-soap-100 pb-6">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">{review.name}</h4>
                          <div className="flex mt-1">{renderStars(review.rating)}</div>
                        </div>
                        <span className="text-soap-500 text-sm">{review.date}</span>
                      </div>
                      <p className="mt-2 text-soap-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs> */}
          </div>

          {/* Related Products */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/detail">
                <CardProducts
                  name="Lavender Bliss"
                  image={
                    <div className='bg-[#ecf8f3]'>
                      <img src="/src/assets/img/product.png" alt="" className='scale-75 object-cover' />
                    </div>
                  }
                  price="$5.99"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Detail;