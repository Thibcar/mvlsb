import React from 'react';

import '../../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FollowMe = () => {
    return (
        <div className="widget ntp-follow">
            <h2 className="widget-title">Follow</h2>
            <div className="ntp-description">
                <p>
                    Various versions have evolved over the years, sometimes.
                    Various versions have evolved over
                </p>
            </div>
            <div className="widget-follow-content ntp-social-square">
                <a href="#" title="Behance">
                    <FontAwesomeIcon icon={['fab', 'behance']} />
                </a>
                <a href="#" title="Facebook">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>
                <a href="#" title="Google Plus">
                    <FontAwesomeIcon icon={['fab', 'google-plus']} />
                </a>
                <a href="#" title="Linkedin">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
            </div>
        </div>
    );
};

export default FollowMe;
