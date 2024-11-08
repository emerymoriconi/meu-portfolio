import React from 'react';
import '../App.css';
import perfil from'../perfil.jpg';

function Home() {
    return (
      <div className="home">
        <header className="home-header">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
  
        <main>
          <section className='hero'>
            <img className='profile-pic' src={perfil} alt='Foto de perfil' />
            <h1>Olá, eu sou a Émery</h1>
            <p>Desenvolvedora, apaixonada por tecnologia!</p>
          </section>
        </main>
      </div>
    );
  }
  
  export default Home;