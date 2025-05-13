import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ToolMenu from '../../components/ToolMenu';
import LayoutPage from '../../components/LayoutPage';  
import TextEditor from '@/components/TextEditor';


const CustomizationPage = () => {
    const [pageLayout, setPageLayout] = useState(null);

    const handleLayoutSelect = (layoutType) => {
        setPageLayout(layoutType);
    };
    return (
        <div>
            <Header />
            <ToolMenu />
            <LayoutPage /> 
            <Footer/>
        </div>

    )

};

export default CustomizationPage;
