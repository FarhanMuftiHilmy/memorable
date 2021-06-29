import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {

  return (
    <>
      <div>
        <div class="logo">
          <i class="fas fa-brain" aria-hidden="true"><span>Memorable</span></i>
        </div>
        <Link class="menu-toggle rounded text-white" to="/signin">
          <i class="fas fa-sign-in-alt"></i>
        </Link>
        <section id="Banner" class="content-section">
          <div class="container content-wrap text-center">
            <h1>Memorable</h1>
            <h3>
              <em>Save your life moment, Collect your memories</em>
            </h3>
            {/* <a class="btn btn-primary btn-xl smooth-scroll" href="#About">Find Out More</a> */}
            <a class="text-white" href="#About">
              <i class="fas fa-chevron-down"></i>
            </a>
          </div>
          <div class="overlay"></div>
        </section>

        <section id="About" class="content-section">
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-12">
                <div class="block-heading">
                  <h2>About Us</h2>
                </div>
                <a class="text-white smooth-scroll" href="#About">
                  <i class="fas fa-chevron-down"></i>
                </a>
                <p class="lead">Memorable is a place to store your most valuable memories throughout your life</p>
              </div>
            </div>
          </div>
        </section>

        <section id="Services" class="content-section text-center">
          <div class="container">
            <div class="block-heading">
              <h2>Features</h2>
              <p>Here are several cool memorable features</p>
            </div>
            <div class="row">
              <Link class="col-md-3 col-sm-6" to="/gallery" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <div class="service-box">
                  <div class="service-icon yellow">
                    <div class="front-content">
                      <i class="fa fa-globe" aria-hidden="true"></i>
                      <h3>Gallery</h3>
                    </div>
                  </div>
                  <div class="service-content">
                    <h3>Gallery</h3>
                    <p>Store your memorable photos</p>
                  </div>
                </div>
              </Link>
              <div class="col-md-3 col-sm-6">
                <div class="service-box ">
                  <div class="service-icon red">
                    <div class="front-content">
                      <i class="fa fa-male" aria-hidden="true"></i>
                      <h3>Quote</h3>
                    </div>
                  </div>
                  <div class="service-content">
                    <h3>Quote</h3>
                    <p>Random Generated API from Quote API</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="service-box">
                  <div class="service-icon orange">
                    <div class="front-content">
                      <i class="fa fa-suitcase"></i>
                      <h3>Journal</h3>
                    </div>
                  </div>
                  <div class="service-content">
                    <h3>Journal</h3>
                    <p>Comming Soon</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="service-box">
                  <div class="service-icon grey">
                    <div class="front-content">
                      <i class="fa fa-users"></i>
                      <h3>People</h3>
                    </div>
                  </div>
                  <div class="service-content">
                    <h3>People</h3>
                    <p>Comming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer text-center">
          <div class="container">
            <h2>Contact Us</h2>
            <br />
            <ul class="list-inline">
              <li class="list-inline-item">
                <a class="social-link rounded-circle text-white mr-3" href="https://www.youtube.com/channel/UCFdlhdZwWeOdVWoqr6p185g">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link rounded-circle text-white mr-3" href="https://github.com/FarhanMuftiHilmy">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link rounded-circle text-white" href="https://www.linkedin.com/in/farhan-mufti-hilmy-17bba1195/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <p class="text-muted small mb-0">Copyright © Hilmy's Website 2021</p>

          </div>
        </footer>

      </div>

    </>
  )
}
