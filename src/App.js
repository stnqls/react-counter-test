import React, { Component } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render(){
    return (
      <React.Fragment>
      <GlobalStyle />
      <PhoneForm onCreate={this.handleCreate}/>
      </React.Fragment>
    );
  }
}

export default App;
