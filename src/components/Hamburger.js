import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { below } from "../style/functions"
import * as vars from "../style/vars";

const Hamburger = props => (
  <Container
    onClick={e => {
      props.onClick(e)
    }}
  >
		<Inner >
			<Line nav_open={props.isOpened} />
			<Line nav_open={props.isOpened} />
			<Line nav_open={props.isOpened} />
		</Inner>
  </Container>
)

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpened: PropTypes.bool
}

Hamburger.defaultProps = {
  isOpened: false
}

export default Hamburger

const Container = styled.div`
  width: 7rem;
  height: 4.5rem;
  position: relative;
  z-index: 3;
  cursor: pointer;
  display: block;
	background: ${vars.colors.offBody};
	float: right;
	padding: 6px 0 ;
	display: none;
	${below.mobile`
		display:block;
	`}

`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

`

const Line = styled.div`
  height: 2px;
  width: 3rem;
  background-color: ${vars.colors.blank};
  position: absolute;
  top: 0;
  left: 0;
	right: 0;
	margin: auto;
  &:nth-child(1) {
		top: 0x;
    transition: top 0.2s linear 0.2s, transform 0.2s linear 0s;
    ${props =>
      props.nav_open &&
      `
			top: 50%;
			margin-top: -0.2rem;
			transform: rotate(45deg);
			transition: top .2s linear, transform .2s linear .2s;
		`};
  }

  &:nth-child(2) {
    top: 50%;
    transition: transform 0.2s linear 0s;
    margin-top: -0.2rem;
    ${props =>
      props.nav_open &&
      `
			transform: rotate(-45deg);
			transition: transform .2s linear .2s;
		`};
  }

  &:nth-child(3) {
    top: 100%;
    transition: top 0.2s linear 0.2s, transform 0.2s linear 0s;
    margin-top: -5px;
    ${props =>
      props.nav_open &&
      `
			top: 50%;
			margin-top: -0.2rem;
			transform: rotate(-45deg);
			transition: top .2s linear, transform .2s linear .2s;
		`};
  }
`

Line.defaultProps = Container.defaultProps = {
  theme: Hamburger.defaultProps.theme
}
