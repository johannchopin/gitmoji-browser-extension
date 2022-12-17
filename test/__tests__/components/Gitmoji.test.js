import { render, fireEvent, screen } from '@testing-library/svelte'
import Gitmoji from '../../../src/components/Gitmoji.svelte'
import * as clipboard from '../../../src/helpers/clipboard'

// 🤡 Mock clipboard object
jest.mock('../../../src/helpers/clipboard')

describe('<Gitmoji />', () => {
  let wrapper
  let onSaveSpy = jest.fn()
  let gitmojiProps = {
    code: ':art:',
    emoji: '🎨',
    color: '#ff7281',
    description: 'Improve structure / format of the code.',
    onSave: onSaveSpy
  }

  beforeEach(() => {
    wrapper = render(Gitmoji, gitmojiProps)
  })

  describe('snapshot', () => {
    it('should match snapshot', () => {
      const { container } = wrapper

      expect(container).toMatchSnapshot()
    })

    it('should match snapshot if is present', () => {
      const { container } = render(Gitmoji, { ...gitmojiProps, present: true })

      expect(container).toMatchSnapshot()
    })
  })

  describe('save in clipboard', () => {
    it('should save emoji in clipboard', async () => {
      const { container } = wrapper
      const saveEmojiBtn = screen.getByRole('button', { name: gitmojiProps.emoji })

      await fireEvent.click(saveEmojiBtn)

      expect(clipboard.setClipboard).toHaveBeenCalledWith(gitmojiProps.emoji)
      expect(onSaveSpy).toHaveBeenCalled()
    })

    it('should save shortcode in clipboard', async () => {
      const { container } = wrapper
      const saveShortcodeBtn = screen.getByRole('button', { name: gitmojiProps.code, hidden: true })

      await fireEvent.click(saveShortcodeBtn)

      expect(clipboard.setClipboard).toHaveBeenCalledWith(gitmojiProps.code)
      expect(onSaveSpy).toHaveBeenCalled()
    })
  })
})
