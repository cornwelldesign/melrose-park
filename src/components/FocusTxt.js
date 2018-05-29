import React from "react"
import ReactDOM from 'react-dom';
import styled, { keyframes } from "styled-components"
import Button from "../components/Button"
import { H1, H2, H3, H4, P, LargeP } from "../components/Text"
import * as vars from "../style/vars"
import { below, clearFix } from "../style/functions"

import Link from "gatsby-link"

class FocusBox extends React.Component {

	render() {
		return(
			<FocusBoxContainer   >
			
		
				<Txt className="txt " >
					<Inner >			
						<LargeP className="sub-text">{this.props.text}</LargeP>
							<Button title={this.props.button} href={this.props.link} button={this.props.button} type="border-white" />
					</Inner>
				</Txt>	


			</FocusBoxContainer>
		)
	}
}

export default FocusBox


const FocusBoxContainer = styled.div`
	text-align:center;
	${clearFix()}
	position: relative;
	width:100%;
	height:100%;
	overflow:hidden;
	background: ${vars.colors.brandPrimary};
	${below.mobile`
		height: auto;
	`}
	&:nth-of-type(2n) {
		.img{
			float:right;
		}
		.txt{
			left:0;
		}
	}
`;




const Txt = styled.div`
	height: 100%;
	color: ${vars.colors.blank};
	${below.mobile`
		height: auto;
		padding: 4rem 2rem;
		.btn{
			font-size: 1.8rem;
			height: 4rem;
			line-height: 4rem;
			padding: 0;
			width: 60%;
			margin:auto;
		}
	`}
`

const Inner = styled.div`
	position: relative;
	top: 50%;
	transform: translateY(-50%); 
	width: 100% ;
	margin: auto;
	white-space: pre-line;

	.sub-text {
		width: 70%;
		margin: 0 auto;
	}
	
	${below.mobile`
	top: auto;
	transform: translateY(0%); 

	.sub-text {
		width: 100%;
	}
	`}
`
