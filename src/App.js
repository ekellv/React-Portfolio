import React from 'react';
import Header from './components/header';
import Footer from './components/footer'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <div>
      <Header></Header>
    </div>
    <div>
      <Footer></Footer>
    </div> 
    </>
  );
}

export default App;