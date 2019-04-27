import React from 'react';
// import 'index.css';

export default class Jumbotron extends React.Component {
  state = {
    navbarHeight: 0,
  };

  render() {
    return (
      <div
        style={{
          height: 'auto',
          clear: 'both',
          marginTop: '35px',
        }}
        className="jumbotron"
      >
        {this.props.children}
      </div>
    );
  }
}
