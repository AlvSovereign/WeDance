import { FC, ReactNode } from 'react'
import xw from 'xwind'
import Image from 'next/image'

interface PageProps {
  backgroundImage?: string
  children: ReactNode
  className?: string
}

const Page: FC<PageProps> = ({ backgroundImage, children, className }) => {
  return (
    <div
      css={xw`flex flex-col flex-1 h-screen w-full bg-white z-0`}
      className={className}
    >
      {backgroundImage ? (
        <div css={xw`-z-1`}>
          <Image
            alt="Background Image"
            objectFit="cover"
            layout="fill"
            priority
            src={backgroundImage}
          />
        </div>
      ) : null}
      {children}
    </div>
  )
}

export default Page
