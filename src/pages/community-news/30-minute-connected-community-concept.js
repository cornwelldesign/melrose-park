import React from 'react'
import Link from "gatsby-link"
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H1, H2, H4, H3 } from '../../components/Text.js'
import { below } from '../../style/functions'

class BusTimetable extends React.Component {
   componentDidMount() {
		this.props.updateMeta('30-minute connected community concept | Melrose Park', '')

   }
   
   render() {
		return (
         <NewsWrapper>
            <H2>30-minute connected community concept</H2>
            <img
               src="/media/04.jpg"
               alt="hero"
               className="hero-image"
            />
            <article>
						<p>16 October 2018 – Urban renewal project Melrose Park will be one of the first developments in Sydney to meet the new 30-minute connected community concept, PAYCE Director Dominic Sullivan said today.</p>
<p>Mr Sullivan told the Urban Taskforce Australia Creating Communities Conference that the new development – a 30-hectare site near Parramatta in the heart of Sydney – would set a new standard in community living.</p>
<p>“The context of this urban renewal begins with the challenge laid down by the Greater Sydney Commission,” he said.</p>
<p>“How do we design and create new communities which are 30 minutes connected to work, home, shops and recreational opportunities.”</p>
<p>Mr Sullivan said in designing Melrose Park, PAYCE was focused on how to make a liveable, walkable, connected and productive place to live.</p>
<p>“It is about being able to get there and get away and also get around with ease, convenience, and as much as possible without a car.”</p>
<p>The planned project includes 6000 new apartments including key worker accommodation, 1500 full-time jobs, a new retail town centre, community and childcare facilities and 3.7 hectares of open space and parks.</p>
<p>Melrose Park is one of the largest urban renewal projects in Sydney, located close to strategic employment centres at Sydney Olympic Park and Rhodes, the Rydalmere IT Hub, University of Western Sydney and Parramatta CBD.</p>
<p>“The vision is to make it a hub of transport and travel options,” Mr Sullivan said.</p>
<p>“This will include bus rapid transit, on demand shuttle services to heavy rail and ferry, new convenient and faster ferry services, bicycle use, light rail and connectivity to the planned Western Sydney Metro, car share, bike share and streets that encourage pedestrian activity.”</p>
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
