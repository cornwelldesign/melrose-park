import React from "react";
import styled, { keyframes } from "styled-components";
import * as vars from "../style/vars";
import { below } from "../style/functions";
import { H1 } from "./Text";

class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			playing: false

		
		}
	}
	play(){
		this.setState({playing: true});
		var vid = document.querySelector("video"); 

    vid.play(); 
	}
	pause(){
		this.setState({playing: false});
		var vid = document.querySelector("video"); 

    vid.pause(); 
	}
  render() {
    return (
      <Container half={this.props.half}>
				<Inner half={this.props.half} >

        <Img src={this.props.image} alt={this.props.alt} draggable={false} />
        {this.props.vidButton && (
          <Toggle title="Play Video" onClick={() => { this.play() }}>
            <img
              src="/svg/melrose-park-sydney-property-010-PLAY.svg"
              alt="Play Button"
            />
            <span>{this.props.vidButton}</span>
          </Toggle>
        )}
        {this.props.title && <H1>{this.props.title}</H1>}
				</Inner>
				<Video show={this.state.playing} onClick={() => { this.pause() }} >
				<Play controls >
				
					<source src='https://s3-ap-southeast-2.amazonaws.com/cornwell-misc/melrose-park/melrose-park-sydney-property-.mp4' type="video/mp4"  />
				</Play>
				</Video>

      </Container>
    );
  }
}

export default Hero;

const Container = styled.div`
  display: block;
  width: 100%;
  height: calc(100vh - 4.5rem);
  position: relative;
  color: rgba(255, 255, 255, 0.9);
	text-align:center;
	padding-bottom:0;
  h1 {
    position: relative;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    max-width: 86%;
    margin: auto;
		padding-bottom:0;
		white-space: pre-line;
		${below.mobile`
			font-size: 8rem;
			max-width: 97%;
			}
		`}
  }
	${props => props.half && `
	width:100%;
	height:100%;
		overflow: hidden;
	`}
	${below.mobile`
		height: 100vh;;
		img{ display:block;
		margin: 0;
		
		}
	`}
`;
const Inner = styled.div`
		height: 100%;
	${props => props.half && `
		width:100vw;
		position: absolute;

	`}
	${props => props.half == 'left' && `
		left: 0;
	`}
	${props => props.half == 'right' && `
	right: 0;
	`}
`;

const Img = styled.img`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
	margin-bottom:0;
`;

const bounce = keyframes`
	0%, 100%, 20%, 50%, 80% {
		transform: translateY(-15px);
  }

	40% {
		transform: translateY(-45px);
  }
	60% {
		transform: translateY(-30px);
	}
`;


const Toggle = styled.a`
  cursor: pointer;
  position: relative;
  display: block;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  img {
    width: 10rem;
    margin: auto;
    margin-bottom: 1.5rem;
  }
  span {
    font-size: 3.2rem;
    color: #fff;
    display: block;
  }
`;


const Video = styled.div`
  display: block;
  position: fixed;
	z-index: 20;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0,0,0,0.7);
	opacity: 0;
	visibility: hidden;
	transition: opacity 1.5s, visibility 1.5s;
	${props => props.show == true && `
	opacity: 1;
	visibility: visible;
	`}
`;

const Play = styled.video`
		max-width: 120rem;
		width: 60vw;
		height:40vw;
		margin: auto;
		position: absolute;
		left:0;
		right:0;
		top:0;
		bottom:0;
`