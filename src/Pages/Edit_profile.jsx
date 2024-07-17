import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link, useParams ,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

function Edit_profile() {

  const redirect=useNavigate();
  useEffect(()=>{
    if(!(localStorage.getItem('id')))
    {
      redirect('/');
    }
    fetch();
    
  },[]);

  const {id}=useParams();
  const fetch=async()=>{
    const res=await axios.get(`http://localhost:3000/user/${id}`);
    setFormvalue({...formvalue,name:res.data.name,email:res.data.email,password:res.data.password,mobile:res.data.mobile})
  }

 const [formvalue,setFormvalue]=useState({
    name:"",
    email:"",
    password:"",
    mobile:"",
    Image:""
 })

 const onchange=(e)=>{
  setFormvalue({...formvalue,[e.target.name]:e.target.value});
  console.log(formvalue);
 }

const validation=()=>{
  var result=true;
  if(formvalue.name=="" || formvalue.name==null)
  {
    result=false;
    toast.error('Name Field is required !');
    return false;
  }
  if(formvalue.email=="" || formvalue.email==null)
  {
    result=false;
    toast.error('Email Field is required !');
    return false;
  }
  if(formvalue.password=="" || formvalue.password==null)
  {
    result=false;
    toast.error('Password Field is required !');
    return false;
  }
  if(formvalue.mobile=="" || formvalue.mobile==null)
  {
    result=false;
    toast.error('Mobile Field is required !');
    return false;
  }
  return result;
}


const onsubmit=async(e)=>{
    e.preventDefault();
    if(validation())
    {
      const res=await axios.patch(`http://localhost:3000/user/${id}`,formvalue);
      //console.log(res);
      if(res.status===200)
      {
        toast.success('Update Success ');
        setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""});
        localStorage.setItem('name',formvalue.name);
        redirect('/profile');
      }
    }
}
  return (
    <div>
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/carousel-1.jpg)' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Edit Profile</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">My Account</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Edit Profile</li>
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
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Edit Profile</h6>
            <h1 className="mb-5"><span className="text-primary text-uppercase">Edit Profile</span></h1>
          </div>
          <div className="row g-4">
            
            
            <div className="col-md-12">
              <div className="wow fadeInUp p-5" data-wow-delay="0.2s">
                <form>
                <div className="col-md-12">
                      <div className="form-floating">
                        <input type="file" value={formvalue.Image} onChange={onchange} className="form-control" name="Image" id="Image" placeholder=" upload Image" />
                        <label htmlFor="Image">upload image</label>
                      </div>
                    </div>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" value={formvalue.name} onChange={onchange} className="form-control" name="name" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="email" value={formvalue.email} onChange={onchange} className="form-control" name="email" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="password" value={formvalue.password} onChange={onchange} className="form-control" name="password" id="password" placeholder="Password" />
                        <label htmlFor="subject">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="number" value={formvalue.mobile} onChange={onchange} className="form-control" name="mobile" id="password" placeholder="Mobile" />
                        <label htmlFor="subject">Mobile</label>
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <button onClick={onsubmit} className="btn btn-primary w-100 py-3"   type="submit">edit_profile</button>
                      <br />
                      
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Edit_profile