import React from 'react';
import Calendar from '../Calendar/index';
import Header from '../Layer/Header';
import Footer from '../Layer/Footer';

import 'src/styles/index.scss';
// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Calendar />
    <Footer />
  </div>
);

// == Export
export default App;
