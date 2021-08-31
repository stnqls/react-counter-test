import React, { Component } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id=2
  state = {
    information: [
      {
        id:0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id:1,
        name: '홍길동',
        phone: '010-0000-1111'
      },
    ]
  }
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({id:this.id++, ...data})
    })
  }
  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  render(){
    const {information} = this.state;
    return (
      <React.Fragment>
      <GlobalStyle />
      <div>
      <PhoneForm 
        onCreate={this.handleCreate}
        />
        <PhoneInfoList 
        data={this.state.information}
        onRemove={this.handleRemove}
        />
      </div>
      </React.Fragment>
    );
  }
}

export default App;
