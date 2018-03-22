import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, {
	injectGlobal
} from "styled-components"

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

     

                    {this
              .props
              .children()}

	</div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
