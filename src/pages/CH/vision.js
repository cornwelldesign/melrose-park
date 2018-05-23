import React from "react";
import styled, {keyframes} from "styled-components"
import * as vars from "../../style/vars";
import {above, below} from "../../style/functions"

import Image from "../../components/Image.js";
import ParaTitle from "../../components/ParaTitle.js";
import Team from "../../components/Team.js";
import Hero from "../../components/Hero.js";
import { LargeP, P, H1, H4 } from "../../components/Text.js";

class VisionPage extends React.Component {
  componentDidMount() {
    this.props.updateMeta(
      "Vision | Melrose Park ",
      "Melrose Park is the new Australian dream, a welcoming neighbourhood with a sense of place. Beautiful residences, public spaces, vibrant shopping and dining"
    );
  }

  render() {
    return (
      <div>

			

        <Hero
          image="/images/melrose-park-sydney-property-007-PARK.jpg"
          alt="Melrose Park Property, Sydney - Play Park (Artists Impression)"
          vidButton=" "
          video="https://s3-ap-southeast-2.amazonaws.com/cornwell-misc/melrose-park/melrose-park-sydney-property-teaser.mp4"
        />
								<section>

        <ParaTitle title="一次伟大的转型" />

        <div className="row">
          <div className="col padd col-03">
            <LargeP type="green" icon={true}>
            拥抱多方位，多元化的生活方式，Melrose Park Residences让您尽情享受，尽情欢舞，尽情连接。
            </LargeP>
          </div>
          <div className="col padd col-09">
            <Image
              src="/images/melrose-park-sydney-property-008-SUBURB.jpg"
              alt="Melrose Park Property, Sydney - View of Suburb (Artists Impression)"
            />
          </div>
        </div>
        <div className="row padd">
          <div className="col padd col-03" />
          <div className="col padd col-05">
            <P>
            Melrose Park，一个新澳洲梦开启的地方，一个遍布美丽住宅，宽广绿地，商场美食的大型社区，这里充满了友好的氛围和无数的可能性，充分诠释了新悉尼大都会的城市精神。
            </P>
          </div>
        </div>

        <div className="row ">
          <div className="col padd col-09">
            <Image
              src="/images/melrose-park-sydney-property-009-RETAIL.jpg"
              alt="Melrose Park Property, Sydney - Retail Section (Artists Impression)"
            />
          </div>
        </div>
        <div className="row padd">
          <div className="col col-06 " ></div>
          <div className="col padd col-05">
            <P>
            无论您来自于世界上哪一个角落，来到澳洲，您就是新澳洲人。Melrose Park就是为这些新澳洲人所建，它很好的诠释了新澳洲人的那种不畏改变，热衷探险，每天追求新体验的精神。Melrose Park的精心整体规划和开发将为您建造一个充满活力和多元化的永久和谐温馨家园。
            </P>
          </div>
        </div>
				</section>

        	<Container >
				<div className="row " >
				<div className="padd col" >
				<H1 type="green" >Project Team</H1>
				</div>
				</div>
				<div className="row" >
					<div className="col padd col-03" >
						<a href="http://payce.com.au/" target="_blank" title="Payce Website" ><H4>PAYCE</H4></a>
						<P>Founded in 1978, PAYCE is a leading property development and investment company with a proven track record for setting new international benchmarks with their landmark integrated lifestyle developments.</P>
						<P>PAYCE has a reputation for not just delivering exceptional, intelligently designed contemporary homes, but also creating dynamic, cohesive communities. At the heart of PAYCE masterplanned designs are community spaces that celebrate the best of local-village living. PAYCE has earned a reputation for creating vibrant, inclusive communities by recognising that everyone needs to be connected and integrated.</P>
						<P>This success is built upon the commitment to empower and lead communities to realise their own potential, and it’s why innovative urban design is a central feature in every project. As specialists in urban renewal, the PAYCE team draws on best-practice design principles, critical thinking, and true innovation to create quality, inspirational and one-of-a-kind residential, commercial and retail precincts.</P>
					</div>
					<div className="col padd col-03" >
						<a href="https://www.sekisuihouse.com.au/" target="_blank" title="SEKISUI Website" ><H4>SEKISUI HOUSE</H4></a>

						<P>Sekisui House believes in creating homes and communities that improve with time, and last for generations. They do this by providing better design and quality, offering better and more dependable customer service, and establishing better, stronger urban communities.</P>
						<P>They believe in Smart Universal Design: sustainable, environmentally-focused design that’s applicable to everyone – regardless of age, ability, or stage in life. With every project, they consider the ongoing impact on the surrounding community, and pay meticulous attention to existing ecosystems and community infrastructure.</P>
						<P>From the quality of their building materials to the rigorous construction processes, Sekisui House is known for their attention to detail and the high quality of their homes and residential developments. You can be sure that everything is considered, and nothing left to chance.</P>
					</div>
					<div className="col padd col-03" >
						<a href="http://architectsajc.com/" target="_blank" title="AJC Website" ><H4>AJ+C</H4></a>

						<P>Allen Jack+Cottier (AJ+C) believes that successful residential developments should enrich people’s lives, adding quality and facility to the communities they serve, and in turn providing a framework on which new communities develop.</P>
						<P>AJ+C are internationally-recognised architects who consistently lead the residential market in Sydney and Australia, demonstrating commitment to a high standard of service, to excellence in design and to environmental sustainability.</P>
						<P>Driven by the search for elegant solutions to the complex problems that arise from particular needs and particular locations, our designers are not encumbered by an unyielding ‘house style’; nevertheless our buildings carry with them a consistent and recognisable quality that is more than skin deep.</P>
						<P>Our landmark projects have changed the way people live and work and have influenced how they, and the profession, think about architectural design.</P>
					</div>
					<div className="col padd col-03" >
					<a href="http://turfdesign.com/" target="_blank" title="TURF Website" ><H4>TURF</H4></a>
						<P>Turf understands the nature of major urban projects and what it takes to deliver them. Their blended knowledge of urban design, landscape architecture, environment, community and infrastructure makes their profession unique in connecting people and place.</P>
						<P>They create places that are meaningful and beautiful as both a creative challenge and project responsibility. What makes a place feel right? How can it surprise, excite or soothe the senses? What purpose must it serve and what stories can it tell?</P>
						<P>Turf encourages a process of critical thinking to generate sound principles and exciting ideas. Their collaboration is worldwide, drawing inspiration and ideas from professional experts, communities and stakeholders to generate the best design solutions.</P>
					</div>
				</div>
			</Container>
      </div>
    );
  }
}

export default VisionPage;



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
