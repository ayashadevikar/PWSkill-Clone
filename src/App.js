
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Card from './Components/Card';
import Courses from './Components/Courses';
import Product from './Components/Products';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      
      <Navbar />
      <Carousel />
      <Card />
     
         <div className="flex flex-col gap-y-4 text-center mt-10 ">
                  <h1 className="text-3xl font-bold md:text-5xl text-center text-blue">Popular Programs</h1>
                  <span className="md:text-xl text-gray">Most in demand and watched by people.</span> 
            </div>
                

<div className='courseDetails courses flex-wrap flex items-center justify-evenly mt-20 pb-10 gap-y-4'>
      <Courses
        imgSrc="./images/course1.jpeg"
        altText="course1"
        courseTitle="Full Stack Web Development 2.0"
        instructor="Hitesh Choudhary"
        price="Rs.3500.00"
      />
      <Courses
        imgSrc="./images/course2.jpeg"
        altText="course2"
        courseTitle="Full Stack Web Development 2.0"
        instructor="Hitesh Choudhary"
        price="Rs.3500.00"
      />
      <Courses
        imgSrc="./images/course3.jpeg"
        altText="course3"
        courseTitle="Full Stack Web Development 2.0"
        instructor="Hitesh Choudhary"
        price="Rs.3500.00"
      />
</div>
      <Product />
      <Footer />
    </>
  );
}

export default App;
