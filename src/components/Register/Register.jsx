import { Label, Text, RegisterButton, Thumb, Form, Input, FormTitle } from './Register.styled';
import { FormError } from 'components/ContactsPage/FormError';
import { ErrorElem } from 'components/ContactsPage/FormError/FormError.styled';
import { Box } from 'components/Box';
import { register } from 'redux/operations';

import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)/,
      'Имя может содержать только буквы, апостроф, тире и пробелы.'
    )
    .required('Это поле обязательное'),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Невалидное значение проверьте правильность введенных данных'
    )
    .required('Это поле обязательное'),
  password: Yup.string()
    .matches(/[0-9]{7}/, 'Пароль должен содержать минимум 7 символов, и они должны быть числами')
    .required('Это поле обязательное'),
});

export function Register() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const [unvalidPassword, setUnvalidPassword] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    const password = values.password.trim();
    if (password.includes(' ')) return setUnvalidPassword(true);

    const formValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };
    resetForm();
    const res = await dispatch(register(formValues));
    console.log(res);
  };

  const resetErrors = setErrors => {
    setTimeout(() => setErrors({}), 3000);
  };

  return (
    <Box
      width="550px"
      p="30px 40px"
      m="0 auto"
      mt="40px"
      backgroundColor="rgb(240, 246, 254)"
      border="2px solid rgb(8, 2, 120)"
      borderRadius="10px"
      boxShadow="rgba(50, 50, 93, 0.7) 0px 13px 27px -5px, rgba(16, 4, 107, 0.3) 0px 8px 16px -8px"
    >
      <FormTitle>Registration</FormTitle>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        {({ errors, touched, setErrors }) => (
          <Form autoComplete="off">
            <Label>
              <Text>Name</Text>
              <Thumb>
                <Input type="text" name="name" placeholder="Name" />
                {errors.name && touched.name ? <FormError name="name" /> : null}
                {errors.name && touched.name && resetErrors(setErrors)}
              </Thumb>
            </Label>

            <Label>
              <Text>Email</Text>
              <Thumb>
                <Input type="email" name="email" placeholder="abcd@mail.com" />
                {errors.email && touched.email ? <FormError name="email" /> : null}
                {errors.email && touched.email && resetErrors(setErrors)}
              </Thumb>
            </Label>

            <Label>
              <Text>Password {'(Only numbers)'}</Text>
              <Thumb>
                <Input type="password" name="password" placeholder="12345" />
                {errors.password && touched.password ? <FormError name="password" /> : null}
                {errors.password && touched.password && resetErrors(setErrors)}
                {unvalidPassword && <ErrorElem>Пароль должен быть без пробелов</ErrorElem>}
              </Thumb>
            </Label>

            <RegisterButton type="submit">Register</RegisterButton>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

Formik.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

FormError.propTypes = {
  name: PropTypes.string.isRequired,
};
