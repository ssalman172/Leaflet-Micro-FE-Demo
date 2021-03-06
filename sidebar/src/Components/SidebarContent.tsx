import React, { useState } from 'react'
import styled from 'styled-components'
import Accordion from './Accordion'
import ToggleSwitch from './ToggleSwitch'
import PubSub from 'pubsub-js'

interface Props {
  currentSidebar: string,
  tileLayers?: Array<any>
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

const SidebarContent = ({ currentSidebar, tileLayers }: Props) => {
  const [currentLayer, setCurrentLayer] = useState<string>('StadiaAliadeSmoothDark');

  const handleChangeLayer = (layerName: string) => {
    setCurrentLayer(layerName);
    PubSub.publish('MAP_LAYER', layerName);
  }

  return (
    <>
      {(currentSidebar === 'layer1' && tileLayers) &&
        <div>
          <Accordion title='Layers'>
            <Form>
              {tileLayers.map((layer) => {
                return (
                  <FormItem key={layer.key}>
                    <FormItemLabel>{(layer.key).split(/(?=[A-Z])/).join(' ')}</FormItemLabel>
                    <ToggleSwitch onChange={() => handleChangeLayer(layer.key)} currentvalue={currentLayer} name={layer.key} />
                  </FormItem>
                )
              })
              }
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