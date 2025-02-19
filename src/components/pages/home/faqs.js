import { Box, Link } from 'components/elements'
import { Faq } from 'components/patterns'
import React from 'react'

const FAQs = props => (
  <Faq
    title='FAQs'
    caption='Frequently asked questions.'
    questions={[
      {
        question: 'Can I use microlink for free?',
        answer: [
          <div key='can-i-use-microlink-for-free-0'>
            Absolutely. We have a forever free{' '}
            <Link href='/docs/api/basics/endpoint'>endpoint</Link> you can use.
            It&#039;s the best way to start using the service.
          </div>,
          <div key='can-i-use-microlink-for-free-1'>
            The free plan runs under some limitation to avoid abusive usage of
            the platform, like burst rate, limited concurrency rate and daily
            rate limit.
          </div>,
          <div key='can-i-use-microlink-for-free-2'>
            The free plan should be enough for little projects or low API quota.
          </div>
        ]
      },
      {
        question: 'How different is the free plan compared with pro?',
        answer: [
          <div key='free-vs-pro-0'>
            The pro plan is ready to be used at scale, with better performance
            and unlocked functionalities such as{' '}
            <Link href='/docs/api/parameters/headers'>headers</Link>,{' '}
            <Link href='/docs/api/parameters/ttl'>ttl</Link> or{' '}
            <Link href='/docs/api/parameters/proxy'>proxy</Link>.
          </div>,
          <div key='free-vs-pro-1'>
            A pro plan has an API key associated, with configurable quota. You
            only pay as you need.
          </div>
        ]
      },
      {
        question: "What if I don't know how much API quota I need?",
        answer: [
          <div key='what-if-i-dont-know-how-much-api-quota-i-need'>
            No problem, just start with the smallest pro plan, and at the moment
            you need more, you can upgrade your plan.
          </div>
        ]
      },
      {
        question: 'How do I get an API key?',
        answer: [
          <div key='how-do-i-get-an-api-key-0'>
            After your payment, we send you the API key associated with the
            email you signed up.
          </div>,
          <div key='how-do-i-get-an-api-key-1'>
            The API key need to be attached to all your requests:
            <Box as='ul' pt={3} my={0}>
              <Box as='li'>
                At{' '}
                <Link href='/docs/sdk/getting-started/overview'>
                  Microlink SDK
                </Link>
                , attach it as{' '}
                <Link href='/docs/sdk/parameters/api-key/'>apiKey</Link>.
              </Box>
              <Box as='li' pt={3}>
                At{' '}
                <Link href='/docs/api/getting-started/overview'>
                  Microlink API
                </Link>
                , attach it as{' '}
                <Link href='/docs/api/basics/authentication'>header</Link>.
              </Box>
            </Box>
          </div>
        ]
      },
      {
        question: "What's your SLA level?",
        answer: [
          <div key='Do-you-have-a-Service-Level-Agreements-sla'>
            Our Service-Level Agreements commitment is 99.9% (three nines).{' '}
            {'\n'}You can see the live{' '}
            <Link display='inline' href='/status'>
              status
            </Link>{' '}
            of the service.
          </div>
        ]
      },
      {
        question: 'How do I know my plan usage?',
        answer: [
          <div key='how-do-i-know-my-plan-usage'>
            We notify you automatically when you reach 80% or more of your usage
            plan, offering you to upgrade your plan to one more suitable based
            on your plan usage.
          </div>
        ]
      },
      {
        question: 'What if I want to change my plan?',
        answer: [
          <div key='what-if-i-want-to-change-my-plan'>
            You can upgrade, downgrade, or cancel your monthly account at any
            time with no further obligation, sending an email to{' '}
            <Link display='inline' href='mailto:hello@microlink.io'>
              hello@microlink.io
            </Link>{' '}
            with the email you signed up.
          </div>
        ]
      },
      {
        question: 'How is the payment being processed?',
        answer: [
          <div key='how-is-the-payment-being-processed'>
            We use Stripe to process your payment. It&#039;s the same payment
            provider used in products such as Twitter, Pinterest, and Lyft. We
            do not handle your credit card information directly.
          </div>
        ]
      },
      {
        question: 'Can I update my card details?',
        answer: [
          <div key='can-i-update-my-card-details'>
            Yes, send an email to{' '}
            <Link display='inline' href='mailto:hello@microlink.io'>
              hello@microlink.io
            </Link>{' '}
            requesting the change. You will receive a link from where
            you&#039;ll be able to securely update your details.
          </div>
        ]
      },
      {
        question: 'Can I cancel my subscription?',
        answer: [
          <div key='can-i-cancel-my-subscription'>
            Yes, by sending an email to{' '}
            <Link display='inline' href='mailto:hello@microlink.io'>
              hello@microlink.io
            </Link>
            . Your request will be processed within 24hrs.
          </div>
        ]
      },
      {
        question: 'Other questions?',
        answer: [
          <div key='other-questions'>
            We&#039;re always available at{' '}
            <Link display='inline' href='mailto:hello@microlink.io'>
              hello@microlink.io
            </Link>
            .
          </div>
        ]
      }
    ]}
    {...props}
  />
)

export default FAQs
