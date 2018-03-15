import React from "react"
import Link from "gatsby-link"

import styled, { injectGlobal } from "styled-components"
import * as vars from "../style/vars"
import {maxHeight, below} from "../style/functions"

class homePage extends React.Component {
  componentDidMount() {
	}
	render() {
		return(
<div></div>
    )
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
