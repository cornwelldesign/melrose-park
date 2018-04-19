import React from "react"
import styled from "styled-components"
import * as vars from "../style/vars"
import { below } from "../style/functions"
import Link from "gatsby-link"

class Nav extends React.Component {
	render() {
		return(
			<Container nav_open={this.props.nav_open} className={this.props.links_hide} >
				<Inner>
				<Item>
						<A to="/vision/" onClick={this.props.onClick} activeClassName="selected" Vision="Vision" >Vision</A>
					</Item>
					<Item>
						<A to="/location/" onClick={this.props.onClick}  activeClassName="selected" title="Location" >Location</A>
					</Item>
					<Item>
						<A to="/lifestyle/" onClick={this.props.onClick}  activeClassName="selected" title="Lifestyle" >Lifestyle</A>
					</Item>
					<Item>
						<A to="/smart-city/" onClick={this.props.onClick}  activeClassName="selected" title="Smart City" >Smart City</A>
					</Item>					<Item>
						<A to="/green-space/" onClick={this.props.onClick}  activeClassName="selected" title="Green Space" >Green Space</A>
					</Item>
					<Item>
						<A to="/residences/" onClick={this.props.onClick}  activeClassName="selected" title="Residences" >Residences</A>
					</Item>
					<Item>
						<A to="/contact/" onClick={this.props.onClick}  activeClassName="selected" title="Contact" >Contact</A>
					</Item>
				</Inner>
			</Container>
		)
	}
}

const Container = styled.nav`
	float:right;
	overflow:hidden;
	padding: 0 ${vars.genPadd}rem;
	&.links-hide{
		display:none;
	}

	${below.mobile`
		position: fixed;
		top: 4.5rem;
		z-index: 2;
		left: 0;
		right: 0;
		width:100%;
		height:auto;
		transition: top ${vars.time};
		top: ${props => (props.nav_open ? `4.5rem` : `-60vh`)};
	`}
`

const Inner = styled.ul`
	list-style: none;

`

const Item = styled.li`
	display:inline-block;
	${below.mobile`
		display: block;
	`}

`

const A = styled(Link)`
	font-size: 1.4rem;
	letter-spacing:1px;
	text-transform: uppercase;
	color: ${vars.colors.blank};
	text-decoration: none;
	font-family: ${vars.fonts.titleAlt};
	padding: ${vars.genPadd / 2}rem ${vars.genPadd}rem;
	display:block;
	font-weight: 300;
	&:hover{
		font-weight: 500;
	}

	&.selected { 
		/*
		font-weight: bold;
		color: ${vars.colors.brandHighlight};
*/
}
${below.mid`
padding: 1.8rem 3rem;
	`}
	${below.desktop`
	padding: 1.8rem 1vh;

	`}
	${below.mobile `
		font-size: 2rem;
		padding: 2rem 0;
		border-bottom: 1px solid ${vars.colors.brandPrimary};
		&:hover{
			background: ${vars.colors.offColor}
		}
	`}
`

export default Nav
