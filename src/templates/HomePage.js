import React from 'react'
import Hero from '../components/Hero.js'
import FocusImg from '../components/FocusImg.js'
import FocusTxt from '../components/FocusTxt.js'
import MultiGroup from '../components/MultiGroup.js'

class HomePage extends React.Component {
   componentDidMount() {
      this.props.updateMeta(
         'Melrose Park | The New Heart of Sydney ',
         'The pulse of your new neighbourhood, Melrose Park Residences will have everything you could need for the life you want to live. Located only 8km from Parramatta and 17km from Sydney CBD, Melrose Park one of Sydney’s most connected places.'
      )
   }

   render() {
      if (typeof window !== `undefined`) {
         if (window.innerWidth < 640) {
            return (
               <div>
                  <Hero
                     image="/images/melrose-park-sydney-property-001-GARDENS.jpg"
                     alt="Melrose Park Property, Sydney - Outside Gardens (Artists Impression)"
                     title={`The New Heart
						of Sydney`}
                     half="left"
                  />
                  <FocusImg
                     link="/lifestyle/"
                     image="/images/melrose-park-sydney-property-002-RESIDENT.jpg"
                     title={`Somewhere 
		to Call 
		My Own`}
                     alt="Melrose Park Property, Sydney - First Time Buyer Resident"
                     button="Explore the Lifestyle"
                  />
                  <FocusTxt
                     link="/lifestyle/"
                     text={`The pulse of your new neighbourhood, 
								Melrose Park Residences 
								will have everything you 
								could need for the 
								life you want to live.`}
                     button="Explore the Lifestyle"
                  />
                  <FocusImg
                     link="/location/"
                     title="My World 
								Connected &#10; Like 
								Never Before"
                     image="/images/melrose-park-sydney-property-003-RESIDENTS.jpg"
                     alt="Melrose Park Property, Sydney - Young Couple Residents"
                  />
                  <FocusTxt
                     link="/location/"
                     text={`Located only 7km from 
								Parramatta CBD and 17km from 
								Sydney CBD, Melrose Park 
								one of Sydney’s most 
								connected places. `}
                     button="Explore the Location"
                  />
                  <FocusImg
                     link="/green-space/"
                     image="/images/melrose-park-sydney-property-004-RESIDENTS.jpg"
                     alt="Melrose Park Property, Sydney - Young Family Residents"
                     title={`People I Love, 
								In a Place 
								We Love.`}
                  />
                  <FocusTxt
                     link="/green-space/"
                     text={`There are vast open 
								spaces for kids to be kids, 
								and parks to explore or 
								relax in. It is like having your 
								own backyard. `}
                     button="Explore the Green Space"
                  />
                  <FocusImg
                     link="/smart-city/"
                     title={`My Life
								Made Simply
								Wonderful`}
                     image="/images/melrose-park-sydney-property-005-RESIDENT.jpg"
                     alt="Melrose Park Property, Sydney - Downsizer Residents"
                     button="Explore the Smart City"
                  />
                  <FocusTxt
                     link="/smart-city/"
                     text={`With the future in mind, 
								Smart City technology is designed
								to enrich your lifestyle.`}
                     button="Explore the  Smart City"
                  />
                  <FocusImg
                     link="/residences/"
                     image="/images/melrose-park-sydney-property-006-BUILDING.jpg"
                     title={`Melrose 
								Residences`}
                     alt="Melrose Park Property, Sydney - Outside View of Building (Artists Impression)"
                     button="Explore the Lifestyle"
                  />
                  <FocusTxt
                     link="/residences/"
                     text={`More space to live, love and grow. 
								Studio, 1, 2 and 3-bedroom residences 
								launching soon.`}
                     button="Explore the Lifestyle"
                  />
               </div>
            )
         } else {
            return (
               <MultiGroup animTime={1.5} paddingTop="4rem">
                  <multiScroll>
                     <leftSide>
                                <Hero
                           image="/images/melrose-park-sydney-property-001-GARDENS.jpg"
                           alt="Melrose Park Property, Sydney - Outside Gardens (Artists Impression)"
                           title={`The New Heart
						of Sydney`}
                           half="left"
                        />
                     </leftSide>
                     <rightSide>
                                <Hero
                           image="/images/melrose-park-sydney-property-001-GARDENS.jpg"
                           alt="Melrose Park Property, Sydney - Outside Gardens (Artists Impression)"
                           title={`The New Heart
						of Sydney`}
                           half="right"
                        />
                     </rightSide>
                  </multiScroll>
                  <multiScroll>
                     <leftSide>
                        <FocusImg
                           link="/lifestyle/"
                           image="/images/melrose-park-sydney-property-002-RESIDENT.jpg"
                           title={`Somewhere 
		to Call 
		My Own`}
                           alt="Melrose Park Property, Sydney - First Time Buyer Resident"
                           button="Explore the Lifestyle"
                        />
                     </leftSide>
                     <rightSide>
                         <FocusTxt
                           link="/lifestyle/"
                           text={`The pulse of your new neighbourhood, 
								Melrose Park Residences 
								will have everything you 
								could need for the 
								life you want to live.`}
                           button="Explore the Lifestyle"
                        />
                     </rightSide>
                  </multiScroll>
                  <multiScroll>
                     <leftSide>
                        <FocusTxt
                           link="/location/"
                           text={`Located only 7km from 
								Parramatta CBD and 17km from 
								Sydney CBD, Melrose Park 
								one of Sydney’s most 
								connected places. `}
                           button="Explore the Location"
                        />
                     </leftSide>
                     <rightSide>
                        <FocusImg
                           link="/location/"
                           title="My World 
								Connected &#10; Like 
								Never Before"
                           image="/images/melrose-park-sydney-property-003-RESIDENTS.jpg"
                           alt="Melrose Park Property, Sydney - Young Couple Residents"
                        />
                     </rightSide>
                  </multiScroll>

                  <multiScroll>
                     <leftSide>
                         <FocusImg
                           link="/green-space/"
                           image="/images/melrose-park-sydney-property-004-RESIDENTS.jpg"
                           alt="Melrose Park Property, Sydney - Young Family Residents"
                           title={`People I Love, 
								In a Place 
								We Love.`}
                        />
                     </leftSide>
                     <rightSide>
                                  <FocusTxt
                           link="/green-space/"
                           text={`There are vast open 
								spaces for kids to be kids, 
								and parks to explore or 
								relax in. It is like having your 
								own backyard. `}
                           button="Explore the Green Space"
                        />
                     </rightSide>
                  </multiScroll>
                  <multiScroll>
                     <leftSide>
                         <FocusTxt
                           link="/smart-city/"
                           text={`With the future in mind, 
								Smart City technology is designed
								to enrich your lifestyle.`}
                           button="Explore the  Smart City"
                        />
                     </leftSide>
                     <rightSide>
                                  <FocusImg
                           link="/smart-city/"
                           title={`My Life
								Made Simply
								Wonderful`}
                           image="/images/melrose-park-sydney-property-005-RESIDENT.jpg"
                           alt="Melrose Park Property, Sydney - Downsizer Residents"
                           button="Explore the Smart City"
                        />
                     </rightSide>
                  </multiScroll>
                  <multiScroll>
                     <leftSide>
                                  <FocusImg
                           link="/residences/"
                           image="/images/melrose-park-sydney-property-006-BUILDING.jpg"
                           title={`Melrose 
								Residences`}
                           alt="Melrose Park Property, Sydney - Outside View of Building (Artists Impression)"
                           button="Explore the Lifestyle"
                        />
                     </leftSide>
                     <rightSide>
                                  <FocusTxt
                           link="/residences/"
                           text={`More space to live, love and grow. 
								Studio, 1, 2 and 3-bedroom residences 
								launching soon.`}
                           button="Explore the Lifestyle"
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
   query Homepage($slug: String) {
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
            image_1 {
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