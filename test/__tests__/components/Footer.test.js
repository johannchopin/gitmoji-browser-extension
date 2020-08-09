import { render } from '@testing-library/svelte'
import Footer from '../../../src/components/Footer.svelte'

describe('<Footer />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(Footer)
  })

  it('should match snapshot', () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
