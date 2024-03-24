import { RotatingLines, ThreeDots } from 'react-loader-spinner';
import { theme } from '../../styles';

export const MaimLoader = () => (
  <div
    style={{
      height: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <RotatingLines
      strokeColor={theme.colors.accent}
      strokeWidth="5"
      animationDuration="0.75"
      width="40"
      visible={true}
    />
  </div>
);

export const Loader = () => (
  <div
    style={{
      display: 'flex',
      paddingLeft: '60px',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    }}
  >
    <ThreeDots
      height="40"
      width="40"
      radius="2"
      color={theme.colors.accent}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </div>
);
