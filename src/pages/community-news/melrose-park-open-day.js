import React from 'react'
import Link from "gatsby-link"
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H1, H2, H4, H3 } from '../../components/Text.js'
import { below } from '../../style/functions'

class BusTimetable extends React.Component {
   componentDidMount() {
		this.props.updateMeta('Melrose Park Open Day | Melrose Park', '')

   }
   
   render() {
		return (
         <NewsWrapper>
            <H2>Melrose Park Open Day</H2>
            <img
               src="/media/01.jpg"
               alt="hero"
               className="hero-image"
            />
            <article>
						
						<p>7 November 2018 –&nbsp;This year’s Melrose Park Public School Family Fun Day was an outstanding success, with over 3000 people of all ages attending through the afternoon to enjoy the wide range of activities and contribute to the school’s annual fundraiser.</p>
<p>As usual, the funds raised go to important projects that help the popular school meet the demands of a growing community.</p>
<p>PAYCE Director, Dominic Sullivan said PAYCE has been a strong supporter of the school for the past four years and welcomed opportunities such as the Family Fun Day to provide assistance to the school and its hard-working P&amp;C Committee.</p>
<p>He said it was a pleasure to be part of the ‘new-look’ Family Fun Day that had something for everyone and most importantly, raised much-needed funds for the school.</p>
<p>“The organising committee did a brilliant job of mixing some of the more popular activities that have proven successful in past years with new attractions to give the event a real carnival atmosphere,” he said.</p>
<p>For this year’s event, PAYCE was the major sponsor and, along with a number of like-minded sponsors, provided financial support and donations to the organising committee.</p>
<p>The PAYCE Foundation arranged for the KickStart Café to be present to sell coffees and snacks and to build awareness of the social enterprise’s goals.</p>
<p>The formal proceedings for the day got underway with the traditional Welcome to Country by Oliver Davis, followed by the National Anthem sung by Ros Warnes.</p>
<p>There were speeches and words of congratulations from dignitaries, including John Alexander, Federal Member for Bennelong; Dr Geoff Lee, State Member for Parramatta; Victor Dominello, State Member for Ryde; and Cr Andrew Wilson, City of Parramatta Lord Mayor.</p>
<p>The organisers put together a big day of activities, starting with Melrose Park’s first bake-off, including categories for cake decorating and best in show.</p>
<p>A great variety of food stalls ensured no-one went hungry, with gourmet products and tempting homemade treats on offer.</p>
<p>It wasn’t long before the grounds were alive to sound and colour with the school band’s recitals marking the start of non-stop group and solo music and dance performances.</p>
<p>They included the Dance Hub, the Cox Academy of Irish Dancers, a martial arts demonstration, gymnastic performances by the PCYC Piranhas and solo performances by very talented young dancers from Vibz.</p>
<p>Other attractions included a climbing wall, face painting, a wandering clown with a bag of tricks, the dunk tank and even a roller-coaster ride and inflatable maze.</p>
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


export default BusTimetable
