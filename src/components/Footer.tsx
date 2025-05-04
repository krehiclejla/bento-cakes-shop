import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-900 text-white mt-24">
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-16">
        {/* LEFT SECTION */}
        <div className="w-full md:w-1/3">
          <Link href="/">
            <div className="text-3xl font-bold tracking-wide">MINI CAKES</div>
          </Link>
          <p className="mt-6 text-gray-300 leading-relaxed">
            Sweet Whisk Lane <br />
            123 Sprinkle Street <br />
            Frosting Valley, 71210 <br />
            Bosnia and Herzegovina
          </p>
          <div className="mt-4">
            <p className="font-semibold">hello@minicakes.ba</p>
            <p className="font-semibold">+1 234 567 890</p>
          </div>
          
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex flex-col md:flex-row justify-between w-full md:w-2/3 gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-lg">BENTO CAKES</h1>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About Us
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-lg">ORDER NOW</h1>
            <Link href="/order" className="text-gray-300 hover:text-white">
              Order Form
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-lg">ACCOUNT</h1>
            <Link href="/login" className="text-gray-300 hover:text-white">
              My Account
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 border-t border-gray-700 pt-8">
        <div className="text-center md:text-left text-gray-400">
          © 2024 Mini Cakes Shop. All rights reserved.
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex items-center">
            <span className="text-gray-500 mr-4">Language:</span>
            <span className="font-medium text-white">Bosnia and Herzegovina | English</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 mr-4">Currency:</span>
            <span className="font-medium text-white">$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
