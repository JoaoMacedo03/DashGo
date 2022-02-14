import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>João Macedo</Text>
        <Text color="gray.300" fontSize="small">
          joaovictormacedo91@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="João Macedo" />
    </Flex>
  )
}