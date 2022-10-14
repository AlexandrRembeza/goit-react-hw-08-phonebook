import { Label, Text, LoginBtn, Form, Input, FormTitle } from './Login.styled';
import { Box } from 'components/Box';

import { Formik } from 'formik';
import PropTypes from 'prop-types';

export function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    // addContact(formValues);
  };

  return (
    <Box
      width="600px"
      p="30px 40px"
      m="0 auto"
      mt="40px"
      backgroundColor="rgb(75, 115, 224)"
      border="2px solid rgb(14, 6, 157)"
      borderRadius="10px"
      boxShadow="rgba(50, 50, 93, 0.7) 0px 13px 27px -5px, rgba(16, 4, 107, 0.3) 0px 8px 16px -8px"
    >
      <FormTitle>Log in</FormTitle>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <Label>
            <Text>Your Email</Text>
            <Input type="email" name="email" placeholder="abcd@mail.com" />
          </Label>

          <Label>
            <Text>Your Password</Text>
            <Input type="password" name="password" placeholder="12345" />
          </Label>

          <LoginBtn type="submit">Log in</LoginBtn>
        </Form>
      </Formik>
    </Box>
  );
}

Formik.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};
