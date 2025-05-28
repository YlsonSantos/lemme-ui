import React from 'react';
import ContentSlot from './ContentSlot';
import '../../public/styles/TextEditor.css'

const TextEditor = ({ layout }) => {
  const renderLayout = () => {
    if (layout === '1x1') {
      return (
        <div className="layout-coluna">
          <div className="coluna3">
            <ContentSlot />
          </div>
        </div>
      );
    } else if (layout === '1x2') {
      return (
        <div className="layout-coluna">
          <div className="coluna3">
            <ContentSlot />
          </div>
          <div className="coluna3">
            <ContentSlot />
          </div>
        </div>
      );
    } else if (layout === '1x3') {
      return (
        <div className="layout-coluna">
          <div className="coluna3">
            <ContentSlot />
          </div>
          <div className="coluna3">
            <ContentSlot />
          </div>
          <div className="coluna3">
            <ContentSlot />
          </div>
        </div>
      );
    }

    else if (layout === 'h-1x1') {
      return (
        <div className="layout-horizontal">
          <div className="horizontal">
            <ContentSlot />
          </div>
        </div>
      );
    } else if (layout === 'h-1x2') {
      return (
        <div className="layout-horizontal">
          <div className="horizontal">
            <ContentSlot />
          </div>
          <div className="horizontal">
            <ContentSlot />
          </div>
        </div>
      );
    } else if (layout === 'h-1x3') {
      return (
        <div className="layout-horizontal">
          <div className="horizontal">
            <ContentSlot />
          </div>
          <div className="horizontal">
            <ContentSlot />
          </div>
          <div className="horizontal">
            <ContentSlot />
          </div>
        </div>
      );
    }

    else if (layout === 'm-1') {
      return (
        <div className="layout-misto">
          <div className="superior">
            <div className="coluna1" style={{ height: '714px', minHeight: '714px', maxHeight: '714px', alignItems: 'center', flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
              <ContentSlot />
            </div>
            <div className="coluna2">
              <div className="linha" style={{ height: '350px', minHeight: '350px', maxHeight: '350px' }}>
                <ContentSlot />
              </div>
              <div className="linha" style={{ height: '350px', minHeight: '350px', maxHeight: '350px' }}>
                <ContentSlot />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (layout === 'm-2') {
      return (
        <div className="layout-misto-horizontal">
          <div className="superior" style={{ flexDirection: 'column' }}>
            <div className="linha" style={{ height: '350px', minHeight: '350px', maxHeight: '350px', alignItems: 'center', flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
              <ContentSlot />
            </div>
            <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'space-between' }}>
              <div className="coluna1" style={{ height: '350px', minHeight: '350px', maxHeight: '350px', alignItems: 'center', flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
                <ContentSlot />
              </div>
              <div className="coluna1" style={{ height: '350px', minHeight: '350px', maxHeight: '350px', alignItems: 'center', flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
                <ContentSlot />
              </div>
              <div className="coluna1" style={{ height: '350px', minHeight: '350px', maxHeight: '350px', alignItems: 'center', flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
                <ContentSlot />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <p>Layout inválido</p>;
  };

  return (
    <div className={`text-editor-container`}>
      {renderLayout()}
    </div>
  );
};

export default TextEditor;
