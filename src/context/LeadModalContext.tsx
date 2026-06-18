import { createContext, useContext, useState } from 'react';

interface LeadModalContextValue {
  isOpen: boolean;
  defaultPackage: string;
  openModal: (packageName?: string) => void;
  closeModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultPackage, setDefaultPackage] = useState('');

  function openModal(packageName = '') {
    setDefaultPackage(packageName);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <LeadModalContext.Provider value={{ isOpen, defaultPackage, openModal, closeModal }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error('useLeadModal must be used within LeadModalProvider');
  return ctx;
}
