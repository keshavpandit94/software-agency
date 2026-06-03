import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // useLocation gives us the current URL information
  const { pathname } = useLocation();

  // This useEffect triggers every time the 'pathname' (the URL) changes
  useEffect(() => {
    // Instantly scroll the browser window to the very top left (x: 0, y: 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  // It returns null because it doesn't draw anything on the screen
  return null;
}