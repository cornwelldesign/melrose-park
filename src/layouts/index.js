import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, {
	injectGlobal
} from "styled-components"
import RegisterForm from "../components/RegisterForm.js"
import * as vars from "../style/vars"
import "../style/main.js"
import {
	below
} from "../style/functions"
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
  height:50vh;
  position:fixed;
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
    display:none;
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
  width:381px;
  height:253px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-height:768px) {
    width:190px;
    height:126px;
  }
`





const Main = styled.main `
position: relative;
width: 100%;
`

const Inner = styled.div `
	display: table-cell;
	vertical-align:middle;

`
class TemplateWrapper extends React.Component {
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

  render() {

			const updateMeta = this
      .updateMeta
			.bind(this);
			const toggleForm = this.toggleForm.bind(this);
    return (
      <div id="top">
        <Helmet
          title={this.state.page_title}
          meta={[
          {
            charset: "utf-8"
          }, {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          }, {
            http_equiv: "x-ua-compatible",
            content: "IE=edge,chrome=1"
          }, {
            name: "description",
            content: this.state.page_description
          }, {
            itemprop: "name",
            content: this.state.page_title
          }, {
            itemprop: "description",
            content: this.state.page_description
          }, {
            itemprop: "image",
            content: `${this.state.domain}/images/social.jpg`
          }, {
            name: "twitter:card",
            content: "summary_large_image"
          }, {
            name: "twitter:title",
            content: this.state.page_title
          }, {
            name: "twitter:description",
            content: this.state.page_description
          }, {
            name: "twitter:image:src",
            content: `${this.state.domain}/images/social.jpg`
          }, {
            property: "og:title",
            content: this.state.page_title
          }, {
            property: "og:type",
            content: "website"
          }, {
            property: "og:url",
            content: `${this.state.domain}${this.props.location_pathname}`
          }, {
            property: "og:image",
            content: `${this.state.domain}/images/social.jpg`
          }, {
            property: "og:image:secure_url",
            content: `${this.state.domain}/images/social.jpg`
          }, {
            property: "og:video",
            content: `${this.state.domain}/images/flinders-bank.mp4`
          }, {
            property: "og:video:secure_url",
            content: `${this.state.domain}/images/flinders-bank.mp4`
          }, {
            property: "og:image:type",
            content: "image/jpeg"
          }, {
            property: "og:image:width",
            content: "840"
          }, {
            property: "og:image:height",
            content: "450"
          }, {
            property: "og:description",
            content: this.state.page_description
          }, {
            property: "og:site_name",
            content: this.state.page_company
          }, {
            name: "theme-color",
            content: "#0392D4"
          }, {
            property: "business:contact_data:street_address",
            content: this.state.street_address
          }, {
            property: "business:contact_data:locality",
            content: this.state.locality
          }, {
            property: "business:contact_data:region",
            content: this.state.region
          }, {
            property: "business:contact_data:postal_code",
            content: this.state.postal_code
          }, {
            property: "business:contact_data:country_name",
            content: this.state.country_name
          }, {
            property: "business:contact_data:phone_number",
            content: this.state.phone_number
          }, {
            property: "business:contact_data:website",
            content: this.state.domain
          }, {
            property: "place:location:latitude",
            content: this.state.latitude
          }, {
            property: "place:location:longitude",
            content: this.state.longitude
          }
        ]}
          link={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/images/apple-touch-icon.png"
          }, {
            rel: "icon",
            sizes: "32x32",
            type: "image/png",
            href: "/images/favicon-32x32.png"
          }, {
            rel: "icon",
            sizes: "16x16",
            type: "image/png",
            href: "/images/favicon-16x16.png"
          }, {
            rel: "manifest",
            href: "/images/site.webmanifest"
          }, {
            rel: "mask-icon",
            href: "/images/safari-pinned-tab.svg",
            color: "#00b398"
          }, {
            rel:"shortcut icon",
            href: "/images/favicon.ico"
          }, {
            rel: "canonical",
            href: this.state.domain
          }
        ]}/>

        <Header>
          <Logo01 href="/">
            <svg>
              <use xlinkHref='/svgs/melrose_logo.svg#logo' />
            </svg>
          </Logo01>

          <RegisterButton href="#register" onClick={this.showRegister}>
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

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
