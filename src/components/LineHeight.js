import { Mark, mergeAttributes } from '@tiptap/core'

export const LineHeight = Mark.create({
  name: 'lineHeight',

  addAttributes() {
    return {
      lineHeight: {
        default: null,
        parseHTML: element => element.style.lineHeight || null,
        renderHTML: attributes => {
          if (!attributes.lineHeight) return {};
          return { style: `line-height: ${attributes.lineHeight}` };
        },
      },
    };
  },

  parseHTML() {
    return [{ style: 'line-height' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setLineHeight: value => ({ chain }) =>
        chain().setMark(this.name, { lineHeight: value }).run(),
    };
  },
});