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
import img from '../../assets/images/background.png'


export default function Signup() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [displayName, setDisplayName] = useState('')
  const { error, isPending, signup } = useSignup()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   signup(email, password, displayName)
  // }

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      name: Yup.string()
        .max(255)
        .required('Name is required'),
      password: Yup.string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: (values) => {
      signup(values.email, values.name, values.password)
    }
  })

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #5C7CF2 50%, #F5F6FA 50%, #F5F6FA 100%)', // Replace with your preferred background color
        minHeight: '100vh',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          maxWidth: '80vw', // Max width added to prevent stretching
          width: '100%', 
          height: ['auto', '800px'],
          backgroundColor: '#fff',
          borderRadius: '30px', 
          overflow: 'hidden',
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
           // Padding at the bottom to prevent button from touching the edge
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                background: '#6383FA',
                display: 'grid',
                gridTemplateColumns: '0.1fr 1.5fr',
                gridTemplateRows: 'repeat(2, 1.5fr) 0.5fr 1.5fr',
              }}
            >
              {/* <img
                src='' 
                alt="Descriptive alt text"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              /> */}
                <Typography 
                  variant='montserrat'
                  sx={{ 
                    gridArea: '2/2/3/3',
                    display: 'flex',
                    alignSelf: 'center',
                    justifyContent: 'center',

                }}>
                  Track Your <br/> Budget
                </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
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
              <Stack spacing={1} sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Already have an account?&nbsp;
                  <Link
                    to="/auth/login"
                    underline="hover"
                    variant="subtitle2"
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
                    error={Boolean(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="Name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
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