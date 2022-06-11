import React from "react";
import CourseDetail from "../CourseDetail/CourseDetail";
import './CourseList.scss'

export default function CourseList() {
  return (
    <header classname="container-fluid myNavBar">
      <div className="smart-bar">
        <div className="smart-bar-content">
          <div className="smart-bar-span">
          <div >
            <span>Future-ready skilss on your schedule | Learn why Udemy is trusted by 10.5K+ companies around the world</span>
          </div>
          </div>
          
        </div>
        <div className="smart-bar-button">
       <button><i class="fa fa-times"></i></button>
       </div>
       
      </div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="col-md-6-header">
          <div className="row">
           <div className="img">
           <a className="navbar-brand" href="#">
              <img src="../../assets/image/logo192.png" alt="logo" />
            </a>
           </div>
            <div className="categories">
              <i class="fa fa-table"></i>
              Categories
            </div>
            <div className="input-search">
              <form action="">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search For Courses"
                  />
                 
                </div>
              </form>
            </div>
            <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
          </div>
        </div>
      </nav>

      <footer className="footer">
       
        <div className="row">
          <ul>
            <li>
              <a href="">Development</a>
              <a href="">Web Development</a>
              <a href="">Data Science</a>
              <a href="">Mobile Development</a>
              <a href="">Programming Languages</a>
              <a href="">Game Development</a>
              <a href="">Database design and Development</a>
              <a href="">Software Testing</a>
              <a href="">Software Engineering</a>
              <a href=""> Software Development Tools</a>
              <a href="">No-code Development</a>
            </li>
          </ul>
        </div>

        <div className="container">
          <h1>Web Development Courses</h1>
          <h2>Courses to get you started</h2>

         <div className="course-detail-card">
         <a href="">Most popular</a>
          <a href="">New</a>
          <a href="">Trending</a>
         </div>

          {/* <video src="https://www.udemy.com/course/become-a-certified-web-developer/"></video> */}
          <div className="row-course-option">
            <div className="col-md-6-option">
              <div className="course-option">
              <div>
                <i class="fa fa-play"></i>
                Learn in-demand skils with over 185,000 video courses
              </div>
              <div>
                <i class="fa fa-star"></i>
                Choose courses taught by real-world expert
              </div>
              <div>
                <i class="fa fa-star"></i>
                Learn at your own pace,with lifetime access on mobile and
                desktop
              </div>
            </div>
              </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>Featured course</p>
              <CourseDetail />
            </div>
          </div>

          <div className="card-topics">
           <div className="row-card-topics">
           <a href="">Web Development</a>
            <a href="">React</a>
            <a href="">Angular</a>
            <a href="">PHP</a>
            <a href="">Vue js</a>
            <a href="">Javascript</a>
            <a href="">Css</a>
            <a href="">Node.js</a>
            <a href="">HTML5</a>
            <a href="">Django</a>
           </div>
          </div>

          <div className="instructors-popular">
            <h1>Popular Instructor</h1>
          </div>

          <div className="all-courses-detail">
            <h1>All Web Development Courses</h1>
            <div className="refund-notice">
              <div className="alert--banner">
                <i class="fa fa-info-circle"></i>
                <p>Not sure?All courses have a 30-day-money-back guarantee</p>
              </div>
            </div>

            <div className="course-directory-container">
              <button className="filter">
                <i class="fa fa-filter"></i>
                <span>Filter</span>
              </button>
              <button className="sortby">
              <span>Sort By</span>
              <i class="fa fa-arrow-down"></i>
               
              </button>
            </div>
             <div className="filter-sidebar">
              <form  className="filter-form">
                <div>
                  <button>
                  <h3>Ratings</h3>
                  <i class="fa fa-arrow-down"></i>
                  </button>
                </div>
                <div>
                  <button>
                  <h3>Video Duration</h3>
                  <i class="fa fa-arrow-down"></i>
                  </button>
                </div>
                <div>
                  <button>
                  <h3>Topic</h3>
                  <i class="fa fa-arrow-down"></i>
                  </button>
                </div>
                <div>
                  <button>
                  <h3>Subcategory</h3>
                  <i class="fa fa-arrow-down"></i>
                  </button>
                </div>
                <div>
                  <button>
                  <h3>Level</h3>
                  <i class="fa fa-arrow-down"></i>
                  </button>
                </div>
                <div>
                  <button>
                  <h3>Language</h3>
                  <i class="fa fa-arrow-down"></i>
                  </button>
                </div>
                <div>
                  <button>
                  <h3>Price</h3>
                  <i class="fa fa-arrow-down"></i>
                  </button>
                </div>
                <div>
                  <button>
                  <h3>Features</h3>
                  <i class="fa fa-arrow-down"></i>
                  </button>
                </div>
                <div>
                  <button>
                  <h3>Subtitles</h3>
                  <i class="fa fa-arrow-down"></i>
                  </button>
                </div>
              </form>
             </div>

          </div>
          
        </div>

        <div className="links-and-language-selector">
          <ul>
            <li>Udemy Business</li>
            <li>Teach on Udemy</li>
            <li>Get the App</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>Investors</li>
          </ul>
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie settings</li>
            <li>Site map</li>
            <li>Accessibility Statement</li>
          </ul>
          <button type="button">
            <i class="fa fa-globe"></i>
            <span>English</span>
          </button>
        </div>

        <div className="logo-and-copyright">
          <div className="logo-container">
            <a href="/homepage">
              <img src="../../assets/image/logoUdemy-2.png" alt="" />
            </a>
          </div>
          <div
            class="copyright-container udlite-text-xs"
            data-purpose="footer-copyright"
          >
            © 2022 Udemy, Inc.
          </div>
        </div>
        <span>
          Top companies choose <a href="">UdemyBusiness</a> to build in-demand
          career skills.
        </span>
        <div className="image">
          <img src="../../assets/image/eventbite.png" alt="" />
          <img src="../../assets/image/nasdaq.jpg" alt="" />
          <img src="../../assets/image/netapp.jpg" alt="" />
          <img src="../../assets/image/Volkswagen_logo.png" alt="" />
        </div>
      </footer>
    </header>
  );
}
