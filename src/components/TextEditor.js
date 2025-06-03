import React, { useState, useEffect } from 'react';
import ContentSlot from './ContentSlot';
import '../../public/styles/TextEditor.css';

const layoutSlotCount = {
  '1x1': 1, '1x2': 2, '1x3': 3,
  'h-1x1': 1, 'h-1x2': 2, 'h-1x3': 3,
  'm-1': 3, 'm-2': 4,
};

const RenderLayout = ({ layout, content, onContentChange }) => {
  const slot = slotIdx => (
    <ContentSlot
      key={slotIdx}
      value={content[slotIdx]}
      onContentChange={val => onContentChange(slotIdx, val)}
    />
  );

  if (layout === '1x1') return <div className="layout-coluna"><div className="coluna3">{slot(0)}</div></div>;
  if (layout === '1x2') return (
    <div className="layout-coluna">
      <div className="coluna3">{slot(0)}</div>
      <div className="coluna3">{slot(1)}</div>
    </div>
  );
  if (layout === '1x3') return (
    <div className="layout-coluna">
      <div className="coluna3">{slot(0)}</div>
      <div className="coluna3">{slot(1)}</div>
      <div className="coluna3">{slot(2)}</div>
    </div>
  );
  if (layout === 'h-1x1') return <div className="layout-horizontal"><div className="horizontal">{slot(0)}</div></div>;
  if (layout === 'h-1x2') return (
    <div className="layout-horizontal">
      <div className="horizontal">{slot(0)}</div>
      <div className="horizontal">{slot(1)}</div>
    </div>
  );
  if (layout === 'h-1x3') return (
    <div className="layout-horizontal">
      <div className="horizontal">{slot(0)}</div>
      <div className="horizontal">{slot(1)}</div>
      <div className="horizontal">{slot(2)}</div>
    </div>
  );
  if (layout === 'm-1') return (
    <div className="layout-misto">
      <div className="superior">
        <div className="coluna1" style={{ height: '714px', minHeight: '714px', maxHeight: '714px', alignItems: 'center', flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
          {slot(0)}
        </div>
        <div className="coluna2">
          <div className="linha" style={{ height: '350px', minHeight: '350px', maxHeight: '350px' }}>
            {slot(1)}
          </div>
          <div className="linha" style={{ height: '350px', minHeight: '350px', maxHeight: '350px' }}>
            {slot(2)}
          </div>
        </div>
      </div>
    </div>
  );
  if (layout === 'm-2') return (
    <div className="layout-misto-horizontal">
      <div className="superior" style={{ flexDirection: 'column' }}>
        <div className="linha" style={{ height: '350px', minHeight: '350px', maxHeight: '350px', alignItems: 'center', flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
          {slot(0)}
        </div>
        <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'space-between' }}>
          <div className="coluna1" style={{ height: '350px', display: 'flex', justifyContent: 'center' }}>{slot(1)}</div>
          <div className="coluna1" style={{ height: '350px', display: 'flex', justifyContent: 'center' }}>{slot(2)}</div>
          <div className="coluna1" style={{ height: '350px', display: 'flex', justifyContent: 'center' }}>{slot(3)}</div>
        </div>
      </div>
    </div>
  );
  return <p>Layout inválido</p>;
};

const TextEditor = ({ layoutsFinais }) => {
  const [layouts, setLayouts] = useState(
    layoutsFinais.map(layout => ({
      layout,
      content: Array(layoutSlotCount[layout]).fill(null)
    }))
  );

  useEffect(() => {
    setLayouts(prev => {
      let newLayouts = [...prev];
      layoutsFinais.forEach((layout, idx) => {
        if (!newLayouts[idx] || newLayouts[idx].layout !== layout) {
          newLayouts[idx] = {
            layout,
            content: Array(layoutSlotCount[layout]).fill(null)
          };
        }
      });
      return newLayouts.slice(0, layoutsFinais.length);
    });
  }, [layoutsFinais]);

  const handleContentChange = (layoutIdx, slotIdx, value) => {
    setLayouts(prev => {
      const newLayouts = [...prev];
      const newContent = [...newLayouts[layoutIdx].content];
      newContent[slotIdx] = value;
      newLayouts[layoutIdx] = { ...newLayouts[layoutIdx], content: newContent };
      return newLayouts;
    });
  };

  const handleSaveAll = () => {
    console.log(JSON.stringify(layouts, null, 2));
  };

  return (
    <div>
      {layouts.map((block, layoutIdx) => (
        <div key={layoutIdx} style={{ marginBottom: 24, marginLeft: 70, marginRight: 70  }}>
          <RenderLayout
            layout={block.layout}
            content={block.content}
            onContentChange={(slotIdx, value) => handleContentChange(layoutIdx, slotIdx, value)}
          />
        </div>
      ))}
      {layouts.length > 0 && (
        <button onClick={handleSaveAll} className='botao-salvar'>Salvar layouts</button>
      )}
    </div>
  );
};

export default TextEditor;