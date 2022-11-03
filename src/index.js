import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FormAndImage from './components/pages/Configurator/FormAndImage';
import Success from './components/pages/Configurator/Success';
import Panel from './components/Admin/Panel';
import ScrollToTop from './components/common/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/configurator" element={<FormAndImage />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/Admin/Panel" element={<Panel />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
