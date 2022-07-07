import React from 'react'
import styled from 'styled-components'
// @ts-ignore
const Sidebar = React.lazy(() => import("Sidebar/Sidebar"));

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`


const Content = styled.div`
  margin-top: 8rem;
`

const Home = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Sidebar />
        </Content>
      </Wrapper>
    </>
  )
}

export default Home