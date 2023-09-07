import { Button, IconButton } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Input } from '@mui/joy';
import './Onboard.css'

const questionsList = [
    {
        ques: "What is your name?",
        value: "name",
    },
    {
        ques: "What is your Email?",
        value: "email",
    },
    {
        ques: "Enter Your Phone",
        value: "phone",
    },
    {
        ques: "Enter Your password?",
        value: "pass",
    },
    {
        ques: "What is your Address?",
        value: "address",
    },

]


function Questions({ index, setIndex }) {
    const inputRef = useRef()
    const [ans, setAns] = useState({
        name: "",
        email: "",
        pass: "",
    })


    // Animation 

    const [showBox, setShowBox] = useState(true);

    const toggleBox = () => {
        setShowBox(!showBox);
    };
    useEffect(() => {
        let timer;
        if (!showBox) {
            timer = setTimeout(() => {
                setShowBox(true);
            }, 800);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [showBox]);

    return (
        <div className='   box '>
            <div className='p-2  quest    ' >
                <div className={`box ${showBox ? 'fade-in' : 'fade-out'}`}  >
                    <div className='mb-4 text-black'  >
                        <Button className='text-dark rounded-4  fs-15 font-weight-bold text-capitalize' onClick={() => { if (index > 0) setIndex(index - 1) }} > <ArrowBackIosIcon sx={{ width: "18px" }} />Back</Button>
                    </div>
                    <div className='mb-3'>
                        {/* {console.log(questionsList[0], index)} */}
                        <h3 className='mb-3 font-weight-bold'>{questionsList[index]?.ques}</h3>
                        <Input className='Inp ' variant="text" ref={inputRef} value={ans[questionsList[index]?.value]} size="lg" onChange={e => setAns(prv => ({ ...prv, [questionsList[index]?.value]: e.target.value }))} placeholder={"Enter Your" + questionsList[index]?.value} />
                    </div>
                    <div className='mb-4' >
                        <Button variant="contained" className='btan butn rounded-4' onClick={() => {
                            if (index < questionsList?.length - 1) {
                                console.log(questionsList?.length, index);
                                toggleBox();
                                setTimeout(() => {
                                    setIndex(index + 1);
                                }, 800);
                            }

                        }} > Next</Button>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

function Quest() {
    const [state, setState] = useState(false)
    const [index, setIndex] = useState(0);
    return (
        
        <div className=''>
            
            

            <div className='col-10 '>

                <Questions index={index} setIndex={setIndex} />

            </div>





        </div>
       
    )
}

export default Quest
