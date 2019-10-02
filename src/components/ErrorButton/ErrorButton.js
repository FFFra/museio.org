import React from 'react';
import { Link } from 'react-router-dom';


const ErrorButton = props => <div>
  <h3>{props.error}</h3>
  <Link to={props.route}>
    {props.text}
  </Link>
</div>

export default ErrorButton


