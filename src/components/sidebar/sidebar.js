import React from 'react';

import AboutMe from '../widgets/about-me';
import FollowMe from '../widgets/follow-me';
import SidebarPostList from '../widgets/sidebar-post-list';
import SidebarNewsletter from '../widgets/sidebar-newsletter';
import Instagram from '../widgets/instagram';
import Tweets from '../widgets/tweets';
import Tags from '../widgets/tags';
import SidebarContact from '../widgets/sidebar-contact';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <AboutMe />
            <FollowMe />
            <SidebarPostList />
            {/* <SidebarNewsletter /> */}
            <Instagram />
            <Tweets />
            <Tags />
            <SidebarContact />
        </div>
    );
};

export default Sidebar;
