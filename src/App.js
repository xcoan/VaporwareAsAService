import React, { Component } from 'react';
import './App.css';
import {Grid, Button, Paper, Typography} from '@material-ui/core';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Vaporware as a Service',
      description: 'Click a button to generate an app or update'
    }
  }

  randomValue = (arrayName) => {
    return arrayName[Math.floor(Math.random() * arrayName.length)]
  }

  generateAppTitle = () => {
    const prefixes = ['Script', 'Cable', 'Disrupt', 'Innovate', 'Doge']
    const suffixes = ['.io', 'Bucket', 'Maker', 'Ly', 'Pan', 'Ware', 'Code']

    return this.randomValue(prefixes) + this.randomValue(suffixes)
  }

  generateAppText = () => {
    const buzz1 = ["n IOT", " Social Media", " Data Mining", " Cryptocurrency"]
    const buzz2 = ["deployment tools", "employees", "automated workflows"]
    const buzz3 =["frontend framework", "database", "web framework"]
    let buzzA = this.randomValue(buzz1)
    let buzzB = this.randomValue(buzz2)
    let buzzC = this.randomValue(buzz3)

    return `A ${buzzA} app for managing your ${buzzB} using the latest ${buzzC}.`
  }

  generateUpdateTitle = () => {
    const titles = ['Exciting News!', 'A Minor Setback', 'A Quick Update']
    return this.randomValue(titles)
  }

  genearateUpdateText = () => {
    const intros = ['Greeting Backers!', 'Hello Supporters.', 'Dear Beloved Fans.']
    const adj = ['productive', 'hectic']
    const pivot = ['frontend', 'database']
    const users = ['mobile users', 'client health employees', 'web users']

    let intro = this.randomValue(intros) + ' '
    let firstLine = "Things have been very " + this.randomValue(adj) + '. '
    let secondLine = "We recently decided to pivot to a new " + this.randomValue(pivot) +
      ', but rest assured, this was but a minor setback! '
    let thirdLine = "This change will go a long way to provide an optimal user experience for our " +
      this.randomValue(users) + '. '
    let ending = "Overall, we've been hard at work to provide adhere to your standards of quality." +
      " See you soon, The Team.";

    return intro + firstLine + secondLine + thirdLine + ending
  }

  fetchUpdate = () => {
    this.setState({
      title: this.generateUpdateTitle(),
      description: this.genearateUpdateText()
    });
  }

  fetchApp = () => {
    this.setState({
      title: this.generateAppTitle(),
      description: this.generateAppText()
    });
  }

  render() {
    let title = this.state.title
    let description = this.state.description

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Paper>
            <Typography variant="headline" component="h1">
              {title}
            </Typography>
            <Typography component="p">
              {description}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2} />
        <Grid item xs={3}>
          <Button
          onClick={this.fetchApp}
          variant={"contained"}
          fullWidth={true}
          >
            Generate App
          </Button>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={3}>
          <Button
          onClick={this.fetchUpdate}
          variant={"contained"}
          fullWidth={true}
          >
            Generate Update
          </Button>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    );
  }
}

export default App;
