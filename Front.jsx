import React from 'react'
import './Front.css'
import { Link } from "react-router-dom";
import Add from './Add.jsx';
import Edit from './Edit.jsx';
import View from './View.jsx';
import Delete from './Delete';
function Front() {
  return (
    <div>
      <header>
    <h2>QUICK ENROLL📝</h2>
    <nav>
      <li><a href="#home">Home</a></li>
      <li><a href="#gallery">Courses</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#feed">Feedbacks</a></li>
      <li><a href="#contact">Contact</a></li>
    </nav>
  </header>
  <div id="home"> 
  <section class="hero">
    <div class="background-image"></div>
    <div class="hero-content-area">
      <h1>Seamless Learning Starts Here Register Today!</h1>
      <h3>Join us and redefine the way you learn, one click at a time.</h3>
      <Link to="/Add"><a  class="btn">Add</a></Link>
      <Link to="/View"><a  class="btn">View</a></Link>
      <Link to="/Edit"><a class="btn">Update</a></Link>
      <Link to="/Delete"><a  class="btn">Delete</a></Link>


    </div>
  </section>
</div>
<div id="gallery">
  <section class="destinations">
    <h3 class="title">Courses Offered</h3>
    <p>Explore a diverse array of courses tailored to fuel your passion and enhance your skills. From cutting-edge tech to timeless humanities, our offerings provide a rich tapestry of knowledge, empowering you to shape your educational path with precision and purpose</p>
    <hr/>

    <ul class="grid">
      <li class="small image-1"></li>
      <li class="large image-2"></li>
      <li class="large image-3"></li>
      <li class="small image-4"></li>
      <li class="small image-5"></li>
      <li class="large image-6"></li>
      <li class="large image-7"></li>
      <li class="small image-8"></li>
    </ul>
  </section>
  </div>
  <div id="about">

  <section class="packages">
    <h3 class="title">About Us</h3>
    <p>At QUICK ENROLL📝,we're on a mission to streamline your learning experience. From effortless course registration to unlocking your potential, we're here to make education accessible and enjoyable.</p>
    <hr/>

    <ul class="grid">
      <li>
        <i class="fa fa-compass fa-4x"></i>
        <h4>User-Friendly Interface</h4>
        <p>Discover the ease of navigating through our intuitive platform, designed to make course registration a simple and enjoyable process.</p>
      </li>
      <li>
        <i class="fa fa-camera-retro fa-4x"></i>
        <h4>Diverse Course Catalog</h4>
        <p>Explore a vast array of courses spanning various subjects, ensuring there's something for everyone, whether you're a student, professional, or lifelong learner.</p>
      </li>
      <li>
        <i class="fa fa-bicycle fa-4x"></i>
        <h4>Effortless Enrollment</h4>
        <p>With just a few clicks, enroll in your desired courses hassle-free, allowing you to focus more on learning and less on administrative processes</p>
      </li>
      <li>
        <i class="fa fa-flag-checkered fa-4x"></i>
        <h4>24/7 Support</h4>
        <p>Experience peace of mind with our dedicated support team available around the clock, ready to assist you at every step of your educational journey</p>
      </li>
    </ul>
  </section>
</div>
<div id="feed">
  <section class="testimonials">
    <h3 class="title">User Feebacks</h3>
    <hr/>
    <p class="quote">"Navigating through this online course registration platform is a breeze! The process is so smooth, and I appreciate the variety of courses available. It has truly simplified my learning experience."</p>
    <p class="author">- Mary Jane</p>
    <p class="quote">"I'm thoroughly impressed with the simplicity of this registration app. Enrolling in courses is quick, and the diverse range of subjects ensures there's something for everyone. The responsive support team adds an extra layer of convenience."</p>
    <p class="author">- Sharon Rejoice</p>
    <p class="quote">"This platform has exceeded my expectations. Registering for courses is effortless, and the user-friendly interface makes the learning process enjoyable. The diverse course options have allowed me to explore and enhance my skills seamlessly."</p>
    <p class="author">- Luis Paul</p>
  </section>
  </div>
  <div id="contact">
  <section class="contact">
    <h3 class="title">Contact Us</h3>
    <p>Got questions or feedback? Contact us freely! Stay in the loop about upcoming events and mixers by signing up for our mailing list. No spam, we promise—except for the good kind that keeps your energy up while you have a blast learning with friends. Join us on this educational journey and reach out anytime!"</p>
    <hr/>
    <form>
      <input type="text" placeholder="Enter your query"/>
      <a  class="btn">Send</a>
    </form>
  </section>
  </div>
    </div>
  )
}

export default Front