import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {

    render() {
        console.log("PROPS:", this.props);
        const renderVideoList = this.props.videoList.map( (video) => {
            return <VideoItem 
                        getDetails={this.props.getVideoDetails}
                        videoTitle={ video.snippet.title } 
                        key={ video.id.videoId } 
                    />
        });

        return (
            <div>{ renderVideoList }</div>
        )
    }
}

export default VideoList;