// import { Edit } from '@mui/icons-material';
// import { AspectRatio, Box, Button, Card, Chip, ChipDelete, IconButton, Typography } from '@mui/joy';
import React from 'react';

import Experience from './components/Experience';
import { useGlobalContext } from 'global/context';

const ProfessionalProfile = () => {
  const {userData} = useGlobalContext();
  return (
    <>
      <div className="container">
        <div className="mb-5">
          <Experience userId={userData?.id}  />
        </div>
      </div>
    </>
  )
}

export default ProfessionalProfile