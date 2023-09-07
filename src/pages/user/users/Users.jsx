import { Button } from '@mui/material';
import { api } from 'api/api';
import { Popup } from 'layout/Popup';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserCard from './component/UserCard';

const Users = () => {
    const [usersList, setUsersList] = useState();
    const [filteredUsers, setFilteredUsers] = useState();
    const [searchTerm, setSearchTerm] = useState('nide');
    const [expertise, setExpertise] = useState('node');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(event.target.value);
        handleFilterUsers();
    };

    const handleFilterUsers = () => {
        console.log("Search Term: ", searchTerm);
        if (searchTerm) {
            const filtered = usersList.filter(user =>
                user.first_name.toLowerCase().includes(searchTerm?.toLowerCase())
            );
            setFilteredUsers(filtered);
            console.log("Filtered :", filtered);
        } else if (searchTerm == '') {
            setFilteredUsers(usersList);
        }
        console.log("FilteredUsers :", filteredUsers);
    };

    const getUsers = async () => {
        Popup("loading");
        try {
            const res = await api.get(`/user?type=0&expertise=${expertise}`);
            console.log("All Users: ", res);
            if (res.status == 200) {
                console.log("Data: ", res.data.users);
                setUsersList(res.data.users);
                setFilteredUsers(res.data.users);
                Popup();
            }

        } catch (error) {
            Popup('error', error.response.data.message);
        }
    }

    useEffect(() => {
        getUsers();
    }, [expertise]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 pr-0">
                        <div className="sidebar position-sticky top-0 pt-40px">
                            <div className="mb-5">
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
                                        <Link to="expertise-list.html">
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
                            <div className="mb-5">
                                <h6 className='mb-3 bg-light p-3 rounded text-grey'>Categorized Users</h6>
                                <ul className="generic-list-item generic-list-item-highlight fs-15">
                                    <li className="lh-26">
                                        {/* <a href="index.html"> */}
                                        <Button className="text-capitalize text-secondary" onClick={
                                            () => {
                                                setExpertise('Node')
                                            }
                                        }>
                                            <i className="la la-terminal mr-1 text-black" /> Node
                                        </Button>
                                    </li>
                                    <li className="lh-26">
                                        {/* <Button to="home-3.html"> */}
                                        <Button className="text-capitalize text-secondary" onClick={
                                            () => {
                                                setExpertise('HTML')
                                            }
                                        }>
                                            <i className="la la-pencil-ruler mr-1 text-black" /> HTML
                                        </Button>
                                    </li>
                                    <li className="lh-26">
                                        <Button className="text-capitalize text-secondary" onClick={
                                            () => {
                                                setExpertise('Physics')
                                            }
                                        }>
                                            <i className="la la-users mr-1 text-black" /> Physics
                                        </Button>
                                    </li>
                                    <li className="lh-26">
                                        <Button className="text-capitalize text-secondary" onClick={
                                            () => {
                                                setExpertise('Data Structure')
                                            }
                                        }>
                                            <i className="la la-diagnoses mr-1 text-black" /> Data Structure
                                        </Button>
                                    </li>
                                    <li className="lh-26">
                                        <Button className="text-capitalize text-secondary" onClick={
                                            () => {
                                                setExpertise('React')
                                            }
                                        }>
                                            <i className="la la-globe mr-1 text-black" /> React
                                        </Button>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/* end sidebar */}
                        <div className="sidebar position-sticky top-0 pt-40px">

                        </div>
                        {/* end sidebar */}
                    </div>
                    {/* end col-lg-2 */}
                    <div className="col-12 col-lg-10 px-0">
                        {/* //     <!-- ================================
//          START QUESTION AREA
// ================================= --> */}
                        <section className="question-area pt-40px pb-40px">
                            <div className="container">
                                <div className="filters pb-3">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between pb-3">
                                        <h3 className="fs-22 fw-medium">Users</h3>
                                        <Link to="/requests/post" className="btn theme-btn theme-btn-sm">Ask Question</Link>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="mr-3 w-25">
                                            <div className="form-group">
                                                <input className="form-control form--control form-control-sm h-auto lh-34"
                                                    type="text"
                                                    name="search"
                                                    placeholder="Filter by user"
                                                    value={searchTerm}
                                                    onChange={handleSearchChange}
                                                />
                                                <button className="form-btn" type="button" onClick={handleFilterUsers}><i className="la la-search"></i></button>
                                            </div>
                                        </div>
                                        <div className="btn-group btn--group mb-3" role="group" aria-label="Filter button group">
                                            <a href="#" className="btn active">Reputation</a>
                                            <a href="#" className="btn">New users</a>
                                            <a href="#" className="btn">Votes</a>
                                            <a href="#" className="btn">Editors</a>
                                            <a href="#" className="btn">Moderators</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end filters --> */}

                                <div className="row">
                                    {
                                        filteredUsers?.length ?
                                            filteredUsers?.map((user, key) => (
                                                <UserCard
                                                    key={key}
                                                    user={user}
                                                />
                                            )) :
                                            <>
                                                <UserCard />
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <img className='w-50 mx-auto d-block' src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg" alt="" srcset="" />

                                                    </div>
                                                    <div className="col px-5">
                                                        <h2 className='mb-3'>No users found</h2>
                                                        <p>There are no users found in specified category, or something may wrong.</p>
                                                    </div>
                                                </div>
                                            </>
                                    }
                                    {/* <UserCard /> */}

                                </div>
                                {/* <!-- end row --> */}
                                <div className="pager pt-20px">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination generic-pagination pr-1">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true"><i className="la la-arrow-left"></i></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true"><i className="la la-arrow-right"></i></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <p className="fs-13 pt-2">Showing 1-20 of 50,577 results</p>
                                </div>
                            </div>
                            {/* <!-- end container --> */}
                        </section>
                        {/* <!-- end question-area --> */}
                        {/* <!-- ================================
         END QUESTION AREA
================================= --> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users;