import React from "react"
import ReactDOM from 'react-dom';
import styled, { keyframes } from "styled-components"
import Button from "../components/Button"
import { H1, H2, H3, H4, P, LargeP } from "../components/Text"
import * as vars from "../style/vars"
import { below, clearFix } from "../style/functions"

import Link from "gatsby-link"

class FocusImg extends React.Component {

	render() {
		return(<Img className="img " to={this.props.link} title={this.props.button}  >
			<img src={this.props.image} alt={this.props.alt}  draggable={false}    />
			<H2>{this.props.title}</H2>
		</Img>

		)
	}
}

export default FocusImg



const Img = styled(Link)`
	position: relative;
	display:block;
	height: 100%;
	background: ${vars.colors.brandPrimary};
	text-align:center;
	img{
		width: 100%;
		display:block;
		height: 100%;
		object-fit: cover;
		object-position: center;
		margin:auto;
	}
	h2{
		position: absolute; 
		top: 50%;
		left:0;
		right:0;
		margin: auto;
		transform: translateY(-67%);
		z-index: 2;
		color: rgba(255, 255, 255, 0.9);
		white-space:pre-line;

	}
`;
