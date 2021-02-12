import { FC, useState } from 'react'
import xw from 'xwind'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@emotion/react'
import { Track } from 'components/src/graphql/types'
import { CoverImage } from 'components/src/assets'
import { PlayOutline } from 'components/src/assets/icons'
import { Box, Button, Text } from '../../..'

interface TrackCardProps {
  onClickPlay: () => void
  trackNo: string
  track: Track
}

const TrackCard: FC<TrackCardProps> = ({ onClickPlay, trackNo, track }) => {
  const [hovered, setHover] = useState<boolean>(false)
  const theme = useTheme() as ITheme
  const {
    DARKGREY_100,
    DARKGREY_300,
    DARKGREY_400,
    LINEAR_MD,
    LINEAR_SM,
    LINEAR_XS,
    LINEAR_XXS,
    RADIUS_SM,
    WHITE,
  } = theme
  const { plays, title } = track

  const handleMoreClick = () => {}

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <Box
      align="center"
      css={xw`bg-black rounded h-14 mb-2 px-3 hover:bg-gray-800 cursor-pointer transform-gpu active:scale-98`}
      direction="row"
      isReady={!!track}
      justify="flex-start"
      loadingProps={{
        color: DARKGREY_100,
        style: { height: 50 },
        type: 'textRow',
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Box align="center">
        <Text css={xw`mr-4`} color="gray" variant="trackCardPlays">
          {trackNo}
        </Text>
        <Button
          css={xw`h-10 m-0 relative p-0 w-10`}
          onClick={() => console.log('clicked')}
          variant="transparent"
        >
          {hovered ? (
            <PlayOutline
              css={xw`cursor-pointer h-10 w-10 absolute z-10 fill-current text-white`}
            />
          ) : null}
          <Image css={xw`rounded`} src={CoverImage} height={40} width={40} />
        </Button>
      </Box>
      <Box
        align="flex-start"
        css={xw`flex-1 h-10 pl-4`}
        direction="column"
        justify="center"
      >
        <Button
          css={xw`px-2 justify-start w-full active:scale-100`}
          onClick={onClickPlay}
          variant="link"
        >
          <Text
            color="white"
            component="p"
            css={xw`truncate overflow-ellipsis whitespace-nowrap`}
            variant="trackCardTitle"
          >
            {title}
          </Text>
        </Button>
        <Link href="/">
          <Text
            component="a"
            color="gray"
            css={xw`truncate overflow-ellipsis whitespace-nowrap`}
            variant="body1"
          >
            Artists array here
          </Text>
        </Link>
      </Box>
      <Box align="center">
        <Text component="span" color="gray" variant="trackCardPlays">
          {plays}
        </Text>
        <Button
          css={xw`ml-2 px-2`}
          icon={{ textColor: 'white', iconKey: 'more', position: 'right' }}
          onClick={handleMoreClick}
          variant="transparent"
        />
      </Box>
    </Box>
  )
}

export default TrackCard
