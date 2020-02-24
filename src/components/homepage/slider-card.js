import React from 'react';

import Tags from '../tags';
import ArchivePostTitle from '../archive-post-title';
import ReadMore from '../read-more';

const SliderCard = () => {
    return (
        <div class="content-box">
            <div class="post-cat">
                <Tags />
            </div>
            <ArchivePostTitle />
            <div class="item-entry">
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin
</p>
            </div>
            <ReadMore />
        </div>
    )
}

export default SliderCard;