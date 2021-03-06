import { Flex } from '@chakra-ui/react'

import { NotificationsNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { Profile } from './Profile'
import { Logo } from './Logo'

export function Header() {
  return (
    <Flex 
      as="header" 
      w="100%" 
      maxWidth={1880} 
      h="20"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBox />
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}