import React from 'react'
import AchivementWidget from 'components/widget/AchivementWidget';
import TrendingQuesWidget from 'components/widget/TrendingQuesWidget';
import TrendingTagsWidget from 'components/widget/TrendingTagsWidget';

const UserDetailSidebar = () => {
    return (
        <div className="sidebar">
            <AchivementWidget />
            <TrendingQuesWidget />
            <TrendingTagsWidget />
        </div>
    )
}

export default UserDetailSidebar