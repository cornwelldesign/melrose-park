import React from "react"
import styled, {injectGlobal} from "styled-components"
import Slider from "react-slick"
import slickStyles01 from "slick-carousel/slick/slick.css"
import slickStyles02 from "slick-carousel/slick/slick-theme.css"
import * as vars from "../style/vars"
import {below} from "../style/functions"
import {H5, P} from "../components/Text"
if (typeof window !== `undefined`) {
  var offset = require('document-offset')
}
class ReasonsToBuy extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    if (typeof window !== `undefined`) {
      var target = document.getElementById(`sec-${this._reactInternalInstance._mountOrder}`)
      document.addEventListener('scroll', () => {
        var distance = offset(target);
        var scroll = window.scrollY + (window.innerHeight / 2) + 150;
        if (distance && scroll) {
          if (distance.top < scroll) {
            target
              .classList
              .add('shown');
          } else {
            target
              .classList
              .remove('shown');
          }
        }
      });

    }
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      className: 'center',
      pauseOnHover: false,
      arrows: false
    };

    return (
      <Container
        className="slide"
        id={`sec-${this._reactInternalInstance._mountOrder}`}>

        <Slider {...settings}>
          {this
            .props
            .slides
            .map((slide, index) => (
              <Slide key={index}>
                <img src={slide.img} alt={slide.alt} draggable={false}/>
              </Slide>
            ))}
        </Slider>
      </Container>

    )
  }
}

export default ReasonsToBuy

injectGlobal `
	${slickStyles01}
	${slickStyles02}
	
`
const Container = styled.div `
	p {
		max-width: 80rem;
		margin:auto;
	}
	&.shown{
		img{
			opacity: 1;
			transform: translate3d(0, 0, 0) !important;
		}
	}
	.slick-dots { 
		bottom:15.9rem;
		${below.desktop `
			display: none !important;
		`}
		li{
		margin-left:0;
		margin-right:0;
		 button {
			background-color: #fff;
			margin: 0 0.5rem;
			width: 1rem;
			font-size:0;
			opacity: 1;
			height: 1rem;
			border: 0.1rem solid ${vars.colors.brandHighlight};
			border-radius: 100%;
			&:before{
				display:none;
			}
		}
		&.slick-active button {
				background-color: ${vars.colors.brandHighlight};
			}
		}
	}
`
const Text = styled.div `
	padding-top: 8rem;
	margin:auto;
	min-height:21rem;
	${below.desktop `
	padding-top: 3rem;
		`}
`

const Slide = styled.div `
	width:100%;
	overflow:hidden;
	img {
		width:100%;
		transform: translate3d(0, -5%, 0);
    opacity: 0;
		transition: transform 1s, opacity 2s;
	}

`