import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  }
  render(){
    const {data} = this.props;
    const list = data.map(
      info => (<PhoneInfo key = {info.id} info ={info}/>) //배열을 렌더일할때 key값이 꼭 필요하다.
    );

    return(
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;