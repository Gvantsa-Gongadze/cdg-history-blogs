import { Stage, Sprite } from '@pixi/react'
import {
  Container,
  Text,
  Graphics,
  withFilters,
  useTick
} from '@pixi/react-pixi'
import bg from '../../public/assets/imgs/home/gaulle.png'
import bg1 from '../../public/assets/imgs/home/gaulle-1.png'
import bg2 from '../../public/assets/imgs/home/gaulle-2.png'
import { Ref, useRef } from 'react'
import { gsap } from 'gsap'

const SliderAnimation: any = () => {
  const canvWidth = 400
  const canvHeight = 400

  const pictureOne: Ref<any> = useRef()
  const pictureTwo: Ref<any> = useRef()
  const pictureThree: Ref<any> = useRef()

  const updateImgView = () => {
    if (!pictureTwo.current) return
    let delay = 3
    let tl = gsap.timeline({ repeat: -1, delay: 2 })
    tl.fromTo(
      pictureOne.current,
      delay,
      { x: canvWidth },
      {
        x: 0
      }
    )
      .fromTo(
        pictureTwo.current,
        delay,
        { x: canvWidth },
        {
          x: 0
        }
      )
      .fromTo(
        pictureThree.current,
        delay,
        { x: canvWidth },
        {
          x: 0
        }
      )
      .fromTo(
        pictureOne.current,
        0.4,
        { x: canvWidth },
        {
          x: 0
        }
      )
  }

  setTimeout(() => {
    updateImgView()
  }, 100)

  return (
    <Stage width={canvWidth} height={canvHeight}>
      <Sprite x={0} width={canvWidth} height={canvHeight} image={bg2.src} />
      <Sprite
        ref={pictureOne}
        x={0}
        width={canvWidth}
        height={canvHeight}
        image={bg1.src}
      />
      <Sprite
        ref={pictureTwo}
        width={canvWidth}
        height={canvHeight}
        image={bg.src}
      />
      <Sprite
        ref={pictureThree}
        width={canvWidth}
        height={canvHeight}
        image={bg2.src}
      />
    </Stage>
  )
}

export default SliderAnimation
