import { render } from '@testing-library/svelte'
import Popup from '../../src/Popup.svelte'

describe('index component', () => {
  test('should render component correctly', () => {
    const { container } = render(Popup)

    expect(container).toContainHTML('<div></div>')
  })
})
