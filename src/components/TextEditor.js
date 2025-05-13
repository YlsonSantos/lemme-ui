import React from 'react';
import { SimpleTextEditor } from './SimpleTextEditor';
import '../../public/styles/TextEditor.css'

const TextEditor = ({ layout }) => {
  const renderLayout = () => {
    if (layout === '1x1') {
      return (
        <div className="layout-coluna">
          <SimpleTextEditor />
        </div>
      );
    } else if (layout === '1x2') {
      return (
        <div className="layout-coluna">
          <SimpleTextEditor />
          <SimpleTextEditor />
        </div>
      );
    } else if (layout === '1x3') {
      return (
        <div className="layout-coluna">
          <SimpleTextEditor />
          <SimpleTextEditor />
          <SimpleTextEditor />
        </div>
      );
    }

    else if (layout === 'h-1x1') {
      return (
        <div className="layout-horizontal">
          <SimpleTextEditor />
        </div>
      );
    } else if (layout === 'h-1x2') {
      return (
        <div className="layout-horizontal">
          <SimpleTextEditor />
          <SimpleTextEditor />
        </div>
      );
    } else if (layout === 'h-1x3') {
      return (
        <div className="layout-horizontal">
          <SimpleTextEditor />
          <SimpleTextEditor />
          <SimpleTextEditor />
        </div>
      );
    }

    else if (layout === 'm-1') {
      return (
    <div className="layout-misto">
      <div className="superior">
        <div className="coluna1">
          <SimpleTextEditor />
        </div>
        <div className="coluna2">
          <div className="linha">
            <SimpleTextEditor />
          </div>
          <div className="linha">
            <SimpleTextEditor />
          </div>
        </div>
      </div>
    </div>
      );
    } else if (layout === 'm-2') {
      return (
        <div className="layout-misto-horizontal">
          <SimpleTextEditor />
          <SimpleTextEditor />
          <SimpleTextEditor />
          <SimpleTextEditor />
        </div>
      );
    }

    return <p>Layout inválido</p>;
  };

  return (
    <div>
      {renderLayout()}
    </div>
  );
};

export default TextEditor;
