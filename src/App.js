import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Body from './Body/Body';
import Recruiters from './Recruiters/Recruiters'
import images from './Body/images.js'
import News from './News/News.js'
import './App.css';
import Announcements from './Announcements/Announcements';


function App() {
  return (
    <div className="App">
     <Header />
     <Navigation />
     <Body />
     <Recruiters />
     <News />
     <Announcements />

     
    </div>
  );
}

export default App;
