import CakeInspo from "@/components/CakeInspo"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
        <h1 className="text-2xl">Types of cakes to order</h1>
        <ProductList/>
      </div>
      <div className='mt-24'>
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">Design inspiration for any occasion</h1>
        <CakeInspo/>
      </div>
    </div>
  )
}

export default HomePage