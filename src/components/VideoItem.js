import React from 'react';
import './VideoItem.css';

const listStyleType ={
    listStyleType: 'none',
    cursor: 'pointer',
    border: '1px solid black',
}


const VideoItem = ({ videoTitle, getDetails, thumbnailImage, videoId, highQualityImg }) => {
    return (
        <div>
            <ul>
                <li style={ listStyleType } onClick={() => getDetails(videoId, highQualityImg)}>
                    <img src={ thumbnailImage } alt=""/>
                    \<p>{ videoTitle }</p>
                </li>
            </ul>
        </div>
    )
}

export default VideoItem;

