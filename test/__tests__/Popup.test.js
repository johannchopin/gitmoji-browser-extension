import { render, fireEvent } from '@testing-library/svelte'
import Popup from '../../src/Popup.svelte'

describe('<Popup />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(Popup)
  })

  describe('DOM', () => {
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

  describe('filter gitmojis', () => {
    let input

    beforeEach(() => {
      const { container, getByText } = wrapper
      input = container.querySelector('header input[type=text]')
    })

    describe('match by name', () => {
      const gitmojiToMatch = {
        code: ':bug:',
        emoji: '🐛'
      }
      let matchingGitmojis

      beforeEach(async () => {
        const { container } = wrapper
        await fireEvent.input(input, { target: { value: 'bug' } })

        matchingGitmojis = container.querySelectorAll('li.gitmoji')
      })

      it('should contain a single gitmoji', () => {
        expect(matchingGitmojis.length).toBe(1)
      })

      it('should be the right gitmoji', () => {
        expect(matchingGitmojis[0]).toContainHTML(gitmojiToMatch.emoji)
      })
    })

    describe('match by description', () => {
      const gitmojisToMatch = ['🐛', '✏️', '💚', '🔒']
      let matchingGitmojis

      beforeEach(async () => {
        const { container } = wrapper
        await fireEvent.input(input, { target: { value: 'fix' } })

        matchingGitmojis = container.querySelectorAll('li.gitmoji')
      })

      it('should contain 4 gitmoji', () => {
        expect(matchingGitmojis.length).toBe(4)
      })

      it('should contain the right gitmojis', () => {
        const matchingGitmojisHTML = [...matchingGitmojis].map(matchingGitmoji => matchingGitmoji.innerHTML).join()

        gitmojisToMatch.forEach((gitmojiToMatch) => {
          expect(matchingGitmojisHTML).toEqual(expect.stringContaining(gitmojiToMatch))
        })
      })
    })

    describe('match by shortcode', () => {
      const gitmojiToMatch = {
        code: ':white_check_mark:',
        emoji: '✅'
      }
      let matchingGitmojis

      beforeEach(async () => {
        const { container } = wrapper
        await fireEvent.input(input, { target: { value: 'check whi' } })

        matchingGitmojis = container.querySelectorAll('li.gitmoji')
      })

      it('should contain 1 gitmoji', () => {
        expect(matchingGitmojis.length).toBe(1)
      })

      it('should contain the right gitmojis', () => {
        expect(matchingGitmojis[0]).toContainHTML(gitmojiToMatch.emoji)
      })
    })
  })
})
