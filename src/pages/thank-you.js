import React from "react"
import Link from "gatsby-link"

import styled, { injectGlobal } from "styled-components"
import * as vars from "../style/vars"
import {maxHeight, below} from "../style/functions"
import {colors} from "../style/vars"

class homePage extends React.Component {
  componentDidMount() {
		this.props.updateMeta('Thank you', '');
	}
	render() {
		return(
			<ThankYou  id="thanks">

			<Heading>Thank you<br/> for registering</Heading>
		</ThankYou>    )
  }
}

export default homePage


const P = styled.p`
	display:block;
	font-size: 1.75rem;
	line-height: 1.4;
	letter-spacing: 0.15rem;
	color: #fff;
	margin-bottom: 4rem;
	padding-top:50vh;
	position: relative;
	z-index: 3;
	${maxHeight.height`
	padding-top:34vh;

	`};
`
const ThankYou = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  background-image:url('/images/thank_you.jpg');
  background-size:cover;
  background-position:center center;
  z-index: 10000;
	display:block;
`


const ThankYouText = styled.h2 `
  font-size: 1.5rem;
  color: ${colors.white};
  text-align: center;
`
const Heading = styled.h3 `
	display:inline-block;
	color:rgba(255,255,255,0.9);
	text-shadow: 0 2px 32px rgba(0,0,0,0.3);
	position: relative;
	z-index:2;
  top: 50%;
  transform: translateY(-50%);
  font-size:10rem;
  text-transform:uppercase;
  padding-top:25px;

  @media screen and (max-width:768px) {
  	font-size:8rem;
  	padding:0 15px;
  }
`



const RegisterButton = styled.div `
  width: 100%;
  text-align: center;
	color: ${vars.colors.blank};
	font-size: 1.75rem;
  padding: 1rem 2.5rem 1rem 2.5rem;
  text-transform: uppercase;
  cursor: pointer;
	transition: color ${vars.time}, background ${vars.time};
	position: relative;
	z-index: 7;
	display: inline;
	margin: auto;
	color: #C8AE88;
	border: 2px solid #C8AE88;
	font-weight: normal;


	transition: border-color 1.5s, color 1.5s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
 &:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 101%;
	height: 100%;
	background: #C8AE88;
	z-index: -1;
	opacity: 0;
	-webkit-transform: scale3d(0.7, 1, 1);
	transform: scale3d(0.7, 1, 1);
	transition: transform 1.5s, opacity 1.5s, border-color 1.5s;
 }
&:hover {
	color: #fff;
	border-color: #C8AE88;
&:before{
	opacity: 1;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);

}
}
`
