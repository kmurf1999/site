import styled from 'styled-components';

import colors from '@styles/colors';

const ContactStyleWrapper = styled.div`
  position: relative;
  background: transparent;
  text-align: center;
  width: 100%;
  padding: 60px 10px;
  z-index: 10;

  .contact-title {

  }

  .contact-sub-title {
    color: ${colors.gray};
  }

  .contact-form {
    position: relative;
    text-align: justify;
    max-width: 400px;
    margin: 0 auto;
    .contact-form-input {
      margin-bottom: 5px;
    }
  }

`;

export default ContactStyleWrapper;
