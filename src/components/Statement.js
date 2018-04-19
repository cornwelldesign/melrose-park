import React from "react"
import styled from "styled-components"

import { colors, genPadd } from "../style/vars"
import { above, below } from "../style/functions"
import Link from "gatsby-link"
import * as vars from "../style/vars"

export default ({ children, link }) => (
  <Container>
		<span>
    {children}
		</span>
    <Button to={link}>Discover More</Button>
  </Container>
)

const Container = styled.section`
  width: 100%;
  color: ${vars.colors.brandPrimary};
	font-family: "Salome Fine", times, serif;
  font-size: 3.5em;
  text-transform: uppercase;
  padding: 4rem 4rem 3rem 4rem;
  ${below.giant`font-size: 3.2em;`};
  ${below.tablet`font-size: 3em;`};
	max-width: 109rem;
	margin: auto ;
	span{
		max-width:91rem;
		display:block;
		margin:auto auto 2rem auto;
	}
`

const Button = styled(Link)`
	font-weight: bold;
	text-transform: uppercase;
	font-family: "Proxima Nova", serif;
	font-size: 1.35rem;
	letter-spacing:1px;
	margin-bottom: 1.5rem;
	text-decoration: none;
	background: linear-gradient(#a9947b, #caba9a);
	border: none;
	color: ${vars.colors.brandHighlight};
	padding: 1rem 2rem 1rem 2rem;
	border-radius: 0.7rem;
	transition: background 1s;
	display: inline-block;
	overflow: hidden;
	position: relative;
	z-index:0;
	&:after{
		content: '';
		display: block;
		z-index:-1; 
		background: #fff;
		position: absolute;
		left:0;
		right:0;
		top:0;
		bottom:0;
		width:calc(100% - 4px);
		border-radius: 0.5rem;
		margin: auto;
		height:calc(100% - 4px);
		transition: opacity 1s;

	}
	&:hover{
		&:after{
			opacity: 0;
		}
		color: ${vars.colors.blank};
	}
`
