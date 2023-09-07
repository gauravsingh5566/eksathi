import QuestionsTab from 'pages/user/profile/tabs/QuestionsTab';
import React from 'react';

const ProfileQuestions = ({profile}) => {
    return (
        <>
            <div className="p-4 shadow mb-5 rounded-4">
            <QuestionsTab profile={profile} />
            </div>
        </>
    )
}

export default ProfileQuestions;