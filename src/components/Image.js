import React from "react"
import styled, {keyframes} from "styled-components"

import * as vars from "../style/vars";
import {above, below} from "../style/functions"

class Image extends React.Component {
  render() {
    return (
				<Img src={this.props.src} alth={this.props.alt} draggable={false} />
    )
  }

}

const Img = styled.img`
	margin: ${vars.genPadd}rem 0;
`;

export default Image

