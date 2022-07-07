import React from 'react'
import styled from 'styled-components'

interface Props {
  background?: string,
  color?: string
}

const Wrapper = styled.footer<Props>`
  display: flex;
  padding: 10px 48px;
  color: ${props => props.color || "black"};
  background: ${props => props.background || "white"};
  font-family: 'Sora', sans-serif;
  bottom:0;
  width: 100%;
  box-sizing: border-box;
`

const Footer = ({ background, color }: Props) => {
  return (
    <Wrapper color={color} background={background}>
      <p>Copyright &copy; 2022 Salman & Faza</p>
    </Wrapper>
  )
}

export default Footer