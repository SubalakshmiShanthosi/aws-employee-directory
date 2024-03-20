import { createSlice } from "@reduxjs/toolkit";
import {employeeList} from './Data';

const employeeSlice = createSlice({
    name: "employees",
    initialState: employeeList,
    reducers:{
        addEmployee: (state,action) => {
              state.push(action.payload);
        }
    }
})

export const {addEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;