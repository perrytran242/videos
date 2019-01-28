import React from 'react';

const VideoItem = ({ videoTitle, getDetails }) => {
    console.log();
    return (
        <div>
            <ul>
                <li onClick={() => getDetails(videoTitle)}>{ videoTitle }</li>
            </ul>
        </div>
    )
}

export default VideoItem;

