import React, { useState } from "react";
import { addEmployee } from "./EmployeeReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Create(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [picture, setPicture] = useState('')
    const[phone, setPhone] = useState('')
    const[dob, setDOB] = useState('')
    const employees= useSelector((state) => state.employees);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(addEmployee({id: employees[employees.length-1].id +1, name, email,picture,phone,dob}));
        navigate('/');

    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Add New employee detail</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Employee Name"
                        onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter Employee Email" 
                        onChange={e => setEmail(e.target.value)}/>
                    </div> <br />
                    <div>
                        <label htmlFor="picture">Photo:</label>
                        <input type="file" className="form-control" name="picture" placeholder="Upload Employee Photo"
                        onChange={e => setPicture(URL.createObjectURL(event.target.files[0]))}/>
                    </div>
                    <div>

                      <label htmlFor="phone">Phone:</label>
                      <input type="tel" name="phone" className="form-control" placeholder="Enter Employee Phone" 
                      onChange={e => setPhone(e.target.value)}/>

                    </div>

                    <div>
                        <label htmlFor="dob">DOB:</label>
                        <input type="date" name="dob" className="form-control" placeholder="Enter Employee DOB"
                        onChange={e => setDOB(e.target.value)}/>
                    </div>
                    <br/>
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;