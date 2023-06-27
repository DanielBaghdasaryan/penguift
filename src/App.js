import React from 'react';
import bgImage from './bgImage.jpg';
import './App.css';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
      backgroundSize: 'cover',
      minHeight: '100vh',
      minWidth: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        width: '100%',
        height: '50px',
        backgroundColor: '#6e4100',
        position: 'absolute',
        top: '0px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
        <a href='#' style={{ textDecoration: 'none', color: 'white', marginRight: '30px', fontSize: '20px' }}>
          Log In
        </a>

        {/*<div>*/}
        {/*  <img src='./logo.svg' alt="Logo" style={{ marginLeft: '30px', height: '50px' }} />*/}
        {/*</div>*/}

      </div>
      <div style={{ marginTop: '-10%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          fontSize: '30px',
          fontWeight: 'bold',
          fontFamily: 'Helvetica',
          color: '#006a2a',
          lineHeight: 2
        }}>
          Send gifts to Anyone & Anywhere<br /><span style={{ color: '#6e4100' }}>No address needed</span> &#128521;
        </div>
        <div style={{ color: '#005d25', fontSize: '20px', marginTop: '20px', paddingRight: '10px', paddingLeft: '10p' }}>
          Send online gifts through text, email or messages and pay only for the ones that get accepted
        </div>
        <a href='https://forms.gle/snnHQ8mzYdCTyJvG6' style={{
          textDecoration: 'none'
        }}>
          <div style={{
            height: '60px',
            borderRadius: '30px',
            backgroundColor: '#006a2a',
            cursor: 'pointer',
            color: 'white',
            fontSize: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: '20px',
            paddingLeft: '20px',
            marginTop: '30px',
          }}>
            Gift&nbsp;Now
          </div>

        </a>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div >
  );
}

export default App;
