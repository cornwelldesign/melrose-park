import React from "react"
import styled, {keyframes} from "styled-components"

import * as vars from "../style/vars";
import {above, below} from "../style/functions"
import { H1, H2 } from "./Text"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';



class ParaTitle extends React.Component {

  render() {
    return (
			<Container>
			<ParallaxProvider >
			    <Parallax
        className="custom-class"
				offsetYMax={0}
        offsetYMin={0}
				offsetXMin={30}
				offsetXMax={-30}
				      tag="div"
    >
				<H1 >{this.props.title}</H1>
    </Parallax>
			</ParallaxProvider>
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
	overflow:hidden;
`;

export default ParaTitle

