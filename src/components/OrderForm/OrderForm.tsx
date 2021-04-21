import React, { useState } from 'react';

//  Material UI
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

// Components
import Button from 'components/Button';
import TextFieldMask from 'components/TextFieldMask';

// Third party
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

// Services
import { createOrder } from 'services/api';

// Utils
import toast from 'utils/toast';
import { maskCurrency, maskDate } from 'utils/masks';
import { parseDateToTimestamp } from 'utils/parsers';
import { getAuth } from 'utils/authentication';

// Assets
import { ReactComponent as CashbackIcon } from 'assets/images/cashback.svg';

// Styles
import useStyles from './styles';

type FormFields = {
  code: string;
  total: string;
  date: string;
};

const validationSchema = yup.object().shape({
  code: yup
    .string()
    .required('Campo obrigatório')
    .min(6, 'O código deve ter no mínimo 6 caracteres'),
  date: yup.string().required('Campo obrigatório'),
  total: yup.string().required('Campo obrigatório')
});

const OrderForm: React.FC = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const initialValues: FormFields = {
    code: '',
    total: '',
    date: ''
  };

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const handleSubmit = ({ code, total, date }: FormFields) => {
    const totalParsed = total.replace(',', '.');
    const user = getAuth();

    const params = {
      userId: user.id,
      code,
      total: Number(totalParsed),
      date: parseDateToTimestamp(date)
    };

    setLoading(true);

    createOrder(params)
      .then(() => {
        toast('Compra cadastrada com sucesso', { type: 'success' });
        toggleDrawer();
      })
      .catch(() => {
        toast('Ocorreu um erro, tente novamente.', { type: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Drawer open={visible} anchor="right" onClose={toggleDrawer}>
        <Box className={classes.container}>
          <CashbackIcon />
          <Typography component="h2" className={classes.title}>
            Compra
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ touched, errors, handleChange, setFieldValue }) => (
              <Form>
                <FormGroup className={classes.formGroup}>
                  <InputLabel>Código</InputLabel>
                  <TextField
                    name="code"
                    autoComplete="off"
                    onChange={handleChange}
                    variant="outlined"
                    error={touched.code && !!errors.code}
                    helperText={touched.code && errors.code}
                    inputProps={{
                      maxLength: 10
                    }}
                  />
                </FormGroup>

                <FormGroup className={classes.formGroup}>
                  <InputLabel>Data</InputLabel>
                  <Field
                    name="date"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                      setFieldValue('date', e.currentTarget.value);
                    }}
                    variant="outlined"
                    error={touched.date && !!errors.date}
                    helperText={touched.date && errors.date}
                    component={TextField}
                    InputProps={{
                      inputComponent: TextFieldMask,
                      inputProps: {
                        mask: maskDate
                      }
                    }}
                  />
                </FormGroup>

                <FormGroup className={classes.formGroup}>
                  <InputLabel>Valor</InputLabel>
                  <Field
                    name="total"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                      setFieldValue('total', e.currentTarget.value);
                    }}
                    variant="outlined"
                    error={touched.total && !!errors.total}
                    helperText={touched.total && errors.total}
                    component={TextField}
                    InputProps={{
                      inputComponent: TextFieldMask,
                      inputProps: {
                        mask: maskCurrency
                      }
                    }}
                  />
                </FormGroup>

                <Box className={classes.box}>
                  <Button type="submit" loading={loading}>
                    Salvar
                  </Button>
                  <Button variant="outlined" onClick={toggleDrawer}>
                    Cancelar
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Drawer>
      <Fab color="primary" className={classes.button} onClick={toggleDrawer}>
        <AddIcon />
      </Fab>
    </>
  );
};

export default OrderForm;
