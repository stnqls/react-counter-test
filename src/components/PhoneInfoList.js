import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'), 
  }

  shouldComponentUpdate(nextProps, nextState) { //컴포넌트를 최적화하는 작업에서 유용하게 사용된다. return false하면 업데이트를 안한다.
    return nextProps.data !== this.props.data;
  }

  render(){
    const {data, onRemove, onUpdate} = this.props;
    const list = data.map(
      info => (
      <PhoneInfo 
      key = {info.id} 
      info ={info}
      onRemove={onRemove}
      onUpdate={onUpdate}
      />) //배열을 렌더일할때 key값이 꼭 필요하다.
    );

    return(
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;