import styled from '@emotion/styled';
import {
  Form as RegisterForm,
  Input as RegisterInput,
  FormTitle as RegisterTitle,
  Label as RegisterLabel,
  Text as RegisterText,
  RegisterButton as Button,
} from 'components/Register/Register.styled';

export const FormTitle = styled(RegisterTitle)`
  color: #ffffff;
`;

export const Form = styled(RegisterForm)``;

export const Input = styled(RegisterInput)`
  border: 3px solid rgb(14, 6, 157);
  &:focus {
    outline: 2px solid rgb(14, 6, 157);
  }
`;

export const Label = styled(RegisterLabel)``;

export const Text = styled(RegisterText)`
  color: #ffffff;
`;

export const LoginBtn = styled(Button)`
  font-weight: 600;
  color: rgb(64, 104, 233);
  background-color: #e9e8fd;

  &:hover,
  &:focus {
    transform: scale(1.04);
    background-color: #ffffff;
  }
`;
