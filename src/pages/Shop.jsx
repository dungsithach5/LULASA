import Layout from "../layout/Layout";
import CardProducts from '../components/Card/CardProducts';
import Breadcrumbs from '../components/BreadCrumb';
const Shop = () => {
    return (
        <Layout>
            <div className='bg-[#E3E9DF] w-full h-auto pb-20'>
                <div className='mx-52 flex flex-col justify-center items-center text-center space-y-4'>
                    <h1 className='font-medium text-4xl mt-28'>Shop Our Natural Soaps</h1>
                    <span className='text-[#616161]'>Explore our collection of handcrafted soaps made with love and care.</span>
                </div>
            </div>

            <section className="bg-[#F9F7F6] py-20">
                <Breadcrumbs/>
                <div className="mx-52 grid grid-cols-4 gap-8">
                    <CardProducts
                        title="Lavender Bliss"
                        image={<img src="/src/assets/img/product.png" alt="" className='object-cover' />}
                        description="Calming lavender soap with essential oils to help you relax and unwind after a long day."
                        price="$5.99"
                    />
                    <CardProducts
                        title="Citrus Burst"
                        image={<img src="/src/assets/img/product.png" alt="" className='object-cover' />}
                        description="Calming lavender soap with essential oils to help you relax and unwind after a long day."
                        price="$5.99"
                    />
                    <CardProducts
                        title="Rose Petal"
                        image={<img src="/src/assets/img/product.png" alt="" className='object-cover' />}
                        description="Calming lavender soap with essential oils to help you relax and unwind after a long day."
                        price="$6.99"
                    />
                    <CardProducts
                        title="Minty Fresh"
                        image={<img src="/src/assets/img/product.png" alt="" className='object-cover' />}
                        description="Calming lavender soap with essential oils to help you relax and unwind after a long day."
                        price="$5.99"
                    />
                    <CardProducts
                        title="Minty Fresh"
                        image={<img src="/src/assets/img/product.png" alt="" className='object-cover' />}
                        description="Calming lavender soap with essential oils to help you relax and unwind after a long day."
                        price="$5.99"
                    />
                </div>
            </section>
        </Layout>
    );
}

export default Shop;