import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { Page } from '../../components'

interface MusicHomeProps {}

const MusicHome: FC<MusicHomeProps> = ({}) => {
  const { t } = useTranslation(['music'])

  return <Page>div</Page>
}

export default MusicHome
