import styled, { css, keyframes } from 'styled-components'
import { serializeComponent, aspectRatio } from 'helpers'
import { blink } from 'components/keyframes'
import { wordBreak } from 'helpers/style'
import React from 'react'

import {
  speed,
  toMs,
  timings,
  cx,
  colors,
  radii,
  borders,
  fonts,
  fontWeights
} from 'theme'

import CodeCopy from '../Codecopy'
import Text from '../Text'
import Box from '../Box'

export const TerminalWindow = styled(Box)`
  overflow: auto;
  border-radius: ${radii[3]};
  border: ${borders[1]};
  border-color: ${({ isDark }) => cx(isDark ? 'white10' : 'black10')};
`

export const { width: TERMINAL_WIDTH, height: TERMINAL_HEIGHT } = aspectRatio([
  0.41,
  0.48,
  0.68,
  0.68
])

const createBgAnimation = color => keyframes`
from {
  background: transparent;
}
to {
  background: ${color};
}
`

const fromString = text =>
  Array.isArray(text)
    ? text
    : text.split(/\r?\n/).map((item, index) => <span key={index}>{item}</span>)

export const styleTerminalHeader = css`
  border-top-right-radius: ${radii[3]};
  border-top-left-radius: ${radii[3]};
  display: flex;
  align-items: center;
  padding: 1rem;
  position: sticky;
`

const TerminalHeader = styled('header')`
  ${styleTerminalHeader};
  height: 36px;
  background: ${props => props.background};
  top: 0;
  z-index: 1;
`

const animationStyle = css`
  background: transparent;
  animation-name: ${props => createBgAnimation(cx(props.color))};
  animation-timing-function: ${timings.long};
  animation-fill-mode: both;
  animation-direction: alternate;
  animation-iteration-count: infinite;
`

export const TerminalButton = styled('div')`
  border-radius: 50px;
  width: 12px;
  height: 12px;

  border: 1px solid;
  border-color: ${colors.black10};
  background: ${props => cx(props.color)};
  ${({ $loading }) => $loading && animationStyle}
`

const animationSpeed = speed.slowly
const animationDuration = toMs(animationSpeed)
const animationDelay = (n = 1) => `${(animationSpeed / 2) * n}ms`

const TerminalButtonRed = ({ loading, ...props }) => (
  <TerminalButton
    color='fullscreen'
    $loading={loading}
    style={
      loading
        ? {
            animationDelay: animationDelay(1),
            animationDuration
          }
        : undefined
    }
    {...props}
  />
)

const TerminalButtonYellow = ({ loading, ...props }) => (
  <TerminalButton
    $loading={loading}
    style={Object.assign(
      { margin: '0 4px' },
      loading && { animationDelay: animationDelay(2), animationDuration }
    )}
    color='minimize'
    {...props}
  />
)

const TerminalButtonGreen = ({ loading, ...props }) => (
  <TerminalButton
    $loading={loading}
    color='close'
    style={
      loading
        ? {
            animationDelay: animationDelay(3),
            animationDuration
          }
        : undefined
    }
    {...props}
  />
)

TerminalButton.Green = TerminalButtonGreen
TerminalButton.Yellow = TerminalButtonYellow
TerminalButton.Red = TerminalButtonRed

const TerminalTitleWrapper = styled('div')`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-left: -3rem;
`

export const TerminalTitle = ({ isDark, children }) => (
  <TerminalTitleWrapper>
    <Text color={isDark ? 'white40' : 'black40'} fontSize={0}>
      {children}
    </Text>
  </TerminalTitleWrapper>
)

const TerminalText = styled('div')`
  font-weight: ${fontWeights.normal};
  padding: 8px 8px 16px 8px;
  overflow: visible;
  font-family: ${fonts.mono};
  font-size: 13px;
  line-height: 20px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${props => props.background};
  color: ${props => props.color};
  display: flex;
  align-items: center;

  div > span,
  code > span {
    padding: 0 8px;
  }

  > div {
    width: 100%;
  }
`

const blinkCursorStyle = css`
  &::after {
    left: -8px;
    content: '';
    animation-name: ${blink};
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(1, 0, 0, 1);
    animation-duration: 1s;
    display: inline-block;
    width: 1px;
    height: 14px;
    background: ${colors.secondary};
    margin-left: 4px;
    position: relative;
    top: 2px;
    margin-right: 1px;
  }
`

const TerminalTextWrapper = styled('div')`
  ${wordBreak};
  overflow: auto;
  width: 100%;
  white-space: pre;
  &::before {
    content: ${props => (props.shellSymbol ? `'${props.shellSymbol} '` : '')};
  }
  ${props => props.blinkCursor && blinkCursorStyle}
`

const TerminalProvider = ({
  ActionComponent,
  text,
  children,
  loading,
  theme,
  title,
  header,
  ...props
}) => {
  const isDark = theme === 'dark'
  const background = isDark ? colors.black : colors.white
  const color = isDark ? colors.white : colors.black

  return (
    <TerminalWindow isDark={isDark} {...props}>
      <TerminalHeader background={background} {...header}>
        <TerminalButton.Red loading={loading} />
        <TerminalButton.Yellow loading={loading} />
        <TerminalButton.Green loading={loading} />
        <TerminalTitle isDark={isDark}>{title}</TerminalTitle>
        <ActionComponent isDark={isDark} text={text} />
      </TerminalHeader>
      <TerminalText color={color} background={background}>
        {children}
      </TerminalText>
    </TerminalWindow>
  )
}

const Terminal = ({ children, shellSymbol, blinkCursor, ...props }) => {
  const content = typeof children === 'string' ? fromString(children) : children
  const text = serializeComponent(children)

  return (
    <TerminalProvider text={text} {...props}>
      <TerminalTextWrapper shellSymbol={shellSymbol} blinkCursor={blinkCursor}>
        {content}
      </TerminalTextWrapper>
    </TerminalProvider>
  )
}

Terminal.defaultProps = {
  ActionComponent: CodeCopy,
  blinkCursor: true,
  loading: false,
  shellSymbol: false,
  theme: 'light',
  width: TERMINAL_WIDTH
}

Terminal.width = TERMINAL_WIDTH
Terminal.height = TERMINAL_HEIGHT

export default Terminal
