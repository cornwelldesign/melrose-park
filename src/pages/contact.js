import React from "react"
import Link from "gatsby-link"

import styled, { injectGlobal } from "styled-components"
import * as vars from "../style/vars"
import {maxHeight, below} from "../style/functions"
import RegisterForm from "../components/RegisterForm.js"
import "../style/main.js"

import Bg from "../components/Bg"
if (typeof window !== `undefined`) {
  const scrollToElement = require('scroll-to-element');
}




const ToggleWrap = styled.div `
		transition: filter 2s;
		transition-timing-function: ease;
		filter: blur(0);
	${props => props.blur == true && `
        filter: blur(5px);
	`}
`


const Header = styled.header `
  width:100%;
  height:100vh;
  position:relative;
  top:0;
  left:0;
  z-index:0;
  text-align:center;
  background-color:${vars.colors.brandPrimary};
`

const RegisterButton = styled.a `
  position:absolute;
  top:30px;
  right:30px;
  text-align: center;
  text-decoration:none;
  color: ${vars.colors.brandPrimary};
  background-color:${vars.colors.blank};
  font-size: 1.75rem;
  padding: 1rem 2.5rem 1rem 2.5rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: color ${vars.time}, background ${vars.time};
  z-index: 7;
  display: inline;
  margin: auto;
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
    background: ${vars.colors.brandPrimary};
    z-index: -1;
    opacity: 0;
    -webkit-transform: scale3d(0.7, 1, 1);
    transform: scale3d(0.7, 1, 1);
    transition: transform 1s, opacity 1s, border-color 1s;
  }
  &:hover {
    color: #fff;
    &:before{
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);

    }
  }

  @media screen and (max-width:768px) {
    display:inline;
  }
`


const Footer = styled.footer `
	position: absolute; 
	bottom: 6.5rem;
	z-index: 2;
	width: 100%;
	vertical-align:top;
`

const Logo01 = styled.div `
  display: inline-block;
  width:495px;
  height:328px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
	max-width: 90%;

`





const Main = styled.main `
position: relative;
width: 100%;
`

const Inner = styled.div `
	display: table-cell;
	vertical-align:middle;

`
class homePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			registerOpen: false,
			company: "Melrose Park",
			page_title: "Melrose Park | Register now",
			page_description: "Melrose Park - The new heart of Sydney",
			company: "Melrose Park",
			domain: 'http:/melrosepark.com.au',
			street_address: "Hope St, Melrose Park",
			locality: "en_AU",
			region: "NSW",
			postal_code: "2144",
			country_name: "Australia",
			phone_number: "",
			latitude: "-33.814225",
			longitude: "151.070157"
		}
	}

	toggleForm() {
		const registerOpen = !this.state.registerOpen
		this.setState({
			registerOpen
		})
		this.setState({
			formStatus:'inComplete'
		})
	}
	updateMeta(title, desc) {
		this.setState({
			page_title: title,
			page_description: desc
		})
	}

	showRegister() {
		if (typeof window !== `undefined`) {
			scrollToElement('#register', {
				ease:'out-quad',
				duration:1000
			});
		} else {
			return false;
		}
	}
  componentDidMount() {
	}
	render() {
		return(
			<div>
			<Header>
			<Logo01 href="/">
				<svg>
					<use xlinkHref='/svgs/melrose_logo.svg#logo' />
				</svg>
			</Logo01>

			<RegisterButton href="#register" >
			Register now
			</RegisterButton>

		</Header>

		<ToggleWrap
		blur={this.state.registerOpen} >

			<Bg/>
		
		</ToggleWrap>
		<RegisterForm
          shown={this.state.registerOpen}
          className="active"
          toggleForm={this
          .toggleForm
          .bind(this)}/>

			</div>
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



