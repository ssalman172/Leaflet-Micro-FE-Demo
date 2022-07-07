import React from 'react'
import styled from 'styled-components'
import Accordion from './Accordion'
import ToggleSwitch from './ToggleSwitch'


interface Props {
  currentSidebar: string
}

const Form = styled.form`
  margin: 0 12px;
`

const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

const FormItemLabel = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
`

const SidebarContent = ({currentSidebar}: Props) => {
  return (
    <>
      { currentSidebar === 'layer1' &&
        <Accordion title='Layers'>
          <Form>
            <FormItem>
              <FormItemLabel>Terrain</FormItemLabel>
              <ToggleSwitch name='terrain' />
            </FormItem>
            <FormItem>
              <FormItemLabel>Traffic</FormItemLabel>
              <ToggleSwitch name='traffic' />
            </FormItem>
            <FormItem>
              <FormItemLabel>Transit</FormItemLabel>
              <ToggleSwitch name='transit' />
            </FormItem>
          </Form>
        </Accordion>
      }
      { currentSidebar === 'layer2' &&
        <Accordion title='Gamma'>
        </Accordion>
      }
      { currentSidebar === 'layer3' &&
        <Accordion title='Alpha'>
        </Accordion>
      }
    </>
  )
}

export default SidebarContent