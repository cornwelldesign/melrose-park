import React from "react";
import GoogleMap from "../../components/Map"
import styled, { keyframes } from "styled-components";
import * as vars from "../../style/vars";
import Image from "../../components/Image.js";
import Register from "../../components/RegisterForm.js";
import { H3, P } from "../../components/Text"
import {below} from "../../style/functions"

class registerPage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "联系方式 | Melrose Park ",
      "Melrose Park的确是在定义一种不同的生活方式。在充满活力的Melrose Park中，您可以逃离城市的喧嚣，进入宁静港湾，在这里，每个细节都被考虑到了。"
    );
  }
  render() {
		
		
		return (
			<RegisterSec>

            <Image
              src="/images/melrose-park-sydney-property-001-GARDENS.jpg"
              alt="Melrose Park Property, Sydney - Gardens (Artists Impression)"
            />
						<Inner>
							<H3>立刻登记</H3>
							<P> Melrose Park的确是在定义一种不同的生活方式。在充满活力的Melrose Park中，您可以逃离城市的喧嚣，进入宁静港湾，在这里，每个细节都被考虑到了。</P>
							<Iframe src="https://go.pardot.com/l/472112/2018-04-19/61bsm" width="100%"  type="text/html"  allowTransparency="true" ></Iframe>
						</Inner>

						</RegisterSec>


    );
  }
}

const RegisterSec = styled.div`
height: 100vh;
width: 100%;
min-height: 60rem;
position: relative;
img{
	position: absolute;
	top: 0;
	left: 0;
	right:0;
	bottom: 0;
	z-index: 1;
	margin: 0;
	width: 100%;
	height: 100%;
	object-position: center;
	object-fit: cover;
}
`
const Inner = styled.div`
	position: absolute;
	left: 0;
	right:0;
  top: 50%;
  transform: translateY(-50%);	margin: auto;
	z-index: 2;
	background: rgba(0,179,152,1);
	width: 101rem;
	min-height: 30rem;
	text-align: center;
	padding: 4rem;
	color: ${vars.colors.blank};
	max-width: 100%;

	h3{
		margin-bottom: 20px;
	}
	${below.tablet`
		padding-top:7rem;
	`}
`

const Iframe = styled.iframe`
	border:none;
	height: 300px;
	${below.mid`
		height:500px;
	`}
`


export default registerPage;
