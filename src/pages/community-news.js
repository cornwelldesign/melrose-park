import React from 'react'
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H2, H4, H3 } from '../components/Text.js'
import { below } from '../style/functions'
import sampleImage from '../../static/images/melrose-park-sydney-property-008-SUBURB.jpg'

class BusTimetable extends React.Component {
   componentDidMount() {
      this.props.updateMeta('Community News | Melrose Park', '')
   }

   render() {
      // const wp = this.props.data.wordpressPage.acf
      return (
         <NewsWrapper>
            <H2>Community News</H2>
            <CardsWrapper>
               <Card>
                  <H4>
                     <a href="/community-news/30-minute-connected-community-concept/">
										 30-minute connected community concept
                     </a>
                  </H4>
                  <p className="date">16 October 2018</p>
                  <summary>
									Urban renewal project Melrose Park will be one of the first developments in Sydney to meet the new 30-minute connected community concept, PAYCE Director Dominic Sullivan said today.{' '}
                     <a href="/community-news/30-minute-connected-community-concept/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/community-news/30-minute-connected-community-concept/">
                        Read more
                     </a>
                  </p>
                  <img
										src="/media/04.jpg"
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
							 <Card>
                  <H4>
                     <a href="/community-news/melrose-park-open-day/">
										 Melrose Park Open Day
                     </a>
                  </H4>
                  <p className="date">7 November 2018</p>
                  <summary>
									This year’s Melrose Park Public School Family Fun Day was an outstanding success, with over 3000 people of all ages attending through the afternoon to enjoy the wide range of activities and contribute to the school’s annual fundraiser.{' '}
                     <a href="/community-news/melrose-park-open-day/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/community-news/melrose-park-open-day/">
                        Read more
                     </a>
                  </p>
                  <img
										src="/media/01.jpg"
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
							 <Card>
                  <H4>
                     <a href="/community-news/melrose-park-school-funding/">
										 Melrose Park School Funding
                     </a>
                  </H4>
                  <p className="date">1 December 2018</p>
                  <summary>
									PAYCE is assisting Melrose Park Public School deliver a number of much-needed projects under an Infrastructure Support Program partnership, following meetings with the School’s Relieving Principal, Jen Riley.{' '}
                     <a href="/community-news/melrose-park-school-funding/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/community-news/melrose-park-school-funding/">
                        Read more
                     </a>
                  </p>
                  <img
										src="/media/02.jpg"
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card>
							 <Card>
                  <H4>
                     <a href="/community-news/melrose-park-smart-city-funding/">
										 Melrose Park Smart City Funding
                     </a>
                  </H4>
                  <p className="date">28 November 2018</p>
                  <summary>
									A smart city project will be undertaken at the PAYCE urban renewal project in Melrose Park, after a consortium led by the City of Parramatta secured a $571,000 federal government grant.{' '}
                     <a href="/community-news/melrose-park-smart-city-funding/">
                        ...
                     </a>
                  </summary>
                  <p className="read-more">
                     <a href="/community-news/melrose-park-smart-city-funding/">
                        Read more
                     </a>
                  </p>
                  <img
										src="/media/03.jpg"
                     alt="Library and community hub opens at Washington Park"
                  />
               </Card> 
            </CardsWrapper>
         </NewsWrapper>
      )
   }
}

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
