import React from 'react';
import Head from './components/Head'
import Home from './components/Home'
import Projects from './components/Projects'
import Downloads from './components/Downloads'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export default class App extends React.Component {
  constructor(props){
      super() 
      this.state = {menu_option : ""}
  }
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Head App = {this}/>
          <Switch>
            <Route path='/' exact render={() => <Home App = {this}/>}/>
            <Route path='/home' exact render={() => <Home App = {this}/>} />
            <Route path='/projects' exact render={() => <Projects App = {this}/>} />
            <Route path='/services' exact render={() => <Services App = {this}/>} />
            <Route path='/downloads' exact render={() => <Downloads App = {this}/>} />
            <Route path='/about' exact render={() => <About App = {this}/>} />
            <Route path='/contact' exact render={() => <Contact App = {this}/>} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}
