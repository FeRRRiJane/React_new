import React from 'react';
import Header from './Modules/Header/header';
import 'normalize.css';
import Main from './Modules/Main/main'
import Kredit from './Modules/Kredits/Kredit';

function Page1() {
  return (
    <div className='container'>
      <Header/>
      <Main/>
      <Kredit/>
    </div>
  );
}

export default Page1;