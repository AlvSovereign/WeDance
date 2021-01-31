import React, { FC, useState } from 'react'
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
      css={{
        backgroundColor: DARKGREY_400,
        borderColor: DARKGREY_400,
        borderRadius: RADIUS_SM,
        height: '50px',
        justifyContent: 'flex-start',
        marginBottom: LINEAR_XS,
        paddingLeft: LINEAR_SM,
        paddingRight: LINEAR_SM,
        '&:hover': {
          backgroundColor: DARKGREY_300,
        },
      }}
      direction="row"
      isReady={!!track}
      loadingProps={{
        color: DARKGREY_100,
        style: { height: 50 },
        type: 'textRow',
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Box align="center">
        <Text
          css={{ marginRight: LINEAR_MD }}
          color="lightGrey"
          variant="trackCardPlays"
        >
          {trackNo}
        </Text>
        <Button
          css={{
            borderWidth: 0,
            height: '40px',
            margin: 0,
            position: 'relative',
            padding: 0,
            width: '40px',
          }}
          onClick={() => console.log('clicked')}
          variant="transparent"
        >
          {hovered ? (
            <PlayOutline
              css={{ cursor: 'pointer', position: 'absolute', zIndex: 9 }}
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
        </Button>
      </Box>
      <Box
        align="flex-start"
        css={{ flex: 1, height: '40px', paddingLeft: LINEAR_MD }}
        direction="column"
        justify="center"
      >
        <Button
          css={{
            justifyContent: 'flex-start',
            marginBottom: LINEAR_XXS,
            '&:hover': {
              p: {
                textDecoration: 'underline',
              },
            },
          }}
          onClick={onClickPlay}
          variant="link"
        >
          <Text
            as="p"
            color="white"
            css={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
            variant="trackCardTitle"
          >
            {title}
          </Text>
        </Button>
        {/* map array of artists here */}
        <Link href="/">
          <Text
            as="a"
            color="lightGrey"
            css={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline',
              },
            }}
            variant="trackCardTitle"
          >
            {'Artists array here'}
          </Text>
        </Link>
      </Box>
      <Box align="center">
        <Text component="span" color="lightGrey" variant="trackCardPlays">
          {plays}
        </Text>
        <Button
          css={{
            marginLeft: LINEAR_XS,
          }}
          leftIcon={{ fill: WHITE, icon: 'more' }}
          onClick={handleMoreClick}
          variant="transparent"
        />
      </Box>
    </Box>
  )
}

export default TrackCard
