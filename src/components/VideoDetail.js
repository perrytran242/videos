import React from 'react';

const VideoDetail = (props) => {
    console.log(props.videoID);
    return (
        <div className="ui embed" data-url={`https://www.youtube.com/embed/O6Xo21L0ybE${props.videoID}`} data-placeholder="/images/bear-waving.jpg"></div>    
    )
}

export default VideoDetail;