import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/order" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className='relative w-full h-80'>
          <Image
            src="https://static.wixstatic.com/media/02e995_5fc96e50a259446a910f5ae27d98a9b8~mv2.png"
            alt="Text & Illustration Cake"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://static.wixstatic.com/media/02e995_84c422cda4e7480d8bce6f8c08e73ad8~mv2.png"
            alt="Text & Illustration Cake"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className='flex justify-between'>
          <span className="font-medium">Illustration Cake</span>
          <span className="font-semibold">30KM</span>
        </div>
        <div className='text-sm text-gray-500'>Custom flavors</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link href="/order" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className='relative w-full h-80'>
          <Image
            src="https://static.wixstatic.com/media/02e995_353dc2ce65d5403c9453697f516f325b~mv2.png"
            alt="Text Cake"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://static.wixstatic.com/media/02e995_f1782341a8ba4207a89c05eb225c02b6~mv2.png"
            alt="Text Cake"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className='flex justify-between'>
          <span className="font-medium">Text & Illustration Cake</span>
          <span className="font-semibold">20KM</span>
        </div>
        <div className='text-sm text-gray-500'>Custom flavors</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link href="/order" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className='relative w-full h-80'>
          <Image
            src="https://static.wixstatic.com/media/02e995_7f74197ecc4c45ce8d448f3426ac160d~mv2.png"
            alt="Text & Illustration Cake"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://static.wixstatic.com/media/02e995_84c422cda4e7480d8bce6f8c08e73ad8~mv2.png"
            alt="Text & Illustration Cake"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className='flex justify-between'>
          <span className="font-medium">Text Cake</span>
          <span className="font-semibold">20KM</span>
        </div>
        <div className='text-sm text-gray-500'>Custom flavors</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Customize your cake now!
        </button>
      </Link>
      <Link href="/order" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className='relative w-full h-80'>
          <Image
            src="https://static.wixstatic.com/media/02e995_3689c5545fa146a48c0fa740e1741f10~mv2.png"
            alt="Text & Illustration Cake"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://static.wixstatic.com/media/02e995_892bc24973fd497ca2bcf7f5e3d1397d~mv2.png"
            alt="Text & Illustration Cake"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className='flex justify-between'>
          <span className="font-medium">Cake to go 2pcs</span>
          <span className="font-semibold">15KM</span>
        </div>
        <div className='text-sm text-gray-500'>Custom flavors</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
        Customize your cake now!
        </button>
        </Link>
      
      
    </div>
  );
};

export default ProductList;