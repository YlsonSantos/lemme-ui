import { useState } from 'react';
import ToolMenu from '../../components/ToolMenu';
import LayoutPage from '../../components/LayoutPage';  

const CustomizationPage = () => {
    const [pageLayout, setPageLayout] = useState(null);

    const handleLayoutSelect = (layoutType) => {
        setPageLayout(layoutType);
    };
    return (
        <div>
            <ToolMenu />
            <LayoutPage /> 
        </div>

    )

};

export default CustomizationPage;
