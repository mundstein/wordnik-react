import * as React from 'react';
import './style.css';

export default function Button(props: any) {
  let style = 'btn btn-' + props.color + ' ' + props.class;
  return (
    <button className={style} onClick={props.click}>
      {props.title}
    </button>
  );
}

Button.defaultProps = {
  color: 'primary',
  class: '',
  title: 'A Button',
  click: () => console.log('clicked'),
};
