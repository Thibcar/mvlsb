import React from 'react';

import Tags from '../tags';
import ArchivePostTitle from '../archive-post-title';
import ReadMore from '../read-more';

const SliderCard = () => {
    return (
        <div className="content-box">
            <div className="post-cat">
                <Tags />
            </div>
            <ArchivePostTitle />
            <div className="item-entry">
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin
</p>
            </div>
            <ReadMore />
        </div>
    )
}

export default SliderCard;