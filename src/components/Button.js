import React from 'react'
import styled from 'styled-components'
import * as vars from "../style/vars"
import { below } from "../style/functions"
import Link from "gatsby-link"

class Button extends React.Component {

  render() {
    return (
      <Wrap float={this.props.float} >
        {this.props.external !== true
          ? (
            <ButtonContainer
              to={this.props.href}
              target={this.props.target}
              title={this.props.title} float={this.props.float} type={this.props.type} className="btn">{this.props.button}</ButtonContainer>
          ) : (
						<AContainer
              href={this.props.href}
              target={this.props.target}
              title={this.props.title}>{this.props.button}</AContainer>	
					)}
      </Wrap>
    )
  }
}

export default Button

const Wrap = styled.div`
		float: ${props => (props.float ? `right` : `none`)};

`
const ButtonContainer = styled(Link)`

	text-align:center;
	text-transform: uppercase;
	font-family: ${vars.fonts.titleAlt};
	font-size: 1.4rem;
	line-heights: 1;
	letter-spacing:1px;
	text-decoration: none;
	background: ${vars.colors.blank};
	border: none;
	color: ${vars.colors.offBody};
	padding: ${vars.genPadd / 2}rem  ${vars.genPadd}rem;
	transition: background 1s;
	display: inline-block;
	overflow: hidden;
	min-width: 10rem;
	z-index:0;
	font-weight: 500;
	z-index: ${props => (props.float ? `-1` : `1`)};

	${below.desktop`
	font-size:1.2rem;
	padding: 0.9rem 1rem;

	`}
	${props => props.float && below.mobile`
	height: 4.5rem;
	line-height: 4.5rem;
	display:block;
	font-size: 2.2rem;
	padding: 0 1.5rem;
	background-color: ${vars.colors.offBlank};

	`}
	${below.mobile`
	height: 4.5rem;
	line-height: 4.5rem;
	display:block;
	font-size: 3.5vw;
	padding: 0 .5rem;
	`}
	${props => props.type == 'border-white' && `
		border: 1px solid ${vars.colors.blank};
		background: transparent;
		color: ${vars.colors.blank};
	`}
	&:hover{
		background: ${vars.colors.offBody};
		color: ${vars.colors.blank};
		${props => props.type == 'border-white' && `
		color: ${vars.colors.brandPrimary};
		background: ${vars.colors.blank};


	`}

	}
`



const AContainer = styled.a `
	font-weight: bold;
	text-transform: uppercase;
	font-family: ${vars.fonts.title};
	font-size: 1.35rem;
	letter-spacing:1px;
	margin-bottom: 1.5rem;
	text-decoration: none;
	background: ${vars.colors.brandHighlight};
	border: none;
	color: ${vars.colors.blank};
	padding: 1rem 2rem 1rem 2rem;
	transition: background 1s;
	display: inline-block;
	overflow: hidden;
	z-index:0;
	&:hover{
		background: ${vars.colors.brandPrimary};
	}
	${below.desktop`
display:none;
	`}
`