import React, {Component} from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault(); //form에서 submit이 발생하면 페이지를 다시 불러오게 되어서 현제의 상태를 다 잃어버리게 되므로 작업을 방지시켜주어야 한다.
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: ''
    });
  }

  render(){

    const style = {
      border : '1px solid blue',
      padding: '8px',
      margin: '8px'
    };

    return(
      <form onSubmit ={this.handleSubmit} style={style}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name='phone'
        />
        <button type="submit">등록</button>
        <div>
          
        </div>
      </form>
    );
  }
}

export default PhoneForm;