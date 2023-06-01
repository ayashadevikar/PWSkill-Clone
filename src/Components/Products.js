import React from "react";

function Product() {
    return(
        <>
           <h1 className="font-bold text-5xl text-center text-blue">Our Products</h1>

           <div className="flex-wrap md:flex md:justify-center mt-20 mb-20">

                 <div className="flex flex-col gap-y-8 items-center">
                     <img src="./images/neurolab-icon.svg" alt="neurolab-icon"></img>
                     <h1 className="proudctHeading text-2xl font-bold">PW Skills Lab</h1>
                     <p class="proudctParagraph md:text-xl  text-gray w-[20rem] md:w-[20rem] text-center">Supercharge your project development with our robust lab.</p>
                 </div>

                 <div className="flex flex-col gap-y-8 items-center md:-mt-8 mt-4">
                     <img src="./images/jobPortal-icon.svg" alt="jobPortal-icon"></img>
                     <h1 className="proudctHeading text-2xl font-bold">Job Portal</h1>
                     <p class="proudctParagraph md:text-xl  text-gray w-[20rem] md:w-[19rem] text-center">Use exceptional templates for a stand-out resume minus the sign up process.</p>
                 </div>

                 <div className="flex flex-col gap-y-8 items-center md:-mt-8 mt-4">
                     <img src="./images/internship-icon.svg" alt="neurolab-icon"></img>
                     <h1 className="proudctHeading text-2xl font-bold">Experience portal</h1>
                     <p class="proudctParagraph md:text-xl  text-gray w-[20rem] md:w-[20rem] text-center">PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects.</p>
                 </div>


                
           </div>

           
           <div className="flex justify-center flex-wrap gap-x-20 mb-40 ">
                   <div className="flex flex-col gap-y-8 items-center">
                      <img src="./images/affilitatePortal-icon.svg" alt="neurolab-icon" className="h-44"></img>
                       <h1 className="proudctHeading text-2xl font-bold">Become an affiliate</h1>
                       <p class="proudctParagraph md:text-xl  text-gray w-[20rem] md:w-72 text-center">Explore affiliate marketing opportunities with PW Skills and attain financial freedom.</p>
                    </div>

                    <div className="flex flex-col gap-y-8 items-center mt-2">
                        <img src="./images/halloffame-icon.svg" alt="neurolab-icon"></img>
                        <h1 className="proudctHeading text-2xl font-bold">Hall of fame</h1>
                        <p class="proudctParagraph md:text-xl text-gray md:w-80 text-center">Our student placements and 100K+ career transitions speak volumes about our courses.</p>
                    </div>

                    
             </div>
        </>
    )
}

export default Product;