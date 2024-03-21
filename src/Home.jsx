import React from "react";
import { useSelector } from "react-redux";
import { Link}from "react-router-dom";


function Home(){
    const employees = useSelector((state) => state.employees);
    
    return(
        <div className="container">
            <h2>Employee Directory SPA App</h2>
            <Link to="/create" className="btn btn-success my-3">Create +</Link>
            <table className="table-fit table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Action</th>
                    </tr>

                </thead>
                <tbody>
                    {employees.map((employee,index) =>(
                        <tr key={index}>
                            <td scope="col">{employee.id}</td>
                            <td scope="col">
                            
                                <img src={employee.picture} className="img-fluid rounded-circle mb-2"
                                style={{width:"80px",height: "80px"}}
                                /></td>
                            
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.dob}</td>
                            <td>
                                <Link to={`/edit/${employee.id}`} className="btn btn-sm btn-primary">Edit</Link>
                                <button className="btn btn-sm btn-danger ms-2">Delete</button>
                            </td>
                        </tr>
                    )

                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Home;