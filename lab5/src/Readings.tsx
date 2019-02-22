import React, { Component } from 'react';
import bind from 'bind-decorator';

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

  interval = 0;
  state = {
    loading: true,
    reading: null,
    error: null,
  }

  componentWillMount() {
    this.update();
    this.interval = window.setInterval(this.update, 10000)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  @bind
  async update() {
    try {

      const all = await fetchAll();

      this.setState({
        loading: false,
        reading: all[all.length-1].temperature,
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

type ReadingListState = {
  loading: boolean
  reading: object | null
  error: string | null
  tempReadings: any[]
}

type Reading = {
  temperature: Number
  timestamp: String
  isViolation: Boolean
}

class ReadingList extends Component {

  interval = 0
  state: ReadingListState = {
    loading: true,
    reading: null,
    error: null,
    tempReadings: [],
  }

  componentWillMount() {
    this.update();
    this.interval = window.setInterval(this.update, 10000)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  @bind
  async update() {

    try {
      let [violations, normal]: [Reading[], Reading[]] = await Promise.all([
        fetchViolations(),
        fetchNormal(),
      ]);

      violations = violations.map(reading => {
        return {
          temperature: reading.temperature,
          timestamp: reading.timestamp,
          isViolation: true,
        };
      });
      normal = normal.map(reading => {
        return {
          temperature: reading.temperature,
          timestamp: reading.timestamp,
          isViolation: false,
        };
      });

      const tempReadings: Reading[] = [...violations, ...normal]
        .sort((a, b) => a.timestamp < b.timestamp ? 1 : -1)
        .slice(0, 100);
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
    console.log("render")
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
          value={temp.temperature}
          highlight={temp.isViolation}
        />)}
      </ul>
    );
  }
}

function Reading({ timestamp, value, highlight }: { timestamp: String, value: String, highlight: Boolean }) {
  const style = {
    backgroundColor: highlight ? "red" : "none",
  };
  return <li >
    {timestamp}: <span style={style}>{value}</span>
  </li>;
}

async function fetchViolations(): Promise<Reading[]> {
  const response = await fetch("http://cs462.umkhandi.com/sky/cloud/3vKrEpPU8QXMPZH8SxhWUW/temperature_store/threshold_violations");
  if (!response.ok) {
    throw response.statusText;
  }
  return response.json();
}

async function fetchAll(): Promise<Reading[]> {
  const response = await fetch("http://cs462.umkhandi.com/sky/cloud/3vKrEpPU8QXMPZH8SxhWUW/temperature_store/temperatures");
  if (!response.ok) {
    throw response.statusText;
  }
  return response.json()
}

async function fetchNormal(): Promise<Reading[]> {
  let response = await fetch("http://cs462.umkhandi.com/sky/cloud/3vKrEpPU8QXMPZH8SxhWUW/temperature_store/inrange_temperatures");
  if (!response.ok) {
    throw response.statusText;
  }

  return response.json();
}