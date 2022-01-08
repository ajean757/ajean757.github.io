import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import Photography from "./routes/Photography.js";
import Portfolio from "./routes/Portfolio.js";


ReactDOM.render(
  <BrowserRouter>
     <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="photos" element={<Photography/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
