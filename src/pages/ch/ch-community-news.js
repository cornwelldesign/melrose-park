import React from 'react'
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H2, H4, H3 } from '../../components/Text.js'
import { below } from '../../style/functions'
import sampleImage from '../../../static/images/melrose-park-sydney-property-008-SUBURB.jpg'
import moment from 'moment'

class BusTimetable extends React.Component {
   componentDidMount() {
      this.props.updateMeta('Community News | Melrose Park', '')
   }

   render() {

			// const wp = this.props.data.wordpressPage.acf
			console.log(this.props.data.allWordpressPost.edges);
			function sortNodes(a, b) {
				return a.node.acf.date - b.node.acf.date;
			 }
			var posts = this.props.data.allWordpressPost.edges;
			posts.sort(function(a,b){
				// Turn your strings into dates, and then subtract them
				// to get a value that is either negative, positive, or zero.
				return b.node.acf.date - a.node.acf.date;
			});
			return (
         <NewsWrapper>
            <H2>媒体及新闻</H2>
            <CardsWrapper>
						{ posts.map((x, i) =>
							<Card>
                  <H4>
                     <a href={`/community-news/${x.node.acf.url}/`}>
										 {x.node.title}
                     </a>
                  </H4>
									<p className="date" >{moment(x.node.acf.date).format('Do MMM YYYY')}</p>
                  <summary>
									Urban renewal project Melrose Park will be one of the first developments in Sydney to meet the new 30-minute connected community concept, PAYCE Director Dominic Sullivan said today.{' '}
                     <a href={`/community-news/${x.node.acf.url}/`}>
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href={`/community-news/${x.node.acf.url}/`}>
                        Read more
                     </a>
                  </p>
                  <img
										src={x.node.acf.image.source_url}
                  />
               </Card>
						)}
               
            </CardsWrapper>
         </NewsWrapper>
      )
   }
}
export const pageQuery = graphql`
   query chPosts {
			allWordpressPost {
				edges {
					node {
						id
						date
						content
						title 
						acf {
							url
							date
							image {
								id
								source_url
							}
						}
					}
				}
			}
	 }
	 `
const NewsWrapper = styled.div`
   width: 68%;
   margin: 6rem auto 0rem;
   font-family: 'Plantin', serif;

   h2 {
      color: #00B398;
      font-size: 6rem;
      margin-bottom: 2rem;
   }

   ${below.mid`
      width: 94%;
      `};
`

const CardsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const Card = styled.div`
   flex: 0 0 23%;
   border: 1px solid #d4d4d4;
   margin: 1% 1% 1% 0;
   font-family: 'Founders Grotesk', sans-serif;
   font-size: 1.5rem;
   padding: 1rem;

   a {
      text-decoration: none;
      color: inherit;
      transition: color 0.3s;
      :hover {
         color: #00B398;
      }
   }

   p.date {
      font-family: 'Plantin', serif;
      color: #00b398;
      padding-bottom: 2rem;
      text-transform: uppercase;
   }

   p.read-more {
      line-height: 3;

      :after {
         transition: all 0.5s ease;
         content: ' →';
      }

      :hover:after {
         color: #00B398;
         padding-left: 1rem;
      }
   }

   ${below.tablet`
      width: 100%;
      flex: 0 0 auto;
   `};
`
export default BusTimetable
