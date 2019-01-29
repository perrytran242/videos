import React from 'react';
import { Embed } from 'semantic-ui-react';

const VideoDetail = (props) => {
    console.log(props);
    return (
        <Embed placeholder={props.videoImage} id={props.videoID} source="youtube" />
    )
}

export default VideoDetail;