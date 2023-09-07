import React from 'react'
import UserCard from './components/UserCard'
import { useState } from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from 'global/context';
import UserTicket from './components/UserTicket';
import UserCard2 from './components/UserCard2';
import { Box, Button, Checkbox, Divider, FormControl, FormLabel, IconButton, Input, Link, Option, Radio, RadioGroup, Select } from '@mui/joy';
import { ButtonGroup, FormControlLabel, FormGroup, InputAdornment, OutlinedInput, Rating } from '@mui/material';
import { CloseRounded, SearchTwoTone, Star, StarRounded } from '@mui/icons-material';
import SuggestedExperts from '../widgets/SuggestedExperts';
import UsersSkeleton from './components/UsersSkeleton';
import { useLocation } from 'react-router';
import { LoadingButton } from '@mui/lab';
import useDidMountEffect from 'global/useDidMountEffect';
import { useMemo } from 'react';
import debounce from 'lodash.debounce';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const labels = {
    0.5: 'Just Started',
    1: 'Just Started+',
    1.5: 'Still Learning',
    2: 'Still Learning+',
    2.5: 'Gaining Expertise',
    3: 'Gaining Expertise+',
    3.5: 'Expert Now',
    4: 'Expert Now+',
    4.5: 'Param Gyani',
    5: 'Param Gyani+',
};

