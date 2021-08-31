import React, {Component} from 'react';

class PhoneInfo extends Component {
  static defaultProps = { //기본값
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }

  state = {
    // 기존에 텍스트 형태로 보여주던 값들을 input 형태로 보여주게 된다.
    editing: false,
    //input의 값은 유동적이기때문에 input값을 담기 위한 필드 값.
    name: '',
    phone: '',
  }

  handleRemove = () => {
    const {info, onRemove} = this.props;
    onRemove(info.id);
  }

  handleToggleEdit = () => {
    const {editing} = this.state;
    this.setState({editing: !editing});
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  componentDidUpdate(prevProps, prevState) { //editing값이 바뀔때 처리 할 로직. 수정을 적용할때 input의 값을 부모한테 전달해준다.
    const {info, onUpdate} = this.props;
    if(!prevState.editing && this.state.editing) { //editing값이 false->true로 전횐될때 info의 값을 state에 넣어준다
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }
    if (prevState.editing && !this.state.editing) { //editing값이 true -> false로 전환될때
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(!this.state.editing //수정상태가 아니고, info값이 같다면 리렌더링을 안한다.
        && !nextState.editing
        && nextProps.info === this.props.info ){
          return false;
        }
        return true;
  }

  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    // 수정모드
    const {editing} = this.state;
    if(editing) {
      return(
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="전화번호"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>적용 </button>
          <button onClick={this.handleRemove}>삭제 </button>
        </div>
      );
    }
    //일반모드
    const {
      name, phone,id
    } = this.props.info;

    return (
      <div style = {style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default PhoneInfo;