import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React I am a fruit filled doughnut!</p>;
  }
}

render(<App/>, document.getElementById('app'));
