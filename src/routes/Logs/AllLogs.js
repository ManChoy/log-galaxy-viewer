import React, { Component } from 'react';
import { connect } from 'dva';

@connect(state => ({
  log: state.log,
}))

export default class Log extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'log/fetchLogData',
    });
  }
  render() {
    const { log } = this.props;
    let logStr = '';
    log.logData.forEach((l) => {
        logStr += l.level + ' ' + l.message + '\n';
    })
    return (
        <div>
            { logStr }
        </div>
    );
  }
}
