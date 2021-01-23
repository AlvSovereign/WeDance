import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { ITheme } from 'components/src/hooks/useAppTheme'

interface PageProps {
  backgroundImage?: string
  children: ReactNode
  className: string
}

const Page: FC<PageProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

const StyledPage = styled((props: any) => <Page {...props} />)`
  ${({
    backgroundImage,
    theme,
  }: {
    backgroundImage: string
    theme: ITheme
  }) => ({
    backgroundColor: backgroundImage ? 'none' : theme.LIGHT_BLUE,
    backgroundImage: `url(${backgroundImage}) ` || 'none',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
  })}
`

export default StyledPage
