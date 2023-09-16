import { useLogin } from '../../hooks/useLogin'
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { green } from '@mui/material/colors';
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {
  // Utilise isPending to add loading and prevent user from clicking on continue.
  const { error, login, isPending, loginAnonymously } = useLogin()
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (error) {
      setOpen(true)
    }
  }, [error])

  setTimeout(() => {
    setOpen(false)
  }, 5000);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: (values, helpers) => {
        try {
          login(values.email, values.password);
      } catch (err) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
      }
    }
  });

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
                component={RouterLink}
                to="/signup"
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
                  disabled={isPending}
                >
                  Continue
                </Button>
                {isPending && (
                  <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                  >
                    <CircularProgress
                      size={35}
                      sx={{
                        color: green[500],
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                      }}
                  />
                  </Backdrop>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3, background: '#F1EE63' }}
                  onClick={loginAnonymously}
                  disabled={isPending}
                >
                  Continue as guest
                </Button>
                {error && (
                  <Collapse in={open}>
                    <Alert
                        color="error"
                        severity="error"
                        variant="outlined"
                        sx={{ mt: 1 }}
                        action={<IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>}
                      >
                        {error}
                    </Alert>
                  </Collapse>
                )}
              </form>
          </div>
        </Box>
      </Box>
    </>
  )
}
