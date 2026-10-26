import { createContext, useContext, useState, ReactNode } from 'react';

export type ViewState = 
  | { type: 'home' }
  | { type: 'sector', id: string }
  | { type: 'service', id: string }
  | { type: 'expertise', id: string }
  | { type: 'project', id: string };

interface NavigationContextType {
  viewState: ViewState;
  navigate: (view: ViewState) => void;
  navigateAndScroll: (sectionId: string) => void;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [viewState, setViewState] = useState<ViewState>({ type: 'home' });

  const navigate = (view: ViewState) => {
    setViewState(view);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const navigateAndScroll = (sectionId: string) => {
    if (viewState.type !== 'home') {
      setViewState({ type: 'home' });
      // need to wait for render before scroll
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider value={{ viewState, navigate, navigateAndScroll }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
