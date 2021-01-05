import { render } from '@testing-library/svelte'
import Footer from '../../../src/pages/Settings.svelte'

describe('<Settings />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(Footer)
  })

  it('should match snapshot', () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
