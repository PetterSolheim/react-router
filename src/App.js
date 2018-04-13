import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render () {
    return (
      //Basename prop needs to be specified when the landing page is a subdirectory.
      //<BrowserRouter basename="/my-app"/>
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
