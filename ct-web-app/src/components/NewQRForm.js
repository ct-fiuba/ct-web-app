import React from 'react';
import SingleQRForm from './SingleQRForm.js'

export default function NewQRForm(props) {
  return (
    <React.Fragment>
      <SingleQRForm completeFunction={props.completeFunction} obtainInfo={props.obtainInfo}/>
    </React.Fragment>
  );
}
