import React from "react"
import styled, {ThemeProvider} from "styled-components"
import "whatwg-fetch"
import * as vars from "../style/vars"
import {maxHeight, below} from "../style/functions"

import Input from "../components/Input"
import {colors} from "../style/vars"

const theme = {
  color: colors.body,
  backgroundColor: "white",
  paddingLeft: "1rem",
  fontSize: "1.5rem"
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
			values: {},
			url: url
    }
	}
  updateForm(e) {
    let values = this.state.values
    values[e.target.getAttribute("name")] = e.target.value
    this.setState({ values })
	}
	componentDidMount() {

		this.updateForm = this.updateForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
	}

  handleSubmit(e) {
    e.preventDefault()
    const fields = [].slice.call(e.target.querySelectorAll("[name]"))
    fields.map(f => {
      let values = this.state.values
      values[f.getAttribute("name")] = f.value
    })

    fetch(
      "https://vds9c5imf1.execute-api.ap-southeast-2.amazonaws.com/prod/bensons-chevron-one",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state.values)
      }
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
				let formStatus = "complete"
        this.setState({ formStatus })
      })
      .catch(err => console.log(err))
	}
  render() {
    return (
      <Container popup={this.props.popup} shown={this.props.shown}>
        {this.props.popup && <Close onClick={this.props.toggleForm}/>}
        {this.state.formStatus === "complete"
          ? (
            <div>
              <Heading>THANK YOU FOR REGISTERING</Heading>
              <ThankYouText>
							A member of the Chevron One team will be in contact with you shortly.
              </ThankYouText>
            </div>
          )
          : (
            <ThemeProvider theme={theme}>
              <Form action="" onSubmit={this.handleSubmit}>
                <Logo alt="Chevron One Crest" src="/svg/logo-icon.svg"/>
                <Heading>Register your interest</Heading>
								<Field>
									<Input
										name="FirstName"
										label="First Name"
										required
										onChange={this.updateForm}
									/>
								</Field>
								<Field>
									<Input
										name="LastName"
										label="Last Name"
										required
										onChange={this.updateForm}
									/>
								</Field>
								<Field>
									<Input
										name="Email"
										type="email"
										label="Email"
										required
										onChange={this.updateForm}
									/>
								</Field>
								<Field>
									<Input
										name="Phone"
										label="Phone Number"
										required
										onChange={this.updateForm}
									/>
								</Field>
								<Field>
								<Input
										name="Postcode"
										label="Postcode"
										required
										onChange={this.updateForm}
									/>
								</Field>
								<Field>
								<Input
										name="Apartment_Type__c"
										type="select"
										label="Apartment Type"
										onChange={this.updateForm}
										required
										options={[
											{ value: "All",  label: "All" },
											{ value: "1", label: "1 Bedroom" },
											{ value: "2", label: "2 Bedroom" },
											{ value: "3", label: "3 Bedroom" },
											{ value: "4", label: "4 Bedroom" }
										]}
									/>
								</Field>
								<input type="hidden" name="Project_Name__c" value="Chevron One" />
								<input type="hidden" name="ProjectID__c" value="a0O7F000000eLhiUAE" />
								<input type="hidden" name="Enquiry_URL__c" value={this.state.url} />
								<input type="hidden" name="Property_Enquired_About__c" value="a0O7F000000eLhiUAE" />		
								<input type="hidden" name="Capture_Point__c" value="EDM" />		
								<input type="hidden" name="Active_Campaign_List__c" value="Chevron One" />		
								
                <Submit>Register Now</Submit>

								<Sub>1300 110 164</Sub>
              </Form>
            </ThemeProvider>
          )}
      </Container>
    )
  }
}

export default RegisterForm

const Container = styled.div `
  width: 100%;
  background-color: rgba(0,30,96, 1);
	position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
	margin-top: -3.2rem;
  ${props => props.popup && `
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 2001;
		visibility: hidden;
		opacity: 0;
		transition: visibility 2s, opacity 0.3s linear;
		margin-top: 0;
		background-color: rgba(0,30,96, 0.85);

    `};
		${props => props.shown && `
		visibility: visible;
		opacity: 1;
    `};
		${below.mobile`
			margin-top:0;
		`}
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
		color: #66523e;

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
  width: calc(50% - 1rem);
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

const Heading = styled.h3 `
  width: 100%;
  font-family: "Salome Fine";
  color: ${colors.brandHighlight};
  text-transform: uppercase;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
`
const Sub = styled.p `
  width: 100%;
  font-family: "Salome Fine";
  color: ${colors.brandHighlight};
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  margin-top: 3rem;
`

const Submit = styled.button `
	font-weight: bold;
	text-transform: uppercase;
	font-family: "Proxima Nova", serif;
	font-size: 1.35rem;
	letter-spacing:1px;
	margin-bottom: 1.5rem;
	text-decoration: none;
	background: linear-gradient(#a9947b, #caba9a);
	border: none;
	color: ${vars.colors.brandHighlight};
	padding: 1rem 2rem 1rem 2rem;
	border-radius: 0.7rem;
	transition: background 1s;
	display: inline-block;
	overflow: hidden;
	position: relative;
	margin:auto;
	z-index:0;
	&:after{
		content: '';
		display: block;
		z-index:-1; 
		background: ${vars.colors.brandPrimary};
		position: absolute;
		left:0;
		right:0;
		top:0;
		bottom:0;
		width:calc(100% - 4px);
		border-radius: 0.5rem;
		margin: auto;
		height:calc(100% - 4px);
		transition: opacity 1s;

	}
	&:hover{
		&:after{
			opacity: 0;
		}
		color: ${vars.colors.blank};
	}
`

const ThankYouText = styled.p `
  font-size: 1.5rem;
  color: ${colors.white};
  text-align: center;
`

const FormNote = styled.p `
  text-transform: uppercase;
  color: ${colors.brandHighlight};
  text-align: center;
  width: 100%;
  margin-top: 2rem;
	font-size: 1.4rem;
`

const Logo = styled.img `
  width: 14em;
  width: 14em;
  display: block;
  position: relative;
  margin: 0 auto 3em;
`
