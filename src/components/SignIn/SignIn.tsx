import React, { useState } from 'react';

//  Material UI
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

// Components
import Button from 'components/Button';

// Third party
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

// Services
import { login } from 'services/api';

// Utils
import { authenticate } from 'utils/authentication';
import toast from 'utils/toast';

// Types
import { Auth } from 'types';

// Styles
import useStyles from './styles';

type FormFields = {
  email: string;
  password: string;
};

const validationSchema = yup.object().shape({
  email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
});

const SignIn: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);

  const initialValues: FormFields = {
    email: '',
    password: ''
  };

  const handleSubmit = ({ email, password }: FormFields) => {
    const params = {
      email,
      password
    };

    setLoading(true);

    login(params)
      .then(({ data }) => {
        const auth: Auth = {
          id: data.id,
          username: data.name
        };

        authenticate(auth);
        history.push('/orders');
      })
      .catch(() => {
        toast('Ocorreu um erro, tente novamente.', { type: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ touched, errors, handleChange }) => (
        <Form>
          <FormGroup className={classes.formGroup}>
            <InputLabel>E-mail</InputLabel>
            <TextField
              name="email"
              autoComplete="off"
              onChange={handleChange}
              variant="outlined"
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
          </FormGroup>

          <FormGroup className={classes.formGroup}>
            <InputLabel>Senha</InputLabel>
            <TextField
              name="password"
              onChange={handleChange}
              variant="outlined"
              type="password"
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
            />
          </FormGroup>

          <Box className={classes.box}>
            <Button type="submit" loading={loading}>
              Entrar
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
