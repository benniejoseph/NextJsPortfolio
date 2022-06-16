import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/projects/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/projects/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/projects/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/projects/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/projects/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/projects/styly_eyecatch.png'
import thumbPichu2 from '../public/images/projects/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/projects/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/projects/amembo_eyecatch.png'

const Projects = () => (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
  
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="walknote"
              title="walknote"
              thumbnail={thumbWalknote}
            >
              Music recommendation app for iOS
            </ProjectGridItem>
          </Section>
  
          <Section delay={0.1}>
            <ProjectGridItem
              id="fourpainters"
              title="The four painters"
              thumbnail={thumbFourPainters}
            >
              A video Project generated with deep learning, imitating famous four
              painters like Van Gogh
            </ProjectGridItem>
          </Section>
          <Section delay={0.1}>
            <ProjectGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
              An app that suggests ramen(noodle) shops based on a given photo of
              the ramen you want to eat
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
  
        <Section delay={0.2}>
          <Divider my={6} />
  
          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>
  
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem
              id="modetokyo"
              thumbnail={thumbModeTokyo}
              title="mode.tokyo"
            >
              The mode magazine for understanding to personally enjoy Japan
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem id="styly" thumbnail={thumbStyly} title="Styly">
              A VR Creative tools for fashion brands
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
  
        <Section delay={0.4}>
          <Divider my={6} />
  
          <Heading as="h3" fontSize={20} mb={4}>
            Old Projects
          </Heading>
        </Section>
  
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <ProjectGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
              Twitter client app for iPhone Safari
            </ProjectGridItem>
          </Section>
          <Section delay={0.5}>
            <ProjectGridItem
              id="freedbtagger"
              thumbnail={thumbFreeDBTagger}
              title="freeDBTagger"
            >
              Automatic audio file tagging tool using FreeDB for Windows
            </ProjectGridItem>
          </Section>
          <Section delay={0.6}>
            <ProjectGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
              P2P private file sharing tool with MSN Messenger integration for
              Windows
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Projects