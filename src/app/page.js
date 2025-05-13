'use client';
import React from 'react';
import CustomizationPage from '../pages/customization/CustomizationPage';
import { ActiveEditorProvider } from '../components/ActiveEditorContext';

export default function Home() {
  return (

    <div>
      <ActiveEditorProvider>
        <CustomizationPage />
      </ActiveEditorProvider>
    </div>
  )

}
