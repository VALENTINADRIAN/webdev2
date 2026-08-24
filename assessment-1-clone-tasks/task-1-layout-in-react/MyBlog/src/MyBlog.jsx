import React from 'react';
import './App.css'; 

// Import images from assets folder
import logoImage from './assets/logo.svg';
import authorImg from './assets/profile_picture.jpg';
import iconFacebook from './assets/facebook-icon.png';
import iconInstagram from './assets/instagram-icon.svg';
import iconTwitter from './assets/twitter-icon.svg';

import grid1 from './assets/all-encores.jpg';
import grid2 from './assets/articulation.jpg';
import grid3 from './assets/blurred.jpg';
import grid4 from './assets/encores-2.jpg';
import grid5 from './assets/eulogy-for-evolution.jpg';
import grid6 from './assets/the-cell.jpg';

export default function MyBlog() {
  return (
<div className="site-wrapper">
      
      {/* Top Navigation */}
      <header className="header-nav">
        <img src={logoImage} alt="Erased Tapes Logo" className="main-logo" />
        <nav className="menu-links">
          <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
          <a href="#story">Our Story</a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="article-container">
        
        {/* Title & Lead Paragraph */}
        <h1>Erased Tapes:<br/>Exploring the Sonic Frontier</h1>
        <p className="intro-paragraph">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu scelerisque turpis posuere tempor? Leo condimentum himenaeos molestie elit; maximus iaculis proin nulla. Ullamcorper nibh cras conubia suscipit dapibus sagittis, facilisi habitant vivamus. Etiam fusce posuere himenaeos ipsum commodo sollicitudin himenaeos nec.
        </p>

        {/* 3-Column Text Section */}
        <div className="text-columns">
          <div>
            <h2>Heading</h2>
            <p className="body-paragraph">Montes ridiculus mus tellus nunc vulputate. Cras facilisi congue et facilisis porttitor litora etiam praesent porttitor. Sollicitudin cubilia scelerisque diam taciti lacus. Dapibus penatibus augue dapibus sagittis; rhoncus accumsan. Accumsan urna et, ultrices placerat justo rutrum. Tristique mattis ante cras accumsan convallis phasellus fermentum magna. Rhoncus curabitur pharetra proin ante nam adipiscing accumsan hac. Rutrum efficitur nullam integer ut ex id. Pulvinar vel at vestibulum vivamus sed nascetur eget.</p>
            <p className="body-paragraph">Laoreet volutpat hendrerit est aliquam; fusce quam tempor. Nisi interdum praesent pellentesque non non blandit cubilia et. Aptent maximus vehicula nullam odio tempor. Placerat dis facilisis potenti iaculis, primis vivamus nec at magnis. Aadipiscing curabitur vestibulum imperdiet dolor primis. Inceptos penatibus inceptos eu habitasse aptent vehicula platea litora congue. Ultricies mauris fringilla rhoncus pharetra iaculis vitae. Venenatis himenaeos eget molestie dignissim consectetur tellus litora. Porta a iaculis mi primis rhoncus.</p>
        <p className="body-paragraph">Curae habitasse elementum amet nunc, natoque at. Tortor vel blandit sociosqu auctor aliquam maximus porta feugiat. Eros phasellus platea mauris condimentum natoque hendrerit tellus id. Ex imperdiet vitae maximus adipiscing neque quam tempor orci. Lobortis porta lacinia cubilia tellus vel placerat; facilisis mi euismod. Neque eu orci nulla penatibus elit nec.</p>
        <p className="body-paragraph">Parturient habitasse facilisis purus donec, enim platea maximus. Primis class varius augue sed class ultricies. Posuere curabitur tristique penatibus montes hac ac imperdiet. Risus per sociosqu, cursus leo condimentum ac fringilla. Nibh curabitur eros tempus nec; nam curae hendrerit. Mattis placerat maximus mollis praesent, eros adipiscing dui.</p>
          </div>
          <div>
            <h2>Heading</h2>
            <p className="body-paragraph">Habitasse ornare fames facilisis montes pulvinar habitasse fringilla. Risus porta cursus duis vivamus quam adipiscing nec. Ante at posuere eget aptent natoque vivamus ante. Aenean enim dapibus viverra sem efficitur. Felis nam semper integer justo in. Facilisi augue urna torquent lacinia facilisi inceptos. Natoque varius feugiat massa scelerisque natoque, cras tempor inceptos.</p>
            <p className="body-paragraph">Amet ac leo, imperdiet hac litora auctor. Suscipit congue duis sociosqu auctor euismod vivamus urna diam. Nunc enim himenaeos litora facilisi, tincidunt torquent. Eros sapien laoreet duis, volutpat rutrum pulvinar. Natoque semper sapien aptent quis habitant aliquam condimentum luctus. Tempus pellentesque congue varius dapibus pharetra. Fermentum diam auctor bibendum rhoncus leo. Vestibulum tincidunt fames convallis ligula semper porttitor.</p>
            <p className="body-paragraph">Magnis maximus morbi, litora accumsan vivamus facilisi etiam pharetra. Platea congue orci sagittis purus scelerisque. Velit taciti maecenas praesent nam lobortis metus vehicula habitasse porttitor. Porta gravida placerat lobortis litora elit feugiat venenatis. Cras magna himenaeos consequat aliquet ad nec pharetra. Ligula eleifend imperdiet aptent primis placerat. Nec magnis tempus vulputate ipsum ad sagittis mus.</p>
          </div>
          <div>
            <h2>Heading</h2>
            <p className="body-paragraph">Vulputate nullam tempus montes eu tellus integer adipiscing pulvinar. Pharetra eu luctus id a potenti. Pulvinar egestas conubia ante varius lobortis iaculis metus. Netus sem imperdiet hendrerit vehicula netus est gravida tortor. Nunc ridiculus per montes nulla, facilisis lacinia per leo. Hendrerit scelerisque nulla in suspendisse sit tortor sagittis. Suscipit dictumst ipsum laoreet cras egestas suscipit orci. Per molestie felis erat platea blandit commodo.</p>
            <p className="body-paragraph">Ad venenatis sapien habitant posuere donec porttitor vel nisi. Sodales laoreet donec diam rhoncus lectus euismod orci torquent curae. Fames rhoncus torquent sed convallis; potenti cras. Dictumst arcu libero nulla malesuada mi ridiculus platea. Interdum ullamcorper fringilla himenaeos mollis; in arcu pharetra massa. Nunc mauris taciti montes sapien molestie orci ac quis.</p>
          </div>
        </div>

        {/* Image Grid */}
        <section className="image-mosaic">
          <img src={grid1} alt="Album Art" className="mosaic-img" />
          <img src={grid2} alt="Album Art" className="mosaic-img" />
          <img src={grid3} alt="Album Art" className="mosaic-img" />
        <img src={grid4} alt="Album Art" className="mosaic-img" />
          <img src={grid5} alt="Album Art" className="mosaic-img" />
          <img src={grid6} alt="Album Art" className="mosaic-img" />
        </section>

        {/* Author Section */}
        <section className="author-profile">
          <div className="author-info">
            <h2>The Author</h2>
            <p className="body-paragraph">Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.</p>
          </div>
          <img src={authorImg} alt="Author" className="author-portrait" />
          <div className="author-socials">
             <img src={iconFacebook} alt="Facebook" className="icon" />
             <img src={iconTwitter} alt="Twitter" className="icon" />
             <img src={iconInstagram} alt="Instagram" className="icon" />
          </div>
        </section>

        {/* The First Copyright Area */}
        <p className="body-paragraph" style={{ textAlign: 'left', marginBottom: '0' }}>
          Copyright © 2023 Erased Disks Ltd.
        </p>

      </main>

      {/* Comments Section */}
      <aside className="comments-section">
        <h2>Comments</h2>
        
        <div className="comment-block">
        <div className="commenter-name">soundseeker92</div>
          <p className="comment-text">This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?</p>
        </div>

        <div className="comment-block">
        <div className="commenter-name">Ted Baker</div>
          <p className="comment-text">I've been following the label for years—so glad someone's finally writing about their impact.</p>
        </div>

        <div className="comment-block">
          <div className="commenter-name">Queen_of_noise</div>
          <p className="comment-text">I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling.</p>
        </div>
      </aside>

      {/* Footer (Second Copyright Area) */}
      <footer className="bottom-footer">
        <nav className="footer-nav">
          <a href="#blog">Our Blog</a>
          <a href="#artists">Our Artists</a>
          <a href="#story">Our Story</a>
        </nav>
        <p>Copyright © 2023 Erased Disks Ltd.</p>
        <div className="social-icons-row">
        <img src={iconFacebook} alt="Facebook" className="icon" />
          <img src={iconTwitter} alt="Twitter" className="icon" />
          <img src={iconInstagram} alt="Instagram" className="icon" />
        </div>
      </footer>

    </div>
  );
}
