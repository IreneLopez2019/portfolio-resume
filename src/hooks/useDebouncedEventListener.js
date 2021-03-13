import { useEffect, useRef } from "react";
import { isBrowser } from "../utils/helpers";
import useEventListener from "./useEventListener";

/**
 * Sets and removes event listeners
 *
 * @param {string} event                                - A string which represents the event to listen
 * @param {Function} callback                           - The callback function for the event listener
 * @param {number} debounce                             - The timeout duration
 * @param {HTMLElement} [target]                        - Target element (window by default)
 * @param {boolean | AddEventListenerOptions} options   - The event listener options
 */
const useDebouncedEventListener = (
	event,
	callback,
	debounce = 100,
	target = isBrowser() ? window : undefined,
	options
) => {
	const timeout = useRef();

	const debouncedCallback = (e) => {
		clearTimeout(timeout.current);
		timeout.current = setTimeout(() => callback(e), debounce);
	};

	useEffect(() => {
		return () => clearTimeout(timeout?.current);
	}, []);

	useEventListener(event, debouncedCallback, target, options);
};
export default useDebouncedEventListener;
