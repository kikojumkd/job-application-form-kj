import React, { Component } from 'react';
import JobApplicationForm from './components/JobApplicationForm';
import AllApp from './components/AllApp';

class App extends Component {
  render() {
      return (
      <div className="App">
        <div className="navbar">
          <h2 className="center">Apply</h2>
        </div>
        <JobApplicationForm />
        <AllApp />
      </div>
      );
  }
  }
export default App;