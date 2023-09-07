import React from 'react';
import QuestionSkeleton from '../Skeleton/QuestionSkeleton';
import { Badge, Box, ButtonGroup, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { FilterAltTwoTone } from '@mui/icons-material';
import QuestionCard from './QuestionCard';
import { LoadingButton } from '@mui/lab';
import ReportContent from '../Modals/ReportContent';
import { Link, useOutletContext } from 'react-router-dom';
import { useGlobalContext } from 'global/context';
import BottomNavbar from '../Extras/BottomNavbar';
import { Button } from '@mui/joy';

const AllQuestions = () => {
    const { api, apiAuth } = useGlobalContext();
    const [search, {
        loading,
        questions,
        pageHeading,
        stats,
        setSort,
        filterCount,
        handleShowFilterBox,
        showFilterBox,
        sortAndFilter,
        setSortAndFilter,
        setFilter,
        setShowFilterBox,
        setPage,
        setPageHeading,
        getQuestions,
        showLoadBtn,
        setLoadMore,
        sort,
        filter,
        page,
        limit,
        offset,
        setQuestions,
        loadMore,
        handleClickOpen,
        setShowLoadBtn

    }] = useOutletContext();

    const [openReport, setOpenReport] = React.useState(false);


    return (
        <>
         {/* <BottomNavbar/> */}
            {
                loading ?
                    <>
                        {/* {
                            showWelcome ? 
                            <WelcomeForum /> 
                            : null
                          } */}
                        <QuestionSkeleton />
                        <QuestionSkeleton />
                        <QuestionSkeleton />
                    </>
                    :
                    questions?.length ?
                        <>
                            <div>
                                {/* <p className='fs-6'>1200 asked today, 34000 asked overall, 432 questions still need answers</p> */}

                            </div>
                            <div className="mb-3">
                                <div className="row align-items-center ">
                                    <div className="col">
                                        <h4>{pageHeading}</h4>
                                        {/* <span className='fst-italic' style={{ fontSize: '12px' }}>Today: {stats?.today} | Total: {stats?.total} | Unanswered: {stats?.unanswered}</span> */}
                                    </div>
                                    <div className="col ">
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'end',
                                                '& > *': {
                                                    m: 1,
                                                },
                                            }}

                                        >
                                            <ButtonGroup size="small" aria-label="small button group" className='shadow-lg border-0 rounded-3'>
                                                <Button variant='plain'  key="one" className='text-capitalize  border-0' onClick={() => {
                                                    setSort('newest');
                                                }}>Newest</Button>
                                                <Divider orientation='vertical'/>
                                                <Button variant='plain'  key="two" className='text-capitalize  border-0' onClick={() => {
                                                    setSort('unanswered');
                                                }}>Unanswered</Button>
                                                <Divider orientation='vertical'/>
                                                <Button variant='plain'  key="three" className='text-capitalize  border-0' onClick={() => {
                                                    setSort('popular');
                                                }}>Popular</Button>
                                            </ButtonGroup>
                                            <Badge badgeContent={filterCount} color="primary">
                                                <Button variant='plain' className='text-capitalize shadow-lg' onClick={handleShowFilterBox}
                                                    startIcon={<FilterAltTwoTone />}>
                                                    Filter
                                                </Button>
                                            </Badge>
                                        </Box>
                                    </div>
                                </div>
                                <div className={`row row-cols-1 row-cols-lg-2 border rounded-4 p-3 m-1 ${showFilterBox ? '' : 'd-none'}`}>
                                    <div className="col">
                                        <div className="row row-cols-1 row-cols-lg-2">
                                            <div className="col">
                                                <h6>Filter by</h6>
                                                <FormControl>
                                                    {/* <FormLabel id="demo-radio-buttons-group-label">Filter by</FormLabel> */}
                                                    <RadioGroup
                                                        aria-labelledby="filters-radio-label"
                                                        name="filters-radio"
                                                        defaultValue={sortAndFilter?.filter}
                                                        onChange={e => {
                                                            setSortAndFilter({ ...sortAndFilter, filter: e.target.value })
                                                        }}
                                                    >
                                                        <FormControlLabel value="unanswered" control={<Radio />} label="Unanswered" />
                                                        <FormControlLabel value="answered" control={<Radio />} label="Answered" />
                                                        {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                            <div className="col">
                                                <h6>Sorted by</h6>
                                                <FormControl>
                                                    {/* <FormLabel id="demo-radio-buttons-group-label">Filter by</FormLabel> */}
                                                    <RadioGroup
                                                        aria-labelledby="sorting-radio-label"
                                                        name="sorting-radio"
                                                        defaultValue={sortAndFilter?.sort}
                                                        onChange={e => {
                                                            setSortAndFilter({ ...sortAndFilter, sort: e.target.value })
                                                        }}
                                                    >
                                                        <FormControlLabel value="newest" control={<Radio />} label="Newest" />
                                                        <FormControlLabel value="recent-activity" control={<Radio />} label="Recent activity" />
                                                        <FormControlLabel value="highest-votes" control={<Radio />} label="Highest votes" />
                                                        <FormControlLabel value="most-frequent" control={<Radio />} label="Most frequent" />
                                                        {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col d-flex justify-content-start justify-content-lg-end align-items-start">
                                                <Button variant='outlined' color="success" className='text-capitalize rounded-3' onClick={() => {
                                                    console.log(sortAndFilter);
                                                    if (sortAndFilter?.sort) {
                                                        setSort(sortAndFilter?.sort);
                                                    }
                                                    if (sortAndFilter?.filter) {
                                                        setFilter(sortAndFilter?.filter);
                                                    }
                                                    setShowFilterBox(false);
                                                }}>Apply</Button>
                                                <Button variant='outlined' className='text-capitalize mx-2 rounded-3' onClick={() => {
                                                    setSortAndFilter({ ...sortAndFilter, sort: "", filter: "" });
                                                    setSort('');
                                                    setFilter('');
                                                    setPage(1);
                                                    setShowFilterBox(false);
                                                    setPageHeading("Recent Questions");
                                                }}>Clear&nbsp;Filters</Button>
                                                <Button variant='outlined' className='text-capitalize rounded-3' color='error' onClick={() => setShowFilterBox(false)}>Cancel</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {questions?.map((question, key) => (
                                <><QuestionCard question={question} key={question?.id} getQuestions={getQuestions} /></>
                            ))}
                            <div className={`d-flex justify-content-center mb-3 ${showLoadBtn ? '' : 'd-none'}`}>
                                <LoadingButton
                                    // size="small"
                                    onClick={async () => {

                                        setLoadMore(true);
                                        try {
                                            const res = await api.get(`/app/question?sort=${sort}&filter=${filter}&page=${page + 1}&limit=${limit}&offset=${offset}`);
                                            if (res.status === 200) {
                                                if (res?.data?.results?.length) {

                                                    let data = res?.data?.results;
                                                    setQuestions(questions.concat(data));

                                                    console.log("Loaded More Questions: ", questions);
                                                    setLoadMore(false);
                                                    setPage(page + 1);
                                                } else {
                                                    setLoadMore(false);
                                                    setShowLoadBtn(false);
                                                    setPage(1);
                                                }
                                            }
                                        } catch (error) {
                                            console.log(error?.response?.data?.error);
                                        }
                                    }}
                                    // endIcon={<SendIcon />}
                                    loading={loadMore}
                                    loadingIndicator="Loading…"
                                    // loadingPosition="end"
                                    variant="outlined"
                                    className='text-capitalize fw-bold'
                                >
                                    <span>Load More</span>
                                </LoadingButton>
                            </div>
                        </> :
                        <>
                            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                                <h3>No Questions Found</h3>
                                <p>It seems like nobody asked yet, but you can ask now!</p>
                                <Button varient="outlined" className="border text-capitalize fs-5 px-4 rounded-3" size="large" color="success" onClick={handleClickOpen}>Ask Question Now</Button>
                            </div>
                        </>
            }
            <ReportContent open={openReport} setOpen={setOpenReport} />
           
        </>
    )
}

export default AllQuestions;