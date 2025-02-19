import { transition, colors, borders } from 'theme'
import React, { useMemo, useState } from 'react'
import styled, { css } from 'styled-components'
import noop from 'lodash/noop'

import Text from '../Text'
import Flex from '../Flex'

const InputBase = styled(Text)(
  {
    display: 'block',
    maxWidth: '100%'
  },
  prop => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    border: 0,
    appearance: 'none',
    '&:focus': {
      outline: '0'
    },
    '&:disabled': {
      opacity: 1 / 4
    }
  })
)

InputBase.defaultProps = {
  as: 'input',
  type: 'text',
  lineHeight: 'inherit',
  width: 1,
  border: 0,
  p: 0,
  color: 'inherit',
  bg: 'transparent'
}

const focusStyle = css`
  outline: 0;
  border-color: ${({ isDark }) => (isDark ? colors.white80 : colors.black80)};
  svg {
    stroke: ${({ isDark }) => (isDark ? colors.white80 : colors.black80)};
    color: ${({ isDark }) => (isDark ? colors.white80 : colors.black80)};
  }
`

const InputWrapper = styled(Flex)`
  background: ${({ isDark }) => (isDark ? colors.black : colors.white)};
  border: ${borders[1]};
  border-color: ${({ isDark }) => (isDark ? colors.white20 : colors.black10)};
  color: ${({ isDark }) => (isDark ? colors.white80 : colors.black80)};
  transition: border-color ${transition.medium}, stroke ${transition.medium},
    color ${transition.medium};
  ${props => props.focus && focusStyle}
  &:hover {
    ${focusStyle};
  }
`

const Input = ({
  innerRef,
  iconComponent: Icon,
  suggestions,
  children,
  onFocus,
  onBlur,
  theme,
  ...props
}) => {
  const [isFocus, setFocus] = useState(props.autoFocus)
  const isDark = theme === 'dark'

  const list = useMemo(() => {
    if (!suggestions) return undefined
    if (!props.id) {
      throw new Error(
        'Need to provide an id to be associated with suggestions list.'
      )
    }
    return `${props.id}-suggestions`
  }, [props.id, suggestions])

  return (
    <InputWrapper
      as='label'
      alignItems='center'
      borderRadius={2}
      focus={isFocus}
      isDark={isDark}
      py='12px'
      pl={2}
      pr={suggestions ? 0 : 2}
    >
      {Icon && <Flex pr={1}>{Icon}</Flex>}
      <InputBase
        list={list}
        ref={innerRef}
        onFocus={event => {
          setFocus(true)
          return onFocus(event)
        }}
        onBlur={event => {
          setFocus(false)
          return onBlur(event)
        }}
        {...props}
      />

      {suggestions && (
        <datalist id={list}>
          {suggestions.map(props => (
            <option key={`${list}_${props.value}`} {...props} />
          ))}
        </datalist>
      )}
    </InputWrapper>
  )
}

Input.defaultProps = {
  onFocus: noop,
  onBlur: noop,
  autoFocus: false
}

export default Input
