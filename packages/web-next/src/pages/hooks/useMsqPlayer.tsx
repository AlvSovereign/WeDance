import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Howl, Howler } from 'howler'
import { Track } from 'components/src/graphql/types'
// import useInterval from './useInterval'

// A React Hook extending `useSound` hook to include playlist functionality with custom audio player.
// Conceptually there are 2 drivers for this player: the Playlist and the Player (Howler.js). This Hook
// hook will return what is playing (i.e. currentTrack from Playlist) and controls/state of the player.
const useMsqPlayer = (
  playlist: Track[],
  { onload, ...delegated }: HookOptions = {},
) => {
  const HowlConstructor = useRef<any | null>(null)
  const currentTrack = useRef<TrackWithHowl | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isReady, setIsReady] = useState<boolean>(false)
  const [seekTime, setSeekTime] = useState<any>(0)

  currentTrack.current?.sound.once('end', () => setIsPlaying(false))
  currentTrack.current?.sound.once('load', () => setIsReady(true))
  currentTrack.current?.sound.once('play', () => setIsPlaying(true))
  currentTrack.current?.sound.once('pause', () => setIsPlaying(false))
  currentTrack.current?.sound.once('stop', () => setIsPlaying(false))

  // Set up playlist
  const [soundPlaylist, setSoundPlaylist] = useState<TrackWithHowl[]>([])
  const [playlistIndex, setPlaylistIndex] = useState<number>(0)
  console.log('playlistIndex: ', playlistIndex)
  const [duration, setDuration] = useState<number>()
  const [volume, setVolume] = useState<any>(1)

  // When a playlist `Track[]` is added, map it and return each track wrapped with a 'howl'
  React.useEffect(() => {
    HowlConstructor.current = Howl

    const howlTracks: TrackWithHowl[] = playlist.map((track: Track) => {
      return {
        ...track,
        sound: new HowlConstructor.current!({
          html5: true,
          src: [track.url],
          volume,
          ...delegated,
        }),
      }
    })

    // then set it to state
    setSoundPlaylist(howlTracks)

    // set playlist index to the start of the playlist
    setPlaylistIndex(0)

    currentTrack.current = howlTracks[0]

    return () => {
      HowlConstructor.current = undefined
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlist])

  // Play the sound
  // const [isPlaying, setIsPlaying] = useState(false)

  const play: PlayerFunction = useCallback(() => {
    // if the current track is playing then do not play another track
    if (isPlaying) {
      return
    }

    setDuration(currentTrack.current?.sound.duration())

    currentTrack.current?.sound.play()
  }, [isPlaying])

  // Pause the sound
  const pause: PlayerFunction = () => {
    if (!currentTrack.current) {
      return
    }

    currentTrack.current.sound.pause()
  }

  // Skip to prev/next track
  const skip = (direction: SkipDirection) => {
    // if next track doesn't exist then return
    if (direction === 'next' && playlistIndex + 1 === playlist.length) {
      return
    }

    // first stop the current sound
    if (isPlaying) {
      currentTrack.current?.sound.stop()
    }

    if (direction === 'prev') {
      if (seekTime < 3) {
        // if seek is less that 3 secs, then skip to previous track, IF there
        // is one
        if (playlistIndex - 1 !== -1) {
          setPlaylistIndex(() => playlistIndex - 1)
        } else {
          // ELSE restart the track
          currentTrack.current?.sound.seek(0)
          currentTrack.current?.sound.play()
        }
      } else {
        // ELSE restart the track
        currentTrack.current?.sound.seek(0)
        currentTrack.current?.sound.play()
      }
    } else {
      // skip to next track
      currentTrack.current?.sound.on('stop', () => {
        console.log(111)
        setPlaylistIndex(playlistIndex + 1)
        // currentTrack.current = soundPlaylist[playlistIndex + 1]
        // play()
      })
    }
  }

  // we need to make sure that the sound is played AFTER playlistIndex has changed.
  // The easiest way to guarentee this is to set up this useEffect
  useEffect(() => {
    currentTrack.current = soundPlaylist[playlistIndex]
    play()
  }, [playlistIndex, soundPlaylist])

  // Display Seek Position
  // const seekCallback = () => {
  //   const currentTrack = soundPlaylist[playlistIndex]
  //   const currentSeek = currentTrack.sound.seek()
  //   setSeekTime(currentSeek)
  // }
  // const delay = 1000
  // useInterval(seekCallback, delay)

  //Seek though the sound
  // const seekTo = (percentage: number) => {
  //   // use horizontal position as percentage to seek to that point in the track
  //   soundPlaylist[playlistIndex].sound.seek(
  //     soundPlaylist[playlistIndex].duration * percentage,
  //   )
  // }

  // const volumeTo = (percentage: number) => {
  //   // use horizontal position as percentage to seek to that point in the track
  //   soundPlaylist[playlistIndex].sound.volume(percentage)
  //   setVolume(percentage)
  // }

  // // Whenever volume is changed, change those properties
  // // on the sound instance.
  // React.useEffect(() => {
  //   if (soundPlaylist[playlistIndex]) {
  //     soundPlaylist[playlistIndex].sound.volume(volume);
  //   }

  //   // A weird bug means that including the `sound` here can trigger an
  //   // error on unmount, where the state loses track of the sprites??
  //   // No idea, but anyway I don't need to re-run this if only the `sound`
  //   // changes.
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [volume]);

  const stop: PlayerFunction = () => {
    if (!currentTrack.current) {
      return
    }

    currentTrack.current.sound.stop()
  }

  return {
    duration,
    // performedBy: null,
    // title: null,
    isReady,
    isPlaying,
    pause,
    play,
    seekTime,
    // seekTo,
    skip,
    stop,
    // volume,
    // volumeTo,
    // playlist controls which are methods wrapping Howler.js
  }
}

export default useMsqPlayer

interface TrackWithHowl extends Track {
  sound: Howl
}

export interface HookOptions {
  volume?: number
  interrupt?: boolean
  soundEnabled?: boolean
  sprite?: SpriteMap
  onload?: () => void
}

export type SpriteMap = {
  [key: string]: [number, number]
}

type PlayerFunction = () => void
type SkipDirection = 'next' | 'prev'

export interface Props {
  duration: number
  isPlaying: boolean
  isReady: boolean
  pause: PlayerFunction
  play: PlayerFunction
  seekTime: number
  // seekTo: (percentage: number) => void
  stop: PlayerFunction
  skip: (direction: SkipDirection) => void
  // volume: number
  // volumeTo: (percentage: number) => void
}
