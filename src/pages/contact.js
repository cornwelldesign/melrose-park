import React from "react";
import GoogleMap from "../components/Map"
import { H3, P } from "../components/Text"
import styled, { keyframes } from "styled-components";
import * as vars from "../style/vars";
import Register from "../components/RegisterForm.js";

class contactPage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Contact | Melrose Park ",
      "Stay in touch with all the latest new from Melrose Park"
    );
  }
  render() {
		const markers =   [
			{
				"node": {
					"lat": -33.807813, 
					"lng": 151.069761,
					"name": "Display Suite"
				}
			}
		]
		
		return (
			<div>

		<ContactTop>
<div>
<div className="col  col-04 padd ">
	<H3>Get In TOUCH</H3>
	<P><span className="green">Visit our display suite at </span><br/>
<a href="" target="_blank" title="Map" >661 Victoria Road <br/>
Melrose Park NSW 2114</a><br/><br/>

<span className="green" >Sales Enquiries</span> <br/>
<a href="tel:1300 267 866"   title="tel" >1300 267 866</a><br/>
<a href="mailto:hello@melrosepark.com.au" title="Email" >hello@melrosepark.com.au</a><br/><br/>

<span className="green" >Follow us</span>  <br/>
<a href="https://www.facebook.com/MelroseParkLife/" title="Facebook" target="_blank" >Facebook</a><br/>
<a href="https://www.facebook.com/MelroseParkLife/" title="Instagram" target="_blank" >Instagram</a></P>
</div>

<div className="col  col-08 ">
				<GoogleMap markers={markers} />
				</div>
				</div>
      </ContactTop>
			<ContactBtm>
			<div className="col  col-04 padd ">
	<H3>REGISTER NOW</H3>
	</div>
	<div className="col  col-08 padd "> <P>Stay in touch with all the latest news from Melrose Park</P>							<Iframe src="http://go.pardot.com/l/472112/2018-04-19/61bsk" width="100%" height="300" type="text/html"  allowTransparency="true" ></Iframe>

</div>
						</ContactBtm>
						</div>


    );
  }
}

const ContactTop = styled.div`
	.col{
		vertical-align: top;
		&.padd{
			padding-top: 6rem;
		}
	}
	h3{
		color: ${vars.colors.offBody};
		padding-bottom: 4rem;
	}
`
const ContactBtm = styled(ContactTop)`
		background: ${vars.colors.offBlank};
		min-height: 60rem;
		div{
			align-items: left;

		}

`
const Iframe = styled.iframe`
	border:none;
	max-width:100%;
`

export default contactPage;
