import React, { Component } from 'react';
import './App.css';
import Navigation  from './components/navigation/Navigation';
import AllRoutes from './routes/routes'
import { BrowserRouter } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Navigation />
          <AllRoutes />
          </BrowserRouter>
              </div>
    );
  }
}

export default App;