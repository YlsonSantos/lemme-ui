import { ChromePicker } from 'react-color';
import { useState } from 'react';
import '../../public/styles/ColorPicker.css'

const ColorPicker = ({ onChange }) => {
    const [color, setColor] = useState('rgba(0, 0, 0, 1)');
    const [confirmedColor, setConfirmedColor] = useState(color);

    const handleChange = (newColor) => {
        setColor(`rgba(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b}, ${newColor.rgb.a})`);
    };

    const handleConfirm = () => {
        setConfirmedColor(color);
        if (typeof onChange === 'function') {
            onChange(color);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ChromePicker
                color={color}
                onChange={handleChange}
            />
            <button className='confirmButtonColorPicker' onClick={handleConfirm}>Confirmar Cor</button>
        </div>
    );
};

export default ColorPicker;
