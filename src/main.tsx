import { Component, StrictMode, type ErrorInfo, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

type ErrorBoundaryState = { hasError: boolean; message: string };

class AppErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, message: '' };

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : 'Error inesperado al iniciar la página.',
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('PALMYRA DIGITAL STUDIO render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ minHeight: '100vh', background: '#050b14', color: '#f8fafc', display: 'grid', placeItems: 'center', padding: '24px', fontFamily: 'system-ui, sans-serif' }}>
          <section style={{ maxWidth: '560px', textAlign: 'center' }}>
            <p style={{ color: '#a78bfa', fontWeight: 700, letterSpacing: '0.12em' }}>PALMYRA DIGITAL STUDIO</p>
            <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', lineHeight: 1.15, margin: '16px 0' }}>Estamos recuperando la página</h1>
            <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>Se produjo un error al mostrar el contenido. Recarga la página para intentarlo de nuevo.</p>
            <button onClick={() => window.location.reload()} style={{ marginTop: '24px', border: 0, borderRadius: '12px', padding: '14px 22px', background: '#7565f6', color: 'white', fontWeight: 700, cursor: 'pointer' }}>Volver a cargar</button>
            {import.meta.env.DEV && <pre style={{ marginTop: '20px', textAlign: 'left', whiteSpace: 'pre-wrap', color: '#fda4af' }}>{this.state.message}</pre>}
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  document.body.innerHTML = '<main style="padding:24px;font-family:system-ui,sans-serif">No se pudo iniciar PALMYRA DIGITAL STUDIO. Recarga la página.</main>';
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
    </StrictMode>,
  );
}
