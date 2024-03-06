import React, { useState } from 'react';
import disneyLogo from './../assets/Images/logo.png'; // Importa la imagen del logo

function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Validación simple: verifica si el correo electrónico y la contraseña son válidos
      if (email === 'usuario@correo.com' && password === 'contrasena123') {
        // Inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');
        onLoginSuccess(); // Llama a la función proporcionada por el componente padre para manejar el inicio de sesión exitoso
      } else {
        // Inicio de sesión fallido
        setError('Correo electrónico o contraseña incorrectos');
      }
    };
  
    return (
      <div className="w-96 mx-auto my-20 p-8 bg-gray-800 rounded-lg shadow-lg text-white">
        {/* 'w-96' establece un ancho máximo para el formulario */}
        {/* 'mx-auto' establece un margen automático en los lados izquierdo y derecho */}
        {/* 'my-20' establece un margen vertical de tamaño 20 */}
        <img src={disneyLogo} alt="Disney Logo" className="mx-auto mb-8" /> {/* Agrega el logo del formulario */}
        <h2 className="text-3xl font-bold mb-6 text-center">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-400">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 block w-full h-12 rounded-md bg-gray-700 border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white text-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-400">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 block w-full h-12 rounded-md bg-gray-700 border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white text-lg"
            />
          </div>
          {error && <p className="text-red-500 mb-6">{error}</p>} {/* Muestra el mensaje de error si existe */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600 mb-4"
          >
            Iniciar sesión
          </button>
          <div className="flex justify-between">
            <a
              href="#"
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              Registrarse
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              Recuperar contraseña
            </a>
          </div>
        </form>
      </div>
    );
  }
  
  export default Login;