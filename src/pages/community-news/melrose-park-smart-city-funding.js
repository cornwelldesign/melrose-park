import React from 'react'
import Link from "gatsby-link"
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H1, H2, H4, H3 } from '../../components/Text.js'
import { below } from '../../style/functions'

class BusTimetable extends React.Component {
   componentDidMount() {
		this.props.updateMeta('Melrose Park Smart City Funding | Melrose Park', '')

   }
   
   render() {
		return (
         <NewsWrapper>
            <H2>Melrose Park Smart City Funding</H2>
            <img
               src="/media/03.jpg"
               alt="hero"
               className="hero-image"
            />
            <article>
					
						<p>28 November 2018 – A smart city project will be undertaken at the PAYCE urban renewal project in Melrose Park, after a consortium led by the City of Parramatta secured a $571,000 federal government grant.</p>
<p>The Smart Cities program grant will be used to install environmental sensors at the site to assist developing a “climate responsive neighbourhood”.</p>
<p>City of Parramatta successfully applied for the project grant with the support of PAYCE and the University of Technology, Sydney, ESRI and Urban Institute.</p>
<p>The Melrose Park urban renewal is a 10-year project on a 30-hectare light industrial site, near Parramatta.</p>
<p>When completed, it will include 6000 apartments, a retail centre, parklands and community facilities.</p>
<p>PAYCE Director Dominic Sullivan said that Melrose Park, Sydney’s largest urban renewal site, was an ideal project for a major smart city initiative.</p>
<p>“We congratulate our partners, the City of Parramatta, University of Technology, ESRI and Urban Institute in attracting this funding for what will be a ground-breaking project,” he said.</p>
<p>The project will help inform the design and development of cool, clean, quiet and liveable communities by providing detailed new data and integrating it into urban planning.</p>
<p>A network of environmental sensors will gather data about air quality, heat, humidity, noise and stormwater outflow on and adjacent to the development site during the early stages of the project.</p>
<p>The smart sensing and modelling approaches pioneered by the project will inform smarter approaches to planning and development across Western Sydney and around the country.</p>
<p>Mr Sullivan said the data will be used in the planning and design phases to deliver superior environmental outcomes.</p>
<p>“There are examples around the world of good design assisting in the management of climate extremes, particularly hot days,’’ he said.</p>
<p>“We can use the data to plan to manage those extremes through smart project design, including not only the built form but the landscape.’’</p>
<p>Mr Sullivan said the data would also assist with water management.</p>
<p>“For example, the sight of sprinklers turned on and wasting water when it is raining will be avoided,” he said.</p>
<p>The system will remain in place throughout the construction period and into the functioning life of the community.</p>
<p>Mr Sullivan said that residents and the neighbouring community would also have access to the data to allow them to become actively involved in the project.</p>
<p>“The key to smart city initiatives is using data and technology to make places more liveable for the community,” he said.</p>
<p>The Melrose Park project was one of 32 smart city funded projects announced by the Minister for Cities, Urban Infrastructure and Population Alan Tudge.</p>
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
