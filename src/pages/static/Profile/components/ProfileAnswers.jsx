import AnswersTab from 'pages/user/profile/tabs/AnswersTab';
import React from 'react';

const ProfileAnswers = ({ profile }) => {
    return (
        <>
            <div className="p-4 mb-5 shadow rounded-4">
                <AnswersTab profile={profile} />
            </div>
        </>
    )
}

export default ProfileAnswers;