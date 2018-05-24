import React from "react"
import styled from "styled-components"
import * as vars from "../style/vars"
import { below } from "../style/functions"
import Link from "gatsby-link"

class Nav extends React.Component {
   render() {
      return (
         <Container nav_open={this.props.nav_open} className={this.props.links_hide}>
            <Inner>
               <Item>
                  {this.props.lang === "en" ? (
                     <A to="/vision/" onClick={this.props.onClick} activeClassName="selected" title="Vision">
                        Vision
                     </A>
                  ) : (
                     <A to="/ch/vision/" onClick={this.props.onClick} activeClassName="selected" title="理念">
                        理念
                     </A>
                  )}
               </Item>

               <Item>
                  {this.props.lang === "en" ? (
                     <A to="/location/" onClick={this.props.onClick} activeClassName="selected" title="Location">
                        Location
                     </A>
                  ) : (
                     <A to="/ch/location/" onClick={this.props.onClick} activeClassName="selected" title="地点">
                        地点
                     </A>
                  )}
               </Item>

               <Item>
                  {this.props.lang === "en" ? (
                     <A to="/lifestyle/" onClick={this.props.onClick} activeClassName="selected" title="Lifestyle">
                        Lifestyle
                     </A>
                  ) : (
                     <A to="/ch/lifestyle/" onClick={this.props.onClick} activeClassName="selected" title="生活方式">
                        生活方式
                     </A>
                  )}
               </Item>

               <Item>
                  {this.props.lang === "en" ? (
                     <A to="/smart-city/" onClick={this.props.onClick} activeClassName="selected" title="Smart City">
                        Smart City
                     </A>
                  ) : (
                     <A to="/ch/smart-city/" onClick={this.props.onClick} activeClassName="selected" title="智慧城市">
                        智慧城市
                     </A>
                  )}
               </Item>

               <Item>
                  {this.props.lang === "en" ? (
                     <A to="/green-space/" onClick={this.props.onClick} activeClassName="selected" title="Green Space">
                        Green Space
                     </A>
                  ) : (
                     <A to="/ch/green-space/" onClick={this.props.onClick} activeClassName="selected" title="绿色空间">
                        绿色空间
                     </A>
                  )}
               </Item>

               <Item>
                  {this.props.lang === "en" ? (
                     <A to="/residences/" onClick={this.props.onClick} activeClassName="selected" title="Residences">
                        Residences
                     </A>
                  ) : (
                     <A to="/ch/residences/" onClick={this.props.onClick} activeClassName="selected" title="精品住宅">
                        精品住宅
                     </A>
                  )}
               </Item>

               <Item>
                  {this.props.lang === "en" ? (
                     <A to="/contact/" onClick={this.props.onClick} activeClassName="selected" title="Contact">
                        Contact
                     </A>
                  ) : (
                     <A to="/ch/contact/" onClick={this.props.onClick} activeClassName="selected" title="联系方式">
                        联系方式
                     </A>
                  )}
               </Item>

               <Item>
                  {this.props.lang === "en" ? (
                     <A
                        to="/ch"
                        onClick={this.props.onClick}
                        activeClassName="selected"
								title="中文(简体)"
								className="national-flag"
                       >
                        <img src="/svg/china_flag.svg" alt="中文(简体)" />
                     </A>
                  ) : (
                     <A
                        to="/"
                        onClick={this.props.onClick}
                        activeClassName="selected"
								title="English"
								className="national-flag"
                       >
                        <img src="/svg/aus_flag.svg" alt="English" />
                     </A>
                  )}
               </Item>
            </Inner>
         </Container>
      )
   }
}

const Container = styled.nav`
   float: right;
   overflow: hidden;
   padding: 0 ${vars.genPadd}rem;
   &.links-hide {
      display: none;
   }

   ${below.desktop`
	font-size: 1rem;
	padding: 0;
		float: left;
	`} ${below.mobile`
		position: fixed;
		top: 4.5rem;
		z-index: 2;
		left: 0;
		right: 0;
		width:100%;
		height:auto;
		transition: top ${vars.time};
		top: ${props => (props.nav_open ? `4.5rem` : `-60vh`)};
		background: ${vars.colors.offBlank};
	`};
`

const Inner = styled.ul`
   list-style: none;
	display: flex;
	justify-content: space-between;
   /* border: 1px solid lime; */
	/* width: 59vw; */
	/* margin: 0; */
   /* height: 40px; */
	${below.mobile`
		display: block;
		width: auto;
	`};
`

const Item = styled.li`
   /* display: inline-block; */
	/* border: 1px solid red; */

   ${below.mobile`
		display: block;
	`};
`

const A = styled(Link)`
	font-size: 1.4rem;
	letter-spacing:1px;
	text-transform: uppercase;
	color: ${vars.colors.blank};
	text-decoration: none;
	font-family: ${vars.fonts.titleAlt};
	opacity:1;
	padding: ${vars.genPadd / 2}rem;
	display:block;
	transition: opacity ${vars.time};

	font-weight: 500;

	&:hover{
		opacity:0.7;
		}

	${below.mobile`
		color: ${vars.colors.body};

	`}
	&.selected { 
		/*
		font-weight: bold;
		color: ${vars.colors.brandHighlight};
	*/
	}

	&.national-flag {
		height: 100%;
		width: 35px;
		margin: 0;
		padding: 0px;
		padding-top: 6px;
	}

	${below.mid`
		/* padding: ${vars.genPadd / 2}rem .5rem; */
		font-size:1.2rem;
		&.national-flag {
			padding-top: 4px;
			width: 25px;
		}
	`}
		
	${below.desktop`
		padding: 0.9rem .6rem;
		font-size: 1rem;
	`}

	${below.mobile`
		font-size: 2rem;
		padding: 2rem 2rem;
		border-bottom: 1px solid ${vars.colors.brandPrimary};
		&:hover{
			background: ${vars.colors.offColor}
		}

		&.national-flag {
			position: fixed;
			top: 1rem;
			border: 0px;
			left: 17rem;
			padding-top: 0;
			/* width: 100%; */

			img {
				width: 20px;
				margin: 0;
				
			}
		}
	`}
`

export default Nav
