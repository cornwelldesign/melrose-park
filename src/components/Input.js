import React from "react"
import styled, { css } from "styled-components"
import { below } from "../style/functions"

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
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        )
      })
    }
    return (
      <Wrapper>
        <Label
          htmlFor={this.props.name}
          populated={this.state.fieldStatus}
          ref="label"
        >
          {this.props.label}
        </Label>
        {type != "select" ? (
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
        ) : (
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
      </Wrapper>
    )
  }
}

const themeDefaults = {
  color: "#000",
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
  color: inherit;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
	${below.mobile`
		height: 3.5em;
	`}
`

Wrapper.defaultProps = {
  theme: themeDefaults
}

const Label = styled.label`
  padding-left: ${props => props.theme.paddingLeft};
  position: absolute;
  height: 1em;
  line-height: 1em;
  display: block;
  top: 0.9em;
  left: 0;
  z-index: 1;
  transition: all 0.05s;
  color: inherit;
  box-sizing: content-box;
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
  padding: 1.2em 0 0.25em;
  padding-left: ${props => props.theme.paddingLeft};
  color: inherit;

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

export default Input
