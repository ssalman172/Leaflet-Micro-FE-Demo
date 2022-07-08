import React from 'react'
import styled from 'styled-components'

interface Props {
  name: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  currentvalue?: string,
}

const Wrapper = styled.div`
  display: flex;
`

const Input = styled.input`
  height: 0;
	width: 0;
	visibility: hidden;

  &:checked + label {
    background: #548CA8;
  }

  &:checked + label:after {
	left: calc(100% - 0px);
	transform: translateX(-100%);
}
`

const Label = styled.label`
  cursor: pointer;
	text-indent: -9999px;
	width: 40px;
	height: 20px;
	background: #334257;
	display: block;
	border-radius: 100px;
	position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  &:active:after {
	  width: 25px;
  }
`

const ToggleSwitch = ({name, onChange, currentvalue}: Props) => {
  return (
    <Wrapper>
      <Input type="checkbox" checked={name === currentvalue} onChange={onChange} id={name} />
      <Label htmlFor={name}></Label>
    </Wrapper>
  )
}

export default ToggleSwitch