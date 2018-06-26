import React from "react";
import GoogleMap from "../components/Map"
import styled, { keyframes } from "styled-components";
import * as vars from "../style/vars";
import Image from "../components/Image.js";
import Register from "../components/RegisterForm.js";
import { H1 } from "../components/Text"

class thanksPage extends React.Component {
   componentDidMount() {
		this.props.updateMeta(
      "Thank You | Melrose Park ",
      "Registration made.",
			this.props.data.wordpressPage.acf.seo_meta,
			this.props.data.wordpressPage.acf.seo_body,
			this.props.data.wordpressPage.acf.seo_footer,
			this.props.data.wordpressPage.acf.seo_code_block
	 )
   }
  render() {
		
		
		return (
			<ThanksSec>

            <Image
              src="/images/melrose-park-sydney-property-040-RESIDENTS.jpg"
              alt="Melrose Park Property, Sydney - Group of residents"
            />
							<H1>THANK YOU<br/>FOR REGISTERING</H1>


						</ThanksSec>


    );
  }
}

const ThanksSec = styled.div`
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
h1{
	position: absolute;
	left: 0;
	right:0;
  top: 50%;
  transform: translateY(-50%);	margin: auto;
	z-index: 2;
	margin: auto;
	color: ${vars.colors.blank};
	text-shadow:rgba(0, 0, 0, 0.3) 0px 2px 32px;
	text-align: center;
}
`





export default thanksPage;
