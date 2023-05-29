import React from 'react';
import Header from './Modules/Header/header';
import 'normalize.css';
import Main from './Modules/Main/main'
import Kredit from './Modules/Kredits/Kredit';
import Page1 from './Page1';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Page2 from './Page2';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Page1 />}>
          </Route>
          <Route path='page1' element={<Page1 />}>
          </Route>
          <Route path='page2' element={<Page2 />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
