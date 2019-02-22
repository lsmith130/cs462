import React, { Component, ChangeEvent, FormEvent } from 'react';
import bind from 'bind-decorator';

export class Profile extends Component {

  state = {
    name: "",
    location: "",
    number: "",
    threshold: "",
    loading: true,
    error: null,
    saving: false,
  }

  async componentWillMount() {
    const response = await fetch("http://cs462.umkhandi.com/sky/cloud/3vKrEpPU8QXMPZH8SxhWUW/sensor_profile/profile");
    if (!response.ok) {
      this.setState({
        error: response.statusText,
      });
      console.error(response);
      return;
    }

    const profile = await response.json();
    this.setState({
      name: profile.name,
      location: profile.location,
      number: profile.number,
      threshold: profile.threshold,
      loading: false,
    });
  }
 
  @bind
  async onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    this.setState({
      saving: true,
    })

    const { name, number, location, threshold } = this.state;

    const response = await fetch(`http://cs462.umkhandi.com/sky/event/Wfdsrm1Z1vXx7VzTT9ii7a/abc/sensor/profile_updated?name=${name}&number=${number}&location=${location}&threshold=${threshold}`, { 
      method: "POST",
    });

    if (!response.ok) {
      this.setState({
        error: response.statusText,
      })
      return
    }

    this.setState({
      saving: false,
    })
  }

  @bind
  async nameChanged(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value })
  }

  @bind
  async numberChanged(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ number: e.target.value })
  }

  @bind
  async locationChanged(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ location: e.target.value })
  }

  @bind
  async thresholdChanged(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ threshold: e.target.value })
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
      );
    }

    const rowStyle = { display: "flex", paddingBottom: "5px" };
    const labelStyle = { width: "200px" };
    return (
      <form style={{display:"flex", flexDirection: "column", textAlign:"left"}} onSubmit={this.onSubmit}>
        <div style={rowStyle}><label style={labelStyle}>Name: </label> <input type="text" value={this.state.name} onChange={this.nameChanged}></input></div>
        <div style={rowStyle}><label style={labelStyle}>Location: </label> <input type="text" value={this.state.location} onChange={this.locationChanged}></input></div>
        <div style={rowStyle}><label style={labelStyle}>Contact Number: </label> <input type="text" value={this.state.number} onChange={this.numberChanged}></input></div>
        <div style={rowStyle}><label style={labelStyle}>Threshold: </label> <input type="number" value={this.state.threshold} onChange={this.thresholdChanged}></input></div>
        <div style={{height:"30px"}} />
        <button type="submit" style={{width:"100px", height: "40px"}}>{this.state.saving ? "Saving..." : "Submit" }</button>
      </form>
    );
  }
}