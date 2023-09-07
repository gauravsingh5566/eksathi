import React from 'react'
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <>
            <div className="sidebar position-sticky top-0 pt-40px">
                <ul className="generic-list-item generic-list-item-highlight fs-15">
                    <li className="lh-26">
                        {/* <a href="index.html"> */}
                        <Link to="/">
                            <i className="la la-home mr-1 text-black" /> Home
                        </Link>
                    </li>
                    <li className="lh-26 active">
                        {/* <Link to="home-3.html"> */}
                        <Link to="/requests">
                            <i className="la la-globe mr-1 text-black" /> Questions
                        </Link>
                    </li>
                    <li className="lh-26">
                        <Link to="/tags">
                            <i className="la la-tags mr-1 text-black" /> Tags
                        </Link>
                    </li>
                    <li className="lh-26">
                        <Link to="/users">
                            <i className="la la-user mr-1 text-black" /> Users
                        </Link>
                    </li>
                    {/* <li className="lh-26">
                    <Link to="badges-list.html">
                      <i className="la la-id-badge mr-1 text-black" /> Badges
                    </Link>
                  </li> */}
                    <li className="lh-26">
                        <Link to="category-list.html">
                            <i className="la la-sort mr-1 text-black" /> Categories
                        </Link>
                    </li>
                    {/* <li className="lh-26">
                    <Link to="job-list.html">
                      <i className="la la-mouse mr-1 text-black" /> Jobs
                    </Link>
                  </li> */}
                    <li className="lh-26">
                        <Link to="companies.html">
                            <i className="la la-briefcase mr-1 text-black" />{" "}
                            Institutions
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LeftSidebar;