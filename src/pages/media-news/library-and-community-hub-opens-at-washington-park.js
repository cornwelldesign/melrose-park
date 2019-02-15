import React from 'react'
import Link from "gatsby-link"
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H1, H2, H4, H3 } from '../../components/Text.js'
import { below } from '../../style/functions'
import sampleImage from '../../../static/images/melrose-park-sydney-property-008-SUBURB.jpg'

class BusTimetable extends React.Component {
   componentDidMount() {
      this.props.updateMeta(
	 )
   }
   
   render() {
      // const wp = this.props.data.wordpressPage.acf
      return (
         <NewsWrapper>
            <H2>LIBRARY AND COMMUNITY HUB OPENS AT WASHINGTON PARK</H2>
            <img
               src={sampleImage}
               alt="hero"
               className="hero-image"
            />
            <article>
               <p>
                  12 December 2018 –&nbsp;Local residents joined special guests to
                  celebrate the official opening of the new Riverwood Library and
                  Community Hub at Washington Park.
               </p>
               <p>
                  The new library and community hub are located in one of the last
                  residential buildings to be completed as part of the highly successful
                  public-private partnership project between PAYCE and the State
                  Government.
               </p>
               <p>
                  The community facility was opened by Canterbury Bankstown Mayor, Cr Khal
                  Asfour and local resident, Betty Orton, the oldest library card holder
                  in Riverwood, who cut a ribbon to signify the new library was ready to
                  welcome current and new members.
               </p>
               <p>The new facility boasts a range of features, including:</p>
               <ul>
                  <li>an audio visual system and hearing loops</li>
                  <li>multiple computers in a dedicated technology space</li>
                  <li>flexible function rooms equipped with a kitchen</li>
                  <li>conference rooms with smart screens, and</li>
                  <li>a dedicated children’s activities area.</li>
               </ul>
               <p>
                  Following a smoking ceremony conducted by Uncle Matt Doyle and the
                  official opening, everyone was invited to tour the new facilities and
                  join in various activities that included demonstrations of library
                  services, author talks, children’s reading and craft activities.
                  Entertainment included live music, a local dance troupe and young
                  performers.
               </p>
               <p>
                  Outside the library, the Kick Start Café provided catering for morning
                  tea and volunteers from the local residents’ organisation, ROAR, cooked
                  a sausage sizzle, while a jumping castle and tea cup rides kept the
                  young ones entertained.
               </p>
               <p>
                  Mayor Asfour thanked PAYCE for the important part it played in making
                  the new library and community hub a reality and for creating an
                  opportunity for young generations in the Riverwood community.
               </p>
               <p>
                  PAYCE Director, Dominic Sullivan said Riverwood is now home to one of
                  the best equipped community libraries and facilities to be found
                  anywhere in the country.
               </p>
               <p>
                  “The new facilities cap off what continues to be a wonderful and highly
                  successful partnership between a number of community organisations and
                  groups in Riverwood,” he said.
               </p>
               <p>
                  “Washington Park has been the catalyst for the creation of a vibrant,
                  inclusive community that continues to grow.
               </p>
               <p>
                  “This new library and social hub will play an integral and important
                  role in the lives of the community as a place to learn, socialise and
                  grow.”
               </p>
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
