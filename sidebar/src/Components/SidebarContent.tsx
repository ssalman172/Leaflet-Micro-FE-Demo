import React, { useState } from 'react'
import styled from 'styled-components'
import Accordion from './Accordion'
import ToggleSwitch from './ToggleSwitch'
import PubSub from 'pubsub-js'

interface Props {
  currentSidebar: string
}

const Form = styled.form`
  margin: 24px 12px;
  text-align: left;
`

const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

const FormItemLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  max-width: 70%;
`

const SidebarContent = ({ currentSidebar }: Props) => {
  const [currentLayer, setCurrentLayer] = useState<string>('OpenStreetMap');

  const handleChangeLayer = (layerName: string) => {
    setCurrentLayer(layerName);
    PubSub.publish('MAP_LAYER', layerName);
  }

  return (
    <>
      {currentSidebar === 'layer1' &&
        <div>
          <Accordion title='Layers'>
            <Form>
              <FormItem>
                <FormItemLabel>OpenStreetMap</FormItemLabel>
                <ToggleSwitch onChange={() => handleChangeLayer('OpenStreetMap')} currentvalue={currentLayer} name='OpenStreetMap' />
              </FormItem>
              <FormItem>
                <FormItemLabel>Stadia Aliade Smooth Dark</FormItemLabel>
                <ToggleSwitch onChange={() => handleChangeLayer('StadiaAliadeSmoothDark')} currentvalue={currentLayer} name='StadiaAliadeSmoothDark' />
              </FormItem>
              <FormItem>
                <FormItemLabel>Esri Worldmagery</FormItemLabel>
                <ToggleSwitch onChange={() => handleChangeLayer('EsriWorldmagery')} currentvalue={currentLayer} name='EsriWorldmagery' />
              </FormItem>
            </Form>
          </Accordion>
        </div>
      }
      {currentSidebar === 'layer2' &&
        <div>
          <Accordion title='Gamma'>
          </Accordion>
        </div>
      }
      {currentSidebar === 'layer3' &&
        <div>
          <Accordion title='Alpha'>
          </Accordion>
        </div>
      }
    </>
  )
}

export default SidebarContent