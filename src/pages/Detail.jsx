import Layout from '../layout/Layout';
import BreadCrumb from '../components/BreadCrumb';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react';
import Tabs from '../components/Tabs';
import CardProducts from '../components/Card/CardProducts';

function Detail() {
  return (
    <Layout>
        <section className="mx-52 mt-16 py-12">
          <BreadCrumb namepage="products" />
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
                <div className="aspect-square overflow-hidden bg-soap-50">
                  <img
                    src='/src/assets/img/product.png'
                    alt='product'
                    className="w-full scale-75 object-cover"
                  />
                </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold">Product</h1>
                  <div className="flex items-center mt-2">
                      <div className='flex space-x-1'>
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src="src/assets/icon/star.png"
                            className='h-4 w-4'
                            alt="star"
                          />
                        ))}
                      </div>
                    <span className="ml-2 text-sm text-soap-600">
                      ( 3 review )
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-2xl font-bold text-herb-700">
                    50.000 VND
                  </span>
                </div>

                <p className="text-soap-600">Experience the tranquility of lavender fields with our handcrafted soap. Made with pure lavender essential oil and dried lavender buds, this soap provides a gentle cleansing experience while calming your senses. The natural antibacterial properties of lavender help purify your skin, leaving it feeling refreshed and balanced.</p>

                <div className="pt-4 border-t border-soap-100">
                  <div className="flex items-center">
                    <span className="text-soap-600 mr-4">Quantity:</span>
                    <div className="flex items-center border border-soap-200 rounded">
                      <button
                        // onClick={decreaseQuantity}
                        className="w-8 h-8 flex items-center justify-center text-soap-600 hover:bg-soap-50"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-10 text-center">4</span>
                      <button
                        // onClick={increaseQuantity}
                        className="w-8 h-8 flex items-center justify-center text-soap-600 hover:bg-soap-50"
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
                    {/* Add to Cart - ${(productDetails.price * quantity).toFixed(2)} */}
                    <Button 
                      variant="contained" 
                      sx={{backgroundColor:'#2D6E53'}}
                      >
                      Add to Cart - $123
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
                    description="description"
                    ingredients="ingredients"
                    reviews="reviews"
                />
              {/* <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="p-6 border rounded-md mt-2">
                  <h3 className="text-xl font-medium mb-4">Product Description</h3>
                  <div className="space-y-4">
                    <p className="text-soap-600 whitespace-pre-line">assadsadsadsadas</p>
                    
                    <h4 className="text-lg font-medium mt-6">Benefits</h4>
                    <ul className="list-disc pl-5 space-y-2 text-soap-600">
                      {productDetails.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    
                    <h4 className="text-lg font-medium mt-6">How to Use</h4>
                    <p className="text-soap-600">HTU</p>
                    
                    <h4 className="text-lg font-medium mt-6">Details</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-soap-500">Weight</p>
                        <p className="text-soap-600">12</p>
                      </div>
                      <div>
                        <p className="text-sm text-soap-500">Stock</p>
                        <p className="text-soap-600">14 bars</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="ingredients" className="p-6 border rounded-md mt-2">
                  <h3 className="text-xl font-medium mb-4">Ingredients</h3>
                  <p className="text-soap-600 mb-6">
                    abdascsacsc
                  </p>
                  <div className="bg-soap-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Our Commitment to Quality</h4>
                    <p className="text-soap-600 text-sm">
                      We use only the finest natural ingredients in our soaps. Our products are free from parabens, sulfates, phthalates, and synthetic fragrances. We never test on animals and are committed to sustainable and ethical production practices.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="p-6 border rounded-md mt-2">
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
                {/* {productDetails.relatedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-lg overflow-hidden border border-soap-100 hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square overflow-hidden bg-soap-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-soap-600 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center pt-2">
                        <span className="font-semibold">${product.price.toFixed(2)}</span>
                        <Button size="sm" className="bg-herb-600 hover:bg-herb-700">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))} */}
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