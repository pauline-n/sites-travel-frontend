import './App.css';
import ContactUs from './Pages/ContactUs';
import Gallery from './Pages/Gallery';
import LoginPage from './Pages/LoginPage';
// import NavBarComponent from './Components/NavBarComponent';
// import Register from './Pages/Register';


function App() {
  return (
    <div className="App">
     {/* <Register /> */}
     <LoginPage />
     <ContactUs />
     <Gallery />
    </div>
  );
}

export default App;
