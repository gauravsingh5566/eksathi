import React, { useEffect, useState } from 'react'
import moment from 'moment'
import ConnectionRequestItem from './ConnectionRequestItem'
import ConnectionProfile from '../components/ConnectionProfile'
import { useGlobalContext } from 'global/context'
import { useOutletContext } from 'react-router-dom'

var removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
        if (arr[i]
            && arr[i].hasOwnProperty(attr)
            && (arguments.length > 2 && arr[i][attr] === value)) {

            arr.splice(i, 1);

        }
    }
    return arr;
}

const ConnectionTab = ({ profile }) => {
    const { userData, api, apiAuth } = useGlobalContext();
    const [pendingRequests, setPendingRequests] = useState([]);
    const [connections, setConnections] = useState([]);

    const getPendingConnections = async () => {
        try {
            const res = await api.get(`/app/connections/pending?userId=${profile?.id ? profile?.id : userData?.id}`);
            if (res?.status === 200) {
                console.log('Pending connection : ', res?.data);
                setPendingRequests(res?.data?.rows);
            }
        } catch (e) {
            console.log(e);
        }
    }

    const getConnections = async () => {
        try {
            const res = await api.get(`/app/connections?userId=${profile?.id ? profile?.id : userData?.id}`);
            if (res?.status === 200) {
                console.log('My Connections : ', res?.data);
                setConnections(res?.data?.connections);
            }
        } catch (e) {
            console.log(e);
        }
    }

    const removeRequest = (requestId) => {
        setPendingRequests(removeByAttr(pendingRequests, 'id', requestId));
        getPendingConnections();
        getConnections();
    }

    useEffect(() => {
        getPendingConnections();
        getConnections();
    }, [userData, profile]);

    return (
        <>
            <div className="">
                {/* Connection Request */}
                {
                    profile?.id && profile?.id !== userData?.id ?
                        null :
                        <div className="user-panel mb-40px">
                            <div className="mb-4 d-flex align-items-center justify-content-between">
                                <h3 className="fs-20 fw-bold">
                                    Connection Requests
                                </h3>
                            </div>
                            <div className="">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

                                    {
                                        pendingRequests?.length ?
                                            pendingRequests?.map(request => (
                                                <div className="p-3">
                                                    <ConnectionRequestItem key={request?.id} user={request} removeRequest={removeRequest} />
                                                </div>
                                            ))
                                            :
                                            <div className="p-3">
                                                <h5 className='text-center text-secondary rounded-4 p-5'
                                                    style={{
                                                        border: "1px dashed lightgrey",
                                                    }}
                                                >No Pending Requests</h5>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                }
                {/* end Connection Request */}
                {/* Connection Request */}
                <div className="user-panel mb-40px">
                    <div className=" mb-3 d-flex align-items-center justify-content-between">
                        <h3 className="fs-20 fw-bold text-capitalize">
                            {
                                profile?.id ?
                                    `${profile?.first_name}'s Connections`
                                    : "My Connections"
                            }
                        </h3>
                    </div>
                    <div className="summary-panel ">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                            {
                                connections?.length ?
                                    connections?.map((connection) => (
                                        <div className="p-3">
                                            <ConnectionProfile user={connection} />
                                        </div>
                                    ))
                                    :
                                    <div className="p-3">
                                        <h5 className='text-center text-secondary rounded-4 p-5'
                                            style={{
                                                border: "1px dashed lightgrey",
                                            }}
                                        >No Connections</h5>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                {/* end Connection Request */}
            </div>
        </>
    )
}

export default ConnectionTab