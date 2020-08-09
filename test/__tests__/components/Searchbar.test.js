import { render } from '@testing-library/svelte'
import Searchbar from '../../../src/components/Searchbar.svelte'

describe('<Searchbar />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(Searchbar)
  })

  it('should match snapshot', () => {
    const { container } = render(Searchbar)

    expect(container).toMatchSnapshot()
  })
})
