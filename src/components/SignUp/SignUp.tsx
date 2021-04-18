import React, { useState } from 'react';

//  Material UI
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

// Components
import Button from 'components/Button';
import TextFieldMask from 'components/TextFieldMask';

// Third party
import { Formik, Form, Field } from 'formik';
import { cpf } from 'cpf-cnpj-validator';
import * as yup from 'yup';

// Services
import { createUser } from 'services/api';

// Utils
import toast from 'utils/toast';
import { maskCPF } from 'utils/masks';

// Styles
import useStyles from './styles';

type FormFields = {
  name: string;
  email: string;
  taxvat: string;
  password: string;
};

type Props = {
  goBack: () => void;
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório').min(6, 'O nome deve ter no mínimo 6 caracteres'),
  email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  taxvat: yup
    .string()
    .required('Campo obrigatório')
    .test('checkCPF', 'CPF inválido', (value) => cpf.isValid(value ?? ''))
});

const SignUp: React.FC<Props> = ({ goBack }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(false);

  const initialValues: FormFields = {
    name: '',
    email: '',
    taxvat: '',
    password: ''
  };

  const handleSubmit = ({ name, taxvat, email, password }: FormFields) => {
    const params = {
      name,
      email,
      taxvat,
      password
    };

    setLoading(true);

    createUser(params)
      .then(() => {
        toast('Usuário cadastraso com sucesso', { type: 'success' });
        goBack();
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
      {({ touched, errors, handleChange, setFieldValue }) => (
        <Form>
          <FormGroup className={classes.formGroup}>
            <InputLabel>Nome</InputLabel>
            <TextField
              name="name"
              autoComplete="off"
              onChange={handleChange}
              variant="outlined"
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
            />
          </FormGroup>

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
            <InputLabel>CPF</InputLabel>
            <Field
              name="taxvat"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setFieldValue('taxvat', e.currentTarget.value);
              }}
              variant="outlined"
              error={touched.taxvat && !!errors.taxvat}
              helperText={touched.taxvat && errors.taxvat}
              component={TextField}
              InputProps={{
                inputComponent: TextFieldMask,
                inputProps: {
                  mask: maskCPF
                }
              }}
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
              Cadastrar
            </Button>
            <Button variant="outlined" onClick={goBack}>
              Cancelar
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
