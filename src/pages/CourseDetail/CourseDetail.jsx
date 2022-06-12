import React from "react";
import "./CourseDetail.scss";

export default function CourseDetail() {
  return (
    <div className="course-detail">
      <div className="course-detail-header">
        <div className="linking-page">
          <p>Development</p>
          <i class="fa fa-arrow-right"></i>
          <p>Web Development</p>
          <i class="fa fa-arrow-right"></i>
          <p>Tailwind CSS</p>
        </div>
        <div className="detail-header-content">
          <p>Tailwind CSS From Scratch | Learning By Building Projects</p>
          <span>
            Build great looking layouts fast and effeciently using Tailwind CSS
            utility classes
          </span>
        </div>
        <div className="rating">
          <div className="rating-content">
            <div className="rating-stars">
              <div>
                <p>
                  Best seller 4,9
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </p>
              </div>
            </div>
            <a href="">(133 ratings)</a>
            <span>1,543 students</span>
          </div>
          <p className="created-by">
            Created by <a href="">Brad Traversy</a>
          </p>
          <div className="update">
            <p>
              <i class="fa fa-info-circle"></i>
              Latest Update 5/2022
            </p>
          </div>
          <div className="subtitles">
            <i class="fa fa-globe"></i>
            <p>English</p>
            <i class="fa fa-closed-captioning"></i>
            <p>English [Auto]</p>
          </div>
        </div>
      </div>
      <div className="course-detail container">
        <div className="course-describe">
          <h1>What you'll learn</h1>

          <ul>
            <li>
              <div className="describe-item">
                <i class="fa fa-check"></i>
                <p>Learn to create edit layouts super fast</p>
              </div>
            </li>
            <li>
              <div className="describe-item">
                <i class="fa fa-check"></i>
                <p>Build 5 mini-projects and 6 website projects</p>
              </div>
            </li>
            <li>
              <div className="describe-item">
                <i class="fa fa-check"></i>
                <p>Configure your styles to create custom layouts</p>
              </div>
            </li>
            <li>
              <div className="describe-item">
                <i class="fa fa-check"></i>
                <p>Learn the Tailwind utility classes using a code sanbox</p>
              </div>
            </li>
            <li>
              <div className="describe-item">
                <i class="fa fa-check"></i>
                <p>
                  Learn how to set up a dev environment using the Tailwind CLI
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="course-content">
          <h1>Course content</h1>
          <div className="total-sections">
            <span>11 sections 83 lectures 12h 32m total length</span>
            <button>
              <p>Expand all sections</p>
            </button>
            </div>
            <div className="course-sections">
              <div className="sections-header">
              <div className="icon-sections-header">
              <i class="fa fa-arrow-down"></i>
              </div>
              <h1>Introduction</h1>
              </div>
              <span>6 lectures 26min</span>
            </div>
            <div className="course-sections">
              <div className="sections-header">
              <div className="icon-sections-header">
              <i class="fa fa-arrow-down"></i>
              </div>
              <h1>Tailwind Fundamentals-Part 1</h1>
              </div>
              <span>9 lectures 1hr15min</span>
            </div>
            <div className="course-sections">
              <div className="sections-header">
              <div className="icon-sections-header">
              <i class="fa fa-arrow-down"></i>
              </div>
              <h1>Tailwind Fundamentals-Part 2</h1>
              </div>
              <span>9 lectures 1hr19min</span>
            </div>
            <div className="course-sections">
              <div className="sections-header">
              <div className="icon-sections-header">
              <i class="fa fa-arrow-down"></i>
              </div>
              <h1>A Better Development Environment</h1>
              </div>
              <span>3 lectures 35min</span>
            </div>
            <div className="course-sections">
              <div className="sections-header">
              <div className="icon-sections-header">
              <i class="fa fa-arrow-down"></i>
              </div>
              <h1>Tailwind CSS Mini-Projects</h1>
              </div>
              <span>6 lectures 1hr39min</span>
            </div>
            <div className="course-sections">
              <div className="sections-header">
              <div className="icon-sections-header">
              <i class="fa fa-arrow-down"></i>
              </div>
              <h1>Project 1-Clipboard Website</h1>
              </div>
              <span>8 lectures 1hr12min</span>
            </div>
            <div className="course-sections">
              <div className="sections-header">
              <div className="icon-sections-header">
              <i class="fa fa-arrow-down"></i>
              </div>
              <h1>Project 2-Loopstudios Website</h1>
              </div>
              <span>9 lectures 1hr24min</span>
            </div>
            <div className="course-sections">
              <div className="sections-header">
              <div className="icon-sections-header">
              <i class="fa fa-arrow-down"></i>
              </div>
              <h1>Project 3-Shortly Website</h1>
              </div>
              <span>9 lectures 1hr24min</span>
            </div>
            <div className="course-sections">
              <div className="sections-header">
              <div className="icon-sections-header">
              <i class="fa fa-arrow-down"></i>
              </div>
              <h1>Project 4-Testimonial Grid Project</h1>
              </div>
              <span>6 lectures 28min</span>
            </div>
            <div className="course-sections">
              <div className="sections-header">
              <div className="icon-sections-header">
              <i class="fa fa-arrow-down"></i>
              </div>
              <h1>Project 5-Fylo Website With Color Picker</h1>
              </div>
              <span>8 lectures 1hr13min</span>
            </div>
            <div className="course-sections">
              <div className="sections-header">
              <div className="icon-sections-header">
              <i class="fa fa-arrow-down"></i>
              </div>
              <h1>Project 6-Bookmark Manager Website   </h1>
              </div>
              <span>10 lectures 1hr49min</span>
            </div>
            <button>
              <p>1 more section</p>
            </button>
        </div>
      </div>
    </div>
  );
}
