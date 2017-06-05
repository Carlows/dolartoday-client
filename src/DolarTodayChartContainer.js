import React, { Component } from 'react';
import DolarTodayChart from './DolarTodayChart';

class DolarTodayChartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  componentDidMount() {
    const self = this;

    fetch('https://frozen-mountain-15289.herokuapp.com/prices').then(function (response) {
      return response.json();
    }).then(function (data) {
      const parsedData = data.map((item) => {
        return {
          day: item.day,
          maxPrice: parseInt(item.maxPrice),
          minPrice: parseInt(item.minPrice)
        }
      });
      
      self.setState({ data: parsedData });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <DolarTodayChart data={data} />
    );
  }
}

export default DolarTodayChartContainer;
