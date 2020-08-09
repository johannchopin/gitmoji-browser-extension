import { render } from '@testing-library/svelte'
import Popup from '../../src/Popup.svelte'

describe('<Popup />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(Popup)
  })

  it('should contain a header', () => {
    const { container } = wrapper
    expect(container).toContainHTML('<header>')
  })

  it('should contain gitmoji logo', () => {
    const { container } = wrapper
    const imageLink = container.querySelector('header a')
    const image = imageLink.querySelector('img')

    expect(image).not.toBeNull()
    expect(imageLink).toHaveAttribute('href', 'https://gitmoji.carloscuesta.me/')
  })

  it('should contain a searchbar', () => {
    const { container } = wrapper
    const searchbar = container.querySelector('header input[type=text]')

    expect(searchbar).not.toBeNull()
  })

  it('should contain a footer', () => {
    const { container } = wrapper
    const footer = container.querySelector('footer')

    expect(footer).not.toBeNull()
  })
})
