import React, { Fragment } from 'react'

import { useFeatures } from 'components/hook'

import {
  Text,
  ButtonSecondary,
  Image,
  Subhead,
  Box,
  Heading,
  Lead,
  Flex,
  Container,
  Link,
  Caps,
  Hide
} from 'components/elements'

import { Grid, PricingTable, Layout } from 'components/patterns'

import { List, ListItem } from 'components/patterns/List'

const Hero = () => (
  <Box as='article'>
    <Container as='header' py={5}>
      <Flex
        as='header'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        pb={[4, 5]}
      >
        <Heading mt={4} fontSize={7} children='Turn websites into data' />
        <Lead mt={[2, 3]} color='black50' textAlign='center' maxWidth={8}>
          Microlink makes easy build an API on top of any website.
        </Lead>
      </Flex>
    </Container>
  </Box>
)

const FAQ = () => (
  <Box as='article'>
    <Container as='header' py={5}>
      <Flex
        as='header'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        pb={[4, 5]}
      >
        <Heading mt={4} fontSize={7} children='Frequently Asked Questions' />
        <Lead mt={[2, 3]} color='black50' textAlign='center' maxWidth={8}>
          Your questions, answered
        </Lead>
      </Flex>
    </Container>
  </Box>
)

const Pricing = () => (
  <Box as='article' id='pricing'>
    <Container as='section' pt={5} pb={0}>
      <Flex
        as='header'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        pb={[4, 5]}
      >
        <Heading children='Pricing' />
        <Lead mt={[2, 3]} color='black50' children='Pay as you go.' />
      </Flex>
      <PricingTable />
    </Container>
  </Box>
)

const SDK = () => (
  <Box
    py={[4, 5]}
    bg='pinky'
    id='sdk'
    borderColor='pinkest'
    borderTop='1px solid'
    borderBottom='1px solid'
    as='article'
  >
    <Flex
      as='header'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Lead fontSize={1} color='secondary'>
        <Caps as='span'>SDK</Caps>
      </Lead>
      <Heading
        mt={1}
        fontSize={4}
        variant={null}
        children='Beautiful Links Previews'
      />
      <Container mt={4} px={6} textAlign='center'>
        <Text>
          <Link>Microlink SDK</Link> converts your links into rich media.
        </Text>
        <Text>Make your content attractive, engaging better your links.</Text>
      </Container>
    </Flex>
    <Flex
      pt={[4, 5]}
      as='section'
      justifyContent='center'
      alignItems='center'
      mx='auto'
    >
      <Flex
        maxWidth={['100%', '23em']}
        justifyContent='center'
        flexDirection='column'
      >
        <Text
          textAlign={['center', 'inherit']}
          maxWidth={['inherit', 8]}
          mt={[1, 3]}
          children='Engage your content with rich media.'
        />
        <List pl={[4, 0]} my={4}>
          <ListItem children='Add it to an existing website or app.' />
          <ListItem children='Auto detection (image, video, audio) with media controls support.' />
          <ListItem children='Lightweight build size.' />
        </List>
        <Box>
          <ButtonSecondary href='https://google.com'>
            <Caps fontSize={0}>See More</Caps>
          </ButtonSecondary>
        </Box>
      </Flex>
      <Box mx={4} />
      <Image src='https://i.imgur.com/iAmWh85.png' width={600} />
    </Flex>
  </Box>
)

const MQL = () => (
  <Box
    py={[4, 5]}
    as='article'
    id='mql'
    bg='pinky'
    borderColor='pinkest'
    borderTop='1px solid'
    borderBottom='1px solid'
  >
    <Flex
      as='header'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Lead fontSize={1} color='secondary'>
        <Caps>MQL</Caps>
      </Lead>
      <Heading
        mt={1}
        fontSize={4}
        variant={null}
        children='Cloud Data Automatization'
      />
      <Container mt={4} px={6} textAlign='center'>
        <Text>
          <Link>Microlink Query Language</Link> (MQL) is an interface for
          getting structured data.
        </Text>
        <Text>It converts any website, into your API.</Text>
      </Container>
    </Flex>
    <Flex
      pt={[4, 5]}
      as='section'
      justifyContent='center'
      alignItems='center'
      mx='auto'
    >
      <Flex
        maxWidth={['100%', '23em']}
        justifyContent='center'
        flexDirection='column'
      >
        <Text
          textAlign={['center', 'inherit']}
          maxWidth={['inherit', 8]}
          mt={[1, 3]}
          children='Extract structured data from any link.'
        />
        <List pl={[4, 0]} mt={4}>
          <ListItem children='Cloud browser automation.' />
          <ListItem children='Data driven rules definition.' />
          <ListItem children='Lightweight build size.' />
        </List>
        <Box>
          <ButtonSecondary href='https://google.com'>
            <Caps fontSize={0}>See More</Caps>
          </ButtonSecondary>
        </Box>
      </Flex>
      <Box mx={4} />
      <Image src='https://i.imgur.com/WzS35pw.png' width={650} />
    </Flex>
  </Box>
)

const Features = ({ children }) => (
  <Box as='article' id='features'>
    <Container as='section' py={5}>
      <Flex
        as='header'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        pb={[4, 5]}
      >
        <Heading children='Features' />
        <Lead
          mt={[2, 3]}
          color='black50'
          children='Capabilities under the hood.'
        />
      </Flex>
      <Hide breakpoints={[0, 1]}>
        <Grid children={children} itemsPerRow={3} />
      </Hide>
      <Hide breakpoints={[2, 3]}>
        <Grid children={children} itemsPerRow={1} />
      </Hide>
    </Container>
  </Box>
)

function Index () {
  return (
    <Layout>
      <Hero />
      <SDK />
      <Features children={useFeatures()} />
      <MQL />
      <Pricing />
      {/* <FAQ /> */}
    </Layout>
  )
}

export default Index
