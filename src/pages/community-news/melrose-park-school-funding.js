import React from 'react'
import Link from "gatsby-link"
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H1, H2, H4, H3 } from '../../components/Text.js'
import { below } from '../../style/functions'

class BusTimetable extends React.Component {
   componentDidMount() {
		this.props.updateMeta('Melrose Park School Funding | Melrose Park', '')

   }
   
   render() {
		return (
         <NewsWrapper>
            <H2>Melrose Park School Funding</H2>
            <img
               src="/media/02.jpg"
               alt="hero"
               className="hero-image"
            />
            <article>
					
					
						<p>1 December 2018 –&nbsp;PAYCE is assisting Melrose Park Public School deliver a number of much-needed projects under an Infrastructure Support Program partnership, following meetings with the School’s Relieving Principal, Jen Riley.</p>
<p>PAYCE has been a strong supporter of the local school community over the past four years, providing a range of assistance with activities and events, including Seed Harvest Spoon, the annual School Fair and most recently, the Family Fun Day.</p>
<p>Under the Infrastructure Support Program, PAYCE is providing project management services to plan a new out-of-school hours care building and is currently talking to two contractors about costs to construct the facility.</p>
<p>PAYCE Director Dominic Sullivan said the out-of-school hours, multi-purpose building fronting Wharf Road can be used for a range of activities besides its primary purpose.</p>
<p>“”When not required for out-of-school hours care, the school has indicated it intends to make it available for other school activities and community use,” he said.</p>
<p>The 18×12 metre building will have its own kitchen and wet area, as well as a storeroom and a four metre wide verandah for outdoor activities.</p>
<p>Mr Sullivan said the school was thrilled that PAYCE has committed approximately $100,000 to the cost of the building.</p>
<p>“The school has also placed an order for comfortable, contemporary furniture for its future-focused classrooms and innovative learning spaces at a cost of approximately $21,000, which PAYCE has generously offered to pay for,” he said.</p>
<p>A third project – affixing timber skirting around the base of all five demountables – has been completed at a cost of nearly $30,000, which was met in full by PAYCE.</p>
<p>Mr Sullivan said the buildings look more aesthetically presentable and the new skirting means students won’t need to retrieve wayward balls from under the demountables.</p>
<p>“PAYCE is pleased to provide assistance with this important program of works and looks forward to a long and satisfying association with the school and the school community.</p>
<p>“We strongly believe that supporting local community organisations and stakeholders is an essential part of successful and sustainable urban developments,” he said.</p>
	
  
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
