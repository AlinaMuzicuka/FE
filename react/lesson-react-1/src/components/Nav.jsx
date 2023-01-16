import React, { Component } from "react";
import Header from "./Header";
import "../style/style.css"

class Nav extends Component {
  state = {
    linkHome: "Home",
    linkAbout: "About",
    linkContact: "Contact",
    linkFaq: "FAQ",
  };

  render() {
    return (
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <div className="d-flex">
            <Header />
            <div className="mobile_menu">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active text-info-emphasis fst-italic"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  {this.state.linkHome}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link  text-info-emphasis fst-italic"
                  id="about-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#about-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="about-tab-pane"
                  aria-selected="false"
                >
                  {this.state.linkAbout}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link  text-info-emphasis fst-italic"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  {this.state.linkContact}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link  text-info-emphasis fst-italic"
                  id="faq-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#faq-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="faq-tab-pane"
                  aria-selected="false"
                >
                  {this.state.linkFaq}
                </button>
              </li>
            </ul>
            </div>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 fst-italic mobile_menu"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-light text-info-emphasis fst-italic mobile_menu"
              type="submit"
            >
              Search
            </button>
          </form>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="lightblue"
            className="bi bi-list mobile_icon burger_position"
            viewBox="0 0 16 16"
            onClick={burgerMenu}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="lightblue"
            className="bi bi-search-heart mobile_icon"
            viewBox="0 0 16 16"
            onClick={searchIn}
          >
            <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
            <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
          </svg>
        </div>
      </nav>
    );
  }
}

export default Nav;

function searchIn() {
  document.querySelector("svg.bi-list").classList.toggle("d-none");
  document.querySelector("input.form-control").classList.toggle("d-block");
  document.querySelector("button.btn-light").classList.toggle("d-block");
}

function burgerMenu () {
  document.querySelector("svg.bi-search-heart").classList.toggle("d-none");
  document.querySelector("svg.bi-list").classList.toggle("burger_position_active");
  document.querySelector("div.mobile_menu").classList.toggle("d-block");
}