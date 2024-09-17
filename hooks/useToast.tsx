import { useState, useCallback, useEffect } from 'react';
import { ToastProps } from '../components/Toast/Toast';

const useToast = () => {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = useCallback(async (data: ToastProps) => {
    setToast(data);
    const timer = setTimeout(() => setToast(null), 10000);
    return () => clearTimeout(timer);
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { target } = e;
      if (target instanceof Element && target.nodeName === 'BUTTON') {
        return;
      } else {
        hideToast();
      }
    };

    if (
      (window.location.search.includes('new-comment') ||
        window.location.search.includes('edit-comment')) &&
      !window.location.search.includes('error=repeated')
    ) {
      hideToast();
    }
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [hideToast]);

  return {
    toast,
    showToast,
    hideToast,
  };
};

export default useToast;
