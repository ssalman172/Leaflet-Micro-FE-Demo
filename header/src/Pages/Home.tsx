import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'

const Wrapper = styled.main`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const TextParagraph = styled.p`
  font-size: 4.5rem;
  line-height: 1;
`

const TextSpan = styled.span`
  color: #61dafb;
`
const TextLink = styled.a`
  color: #61dafb;
  margin-top: 1.25rem;

  &:hover {
    text-decoration-line: underline;
  }
`

const Home = () => {
  return (
    <>
      <Wrapper>
        <TextParagraph>
          This is a <TextSpan>boilerplate</TextSpan> for module federation
        </TextParagraph>
        <TextLink
          href="https://webpack.js.org/concepts/module-federation/"
          target="_blank"
        >
          Learn Module Federation
        </TextLink>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Home