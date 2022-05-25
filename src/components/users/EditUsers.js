// import React from "react";


// const EditUser = () =>{
//     return <h1>Edit User</h1>
// };

// export default EditUser;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const EditUser = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    //alert(id);
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const {name, username, email, phone, website} = user;
    const onInputChange = e=>{
        setUser({...user,[e.target.name]: e.target.value}) //with previous data  come with new data
    };

    useEffect(()=>{
        loadUser();
    }, []);
    const onSubmit= async e => {
        e.preventDefault();  //preventDefault() method is stop the default behavoiur
        await axios.put(`http://localhost:3003/users/${id}`,user);
        //redirect the path
        navigate.push("/")
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        // console.log(result);
        setUser(result.data);
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" name="name" value={name} onChange={e => onInputChange(e)} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Username" name="username" value={username} onChange={e => onInputChange(e)} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your E-mail Address" name="email" value={email} onChange={e => onInputChange(e)} />
                    </div>
                    <br/>
                    {/* <div className="form-group">
                        <input type="number" className="form-control form-control-lg" placeholder="Enter Your Phone Number" name="phone" value={phone} onChange={e => onInputChange(e)} />
                    </div>
                    <br/> */}
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Website Name" name="website" value={website} onChange={e => onInputChange(e)} />
                    </div>
                    <br/>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;