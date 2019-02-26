import React from 'react'
import styled, { keyframes } from 'styled-components'

import * as vars from '../style/vars'
import { above, below } from '../style/functions'
import { H1, H4, P } from './Text'
import renderHTML from 'react-render-html'

class Team extends React.Component {
   render() {
      const wp = this.props.wp
      return (
         <Container>
            <div className="row ">
               <div className="padd col">
                  <H1 type="green">{wp.team_header}</H1>
               </div>
            </div>
            <div className="row">
               <div className="col padd col-04">
                  <a href={wp.team_1_url} target="_blank" title={wp.team_1_url}>
                     <H4>{wp.team_1_name}</H4>
                  </a>
                  <P>
							{renderHTML(wp.team_1_description)}
                  </P>
               </div>
               <div className="col padd col-04">
                  <a href={wp.team_2_url} target="_blank" title={wp.team_2_url}>
                     <H4>{wp.team_2_name}</H4>
                  </a>

                  <P>
							{renderHTML(wp.team_2_description)}
                  </P>
               </div>
               <div className="col padd col-04">
                  <a href={wp.team_3_url} target="_blank" title={wp.team_3_url}>
                     <H4>{wp.team_3_name}</H4>
                  </a>
                  <P>
						{renderHTML(wp.team_3_description)}

                  </P>
               </div>
            </div>
         </Container>
      )
   }
}

const Container = styled.div`
   background: ${vars.colors.offBlank};
   padding: ${vars.genPadd * 2}rem 0;
   .col {
      vertical-align: top;
   }
   h1 {
      font-size: 9rem;
      padding: 2rem 0;
      ${below.mid`
	font-size: 8rem;

	`};
   }
   p {
      font-size: 1.4rem;
   }
   a {
      color: ${vars.colors.body};
      text-decoration: none;
   }
`

export default Team
