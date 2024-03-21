export const theme = Object.freeze({
  colors: {
    accent: '#e44848',

    main: '#101828',
    blockFeatures: '#f2f4f7',
    rating: '#ffc531',
    text: '#475467',

    scroll: '#d9d9d9',

    inputs: '#f7f7f7',
    inputPlaceholderText: 'rgba(16, 24, 40, 0.6)',

    button: '#e44848',
    buttonHover: '#d84343',
    buttonText: '#ffffff',
    buttonBorder: 'rgba(71, 84, 103, 0.2)',

    border: 'rgba(16, 24, 40, 0.2)',
    horizontalLine: 'rgba(16, 24, 40, 0.1)',

    mainBackground: '#ffffff',
    backdropBackground: 'rgba(17, 18, 19, 0.4)',
  },

  fonts: {
    mainFont: 'Inter, sans-serif',
  },

  fontSizes: {
    small: '16px',
    medium: '20px',
    large: '24px',
  },

  radii: {
    sm: '10px',
    md: '12px',
    lg: '20px',
    xl: '100px',
    xxl: '200px',
  },

  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },

  shadows: {
    small: '0 3px 5px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
    custom:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },

  spacing: (value) => `${value * 4}px`,
});
