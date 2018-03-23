import React from "react"
import styled from "styled-components"
import * as vars from "../style/vars"
import {maxHeight, below} from "../style/functions"

class Bg extends React.Component {
  constructor() {
    super()
    this.state = {
      playerStatus: "playing",
			player: null,
			mobileVid: 'playsInline'
    }
  }
  play() {
    const playerStatus = "playing"
    this.setState({playerStatus})
  }

  stop(data) {
    const playerStatus = "stopped"
    this.setState({playerStatus})
  }


  render() {
		if (typeof window !== `undefined`) {

			var canPlay = false;
			var v = document.createElement('video');
			if(v.canPlayType && v.canPlayType('video/mp4').replace(/no/, '')) {
			} else {
				let mobileVid = '';
				this.setState({mobileVid})

				this.stop();
			}
		}
    return (
      <Container>

				<Poster src="/images/melrose_background-v3.jpg"
					 onClick={this
	          .play
	          .bind(this)}
					/>

				<Title>
					The new<br />heart of Sydney
				</Title>

      </Container>
    )
  }
}

export default Bg

const Container = styled.section `
  width: 100%;
  position: relative;
	overflow: hidden;
	background: ${vars.colors.blank};
	height: 100vh;

	z-index: 1;

	${below.tablet`
		background-size:100% 100%;
		background-repeat: no-repeat;
		background-position:center;
		background-image: url("/images/bg.jpg");
	`};
`

const Toggle = styled.div `
	display:none;
	${props => props.status == 'stopped' && `
					display:block;
		`}
	`


const Poster = styled.img `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
	object-fit: cover;
`

const Title = styled.h2 `
	display:inline-block;
	color:rgba(255,255,255,0.9);
	position: relative;
	z-index:2;
  top: 50%;
  transform: translateY(-50%);
  font-size:13rem;
  text-transform:uppercase;
  line-height:0.85;

  @media screen and (max-width:768px) {
  	padding:22%;
  	font-size:10rem;
    color:rgba(255,255,255,0.96);
    text-shadow: 0 1px 32px rgba(0,0,0,0.1);
  }
  @media screen and (max-width:480px) {
  	padding:12%;
  	font-size:8rem;
  }
`

const VideoContainer = styled.div `
position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: -1; 
${maxHeight.height`
height: 125%;
 top: -25%;
	`};
`
const Video = styled.video `
 display: block; width: 100%; height: 100%; object-fit: cover; 	

 ${below.tablet`
	display:none;
	`};
`

const Content = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

`




const WatchText = styled.p `
	font-family: "Sectra", times, serif;
  color: white;
  font-size: 3em;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  margin-top: 5vw;
  text-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
	position: absolute;
	bottom: 20%;
	left: 0;
	right: 0;
	margin:auto;
	z-index: 3;
`
