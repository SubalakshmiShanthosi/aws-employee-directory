import { createSlice } from "@reduxjs/toolkit";
import {employeeList} from './Data';

const employeeSlice = createSlice({
    name: "employees",
    initialState: employeeList,
    reducers:{
        addEmployee: (state,action) => {
              state.push(action.payload);
        },

        updateEmployee: (state,action) => {
            const {id,name,email,picture,phone,dob} = action.payload;
            const updatingEmployee = state.find(employee => employee.id == id);
            if(updatingEmployee)
            {
                updatingEmployee.name=name;
                updatingEmployee.email = email;
                updatingEmployee.picture = picture;
                updatingEmployee.phone = phone;
                updatingEmployee.dob = dob;
            }
        }
    }
})

export const {addEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;
export const {updateEmployee} = employeeSlice.actions;