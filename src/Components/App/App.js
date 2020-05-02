import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Demons',
          artist: 'Imagine Dragons',
          album: 'Night Visions',
          id: 1,
        },
        {
          name: 'Natural',
          artist: 'Imagine Dragons',
          album: 'Origins',
          id: 2,
        },
        {
          name: 'Bad Liar',
          artist: 'Imagine Dragons',
          album: 'Origins',
          id: 3,
        },
      ],
      playlistName: 'Imagine Dragons music',
      playlistTracks: [
        {
          name: 'Demons',
          artist: 'Imagine Dragons',
          album: 'Night Visions',
          id: 4,
        },
        {
          name: 'Natural',
          artist: 'Imagine Dragons',
          album: 'Origins',
          id: 5,
        },
        {
          name: 'Bad Liar',
          artist: 'Imagine Dragons',
          album: 'Origins',
          id: 6,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
