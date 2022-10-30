import styled from "styled-components";
import {useState} from "react";
import {useFormik} from 'formik';
import {Mobil} from '../responsive'


const Container = styled.div`
  width: 100wv;
  height: 100vh;
  dispaly: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

`;

const Title = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;

`;


const Notification = () =>{
	return(
         <Container>
         	<Wrapper>
         		<Title>
         			Notification
         		</Title>
         	</Wrapper>
         </Container>
    )

}