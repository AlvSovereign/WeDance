import React, { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { ITheme } from 'components/src/hooks/useAppTheme'

interface PageProps {
  backgroundImage?: string
  children: ReactNode
  className: string
}

const Page: FC<PageProps> = ({ backgroundImage, children, className }) => {
  return (
    <div className={className}>
      {backgroundImage ? (
        <div className="img-container">
          <Image
            alt="Background Image"
            objectFit="cover"
            layout="fill"
            src={backgroundImage}
          />
        </div>
      ) : null}
      {children}
    </div>
  )
}

const StyledPage = styled((props: any) => <Page {...props} />)`
  ${({
    backgroundImage,
    theme,
  }: {
    backgroundImage: string
    theme: ITheme
  }) => ({
    backgroundColor: backgroundImage ? 'none' : theme.BACKGROUND,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    zIndex: 0,
    '.img-container': {
      zIndex: backgroundImage ? -1 : 0,
    },
  })}
`

export default StyledPage
