import { useEffect, useRef, useState } from 'react';
import { PaintbrushIcon, DownloadIcon, SaveIcon, TypeIcon, ImageIcon } from 'lucide-react';
import ColorPicker from './ColorPicker';
import FontPicker from './VisualToolbar';

const ToolMenu = () => {
  const [activeTool, setActiveTool] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const toolRef = useRef(null);
  const colorButtonRef = useRef(null);
  const fontButtonRef = useRef(null);
  const imageInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeTool === 'color' &&
        toolRef.current &&
        !toolRef.current.contains(event.target) &&
        colorButtonRef.current &&
        !colorButtonRef.current.contains(event.target)
      ) {
        setActiveTool(null);
      }
      if (
        activeTool === 'font' &&
        toolRef.current &&
        !toolRef.current.contains(event.target) &&
        fontButtonRef.current &&
        !fontButtonRef.current.contains(event.target)
      ) {
        setActiveTool(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeTool]);

  const toggleColorTool = () => {
    setActiveTool((prev) => (prev === 'color' ? null : 'color'));
  };
  const openFontTool = () => {
    setActiveTool('font');
  };

  const openFileDialog = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const onImageSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
      setActiveTool(null);
    }
  };

  return (
    <>
      <style>
        {`
          .background-container {
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 100vh;
          }
          .tool-menu-container {
            position: fixed;
            top: 64px; /* altura estimada do header azul */
            right: 0;
            z-index: 1000;
            display: flex;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.9);
            padding: 0.5rem 1rem 0.5rem 0.5rem;
            border-radius: 0 0 0 8px;
            box-shadow: 0 0 8px rgba(0,0,0,0.15);
          }
          .tool-menu {
            display: flex;
            gap: 0.5rem;
          }
        `}
      </style>

      <div className="background-container">
        <div className="tool-menu-container">
          <div className="tool-menu">
            <button
              ref={colorButtonRef}
              className={`tool-button ${activeTool === 'color' ? 'active' : ''}`}
              onClick={toggleColorTool}
            >
              <PaintbrushIcon />
            </button>
            <button
              ref={fontButtonRef}
              className={`tool-button ${activeTool === 'font' ? 'active' : ''}`}
              onClick={openFontTool}
            >
              <TypeIcon />
            </button>
            <button className="tool-button" onClick={() => alert('Salvar')}>
              <SaveIcon />
            </button>
            <button className="tool-button" onClick={() => alert('Download')}>
              <DownloadIcon />
            </button>
            <button
              className="tool-button"
              onClick={openFileDialog}
              title="Adicionar imagem de fundo"
            >
              <ImageIcon />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={imageInputRef}
              style={{ display: 'none' }}
              onChange={onImageSelected}
            />
          </div>

          {activeTool && (
            <div ref={toolRef} className="tool-content">
              {activeTool === 'color' && (
                <ColorPicker onChange={(color) => console.log('Cor escolhida:', color)} />
              )}
              {activeTool === 'font' && (
                <div className="dropdown">
                  <FontPicker />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ToolMenu;
