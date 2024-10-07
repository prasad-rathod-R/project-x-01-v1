import React from "react";
import "./Section.css";

import caro1 from "./Assets/Caro1.webp";
import caro2 from "./Assets/caro2.jpg";
import Carousel from './Carousel.js'

function Home() {
  return (
    <div class="max-w-2xl mx-auto">

    <div id="default-carousel" class="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
       {/* Carousel wrapper  */}
        <div class="relative h-80 md:h-96" data-carousel-inner>
          
            <div class="duration-700 ease-in-out" data-carousel-item>
                <img src={caro1}
                    className="object-cover w-full h-full" alt="Slide 1"></img>
                <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">Rent Management Simplified Now</span>
            </div>
          
            <div class="duration-700 ease-in-out" data-carousel-item>
                <img src={caro2}
                    class="object-cover w-full h-full" alt="Slide 2"></img>
            </div>
           
            <div class="duration-700 ease-in-out" data-carousel-item>
                <img src={caro2}
                    class="object-cover w-full h-full" alt="Slide 3"></img>
            </div>
        </div>
       
        <div class="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
            <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
            <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
            <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
        </div>
       
        <button type="button"
            class="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
            data-carousel-prev>
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        </button>
        <button type="button"
            class="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
            data-carousel-next>
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </button>
    </div>

    <p class="mt-5 text-center text-gray-700 dark:text-gray-300">
       now manage your rent with rentMan helps you to simlify the rent management, landlord can add update delete tenant, next level tenant management options are also available

    </p>
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>

</div>

  );
}

export default Home;
