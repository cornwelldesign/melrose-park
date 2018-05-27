import React from 'react'
import styled, { keyframes } from 'styled-components'

import * as vars from '../style/vars'
import { above, below } from '../style/functions'
import { H1, H2 } from './Text'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

class ParaTitle extends React.Component {
   scroll() {
      if (typeof window !== `undefined`) {
         let div = document.querySelector('.para')
         let isSmlScrn = window.outerWidth <= 425
         let scroll = window.scrollY

         if (div) {
            let distanceFromTop = div.offsetTop
            let screenHeight = window.innerHeight
            let distanceFromBottom = distanceFromTop + screenHeight

            // if mobile, scroll starting position change
            let track = isSmlScrn ? scroll - distanceFromTop / 1.5 : scroll - distanceFromTop

            // if mobile, track faster
            track = isSmlScrn ? track * 1.3 : track * 0.4

            // if mobile, scroll from right to left
            let goal = isSmlScrn ? distanceFromTop - distanceFromBottom : distanceFromBottom - distanceFromTop

            let style = track / goal * 100
            div.style.transform = `translateX(${style}%)`

            // if mobile, smaller font
            isSmlScrn ? div.style.fontSize = `6rem` : 'inherit'
         }
      } else {
         return false
      }
   }
   componentDidMount() {
      window.addEventListener('scroll', this.scroll)
   }
   render() {
      return (
         <Container>
            <Inner>
               <H1 className="para">{this.props.title}</H1>
            </Inner>
         </Container>
      )
   }
}

const Container = styled.div`
   text-align: center;
   color: ${vars.colors.offBody};
   padding: ${vars.genPadd}rem 0 0 0;
   white-space: pre;
   width: 100%;
   height: 12.5rem;
   overflow: hidden;
`

const Inner = styled.div`
   width: 70vw;
   height: 12.5rem;
   padding-left: 30vw;
   h1 {
		line-height: 1;
   }
`

export default ParaTitle
