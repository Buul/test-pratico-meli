import input from './input';
import button from './button';
import iconCircle from './iconCircle';

const size = {
  sm: '576px',
  md: '768px',
  lg: '1040px',
};

const theme = {
  colors: {
    white: '#FFFFFF',
    grey100: '#EEEEEE',
    grey200: '#E0E0E0',
    grey500: '#999999',
    black: '#333333',
    yellow: '#FFE600',
  },
  device: {
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
  },
  input,
  button,
  iconCircle,
};

export default theme;
