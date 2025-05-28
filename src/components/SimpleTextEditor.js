import React, { useEffect, useContext, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { FontSize } from './FontSizeExtension';
import FontFamily from '@tiptap/extension-font-family';
import { LineHeight } from './LineHeight';
import {
  RxFontBold,
  RxFontItalic,
  RxUnderline,
  RxChevronDown,
  RxTextAlignJustify,
  RxTextAlignCenter,
  RxTextAlignLeft,
  RxTextAlignRight,
} from 'react-icons/rx';
import { ActiveEditorContext } from './ActiveEditorContext';
import '../../public/styles/SimpleTextEditor.css';

const Toolbar = () => {
  const { activeEditor, isFocused } = useContext(ActiveEditorContext);
  const editor = activeEditor;
  const [currentColor, setCurrentColor] = useState('#000000');
  const [openDropdown, setOpenDropdown] = useState(null);
  let activeFont = 'Fonte';
  if (editor) {
    const attrs = editor.getAttributes('textStyle');
    if (attrs && attrs.fontFamily) {
      activeFont = attrs.fontFamily;
    }
  }
  const activeFontSize = editor ? (editor.getAttributes('fontSize').fontSize || '12px') : '12px';
  const activeLineHeight = editor ? (editor.getAttributes('lineHeight').lineHeight || '1.0') : '1.0';

  if (!editor || !isFocused) return null;

  const handleColorChange = (e) => {
    const color = e.target.value;
    setCurrentColor(color);
    editor.chain().focus().setColor(color).run();
  };

  const handleColorPickerMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className='fixedFontBar'>
      <div tabIndex={-1}>
        <button
          title={activeFont}
          className="ChevromEditor"
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpenDropdown(prev => (prev === 'font' ? null : 'font'));
          }}
        >
          {activeFont} <RxChevronDown />
        </button>
        {openDropdown === 'font' && (
          <div className="dropdown-menu">
            {['Inter', 'Arial', 'Georgia', 'Times New Roman', 'Courier New', 'serif', 'monospace', 'cursive'].map(font => (
              <button
                key={font}
                onMouseDown={e => { e.preventDefault(); editor.chain().focus().setFontFamily(font).run(); setOpenDropdown(null); }}
                className={`FonteButton ${editor.isActive('textStyle', { fontFamily: font }) ? 'is-active' : ''}`}
              >
                {font}
              </button>
            ))}
          </div>
        )}
      </div>
      <div tabIndex={-1}>
        <button
          className="ChevromEditor"
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpenDropdown(prev => (prev === 'size' ? null : 'size'));
          }}
        >
          {activeFontSize} <RxChevronDown />
        </button>
        {openDropdown === 'size' && (
          <div className="dropdown-menu2">
            {[6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 36, 42, 48].map(size => (
              <button
                key={size}
                onMouseDown={e => { e.preventDefault(); editor.chain().focus().setFontSize(`${size}px`).run(); setOpenDropdown(null); }}
                className={`FonteButton ${editor.getAttributes('textStyle').fontSize === `${size}px` ? 'is-active' : ''}`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
      <div tabIndex={-1}>
        <button
          className="ChevromEditor"
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpenDropdown(prev => (prev === 'lineHeight' ? null : 'lineHeight'));
          }}
        >
          {activeLineHeight} <RxChevronDown />
        </button>
        {openDropdown === 'lineHeight' && (
          <div className="dropdown-menu2">
            {['1.0', '1.5', '2.0', '2.5'].map(value => (
              <button
                key={value}
                onMouseDown={e => {
                  e.preventDefault();
                  editor.chain().focus().setLineHeight(value).run();
                  setOpenDropdown(null);
                }}
                className={`FonteButton ${editor.getAttributes('lineHeight').lineHeight === value ? 'is-active' : ''}`}
              >
                {value}
              </button>
            ))}
          </div>
        )}
      </div>
      <button onMouseDown={e => { e.preventDefault(); editor.chain().focus().toggleBold().run(); }}
        className={`buttonEditor ${editor.isActive('bold') ? 'is-active' : ''}`}>
        <RxFontBold />
      </button>
      <button onMouseDown={e => { e.preventDefault(); editor.chain().focus().toggleItalic().run(); }}
        className={`buttonEditor ${editor.isActive('italic') ? 'is-active' : ''}`}>
        <RxFontItalic />
      </button>
      <button onMouseDown={e => { e.preventDefault(); editor.chain().focus().toggleUnderline().run(); }}
        className={`buttonEditor ${editor.isActive('underline') ? 'is-active' : ''}`}>
        <RxUnderline />
      </button>
      <div style={{ position: 'relative' }}>
        <button className='custom-color-picker'>
          <IoColorPaletteOutline size={14} style={{ color: currentColor }} />
        </button>
        <div className="hidden-color-input">
          <input
            type="color"
            value={currentColor}
            onChange={handleColorChange}
            onMouseDown={handleColorPickerMouseDown}
          />
        </div>
      </div>

      <button onMouseDown={e => { e.preventDefault(); editor.chain().focus().setTextAlign('justify').run(); }}
        className={`buttonEditor ${editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}`}>
        <RxTextAlignJustify />
      </button>
      <div style={{ display: 'flex', border: '1px solid #ccc', borderRadius: '15px' }}>
        <button onMouseDown={e => { e.preventDefault(); editor.chain().focus().setTextAlign('left').run(); }}
          className={`buttonEditorAlign ${editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}`}
          style={{ borderBottomLeftRadius: '15px', borderTopLeftRadius: '15px' }}>
          <RxTextAlignLeft />
        </button>
        <button onMouseDown={e => { e.preventDefault(); editor.chain().focus().setTextAlign('center').run(); }}
          className={`buttonEditorAlign ${editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}`}>
          <RxTextAlignCenter />
        </button>
        <button onMouseDown={e => { e.preventDefault(); editor.chain().focus().setTextAlign('right').run(); }}
          className={`buttonEditorAlign ${editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}`}
          style={{ borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }}>
          <RxTextAlignRight />
        </button>
      </div>
    </div>
  );
};

export function SimpleTextEditor() {
  const { setActiveEditor, setIsFocused } = useContext(ActiveEditorContext);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      FontFamily,
      FontSize,
      LineHeight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: '<p>Digite seu texto aqui...</p>',
    injectCSS: true,
    onFocus: () => {
      setActiveEditor(editor);
      setIsFocused(true);
    },
    // 👇 Removemos onBlur daqui
  });

  useEffect(() => {
    if (editor && document.activeElement === editor.view.dom) {
      setActiveEditor(editor);
    }
  }, [editor, setActiveEditor]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editor) {
        const isEditorClick = editor.view.dom.contains(event.target);
        const isToolbarClick =
          event.target.closest('.fixedFontBar') ||
          event.target.closest('.hidden-color-input') ||
          event.target.closest('.ChevromEditor') ||
          event.target.closest('.dropdown-menu') ||
          event.target.classList.contains('FonteButton') ||
          event.target.closest('.dropdown-menu2');

        if (!isEditorClick && !isToolbarClick) {
          setIsFocused(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editor, setIsFocused]);

  return (
    <>
      <div className="simple-text-editor">
        <EditorContent editor={editor} className="editor-content" />
      </div>
      {editor && <Toolbar />}
    </>
  );
}
