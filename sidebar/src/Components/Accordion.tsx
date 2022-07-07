import React, { useState } from 'react'
import styled from 'styled-components'
import { IoChevronDownOutline } from 'react-icons/io5'

interface Props {
  title: string,
  children: React.ReactNode
}

interface AccordionButtonProps {
  isActive: boolean
}

const AccordionTitle = styled.div<AccordionButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid white;
  font-size: 1.5rem;

  p {
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-radius: 9999px;
    transform: ${(NavItemProps) => NavItemProps.isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.2s linear;

    &:hover {
      background: #161e2e;
      cursor: pointer;
    }
  }
`

const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
  background: #161e2e;
`

const Accordion = ({ title, children }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleAccordionActive = () => {
    setIsActive((previous) => !previous);
  }

  return (
    <>
      <AccordionTitle isActive={ isActive }>
        <p>{title}</p>
        <div onClick={() => handleAccordionActive()}>
          <IoChevronDownOutline />
        </div>
      </AccordionTitle>
      { isActive &&
        <AccordionContent>
          {children}
        </AccordionContent>
      }
    </>
  )
}

export default Accordion