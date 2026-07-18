import React from 'react';
import NotFound from '../pages/NotFound';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <NotFound 
          errorCode="500" 
          title="System Malfunction" 
          message="We encountered an unexpected error. Don't worry, the digital void is temporary. Let's get you back to safety." 
        />
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
