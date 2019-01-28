import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {

    render() {
        const renderVideoList = this.props.videoList.map( (video) => {
            console.log(video);
            return <VideoItem 
                        highQualityImg={ video.snippet.thumbnails.high.url}
                        thumbnailImage={ video.snippet.thumbnails.default.url }
                        getDetails={ this.props.getVideoDetails }
                        videoTitle={ video.snippet.title } 
                        key={ video.id.videoId } 
                        videoId={ video.id.videoId }
                    />
        });

        return (
            <div>{ renderVideoList }</div>
        )
    }
}

export default VideoList;