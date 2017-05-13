import React from 'react';
import ReactDOM from 'react-dom';
class Registration extends React.Component {
  render() {
    return <div>Message from the component created by me</div>;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Registration/>,document.getElementById('react-container'));
});
