import React, { Component } from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import GalleryContentComponent from './components/GalleryContentComponent';
import NavbarComponent from './components/NavbarComponent';
import TitleContentComponent from './components/TitleContentComponent';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StarWarsData: [],
      HarryPotterData: [],
      LordData: [],
    };
  }

  componentDidMount() {
    // Realizar la llamada fetch aquí y actualizar el estado con los datos recuperados

    //STAR WARS
    fetch('https://www.omdbapi.com/?s=Star%20Wars&apikey=bb3165a1')
      .then(response => response.json())
      .then(data => this.setState({ StarWarsData: data }))
      .catch(error => console.error('Error fetching data:', error));

    //Harry Potter
    fetch('https://www.omdbapi.com/?s=Harry%20Potter&apikey=bb3165a1')
    .then(response => response.json())
    .then(data => this.setState({ HarryPotterData: data }))
    .catch(error => console.error('Error fetching data:', error));

    //Lord of the ring
    fetch('https://www.omdbapi.com/?s=Lord%20of%20the%20ring&apikey=bb3165a1')
    .then(response => response.json())
    .then(data => this.setState({ HarryPotterData: data }))
    .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      
      <div className="App">
        {console.log(this.state.StarWarsData)}
        {console.log(this.state.HarryPotterData)}
        {console.log(this.state.LordData)}
        <NavbarComponent />
        <div className="container-fluid px-4">
          <TitleContentComponent />
          <GalleryContentComponent data={this.state.galleryData} />
          <GalleryContentComponent data={this.state.galleryData} />
          <GalleryContentComponent data={this.state.galleryData} />
          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default App;
