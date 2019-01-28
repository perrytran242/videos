import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {

    render() {
        const renderVideoList = this.props.videoList.map( (video) => {
            
            return <VideoItem videoTitle={ video.snippet.title } key={ video.id.videoId }/>
        });
        return (
            <div>{ renderVideoList }</div>
        )
    }
}

export default VideoList;