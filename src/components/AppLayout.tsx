import { Box, Flex } from "@chakra-ui/layout"
import { useBreakpointValue, useDisclosure, useMediaQuery } from "@chakra-ui/react"
import Head from "next/head"
import { DEFAULT_TITLE } from "../constants/title"
import { Navbar } from "../ui/Navbar/Nav"
// import { Sidebar } from "./sidenav/Sidebar"
type Props = {
  children: React.ReactNode
  showSidebar?: boolean
  title?: string
}

export default function AppLayout({ children, showSidebar = false, title = DEFAULT_TITLE }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery("(max-width: 48em)")

  // Always enable sidebar on mobile
  if (isMobile) {
    showSidebar = true
  }

 


  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* <Sidebar showSidebar={showSidebar} isOpen={isOpen} onOpen={onOpen} onClose={onClose}> */}
        <Flex
        backgroundColor = "#004217"
        backgroundImage= "url('https://www.transparenttextures.com/patterns/blizzard.png')"
        /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
        // backgroundColor="white"
        padding="2rem"
        borderRadius="0.5rem" direction="column" minH="100vh" w="100vw">
          <Navbar onOpen={onOpen} />
          <Flex  flexGrow={1}>
            <Box
              w="100%"
              p={showSidebar ? "1rem" : 0}
              paddingTop={{ base: "60px", md: "90px" }}
              position="relative"
            >
              {children}
            </Box>
          </Flex>
        </Flex>
      {/* </Sidebar> */}
    </>
  )
}
