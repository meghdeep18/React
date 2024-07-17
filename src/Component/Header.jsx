import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'; 


function Header() {

    const redirect = useNavigate();

    const logout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        toast.success('Logout Successfull !');
        redirect('/');
    }
    return (
        <div>
          
            {/* Spinner End */}
            {/* Header Start */}
            <div className="container-fluid bg-dark px-0">
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                        </a>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-0 bg-white d-none d-lg-flex">
                            <div className="col-lg-7 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <i className="fa fa-envelope text-primary me-2" />
                                    {(() => {
                                        if (localStorage.getItem('email')) {
                                            return (
                                                <p className="mb-0 ms-3">{localStorage.getItem('email')}</p>
                                            )
                                        }
                                    })()}
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2">
                                    <i className="fa fa-phone-alt text-primary me-2" />
                                     {(() => {
                                        if (localStorage.getItem('mobile')) 
                                        {
                                            return (
                                                <p className="mb-0 ms-3">+{localStorage.getItem('mobile')}</p>
                                            )
                                        }
                                    })()}
                                    {/* <p className="mb-0">+012 345 6789</p> */}
                                    {(() => {
                                        if (localStorage.getItem('id')) {
                                            return (
                                                <p className="mb-0 ms-3"> Hi ... {localStorage.getItem('name')}</p>
                                            )
                                        }
                                    })()}
                                </div>
                            </div>
                            <div className="col-lg-5 px-5 text-end">
                                <div className="d-inline-flex align-items-center py-2">
                                    <a className="me-3" href><i className="fab fa-facebook-f" /></a>
                                    <a className="me-3" href><i className="fab fa-twitter" /></a>
                                    <a className="me-3" href><i className="fab fa-linkedin-in" /></a>
                                    <a className="me-3" href><i className="fab fa-instagram" /></a>
                                    <a className href><i className="fab fa-youtube" /></a>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                            <Link to="/" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                            </Link>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                    <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                                    <NavLink to="/room" className="nav-item nav-link">Rooms</NavLink>
                                    <div className="nav-item dropdown">
                                        <NavLink to="#" className="nav-link dropdown-toggle" >Pages</NavLink>
                                        <div className="dropdown-menu m-0 ">
                                            <NavLink to="/booking" className="dropdown-item">Booking</NavLink>
                                            <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                            <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                        </div>
                                    </div>
                                    {(() => {
                                        if (localStorage.getItem('id')) {
                                            return (
                                
                                                <div className="nav-item dropdown">
                                                    <Link to="#" className="nav-link dropdown-toggle" >My Account</Link>
                                                    <div className="dropdown-menu rounded-0 m-0">
                                                        <Link to="/profile" className="dropdown-item">Profile</Link>
                                                        
                                                    </div>
                                                </div>
                                            
                                            )
                                        }
                                    })()}
                                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                </div>
                                {(() => {
                                    if (localStorage.getItem('id')) {
                                        return (
                                            <a href="javascript:void(0)" onClick={logout} className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Logout<i className="fa fa-arrow-right ms-3" /></a>
                                        )
                                    }
                                    else {
                                        return (
                                            <Link to="/login" className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Login<i className="fa fa-arrow-right ms-3" /></Link>
                                        )
                                    }
                                })()}

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </div>

    )
}

export default Header