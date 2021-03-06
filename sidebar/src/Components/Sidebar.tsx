import React, { useState } from 'react'
import styled from 'styled-components'
import {
  IoLayersOutline,
  IoMapOutline,
  IoChevronForwardCircleOutline,
  IoLayersSharp,
  IoLayers,
} from "react-icons/io5";
import SidebarContent from './SidebarContent';

interface Props {
  tileLayers?: Array<any>
}

interface NavItemProps {
  isActive?: boolean
  name: string
  currentSidebar: string
}

interface SidebarProps {
  isToggled: boolean
}

const Wrapper = styled.div`
  display: flex;
  font-family: 'Sora', sans-serif;
  background: #252f3f;
  color: white;
  min-height: 80vh;
  width: max-content;
  margin-left: 0px;
  border-radius: 12px 0 0 12px;
  user-select: none;
`

const WrapperLeft = styled.div`
  width: 60px;
  border-right: 1px solid #161e2e;
  position: relative;
`

const WrapperRight = styled.div<SidebarProps>`
  width: ${(props) => props.isToggled ? '240px' : '0'};
  transition: width 0.2s linear;
`

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
`

const NavigationList = styled.nav`
  margin-top: 3rem;
`

const NavigationListItem = styled.div<NavItemProps>`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding: 12px;
  margin: 12px 0;
  border-radius: 12px;
  background: ${NavItemProps => NavItemProps.name === NavItemProps.currentSidebar ? "#161e2e" : "none"};

  &:hover {
    background: #161e2e;
    cursor: pointer;
  }
`

const Logo = styled.div`
  font-size: 3rem;
`

const CloseButton = styled.div<SidebarProps>`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding: 12px;
  margin: 12px 0;
  border-radius: 9999px;
  transform: ${(NavItemProps) => NavItemProps.isToggled ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s linear;

  &:hover {
    background: #161e2e;
  }
`

const Sidebar = ({ tileLayers }: Props) => {
  const tiles = tileLayers;
  const [currentSidebar, setCurrentSidebar] = useState<string>('layer1');
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);

  const handleOnClick = (name: string) => {
    setCurrentSidebar(name);
  }

  const handleToggleSidebar = () => {
    setSidebarToggle((previous) => !previous);
  }

  return (
    <Wrapper>
      <WrapperLeft>
        <div></div>
        <ContentLeft>
          <Logo>
            <IoMapOutline />
          </Logo>
          <NavigationList>
            <NavigationListItem name='layer1' currentSidebar={currentSidebar} onClick={() => handleOnClick('layer1')}>
              <IoLayersOutline />
            </NavigationListItem>
            <NavigationListItem name='layer2' currentSidebar={currentSidebar} onClick={() => handleOnClick('layer2')}>
              <IoLayers />
            </NavigationListItem>
            <NavigationListItem name='layer3' currentSidebar={currentSidebar} onClick={() => handleOnClick('layer3')}>
              <IoLayers />
            </NavigationListItem>
          </NavigationList>
          <CloseButton isToggled={sidebarToggle} onClick={() => handleToggleSidebar()}>
            <IoChevronForwardCircleOutline />
          </CloseButton>
        </ContentLeft>
      </WrapperLeft>
      <WrapperRight isToggled={sidebarToggle}>
        <SidebarContent currentSidebar={currentSidebar} tileLayers={tiles} />
      </WrapperRight>
    </Wrapper>
  )
}

export default Sidebar