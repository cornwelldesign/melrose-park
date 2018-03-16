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
  	console.log(this);
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
		this.state.className = "active";
	}
	hideThankYou() {
		this.state.className = "";
	}

handleSubmit(e) {
	let formStatus = "complete"

	this.setState({ formStatus })

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
		.then(res => res.json())
		.then(json => {
			console.log(json)
			console.log("Tag manager push here")

		})
		.catch(err => console.log(err))
  }
	render() {

/*
if (typeof window !== `undefined`) {
			var apartment_type = document.querySelector('select[name="apartment_type"]')
			if (apartment_type) {
				apartment_type.addEventListener("change", function (e) {
					addOptions(this.value)
				})

				const price_range_select = document.querySelector('select[name="price_range"]')
				const len = price_range_select.options.length
				const options = []

				// store options
				for (let i = len - 1; i >= 1; i--) {
					options.push({
						group: price_range_select.options[i].getAttribute("data-group"),
						key: price_range_select.options[i].getAttribute("value"),
						val: price_range_select.options[i].innerHTML
					})
				}

				var addOptions = function (group) {
					clearOptions(price_range_select)

					for (let i = options.length - 1; i >= 0; i--) {
						if (parseInt(group) === parseInt(options[i].group)) {
							let temp_option = document.createElement("option")
							temp_option.value = options[i].key
							temp_option.innerHTML = options[i].val
							temp_option.hidden = false
							price_range_select.appendChild(temp_option)
						}
					}
				}

				function clearOptions(select) {
					const opt_len = select.options.length
					for (let i = opt_len - 1; i >= 1; i--) {
						select.options[i].setAttribute('selected', 'false');
						select.options[i].setAttribute('hidden', 'true');
					}
				}
			}
		}
*/
    return (
      <Container popup={this.props.popup} shown={this.props.shown} id="register">

      	<Logo02>
          <svg>
          <use xlinkHref='/svgs/melrose_logo_inverted.svg#logo' />

          </svg>
        </Logo02>
        <Title>
        Register now
        </Title>
        <ThankYou className={this.state.className}>
        	<Close onClick={this.hideThankYou}>

        	</Close>
          <Heading>Thank you<br/> for registering</Heading>
        </ThankYou>
        {this.props.popup && <div><Close onClick={this.hideThankYou}/>
					<Logo>
						<svg>
						<use xlinkHref='/svgs/melrose_logo_inverted.svg#logo' />
						</svg>
					</Logo>
					</div>
				}
        {this.state.formStatus === "complete"
          ? this.showThankYou()
          : (
            <ThemeProvider theme={theme}>
              <Form action="" onSubmit={this.handleSubmit}>
								<Field>
									<Input
										name="first_name"
										label="First Name*"
										required
										onChange={this.updateForm.bind(this)} // Bit of a hack
									/>
								</Field>
								<Field>
									<Input
										name="last_name"
										label="Last Name*"
										required
										onChange={this.updateForm}
									/>
								</Field>
								<Field>
									<Input
										name="email"
										label="Email*"
										required
										onChange={this.updateForm}
									/>
								</Field>
								<Field>
									<Input
										name="phone_number"
										value=""
										label="Phone"
										onChange={this.updateForm}
									/>
								</Field>
								<Field>
									<Input
										name="postcode"
										value=""
										label="Postcode"
										onChange={this.updateForm}
									/>
								</Field>
								<Field>
								<Input
										name="interested_in"
										type="select"
										label="interested in"
										onChange={this.updateForm}
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
										onChange={this.updateForm}
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
										onChange={this.updateForm}
										options={[
											{ value: "lover..",  label: "lover.." },
											{ value: "but not a fighter", label: "but not a fighter" }
										]}
									/>
								</Field>

								
                <Submit>Register Now</Submit>
              </Form>
            </ThemeProvider>
          )}
          <LogoWrapper>
            <Logo03 href="http://payce.com.au/" target="_blank">
              <svg>
                <use xlinkHref='/svgs/logo_payce.svg#logo' />
              </svg>
            </Logo03>
            <Logo04 href="https://www.sekisuihouse.com.au/" target="_blank">
              <svg>
                <use xlinkHref='/svgs/logo_sekisui.svg#logo' />
              </svg>
            </Logo04>
            <Logo05 href="http://www.bostonmarketing.com.au/" target="_blank">
              <svg>
                <use xlinkHref='/svgs/logo_boston.svg#logo' />
              </svg>
            </Logo05>
          </LogoWrapper>
      </Container>
    )
  }
}

