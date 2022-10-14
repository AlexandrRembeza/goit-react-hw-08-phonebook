import styled from '@emotion/styled';
import { Form as FormikForm, Field } from 'formik';

export const FormTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  text-align: center;
  margin-bottom: 20px;
  color: rgb(8, 2, 120);
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  width: 450px;

  font-family: inherit;
  font-size: 18px;
  color: rgb(40, 70, 219);

  padding: 10px 15px;
  border: 1px solid rgb(40, 70, 219);
  border-radius: 5px;
  outline: none;

  &:focus {
    outline: 2px solid rgb(40, 70, 219);
  }
`;

export const Label = styled.label`
  width: 250px;

  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 25px;
  }

  &:focus-within span {
    font-weight: 600;
  }
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: 500;

  color: rgb(21, 45, 169);
  margin-bottom: 10px;
`;

export const RegisterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Comic Sans MS';
  font-size: 20px;

  padding: 10px 25px;
  margin: 0 auto;
  margin-top: 20px;

  color: #ffff;
  background-color: rgb(64, 104, 233);

  border-radius: 10px;
  border: none;

  cursor: pointer;
  transition: scale 150ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.02);
    background-color: rgb(5, 41, 160);
  }
`;

export const Thumb = styled.div`
  position: relative;
`;
