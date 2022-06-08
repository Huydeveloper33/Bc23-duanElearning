import React from "react";


export default function CourseList() {
  return (
    <header classname="container-fluid myNavBar">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="col-md-6">
         <div className="row">
         <a className="navbar-brand" href="#">
            <img src="../../assets/image/logo192.png" alt="logo" />
          </a>
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
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i class="fa fa-search"></i>
                  </span>
                </div>
               
              </div>
            </form>
          </div>
         </div>
        </div>
        <div className="col-md-6"></div>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
