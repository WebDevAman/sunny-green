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
import ZonnepanelenHuren from './components/pages/particulier/ZonnepanelenHuren';
import ZonnepanelenKopen from './components/pages/particulier/ZonnepanelenKopen';
import Zonnesparen from './components/pages/particulier/Zonnesparen';
import Laadpaal from './components/pages/particulier/Laadpaal';
import ScrollToTop from './components/common/ScrollToTop';
import ZonnepanelenLeasen from './components/pages/zakelijk/ZonnepanelenLeasen';
import CarportZonnepanelen from './components/pages/zakelijk/CarportZonnepanelen';

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
          <Route path="/particulier/zonnepanelen-huren" element={<ZonnepanelenHuren />}></Route>
          <Route path="/particulier/zonnepanelen-kopen" element={<ZonnepanelenKopen />}></Route>
          <Route path="/particulier/zonnesparen" element={<Zonnesparen />}></Route>
          <Route path="/particulier/laadpaal-thuis" element={<Laadpaal />}></Route>
          <Route path="/zakelijk/zonnepanelen-leasen" element={<ZonnepanelenLeasen />}></Route>
          <Route path="/zakelijk/carport-zonnepanelen" element={<CarportZonnepanelen />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
