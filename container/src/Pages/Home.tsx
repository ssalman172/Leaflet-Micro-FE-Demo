import React from 'react'
import styled from 'styled-components'
// @ts-ignore
const Sidebar = React.lazy(() => import("Sidebar/Sidebar"));
// @ts-ignore
const LeafletMap = React.lazy(() => import("LeafletMap/LeafletMap"));

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin-top: 8rem;
`

const Home = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <LeafletMap />
      </Wrapper>
    </>
  )
}

export default Home