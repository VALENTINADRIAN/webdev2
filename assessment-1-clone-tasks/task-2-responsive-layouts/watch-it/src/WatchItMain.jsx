import React from 'react';
import './App.css';

// Asset Imports
import imgRoger from './assets/who-framed-roger-rabbit.jpg';
import imgHook from './assets/hook.jpg';
import imgLaLaLand from './assets/la-la-land.jpg';
import imgHiddenFigures from './assets/hidden-figures.jpg';
import imgPalmSprings from './assets/palm-springs.jpg';
import imgBarbie from './assets/barbie.jpg';

// The data erray for the movie descriptions, ID, title, image
const filmCatalog = [
  { 
    id: 'm1', 
    title: 'Who Framed Roger Rabbit (1988)', 
    desc: 'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!', 
    image: imgRoger 
  },
  { 
    id: 'm2', 
    title: 'Hook (1991)', 
    desc: 'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.', 
    image: imgHook 
  },
  { 
    id: 'm3', 
    title: 'La La Land (2016)', 
    desc: 'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!', 
    image: imgLaLaLand 
  },
  { 
    id: 'm4', 
    title: 'Hidden Figures (2016)', 
    desc: "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.", 
    image: imgHiddenFigures 
  },
  { 
    id: 'm5', 
    title: 'Palm Springs (2020)', 
    desc: 'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.', 
    image: imgPalmSprings 
  },
  { 
    id: 'm6', 
    title: 'Barbie (2023)', 
    desc: 'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!', 
    image: imgBarbie 
  }
];

export default function WatchItMain() {
  return (
    <div>
      {/* HEADER SECTION */}
      <header className="top-navigation">
        <div className="header-bounds">
            <h1 className="brand-logo">watch.it</h1>
            
            {/* Nav links */}
            <nav className="desktop-links">
                <a href="#action">Action</a>
                <a href="#comedy">Comedy</a>
                <a href="#romance">Romance</a>
                <a href="#drama">Drama</a>
            </nav>
            
            <button className="search-btn">SEARCH</button>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="content-bounds">
        <section className="catalog-grid">
          {filmCatalog.map((film) => (
            <article key={film.id} className="film-item">
              <img src={film.image} alt={film.title} className="film-poster" />
              
              <div className="film-details">
                <div className="text-wrap">
                  <h2 className="film-heading">{film.title}</h2>
                  <p className="film-desc">{film.desc}</p>
                </div>
                <button className="watch-action-btn">WATCH NOW</button>
              </div>
              
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
