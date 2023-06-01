import React from "react";


function Navbar() {

   
    return(
      <>
         {/* mobile view navbar */}
         <nav className="navbar md:hidden flex items-center justify-between px-4  mt-2">
                <i className="hamburger-menu fa-solid fa-bars"></i>
                <img src="./images/PWSkilllogo.png" className="w-24" alt="pwskill logo" />
                <img src="./images/search-icon.svg" className="" alt="search icon" />
          
         </nav>

         <div className="hidden md:flex justify-evenly mt-4">
               <img src="./images/PWSkilllogo.png" className="w-[150px]" alt="pwskill logo" />
            <div className="flex items-center gap-x-4 basis-7/12 md:border-2 md:border-gray rounded-md">
                   <img src="./images/search-icon.svg" className="h-6 ml-4" alt="search icon" />
                   <input className="w-[100%]" type="text" placeholder="What do you want to learn?"></input>
            </div>
            <button className="md:bg-blue text-white px-6 rounded-md">Login / Register</button>
         </div>

         
          
            
         <div className="mt-6 font-bold">

            <ul className="menu-list hidden md:flex gap-y-2 justify-evenly" >
               <li>Courses</li>
                <li>PW Skills Lab</li>
               <li>Job Portal</li>
               <li>Experience Portal</li>
               <li>Become an affiliate</li>
               <li>Hall of fame</li>
               <li>More</li>
            </ul>
         </div>

         
       
 

      </>
    )
}

export default Navbar;
