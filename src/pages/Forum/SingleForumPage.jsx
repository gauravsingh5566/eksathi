import { Category, Filter2TwoTone, FilterAltTwoTone, HelpCenterOutlined, HelpOutlineTwoTone, SearchTwoTone, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Divider, FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select } from '@mui/material';

import { useGlobalContext } from 'global/context';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import AskQuestion from './components/Questions/AskQuestion';
import QuestionSkeleton from './components/Skeleton/QuestionSkeleton';
import "./Forum.css";
import ReportContent from './components/Modals/ReportContent';
import SingleQuestion from './components/Questions/SingleQuestion';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

const SingleForumPage = () => {
  const { userData, api, apiAuth } = useGlobalContext();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [openReport, setOpenReport] = React.useState(false);
  const { slug } = useParams();
  const [{setSkill}] = useOutletContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getCategories = async () => {
    try {
      const res = await api.get(`/app/categories`);
      if (res?.status === 200) {
        setCategories(res?.data?.results);
        console.log("Categories Single Page: ", res?.data?.results);
      }
    } catch (error) {
      console.log(error);
      // pop2.error(error?.response?.data?.message);
    }
  }

  const getQuestions = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/app/question/${slug}`);
      if (res?.status === 200) {
        setQuestions(res?.data?.results);
        setSkill(res?.data?.results?.tags[0]?.name);
        console.log("Single Question Data: ", res);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }


  // useEffect(() => {
  //   getQuestionsByQuery();
  // }, [sort, filter]);

  useEffect(() => {
    getCategories();
    getQuestions();
  }, [slug]);

  return (
    <>
      <div className="">
        <Button onClick={() => navigate(-1)} className='mb-1'><ArrowBackTwoToneIcon /> Back</Button>
        <div >
          {
            loading ?
              <>

                <QuestionSkeleton />
                <QuestionSkeleton />
                <QuestionSkeleton />
              </>
              :
              questions ?
                <>

                  <SingleQuestion questionData={questions} getQuestions={getQuestions} />

                </> :
                <>
                  <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                    <h3>No Questions Found</h3>
                    <p>It seems like you are lost, but you can ask now!</p>
                    <Button varient="outlined" className="border text-capitalize fs-5 px-4 rounded-3" size="large" color="success" onClick={handleClickOpen}>Ask Question Now</Button>
                  </div>
                </>
          }
        </div>
      </div>
      <AskQuestion open={open} handleClose={handleClose} getQuestions={getQuestions} categories={categories} />
      <ReportContent open={openReport} setOpen={setOpenReport} />
    </>
  )
}

export default SingleForumPage;