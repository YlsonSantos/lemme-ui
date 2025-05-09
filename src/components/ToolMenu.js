import { useEffect, useRef, useState } from 'react';
import { PaintbrushIcon, DownloadIcon, SaveIcon, TypeIcon } from 'lucide-react';
import ColorPicker from './ColorPicker';
import FontPicker from './FontPicker';
import '../../public/styles/ToolMenu.css';

const ToolMenu = () => {
    const [activeTool, setActiveTool] = useState(null);
    const toolRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                toolRef.current &&
                !toolRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setActiveTool(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='tool-menu-container'>
            <div className='tool-menu'>
                <button
                    ref={buttonRef}
                    className='tool-button'
                    onClick={() => setActiveTool((prev) => (prev === 'color' ? null : 'color'))}
                >
                    <PaintbrushIcon />
                </button>
                <button
                    className='tool-button'
                    onClick={() => setActiveTool((prev) => (prev === 'font' ? null : 'font'))}
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

            {(activeTool === 'color' || activeTool === 'font') && (
                <div ref={toolRef} className='tool-content'>
                    {activeTool === 'color' && (
                        <ColorPicker onChange={(color) => console.log('Cor escolhida:', color)} />
                    )}
                    {activeTool === 'font' && <FontPicker />}
                </div>
            )}
        </div>
    );
};

export default ToolMenu;
