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
import { Ref, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Sprite as SpriteType } from 'pixi.js'

const SliderAnimation: any = () => {
  const canvWidth = 400
  const canvHeight = 400

  const pictureOne: Ref<SpriteType> = useRef(null)
  const pictureTwo: Ref<SpriteType> = useRef(null)
  const pictureThree: Ref<SpriteType> = useRef(null)

  useLayoutEffect(() => {
    if (!pictureOne.current || !pictureTwo.current || !pictureThree.current)
      return

    const duration = 3
    const tl = gsap.timeline({ repeat: -1, delay: 3 })

    const timeout = setTimeout(() => {
      tl.fromTo(
        pictureOne.current,
        duration,
        { x: canvWidth },
        {
          x: 0
        }
      )
        .fromTo(
          pictureTwo.current,
          duration,
          { x: canvWidth },
          {
            x: 0
          }
        )
        .fromTo(
          pictureThree.current,
          duration,
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
    }, 100)

    return () => {
      clearTimeout(timeout)
      tl.clear()
    }
  }, [pictureOne])

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
