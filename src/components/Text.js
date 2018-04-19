import React from 'react'
import styled from 'styled-components'
import * as vars from "../style/vars"
import { below } from "../style/functions"

export const H1 = ({ className = "",  children, type }) => (
  <H1container  className={className} type={type} >
    {children}
  </H1container>
)

export const H2 = ({ className = "", children, invert }) => (
  <H2container className={className}  invert={invert}  >
    {children}
  </H2container>
)

export const H3 = ({ className = "", children, icon }) => (
  <H3container className={className}  icon={icon} >
    {children}
  </H3container>
)

export const H4 = ({ className = "", children, icon }) => (
  <H4container className={className} icon={icon} >
    {children}
  </H4container>
)

export const LargeP = ({ className = "", children, type, icon }) => (
  <LargePcontainer className={className} type={type} icon={icon} >
    {children}
  </LargePcontainer>
)

export const P = ({ className = "",  children, invert }) => (
  <Pcontainer className={className}  invert={invert} >
    {children}
  </Pcontainer>
)
export const Sub = ({ className = "",  children, invert }) => (
  <Subcontainer className={className}  invert={invert} >
    {children}
  </Subcontainer>
)



const H1container = styled.h1`
	font-family: ${vars.fonts.title};
  font-size: 12rem;
  text-transform: uppercase;
	font-weight: normal;
	line-height: 0.8;
	color: ${props => (props.type ? `${vars.colors.brandPrimary}` : `auto`)};
		padding-bottom: ${vars.genPadd}rem;

`

const H2container = styled.h2`
	font-family: ${vars.fonts.title};
  font-size: 9rem;
  text-transform: uppercase;
	font-weight: normal;
	line-height: 0.85;
`

const H3container = styled.h3`
	font-family: ${vars.fonts.title};
  font-size: 3.8rem;
  text-transform: uppercase;
	font-weight: normal;
	line-height: 1;
	color: ${props => (props.icon ? `${vars.colors.offBody}` : `auto`)};
	${props => (props.icon && `
		&:before{
			display: block;
			content:'';
			width: 1.5rem;
			height: 1.5rem;
			border-radius:100%;
			background: ${vars.colors.brandPrimary};
			margin-bottom: ${vars.genPadd}rem;
		}

	`)}
`

const LargePcontainer = styled.p`
	font-family: ${vars.fonts.body};
  font-size: 4rem;
	font-weight: normal;
	line-height: 1;
	padding-bottom: ${vars.genPadd}rem;
	color: ${props => (props.type ? `${vars.colors.brandPrimary}` : `auto`)};
	${props => (props.icon && `
		&:before{
			display: block;
			content:'';
			width: 1.5rem;
			height: 1.5rem;
			border-radius:100%;
			background: ${vars.colors.offBody};
			margin-bottom: ${vars.genPadd}rem;
		}

	`)}
`
const H4container = styled.h4`
	font-family: ${vars.fonts.title};
  font-size: 2.5rem;
  text-transform: uppercase;
	font-weight: normal;
	line-height: 1;
	padding-bottom: ${vars.genPadd}rem;
	color: ${props => (props.icon ? `${vars.colors.offBody}` : `auto`)};
	${props => (props.icon && `
		&:before{
			display: block;
			content:'';
			width: 1.5rem;
			height: 1.5rem;
			border-radius:100%;
			background: ${vars.colors.brandPrimary};
			margin-bottom: ${vars.genPadd}rem;
		}

	`)}
`

const Pcontainer = styled.p`
	font-family: ${vars.fonts.body};
  font-size: 2rem;
	font-weight: normal;
	line-height: 1;
	padding-bottom: ${vars.genPadd}rem;
`
