import React from 'react'
import Link from "gatsby-link"
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H1, H2, H4, H3 } from '../components/Text.js'
import { below } from '../style/functions'
import renderHTML from 'react-render-html'
import moment from 'moment'

class BusTimetable extends React.Component {
   componentDidMount() {
		this.props.updateMeta('30-minute connected community concept | Melrose Park', '')

   }
   
   render() {
		 console.log(this.props.data);
		const wp = this.props.data.wordpressPost
		return (
         <NewsWrapper>
            <H2>{wp.title}</H2>
            <img
               src={wp.acf.image.source_url}
               alt="hero"
               className="hero-image"
            />
            <article>
						<span className="date" >{moment(wp.acf.date).format('Do MMM YYYY')} – </span>{renderHTML(wp.content)}
            </article>

            <Link to='/community-news' className="back">
            ← Return to Community News
            </Link>
            
         </NewsWrapper>
      )
   }
}

const NewsWrapper = styled.div`
   width: 68%;
   margin: 7rem auto 0rem;
   font-family: 'Plantin', serif;

   h2 {
      color: #00B398;
      font-size: 6rem;
   }
   img.hero-image {
      margin: 4rem 0;
   }
   h3 {
      color: #9b9b9b;
   }

	 .date{
		 float: left;
		 line-height:01.2;
	 }
   ${below.mid`
      width: 94%;
      `};

   article  {
      font-family: 'Founders Grotesk', sans-serif;
      font-size: 2rem;

      p, ul {
         line-height: 1.2;
         padding-bottom: 1rem;
      }

      li {
         list-style: inside;
      }
   }

   .back {
      display: block;
      margin: 3rem 0 1rem;
      color: inherit;
      font-size: 1.8rem;
      font-family: 'Founders Grotesk', sans-serif;
      transition: color .3s;
      :hover {
         color: #9b9b9b;
      }
	 }
	 
`
export const pageQuery = graphql`
   query Post($slug: String) {
      wordpressPost(slug: { eq: $slug }) {

							id
							date
							content
							title 
							acf {
								date
								image {
									id
									source_url
								}
							}
						}

		}
`

export default BusTimetable