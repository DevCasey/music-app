import React from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Welcome from './components/Welcome';
import './App.css';

class App extends React.Component {
  state = {
    loggedIn: false
  }

  changeLogState() {
    this.setState({
      loggedIn: false
    })
  }


  render() {
    let isLogged = this.state.loggedIn;
    let contentToRender = null;

    if(isLogged === false) {
      contentToRender = <Login onLogin={() => this.setState({loggedIn:true})}/>
    } else if (isLogged === true) {
      contentToRender =
      <div> 
        <Welcome />
        <Dashboard />
      </div>
    }

    return (
      <div>
        <NavBar />
        {contentToRender}
      </div>
    )
  }











}


export default App;
