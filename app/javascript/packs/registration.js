import React from 'react';
import ReactDOM from 'react-dom';
import { login } from '../components/registration/login';

class Registration extends React.Component {
  render() {
    return <login/>;
  }
} 
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Registration/>,document.getElementById('react-container'));
});
