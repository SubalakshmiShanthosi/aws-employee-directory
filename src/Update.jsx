import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateEmployee } from './EmployeeReducer';


function Update(){
    
    const employees = useSelector((state => state.employees));
    const {id} = useParams();
    const existingEmployee = employees.filter(f => f.id == id);
    const {name,email,picture,phone,dob} = existingEmployee[0];

    const [updName,setName] = useState(name);
    const [updEmail,setEmail] = useState(email);
    const [updPicture, setPicture] = useState(picture);
    const[updPhone, setPhone] = useState(phone);
    const[updDob, setDOB] = useState(dob);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleUpdate = (event) =>{
        event.preventDefault();
        dispatch(updateEmployee({
            id: id,
            name: updName,
            email: updEmail,
            picture: updPicture,
            phone: updPhone,
            dob: updDob

    }))
        navigate('/');
    }
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
            <h3>Update employee detail</h3>
            <form onSubmit={handleUpdate} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Employee Name"
                    value={updName} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter Employee Email" 
                     value={updEmail}  onChange={e => setEmail(e.target.value)}/>
                </div> <br />
                <div>
                    <label htmlFor="picture">Photo:</label>
                    <input type="file" className="form-control" name="picture" placeholder="Upload Employee Photo"
                     value={undefined} onChange={e => setPicture(URL.createObjectURL(event.target.files[0]))} />
                </div>
                <div>

                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" name="phone" className="form-control" placeholder="Enter Employee Phone" 
                   value={updPhone}  onChange={e => setPhone(e.target.value)} />

                </div>

                <div>
                    <label htmlFor="dob">DOB:</label>
                    <input type="date" name="dob" className="form-control" placeholder="Enter Employee DOB"
                    value={updDob}  onChange={e => setDOB(e.target.value)} />
                </div>
                <br/>
                <button className="btn btn-info">Submit</button>
            </form>
        </div>
    </div>

    );
}

export default Update;