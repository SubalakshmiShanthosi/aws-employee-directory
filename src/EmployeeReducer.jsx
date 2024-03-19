import { createSlice } from "@reduxjs/toolkit";
import {employeeList} from './Data';

const employeeSlice = createSlice({
    name: "employees",
    initialState: employeeList,
    reducers:{}
})

export default employeeSlice.reducer;