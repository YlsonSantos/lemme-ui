import { useState } from 'react';
import ColorPicker from '../../components/ColorPicker';
import FontPicker from '../../components/FontPicker';
import { saveTheme } from '../../utils/api';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ToolMenu from '../../components/ToolMenu';
<ToolMenu />


const CustomizationPage = () => {
    return (
        <div>
            <Header />
            <ToolMenu />
            <Footer />
        </div>

    )
};
export default CustomizationPage;