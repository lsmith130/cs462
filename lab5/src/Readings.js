import React, { Component } from 'react';

export function Readings() {
  return (<div>
    <h1>Lab 5 Portal</h1>
    <h3>Current Temperature</h3>
    <CurrentReading />
    <h3>Latest Readings (Red indicates threshold violation.)</h3>
    <p>Note that I lowered the threshold for the last few readings so some readings would be violations</p>
    <ReadingList />
  </div>);
}

class CurrentReading extends Component {

  async componentWillMount() {
    this.setState({
      loading: true,
    });

    try {

      const all = await fetchAll();

      this.setState({
        loading: false,
        reading: all[0].temperature,
      });
    }
    catch (e) {
      console.error(e);
      this.setState({
        loading: false,
        error: true,
      });
      return;
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <p>Loading...</p>
      );
    }
    if (this.state.error) {
      return (
        <p>Failed to load.</p>
      )
    }
    return (
      <p>{this.state.reading}</p>
    );
  }
}

class ReadingList extends Component {

  async componentWillMount() {
    this.setState({
      loading: true,
    });

    try {
      let [violations, normal] = await Promise.all([
        fetchViolations(),
        fetchNormal(),
      ]);

      violations = violations.map(reading => {
        return {
          value: reading.temperature,
          timestamp: reading.timestamp,
          isViolation: true,
        };
      });
      normal = normal.map(reading => {
        return {
          value: reading.temperature,
          timestamp: reading.timestamp,
          isViolation: false,
        };
      });

      const tempReadings = [...violations, ...normal]
        .sort(reading => reading.timestamp)
        .slice(0, 20);
      this.setState({
        loading: false,
        tempReadings,
      })
    }
    catch (e) {
      console.error(e);
      this.setState({
        loading: false,
        error: true,
      });
      return;
    }
  }

  render() {

    if (this.state.loading) {
      return (
        <p>Loading...</p>
      );
    }

    if (this.state.error) {
      return (
        <p>Failed to update.</p>
      )
    }

    return (
      <ul>
        {this.state.tempReadings.map(temp => <Reading
          key={temp.timestamp}
          timestamp={temp.timestamp}
          value={temp.value}
          highlight={temp.isViolation}
        />)}
      </ul>
    );
  }
}

function Reading({ timestamp, value, highlight }) {
  const style = {
    backgroundColor: highlight ? "red" : "none",
  };
  return <li >
    {timestamp}: <span style={style}>{value}</span>
  </li>;
}

async function fetchViolations() {
  const response = await fetch("http://cs462.umkhandi.com/sky/cloud/3vKrEpPU8QXMPZH8SxhWUW/temperature_store/threshold_violations");
  if (!response.ok) {
    throw response.statusText;
  }
  return response.json();
}

async function fetchAll() {
  const response = await fetch("http://cs462.umkhandi.com/sky/cloud/3vKrEpPU8QXMPZH8SxhWUW/temperature_store/temperatures");
  if (!response.ok) {
    throw response.statusText;
  }
  return response.json()
}

async function fetchNormal() {
  let response = await fetch("http://cs462.umkhandi.com/sky/cloud/3vKrEpPU8QXMPZH8SxhWUW/temperature_store/inrange_temperatures");
  if (!response.ok) {
    throw response.statusText;
  }

  return response.json();
}