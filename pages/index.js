import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, List, ListItem, Icon } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import {
    IoLogoLinkedin,
    IoLogoInstagram,
    IoLogoGithub,
  } from 'react-icons/io5'


const Page = () => {
    return (
    <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} textAlign="center">
                Hello, I&apos;m a full-stack developer based in India!
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Bennie J Richard
                    </Heading>
                    <p> Salesforce Application Architect</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                    >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/bennie.jpg"
                        alt="Profile image"
                    />
                </Box>
            </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Projects
            </Heading>
            <Paragraph> Bennie is a freelance and a full-stack developer based in Bengaluru with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '} 
          <NextLink href="/projects/inkdrop"><Link>Inkdrop</Link></NextLink>.
          </Paragraph>
          <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
        </Section>

        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in Tamilnadu , India.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Completed the Bachelor&apos;s Program Computer Science &amp; Engineering in Karunya University
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Worked at Accenture as a Salesforce Developer
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Working in Deloitte as a Salesforce Consultant
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music, Playing Bass/Acoustic Guitar/Piano, Photography, Bike Riding, Machine Learning
        </Paragraph>
      </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/benniejoseph" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @benniejoseph
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/benniejosephrichard/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @benniejosephrichard
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/josephbennie" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @josephbennie
              </Button>
            </Link>
          </ListItem>
        </List>

       

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>

        </Container>
    </Layout>
    )
}

export default Page 