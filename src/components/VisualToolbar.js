import React from 'react';
import { IoColorPaletteOutline } from 'react-icons/io5';
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
import '../../public/styles/SimpleTextEditor.css';


const VisualToolbar = ({
  onColorInput,
  textColorValue
}) => {
  return (
    <div className='fixedFontBar'>
      <button  className='ChevromEditor'>
        Fonte
        <RxChevronDown />
      </button>
      <button className='ChevromEditor'>
        12
        <RxChevronDown />
      </button>
      <button className='buttonEditor' ><RxFontBold /></button>
      <button className='buttonEditor' ><RxFontItalic /></button>
      <button className='buttonEditor' ><RxUnderline /></button>
      <label className="custom-color-picker">
        <IoColorPaletteOutline size={14} />
        <input
          type="color"
          className="hidden-color-input"
          onInput={onColorInput}
          value={textColorValue}
        />
      </label>
      <button className='buttonEditor' ><RxTextAlignJustify /></button>
      <div style={{ display: 'flex', border: '1px solid #ccc', borderRadius: '15px' }}>
        <button className='buttonEditorAlign' style={{ borderBottomLeftRadius: '15px', borderTopLeftRadius: '15px' }}><RxTextAlignLeft /></button>
        <button className='buttonEditorAlign' ><RxTextAlignCenter /></button>
        <button className='buttonEditorAlign' style={{ borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }}><RxTextAlignRight /></button>
      </div>
    </div>
  );
};

export default VisualToolbar;