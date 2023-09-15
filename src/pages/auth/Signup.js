import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Link as RouterLink } from 'react-router-dom';
import img from '../../assets/images/Dual_blob.svg'
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Signup() {
  const { error, isPending, signup } = useSignup()

  const matches = useMediaQuery('(min-width:1200px)');

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
      console.log(values)
      signup(values.email, values.password, values.displayName)
    }
  })

  return (
    <Box
      sx={{
        background: matches 
         ? 'linear-gradient(to right, #5C7CF2 50%, #F5F6FA 50%, #F5F6FA 100%)'
         : '#5C7CF2', // Replace with your preferred background color
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
          maxWidth: '80vw', // Max width added to prevent stretching
          width: '100%',
          height: !matches
          ? '600px'
          : '800px',
          backgroundColor: '#fff',
          borderRadius: '30px', 
          overflow: 'hidden',
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
           // Padding at the bottom to prevent button from touching the edge
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
                    to="/auth/login"
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
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
  
    {/* // <form onSubmit={handleSubmit} className={styles['signup-form']}>
    //   <h2>Signup</h2>
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
    //   <label>
    //     <span>display name:</span>
    //     <input 
    //       type="text"
    //       onChange={(e) => setDisplayName(e.target.value)}
    //       value={displayName}
    //     />
    //   </label>
    //   {!isPending && <button className='btn'>Signup</button>}
    //   {isPending && <button className='btn' disabled>Loading</button>}
    //   {error && <p>{error}</p>}
    // </form>
  ) */}
}