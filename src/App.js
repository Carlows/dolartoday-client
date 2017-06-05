import React, { Component } from 'react';
import './App.css';
import DolarTodayChartContainer from './DolarTodayChartContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Precios DolarToday</h1>
        <div className="chart-container">
          <DolarTodayChartContainer />
        </div>
      </div>
    );
  }
}

export default App;
