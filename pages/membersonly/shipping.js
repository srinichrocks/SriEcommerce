import MemNavbar from "./mem-navbar";
import { useUser } from '@auth0/nextjs-auth0'
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";

export default function Shipping() {
    const [userName, setUserName] = useState("")
    const [shipping, setShipping] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const {user, error, isLoading} = useUser();
    console.log(user)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName, email, shipping, number)
    }
    
    return (
        //need to add unique id to each of the different clothing

        <div className="text-center">
            <MemNavbar/>
            <p className="h1 mt-2">Shipping Address</p>
            <hr/>
            <div>
            <form className = "contact-form" id = "kaka">
        <div className='form-group row'>
          <div className='col-1'/>
          <div className='col-lg-10'>
          <label className='h5 mt-4 text-white'>Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" onChange={(e)=>{setUserName(e.target.value)}}/>
          </div>
          <div className='col-1'/>
        </div>
        <div className='form-group row'>
          <div className='col-1'/>
          <div className='col-lg-10'>
          <label className='h5 mt-2 text-white'>Shipping Info</label>
          <input type="email" className="form-control" id="number" placeholder="Phone Number" onChange={(e)=>{setNumber(e.target.value)}}/>
          </div>
          <div className='col-1'/>
        </div>
        <div className='form-group row'>
          <div className='col-1'/>
          <div className='col-lg-10'>
          <label className='h5 mt-2 text-white'>Email</label>
          <input type="text" className="form-control" id="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className='col-1'/>
        </div>
        <div className='form-group row'>
          <div className='col-1'/>
          <div className='col-lg-10'>
          <label className='h5 mt-2 text-white'>Number</label>
          <textarea cols = "30" rows = "10" type="text" className="form-control" id="shipping" placeholder="Shipping Address" onChange={(e)=>{setShipping(e.target.value)}}/>
          </div>
          <div className='col-1'/>
        </div>
          <button type="submit" className="btn btn-light mb-3 btn-lg" onClick={handleSubmit}>Submit</button>
       </form>
            </div>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired();