const UsersContainer = () => {
    const routeLocation = useLocation();
    const { api, apiAuth, userData, users, setUsers } = useGlobalContext();
    const [loading, setLoading] = useState(true);
    const [totalUsers, setTotalUsers] = useState();
    const [filter, setFilter] = useState({
        teacher: false,
        student: false,
        professional: false,
        location: false,
        expertise: false,
        rating: false,
    });
    const [sort, setSort] = useState("recent");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [heading, setHeading] = useState('Users');
    const [search, setSearch] = useState(routeLocation?.state?.keyword);
    const [expertises, setExpertises] = useState([]);
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState();
    const [expertise, setExpertise] = useState();
    const [rating, setRating] = useState();
    const [loadMore, setLoadMore] = useState(false);
    const [showLoadButton, setShowLoadButton] = useState(true);
    let cancelToken;

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const debouncedResults = useMemo(() => {
        return debounce(handleChange, 1000);
    }, []);

    const getUsers = async () => {
        let profession = [];
        if (filter?.student) {
            profession.push("student");
        }
        if (filter?.teacher) {
            profession.push("teacher");
        }
        if (filter?.professional) {
            profession.push("professional");
        }
        profession = JSON.stringify(profession);
        console.log("profession: ", profession);
        setLoading(true);
        toast.loading("Please wait...");
        //Check if there are any previous pending requests
        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel("Operation canceled due to new request.");
            setLoading(true);
            toast.loading("Please wait...");
        }

        //Save the cancel token for the current request
        cancelToken = axios.CancelToken.source()
        try {
            const res = await api.get(`app/user?sortBy=${sort}&search=${search}&teacher=${filter?.teacher}&student=${filter?.student}&professional=${filter?.professional}&location=${location}&skill=${expertise}&rating=${rating}&limit=${limit}&page=${page}&userId=${userData?.id}&profession=${profession}`,
                { cancelToken: cancelToken.token } //Pass the cancel token to the current request
            );
            if (res?.status === 200) {
                console.log('User successfully fetched: ', res?.data);
                setUsers(res?.data?.users);
                setTotalUsers(res?.data?.totalUsers);
                setExpertises(res?.data?.expertises);
                setLocations(res?.data?.locations);
                setLoading(false);
                toast.dismiss();
                toast.success("Users successfully fetched!");
                if(res?.data?.totalUsers >= 12) {
                    setShowLoadButton(true);
                } else {
                    setShowLoadButton(false);
                }
            }
        } catch (error) {
            console.log(error);
            toast.dismiss();
            if (error?.code === "ERR_CANCELED") {
                setLoading(true);
                toast.loading("Please wait...");
            } else {
                setLoading(false);
                toast.success("Something went wrong!");
            }
        }
    }

    const loadMoreUsers = async (newPage) => {
        let profession = [];
        if (filter?.student) {
            profession.push("student");
        }
        if (filter?.teacher) {
            profession.push("teacher");
        }
        if (filter?.professional) {
            profession.push("professional");
        }
        setLoadMore(true);
        //Check if there are any previous pending requests
        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel("Operation canceled due to new request.");
            setLoadMore(true);
        }

        //Save the cancel token for the current request
        cancelToken = axios.CancelToken.source()
        try {
            const res = await api.get(`app/user?sortBy=${sort}&search=${search}&teacher=${filter?.teacher}&student=${filter?.student}&professional=${filter?.professional}&location=${location}&skill=${expertise}&rating=${rating}&limit=${limit}&page=${newPage}&userId=${userData?.id}&profession=${profession}`,
                { cancelToken: cancelToken.token } //Pass the cancel token to the current request
            );
            if (res?.status === 200) {
                console.log('User successfully fetched: ', res?.data);
                let loadedData = res?.data?.users;
                console.log('User loaded: ', loadedData);
                
                if (res?.data?.users?.length >= 0) {
                    setShowLoadButton(false);
                    setUsers([...users, ...loadedData]);
                } else {
                    setShowLoadButton(false);
                }
                setLoadMore(false);
            }
        } catch (error) {
            console.log(error);
            if (error?.code === "ERR_CANCELED") {
                setLoadMore(true);
            } else {
                setLoadMore(false);
            }
        }
    }

    const handleReset = () => {
        setFilter((prevFilter) => ({
            teacher: false,
            student: false,
            professional: false,
            location: false,
            expertise: false,
            rating: false,
        }));
        setRating((prevRating) => null);
        setLocation((prevLocation) => null);
        setExpertise((prevExpertise) => null);
        setPage((prevPage) => 1);
    };

    // const searchTimeout = setTimeout(()=> {
    //     console.log("Searching..")
    // }, 1000);

    // function clearSearch() {
    //     clearTimeout(searchTimeout);
    // }

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    useEffect(() => {
        getUsers();
    }, []);

    useDidMountEffect(() => {
        if (search) {
        }
        getUsers();
    }, [search]);

    useDidMountEffect(() => {
        getUsers();
        console.log(`User successfully fetched sorted By ${sort}: `, users, `Filter By : `, filter);
    }, [sort, filter, location, expertise, rating]);

    const action = React.useRef(null);

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        {
                            search &&
                            <Button variant='plain' className='forum-nav-item mb-3 p-3 w-100 shadow'
                                onClick={() => {
                                    setSearch('');
                                    setHeading('Users');
                                    setPage(1);
                                }}
                            >
                                <h5>Switch to All Users</h5>
                            </Button>
                        }
                        <div className="filters mb-3 rounded-3 shadow p-2 p-lg-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className='mb-2'>Filter By</h5>
                                <div>
                                    <Button color='neutral' variant='plain' size='sm' className='text-capitalize' onClick={handleReset}>Reset</Button>
                                    {/* <Button color='primary' variant='plain' size='sm' className='text-capitalize' onClick={() => {
                                        getUsers();
                                        setPage(1);
                                    }}>Apply</Button> */}
                                </div>
                            </div>
                            <FormGroup>
                                <Checkbox
                                    color="neutral"
                                    disabled={false}
                                    label="Teacher"
                                    size="md"
                                    variant="soft"
                                    checked={filter?.teacher}
                                    onChange={(e) => {
                                        setFilter({ ...filter, teacher: e.target.checked });
                                        setPage(1);
                                    }}
                                />
                                <Checkbox
                                    color="neutral"
                                    disabled={false}
                                    label="Student"
                                    size="md"
                                    variant="soft"
                                    checked={filter?.student}
                                    onChange={(e) => {
                                        setFilter({ ...filter, student: e.target.checked });
                                        setPage(1);
                                    }}
                                />
                                <Checkbox
                                    color="neutral"
                                    disabled={false}
                                    label="Professional"
                                    size="md"
                                    variant="soft"
                                    checked={filter?.professional}
                                    onChange={(e) => {
                                        setFilter({ ...filter, professional: e.target.checked });
                                        setPage(1);
                                    }}
                                />
                                <Divider className='my-2' />

                                <Select
                                    // action={action}
                                    value={location}
                                    placeholder="Location"
                                    className='mb-2'
                                    onChange={(e, newValue) => setLocation(newValue)}
                                    {...(location && {
                                        // display the button and remove select indicator
                                        // when user has selected a value
                                        endDecorator: (
                                            <IconButton
                                                size="sm"
                                                variant="plain"
                                                color="neutral"
                                                onMouseDown={(event) => {
                                                    // don't open the popup when clicking on this button
                                                    event.stopPropagation();
                                                }}
                                                onClick={() => {
                                                    setLocation(null);
                                                    action.current?.focusVisible();
                                                }}
                                            >
                                                <CloseRounded />
                                            </IconButton>
                                        ),
                                        indicator: null,
                                    })}
                                    sx={{ minWidth: 160 }}
                                >

                                    {
                                        locations?.map((loc, index) => (
                                            <Option key={index} value={loc}>{loc}</Option>
                                        ))
                                    }
                                </Select>

                                <Select
                                    // action={action}
                                    value={expertise}
                                    placeholder="Expertise"
                                    className='mb-2'
                                    onChange={(e, newValue) => {
                                        setExpertise(newValue)
                                        setPage(1);
                                    }}
                                    {...(expertise && {
                                        // display the button and remove select indicator
                                        // when user has selected a value
                                        endDecorator: (
                                            <IconButton
                                                size="sm"
                                                variant="plain"
                                                color="neutral"
                                                onMouseDown={(event) => {
                                                    // don't open the popup when clicking on this button
                                                    event.stopPropagation();
                                                }}
                                                onClick={() => {
                                                    setExpertise(null);
                                                    action.current?.focusVisible();
                                                }}
                                            >
                                                <CloseRounded />
                                            </IconButton>
                                        ),
                                        indicator: null,
                                    })}
                                    sx={{ minWidth: 160 }}
                                >

                                    {
                                        expertises?.map((expertise, index) => (
                                            <Option key={index} value={expertise}>{expertise}</Option>
                                        ))
                                    }
                                </Select>

                                <Select
                                    action={action}
                                    value={rating}
                                    placeholder="Rating"
                                    className='mb-2'
                                    onChange={(e, newValue) => {
                                        setRating(newValue)
                                        setPage(1);
                                    }}
                                    {...(rating && {
                                        // display the button and remove select indicator
                                        // when user has selected a value
                                        endDecorator: (
                                            <IconButton
                                                size="sm"
                                                variant="plain"
                                                color="neutral"
                                                onMouseDown={(event) => {
                                                    // don't open the popup when clicking on this button
                                                    event.stopPropagation();
                                                }}
                                                onClick={() => {
                                                    setRating(null);
                                                    action.current?.focusVisible();
                                                }}
                                            >
                                                <CloseRounded />
                                            </IconButton>
                                        ),
                                        indicator: null,
                                    })}
                                    sx={{ minWidth: 160 }}
                                >
                                    <Option value="1">
                                        <Rating
                                            name="text-feedback"
                                            value={1}
                                            readOnly
                                            precision={1}
                                            icon={<StarRounded fontSize="inherit" />}
                                            emptyIcon={<StarRounded style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{labels[1]}</Box>
                                    </Option>
                                    <Option value="2">
                                        <Rating
                                            name="text-feedback"
                                            value={2}
                                            readOnly
                                            precision={2}
                                            icon={<StarRounded fontSize="inherit" />}
                                            emptyIcon={<StarRounded style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{labels[2]}</Box>
                                    </Option>
                                    <Option value="3">
                                        <Rating
                                            name="text-feedback"
                                            value={3}
                                            readOnly
                                            precision={3}
                                            icon={<StarRounded fontSize="inherit" />}
                                            emptyIcon={<StarRounded style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{labels[3]}</Box>
                                    </Option>
                                    <Option value="4">
                                        <Rating
                                            name="text-feedback"
                                            value={4}
                                            readOnly
                                            precision={4}
                                            icon={<StarRounded fontSize="inherit" />}
                                            emptyIcon={<StarRounded style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{labels[4]}</Box>
                                    </Option>
                                    <Option value="5">
                                        <Rating
                                            name="text-feedback"
                                            value={5}
                                            readOnly
                                            precision={5}
                                            icon={<StarRounded fontSize="inherit" />}
                                            emptyIcon={<StarRounded style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{labels[5]}</Box>
                                    </Option>

                                </Select>
                            </FormGroup>
                        </div>
                        {/* <div className="filters mb-3 rounded-3 border p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className='mb-2'>Sort By</h5>
                                <Button variant='outlined' size='small' className='text-capitalize' onClick={() => {
                                    setSort('');
                                    setHeading("Users");
                                }}>Reset</Button>
                            </div>
                            <FormControl>
                                <RadioGroup value={sort} name="sort" onChange={(e) => {
                                    setSort(e.target.value);
                                    setHeading("Sort By " + e.target.value);
                                }}>
                                    <Radio name="sort" variant="soft" label="Newest" value="newest" />
                                    <Radio name="sort" variant="soft" label="Student" value="student" />
                                    <Radio name="sort" variant="soft" label="Teacher" value="teacher" />
                                    <Radio name="sort" variant="soft" label="Professional" value="professional" />
                                </RadioGroup>
                            </FormControl>
                        </div> */}
                        <SuggestedExperts className="mb-3" heading="Gyani's near you" />
                    </div>
                    <div className="col-12 col-lg-9">
                        <FormControl variant="outlined" fullWidth className='mb-3 rounded '>
                            <Input
                                color="plain"
                                id="search"
                                type='text'
                                className='rounded-4 px-3 shadow'
                                name='search'
                                size='lg'
                                onChange={(e) => {
                                    debouncedResults(e);
                                    setPage(1);
                                }}
                                endDecorator={
                                    <InputAdornment position="end">
                                        <IconButton
                                            variant='plain'
                                            aria-label="toggle password visibility"
                                            onClick={() => {
                                                setHeading(`Search Results`);
                                                setPage(1);
                                                getUsers();
                                            }}
                                            edge="end"
                                        >
                                            <SearchTwoTone />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                // label="Password"
                                placeholder='Search user by name or expertise or location'
                            />
                        </FormControl>
                        <div className="d-flex justify-content-between my-3 ">

                            <h4>{heading} {users?.length && totalUsers ? `(${users?.length}/${totalUsers})` : null}</h4>

                            <div className="d-flex align-items-center ">
                                <h6 className='mr-3'>Sort By {" "}</h6>
                                <ButtonGroup size="small" aria-label="small button group" className='shadow rounded-3'>
                                    <Button variant='plain' className='text-capitalize' key="zero" onClick={() => {
                                        setSort('recent');
                                        setPage(1);
                                        // setHeading('Sort By Students');
                                    }}>Recent</Button>
                                    <Divider orientation='vertical' />
                                    <Button variant='plain' className='text-capitalize' key="one" onClick={() => {
                                        setSort('student');
                                        setPage(1);
                                        // setHeading('Sort By Students');
                                    }}>Student</Button>
                                    <Divider orientation='vertical' />
                                    <Button variant='plain' className='text-capitalize' key="two" onClick={() => {
                                        setSort('teacher');
                                        setPage(1);
                                        // setHeading('Sort By Teachers');
                                    }}>Teacher</Button>
                                    <Divider orientation='vertical' />
                                    <Button variant='plain' className='text-capitalize' key="three" onClick={() => {
                                        setSort('professional');
                                        setPage(1);
                                        // setHeading('Sort By Professionals');
                                    }}>Professional</Button>
                                </ButtonGroup>
                            </div>
                        </div>


                        <div className="row">
                            {
                                loading ?
                                    <>
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                    </> :
                                    users?.length ?
                                        users?.map((user, index) => {
                                            // return <UserCard user={user} />
                                            return <UserTicket key={user?.id} user={user} index={index} />
                                        }) :

                                        <div className="rouded-4 p-4">
                                            <h3>No user Found</h3>
                                        </div>

                            }
                            {
                                loadMore ?
                                    <>
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                    </>
                                    : null
                            }
                        </div>
                        {
                            showLoadButton &&
                            <Button
                                variant='outlined'
                                loading={loadMore}
                                fullWidth
                                size='md'
                                className='rounded-3 shadow  mt-3'
                                onClick={() => {
                                    loadMoreUsers(page + 1);
                                    setPage(page + 1);
                                }}
                            >
                                Load More
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersContainer