import React from 'react'
import styled from 'styled-components'

interface Props {
  color?: string
}

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  font-family: 'Sora', sans-serif;
`

const Nav = styled.nav<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 48px 0 48px;
  color: ${props => props.color || "white"};
  font-size: 19px;
  line-height: 24px;
`

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const List = styled.li`
  text-decoration: none;
`

const NavText = styled.h4`

`

const Header = ({color}: Props) => {
  return (
    <Wrapper>
      <Nav color={color}>
        <NavText>
          Leaflet Federation
        </NavText>
        <div>
          <UnorderedList>
            <List>
              <NavText>About</NavText>
            </List>
          </UnorderedList>
        </div>
      </Nav>
    </Wrapper>
  )
}

export default Header