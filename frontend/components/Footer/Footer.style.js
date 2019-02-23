import styled from 'styled-components';
import colors from '@styles/colors';

const FooterStyleWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 20px 50px;
  background: ${colors.footer};
  color: white;

  .footer-panel-container {
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      .footer-panel {
        margin-bottom: 16px;
        margin-right: 0 !important;
      }
    }

    .footer-panel {
      margin-right: 40px;
      display: flex;
      flex-direction: column;

      .footer-title {
        font-family: 'Roboto';
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 300;
        font-size: 14px;
        color: ${colors.gray};
        margin-bottom: 16px;
      }

    }
  }

  .footer-social-bar {
    font-weight: 300;
    font-family: 'Roboto';
    .footer-social-link {
      color: white;
      text-decoration: none;
      display: inline-block;
      margin-right: 15px;
      > svg {
        width: 25px;
        height: 25px;
        &:hover { fill: ${colors.orange}; }
      }
    }
  }

  .footer-contact {
    .footer-contact-item {
      margin-bottom: 8px;
      color: #eee;
      font-weight: 300;
      font-family: 'Roboto';
      font-size: 14px;
    }
  }

  .footer-sitemap {
    .footer-sitemap-link > a {
      color: #eee;
      font-family: 'Roboto';
      font-weight: 300;
      letter-spacing: 1px;
      font-size: 14px;
      text-decoration: none;
      &:hover {
        color: ${colors.orange};
      }
    }
  }

  .footer-bottom {
    width: 100%;
    text-align:  center;
    .footer-divider {
      width: 100%;
      height: 1px;
      background: ${colors.gray};
      margin: 16px 0;
    }
  }
`;

export default FooterStyleWrapper;
