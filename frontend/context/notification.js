import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import colors from '@styles/colors';
import { boxShadow } from '@styles/mixins';
import { MdCheckCircle, MdError, MdWarning } from 'react-icons/md';

const DURATION = 5;

const fadeIn = keyframes`
  0%, 100% {
    opacity: 0;
    top: -10px;
    height: 0;
    margin-top: 0;
  }
  10%, 90% {
    opacity: 1;
    top: 0;
    height: 30px;
    margin-top: 16px;
  }
`;

const NotificationStyleWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  .notification-success {
    color: ${colors.green};
  }
  .notification-info {
    color: ${colors.blue};
  }
  .notification-error {
    color: ${colors.red};
  }
  .notification-warning {
    color: ${colors.orange};
  }

  .notification-item {
    margin-top: 16px;
    height: 30px;
    line-height: 30px;
    border-radius: 2px;
    background: white;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${boxShadow(1)};
    animation: ${fadeIn} ${DURATION}s;

    .notification-icon {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }

    .notification-text {
      font-family: 'Roboto';
      font-size: 14px;
      color: ${colors.darkGray};
    }
  }
`;

export const NotificationContext = React.createContext();

export default class NotificationProvider extends Component {
  constructor() {
    super();
    this.notify = this.notify.bind(this);
    this.state = {
      messages: [],
      notify: this.notify
    };
  }

  notify(type, message) {
    this.setState({
      messages: [...this.state.messages, { type, message }]
    });

    setTimeout(() => {
      this.setState({
        messages: this.state.messages.slice(0, -1)
      });
    }, DURATION*1000);
  }

  render() {
    return (
      <NotificationContext.Provider value={this.state}>
        {this.props.children}
      </NotificationContext.Provider>
    );
  }
}

export const NotificationConsumer = () => (
  <NotificationContext.Consumer>
    {value => (
      <NotificationStyleWrapper>
        {value.messages.map((message, i) => {
          let icon;
          switch(message.type) {
            case 'info':
              icon = <MdCheckCircle className="notification-icon notification-info"/>
              break;
            case 'success':
              icon = <MdCheckCircle className="notification-icon notification-success"/>
              break;
            case 'warning':
              icon = <MdWarning className="notification-icon notification-warning"/>
              break;
            case 'error':
              icon = <MdError className="notification-icon notification-error"/>
              break;
          }
          return (
            <div key={message.message + i} className="notification-item">
              {icon}
              <span className="notification-text">{message.message}</span>
            </div>
          );
        })}
      </NotificationStyleWrapper>
    )}
  </NotificationContext.Consumer>
);
