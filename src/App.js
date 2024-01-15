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
      Avengers: [],
      loading: true,
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

    //Avengers
    fetch('https://www.omdbapi.com/?s=Avengers&apikey=bb3165a1')
    .then(response => response.json())
    .then(data => this.setState({ Avengers: data }))
    .catch(error => console.error('Error fetching data:', error))
    .finally(() => {
      // Cuando todas las llamadas fetch se completen, actualiza el estado de carga
      this.setState({ loading: false });
    });
    
  }

  render() {

    const { loading, StarWarsData, HarryPotterData, LordData } = this.state;

    if (loading) {
      return <p>Loading...</p>; // Muestra un indicador de carga mientras esperas los datos
    }


    const starWarsSaga = this.state.StarWarsData && // Verifica si this.state.StarWarsData está definido
    this.state.StarWarsData.Search && this.state.StarWarsData.Search.length > 0
      ? "Related to " + this.state.StarWarsData.Search[0].Title
      : "No related saga available";

    const harryPotterSaga = this.state.HarryPotterData && // Verifica si this.state.StarWarsData está definido
    this.state.HarryPotterData.Search && this.state.HarryPotterData.Search.length > 0
      ? "Related to " + this.state.HarryPotterData.Search[0].Title
      : "No related saga available";

    const avengersSaga = this.state.Avengers && // Verifica si this.state.StarWarsData está definido
    this.state.Avengers.Search && this.state.Avengers.Search.length > 0
      ? "Related to " + this.state.Avengers.Search[0].Title
      : "No related saga available";


    return (
      
      <div className="App">
        {console.log('estos es antes del Search', this.state.StarWarsData)}
        {console.log(this.state.StarWarsData.Search)}
        {console.log(this.state.HarryPotterData.Search)}
        {console.log(this.state.Avengers.Search)}
        <NavbarComponent />
        <div className="container-fluid px-4">
          <TitleContentComponent />
          <GalleryContentComponent data={this.state.StarWarsData.Search} saga={starWarsSaga} />
          <GalleryContentComponent data={this.state.HarryPotterData.Search} saga={harryPotterSaga} />
          <GalleryContentComponent data={this.state.Avengers.Search} saga={avengersSaga} />
          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default App;
