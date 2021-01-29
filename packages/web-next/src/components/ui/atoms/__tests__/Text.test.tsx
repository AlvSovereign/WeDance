import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer' /** @jsx jsx */
import { jsx } from '@emotion/react'
import Text, { Colors, TextVariant } from '../Text/Text'

test('should render correctly', async () => {
  const element = 'p'
  const text = 'Some text'
  const defaultProps = {
    as: element,
    color: 'black' as Colors,
    variant: 'body1' as TextVariant,
  }
  const component = <Text {...defaultProps}>{text}</Text>
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchInlineSnapshot(`
    <p
      css={
        Array [
          Object {
            "color": undefined,
          },
        ]
      }
    >
      Some text
    </p>
  `)
  screen.debug()

  const { container } = render(component)
  const textElement = screen.getByText(text)
  expect(textElement).toBeInTheDocument()
  expect(container.querySelector(element)).toBeInTheDocument()
  expect(textElement).toHaveStyle({ color: 'black' })
})
