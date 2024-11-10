import React from "react";
import { BiTime } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Jobs = () => {
  return (
    <>
      <div className="responsive-search">
        <h3 className="font-bold">Search Jobs</h3>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search job role" />
        </div>
        <div className="search-container">
          <BiSolidCategoryAlt className="search-icon" />
          <input type="text" placeholder="Search category" />
        </div>
        <div className="search-container">
          <FaLocationDot className="search-icon" />
          <input type="text" placeholder="Search place" />
        </div>
        <button>Search</button>
      </div>


      <div className="search">
        <div className="container-fluid searches d-flex">
          <div className="row d-flex">
            <div className="col">
              <form className="d-flex" role="search">
                <div className="search-container">
                  <FaSearch className="search-icon" />
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search job role"
                    aria-label="Search"
                  />

                </div>
                {/* <button className="btn btn-primary" type="submit">
                  Search
                </button> */}
              </form>
            </div>
            <div className="col">
              <form className="d-flex" role="search">
                <div className="search-container">
                  <BiSolidCategoryAlt className="search-icon" />
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search category"
                    aria-label="Search"
                  />
                </div>
                {/* <button className="btn btn-primary" type="submit">
                  Search
                </button> */}
              </form>
            </div>
            <div className="col">
              <form className="d-flex" role="search">
                <div className="search-container">
                  <FaLocationDot className="search-icon" />
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search location"
                    aria-label="Search"
                  />
                </div>
                {/* <button className="btn btn-primary" type="submit">
                  Search
                </button> */}
              </form>
            </div>
            <div className="col">
              <button className="btn btn-primary font-medium" type="submit">
                Search
              </button>

            </div>
          </div>
        </div>
      </div>
      <div className="jobs">
        <div className="management">
          <div className="font-bold">
            <h3>Management</h3>
          </div>
          <div className="cards">
            <div className="card">
              <div className="jobrole">
                <p className="font-medium">
                  <strong>Direct Sales Team Leader</strong>
                </p>
                <div className="now font-regular">
                  <BiTime />
                  <p>now</p>
                </div>
              </div>
              <p className="font-medium">Hyderabad</p>
              <hr />
              <p className="font-regular">
              Lead sales team to success through strategic planning and mentorship, driving revenue growth and fostering client relationships.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="jobrole">
                  <p className="font-medium">
                    <strong>Cheif technical Officer</strong>
                  </p>
                  <div className="now">
                    <BiTime />
                    <p>now</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">Chennai</p>
              <hr />
              <p className="font-regular">
              Spearhead technological innovation and strategy, ensuring alignment with business objectives for sustainable growth.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="jobrole">
                  <p className="font-medium">
                    <strong>Office Manager</strong>
                  </p>
                  <div className="now">
                    <BiTime />
                    <p>now</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">Banglore</p>
              <hr />
              <p className="font-regular">
              Efficiently oversee daily operations, optimizing productivity and fostering a cohesive workplace environment.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="jobs">
        <div className="management">
          <div className="font-bold">
            <h3>Marketing</h3>
          </div>
          <div className="cards">
            <div className="card">
              <div>
                <div className="jobrole">
                  <p className="font-medium">
                    <strong>Community Manager</strong>
                  </p>
                  <div className="now">
                    <BiTime />
                    <p>now</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">Hyderabad</p>
              <hr />
              <p className="font-regular">
              Cultivate and engage online communities, fostering relationships and driving growth through effective communication and strategic initiatives.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="jobrole">
                  <p className="font-medium">
                    <strong>Graphic Designer</strong>
                  </p>
                  <div className="now">
                    <BiTime />
                    <p>now</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">Chennai</p>
              <hr />
              <p className="font-regular">
              Transform ideas into visually compelling designs, conveying messages effectively through creative concepts and skilled execution.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="jobrole">
                  <p className="font-medium">
                    <strong>Content Creator</strong>
                  </p>
                  <div className="now">
                    <BiTime />
                    <p>now</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">Banglore</p>
              <hr />
              <p className="font-regular">
              Craft engaging and impactful content across various platforms, resonating with audiences and driving meaningful engagement.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="jobs">
        <div className="management">
          <div className="font-bold">
            <h3>Research and Develpment</h3>
          </div>
          <div className="cards">
            <div className="card">
              <div>
                <div className="jobrole">
                  <p className="font-medium">
                    <strong>FullStack Developer</strong>
                  </p>
                  <div className="now">
                    <BiTime />
                    <p>now</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">Hyderabad</p>
              <hr />
              <p className="font-regular">
              Proficiently develop end-to-end software solutions, bridging front-end and back-end technologies to deliver robust and scalable applications.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="jobrole">
                  <p className="font-medium">
                    <strong>UI/UX Designer</strong>
                  </p>
                  <div className="now">
                    <img src="<CgAlarm />" alt="" />
                    <BiTime />
                    <p>now</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">Chennai</p>
              <hr />
              <p className="font-regular">
              Enhance user experiences through intuitive interface design and empathetic user-centered approaches, optimizing usability and satisfaction.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="jobrole">
                  <p className="font-medium">
                    <strong>Data Scientist</strong>
                  </p>
                  <div className="now">
                    <img src="<CgAlarm />" alt="" />
                    <BiTime />
                    <p>now</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">Banglore</p>
              <hr />
              <p className="font-regular">
              Analyze complex datasets to extract valuable insights and drive data-driven decision-making, leveraging statistical and machine learning techniques.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="jobs">
        <div className="management">
          <div className="font-bold">
            <h3>Personal/Household</h3>
          </div>
          <div className="cards">
            <div className="card">
              <div>
                <div className="jobrole">
                  <p className="font-medium">
                    <strong>Cook</strong>
                  </p>
                  <div className="now">
                    <img src="<CgAlarm />" alt="" />
                    <BiTime />
                    <p>now</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">Hyderabad</p>
              <hr />
              <p className="font-regular">
              Masterfully craft delectable dishes, tantalizing taste buds with culinary expertise and passion for creating flavorful experiences.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="jobrole">
                  <p>
                    <strong>Driver</strong>
                  </p>
                  <div className="now">
                    <img src="<CgAlarm />" alt="" />
                    <BiTime />
                    <p>now</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">Chennai</p>
              <hr />
              <p className="font-regular">
              Safely navigate roads while delivering efficient transportation services, ensuring passengers and cargo reach destinations securely and on time.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="jobrole">
                  <p className="font-medium">
                    <strong>Home Maid</strong>
                  </p>
                  <div className="now">
                    <img src="<CgAlarm />" alt="" />
                    <BiTime />
                    <p>now</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">Banglore</p>
              <hr />
              <p className="font-regular">
              Diligently maintain cleanliness and organization in households, providing essential support to families for a comfortable living environment.
              </p>
              <div>
                <button className="btn btn-primary font-medium" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
