import React from 'react';

const VideoItem = ({ videoTitle }) => {
    console.log(videoTitle);
    return (
        <div>
            <ul>
                <li>{ videoTitle }</li>
            </ul>
        </div>
    )
}

export default VideoItem;

