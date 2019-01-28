import youtube from '../apis/youtube';
import React, { Component } from 'react';

import VideoList from './VideoList';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';

class App extends Component {
    state = {
        videos: [],
        videoDetails: ''
    }

    videoDetails = (details) => {
        this.setState({videoDetails: details});
    }

    onYoutubeSearch = async (userSearchTerm) => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    q: userSearchTerm,
                }
            });
            this.setState({videos: response.data.items});

        } catch (err) {
            console.log(err);
        }
    }
    
    render() {
        console.clear();
        console.log(this.state.videoDetails);
        return (
            <div className="ui container">
                <SearchBar userSearch={this.onYoutubeSearch} />
                <VideoDetail />
                <VideoList getVideoDetails={this.videoDetails} videoList={this.state.videos}/>
            </div>
        )
    }
}

export default App;

