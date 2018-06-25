import React from 'react'
import GoogleMap from '../components/Map'
import { H3, P } from '../components/Text'
import styled, { keyframes } from 'styled-components'
import * as vars from '../style/vars'
import Register from '../components/RegisterForm.js'
import { below } from '../style/functions'
import renderHTML from 'react-render-html'
import Footer from "../components/Footer"



class contactPage extends React.Component {
   componentDidMount() {
      this.props.updateMeta(
         this.props.data.wordpressPage.acf.meta_title,
         this.props.data.wordpressPage.acf.meta_description,
         this.props.data.wordpressPage.acf.seo_meta,
         this.props.data.wordpressPage.acf.seo_body
      )
   }
   render() {
      if (typeof window !== `undefined`) {
         const markers = [
            {
               node: {
                  lat: -33.807813,
                  lng: 151.069761,
                  name: 'Display Suite'
               }
            }
			]
            const wp = this.props.data.wordpressPage.acf
         return (
            <div>
               <ContactTop>
                  <div>
                     <div className="col  col-04 padd ">
                        <H3>{wp.header_1}</H3>
                        <P>
                           <span className="green">{wp.sub_header_1} </span>
                           <br />
                           <a href="" target="_blank" title="Map">
										{renderHTML(wp.text_1)}
                           </a>
                           <br />
                           <br />
                           <span className="green">{wp.sub_header_2}</span> <br />
										{renderHTML(wp.text_2)}
                           <br />
                           <br />
                           <span className="green">{wp.sub_header_3}</span> <br />
									{renderHTML(wp.text_3)}

                        </P>
                     </div>

                     <div className="col  col-08 ">
                        <GoogleMap markers={markers} />
                     </div>
                  </div>
               </ContactTop>
               <ContactBtm>
                  <div className="col  col-04 padd ">
                     <H3>{wp.header_2}</H3>
                  </div>
                  <div className="col  col-08 padd ">
                     <P>{renderHTML(wp.header_2_sub_text)}</P>
                     <Iframe
                        src="https://go.pardot.com/l/472112/2018-04-19/61bsk"
                        width="100%"
                        height="500"
                        type="text/html"
                        allowTransparency="true"
                     />
                  </div>
               </ContactBtm>
               <Footer seoFooter={wp.seo_footer} seoCodeBlock={wp.seo_code_block}/>
            </div>
         )
      } else {
         return <p>Build</p>
      }
   }
}

const ContactTop = styled.div`
   .col {
      vertical-align: top;
      &.padd {
         padding-top: 6rem;
      }
   }
   h3 {
      color: ${vars.colors.offBody};
      padding-bottom: 4rem;
   }
`
const ContactBtm = styled(ContactTop)`
   background: ${vars.colors.offBlank};
   min-height: 60rem;
   div {
      align-items: left;
   }
`
const Iframe = styled.iframe`
   border: none;
   height: 300px;
   ${below.mid`
		height:500px;
	`};
`

export default contactPage

export const pageQuery = graphql`
   query Contact($slug: String) {
      wordpressPage(slug: { eq: $slug }) {
         id
         slug
         template
         parent_element {
            id
            slug
         }
         acf {
            hero_image {
               source_url
            }
            image_2 {
               source_url
            }
            image_3 {
               source_url
            }
            image_4 {
               source_url
            }
            image_5 {
               source_url
            }
            image_6 {
               source_url
            }
            image_7 {
               source_url
            }
            image_8 {
               source_url
            }
            side_image {
               source_url
            }
            slide_2_image {
               source_url
            }
            slide_3_image {
               source_url
            }
            slide_4_image {
               source_url
            }
            slide_5_image {
               source_url
            }
            slide_6_image {
               source_url
            }
            meta_title
            meta_description
            seo_meta
            seo_body
            seo_footer
            seo_code_block
            headline_1
            paragraph_1
            sub_title_1
            moving_text
            headline_2
            paragraph_2
            sub_title_2
            side_text
            header_1
            sub_header_1
            text_1
            sub_header_2
            text_2
            sub_header_3
            text_3
            header_2
            header_2_sub_text
            hero_text
            header
            main_paragraph
            sub_paragraph
            header_3
            paragraph_3
            header_4
            paragraph_4
            header_5
            paragraph_5
            header_6
            sub_title
            paragraph
            team_header
            team_1_name
            team_1_description
            team_2_name
            team_2_description
            team_3_name
            team_3_description
            slide_2_main_text
            slide_2_paragraph
            slide_2_link_text
            slide_3_main_text
            slide_3_paragraph
            slide_3_link_text
            slide_4_main_text
            slide_4_paragraph
            slide_4_link_text
            slide_5_main_text
            slide_5_paragraph
            slide_5_link_text
            slide_6_main_text
            slide_6_paragraph
            slide_6_link_text
            wordpress_
         }
      }

      allWordpressPage {
         edges {
            node {
               slug
               title
               id
            }
         }
      }
   }
`
