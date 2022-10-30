import styled from "styled-components";
import {useState} from "react";
import {useFormik} from 'formik';
import {Mobil} from '../responsive'
import {login} from '../redux/apiCalls'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, useLocation, Link, useHistory} from 'react-router-dom'
import * as Yup from 'yup';
import {
  Box,
  Checkbox,
  FormHelperText,
  TextField,
  Grid,
  Typography
} from '@mui/material';

const Cont = styled.div`
   overflow:hidden;

`;
const Container = styled.div`
  width: 90%;
  height: 90vh;
  padding-right: 600px; 
  align-items: center;
 ${Mobil({ justifyContent : "none", height : "150vh" , flexDirection : "column"})}
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 80px;
  background: white;
  border-radius: 20% teal;
  display: flex;
  align-items: center;
  justify-content: center;
 ${Mobil({ padding : "0px", widtth : "60%"})}

`;
const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: teal;
  border-radius: 5px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction:column;

`;

const Error = styled.span`
    color: red;
`;

const Login = () =>{

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object(
    {
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required'),
      OrderNumber: Yup
        .string()
        .email('Must be a valid Order Number')
        .max(255)
        .required('Error - The Oerder Number field is required'),
      OrderEmail: Yup
        .string()
        .email('Must be a valid Order Email')
        .max(255)
        .required('Error - The Oerder Email field is required'),
      BillingZipCode: Yup
        .string()
        .email('Must be a valid Billing ZIP Code')
        .max(255)
        .required('Error - The Billing ZIP Code field is required')
    })
  });

  const {isFetching, error} = useSelector((state)=> state.user)  

  const dispatch = useDispatch();

  const history = useHistory();

  
  const handleClick = async (username, password)=>{
    login(dispatch, {username, password})
    error ? console.log('john') :  history.push('/')
  }    
   return(

    <Cont>
    <Container>
      <Wrapper>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4">
                Sign in
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2">
                Sign in on the internal platform
              </Typography>
            </Box>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                type="submit"
                variant="contained"
                onClick={()=>handleClick(formik.values.email, formik.values.password)}
                desabled={isFetching}
              >
                Sign In Now
              </Button>
              {error && <Error>Something went wrong...</Error>}
            </Box>
            <Typography
              color="textSecondary"
              variant="body2">
              Don&apos;t have an account?
              {' '}
                <Link
                  to="/Register"
                  variant="subtitle2"
                  underline="hover">
                  Sign Up
                </Link>
            </Typography>
          </form>
      </Wrapper>
    </Container>
    </Cont>     
   )
}

export default Login;