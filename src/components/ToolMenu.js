import { useEffect, useRef, useState } from 'react';
import { PaintbrushIcon, DownloadIcon, SaveIcon, TypeIcon } from 'lucide-react';
import ColorPicker from './ColorPicker';
import FontPicker from './VisualToolbar';
import '../../public/styles/ToolMenu.css';

const ToolMenu = () => {
    const [activeTool, setActiveTool] = useState(null);
    const toolRef = useRef(null);
    const colorButtonRef = useRef(null);
    const fontButtonRef = useRef(null);

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
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeTool]);
    const toggleColorTool = () => {
        setActiveTool((prev) => (prev === 'color' ? null : 'color'));
    };
    const openFontTool = () => {
        setActiveTool('font');
    };
    return (
        <div className='tool-menu-container'>
            <div className='tool-menu'>
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
                <button className='tool-button' onClick={() => alert('Salvar')}>
                    <SaveIcon />
                </button>
                <button className='tool-button' onClick={() => alert('Download')}>
                    <DownloadIcon />
                </button>
            </div>

            {activeTool && (
                <div ref={toolRef} className='tool-content'>
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
    );
};

export default ToolMenu;