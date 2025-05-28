'use client';
import React from 'react';
import CustomizationPage from '../pages/customization/CustomizationPage';
import { ActiveEditorProvider } from '../components/ActiveEditorContext';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

export default function Home() {
  return (

    <div>
      <Header />
      <ActiveEditorProvider>
        <CustomizationPage />
      </ActiveEditorProvider>
      <Footer />
    </div>
  )

}
