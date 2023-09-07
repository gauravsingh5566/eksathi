import { Avatar } from '@mui/joy'
import moment from 'moment'
import React from 'react'
import { useEffect } from 'react'

function OwnerMessages({ data, avatar }) {
    return (
        <div >
            <div className="  p-2 " style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <div className="d-flex align-items-start overflow-hidden text-nowrap" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    {/* <Avatar
                        alt="Remy Sharp"
                        src={avatar}
                        className="mr-2"
                        sx={{
                            width: "40px",
                            height: "40px"
                        }}
                    /> */}
                    <div>
                        {
                            data?.id !== Date.now() ?
                                <div className="d-flex " style={{ flexDirection: 'row-reverse' }}>
                                    <h6 className="fs-11 text-nowrap ml-3">{moment(data?.id).format('LT')}</h6>
                                </div> : null
                        }
                        <div className=" p-2 " style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                            <div className='bg-primary' style={{
                                flexDirection: 'row-reverse', borderTopLeftRadius: '1rem',
                                borderBottomLeftRadius: '1rem',
                                borderBottomRightRadius: '1rem',
                                maxWidth: "40vh",
                            }}>
                                <div className="p-2">
                                    <h6 className="fs-13  text-wrap text-white" style={{
                                        lineHeight: '16px'
                                    }} >
                                        {data?.content}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default OwnerMessages
