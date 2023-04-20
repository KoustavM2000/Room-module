import React,{useState,useEffect}from 'react'
import Sidenav from '../SideNav';
import Box from '@mui/material/Box';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const SearchRoom = () => {
  const[apiData,setApiData]=useState([]);
  const[result,setResult]=useState({});
  const [type,setType]=useState('');

  const handleChange=(e)=>{
    setType(e.target.value);
  }
  
  const Search=()=>{
    axios.get(`https://63de66c2f1af41051b1267a5.mockapi.io/Room/${type}`)
    .then((Data)=>{
     setResult(Data.data);
    })
    console.log(type);
  }
  console.log(result);
  useEffect(() => {
    axios.get('https://63de66c2f1af41051b1267a5.mockapi.io/Room')
    .then((Data)=>{
      setApiData(Data.data);
    })
   },[])

  return (
    <>
     <Box sx={{ display: 'flex' }}>
       <Sidenav/>
      
       <Box component="main" sx={{ flexGrow: 1, p: 3,m:10 }}>
       <h1>Search Room Details</h1>
       <InputLabel id="demo-simple-select-standard-label">Room Type</InputLabel>
       <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Room Type"
          value={type}
          onChange={handleChange}
          sx={{width:'200px', mb:2}}
        >
        {apiData.map((data,index)=>{
            return(
          <MenuItem key={data.id} value={data.id}>{data.type}</MenuItem>
          )
          })}
        </Select>

      <IconButton type="button" onClick={Search} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
      <Divider/>
      {JSON.stringify(result) != '{}' && 
      
      <TableContainer component={Paper} elevation={12}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Room ID</TableCell>
            <TableCell align="center">Room Type</TableCell>
            <TableCell align="center">Number of Room</TableCell>
            <TableCell align="center">Room Rate per day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={result.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontWeight:'bold', fontSize:'16px'}}>
               {result.id}
              </TableCell>
              <TableCell align="center" style={{fontWeight:'bold', fontSize:'16px'}} >{result.type}</TableCell>
              <TableCell align="center" style={{fontWeight:'bold', fontSize:'16px'}}>{result.noOfRoom}</TableCell>
              <TableCell align="center" style={{fontWeight:'bold', fontSize:'16px'}}>₹{result.rate}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      
      }
       </Box>
    
     </Box>
    </>
   )
}

export default SearchRoom