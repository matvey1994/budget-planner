import { useLogin } from '../../hooks/useLogin'
import { useCallback, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';

export default function Login() {
  const { error, login, isPending } = useLogin()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   login(email, password)
  // }

  const auth = useLogin();
  const [method, setMethod] = useState('email');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.email, values.password);
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const handleMethodChange = useCallback(
    (event, value) => {
      setMethod(value);
    },
    []
  );

  const handleSkip = useCallback(
    () => {
      auth.skip();
    },
    [auth]
  );  

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%',
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Login
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                component="div"
                sx={{
                  display: 'flex', 
                }}
              >
              <Box>
                Don't have an account?
              </Box>
              <Link
                component='' // If you're using react-router-dom, use RouterLink here
                to="/auth/register"    // Use 'to' prop instead of 'href' for react-router-dom
                underline="hover"
                sx={{
                  ':hover': {
                    cursor: 'pointer',
                  },
                  ml: 1,
                }}
                variant="subtitle2"
              >
                Register
              </Link>
              </Typography>
            </Stack>
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Stack>
                <FormHelperText sx={{ mt: 1 }}>
                  Optionally you can skip.
                </FormHelperText>
                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                 
                  >
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  onClick={handleSkip}
                >
                  Skip authentication
                </Button>
                <Alert
                  color="primary"
                  severity="info"
                  sx={{ mt: 3 }}
                >
                  <div>
                    You can use <b>demo@devias.io</b> and password <b>Password123!</b>
                  </div>
                </Alert>
              </form>
          </div>
        </Box>
      </Box>
    </>


    // <form onSubmit={handleSubmit} className={styles['login-form']}>
    //   <Navbar/>
    //   <h2>Login</h2>
    //   <label>
    //     <span>email:</span>
    //     <input 
    //       type="email"
    //       onChange={(e) => setEmail(e.target.value)}
    //       value={email}
    //     />
    //   </label>
    //   <label>
    //     <span>password:</span>
    //     <input 
    //       type="password"
    //       onChange={(e) => setPassword(e.target.value)}
    //       value={password}
    //     />
    //   </label>
    //   {!isPending && <button className='btn'>Login</button>}
    //   {isPending && <button className='btn' disabled>Loading</button>}
    //   {error && <p>{error}</p>}
    // </form>
  )
}
