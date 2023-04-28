import { Heading, Text } from '@guizioliveira/ignite-ui-react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '@/assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size={'4xl'}>Agendamento descomplicado</Heading>
        <Text size={'xl'}>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          alt={'App image preview'}
          height={442}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
