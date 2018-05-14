import { injectGlobal } from "styled-components"
import * as vars from "../style/vars"
import { above, below, clearFix } from "../style/functions"
import fonts from "../../static/fonts/fonts.css"

injectGlobal`
${fonts}
*, *::before, *::after {
  margin: 0;
  padding: 0;
  border: 0;
  border-collapse: collapse;
  border-spacing: 0;
  box-sizing: border-box;
  outline: none;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  list-style: none;
  quotes: none;
}
section{
	padding-top: ${vars.genPadd * 2}rem;
	padding-bottom: ${vars.genPadd}rem;
}
// HTML 5 me bro
footer, header, hgroup, menu, nav, section, small {
  display: block;
}

// No quotes, please!
blockquote:before, blockquote:after, q:before, q:after {
  content: '';
  content: none;
}

	::-moz-selection { 
		background: #ececec;
	}

	::selection {
		background: #ececec;
	}
	html {
		font-size: 10px;
		color: ${vars.colors.body};
		font-family: ${vars.fonts.body};
		text-align: left;
		line-height:1;
		${below.tablet`
			font-size: 8px;
		`}
		${above.giant`
			font-size: 11px;
		`}	
		${above.xl`
			font-size: 14px;
		`}	
	}
	* {
		box-sizing: border-box;
	}

	img{
		max-width: 100%;
		width: 100%;
	}

	strong{
		font-weight: bold;
	}

	sup{
		font-size: 0.4em;
		vertical-align: 0.9em;
	}

.focus-box:nth-of-type(even){
	.txt{
		left: 0;
		right: auto;
	}
	display:block;
	.img{
		float: right;
		transform: translate3d(10%, 0, 0);

	}
}
@media screen and (-webkit-min-device-pixel-ratio:0) { 
  select,
  textarea,
  input {
    font-size: 16px;
  }
}
	@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
		.focus-box img{
		transform: rotate(0deg) !important;
    opacity: 1 !important;
	}
	}
${below.mobile`
.focus-box img{
		transform: rotate(0deg) !important;
    opacity: 1 !important;
	}
`}
.slide:nth-of-type(2n), .image:nth-of-type(2n) {
	.img{
		transform: translate3d(0, 5%, 0);

	}
}


	@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
		.slide img, .image, .slide img, .image img, .vid-scroll .txt{
		transform: rotate(0deg) !important;
    opacity: 1 !important;
	}
	}
	${below.mobile`
	.slide img, .image, .slide img, .image img, .vid-scroll .txt{
		transform: rotate(0deg) !important;
    opacity: 1 !important;
	}
`}



svg{
	position: absolute;
	left:0;
	right: 0;
	top:0;
	fill: currentcolor;
	width: 100%;
	height: 100%;
	max-width:100%;
}
.row{
	${clearFix()}
	vertical-align:middle;
	&.padd{
		padding-bottom: ${vars.genPadd}rem;
	}
}
.col{

&.padd{
	padding-left: ${vars.genPadd}rem;
	padding-right: ${vars.genPadd}rem;
}
&.static, &.top{
	vertical-align:top;
}
&.top{
	margin-top: ${vars.genPadd}rem;
}
}
.col-01{
	width: 8.3333333333%;
}

.col-02{
	width: 16.6666666666%;
}

.col-03{
	width: 25%;
}

.col-04{
	width: 33.3333333332%;
}

.col-05{
	width: 41.6666666665%;
}

.col-06{
	width: 50%;
}

.col-07{
	width: 58.3333333331%;
}

.col-08{
	width: 66.6666666664%;
}

.col-09{
	width: 75%;
}

.col-10{
	width: 83.333333333%;
}

.col-11{
	width: 91.6666666663%;
}

.col-12{
	width: 100%;
}

.col{
	display: inline-block;
	vertical-align:bottom;
	${below.desktop`
		width: 100%;
		display:block;
		padding-left: ${vars.genPadd}rem;
	padding-right: ${vars.genPadd}rem;
		img{ 
width: auto;

		}
	
	`}
	&.static {
		background: #fff;
		position: fixed;
		z-index: 3;
		${below.desktop`
		position:relative;
		`}
	}
}

.tab-hide{
	${below.desktop`
		display:none;
		`}	
}
.tab-show{
	display: none;
	${below.desktop`
		display:block;
		`}	
}
.scroller {
	
  height: 100%;
  width: 100%;
  top: 4.5rem;
  left: 0;
  position: fixed;
  display:flex;
	background: ${vars.colors.brandPrimary};
}

.scroller footer{
	width:100%;
	position:absolute;
	bottom: 43px;
	z-index:10;
	opacity: 0;
	transform: translateY(50px);
	transition: opacity 1.5s, transform 1.5s;

}
.scroller .left {
  top: 0;
  position: absolute;
  overflow: hidden;
  width: 50%;
  /*ALternative at 50.2%*/
  transition: all .7s;



}
.scroller .right {



  bottom: -5px;
  position: absolute;
  overflow: hidden;
  width: 50%;
  left: 50%;
  transition: all .7s;

}



.scroller .down-arrow{
  display: block;
  cursor: pointer;
  width: 3rem;
  position: absolute;
  z-index: 200;
  width: 3rem;
  height: 3rem;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 13rem;
	opacity: 1;
	visibility: visible;
	transition: opacity 1.5s, visibility 1.5s;

}
.scroller.page-6 .down-arrow{
	opacity: 0;
	visibility: hidden;


}

.scroller.page-6  footer{
	opacity: 1;
	transform: translateY(0);

}
/* DOTS Menu */

.dotstyle{
  background-color: transparent;
  color: black;
  position: fixed;
  right: 0;
  height: 100%;
  z-index: 5;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

}
.dotstyle ul {
  background-color: transparent;
}

.dotstyle li {
  position: relative;
  display: block;
  margin: 1.2rem ${vars.genPadd}rem;
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  background-color: transparent;

}

.dotstyle li a {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 50%;
  cursor: pointer; /* make the text accessible to screen readers */
  position: absolute;
	border: 1px solid ${vars.colors.offBlank};

}

.dotstyle li a:hover,
.dotstyle li a:focus,
.dotstyle li.current a {
  background-color: ${vars.colors.offBlank};
}



/* CSS TO CENTER THE EXAMPLES */
.left .page {
  text-align: right;
  display: flex;
  justify-content: center;
  flex-direction: column;

}
.right .page {
  padding-left: 0%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

`