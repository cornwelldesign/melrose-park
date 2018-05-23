import React from "react"
import styled, {keyframes} from "styled-components"

import * as vars from "../style/vars";
import {above, below} from "../style/functions"
import { H1, H4, P } from "./Text"

class Team extends React.Component {
  render() {
    return (
			<Container >
				<div className="row " >
				<div className="padd col" >
				<H1 type="green" >Project Team</H1>
				</div>
				</div>
				<div className="row" >
					<div className="col padd col-04" >
						<a href="http://payce.com.au/" target="_blank" title="Payce Website" ><H4>PAYCE</H4></a>
						<P>Founded in 1978, PAYCE is a leading property development and investment company with a proven track record for setting new international benchmarks with their landmark integrated lifestyle developments.</P>
						<P>PAYCE has a reputation for not just delivering exceptional, intelligently designed contemporary homes, but also creating dynamic, cohesive communities. At the heart of PAYCE masterplanned designs are community spaces that celebrate the best of local-village living. PAYCE has earned a reputation for creating vibrant, inclusive communities by recognising that everyone needs to be connected and integrated.</P>
						<P>This success is built upon the commitment to empower and lead communities to realise their own potential, and it’s why innovative urban design is a central feature in every project. As specialists in urban renewal, the PAYCE team draws on best-practice design principles, critical thinking, and true innovation to create quality, inspirational and one-of-a-kind residential, commercial and retail precincts.</P>
					</div>
					<div className="col padd col-04" >
						<a href="http://architectsajc.com/" target="_blank" title="AJC Website" ><H4>AJ+C</H4></a>

						<P>Allen Jack+Cottier (AJ+C) believes that successful residential developments should enrich people’s lives, adding quality and facility to the communities they serve, and in turn providing a framework on which new communities develop.</P>
						<P>AJ+C are internationally-recognised architects who consistently lead the residential market in Sydney and Australia, demonstrating commitment to a high standard of service, to excellence in design and to environmental sustainability.</P>
						<P>Driven by the search for elegant solutions to the complex problems that arise from particular needs and particular locations, our designers are not encumbered by an unyielding ‘house style’; nevertheless our buildings carry with them a consistent and recognisable quality that is more than skin deep.</P>
						<P>Our landmark projects have changed the way people live and work and have influenced how they, and the profession, think about architectural design.</P>
					</div>
					<div className="col padd col-04" >
					<a href="http://turfdesign.com/" target="_blank" title="TURF Website" ><H4>TURF</H4></a>
						<P>Turf understands the nature of major urban projects and what it takes to deliver them. Their blended knowledge of urban design, landscape architecture, environment, community and infrastructure makes their profession unique in connecting people and place.</P>
						<P>They create places that are meaningful and beautiful as both a creative challenge and project responsibility. What makes a place feel right? How can it surprise, excite or soothe the senses? What purpose must it serve and what stories can it tell?</P>
						<P>Turf encourages a process of critical thinking to generate sound principles and exciting ideas. Their collaboration is worldwide, drawing inspiration and ideas from professional experts, communities and stakeholders to generate the best design solutions.</P>
					</div>
				</div>
			</Container>
    )
  }

}

const Container = styled.div`
	background: ${vars.colors.offBlank};
	padding: ${vars.genPadd * 2}rem 0;
	.col{
		vertical-align: top;
	}
	h1{
		font-size: 9rem;
		padding: 2rem 0;
		${below.mid`
	font-size: 8rem;

	`}
	}
	p{
		font-size: 1.4rem;
	}
	a{
		color: ${vars.colors.body};
		text-decoration: none;
	}
`;

export default Team;

