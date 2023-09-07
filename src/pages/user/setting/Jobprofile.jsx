import { Edit } from '@mui/icons-material';
import { AspectRatio, Box, Button, Card, Chip, ChipDelete, IconButton, Typography } from '@mui/joy';
import React from 'react';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import CertificationCard from './components/CertificationCard';
import SkillsChip from './components/SkillsChip';
import AddExperience from '../profile/components/Modals/AddExperience';
import { useState } from 'react';
import AddEducation from '../profile/components/Modals/AddEducation';
import AddCertification from '../profile/components/Modals/AddCertification';
import AddSkill from '../profile/components/Modals/AddSkill';
import Experience from './components/Experience';
import Education from './components/Education';
import Certification from './components/Certification';
import Skills from './components/Skills';
import { useGlobalContext } from 'global/context';

const Jobprofile = () => {
  const {userData} = useGlobalContext();
  return (
    <>
      <div className="container">
        <div className="mb-5">
          <Experience userId={userData?.id}  />
        </div>

        <div className="mb-5">
          <Education userId={userData?.id}  />
        </div>

        <div className="mb-5">
          <Certification userId={userData?.id}  />
        </div>

        <div>
        <Skills userId={userData?.id}/>
        </div>
      </div>
    </>
  )
}

export default Jobprofile