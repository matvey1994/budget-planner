import { useState, useEffect } from 'react'
import { useSignup } from '../../hooks/useSignup'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Alert, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import img from '../../assets/images/Dual_blob.svg'
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';


export default function Signup() {
  // Utilise error to display message to user in case of authentication issue
  // Utilise isPending to disable button after form submission and display loading animation
  const { error, isPending, signup } = useSignup()
  const matches = useMediaQuery('(min-width:1200px)');
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
      displayName: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      displayName: Yup.string()
        .max(255)
        .required('Name is required'),
      password: Yup.string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: (values) => {
      signup(values.email, values.password, values.displayName)
    }
  })

  return (
    <Box
      sx={{
        background: matches 
         ? 'linear-gradient(to right, #5C7CF2 50%, #F5F6FA 50%, #F5F6FA 100%)'
         : '#5C7CF2',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...(!matches ? {
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        } : {})
      }}
    >
      <Box
        sx={{
          display: 'flex',
          maxWidth: '80vw',
          width: '100%',
          height: !matches
          ? '600px'
          : '800px',
          backgroundColor: '#fff',
          borderRadius: '30px', 
          overflow: 'hidden',
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Grid container>
          <Grid item xs md sx={{ display: { xs: 'none', md: 'flex' }, '@media (max-width: 1200px)': { display: 'none' } }}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                background: '#6383FA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
                <Typography
                  variant='montserrat' 
                  sx={{ 
                    textAlign: 'center',
                    fontSize: '4em'
                }}>
                    Track Your Budget
                </Typography>
            </Box>
          </Grid>
          <Grid item xs md sx={{ '@media (max-width: 1200px)': { flexDirection: 'column', alignItems: 'center'} }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                p: 3, 
              }}
            >
              <Typography variant="h4">
                Register
              </Typography>
              <Stack spacing={1} sx={{ mb: 3, ml: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Already have an account?&nbsp;
                  <Link
                    component={RouterLink}
                    to="/login"
                    underline="hover"
                    variant="subtitle2"
                    sx={{
                      ':hover': {
                        cursor: 'pointer',
                      },
                    }}
                  >
                    Log in
                  </Link>
                </Typography>
              </Stack>
              <form
                noValidate
                onSubmit={formik.handleSubmit}
                style={{
                  width: '100%',
                  maxWidth: '400px', 
                }}
              >
                <Stack spacing={3}>
                  <TextField
                    error={Boolean(formik.touched.displayName && formik.errors.displayName)}
                    fullWidth
                    helperText={formik.touched.displayName && formik.errors.displayName}
                    label="Name"
                    name="displayName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.displayName}
                  />
                  <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
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
                    error={Boolean(formik.touched.password && formik.errors.password)}
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
                >
                  Continue
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
                            console.log(open)
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}