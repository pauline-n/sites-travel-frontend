import React from 'react'
import {Link, TextField, Typography, Button} from '@mui/material'

function Register() {
    return (
        <div>
            <h1>GATE PASS TO YOUR ACCOUNT.</h1>
            <div>
            <form>
                <Typography>
                    SIGN UP
                </Typography>
                <p>Already have an account? Then please <Link>Sign In</Link></p> 
                <TextField 
                label="Email Address"
                name=""
                value=""
                onChange=""
                variant="standard"
                />
                <TextField 
                label="Password"
                name=""
                value=""
                onChange=""
                variant="standard"
                />
                <Button variant="contained">Sign Up</Button>
            </form>
            </div>
            <div>In case you are using a public/shared computer we recommend that you logout to prevent any un-authorized access to your account</div>
        </div>
    )
}

export default Register
