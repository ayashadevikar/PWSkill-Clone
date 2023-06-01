import React from "react";

function Card(){
    return(
        <>
          <div className="flex flex-col gap-y-4 mt-14 ">
          
                 <h1 className="text-3xl text-center font-bold md:text-5xl md:text-center text-blue">“Pure Hardwork, No Shortcuts!”</h1>
                 <span className="mt-4 border-2 border-yellow w-24 block mx-auto "></span>
                 
       
               

             <div className="icons md:flex justify-evenly ">
                
                  <div className="flex flex-col justify-center items-center gap-y-4 ">
                        <img src="./images/books-icon.svg" className="icons-img h-40" alt="books-icon"></img>
                         <span className="text-black font-bold text-4xl">600+</span>
                         <h2 className="text-gray text-2xl font-bold">Different Courses</h2>
                   </div>

                   <div className="flex flex-col justify-center items-center gap-y-4">
                        <img src="./images/student-icon.svg" className="icons-img h-40" alt="student-icon"></img>
                         <span className="text-black font-bold text-4xl">7,00,000+</span>
                         <h2 className="text-gray text-2xl font-bold">Students Enrolled</h2>
                    </div>

                   <div className="flex flex-col justify-center items-center gap-y-4">
                        <img src="./images/credit-card-icon.svg" className="icons-img h-40" alt="credit-card-icon"></img>
                         <span className="text-black font-bold text-4xl">10,000+</span>
                        <h2 className="text-gray text-2xl font-bold">Successful Transition</h2>
                    </div>
                     
             </div>
           </div>
        </>
    )
}

export default Card;