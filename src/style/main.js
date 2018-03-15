import { injectGlobal } from "styled-components"
import * as vars from "../style/vars"
import { above, below } from "../style/functions"
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
		font-family: ${vars.fonts.body}, sans-serif;
		text-align: center;
		overflow-x: hidden;
		overflow-y:scroll;
		position: relative;
		line-height:1;
		min-height: 600px;
		height:100vh;
		${below.mid`
			font-size: 9px;
		`}
		${below.tablet`
			font-size: 8px;
		`}

	}
	* {
		box-sizing: border-box;
	}

	img{
		max-width: 100%;
	}

	strong{
		font-weight: bold;
	}



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

h1,h2,h3,h4,h5,h6 {
	font-family: ${vars.fonts.headings}, sans-serif;
}

`