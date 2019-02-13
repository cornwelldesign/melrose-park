import React from 'react'
import styled, { keyframes } from 'styled-components'
import { LargeP, P, H1, H2, H4, H3 } from '../../components/Text.js'
import { below } from '../../style/functions'

class BusTimetable extends React.Component {
   render() {
      // const wp = this.props.data.wordpressPage.acf
      return (
         <NewsWrapper>
            <H2>LIBRARY AND COMMUNITY HUB OPENS AT WASHINGTON PARK</H2>
            <CardsWrapper>
             
            </CardsWrapper>
         </NewsWrapper>
      )
   }
}

const NewsWrapper = styled.div`
   width: 68%;
   margin: 7rem auto 0rem;
   font-family: 'Plantin', serif;

   h3 {
      color: #9b9b9b;
   }

   ${below.mid`
      width: 94%;
   `};
`

const CardsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin-top: 4rem;
`



export default BusTimetable
