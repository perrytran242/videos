import React from 'react';

const listStyleType ={
    listStyleType: 'none',
}

const VideoItem = ({ videoTitle, getDetails, thumbnailImage, videoId }) => {
    return (
        <div>
            <ul>
                <li style={listStyleType} onClick={() => getDetails(videoId)}>
                    <img src={thumbnailImage} alt=""/>
                    { videoTitle }
                </li>
            </ul>
        </div>
    )
}

export default VideoItem;

