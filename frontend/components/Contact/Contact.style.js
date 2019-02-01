import styled from 'styled-components';

import colors from '@styles/colors';

const ContactStyleWrapper = styled.div`
  position: relative;
  background: transparent;
  text-align: center;
  width: 100%;
  padding: 60px 10px;
  z-index: 10;

  .contact-svg-top {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  .contact-title {

  }

  .contact-sub-title {
    color: ${colors.gray};
  }

  .contact-form {

  }

`;

export default ContactStyleWrapper;
