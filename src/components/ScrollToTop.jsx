import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force the window to scroll smoothly back to the top left corner
    window.scrollTo(0, 0);
  }, [pathname]); // This effect triggers every single time the URL route path changes

  return null; // This component doesn't render any HTML, it just runs the scroll logic
}
