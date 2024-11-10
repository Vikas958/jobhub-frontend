import React from "react";
import home2 from "../assets/img4.jpg";
import { useEffect } from "react";

const Home = () => {
  
  return (
    <div>
      <div className="intro font-medium">
        <main>
          <h1 className="font-bold" style={{ textAlign: "center" }}>
            Chase your passion and land your{" "}
            <span className="">ideal job.</span>
          </h1>
          {/* <p>solution all to your problems</p> 
          <h1>Easily find great Talent</h1> */}
          <p className="font-medium">
            Welcome to JobHub, where opportunities converge and dreams take
            flight. Our platform serves as a dynamic bridge, connecting talented
            job seekers with esteemed recruiters.
            {/* With intuitive search features and curated job listings, we empower individuals to navigate their career paths with confidence. Join us today and embark on a journey towards professional success and fulfillment. */}
          </p>
        </main>
      </div>
      <div className="home2 font-regular container">
        <img src={home2} alt="" />
        <div style={{ flex: 1 }}>
          <p>
            Streamline your recruitment process with our all-in-one Recruitment
            Dashboard, where every job position, applicant, and scheduled
            activity is seamlessly managed. Gain valuable insights with clear
            and concise stats for each job posting, ensuring efficient and
            informed decision-making.
          </p>
        </div>
      </div>
      <div className="home3 font-medium" id="About">
        <div>
          <h1>
            What is <span className="font-color">JobHub?</span>
          </h1>

          <p className="font-regular" style={{ textAlign: "center" }}>
            At <strong>JobHub</strong>, we believe in connecting talent with
            opportunity. Our platform serves as a dynamic hub where job seekers
            and recruiters converge to fulfill their professional aspirations.
          </p>
          <br />
          <h3>
            Our <span className="font-color">Mission</span>
          </h3>

          <p className="font-regular" style={{ textAlign: "center" }}>
            Empowering individuals to advance their careers while assisting
            companies in finding the perfect fit for their teams is at the heart
            of our mission. We strive to make the job search process seamless,
            efficient, and rewarding for all parties involved.
          </p>
        </div>
      </div>

      {/* <div>
        
      </div> */}
      {/* <div>
        <p>Embark on a transformative journey towards your dream career with our meticulously crafted Bootcamps tailored to align with industry demands. Gain practical skills, valuable insights, and hands-on experience under expert guidance, empowering you to excel in your chosen field and reach new heights of professional success."</p>
      </div> */}
      {/* <div>
        <h3>JobHub in media</h3>
        <div className='cards'>
            <div className='card'>
                <img src="https://www.odinschool.com/hs-fs/hubfs/Zee_News_200X80.webp?width=225&height=75&name=Zee_News_200X80.webp" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio illum dicta iste nulla eius laborum sed exercitationem cum ipsa impedit sint ex quia iure necessitatibus, odio aspernatur? Officiis, impedit ratione!</p>
            </div>
            <div className='card'>
                <img src="https://www.odinschool.com/hs-fs/hubfs/Hans_india_200X80.webp?width=225&height=75&name=Hans_india_200X80.webp" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio illum dicta iste nulla eius laborum sed exercitationem cum ipsa impedit sint ex quia iure necessitatibus, odio aspernatur? Officiis, impedit ratione!</p>
            </div>
            <div className='card'>
                <img src="https://www.odinschool.com/hs-fs/hubfs/Bhaskarhindi_200X80.webp?width=225&height=75&name=Bhaskarhindi_200X80.webp" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio illum dicta iste nulla eius laborum sed exercitationem cum ipsa impedit sint ex quia iure necessitatibus, odio aspernatur? Officiis, impedit ratione!</p> */}
      {/* </div> */}
      {/* // </div> */}
      {/* // </div>  */}
      {/* // </div> */}
    </div>
  );
};

export default Home;

