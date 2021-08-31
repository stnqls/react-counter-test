import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'), 
  }

  shouldComponentUpdate(nextProps, nextState) {
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