import React, { Component } from 'react';
import { MdEmail, MdPerson, MdMessage, MdArrowForward } from 'react-icons/md';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import colors from '@styles/colors';
import Input from '@components/Input';
import TextArea from '@components/TextArea';
import Button from '@components/Button';

import ContactStyleWrapper from './Contact.style';

const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const SEND_EMAIL = gql`
  mutation SendEmail($from: String!, $name: String!, $message: String!) {
    sendEmail(from: $from, name: $name, message: $message) {
      _id
    }
  }
`;

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      email: {
        value: '',
        touched: false,
        error: null,
        status: null
      },
      name: {
        value: '',
        touched: false,
        error: null,
        status: null
      },
      message: {
        value: '',
        touched: false,
        error: null,
        status: null
      }
    };
  }

  onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const field = this.state[name];
    field.value = value;
    field.touched = true;
    this.setState({ [name]: field }, () => this.validate(name));
  }

  onBlur = e => {
    e.preventDefault();
    const { name } = e.target;
    const field = this.state[name];
    field.touched = true;
    this.setState({ [name]: field }, () => this.validate(name));
  }

  validate = (name) => {
    const field = this.state[name];
    switch(name) {
      case 'email': {
        if (field.value === '') {
          field.error = 'Email is required';
          field.status = 'error';
        } else if (!emailRegex.test(field.value)) {
          field.error = 'Not a valid email';
          field.status = 'warning';
        } else {
          field.error = null;
          field.status = 'success';
        }
        break;
      }
      case 'name': {
        if (field.value === '') {
          field.error = 'Name is required';
          field.status = 'error';
        } else {
          field.error = null;
          field.status = 'success';
        }
        break;
      }
      case 'message': {
        if (field.value === '') {
          field.error = 'Message is required';
          field.status = 'error';
        } else {
          field.error = null;
          field.status = 'success';
        }
        break;
      }
      default: break;
    }
    return this.setState({ [field.name]: field });
  }

  submit = (e, sendEmail) => {
    e.preventDefault();
    this.setState({ loading: true });

    let promises = [];
    ['email', 'name', 'message'].forEach((name) => {
      promises.push(this.validate(name));
    });
    Promise.all(promises).then(() => {
      const valid = !this.state.email.error &&
                    !this.state.name.error &&
                    !this.state.message.error;

      if (valid) {
        sendEmail({
          variables: {
            from: this.state.email.value,
            name: this.state.name.value,
            message: this.state.name.value
          }
        }).then(res => console.log(res))
          .catch(err => console.log(err))
          .finally(() => this.setState({ loading: false }));

      } else this.setState({ loading: false });
    });
  }

  render() {
    const { onIndexPage } = this.props;
    const { email, name, message, loading } = this.state;
    return (
      <ContactStyleWrapper className="contact">
        {onIndexPage && (
          <svg className="contact-svg-top" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="30, 100 100, 100, 100, 0" fill="#000" opacity="0.1" />
            <polygon points="0,0 100,0 100, 10" fill="#2a2d38" />
            <polygon points="0, 90 0, 100 100, 100" fill={colors.footer} />
          </svg>
        )}

        <h1 className="contact-title">
          Contact
        </h1>

        <h4 className="contact-sub-title">
          Send me an email
        </h4>

        <Mutation mutation={SEND_EMAIL}>
          {(sendEmail, { data }) => (
            <form className="contact-form">
              <Input
                width="100%"
                className="contact-form-input"
                name="email" type="text"
                value={email.value}
                onChange={this.onChange}
                onBlur={this.onBlur}
                leftIcon={<MdEmail/>}
                placeholder="Email"
                status={email.status}
                helpText={email.error}
              />
              <Input
                width="100%"
                className="contact-form-input"
                name="name" type="text"
                value={name.value}
                onChange={this.onChange}
                onBlur={this.onBlur}
                leftIcon={<MdPerson/>}
                placeholder="Name"
                status={name.status}
                helpText={name.error}
              />
              <TextArea
                width="100%"
                className="contact-form-input"
                name="message" type="text"
                value={message.value}
                onChange={this.onChange}
                onBlur={this.onBlur}
                leftIcon={<MdMessage/>}
                placeholder="Enter Message"
                status={message.status}
                helpText={message.error}
              />

              <Button
                onClick={e => this.submit(e, sendEmail)}
                type="submit"
                className="contact-form-submit"
                width="150px"
                icon={<MdArrowForward/>}
                loading={loading}
              >
                Send
              </Button>
            </form>
          )}
        </Mutation>
      </ContactStyleWrapper>
    );
  }
}

export default Contact;
