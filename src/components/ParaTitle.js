import React from "react"
import styled, {keyframes} from "styled-components"

import * as vars from "../style/vars";
import {above, below} from "../style/functions"
import { H1, H2 } from "./Text"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';



class ParaTitle extends React.Component {


	scroll() {
		if (typeof window !== `undefined`) {	
			let div = document.querySelector('.para');
		let scroll = window.scrollY;
		if(div) {

		let top = div.offsetTop; 
		let height = window.innerHeight;
		let btm = top + height;

		let track = scroll - top;
		track = track * 0.4;
		let goal = btm - top;
		let style = (track / goal) * 100;
		div.style.transform = `translateX(${style}%)`;
	}
		} else {
			return false;
		}
	}
	componentDidMount() {
		window.addEventListener("scroll", this.scroll);
	}
  render() {
    return (
			<Container>
			<Inner>
				<H1 className="para" >{this.props.title}</H1>
				</Inner>
</Container>
    )
  }

}

const Container = styled.div`
	text-align:center;
	color: ${vars.colors.offBody};
	padding: ${vars.genPadd}rem 0 0 0;
	white-space: pre;
	width:100%;
	height: 12.5rem;
	overflow:hidden;
`;


const Inner = styled.div`
width: 70vw;
height: 12.5rem;
padding-left: 30vw;
h1{

}
`;


export default ParaTitle

