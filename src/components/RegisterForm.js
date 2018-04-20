import React from "react"
import styled, {ThemeProvider} from "styled-components"
import "whatwg-fetch"
import * as vars from "../style/vars"
import {maxHeight, below} from "../style/functions"
import Input from "../components/Input"
import {colors} from "../style/vars"
import { navigateTo } from "gatsby-link"

const theme = {
  color: colors.body,
  backgroundColor: "white",
  paddingLeft: "1rem",
  fontSize: "1.4rem"
}

class RegisterForm extends React.Component {
  constructor() {
    super()
    let url;
    if (typeof window !== `undefined`) {
      url = window.location.href.replace('https://','').replace('http://','').replace(/\/$/, '');
    } else {
      url = '';
    }
    this.state = {
      formStatus: "incomplete",
      className : "",
      values: {},
      url: url
    }
  }
  updateForm(e) {
    let values = this.state.values
    values[e.target.getAttribute("name")] = e.target.value || '';
    this.setState({ values })
  }
  componentDidMount() {
    this.updateForm   = this.updateForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showThankYou = this.showThankYou.bind(this)
    this.hideThankYou = this.hideThankYou.bind(this)
  }
	showThankYou() {
		this.setState({
			className : "active"
		});
	}
	hideThankYou() {
		this.setState({
			formStatus : "incomplete"
		})
	}

handleSubmit(e) {

	e.preventDefault()
	const fields = [].slice.call(e.target.querySelectorAll("[name]"))
	fields.map(f => {
		let values = this.state.values
		values[f.getAttribute("name")] = f.value
	})

	fetch(
		"",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.state.values)
		}
	)
		.then(function(res) {
			return {};
		})
		.then(json => {
			//console.log(json)
			console.log("Tag manager push here")

		})
		.catch(err => console.log(err))
  }
	render() {
    return (
      <Container popup={this.props.popup} shown={this.props.shown} id="register">


        
        {this.props.popup && <div><Close onClick={this.hideThankYou}/>

					</div>
				}

            <ThemeProvider theme={theme}>
              <Form action="" onSubmit={this.handleSubmit.bind(this)}>
								<Field>
									<Input
										name="first_name"
										label="First Name*"
										required
										white={this.props.white}
										onChange={this.updateForm.bind(this)} // Bit of a hack
									/>
								</Field>
								<Field>
									<Input
										name="last_name"
										label="Last Name*"
										required
										white={this.props.white}

										onChange={this.updateForm.bind(this)}
									/>
								</Field>
								<Field>
									<Input
										name="email"
										label="Email*"
										required
										white={this.props.white}

										onChange={this.updateForm.bind(this)}
									/>
								</Field>
								<Field>
									<Input
										name="phone_number"
										value=""
										label="Phone"
										required="false"
										white={this.props.white}

										onChange={this.updateForm.bind(this)}
									/>
								</Field>
								<Field>
									<Input
										name="postcode"
										value=""
										label="Postcode"
										white={this.props.white}

										onChange={this.updateForm.bind(this)}
									/>
								</Field>
								<Field>
								<Input
										name="interested_in"
										type="select"
										white={this.props.white}

										label="interested in"
										onChange={this.updateForm.bind(this)}
										options={[
											{ value: "1",  label: "1 Bedroom - $542k-$575k" },
											{ value: "2", label: "2 Bedroom - $845k-$1.3m" },
											{ value: "3", label: "3 Bedroom - $ 1.4m-$3.05m" },
											{ value: "4", label: "Penthouse - Price upon request" }
										]}
									/>
								</Field>

								<Field>
								<Input
										name="price_range"
										type="select"
										label="Price range"
										white={this.props.white}

										onChange={this.updateForm.bind(this)}
										options={[
											{ value: "1",  label: "1 Bedroom - $542k-$575k" },
											{ value: "2", label: "2 Bedroom - $845k-$1.3m" },
											{ value: "3", label: "3 Bedroom - $ 1.4m-$3.05m" },
											{ value: "4", label: "Penthouse - Price upon request" }
										]}
									/>
								</Field>

								<Field>
								<Input
										name="i_am_a"
										type="select"
										label="I am a"
										white={this.props.white}

										onChange={this.updateForm.bind(this)}
										options={[
											{ value: "lover..",  label: "lover.." },
											{ value: "but not a fighter", label: "but not a fighter" }
										]}
									/>
								</Field>

								
                <Submit 	white={this.props.white} >Register Now</Submit>
              </Form>
            </ThemeProvider>

      </Container>
    )
  }
}

export default RegisterForm



const Container = styled.div `
	position: relative;
	padding-top:0;
	padding-bottom:10px;

  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:768px) {
  	padding:20px 0;
  	padding-top:50px;
  	min-height:100vh;
  	height:auto;
  }
`

const Close = styled.div `
  height: 4rem;
  width: 4rem;
  position: absolute;
  top: 3rem;
  right: 3rem;
  color: ${colors.blank};
  cursor: pointer;
	transition: color ${vars.time};

  &:after {
    content '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    position: absolute;
    top: 50%;
    left: 0;
    transform: rotate(45deg);
  }
  &:before {
    content '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    position: absolute;
    top: 50%;
    left: 0;
    transform: rotate(-45deg);
  }
	&:hover{
		color: ${vars.colors.brandPrimary};

	}
`

const Form = styled.form `
  width: 90%;
  max-width: 76rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
	${below.mobile`
padding-top: 4rem;
display:block;
`}
`

const Field = styled.div `
  width: calc(50% - 2rem);
  display: inline-block;
  margin-bottom: 2rem;
  @supports (display: flex) {
    display: block;
  }
	${below.mobile`
		width: 100%;
		max-width: 35rem;
		margin-left: auto;
		margin-right: auto;
		display:block;
	`}
`



const Submit = styled.button `

	text-align:center;
	text-transform: uppercase;
	font-family: ${vars.fonts.titleAlt};
	font-size: 1.4rem;
	line-heights: 1;
	letter-spacing:1px;
	text-decoration: none;
	background: ${vars.colors.blank};
	border: none;
	color: ${props => (props.white ? `#fff` : `#000`)} ;
	padding: ${vars.genPadd / 2}rem  ${vars.genPadd}rem;
	transition: background 1s;
	display: inline-block;
	overflow: hidden;
	position: relative;
	min-width: 10rem;
	z-index:0;
	border: 1px solid ${props => (props.white ? `#fff` : `#000`)} ;
	margin: 2rem auto auto auto;
		background: transparent;
		color: ${props => (props.white ? `#fff` : `#000`)} ;
		&:hover{
		background: ${props => (props.white ? `#fff` : `#000`)} ;
		color: ${props => (props.white ? `#000` : `#fff`)} ;
		}
`


