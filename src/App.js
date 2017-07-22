import React, { Component } from 'react';

import ReactMedellinLogo from './svg/react.svg';
import GithubLogo from './svg/github.svg';
import MeetupLogo from './svg/meetup.svg';

class App extends Component {
  render() {
    return (
      <main
        className="container"
      >
        <div className="content-wrapper">
          <img src={ReactMedellinLogo} alt="React Medellin Logo"/>

          <h1 className="title">
            React Medellín
          </h1>

          <p className="content">
            Suscríbete a nuestra lista de correo para enterarte de todos nuestros 
            <strong> meetups</strong>, noticias, <strong>ofertas laborales</strong>,
            <strong>workshops</strong> y más
          </p>

          <a
            href="http://eepurl.com/cWZVoD"
            className="btn"
          >
            Suscríbete
          </a>

          <section className="logos">
            <a
              href="https://meetup.com/react-medellin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={MeetupLogo} alt="React Medellín Meetup"/>
            </a>
            <a
              href="https://github.com/react-medellin/meetup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubLogo} alt="React Medellín Github"/>
            </a>
          </section>
        </div>
        <footer className="footer">
          Made with
          <span role="img" aria-label="love">❤️</span>
          by
          <strong>React Medellín</strong>
        </footer>
      </main>
    );
  }
}

export default App;
