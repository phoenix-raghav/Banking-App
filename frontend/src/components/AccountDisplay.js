import React, { useEffect } from 'react'
import withRouter, { Link } from 'react-router-dom';
function AccountDisplay(props) {
  props.setHpHeading("Account Details");
  return (
    <>
        <div id="dispAccNo">
            <div><b>Your Account Number is :</b> {props.accNo}</div>
            <div>
              <Link to="/signup"><button id="signUpBtn" className='btn'>Sign Up</button></Link>
            </div>
        </div>
    </>
  )
}

export default AccountDisplay