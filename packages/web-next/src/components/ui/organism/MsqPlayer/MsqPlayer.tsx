import React, { FC } from 'react'
import { useMsqPlayer } from '../../../../pages/hooks'

interface MsqPlayerProps {}

const playlist = [
  {
    _id: '1',
    id: '',
    createdAt: '',
    performedBy: ['DJ Omni'],
    filename: 'HOLIJONE - Florinda.mp3',
    title: 'Florinda',
    duration: 183.7714375,
    url: '/tracks/HOLIJONE-Florinda.mp3',
  },
  {
    _id: '2',
    id: '',
    createdAt: '',
    performedBy: ['DJ Omni'],
    filename: 'Make you feel (JB Urban Zouk Rmx).mp3',
    title: 'Make you feel (JB Urban Zouk Rmx)',
    duration: 187.062875,
    url: '/tracks/Make_you_feel_(JB_Urban_Zouk_Rmx).mp3',
  },
]

const MsqPlayer: FC<MsqPlayerProps> = () => {
  const {
    duration,
    isPlaying,
    isReady,
    pause,
    play,
    skip,
    stop,
  } = useMsqPlayer(playlist)

  const handleClick = () => {
    play()
  }

  return (
    <aside
      css={{
        backgroundColor: 'gold',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      Player Here
      <button onClick={() => play()} type="button">
        Play
      </button>
      {duration}
      {`isPlaying: ${isPlaying}`}
      <button onClick={() => pause()}>Pause</button>
      <button onClick={() => stop()}>Stop</button>
      <button onClick={() => skip('prev')}>Prev</button>
      <button onClick={() => skip('next')}>Next</button>
    </aside>
  )
}

export default MsqPlayer
