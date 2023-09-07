import ConnectionTab from 'pages/user/profile/tabs/ConnectionTab';
import React from 'react';

const ProfileConnections = ({profile}) => {
  return (
    <>
        <ConnectionTab profile={profile} />
    </>
  )
}

export default ProfileConnections;