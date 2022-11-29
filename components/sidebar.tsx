import NextImage from 'next/image'
import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/layout'
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
} from 'react-icons/md'

const navMenu = [
    {
      name: 'Home',
      icon: MdHome,
      route: '/',
    },
    {
      name: 'Search',
      icon: MdSearch,
      route: '/search',
    },
    {
      name: 'Your Library',
      icon: MdLibraryMusic,
      route: '/library',
    },
]
  
const SideBar = () => {
    return (
    <Box
        width="100%"
        height="calc(100vh - 100px)"
        bg="black"
        paddingX="5px"
        color="gray"
      >
        <Box paddingY="20px" height="100%">
          <Box width="120px" marginBottom="20px" paddingX="20px">
            <NextImage src="/yossify.svg" height={60} width={120} />
          </Box>
        </Box>
    </Box>
    )
}

export default SideBar
