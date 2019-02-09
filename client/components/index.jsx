// @flow
import React, { Component } from 'react';

// check css modules
import styles from './index.css';

type Props = {};
type State = {};

export default class App extends Component<Props, State> {
  // check @babel/plugin-transform-arrow-functions
  handlerClick = (e: SyntheticEvent<HTMLButtonElement>) => {
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
