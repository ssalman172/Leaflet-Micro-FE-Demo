import React from 'react'
import styled from 'styled-components'

interface Props {
  color?: string
}

const Wrapper = styled.header`
  width: 100%;
  top: 0;
  font-family: 'Sora', sans-serif;
  background: rgba(22, 30, 46, 0.08);
  border-bottom: 1px solid rgba(22, 30, 46, 0.6);
`

const Nav = styled.nav<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 48px 0 48px;
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
const HeaderTitle = styled.h1`
  cursor: default;
`

const NavText = styled.h4`
  border-radius: 5px;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(22, 30, 46, 0.45);
  &:hover {
    background: #161e2e;
    cursor: pointer;
  }
`

const Header = ({ color }: Props) => {
  return (
    <Wrapper>
      <Nav color={color}>
        <HeaderTitle>
          Leaflet Federation
        </HeaderTitle>
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