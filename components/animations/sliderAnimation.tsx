import { Stage } from '@pixi/react'
import {
  Container,
  Sprite,
  Text,
  Graphics,
  withFilters,
  useTick
} from '@pixi/react-pixi'
import bg from '../../public/assets/imgs/home/gaulle.png'
import bg1 from '../../public/assets/imgs/home/gaulle-1.png'
import { useState } from 'react'

const SliderAnimation: any = () => {
  const [photoUrl, setPhotoUrl] = useState(bg.src)
  const [photoUrlOne, setPhotoUrlOne] = useState(bg1.src)

  const canvWidth = 400
  const canvHeight = 400

  return (
    <Stage width={canvWidth} height={canvHeight}>
      <Sprite x={0} width={canvWidth} height={canvHeight} image={photoUrlOne} />
    </Stage>
  )
}

export default SliderAnimation
