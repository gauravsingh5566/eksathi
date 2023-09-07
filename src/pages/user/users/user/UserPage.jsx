import { api } from 'api/api';

import { useGlobalContext } from 'global/context';
import { Popup } from 'layout/Popup';
import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom';
import UserDetailHeader from '../component/UserDetailHeader';
import UserDetailSidebar from '../component/UserDetailSidebar';

const UserPage = () => {
    const params = useParams();
    const [user, setUser] = React.useState({});
    console.log("Params: ",params);
    const getUser = async () => {
        Popup("loading");
        try {
            const res = await api.get(`/user?id=${params.userId}&type=1`);
            console.log("User Data: ", res.data);
            if (res.status == 200) {
                Popup();
                setUser(res.data.user);
            }
        } catch (error) {
            Popup("error", "Check your network!");
        }
    }

    React.useEffect(() => {
        getUser();
    }, []);

    React.useEffect(()=> {
        console.log("User Public Access: ", user);
    },[user])

    return (
        <div>
            <div>
                <UserDetailHeader user={user}/>

                {/*START USER DETAILS AREA*/}
                <section className="user-details-area pt-30px pb-60px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="tab-content" id="myTabContent">
                                    <Outlet />
                                </div>
                            </div>
                            {/* end col-lg-9 */}
                            <div className="col-lg-3">
                                <UserDetailSidebar />
                            </div>
                        </div>
                    </div>
                </section>
                {/* end user-details-area */}
            </div>
        </div>
    )
}

export default UserPage