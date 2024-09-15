import React from "react";
import pic from "../assets/home1.png";
import pic2 from "../assets/home2.png";
import pic3 from "../assets/home3.png";
import pic4 from "../assets/home4.png";
import pic5 from "../assets/home5.png";
import "../App.css";
export default function Home() {
  return (
    //home section 
    <div className="w-full">
      <div className=" box1 w-full bg-white h-[700px]  flex px-20 py-10 items-center justify-center gap-5  ">
        <div className="w-[45%]  h-[100%] px-7 ">
          <h1 className="home">Print on demand for your ecommerce business</h1>
          <h4 className="text-[25px] mt-5 font-semibold">
            Sign up for free and only pay for what you sell
          </h4>
          <p className="mt-3 ">
            Turn your passion into profit with the world's largest
            <span className="underline hover:text-gray-500 cursor-pointer ml-1 mr-1">
              print on demand 
            </span>
              network.
          </p>
          <div className="flex gap-5 mt-8  h-[50px]">
            <button className="bg-black h-[40px] text-white px-5 font-semibold rounded-[20px] hover:text-gray-400">
              Get started for free
            </button>
            <button className="h-[40px] text-black border-[1px] border-gray-400 hover:bg-gray-300  px-5 font-semibold rounded-[20px] ">
              See our products
            </button>
          </div>
          <div className="box text-5xl mt-6">
              <i class="fa-brands fa-shopify "></i>
              <span className="font-bold text-4xl">shopify</span>
            <div className="text-[#46B99E] text-xl mt-1 w-[180px]">
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span className="text-black ml-3 text-[15px] hover:text-gray-600">
                4.8/5 based on 887 reviews
              </span>
              <p className=""></p>
            </div>
          </div>
        </div>
        <div className="w-[45%]  h-[100%] flex justify-center items-center ">
          <img src={pic} alt="" className="w-[800px] h-[520px] " />
        </div>
      </div>
      <div className="box2  w-full h-[200px] bg-[#FAF6EF] flex justify-evenly items-center">
        <div className=" text-center text-2xl w-[250px] font-semibold">
          <h1 className="text-3xl">90%</h1>
          <h2>of all orders are produced locally</h2>
        </div>
        <div className="text-center text-2xl w-[250px] font-semibold">
          <h1 className="text-3xl">90%</h1>
          <h2>of orders arrive within 5 days of ordering</h2>
        </div>
        <div className="text-center text-2xl w-[250px] font-semibold">
          <h1 className="text-3xl">140+</h1>
          <h2>print providers across 32 countries</h2>
        </div>
      </div>
      <div className="  w-full p-10">
        <h1 className="home text-center">Why choose Gelato</h1>
        <div className="  box3 w-full bg-white h-[800px]  flex px-20 py-14 items-center justify-center gap-16  ">
          <div className="w-[50%]  h-[100%] flex justify-center items-center  ">
            <img src={pic2} alt="" className=" w-[550px]" />
          </div>
          <div className="w-[45%]  h-[100%] tracking-wide">
            <div className="px-5 ">
              <h1 className="text-2xl font-medium mb-1  ">▻ World's largest print-on-demand network</h1>
              <p className="text-[16px] ">140+ print partners in 32 countries. Gelato is a truly global service.</p>
            </div>
            <div className="mt-4 px-5">
              <h1 className="text-2xl font-medium mb-1  ">▻ Sell globally, produce locally</h1>
              <p className="text-[16px] ">Your products are produced close to your customers, wherever they are.</p>
            </div>
            <div className="mt-4 px-5">
              <h1 className="text-2xl font-medium mb-1  ">▻  100% free editing tools</h1>
              <p className="text-[16px] ">Create your custom products using our suite of <span className="underline hover:text-gray-500 cursor-pointer ml-1 mr-1">free tools.</span></p>
            </div>
            <div className="mt-4 px-5" >
              <h1 className="text-2xl font-medium mb-1  ">▻ 60+logistics partners</h1>
              <p className="text-[16px] ">Our global network of logistics partners ensures your products are delivered fast.</p>
            </div>
            <div className="mt-4 px-5">
              <h1 className="text-2xl font-medium mb-1  ">▻ High-quality products</h1>
              <p className="text-[16px] ">We partner with the world's leading brands to ensure the best quality products.</p>
            </div>
            <div className="mt-4 px-5">
              <h1 className="text-2xl font-medium mb-1  ">▻ Endless creativity with Shutterstock Images</h1>
              <p className="text-[16px] ">Access millions of images and graphics to create unique products you can sell in your store.</p>
            </div>
            <div className="mt-4 px-5">
              <h1 className="text-2xl font-medium mb-1  ">▻ 1-click integration to the leading ecommerce platforms</h1>
              <p className="text-[16px] ">Connect your store to Gelato using <span className="underline hover:text-gray-500 cursor-pointer ml-1 mr-1"> our integrations</span> with <span className="underline hover:text-gray-500 cursor-pointer ml-1 mr-1">Shopify</span>, Etsy and more.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" box4 w-full h-[620px] bg-[#FAF6EF] flex justify-center  items-center px-[150px]">
      <div className="w-[50%] px-10 ">
        <h4 className="font-medium ">For print on demand sellers</h4>
        <h1 className="text-6xl font-semibold  leading-[65px]">Accelerate business growth with innovative design tools and apps</h1>
        <h3 className="text-2xl font-medium  mt-8"> See how our cutting-edge solutions can help you reach new customers and maximize your profits.</h3>
        <button className="bg-black mt-8 text-white px-5 font-semibold py-1.5 rounded-[20px] hover:text-gray-400">
              Get started 
            </button>
      </div>
       <div className="w-[50%]">
        <img src={pic3} alt="" className="w-[550px]"  />
       </div>       
      </div>
     <div className=" box5 w-full h-[600px] flex justify-center items-center px-[120px]  ">
     <div className="w-[50%] ">
      <img src={pic4} alt='' className='h-[100%]'/>
      </div>
      <div className="w-[50%] px-10 ">
        <h4 className="font-medium ">For print producers</h4>
        <h1 className="text-7xl font-semibold  ">GelatoConnect</h1>
        <h3 className="text-2xl font-medium  mt-8">Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</h3>
        <button className="bg-black mt-8 text-white px-5 font-semibold py-1.5 rounded-[20px] hover:text-gray-400">
              Learn more
            </button>
      </div>
     </div>
     <div className=" box6 w-full h-[620px] bg-[#FAF6EF] flex justify-center  items-center px-[150px]">
      <div className="w-[50%] px-10 ">
        <h1 className="text-6xl font-bold  leading-[65px]">Meet GelatoConnect at Printing United</h1>
        <p className="text-[16px]  mt-10">Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours.</p>
        <button className="bg-black mt-8 text-white px-5 font-semibold py-1.5 rounded-[20px] hover:text-gray-400">
              Book a meeting
            </button>
      </div>
       <div className="w-[50%]">
        <img src={pic5} alt="" className=""  />
       </div>       
      </div>
    </div>
  );
}
