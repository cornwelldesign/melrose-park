import React from "react"
import styled, { css } from "styled-components"
import {colors} from "../style/vars"
import * as vars from "../style/vars"

class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      fieldStatus: "empty",
      value: ""
    }
	}
	




	
  setFocused() {
    this.setState({ fieldStatus: "focused" })
  }
  setBlured() {
    if (this.input.value.length > 0) {
      this.setState({ fieldStatus: "focused" })
    } else {
      this.setState({ fieldStatus: "empty" })
    }
  }
  updateValue(e) {
    this.value = this.input.value
    this.props.onChange(e)
  }
  render() {
    let type = this.props.type ? this.props.type : "text"
    let options1 = null

    if (this.props.options) {
      options1 = this.props.options.map(function(opt, i) {
        return (
          <option key={i} value={opt.value}  data-group={opt.data_group}>
            {opt.label}
          </option>
        )
      })
    }
    return (
      <Wrapper type={this.props.type} white={this.props.white} >
			{type != "checkbox"  && (        <Label
          htmlFor={this.props.name}
          populated={this.state.fieldStatus}
          ref="label"
        >
          {this.props.label}
        </Label>
			) }


        {type == "select" && (


					 <div>
            <Select
              name={this.props.name}
              innerRef={comp => {
                this.input = comp
              }}
              required
              onFocus={this.setFocused.bind(this)}
              onBlur={this.setBlured.bind(this)}
              onChange={this.updateValue.bind(this)}
            >
              <option value="" hidden />
              {options1}
            </Select>
            <Arrow />
          </div>
       
        )}
				{type == "checkbox" && (
					<Checkbox >
					<Tick
            type={type}
            name={this.props.name}
            innerRef={comp => {
              this.input = comp
            }}
            required
            onFocus={this.setFocused.bind(this)}
            onBlur={this.setBlured.bind(this)}
            onChange={this.updateValue.bind(this)}
          />
						<span>
						{this.props.label}

						</span>
					</Checkbox>
				)} 
				{type != "checkbox" && type !="select" && (

						<Field
            type={type}
            name={this.props.name}
            innerRef={comp => {
              this.input = comp
            }}
            required
            onFocus={this.setFocused.bind(this)}
            onBlur={this.setBlured.bind(this)}
            onChange={this.updateValue.bind(this)}
          />
				)}
      </Wrapper>
    )
  }
}

const themeDefaults = {
  color: colors.body,
  backgroundColor: "#f1f1f1",
  paddingLeft: "1em",
  fontSize: "1rem"
}

const Wrapper = styled.div`
  font-size: ${props => props.theme.fontSize};
  width: 100%;
  height: 2.5em;
  display: block;
  position: relative;
	font-family: 'Archer';
  color: inherit;
  background-color: transparent;
  color: ${props => (props.white ? `#fff` : `#000`)} ;
  border-bottom:${props => (props.white ? `#fff` : `#000`)} solid 2px;
`

Wrapper.defaultProps = {
  theme: themeDefaults
}

const Label = styled.label`
  padding-left: 0;
  position: absolute;
  height: 1em;
  line-height: 1em;
	letter-spacing: 0.1rem;
  display: block;
  top: 0.9em;
  left: 0;
  z-index: 1;
  transition: all 0.15s;
  color: inherit;
  box-sizing: content-box;
	text-transform: uppercase;
  ${props =>
    props.populated == "focused"
      ? `
      font-size: 0.7em;
      line-height: 1;
      top: 0.5em;
      opacity: 0.8;
    `
      : ``};
`

Label.defaultProps = {
  theme: themeDefaults
}

const Field = styled.input`
  display: block;
  width: 100%;
  height: 1em;
  line-height: 1em;
  box-sizing: content-box;
  border: none;
  position: relative;
  z-index: 2;
  background-color: transparent;
  border-radius: 0;
  appearance: none;
  outline: none;
  padding: 1.2em 0 0 0;;
  color: inherit;
  cursor:pointer;

  > option {
    color: #000;
  }
`

Field.defaultProps = {
  theme: themeDefaults
}

const Select = Field.withComponent("select")

const Arrow = styled.div`
  position: absolute;
  top: 43%;
  right: 0.5em;
  z-index: 1;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0.375em 0.375em 0 0.375em;
  border-color: currentColor transparent transparent transparent;
`
const Checkbox = styled.label`
text-align:left;
display:block;
margin-top: 2rem;
text-transform: uppercase;

`
const Tick = styled.input`
	display:inline-block;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: none;
border: 1px solid #fff;

  border-radius: 0;
  margin-right: 1.8rem;
  -webkit-appearance: none;
  margin-top: 0.2rem;
  position: relative;
  top: 0.1rem;
  outline: 0;
	&:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: url("/images/tick.png");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: none;
}
&:checked {
  background: rgba(255,255,255,1);
	&:after {
  display: block;
}
}
}
`

export default Input
