import { useRouter } from 'next/router'
import {
  Button,
  Heading,
  MultiStep,
  Text,
} from '@guizioliveira/ignite-ui-react'
import { signIn, useSession } from 'next-auth/react'
import { ArrowRight, Check } from 'phosphor-react'
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { NextSeo } from 'next-seo'

export default function ConnectCallendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  const renderCalendarSignInButton = (isSignedIn: boolean) => {
    if (isSignedIn) {
      return (
        <Button size="sm" disabled>
          Conectado
          <Check />
        </Button>
      )
    }

    return (
      <Button variant="secondary" size="sm" onClick={handleConnectCalendar}>
        Conectar
        <ArrowRight />
      </Button>
    )
  }

  async function handleConnectCalendar() {
    await signIn('google')
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  return (
    <>
      <NextSeo
        title="Conecte a sua agenda Google | Ignite Call by guizioliveira"
        noindex
      />

      <Container>
        <Header>
          <Heading as="strong">Conecte sua agenda!</Heading>

          <Text>
            Conecte o seu calendário para verificar automaticamente as horas
            ocupadas e os novos eventos à medida em que são agendados.
          </Text>

          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>

            {renderCalendarSignInButton(isSignedIn)}
          </ConnectItem>

          {hasAuthError && (
            <AuthError size="sm">
              Falha ao se conectar ao Google, verifique se você habilitou as
              permissões de acesso ao Google Calendar.
            </AuthError>
          )}

          <Button
            type="submit"
            onClick={handleNavigateToNextStep}
            disabled={!isSignedIn}
          >
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  )
}
