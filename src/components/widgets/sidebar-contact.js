import React from 'react';

import '../../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarContact = () => {
    return (
        <div className="widget ntp-contact">
            <h2 className="widget-title ">Contact Me</h2>
            <div className="widget-contact-content">
                <div className="ntp-description">
                    <p>
                        Amet augue rutrum gravida tellus nostra integer netus,
                        feugiat sociis. Euismod nunc lacus ante commodo tortor
                        montes eu duis orci tempor iaculis sociosqu.
                    </p>
                </div>
                <div className="item-icon-left ntp-description">
                    <FontAwesomeIcon icon={'map-marker'} />
                    <span>75 Washington DC </span>
                </div>
                <div className="item-icon-left ntp-description">
                    <FontAwesomeIcon icon={'envelope'} />
                    <span>
                        <a href="mailto:kendytheme.ksb@gmail.com">
                            kendytheme.ksb@gmail.com
                        </a>
                    </span>
                </div>
                <div className="item-icon-left ntp-description">
                    <FontAwesomeIcon icon={'phone'} />
                    <span>+123 456 789</span>
                </div>
            </div>
        </div>
    );
};

export default SidebarContact;
