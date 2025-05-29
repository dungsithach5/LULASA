import Layout from "../layout/Layout";
import CardProducts from '../components/Card/CardProducts';
import Breadcrumbs from '../components/BreadCrumb';
import Checkbox from '../components/CheckboxLabels'
import { Link } from 'react-router-dom';
const Shop = () => {
    return (
        <Layout>
            <div className='relative bg-[#ecf8f3] w-full mt-16 pb-20'>
                <img src="/src/assets/img/banner-shop.jpg" alt="banner shop" className='absolute w-full h-72 object-cover' />
                <div className="absolute top-0 left-0 w-full h-72 bg-black opacity-50"></div>
                <div className='relative mx-52 flex flex-col justify-center items-center text-center space-y-4 text-white'>
                    <h1 className='font-medium text-4xl mt-28'>SHOP OUR COLLECTION</h1>
                    <Breadcrumbs />
                </div>
            </div>

            {/* Filter */} 
            <section className="py-20">
                <div className="mx-52 flex justify-between items-center">
                    <h2 className='text-2xl font-medium'>All Products</h2>
                    <div className="flex space-x-4">
                        <select className="border border-gray-300 rounded px-3 py-2">
                            <option value="default">Default Sorting</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                        </select>
                        <select className="border border-gray-300 rounded px-3 py-2">
                            <option value="all">Show All</option>
                            <option value="featured">Featured</option>
                            <option value="new-arrivals">New Arrivals</option>
                        </select>
                    </div>
                </div>

                <div className="mx-52 flex space-x-5 mt-6">
                    {/* Filter */}
                    <div className="w-sm h-auto space-y-4">
                        <div className="pb-4 border-b-1">
                            <h4 className="font-medium text-xl mb-4 pl-4 border-l-3 border-black">Category</h4>
                            <ul className="space-y-2">
                                <li><Link to="">Essential Oils</Link></li>
                                <li><Link to="">Diffusers</Link></li>
                                <li><Link to="">Accessories</Link></li>
                            </ul>
                        </div>
                        <div className="pb-4 border-b-1">
                            <h4 className="font-medium text-xl mb-4 pl-4 border-l-3 border-black">Price</h4>
                            <Checkbox/>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 border-t-1">
                        <Link to="/detail" className="h-auto">
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
            </section>
        </Layout>
    );
}

export default Shop;