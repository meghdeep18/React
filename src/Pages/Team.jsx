import React from 'react'

function Team() {
  return (
    <div>
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/carousel-1.jpg)' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Our Team</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Our Team</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Booking Start */}
      <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="bg-white shadow" style={{ padding: 35 }}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-3">
                    <div className="date" id="date1" data-target-input="nearest">
                      <input type="text" className="form-control datetimepicker-input" placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="date" id="date2" data-target-input="nearest">
                      <input type="text" className="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option selected>Adult</option>
                      <option value={1}>Adult 1</option>
                      <option value={2}>Adult 2</option>
                      <option value={3}>Adult 3</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option selected>Child</option>
                      <option value={1}>Child 1</option>
                      <option value={2}>Child 2</option>
                      <option value={3}>Child 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Staffs</span></h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-1.jpg" alt />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-2.jpg" alt />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-3.jpg" alt />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-4.jpg" alt />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-2.jpg" alt />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-3.jpg" alt />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-4.jpg" alt />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-1.jpg" alt />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Team