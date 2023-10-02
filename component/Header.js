import React, { useState } from 'react'
import './Header.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const Header = () => {
  const[pk,usePk]=useState(0)
  const Add=()=>{
    usePk(pk+1)
  }
  
  return (
      <>
    
    <h1 className='header'>Student data App :{pk}</h1>
  
    <div className='nav'>  

    <TextField  id="outlined-basic" label="Name" variant="outlined" />
<TextField id="filled-basic" label="Email" variant="filled" />
<Button variant="contained" color="success"  onClick={Add}>
        Add  
      </Button>
gi
  )
}
export default Header;