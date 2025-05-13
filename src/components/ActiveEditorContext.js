import { createContext, useState } from 'react';

export const ActiveEditorContext = createContext();

export function ActiveEditorProvider({ children }) {
  const [activeEditor, setActiveEditor] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ActiveEditorContext.Provider value={{ activeEditor, setActiveEditor, isFocused, setIsFocused }}>
      {children}
    </ActiveEditorContext.Provider>
  );
}