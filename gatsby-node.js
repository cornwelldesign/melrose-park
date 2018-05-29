const _ = require(`lodash`)

const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
   const { createPage } = boundActionCreators
   return new Promise((resolve, reject) => {
      // First, query all the pages on your WordPress
      graphql(
         `
         {
          allWordpressPage {
            edges {
              node {
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
                         side_image{
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
                         team_1_url
                         team_1_description
                         team_2_name
                         team_2_url
                         team_2_description
                         team_3_name
                         team_3_url
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
       }
     }
   }
`          
      ).then(result => {
         if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
         }
         _.each(result.data.allWordpressPage.edges, edge => {
            var url
            if (edge.node.parent_element) {
               url = `${edge.node.parent_element.slug}/${edge.node.slug}`               
            } else {
               url = `${edge.node.slug}`
            }
            var template = `./src/templates/${edge.node.template.replace('.php', '')}.js`
            createPage({
               path: `/${url}/`,
               component: slash(
                  path.resolve(
                     template
                  )
               ),
               context: {
                  id: edge.node.id,
                  slug: edge.node.slug,
                  parent_element: edge.node.id
               }
            })
         })
         resolve()
      })
      // === END TAGS ===
   })
}
