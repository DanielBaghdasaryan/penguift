import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Helmet } from "react-helmet";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>

        <div>
            <Helmet>
                <meta property="og:title" content="Penguift - Gift Anyone, Anywhere, No Address Required" />
                <meta property="og:description" content="Penguift simplifies gifting by enabling you to send physical gifts via text, email or messages. Best of all, you only pay for the gifts that your recipient accepts. Try Penguift today and experience effortless gifting." />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/penguift.appspot.com/o/353692137_3180604658904178_9132646024516619197_n.jpg?alt=media&token=2d6d1abf-31f8-4e7b-bb37-4d01195a2c3d" />
                <meta property="og:url" content="http://penguift.com/" />
            </Helmet>
            <App />
        </div>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
