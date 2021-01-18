import React, { FC, ReactNode } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

interface PageProps {
  children: ReactNode
}

const Page: FC<PageProps> = ({ children }) => {
  return <ScrollView contentContainerStyle={styles.page}>{children}</ScrollView>
}

export default Page

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
})
