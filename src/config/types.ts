import {ImageSourcePropType} from 'react-native'

export interface galleryProps {
  id: string
  name: string
  type: string
  era: string
  description: string
  location: string
  images: ImageSourcePropType[],
  category:string
  
}