import backgroundImage from '../../images/main_background.jpg';
import headerImage from '../../images/header.jpg';

export default {
  images: {
    login: {
      bg: `${backgroundImage}`,
    },
    header: {
      bg: `${headerImage}`,
    },
  },
  colors: {
    main: '#fffffe',
    primary: {
      desaturated: '#925f9e',
      default: '#9656a1',
      dark: '#794685',
      darker: '#61386a',
      magenta: '#7a0e82',
    },
    text: {
      placeholder: '#757575',
      light: '#d9d4e7',
      lighter: '#fffffe',
      dark: '#1f1235',
    },
    scrollbar: {
      thumb: '#d9d4e7',
    },
    card: {
      default: '#FFFAFA',
      hover: '#f5f5f5',
    },
    tertiary: {
      default: '#ffd402',
      dark: '#ffbf00',
    },
  },
};
