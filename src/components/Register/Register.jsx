import { Label, Text, RegisterBtn, Thumb, Form, Input, FormTitle } from './Register.styled';
import { FormError } from 'components/ContactsPage/FormError';
import { ErrorElem } from 'components/ContactsPage/FormError/FormError.styled';
import { Box } from 'components/Box';
import { register } from 'redux/auth/authOperations';
import { toastOptions } from 'utils/toastOptions';
import { selectIsLoading } from 'redux/auth/authSelectors';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ContactsSpinner } from 'components/ContactsPage/ContactsSpinner';

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
    .matches(/[0-9]{5}/, 'Пароль должен содержать минимум 5 цифр')
    .matches(/[a-zA-Zа-яА-Я]{3}/, 'Пароль должен содержать минимум 3 буквы')
    .required('Это поле обязательное'),
});

export function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [unvalidPassword, setUnvalidPassword] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const password = values.password.trim();
    if (password.includes(' ')) {
      setUnvalidPassword(true);
      return setTimeout(() => {
        setUnvalidPassword(false);
      }, 3000);
    }

    const formValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };

    const { error } = await dispatch(register(formValues));
    if (!error) {
      resetForm();
      toast.success(`You have successfully registered`, toastOptions);
      return navigate('/', { replace: true });
    }
    toast.error(`An error has occurred, please check the information you entered.`, toastOptions);
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
              <Text>Password</Text>
              <Thumb>
                <Input type="password" name="password" placeholder="12345abcd" />
                {errors.password && touched.password ? <FormError name="password" /> : null}
                {errors.password && touched.password && resetErrors(setErrors)}
                {unvalidPassword && <ErrorElem>Пароль должен быть без пробелов</ErrorElem>}
              </Thumb>
            </Label>

            {!isLoading ? (
              <RegisterBtn type="submit">Register</RegisterBtn>
            ) : (
              <Box mt="20px">
                <ContactsSpinner size={'50'} />
              </Box>
            )}
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
