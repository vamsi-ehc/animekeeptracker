import { Typography } from '@mui/material'
import React from 'react'

import styles from './Signin.module.css'

function Signin() {
  return (
    <>
    <Typography variant="h4" sx={{textAlign:"center", margin:"20px", color:"#002153"}}> LOGIN</Typography>
      <div>
          <div className={styles.bodycontent}>
          <div className={styles.contentcard}>
          <div className="col-md-6 m-auto">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp"  className={styles.textmuted}>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Password</label>
          <input type="password" name="password2" className="form-control" id="confirmpassword" placeholder="Password Again" />
        </div>
        <div className="form-check">
          <input type="checkbox" name="checkbox" className="form-check-input" id="remember" />
          <label className="form-check-label" htmlFor="remember">
            I accept terms and conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Register
        </button>
        
        
      </form>
    </div>
          </div>
          </div>
         
    </div>
    </>
  )
}

export default Signin