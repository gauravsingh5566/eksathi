import { Button } from '@mui/joy';
import React from 'react';
import { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import AddExperience from 'pages/user/profile/components/Modals/AddExperience';
import { useGlobalContext } from 'global/context';
import { useEffect } from 'react';
import ResearchCard from './ResearchCard';
import AddResearch from 'pages/user/profile/components/Modals/AddResearch';

function Research({userId}) {
 

   

  return (
    <>
    <div className="job-container">
        <div className="job-header mb-4 d-flex flex-wrap align-items-center justify-content-between">
            <h4>Research</h4>
            {
                
                    <Button variant='soft' >Add Research </Button>
                    
            }
        </div>
        {/* <div className="job-list">
            {
                
                    <ResearchCard  />
                    
                
            }

        </div>
        <AddResearch  action='add' /> */}
    </div>
</>
  )
}

export default Research