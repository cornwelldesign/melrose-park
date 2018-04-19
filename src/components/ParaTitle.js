import React from "react"
import styled, {keyframes} from "styled-components"

import * as vars from "../style/vars";
import {above, below} from "../style/functions"
import { H1, H2 } from "./Text"

class ParaTitle extends React.Component {
  render() {
    return (
			<Container >
				<H1>{this.props.title}</H1>
			</Container>
    )
  }

}

const Container = styled.div`
	text-align:center;
	color: ${vars.colors.offBody};
	padding: ${vars.genPadd}rem 0 0 0;
	white-space: pre;
`;

export default ParaTitle

