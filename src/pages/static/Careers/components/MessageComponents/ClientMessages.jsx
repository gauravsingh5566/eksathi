import { Avatar } from '@mui/material'
import moment from 'moment'
import React from 'react'

function ClientMessages({data, avatar}) {
    return (
        <div>
            <div className="  p-2 ">
                <div className="d-flex align-items-start overflow-hidden text-nowrap">
                    <Avatar
                        alt="Remy Sharp"
                        src={avatar}
                        className="mr-2 "
                        sx={{
                            width: "40px",
                            height: "40px"
                        }}
                    />
                    <div>
                        <div className="d-flex" style={{}}>
                            <h6 className="fs-17" style={{}}>
                                {data?.first_name}
                            </h6>
                            <h6 className="fs-11 text-nowrap ml-3">{moment(data?.id).format('LT')}</h6>
                        </div>
                        <div className="mt-2 ">
                            <div
                            className='bg-light'
                                style={{
                                    borderTopRightRadius: "1rem",
                                    borderBottomLeftRadius: "1rem",
                                    whiteSpace: "normal",
                                    // marginTop: "-20px",
                                    borderBottomRightRadius: "1rem",
                                   
                                    maxWidth: "40vh",
                                    // marginBottom: "-20px" // Add this style to move the text downward
                                }}
                            >
                                <div className="p-2">
                                    <p className="fs-13 text-wrap" style={{
                                        lineHeight: '16px'
                                    }}>
                                        {data?.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ClientMessages
