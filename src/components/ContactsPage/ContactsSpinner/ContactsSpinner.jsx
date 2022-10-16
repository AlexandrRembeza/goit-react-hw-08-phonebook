import { SpinnerWrap } from './ContactsSpinner.styled';
import { RotatingLines } from 'react-loader-spinner';

export const ContactsSpinner = ({ size, color = '#596dff' }) => {
  return (
    <SpinnerWrap>
      <RotatingLines
        strokeColor={color}
        strokeWidth="3.5"
        animationDuration="0.80"
        width={size}
        visible={true}
      />
    </SpinnerWrap>
  );
};
