import React from 'react'
import styled, { keyframes } from "styled-components"
import { LargeP, P, H4, H3 } from '../../components/Text.js'
import bus from '../../../static/images/MelroseParkBusTimetable.jpg'

class BusTimetable extends React.Component {
   render() {
      // const wp = this.props.data.wordpressPage.acf
      return (
         <BusWrapper>
         <H3>Melrose Park社区穿梭巴士时间表</H3>
         <a href={bus} target="_blank">
            <img src={bus} alt="Bus timetable" />
         </a>
      </BusWrapper>)
   }
}

const BusWrapper = styled.div`
   margin-top: 5rem;
   font-family: "Plantin",serif;

   h3 {
      color: #9B9B9B;
      text-align: center;
   }
`


export default BusTimetable

