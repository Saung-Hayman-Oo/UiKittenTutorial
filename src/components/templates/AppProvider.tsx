import React from 'react'
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import {EvaIconsPack} from '@ui-kitten/eva-icons'
import { customMapping } from '../../config/mapping'

export const AppProvider: React.FC = ({children}) => {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider customMapping={customMapping} {...eva} theme={eva['light']}>
        {children}
      </ApplicationProvider>
    </React.Fragment>
  )
}
