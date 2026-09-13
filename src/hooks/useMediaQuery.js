import { useEffect, useState } from 'react';

/**
 * Tracks a CSS media query from JS, so a component can pick a whole layout
 * (not just styling) per breakpoint.
 *
 * The initial value is read synchronously: this app is client-rendered, so
 * there is no server markup to match, and defaulting to false made desktop
 * render the small-screen branch once before correcting itself.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);

    setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
