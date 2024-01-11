
import './App.css';
import FooterComponent from './components/FooterComponent';
import GalleryContentComponent from './components/GalleryContentComponent';
import NavbarComponent from './components/NavbarComponent';
import TitleContentComponent from './components/TitleContentComponent';



function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <div class="container-fluid px-4">
        <TitleContentComponent/>
        <GalleryContentComponent/>
        <GalleryContentComponent/>
        <GalleryContentComponent/>
        <FooterComponent/>
      </div>
    </div>
  );
}

export default App;
