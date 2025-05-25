import React from 'react';
import Layout from "../layout/Layout";
import CardBenefits from '../components/Card/CardBenefits';
import CardProducts from '../components/Card/CardProducts';
import CardCustomer from '../components/Card/CardCustomer';
import { ShieldCheck, Heart, Bath, Leaf, Droplet, HandHeart } from 'lucide-react';

const Index = () => {
    return (
      <Layout>
        {/* Hero section */}
        <section className='bg-[#F9F7F6] w-full'>
          <div className='mx-52 grid grid-cols-2'>
              <div className='flex flex-col justify-center items-center space-y-4 text-center'>
                  <h1 className='font-medium text-4xl'>Handcrafted Soap for <br/> Natural skincare</h1>
                  <span className='text-[#616161]'>Discover our range of luxurious handmade soaps <br/> that nourish your skin with the power of nature.</span>
                  <button className='bg-[#2D6E53] w-32 h-10 rounded-full'>
                      <span className='text-white text-sm'>Shop Now</span>
                  </button>
              </div>
            <img src="/src/assets/img/Hero.jpg" alt="Hero Image" className='object-cover'/>
          </div>
        </section>

        <section className='py-14'>
          <div className='mx-52 flex flex-col justify-center items-center space-y-2'>
            <span className='text-[#2D6E53] text-xl font-medium'>Why Choose Us</span>
            <h1 className='text-4xl font-medium'>Benefits of Our Herbal Soaps</h1>
            <span className='text-[#2D6E53]'>Discover why our handcrafted soaps are better for your skin and the environment.</span>
          </div>

          {/* Card benefits */}
          <div className='mx-52 mt-14 grid grid-cols-4 gap-10'>
            <CardBenefits
              title="Natural Ingredients"
              icon={<ShieldCheck className="text-green-600" size={35} />}
              description="Our soaps are made with 100% natural ingredients, free from harmful chemicals."
            />
            <CardBenefits
              title="Handcrafted"
              icon={<Heart className="text-green-600" size={35} />}
              description="Each soap is handcrafted with love, ensuring quality and care in every bar."
            />
            <CardBenefits
              title="Eco-Friendly"
              icon={<Leaf className="text-green-600" size={35} />}
              description="We use sustainable practices to create our soaps, reducing our carbon footprint."
            />
            <CardBenefits
              title="Skin-loving"
              icon={<Bath className="text-green-600" size={35} />}
              description="Gentely formulated to suitable for all skin types, including sensitive skin."
            />
          </div>
        </section>

        {/* Products */}
        <section className='bg-[#E3E9DF] pt-14 pb-20'>
          <div className='mx-52 flex flex-col justify-center items-center space-y-2'>
            <span className='text-[#2D6E53] text-xl font-medium'>Our Products</span>
            <h1 className='text-4xl font-medium'>Featured Herbal Soaps</h1>
            <span className='text-[#2D6E53]'>Explore our bestselling natural soaps, crafted with love and care.</span>
          </div>

          {/* Product cards */}
          <div className='mx-52 mt-12 grid grid-cols-4 gap-8'>
            <CardProducts
              title="Lavender Bliss"
              image={<img src="/src/assets/img/product.png" alt="" className='w-full h-auto object-cover' />}
              description="Calming lavender soap with essential oils to help you relax and unwind after a long day."
              price="$5.99"
            />
            <CardProducts
              title="Citrus Burst"
              image={<img src="/src/assets/img/product.png" alt="" className='w-full h-auto object-cover' />}
              description="Calming lavender soap with essential oils to help you relax and unwind after a long day."
              price="$5.99"
            />
            <CardProducts
              title="Rose Petal"
              image={<img src="/src/assets/img/product.png" alt="" className='w-full h-auto object-cover' />}
              description="Calming lavender soap with essential oils to help you relax and unwind after a long day."
              price="$6.99"
            />
            <CardProducts
              title="Minty Fresh"
              image={<img src="/src/assets/img/product.png" alt="" className='w-full h-auto object-cover' />}
              description="Calming lavender soap with essential oils to help you relax and unwind after a long day."
              price="$5.99"
            />
          </div>
        </section>

        {/* Our Mission */}
        {/* <section className='pt-14 pb-20 mx-52 space-y-10'>
          <div className='mx-52 flex flex-col justify-center items-center space-y-2'>
            <span className='text-[#2D6E53] text-xl font-medium'>Our Mission</span>
            <h1 className='text-4xl font-medium'>Naturally Made, Handcrafted with Care</h1>
            <span className='text-[#2D6E53]'>We are dedicated to creating high-quality, natural soaps that nourish your skin and respect the environment.</span>
          </div>
          <div className='grid grid-cols-2 gap-8'>
            <img src="/src/assets/img/nature.jpeg" alt="Mission Image" className='object-cover'/>
            <div className='space-y-6'>
              <p className='text-[#616161] text-xl'>We are dedicated to crafting natural, eco-friendly biological soaps that care for both your skin and the planet. By reducing chemical use and promoting green living, we aim to inspire a healthier, more sustainable lifestyle for everyone.</p>
              <div className='flex space-x-5'>
                <div className='grid grid-cols-1 place-items-center'>
                  <div className="w-16 h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                    <HandHeart className="text-[#2D6E53]" size={32} />
                  </div>
                  <p className='text-[#2D6E53] font-medium'>Clear the skin</p>
                </div>

                <div className='grid grid-cols-1 place-items-center'>
                  <div className="w-16 h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                    <Heart className="text-[#2D6E53]" size={32} />
                  </div>
                  <p className='text-[#2D6E53] font-medium'>Anti-bacterial</p>
                </div>
                
                <div className='grid grid-cols-1 place-items-center'>
                  <div className="w-16 h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                    <Leaf className="text-[#2D6E53]" size={32} />
                  </div>
                  <p className='text-[#2D6E53] font-medium'>Deodorize</p>
                </div>

                <div className='grid grid-cols-1 place-items-center'>
                  <div className="w-16 h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                    <Droplet className="text-[#2D6E53]" size={32} />
                  </div>
                  <p className='text-[#2D6E53] font-medium'>Moisturize</p>
                </div>
              </div>
              <button className='bg-[#2D6E53] text-white p-2 px-4 rounded'>Learn more</button>
            </div>
          </div>
        </section> */}

        {/* Customer */}
        <section className='bg-[#E3E9DF] pt-14 pb-20'>
          <div className='mx-52 flex flex-col justify-center items-center space-y-2'>
            <span className='text-[#2D6E53] text-xl font-medium'>Testimonials</span>
            <h1 className='text-4xl font-medium'>What Our Customers Say</h1>
            <span className='text-[#2D6E53]'>Don't take our word for it - hear from our satisfied customers.</span>
          </div>

          {/* Customer reviews */}
          <div className='mx-52 mt-12 flex justify-center space-x-5'>
            <CardCustomer
              image={<img src="/src/assets/img/Customer/customer1.jpg" alt="" className='object-cover' />}
              name='Nguyen Thi Viet Trinh'
              review="Calming lavender soap with essential oils to help you relax and unwind after a long day."
            />
            <CardCustomer
              image={<img src="/src/assets/img/Customer/customer2.jpg" alt="" className='object-cover' />}
              name='Pieg'
              review="Calming lavender soap with essential oils to help you relax and unwind after a long day."
            />
            <CardCustomer
              image={<img src="/src/assets/img/Customer/customer3.jpg" alt="" className='object-cover' />}
              name='Nguyen Cao Nhu Hao'
              review="Calming lavender soap with essential oils to help you relax and unwind after a long day."
            />
          </div>
        </section>
      </Layout>
    );
  }
  
export default Index;