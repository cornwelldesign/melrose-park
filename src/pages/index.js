import React from 'react'
import Hero from '../components/Hero.js'
import FocusImg from '../components/FocusImg.js'
import FocusTxt from '../components/FocusTxt.js'
import MultiGroup from '../components/MultiGroup.js'
import renderHTML from 'react-render-html'

class HomePage extends React.Component {
   componentDidMount() {
      this.props.updateMeta(
         this.props.data.wordpressPage.acf.meta_title,
         this.props.data.wordpressPage.acf.meta_description
      )
   }

   render() {
      const wp = this.props.data.wordpressPage.acf

      if (typeof window !== `undefined`) {
         if (window.innerWidth < 640) {
            return (
               <div>
                  <Hero
                     image={wp.hero_image.source_url}
                     alt="Melrose Park Property, Sydney - Outside Gardens (Artists Impression)"
                     title={wp.hero_text}
                     half="left"
                  />
                  <FocusImg
                     link="/lifestyle/"
                     image={wp.slide_2_image.source_url}
                     title={wp.slide_2_main_text}
                     alt="Melrose Park Property, Sydney - First Time Buyer Resident"
                     button={wp.slide_2_link_text}
                  />
                  <FocusTxt
                     link="/lifestyle/"
                     text={renderHTML(wp.slide_2_paragraph) }
                     button={wp.slide_2_link_text}
                  />
                  <FocusImg
                     link="/location/"
                     title={wp.slide_3_main_text}
                     image={wp.slide_3_image.source_url}
                     alt="Melrose Park Property, Sydney - Young Couple Residents"
                  />
                  <FocusTxt
                     link="/location/"
                     text={renderHTML(wp.slide_3_paragraph) }
                     button={wp.slide_3_link_text}
                  />
                  <FocusImg
                     link="/green-space/"
                     image={wp.slide_4_image.source_url}
                     alt="Melrose Park Property, Sydney - Young Family Residents"
                     title={wp.slide_4_main_text}
                  />
                  <FocusTxt
                     link="/green-space/"
                     text={renderHTML(wp.slide_4_paragraph) }
                     button={wp.slide_4_link_text}
                  />
                  <FocusImg
                     link="/smart-city/"
                     title={wp.slide_5_main_text}
                     image={wp.slide_5_image.source_url}
                     alt="Melrose Park Property, Sydney - Downsizer Residents"
                     button="Explore the Smart City"
                  />
                  <FocusTxt
                     link="/smart-city/"
                     text={renderHTML(wp.slide_5_paragraph) }
                     button={wp.slide_5_link_text}
                  />
                  <FocusImg
                     link="/residences/"
                     image={wp.slide_6_image.source_url}
                     title={wp.slide_6_main_text}
                     alt="Melrose Park Property, Sydney - Outside View of Building (Artists Impression)"
                     button={wp.slide_2_link_text}
                  />
                  <FocusTxt
                     link="/residences/"
                     text={renderHTML(wp.slide_6_paragraph) }
                     button={wp.slide_2_link_text}
                  />
               </div>
            )
         } else {
            return (
            
               <MultiGroup animTime={1.5} paddingTop="4rem">
                  <multiScroll>
                     <leftSide>
                                <Hero
                           image={wp.hero_image.source_url}
                           alt="Melrose Park Property, Sydney - Outside Gardens (Artists Impression)"
                           title={wp.hero_text}
                           half="left"
                        />
                     </leftSide>
                     <rightSide>
                                <Hero
                           image={wp.hero_image.source_url}
                           alt="Melrose Park Property, Sydney - Outside Gardens (Artists Impression)"
                           title={wp.hero_text}
                           half="right"
                        />
                     </rightSide>
                  </multiScroll>
                  <multiScroll>
                     <leftSide>
                        <FocusImg
                           link="/lifestyle/"
                           image={wp.slide_2_image.source_url}
                           title={wp.slide_2_main_text}
                           alt="Melrose Park Property, Sydney - First Time Buyer Resident"
                           button={wp.slide_2_link_text}
                        />
                     </leftSide>
                     <rightSide>
                         <FocusTxt
                           link="/lifestyle/"
                           text={renderHTML(wp.slide_2_paragraph) }
                           button={wp.slide_2_link_text}
                        />
                     </rightSide>
                  </multiScroll>
                  <multiScroll>
                     <leftSide>
                        <FocusTxt
                           link="/location/"
                     text={renderHTML(wp.slide_3_paragraph) }
                           button={wp.slide_3_link_text}
                        />
                     </leftSide>
                     <rightSide>
                        <FocusImg
                           link="/location/"
                           title={wp.slide_3_main_text}
                           image={wp.slide_3_image.source_url}
                           alt="Melrose Park Property, Sydney - Young Couple Residents"
                        />
                     </rightSide>
                  </multiScroll>

                  <multiScroll>
                     <leftSide>
                         <FocusImg
                           link="/green-space/"
                           image={wp.slide_4_image.source_url}
                           alt="Melrose Park Property, Sydney - Young Family Residents"
                           title={wp.slide_4_main_text}
                        />
                     </leftSide>
                     <rightSide>
                                  <FocusTxt
                           link="/green-space/"
                           text={renderHTML(wp.slide_4_paragraph) }
                           button={wp.slide_4_link_text}
                        />
                     </rightSide>
                  </multiScroll>
                  <multiScroll>
                     <leftSide>
                         <FocusTxt
                           link="/smart-city/"
                           text={renderHTML(wp.slide_5_paragraph) }
                           button={wp.slide_5_link_text}
                        />
                     </leftSide>
                     <rightSide>
                                  <FocusImg
                           link="/smart-city/"
                           title={wp.slide_5_main_text}
                           image={wp.slide_5_image.source_url}
                           alt="Melrose Park Property, Sydney - Downsizer Residents"
                           button="Explore the Smart City"
                        />
                     </rightSide>
                  </multiScroll>
                  <multiScroll>
                     <leftSide>
                                  <FocusImg
                           link="/residences/"
                           image={wp.slide_6_image.source_url}
                           title={wp.slide_6_main_text}
                           alt="Melrose Park Property, Sydney - Outside View of Building (Artists Impression)"
                           button={wp.slide_2_link_text}
                        />
                     </leftSide>
                     <rightSide>
                                  <FocusTxt
                           link="/residences/"
                           text={renderHTML(wp.slide_6_paragraph) }
                           button={wp.slide_2_link_text}
                        />
                     </rightSide>
                  </multiScroll>
               </MultiGroup>
            )

         }
      } else {
         return <div>build</div>
      }
   }
}

export default HomePage

export const pageQuery = graphql`
   query Index {
      wordpressPage(slug: { eq: "homepage-en" }) {
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
