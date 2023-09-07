import { useGlobalContext } from 'global/context';
import React from 'react';
import { NavLink } from 'react-router-dom';

const UserDetailHeader = ({user}) => {
    const {userData} = useGlobalContext();
    const endpoint = process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000/";
    return (
        <section className="hero-area bg-white shadow-sm overflow-hidden pt-60px">
            <span className="stroke-shape stroke-shape-1" />
            <span className="stroke-shape stroke-shape-2" />
            <span className="stroke-shape stroke-shape-3" />
            <span className="stroke-shape stroke-shape-4" />
            <span className="stroke-shape stroke-shape-5" />
            <span className="stroke-shape stroke-shape-6" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="hero-content">
                            <div className="media media-card align-items-center shadow-none p-0 mb-0 rounded-0 bg-transparent">
                                <div className="media-img media--img">
                                    <img src={user?.profile? endpoint + user?.profile : "/images/user.webp"} alt={user?.first_name} />
                                </div>
                                <div className="media-body">
                                    <h5>
                                        {user.first_name} {user.middle_name}{" "}
                                        {user.last_name}
                                    </h5>
                                    <small className="meta d-block lh-20 pb-2">
                                        <span>{user.location}, member since 11 years ago</span>
                                    </small>
                                    <div className="stats fs-14 fw-medium d-flex align-items-center lh-18">
                                        <span className="text-black pr-2" title="Reputation">
                                            224,110
                                        </span>
                                        <span
                                            className="pr-2 d-inline-flex align-items-center"
                                            title="Gold"
                                        >
                                            <span className="ball ml-1 gold" />
                                            16
                                        </span>
                                        <span
                                            className="pr-2 d-inline-flex align-items-center"
                                            title="Silver"
                                        >
                                            <span className="ball ml-1 silver" />
                                            93
                                        </span>
                                        <span
                                            className="pr-2 d-inline-flex align-items-center"
                                            title="Bronze"
                                        >
                                            <span className="ball ml-1" />
                                            136
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end hero-content */}
                    </div>
                    {/* end col-lg-8 */}

                    {/* end col-lg-4 */}
                    <div className="col-lg-12">
                        <ul
                            className="nav nav-tabs generic-tabs generic--tabs generic--tabs-2 mt-4"
                            id="myTab"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <NavLink
                                    to={`/users/${user.id}/`}
                                    className="nav-link"
                                    state={{user}}
                                >
                                    Profile
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/users/${user.id}/activity/`}
                                    className="nav-link"
                                >
                                    Activity
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* end col-lg-4 */}
                </div>
                {/* end row */}
            </div>
            {/* end container */}
        </section>
    )
}

export default UserDetailHeader