import { fontSize } from '@styles/mixins';
import colors from '@styles/colors';

const typography = `
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway';
    font-weight: 400;
    line-height: 1.2;
    color: ${colors.darkGray};
    margin-bottom: ${fontSize(8)};
  }

  h1 { font-size: ${fontSize(32)}; }
  h2 { font-size: ${fontSize(28)}; }
  h3 { font-size: ${fontSize(24)}; }
  h4 { font-size: ${fontSize(20)}; }
  h5 { font-size: ${fontSize(16)}; }
  h6 { font-size: ${fontSize(14)}; }

  p {
    margin-bottom: ${fontSize(16)};
  }

  body, input, textarea, button, ul, li {
    font-size: ${fontSize(16)};
    color: ${colors.darkGray};
    font-family: 'Crimson Text';
    line-height: 1.5;
  }
`;

export default typography;
