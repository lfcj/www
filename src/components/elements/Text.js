import sys from '@rebass/components'
import { variant } from 'styled-system'
import { Text as TextBase } from 'rebass'

const textStyle = variant({ key: 'textStyle' })

const Text = sys({ extend: TextBase }, 'maxWidth', 'textAlign', textStyle)

Text.defaultProps = {
  is: 'p',
  fontFamily: 'sans',
  lineHeight: 3,
  fontSize: [1, 2]
}

export default Text
