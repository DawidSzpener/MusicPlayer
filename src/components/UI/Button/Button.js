import React from 'react';

import './Button.scss'

const PulsingButton = (props) => {
  let classes = ["PulsingButton", "PulsingButton--" + props.styles]
  if(props.round) {
    classes.push('PulsingButton--round')
  }
  if(props.animating) {
    classes.push('PulsingButton--animating')
  }

  return (
    <button className={classes.join(' ')}>
      {props.text}
    </button>
  )
}

export default PulsingButton
