import { FC, useState } from 'react'
import { useTheme } from '@emotion/react'
import Image from 'next/image'
import { Track } from 'components/src/graphql/types'
import { CoverImage } from 'components/src/assets'
import { PlayOutline } from 'components/src/assets/icons'
import { Box, Button, Text } from '../../..'

interface TrackCardProps {
  trackNo: string
  track: Track
}

const TrackCard: FC<TrackCardProps> = ({ trackNo, track }) => {
  const [hovered, setHover] = useState<boolean>(false)
  const theme = useTheme()
  const {
    DARKGREY_300,
    DARKGREY_400,
    LINEAR_MD,
    LINEAR_SM,
    LINEAR_XS,
    RADIUS_SM,
    WHITE,
  } = theme
  const { plays, title } = track

  const handleMoreClick = () => {
    console.log('clicked@@@')
  }

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <Box
      align="center"
      css={{
        backgroundColor: DARKGREY_400,
        borderColor: DARKGREY_400,
        borderRadius: RADIUS_SM,
        height: '50px',
        justifyContent: 'space-between',
        marginBottom: LINEAR_XS,
        paddingLeft: LINEAR_SM,
        paddingRight: LINEAR_SM,
        '&:hover': {
          backgroundColor: DARKGREY_300,
          '.title': {
            textDecoration: 'underline',
          },
        },
      }}
      direction="row"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Box align="center">
        <Text
          css={{ marginRight: LINEAR_MD }}
          color="lightGrey"
          variant="button"
        >
          {trackNo}
        </Text>
        <div
          css={{
            height: '40px',
            position: 'relative',
            width: '40px',
          }}
        >
          {hovered ? (
            <PlayOutline
              css={{ position: 'absolute', zIndex: 9 }}
              fill={WHITE}
              height="40px"
              width="40px"
            />
          ) : null}
          <Image
            css={{ borderRadius: RADIUS_SM }}
            src={CoverImage}
            height={40}
            width={40}
          />
        </div>
      </Box>
      <Text className="title" color="white" variant="trackCard">
        {title}
      </Text>
      <Box align="center">
        <Text color="white" variant="trackCard">
          {plays}
        </Text>
        <Button
          css={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            paddingRight: 0,
            width: 'auto',
          }}
          leftIcon={{ fill: WHITE, icon: 'more' }}
          onClick={handleMoreClick}
        />
      </Box>
    </Box>
  )
}

export default TrackCard