export default RegisterForm

const Logo02 = styled.div `
  display: inline-block;
  position:relative;
  width:111px;
  height:74px;
`

const Title = styled.h3 `
	margin-top:80px;
	margin-bottom:80px;
	display:inline-block;
	font-family:${vars.fonts.headings};
	font-size:4rem;
	color:#000;
	text-transform:uppercase;

	@media screen and (max-width:768px) {
		margin-top:50px;
		margin-bottom:40px;
	}
	@media screen and (max-width:480px) {
		margin-top:40px;
		margin-bottom:20px;
	}
`

const Logo03 = styled.a `
  display: inline-block;
  position: relative;
  width:70px;
  height:20px;
  margin:0 24px;
`

const Logo04 = styled.a `
  display: inline-block;
  position: relative;
  width:59px;
  height:27px;
  margin:0 24px;
`

const Logo05 = styled.a `
  display: inline-block;
  position: relative;
  width:83px;
  height:19px;
  margin:0 24px;
`

const LogoWrapper = styled.div `
	width:100%;
	margin-top:150px;
	display:flex;
  align-self:flex-end;
  align-items:center;
  justify-content:center;

  @media screen and (max-width:768px) {
  	margin-top:80px;
  }
`

const Container = styled.div `
  background-color: ${vars.colors.blank};
	position: relative;
	padding-top:60px;
	padding-bottom:10px;
	min-height:100vh;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  ${props => props.popup && `
    position: fixed;
    top: 2rem;
		bottom: 2rem;
		left: 2rem;
		right: 2rem;
    z-index: 2001;
		visibility: hidden;
		opacity: 0;
		transition: visibility 2s, opacity 0.3s linear;
		margin-top: 0;
		background-color: rgba(0,0,0, 0.6);

    `};
		${props => props.shown && `
		visibility: visible;
		opacity: 1;
    `};
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


const Logo = styled.div `
  position: relative;
	width: 24.2rem;
	height: 8.9rem;
	position: absolute;
  top: 4rem;
	color: #fff;
	left: 0;
	right: 0;
	margin:auto;

`

const Heading = styled.h3 `
	display:inline-block;
	color:rgba(255,255,255,0.9);
	text-shadow: 0 2px 32px rgba(0,0,0,0.3);
	position: relative;
	z-index:2;
  top: 50%;
  transform: translateY(-50%);
  font-size:10rem;
  text-transform:uppercase;
  padding-top:20px;

  @media screen and (max-width:768px) {
  	font-size:8rem;
  	padding:0 15px;
  }
`

const Submit = styled.button `
  width: 100%;
  text-align: center;
	color: ${vars.colors.blank};
	font-size: 1.75rem;
  padding: 1rem 2.5rem 1rem 2.5rem;
  text-transform: uppercase;
  cursor: pointer;
	transition: color ${vars.time}, background ${vars.time};
	position: relative;
	z-index: 7;
	display: inline;
	margin: auto;
	margin-top:2rem;
	color: ${vars.colors.brandPrimary};
	border: 2px solid ${vars.colors.brandPrimary};
	font-weight: normal;
	background: transparent;
	max-width: 250px;

	transition: border-color 1.5s, color 1.5s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
 &:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 101%;
	height: 100%;
	background: ${vars.colors.brandPrimary};
	z-index: -1;
	opacity: 0;
	-webkit-transform: scale3d(0.7, 1, 1);
	transform: scale3d(0.7, 1, 1);
	transition: transform 1s, opacity 1s, border-color 1s;
 }
&:hover {
	color: #fff;
	border-color: ${vars.colors.brandPrimary};
&:before{
	opacity: 1;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);

}
}
`

const ThankYou = styled.div `
	display:none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  background-image:url('/images/thank_you.jpg');
  background-size:cover;
  background-position:center center;
  z-index: 2;


  &.active {
  	display:block;
  }
`


const ThankYouText = styled.h2 `
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

