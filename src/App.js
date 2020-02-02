import React from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import './App.css';

class App extends React.Component {
  state = {
    loggedIn: false
  }


  render() {
    let isLogged = this.state.loggedIn;
    let contentToRender = null;

    if(isLogged === false) {
      contentToRender = <Login />
    } else if (isLogged === true) {
      contentToRender = <div>Logged in</div>
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
