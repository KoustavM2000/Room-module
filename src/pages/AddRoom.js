import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Sidenav from '../SideNav';
import axios from 'axios';
import swal from 'sweetalert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import { InputAdornment, TextField } from '@mui/material';
import * as yup from 'yup';
import {useFormik} from 'formik';

const validationSchema=yup.object({
  type:yup.string().required("Room Type is required").matches(/^[A-Z?!\sa-z]+$/, "Invalid Type"),
  noOfRoom: yup.number().min(10,"minimum is 10").max(50,"maximum is 50").required("Enter Between 10 - 50"),
  rate:yup.number().min(500).max(10000).required("Enter Room Charges")
})

const AddRoom = () => {
  const Navigate=useNavigate();
  const formik=useFormik({
    initialValues:{
      type:"",
      noOfRoom:"",
      rate:""
    },
    onSubmit:(values)=>{
      console.log(JSON.stringify(values));
      axios.post('https://63de66c2f1af41051b1267a5.mockapi.io/Room',values).then(()=>{
        swal("Added!", "Details have been added", "success").then(function () {
          Navigate("/");
        }); 
      
        })
    },
    validationSchema:validationSchema
  })
  return (
    <>
      <Box sx={{ display: 'flex' }} > 
        <Sidenav />
        <Box component={Paper} sx={{ flexGrow: 1, p: 3, m: 10}}>
          <h1>Add Room Details</h1>

          <form onSubmit={formik.handleSubmit} >
          <Stack spacing={2} sx={{ width: '50%' }}>
            
            <TextField 
              value={formik.values.type} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="type"  
              autoComplete='off'
              label="Room Type" 
              variant="outlined" 
              error={formik.touched.type && Boolean(formik.errors.type)}
              helperText={formik.touched.type && formik.errors.type}
              onBlur={formik.handleBlur}
              />
            <TextField 
              value={formik.values.noOfRoom} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="noOfRoom" 
              autoComplete='off'
              label="Number Of Room" 
              variant="outlined" 
              error={formik.touched.noOfRoom && Boolean(formik.errors.noOfRoom)}
              helperText={formik.touched.noOfRoom && formik.errors.noOfRoom}
              onBlur={formik.handleBlur}
              />
            <TextField 
              value={formik.values.rate} 
              autoComplete='off'
              onChange={formik.handleChange}
              InputProps={{
              startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }} 
              id="outlined-basic"  
              name="rate"  
              label="Rate per Day" 
              variant="outlined"
              error={formik.touched.rate && Boolean(formik.errors.rate)}
              helperText={formik.touched.rate && formik.errors.rate}
              onBlur={formik.handleBlur} />
            <Button type="submit" variant="contained">Add</Button>
           
          </Stack>
          </form>
        </Box>
      </Box>
    </>
  )
}

export default AddRoom