import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../layout/Layout.jsx";
import CardBenefits from '../../components/Card/CardBenefits.jsx';
import CardProducts from '../../components/Card/CardProducts.jsx';
import CardCustomer from '../../components/Card/CardCustomer.jsx';
import { ShieldCheck, Heart, Bath, Leaf, Droplet, HandHeart, ArrowDownRight } from 'lucide-react';
import { fetchProducts } from '../../service/api/productApi.js'

const Index = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
        try {
          const data = await fetchProducts();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      getProducts();
    }, []);

    return (
      <Layout>
        {/* Hero section */}
        <section className='relative w-full mt-16'>
          {/* Background image */}
          <img
            src="/img/Banners/banner1.jpg"
            alt="Background"
            className='w-full h-[500px] md:h-[600px] lg:h-[750px] object-cover'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-black/20'></div>

          {/* Text content */}
          <div className='px-4 md:px-8 lg:mx-52 absolute inset-0 flex justify-center items-center'>
            <div className='text-center text-white min-[320px]:space-y-4 md:space-y-2 flex flex-col items-center'>
              <h1 className='logo-font italic font-medium text-4xl min-[320px]:text-5xl md:text-5xl lg:text-8xl'>
                Handcrafted  Soap <br /> for Natural Skincare
              </h1>
              <span className='md:text-lg min-[320px]:text-sm'>
                Discover our range of luxurious handmade soaps <br className='hidden md:block' />
                that nourish your skin with the power of nature.
              </span>
              <Link
                to="/shop"
                className='border border-white min-[320px]:w-40 md:mt-4 md:w-40 h-10 md:h-12 flex items-center justify-center rounded'
              >
                <span className='text-white'>Shop Now</span>
                <ArrowDownRight className='inline ml-2 text-white' size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-[#ECF5ED] py-10 px-4">
          <div className="md:mx-52 grid grid-cols-1 min-[320px]:mx-0 min-[320px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <CardBenefits
              title="Natural Ingredients"
              icon={<ShieldCheck className="text-green-600" size={28} />}
              description="Our soaps are made with 100% natural ingredients, free from harmful chemicals."
            />
            <CardBenefits
              title="Handcrafted"
              icon={<Heart className="text-green-600" size={28} />}
              description="Each soap is handcrafted with love, ensuring quality and care in every bar."
            />
            <CardBenefits
              title="Eco-Friendly"
              icon={<Leaf className="text-green-600" size={28} />}
              description="We use sustainable practices to create our soaps, reducing our carbon footprint."
            />
            <CardBenefits
              title="Skin-loving"
              icon={<Bath className="text-green-600" size={28} />}
              description="Gently formulated to be suitable for all skin types, including sensitive skin."
            />
          </div>
        </section>

        {/* Products */}
        <section className='py-10 md:py-20'>
          <div className='px-4 md:px-8 lg:mx-52 '>
            <div className='space-y-5 md:space-y-7'>
              <div className='flex flex-col space-y-2'>
                <span className='text-[#2D6E53] text-lg md:text-xl font-medium'>Our Products</span>
                <h1 className='text-3xl md:text-4xl font-medium'>Featured Herbal Soaps</h1>
                <span className='text-[#2D6E53]'>Explore our bestselling natural soaps, crafted with love and care.</span>
              </div>
                <Link to='/shop' className="mt-2 text-black px-4 py-2 rounded hover:underline hover:underline-offset-1 transition float-end">
                  See more
                  <ArrowDownRight className='inline ml-2 text-black' size={20} />
                </Link>
            </div>

            {/* Product cards */}
            <div className='grid grid-cols-1 min-[320px]:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full'>
                {products.slice(0,4).map((product) => (
                  <Link to={`/detail/${product.id}`} key={product.id}>
                    <CardProducts
                      name={product.name}
                      image={
                        <div className=''>
                          <img 
                            src={product.main_image_url} alt={product.name} 
                            className='object-cover'
                          />
                        </div>
                      }
                      price={`${product.price} VND`}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative h-[300px] md:h-[350px] flex items-center">
          <img
            src="/img/banner-shop.jpg"
            alt="banner shop"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="absolute inset-0 bg-black/30 z-10"></div>

          <div className="relative z-20 w-full px-4 md:px-10">
            <div className="mx-4 md:mx-8 lg:mx-52 text-left space-y-4 md:space-y-5">
              <span className="text-[#9ccdb9] text-lg md:text-xl font-medium">Nourish Your Skin Naturally</span>
              <h1 className="text-3xl md:text-4xl font-semibold text-white">Experience the Power of Herbal Soap</h1>
              <p className="text-gray-200 max-w-xl text-sm md:text-base">
                Handcrafted with nature's finest herbs and essential oils. Gentle on skin, tough on impurities – feel the natural difference today.
              </p>
              <Link to='/shop' className="mt-2 bg-[#2D6E53] text-white px-4 py-2 text-sm md:text-base rounded hover:bg-[#245c45] transition">
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        {/* Customer */}
        <section className='pt-10 md:pt-14 pb-10 md:pb-20'>
          <div className='px-4 md:px-8 lg:mx-52 flex flex-col justify-center space-y-2'>
            <span className='text-[#2D6E53] text-lg md:text-xl font-medium'>Testimonials</span>
            <h1 className='text-3xl md:text-4xl font-medium'>What Our Customers Say</h1>
            <span className='text-[#2D6E53]'>Don't take our word for it - hear from our satisfied customers.</span>
          </div>

          {/* Customer reviews */}
          <div className='px-4 md:px-8 lg:mx-52 mt-8 md:mt-12 grid grid-cols-1 min-[320px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 place-items-start'>
            <CardCustomer
              image={<img src="img/Customer/customer1.jpg" alt="" className='object-cover' />}
              name='Nguyen Thi Viet Trinh'
              review="Smells amazing and leaves my skin soft. Love that it’s all-natural!"
            />
            <CardCustomer
              image={<img src="img/Customer/customer2.jpg" alt="" className='object-cover' />}
              name='Pieg'
              review="Helped clear up my body acne. Will definitely repurchase."
            />
            <CardCustomer
              image={<img src="img/Customer/customer3.jpg" alt="" className='object-cover' />}
              name='Nguyen Cao Nhu Hao'
              review="Very refreshing after a workout. Clean scent, no irritation."
            />
            <CardCustomer
              image={<img src="img/Customer/customer1.jpg" alt="" className='object-cover' />}
              name='Nguyen Thi Viet Trinh'
              review="Melts a bit fast, but great for sensitive skin."
            />
            <CardCustomer
              image={<img src="img/Customer/customer2.jpg" alt="" className='object-cover' />}
              name='Pieg'
              review="Gentle and effective. My whole family uses it now!"
            />
          </div>
        </section>

        {/* Our Mission */}
        <section className='bg-[#ECF5ED] grid grid-cols-1 lg:grid-cols-2'>
            <img src="/img/nature.jpeg" alt="Mission Image" className='object-cover w-full h-[300px] md:h-[400px] lg:h-full'/>
            <div className='grid grid-cols-1 place-items-center py-10 md:py-0'>
              <div className='px-4 md:px-8 lg:px-40 space-y-6 min-[320px]:px-8'>
                <div className='flex flex-col justify-center space-y-2'>
                  <span className='text-[#2D6E53] text-lg md:text-xl font-medium'>Our Mission</span>
                  <h1 className='text-3xl md:text-4xl font-medium'>Naturally Made <br/> Handcrafted with Care</h1>
                </div>
                <p className='text-[#858585] text-justify'>We are dedicated to creating natural, eco-friendly biological soaps that care for your skin while protecting the environment. By using plant-based, biodegradable ingredients and minimizing harmful chemicals, we promote a healthier lifestyle and a cleaner planet. Our mission is to encourage sustainable living through simple, everyday choices — starting with the soap you use.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 min-[320px]:grid-cols-4'>
                  <div className='grid grid-cols-1 place-items-center space-y-2'>
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                      <HandHeart className="text-[#2D6E53]" size={28} />
                    </div>
                    <p className='text-[#2D6E53] font-medium text-sm md:text-base'>Clear the skin</p>
                  </div>

                  <div className='grid grid-cols-1 place-items-center space-y-2'>
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                      <Heart className="text-[#2D6E53]" size={28} />
                    </div>
                    <p className='text-[#2D6E53] font-medium text-sm md:text-base'>Anti-bacterial</p>
                  </div>
                  
                  <div className='grid grid-cols-1 place-items-center space-y-2'>
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                      <Leaf className="text-[#2D6E53]" size={28} />
                    </div>
                    <p className='text-[#2D6E53] font-medium text-sm md:text-base'>Deodorize</p>
                  </div>

                  <div className='grid grid-cols-1 place-items-center space-y-2'>
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                      <Droplet className="text-[#2D6E53]" size={28} />
                    </div>
                    <p className='text-[#2D6E53] font-medium text-sm md:text-base'>Moisturize</p>
                  </div>
                </div>
              </div>
            </div>
        </section>

      </Layout>
    );
  }
  
export default Index;