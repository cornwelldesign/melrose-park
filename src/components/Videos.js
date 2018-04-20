import React from "react"
import styled from "styled-components"
import { below, clearFix } from "../style/functions"
if (typeof window !== `undefined`) {
	var offset = require('document-offset')
}
import * as styles from "../style/vars"

class Videos extends React.Component {
  constructor() {
    super()

    this.state = {
      currentVideo: 0,
      player: null,
      playerStatus: "stopped",
      videos: [
        {
          title: "An Inspired Escape",
					code: "01",
					poster: "poster.jpg",
          text:
            "Chevron Island offers the best of both worlds – the vibrant energy of Surfers Paradise and a charming village atmosphere. Chevron Island’s newest urban landmark is a celebration of arts and culture.",
        },
        {
          title: "Connected in Every Way",
					code: "02",
					poster: "poster-02.jpg",
          text:
            "Whether on foot via the Thomas Drive bridge, on bicycle or public transport, Chevron Island is well-connected to all your favourite destinations in the Gold Coast."
        },
        {
          title: "Minutes from the Beach",
					code: "03",
					poster: "poster-03.jpg",
          text:
            "The sprawling coastline of Surfers Paradise with its clear blue waters and white sandy beaches is just a few minutes away. Bask in the Gold Coast’s iconic sun-kissed lifestyle."
        },
        {
          title: "Resort Quality Lifestyle",
					code: "04",
					poster: "poster-04.jpg",
          text:
            "At Chevron One, life is to be enjoyed. Bask in the exclusive resort-style amenities of Club One Residents Club including concierge service, swimming pools, gymnasium, library, residents’ lounge and dining, as well as a yoga and sculpture garden."
        }
      ]
    }
  }

	componentDidMount() {
		if (typeof window !== `undefined`) {

		var target = document.getElementById(`sec-${this._reactInternalInstance._mountOrder}`)
    document.addEventListener('scroll', () => {
			var distance = offset(target);
			var scroll = window.scrollY + (window.innerHeight / 2 ) + 150;
			if(distance && scroll) {
				if(distance.top < scroll){
					target.classList.add('shown');
				} else  {
					target.classList.remove('shown');
				}
			}
		});
	}
	}

  updateCurrentVideo(index) {

		const currentVideo = index;

		this.setState({ currentVideo })
    const playerStatus = "stopped"
    this.setState({ playerStatus })
  }

  play() {
		let video = document.querySelector(`.video`);
		video.innerHTML = `
		<video controls="" loop="" ><source src="https://s3-ap-southeast-2.amazonaws.com/cornwell-misc/chevron/webisode_0${this.state.currentVideo}-v2.mp4" type="video/mp4" class="mp4"></video>
		`;
		const playerStatus = "playing"
		let currentSource = document.querySelector(`.video video`);
		if(currentSource){
			currentSource.play();
		}
    this.setState({ playerStatus })
  }

  render() {
    var info = this.state.videos[this.state.currentVideo]

    return (
      <Container id={`sec-${this._reactInternalInstance._mountOrder}`} className="vid-scroll"    >
        <Content className="txt">
          <Heading>Watch the Chevron One Series</Heading>
          <p>{info.text}</p>
          <p>
              <WatchLink  onClick={this.play.bind(this)} >
                Watch the series
              </WatchLink>
          </p>
          <List>
            {this.state.videos.map((video, index) => (
              <Item
                current={index === this.state.currentVideo}
                key={index}
                onClick={e => this.updateCurrentVideo(index)}
              >
                {video.title}
              </Item>
            ))}
          </List>
        </Content>
				<Video className="vid-sec">
				<div className="video" >loading
				</div>
          {this.state.playerStatus != "playing" && (
            <Poster alt="Chevron One - Illustration" src={"/images/" + info.poster} />
          )}
          {this.state.playerStatus != "playing" && (
            <PlayButton onClick={this.play.bind(this)} />
          )}
        </Video>
      </Container>
    )
  }
}

export default Videos

const Container = styled.section`
  width: 100%;
  background-color: #fffef7;
  display: flex;
  flex-direction: row;
  height: 28.125vw;
	${below.desktop`
		display:block;
		height:auto;
	`}
	.txt{
		transform: translate3d(0, 5%, 0);
    opacity: 0;
		transition: transform 1s, opacity 2s;
	}
	&.shown .txt{
		opacity: 1;
			transform: translate3d(0, 0, 0) !important;
	}
`

const Content = styled.div`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: ${styles.genPadd};
  text-align: left;
  > p {
    width: 71%;
    font-size: 1.5em;
    line-height: 1.5;
    margin: 0 0 1.5em;
		${below.mid`
			width:100%;
		`}
  }
	${below.desktop`
		width: 100%;
	`}
`

const Video = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
	${below.mid`
		max-width: 100%;
		padding:0;
	`}
	${below.desktop`
		width: 100%;
		height:100vw;
	`}
	video{
		position: relative;
		height: 100%;
		width: 100%;
		z-index: 1;
	}
	&.shown{
		display:block;
	}
`

const Heading = styled.h3`
  font-family: "Salome Fine";
  color: ${styles.colors.brandPrimary};
  font-size: 3.5em;
  line-height: 0.83em;
  margin: 0 0 0.5em;
  text-transform: uppercase;
  padding-right: 5em;
	max-width:61rem;
	${below.mid`
		max-width: 100%;
		padding:0;
	`}
`


const WatchLink = styled.span`
  text-decoration:underline;
	font-style: italic;
	cursor: pointer;
`

const List = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;

	margin-top:6rem;
	margin: 0 0 1.5em;
		${below.mid`
			margin:0;

	`}
`

const Item = styled.li`
  font-size: 1.2em;
  width: 9.5em;
  padding-bottom: 0.75em;
  border-bottom: 1px solid currentColor;
  padding-right: 2em;
	display: inline-block;
	margin-right: 2rem;
  cursor: pointer;
  ${props =>
    props.current &&
    `
    border-bottom: 3px solid currentColor;
  `};
	${below.mid`
		padding:0;
	`}
`


const Poster = styled.img`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  object-fit: cover;
`

const PlayButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12em;
  height: 12em;
  display: block;
  border-radius: 50%;
  border: 2px solid white;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  /* for responsive stuff just change font size to scale button up and down. */
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 23.5px 0 23.5px 43px;
    border-color: transparent transparent transparent #ffffff;
    transform: translateX(0.7em);
  }
`
