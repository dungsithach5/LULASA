import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from "../layout/Layout";
import CardBenefits from '../components/Card/CardBenefits';
import CardProducts from '../components/Card/CardProducts';
import CardCustomer from '../components/Card/CardCustomer';
import { ShieldCheck, Heart, Bath, Leaf, Droplet, HandHeart, ArrowDownRight } from 'lucide-react';
import { fetchProducts } from '../service/api/productApi.js'


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
        <section className='bg-[#ecf8f3] w-full mt-16 bg-cover bg-center'>
          <div className='grid grid-cols-3 place-items-center'>
            <img src="/src/assets/img/hero2.jpeg" alt="Hero Image" className='h-full w-full object-cover'/>
            <div className='flex flex-col justify-center pl-35 space-y-5 text-left'>
              <h1 className='logo-font italic font-medium text-7xl'>Handcrafted <br/> Soap for Natural Skincare</h1>
              <span className='text-[#616161]'>Discover our range of luxurious handmade soaps <br/> that nourish your skin with the power of nature.</span>
              <Link to="/shop" className='bg-[#2D6E53] w-36 h-12 flex items-center justify-center rounded'>
                  <span className='text-white'>Shop Now</span>
                  <ArrowDownRight className='inline ml-2 text-white' size={20} />
              </Link>
            </div>
            <img src="/src/assets/img/hero1.jpeg" alt="Hero Image" className='h-[450px] rounded-t-full object-cover'/>
          </div>
        </section>

        {/* Products */}
        <section className='py-20'>
          <div className='mx-52 flex flex-col justify-center items-center space-y-2'>
            <span className='text-[#2D6E53] text-xl font-medium'>Our Products</span>
            <h1 className='text-4xl font-medium'>Featured Herbal Soaps</h1>
            <span className='text-[#2D6E53]'>Explore our bestselling natural soaps, crafted with love and care.</span>
          </div>

          {/* Product cards */}
          <div className='mx-52 mt-12 grid grid-cols-4 gap-8'>
              {products.map((product) => (
                <Link to={`/detail/${product.id}`} key={product.id}>
                  <CardProducts
                    name={product.name}
                    image={
                      <div className=''>
                        <img src={product.main_image_url} alt={product.name} className='object-cover' />
                      </div>
                    }
                    price={`$${product.price}`}
                  />
                </Link>
              ))}
            </div>
        </section>

        {/* Benefits */}
        <section className='bg-[#ecf8f3] py-14'>
          <div className='mx-52 flex flex-col justify-center items-center space-y-2'>
            <span className='text-[#2D6E53] text-xl font-medium'>Why Choose Us</span>
            <h1 className='text-4xl font-medium'>Benefits of Our Herbal Soaps</h1>
            <span className='text-[#2D6E53]'>Discover why our handcrafted soaps are better for your skin and the environment.</span>
          </div>

          {/* Card benefits */}
          <div className='mx-52 mt-14 grid grid-cols-4'>
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
        <section className='pt-14 pb-20'>
          <div className='mx-52 flex flex-col justify-center items-center space-y-2'>
            <span className='text-[#2D6E53] text-xl font-medium'>Popular Products</span>
            <h1 className='text-4xl font-medium'>Customer Favorites</h1>
            <span className='text-[#2D6E53]'>Discover our most-loved products, handpicked by our happy customers.</span>
          </div>

          {/* Product cards */}
          <div className='mx-52 mt-12 grid grid-cols-4 gap-8'>
            {products.map((product) => (
              <Link to={`/detail/${product.id}`} key={product.id}>
                <CardProducts
                  name={product.name}
                  image={
                    <div className=''>
                      <img src={product.main_image_url} alt={product.name} className='object-cover' />
                    </div>
                  }
                  price={`$${product.price}`}
                />
              </Link>
            ))}
          </div>
        </section>

        {/* Our Mission */}
        <section className='bg-[#ecf8f3] grid grid-cols-2'>
            <img src="/src/assets/img/nature.jpeg" alt="Mission Image" className='object-cover'/>
            <div className='grid grid-cols-1 place-items-center'>
              <div className='w-[550px] space-y-8 text-center'>
                <div className='flex flex-col justify-center items-center space-y-2'>
                  <span className='text-[#2D6E53] text-xl font-medium'>Our Mission</span>
                  <h1 className='text-4xl font-medium'>Naturally Made <br/> Handcrafted with Care</h1>
                </div>
                <p className='text-[#858585] text-center'>We are dedicated to creating natural, eco-friendly biological soaps that care for your skin while protecting the environment. By using plant-based, biodegradable ingredients and minimizing harmful chemicals, we promote a healthier lifestyle and a cleaner planet. Our mission is to encourage sustainable living through simple, everyday choices — starting with the soap you use.</p>
                <div className='grid grid-cols-4 gap-5'>
                  <div className='grid grid-cols-1 place-items-center space-y-2'>
                    <div className="w-16 h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                      <HandHeart className="text-[#2D6E53]" size={32} />
                    </div>
                    <p className='text-[#2D6E53] font-medium'>Clear the skin</p>
                  </div>

                  <div className='grid grid-cols-1 place-items-center space-y-2'>
                    <div className="w-16 h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                      <Heart className="text-[#2D6E53]" size={32} />
                    </div>
                    <p className='text-[#2D6E53] font-medium'>Anti-bacterial</p>
                  </div>
                  
                  <div className='grid grid-cols-1 place-items-center space-y-2'>
                    <div className="w-16 h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                      <Leaf className="text-[#2D6E53]" size={32} />
                    </div>
                    <p className='text-[#2D6E53] font-medium'>Deodorize</p>
                  </div>

                  <div className='grid grid-cols-1 place-items-center space-y-2'>
                    <div className="w-16 h-16 bg-[#DCEFE1] rounded-full flex items-center justify-center">
                      <Droplet className="text-[#2D6E53]" size={32} />
                    </div>
                    <p className='text-[#2D6E53] font-medium'>Moisturize</p>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* Customer */}
        <section className='pt-14 pb-20'>
          <div className='mx-52 flex flex-col justify-center items-center space-y-2'>
            <span className='text-[#2D6E53] text-xl font-medium'>Testimonials</span>
            <h1 className='text-4xl font-medium'>What Our Customers Say</h1>
            <span className='text-[#2D6E53]'>Don't take our word for it - hear from our satisfied customers.</span>
          </div>

          {/* Customer reviews */}
          <div className='mx-52 mt-12 grid grid-cols-5 place-items-start gap-8'>
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
          </div>
        </section>
      </Layout>
    );
  }
  
export default Index;