import React from "react"
import styled, {keyframes} from "styled-components"

import * as vars from "../style/vars";
import {above, below} from "../style/functions"
import { H1, H4, P } from "./Text"

class Transport extends React.Component {
  render() {
    return (
			<Container>
		<img src="/svg/melrose-park-sydney-property-009-MAP.svg" />
		</Container>

    )
  }

}

const Container = styled.div`
	padding-top: 4rem;
`;
export default Transport;

