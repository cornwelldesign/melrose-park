import React from 'react'
import Hero from '../components/Hero.js'
import FocusImg from '../components/FocusImg.js'
import styled, { keyframes } from "styled-components"
import FocusTxt from '../components/FocusTxt.js'
import MultiGroup from '../components/MultiGroup.js'
import renderHTML from 'react-render-html'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { LargeP, P, H4, H3 } from '../components/Text.js'
import bus from '../../static/images/MelroseParkBusTimetable.jpg'

class BusTimetable extends React.Component {
	componentDidMount() {
		this.props.updateMeta('Bus Timetable ', '');
	}
   render() {
      // const wp = this.props.data.wordpressPage.acf
      return (
         <BusWrapper>
         <H3>Melrose Park Community Shuttle Timetable</H3>
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

