import React, { Component } from 'react';

// check css modules
import styles from './index.css';

export default class App extends Component {
  // check @babel/plugin-transform-arrow-functions
  handlerClick = (e) => {
    // check @babel/plugin-proposal-optional-chaining
    if (e?.target) {
      console.log('e.target', e.target);
    }
  }

  render() {
    return (
      <div
        onClick={this.handlerClick}
        onKeyDown={this.handlerClick}
        className={styles.container}
        role="button"
        tabIndex="0"
      >
        hey
      </div>
    );
  }
}
