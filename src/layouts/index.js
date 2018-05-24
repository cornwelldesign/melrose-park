import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, { injectGlobal } from "styled-components"

import Footer from "../components/Footer"
import RegisterForm from "../components/RegisterForm.js"
import Nav from "../components/Nav.js"
import Hamburger from "../components/Hamburger.js"
import Splash from "../components/Splash"
import Button from "../components/Button"

import * as vars from "../style/vars"
import "../style/main.js"
import { below } from "../style/functions"
import TagManager from "react-gtm-module"

const Main = styled.main`
   padding-top: 4.5rem;
   position: relative;
`
const ToggleWrap = styled.div`
   transition: filter 2s;
   transition-timing-function: ease;

   filter: blur(0);
   ${props =>
      props.blur == true &&
      `
        filter: blur(5px);
	`};
`

const Logo = styled(Link)`
	width: 23rem;
	position: relative;
	display: block;
	float:left;
	${below.mid`
	width: 20rem;

	`}
	${below.desktop`
    display: none;
	`}	
  ${below.tablet`
    display: block;
    width: 15rem;
	`}
	${below.mobile`
    margin: 1rem 0 0 1rem;
	`}
`

const Header = styled.header`
   position: fixed;
   z-index: 10;
   left: 0;
   right: 0;
   transform: translate3d(0, 0, 0);
   background: ${vars.colors.brandPrimary};
   padding: ${vars.genPadd / 2}rem ${vars.genPadd}rem;
   ${below.mobile`
	padding:0;

	`} &:before, &:after {
      content: " "; /* 1 */
      display: table; /* 2 */
   }

   &:after {
      clear: both;
   }
`

