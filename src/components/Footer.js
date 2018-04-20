import React from "react"
import styled from "styled-components"
import * as vars from "../style/vars"
import {below, clearFix} from "../style/functions"
import Link from "gatsby-link"
import Button from "../components/Button"

class Footer extends React.Component {
  render() {
		return (
			<Container>
				<Logo href="http://payce.com.au/" title="Payce" target="_blank" >
					<Icon src="/svg/melrose-park-sydney-property-002-PAYCE.svg" alt="Payce Logo" />
				</Logo>
				<Logo href="https://www.sekisuihouse.com.au/" title="Sekisui House" target="_blank" >
					<Icon src="/svg/melrose-park-sydney-property-003-SEKISUI.svg" alt="Sekisui House Logo" />
				</Logo>
				<Logo href="http://www.bostonmarketing.com.au/" title="Boston" target="_blank" >
					<Icon src="/svg/melrose-park-sydney-property-002-BOSTON.svg" alt="Boston Marketing" />
				</Logo>
				<Etc to="/privacy" title="Privacy Policy" >
					Privacy Policy
				</Etc> 
				<Etc to="/privacy" title="Privacy Policy" >
				Due Diligence
				</Etc> 
				<Button button="Register Now" href="/register" float={true} />
				<Social href="https://www.facebook.com/MelroseParkLife/" title="Facebook">
					<Round src="/svg/melrose-park-sydney-property-005-FACEBOOK.svg" alt="Facebook Logo" />
				</Social>
				<Social href="//" title="Instagram">
					<Round src="/svg/melrose-park-sydney-property-006-INSTAGRAM.svg" alt="Instagram Logo" />
				</Social>

			</Container>
		)
  }
}

export default Footer


const Container = styled.footer `
	background: ${vars.colors.brandPrimary};
	${clearFix()};
	text-align: left;
	padding: ${vars.genPadd / 2}rem ${vars.genPadd}rem;
	vertical-align: middle;

`


const Logo = styled.a `
display:inline-block;
	margin-right: ${vars.genPadd}rem;
	vertical-align: middle;

`

const Icon = styled.img`
	width: 7rem;
`

const Etc = styled(Link)`
	text-transform: uppercase;
	font-family: ${vars.fonts.titleAlt};
	color: ${vars.colors.blank};
	text-decoration: underline;
	text-transform: uppercase;
	margin-right: ${vars.genPadd}rem;
	display:inline-block;
	vertical-align: middle;

`

const Social = styled.a`
	float:right;
`

const Round = styled.img`
	width:3rem;
	margin-right: ${vars.genPadd}rem;
`
