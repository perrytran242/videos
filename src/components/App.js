import youtube from '../apis/youtube';
import React, { Component } from 'react';

import VideoList from './VideoList';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';

class App extends Component {
    state = {
        videos: [],
        id: '',
        image: ''
    }

    videoDetails = (id, image) => {
        this.setState({ id, image });
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
        return (
            <div className="ui container">
                <SearchBar userSearch={this.onYoutubeSearch} />
                <VideoDetail videoImage={ this.state.image } videoID={this.state.id} />
                <VideoList getVideoDetails={this.videoDetails} videoList={this.state.videos} />
            </div>
        )
    }
}

export default App;

