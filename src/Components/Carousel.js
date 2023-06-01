import React from "react";

function Carousel(){

    
     
    return(
        <>
        {/* mobile view carousel image */}
         <div class="mt-6">
            <img className="flex-wrap md:hidden" src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt="LMS" ></img>
         </div>

      {/* laptop view carousel image */}
        <div>

            <img className="hidden md:block" src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="img2"></img>
            
            
       
            <div className="flex gap-x-2 justify-center relative -mt-6">
              <div className="dot h-2 w-2 rounded-full bg-gray hover:bg-white"></div>
              <div className="dot h-2 w-2 rounded-full bg-gray hover:bg-white"></div>
              <div className="dot h-2 w-2 rounded-full bg-gray hover:bg-white"></div>
              <div className="dot h-2 w-2 rounded-full bg-gray hover:bg-white"></div>
          </div>
       </div>
    

        </>
    )
}

export default Carousel;
