import React from 'react'
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H4, H3 } from '../components/Text.js'
import { below } from '../style/functions'
import bus from '../../static/images/MP-BUS-TIMETABLE-V4.jpg'

class BusTimetable extends React.Component {
	componentDidMount() {
		this.props.updateMeta('Bus Timetable ', '');
	}
   render() {
      // const wp = this.props.data.wordpressPage.acf
      return (
         <BusWrapper>
            <Blurb>
               <H3>Melrose Park Community Shuttle Timetable</H3>
               <p>
                  <em>
                  PAYCE are excited to announce the launch of the new FREE Melrose Park
                  Community Shuttle Bus.

                  </em>
               </p>
               <p>
                  While the first apartments at the Melrose Park development site are not
                  due for completion until next year, PAYCE is launching the service early
                  to provide a new transport link for the community. Running as a round
                  trip from Wharf Road to Meadowbank Station, this <em>free</em> hop-on, hop-off
                  shuttle will stop at seven key points along its route and provide an
                  integral transport link for Melrose Park residents. The shuttle is now
                  in full operation and available for use by all members of the public.
               </p>
            </Blurb>

            <a href={bus} target="_blank">
               <img src={bus} alt="Bus timetable" />
            </a>
         </BusWrapper>
      )
   }
}

const BusWrapper = styled.div`
   margin-top: 5rem;
   font-family: 'Plantin', serif;
`

const Blurb = styled.div`
   width: 65%;
   margin: 6rem auto 3rem;
   text-align: center;

   h3 {
      color: #00b398;
      margin-bottom: 2rem;
   }

   p {
      font-family: 'Founders Grotesk', sans-serif;
      font-size: 1.8rem;
      padding-bottom: 1rem;
   }

   em {
      font-weight: bold;
   }

   ${below.mobile`
      width: 92%;
   `}
`

export default BusTimetable
