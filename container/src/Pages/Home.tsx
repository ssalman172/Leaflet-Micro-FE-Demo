import React from 'react'
import styled from 'styled-components'
// @ts-ignore
const Sidebar = React.lazy(() => import("Sidebar/Sidebar"));
// @ts-ignore
const LeafletMap = React.lazy(() => import("LeafletMap/LeafletMap"));

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Content = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Sidebar />
          <LeafletMap />
        </Content>
      </Wrapper>
    </>
  )
}

export default Home