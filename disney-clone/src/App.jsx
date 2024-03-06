import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductionHouse from './components/ProductionHouse';
import GenreMovieList from './components/GenereMovieList';
import Login from './components/Login'; // Importa el componente de inicio de sesión

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar el inicio de sesión

  // Función para manejar el inicio de sesión exitoso
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className=''>
      {/* Si el usuario no ha iniciado sesión, muestra el formulario de inicio de sesión */}
      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
      
      {/* Si el usuario ha iniciado sesión, muestra el contenido principal */}
      {isLoggedIn && (
        <>
          <Header />
          <Slider />
          <ProductionHouse />
          <GenreMovieList />
        </>
      )}
    </div>
  );
}

export default App;