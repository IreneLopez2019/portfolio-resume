import { useRef, useState, useLayoutEffect } from "react";
import { isBrowser } from "../utils/helpers";

const useWindowWidth = width => {
    const mediaQuery = useRef(isBrowser() ? window.matchMedia(`(min-width: ${width}px)`) : null);
    const [match, setMatch] = useState(mediaQuery?.current?.matches);
    const handleMatchToggle = ({ matches }) => setMatch(matches);

    useLayoutEffect(() => {
		if (!isBrowser()) return;

        const ref = mediaQuery.current;
        const supportsEventListener = ref && ref.addEventListener;
        
		handleMatchToggle(mediaQuery.current);
        
		if (supportsEventListener) ref.addEventListener("change", handleMatchToggle);
        else ref.addListener(handleMatchToggle);
        
		return () => {
            if (supportsEventListener) ref.removeEventListener("change", handleMatchToggle);
            else ref.removeListener(handleMatchToggle);
        };
    }, []);
    
    return match;
};

export default useWindowWidth;