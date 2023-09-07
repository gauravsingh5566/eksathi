import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ShareIcon from '@mui/icons-material/Share';
import PlaceIcon from '@mui/icons-material/Place';
import Experience from 'pages/user/setting/components/Experience';
import Education from 'pages/user/setting/components/Education';
import Certification from 'pages/user/setting/components/Certification';
import Skills from 'pages/user/setting/components/Skills';
import Bio from 'pages/user/setting/components/Bio';
import { Button, CircularProgress, IconButton, LinearProgress, Tooltip } from '@mui/joy';
import { ConnectWithoutContact, Facebook, FiberManualRecordRounded, FiberManualRecordTwoTone, GitHub, HourglassTopTwoTone, Instagram, LinkTwoTone, LinkedIn, MailTwoTone, Menu, PersonAddAltRounded, RocketLaunchTwoTone, SmsFailedRounded, Star, StarRounded, Twitter, YouTube } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router';
import { Popup } from 'layout/Popup';
import { useGlobalContext } from 'global/context';
import { useEffect } from 'react';
import moment from 'moment';
import { toast } from 'react-hot-toast';
import ProfileDetails from './components/ProfileDetails';
import ProfileAnswers from './components/ProfileAnswers';
import ProfileQuestions from './components/ProfileQuestions';
import ProfileConnections from './components/ProfileConnections';
import SuggestedExperts from 'pages/user/widgets/SuggestedExperts';
import TrendingQuestions from 'pages/user/widgets/TrendingQuestions';
import { Rating } from '@mui/material';

function ProfileContainer() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);


    return (
        <>
            <div className='container mt-4'>

                <div className="row">

                    <div className="col col-12 col-lg-9">
                        <Outlet context={[setSkills]} />
                    </div>
                    <div className="col col-12 col-lg-3">

                        <SuggestedExperts heading="Connect to experts" />

                        <TrendingQuestions type="expertise" expertise={skills} />
                    </div>

                </div>

            </div>

        </>


    )
}

export default ProfileContainer;
