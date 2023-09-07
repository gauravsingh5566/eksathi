
import { Button, IconButton } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Quest from './Quest'
import './Onboard.css'




function Onboarding() {
    const [state, setState] = useState(false)
    return (
        <div className='container' > 


            <div className='m-auto' hidden={state}>

                <div className='rounded-4 card border-0 shadow bg-light mb-3 prof align-items-center p-2 ' style={{width:"30%"}} >

                    <img src='https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-52233.jpg?w=740&t=st=1686661480~exp=1686662080~hmac=e12a0c885c42b513927392dc379329ae1d45568dc0bab13c2bac6205ab79610d' className='' alt='' style={{width:"80%"}}/>

                    <h4 className='font-weight-bold' >Complete Your Profile</h4>
                    <p className='p-2 text-center'></p>
                    <Button className='butn rounded-4 mb-2' variant="contained" color="primary" onClick={() => { setState(true); }} >
                        Get Started
                    </Button>




                </div>
            </div>
            <div hidden={!state} >
                <Quest />
            </div>
           
                
        </div>
    )
}

export default Onboarding