class TemplateWrapper extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         loading: true,
         loadingOver: true,
         registerOpen: false,
         nav_open: false,
         nav_fixed: false,
         nav_hidden: false,
         links_hide: false,
         domain: "https://melrosepark.com.au/",
         company: "Melrose Park",
         page_title: "Melrose Park | The New Heart of Sydney",
         page_description:
            "The pulse of your new neighbourhood, Melrose Park Residences will have everythin" +
            "g you could need for the life you want to live. Located only 8km from Parramatta" +
            " and 17km from Sydney CBD, Melrose Park one of Sydney’s most connected places. ",
         company: "Melrose Park",
         street_address: "661 Victoria Road ",
         addressLocality: "Melrose Park",
         locality: "en_AU",
         region: "NSW",
         postal_code: "2114",
         country_name: "Australia",
         country_short: "AU",
         phone_number: "1300 267 866",
         latitude: "-27.997379",
         longitude: "153.419856",
         amenityFeature: "Building Development in Melrose Park, Sydney",
         map: "https://melrosepark.com.au/contact/",
         lang: "en"
      }
   }
   componentDidMount() {
      if (typeof window !== `undefined`) {
         setTimeout(function() {
            window.scrollTo(0, 0)
         }, 100)
        
         setTimeout(
            function() {
               this.setState({ loadingOver: true })
            }.bind(this),
            100
         )
      }

      // if path includes "/ch", set to Chinese
      if (window.location.href.search(/ch\b/) !== -1) {
        this.setState({ lang: 'ch' })
        
      } 
    }
      
      
   toggleForm() {
      const registerOpen = !this.state.registerOpen
      this.setState({ registerOpen })
      if (typeof window !== `undefined`) {
         window.scrollTo(0, 0)
      }
   }

   toggleNav(event) {
      let nav_open = !this.state.nav_open
      
      // if header link '中文(简体)' was cicked, change state to 'ch'
      if (event.target.alt === "Chinese") {
        this.setState({ lang: "ch" })
      } else if (event.target.alt === "English") {
        this.setState({ lang: "en" })
      } else {
        // if clicked other links on mobile, toggle navigation open / close
        this.setState({ nav_open })

      }
   }

   updateMeta(title, desc) {
      this.setState({ page_title: title, page_description: desc })
   }
   render() {
      if (typeof window !== `undefined`) {
         const tagManagerArgs = {
            gtmId: "GTM-58Z33ZW"
         }
         TagManager.initialize(tagManagerArgs)
      }
      const updateMeta = this.updateMeta.bind(this)
      return (
         <div id="top">
            <Helmet
               title={this.state.page_title}
               meta={[
                  {
                     charset: "utf-8"
                  },
                  {
                     name: "viewport",
                     content: "width=device-width, initial-scale=1"
                  },
                  {
                     http_equiv: "x-ua-compatible",
                     content: "IE=edge,chrome=1"
                  },
                  {
                     name: "description",
                     content: this.state.page_description
                  },
                  {
                     itemprop: "name",
                     content: this.state.page_title
                  },
                  {
                     itemprop: "description",
                     content: this.state.page_description
                  },
                  {
                     itemprop: "image",
                     content: `${this.state.domain}/images/melrose-park-sydney-property-000-SOCIAL.jpg`
                  },
                  {
                     name: "twitter:card",
                     content: "summary_large_image"
                  },
                  {
                     name: "twitter:title",
                     content: this.state.page_title
                  },
                  {
                     name: "twitter:description",
                     content: this.state.page_description
                  },
                  {
                     name: "twitter:image:src",
                     content: `${this.state.domain}/images/melrose-park-sydney-property-000-SOCIAL.jpg`
                  },
                  {
                     property: "og:video",
                     content: `https://s3-ap-southeast-2.amazonaws.com/cornwell-misc/melrose-park/melrose-park-sydney-property-teaser.mp4`
                  },
                  {
                     property: "og:video:secure_url",
                     content: `https://s3-ap-southeast-2.amazonaws.com/cornwell-misc/melrose-park/melrose-park-sydney-property-teaser.mp4`
                  },
                  {
                     property: "og:title",
                     content: this.state.page_title
                  },
                  {
                     property: "og:type",
                     content: "website"
                  },
                  {
                     property: "og:url",
                     content: `${this.state.domain}${this.props.location_pathname}`
                  },
                  {
                     property: "og:image",
                     content: `${this.state.domain}/images/melrose-park-sydney-property-000-SOCIAL.jpg`
                  },
                  {
                     property: "og:image:secure_url",
                     content: `${this.state.domain}/images/melrose-park-sydney-property-000-SOCIAL.jpg`
                  },
                  {
                     property: "og:image:type",
                     content: "image/jpeg"
                  },
                  {
                     property: "og:image:width",
                     content: "840"
                  },
                  {
                     property: "og:image:height",
                     content: "450"
                  },
                  {
                     property: "og:description",
                     content: this.state.page_description
                  },
                  {
                     property: "og:site_name",
                     content: this.state.page_company
                  },
                  {
                     name: "theme-color",
                     content: "#00B398"
                  },
                  {
                     property: "business:contact_data:street_address",
                     content: this.state.street_address
                  },
                  {
                     property: "business:contact_data:locality",
                     content: this.state.locality
                  },
                  {
                     property: "business:contact_data:region",
                     content: this.state.region
                  },
                  {
                     property: "business:contact_data:postal_code",
                     content: this.state.postal_code
                  },
                  {
                     property: "business:contact_data:country_name",
                     content: this.state.country_name
                  },
                  {
                     property: "business:contact_data:phone_number",
                     content: this.state.phone_number
                  },
                  {
                     property: "business:contact_data:website",
                     content: this.state.domain
                  },
                  {
                     property: "place:location:latitude",
                     content: this.state.latitude
                  },
                  {
                     property: "place:location:longitude",
                     content: this.state.longitude
                  }
               ]}
               script={[
                  {
                     "@context": "http://schema.org",
                     "@type": "Place",
                     url: this.state.domain,
                     logo: `${this.state.domain}/images/melrose-park-sydney-property-000-LOGO.png`,
                     address: {
                        "@type": "PostalAddress",
                        streetAddress: this.state.street_address,
                        addressLocality: this.state.addressLocality,
                        addressRegion: this.state.region,
                        addressCountry: this.state.country_short,
                        postalCode: this.state.postal_code
                     },
                     amenityFeature: this.state.amenityFeature,
                     geo: {
                        "@type": "GeoCoordinates",
                        latitude: this.state.latitude,
                        longitude: this.state.longitude
                     },
                     hasMap: this.state.map,
                     telephone: this.state.telephone,
                     description: this.state.amenityFeature
                  }
               ]}
               link={[
                  {
                     rel: "apple-touch-icon",
                     sizes: "180x180",
                     href: "/images/melrose-park-sydney-property-000-FAVICON-180.png"
                  },
                  {
                     rel: "icon",
                     sizes: "32x32",
                     type: "image/png",
                     href: "/images/melrose-park-sydney-property-000-FAVICON-32.png"
                  },
                  {
                     rel: "icon",
                     sizes: "16x16",
                     type: "image/png",
                     href: "/images/melrose-park-sydney-property-000-FAVICON-16.png"
                  },
                  {
                     rel: "canonical",
                     href: this.state.domain
                  }
               ]}
            />

            <Header className={this.state.nav_fixed + " " + this.state.nav_hidden}>
               <Logo to={this.state.lang === "en" ? "/" : "/ch"}>
                  <img src="/svg/melrose-park-sydney-property-001-LOGO.svg" />
               </Logo>

               <Hamburger onClick={this.toggleNav.bind(this)} isOpened={this.state.nav_open} />

               {/* Register Now button language switch */}
               {this.state.lang === "en" ? (
                  <Button button="Register Now" href="/register" float={true} />
               ) : (
                  <Button button="立刻登记" href="/ch/register" float={true} />
               )}

               <Nav
                  toggleNav={this.toggleNav.bind(this)}
                  nav_open={this.state.nav_open}
                  links_hide={this.state.links_hide}
                  onClick={this.toggleNav.bind(this)}
                  lang={this.state.lang}
               />
            </Header>

            <Main>
               {this.props.children({
                  ...this.props,
                  ...this.state,
                  updateMeta
               })}
            </Main>

            <Footer lang={this.state.lang} />

            {this.state.loading == true && <Splash shown={this.state.loadingOver} />}
         </div>
      )
   }
}

TemplateWrapper.propTypes = {
   children: PropTypes.func
}

export default TemplateWrapper
