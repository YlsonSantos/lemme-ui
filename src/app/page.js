'use client';
import React from 'react';
import { ActiveEditorProvider } from '../components/ActiveEditorContext';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import ToolMenu from '../../src/components/ToolMenu';
import LayoutPage from '../../src/components/LayoutPage';

export default function Home() {
  return (

    <div>
      <Header />
      <ActiveEditorProvider>
        <ToolMenu />
        <LayoutPage /> 
      </ActiveEditorProvider>
      <Footer />
    </div>
  )

}
