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
import renderHTML from "react-render-html"
import Parser from 'html-react-parser';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ScriptTag from 'react-script-tag';


const Main = styled.main`
   padding-top: 4.5rem;
   position: relative;
	 min-height: calc(100vh - 58px);

	 
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
				 seo_meta: renderHTML(`<title>Melrose Park | The New Heart of Sydney | Apartments for Sale Sydney | Off Plan Apartments Sydney</title>	
				 <meta name="description" content="Melrose Park apartments for sale are available now, off the plan. The Melrose Park residential development is the latest new community from PAYCE, Australia’s premier apartment development company. In line with all PAYCE developments, Melrose Park delivers residential havens surrounded by commercial facilities and green spaces. From owner-occupiers to investment purchases, the off the plan apartments for sale in the new Melrose Park development will impress." />	
				 <meta name="keywords" content="Apartments for sale, off the plan, Sydney apartments, new apartments, display suite Sydney, Melrose park, urban renewal, first home buyers, western Sydney apartments, new development, apartment project, payce, boston marketing" />	
				 <meta http-equiv="Last-Modified" content="2018-06-14T01:06:39+10:00" />`),	
         seo_body: renderHTML(`<div id='semdoc'>	
				 <article itemscope='' itemtype='http://schema.org/NewsArticle' itemprop='mainEntityOfPage' >	
					 <section id='lead' itemprop='about'>	
						 <h1 id='headline'  itemprop='headline'>	
		 Off the Plan Apartments for sale in Sydney are now available for the Melrose Park Development</h1>	
						 <ul><li id='editorial'>	
							 <time id='dateline' itemprop='dateModified' datetime='2018-06-14' >14 June, 2018.</time>	
							 <div id='byline'  itemprop='author'>Melrose Park – Prestige Sydney Apartment Developers, PAYCE Consolidated Pty Limited</div></li>	
							 <li id='publishing-meta' style='display: none; '>	
							 <div itemprop='publisher'>Melrose Park Apartments by PAYCE Consolidated</div>	
							 <div itemprop='datePublished'>2018-06-12</div>	
			 </li>	
							 </ul>	
						 <h2 id='subheading'  itemprop='alternativeHeadline'>Melrose Park is set to become one of Sydney’s most vibrant living precincts through the PAYCE masterplan which encompasses all aspects of lifestyle and connectivity. The first stage of apartments for sale have been released to the market and client inquiry is ever-growing.</h2>	
						 <p id='leadline'  itemprop='description'><strong>The quality of the Melrose Park apartments for sale can be described as exceptional in the Sydney marketplace. As with all PAYCE apartments development projects, Melrose Park will re-define apartment living through clever design, connectivity and a perfect balance of green spaces.</strong></p>	
						 <p id='leadline_minor'>PAYCE Consolidated - invite owner-occupier and investment purchasers to make contact and learn more about the exceptional opportunities attached to this exciting apartment development project in Sydney’s west.</p>	
		 <p>Coupled with the world-leading apartment design aspects of the project, Melrose Park will feature a fully integrated shopping precinct where all manner of retail goods is available. Melrose Park is set to become highly sought city environment with enviable levels of lifestyle, connectivity and open spaces. We invite owner-occupiers and investors alike to view the Melrose Park apartments for sale.</p>	
					 </section><!--end: lead -->	
					 <hr width='90%' color='#000000' size='1' noshade='noshade' />	
					 <section id='arguments' itemprop='articleBody'>	
						 <h3>Sydney Apartment Developments – Melrose Park Off the Plan Apartments</h3>	
						 <p>Welcome to Melrose Park, PAYCE Consolidated’s newest community offering luxurious off the plan apartments. Situated in a prime and highly sought-after area of Western Sydney, the Melrose Park master plan aims to provide stunning residential accommodations to perfectly match the needs of young professionals, growing families, and recent retirees with residences, retail space, and parkland areas. </p>	
		 <p>Leaders in the design and creation of new apartment developments, PAYCE has long been associated with luxury, practicality, and modern living, and these factors can all be seen throughout the new Melrose Park apartments for sale. Whether you’re looking for investment apartments off the plan, or first home buyer new apartments in Sydney to get a foot on the property ladder, Melrose Park has it all.	
		 </p>	
						 <h3>Melrose Park Apartments</h3>	
						 <p>If you’re looking for first home buyer new apartments in Western Sydney, consider Melrose Park. All off the plan apartments for sale within this new PAYCE suburb make it easy to enjoy modern city life, while still helping you to feel connected to nature. Offering a strong, welcoming community feel, luxurious studio, 1, 2, or 3 bedroom apartments, and exciting retail spaces, Melrose Park really does have it all.</p>	
						 <h3>New Apartments for Sale in Sydney – Melrose Park Apartments for Sale can be Viewed Now </h3>	
						 <p>Are you looking for a new investment opportunity to grow your portfolio? Or are you looking to buy your first property? Ideal for both investors and first home buyers, off the plan apartments in Western Sydney can be viewed at the local Boston Marketing offices. In-house display suites showcasing the typical layout and design features of the Melrose Park off the plan apartments in Sydney can’t be missed. </p>	
		 <p>Situated within the Boston Marketing office complex — part of the PAYCE group —these full display suites can be hugely beneficial in helping you to envision modern living at Melrose Park, or help you to envision your investment on a deeper level. Viewing the Melrose Park in-house display suites is the perfect opportunity to experience the feel of the community, and the luxury of the residences.	
		 </p>	
						 <h3>Modern Living at Melrose Park </h3>	
						 <p>All Melrose Park off the plan apartments are designed to perfectly facilitate modern living and form a beacon of contemporary, urban lifestyle. As with all of PAYCE’s new apartment developments in Sydney, the living standards of Melrose Park residents are the highest priority, and this ethic can be seen throughout not only the accommodations, but across every single aspect of the Melrose Park suburb. </p>	
		 <p>While every PAYCE community is different, they all have one thing in common: each of the new apartment developments in Western Sydney works to combine the beauty and serenity of the surrounding natural environment with modern technology and conveniences. And that’s exactly what you’ll find at Melrose Park; a quiet living environment with easy access to transport, shops, and the city.	
		 </p>	
					 </section><!--end: arguments -->	
				 <hr width='90%' color='#000000' size='1' noshade='noshade' />	
				 </article><!--end: article -->	
			 </div><!--end:semdoc-->`),	
         seo_code_block: true,	
         seo_footer: renderHTML(`<div id="sem-footer-link" style="display: inline; "><a style="font-size: 8pt;" onclick="Obvt(650,400);" href="javascript:void(0); ">sem</a></div>`),
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
      
      // switch language
      if (event.target.lang === "ch") {
        this.setState({ lang: "ch" })
      } else if (event.target.lang === "en") {
        this.setState({ lang: "en" })
      } else {
        // hamburger menu toggle navigation open / close
        this.setState({ nav_open })
      }
   }

    updateMeta(title, desc, seo_meta, seo_body, seo_footer, seo_code_block) {	   
			seo_meta = ReactHtmlParser(seo_meta);				
			seo_body = ReactHtmlParser(seo_body);	
			seo_footer = ReactHtmlParser(seo_footer);	
			this.setState({ page_title: title, page_description: desc, seo_meta, seo_body, seo_footer, seo_code_block })	
			console.log(seo_code_block)	
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
												<div>{ this.state.seo_meta}</div> 	
            <Header className={this.state.nav_fixed + " " + this.state.nav_hidden}>
               <Logo to={this.state.lang === "en" ? "/" : "/ch"}>
                  <img src="/svg/melrose-park-sydney-property-001-LOGO.svg" />
               </Logo>

               <Hamburger onClick={this.toggleNav.bind(this)} isOpened={this.state.nav_open} />

               {/* Register Now button language switch */}
               {this.state.lang === "en" ? (
                  <Button button="Register Now" href="/register" float={true} />
               ) : (
                  <Button button="立刻登记" href="/ch/ch-register" float={true} />
               )}

               <Nav
                  toggleNav={this.toggleNav.bind(this)}
                  nav_open={this.state.nav_open}
                  links_hide={this.state.links_hide}
                  onClick={this.toggleNav.bind(this)}
                  lang={this.state.lang}
               />
            </Header>
						<div>{ this.state.seo_body}</div> 

            <Main>
               {this.props.children({
                  ...this.props,
                  ...this.state,
                  updateMeta
               })}
            </Main>


            <Footer lang={this.state.lang} seoFooter={this.state.seo_footer} seoCodeBlock={this.state.seo_code_block} />	
						
            {this.state.loading == true && <Splash shown={this.state.loadingOver} />}
						{this.state.seo_code_block == true && <ScriptTag isHydrating={false}  type="text/javascript" src="http://wp.melrosepark.com.au/wp-content/themes/melrosepark-v2/js/navigation.js" />}

						

         </div>
      )
   }
}

TemplateWrapper.propTypes = {
   children: PropTypes.func
}

export default TemplateWrapper

