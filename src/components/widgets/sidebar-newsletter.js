import React from 'react';

const SidebarNewsletter = () => {
    return (
        <div className="widget ntp-mailchimp">
            <h2 className="widget-title">Mailchimp</h2>
            <p className="ntp-description">
                Paste into the external application you'd like to conquer
                connect to. Or just scan the QR code below.
            </p>
            <form className="ntp-subscribe">
                <div className="form-item form-remove">
                    <input
                        type="email"
                        className="ntp-subscribe-email"
                        placeholder="Your mail..."
                        value=""
                        required=""
                    />
                </div>
                <div className="form-submit form-remove">
                    <input
                        type="submit"
                        className="ntp-btn ntp-subscribe"
                        value=""
                    />
                </div>
            </form>
            <p className="ntp-description ntp-subdescription">
                Egestas vel leo tempus, luctus dapibus mauris
            </p>
            <p className="subscribe-status"></p>
        </div>
    );
};

export default SidebarNewsletter;
