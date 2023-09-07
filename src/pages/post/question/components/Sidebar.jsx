import RelatedTags from 'pages/post/tags/RelatedTags';
import React from 'react';
import RelatedQuestions from '../RelatedQuestions';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar pt-40px">
                {/* <UserListCard title={"Users Online"} data={onlineUsers}/> */}
                {/* end card */}
                <RelatedQuestions />
                {/* end card */}
                <RelatedTags />
                {/* end card */}
                <div className="ad-card">
                    <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">
                        Advertisements
                    </h4>
                    <div className="ad-banner mb-4 mx-auto">
                        <span className="ad-text">290x500</span>
                    </div>
                </div>
                {/* end ad-card */}
            </div>
            {/* end sidebar */}
        </>
    )
}

export default Sidebar;