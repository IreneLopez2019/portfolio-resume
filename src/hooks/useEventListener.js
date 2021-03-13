import { useRef, useEffect } from "react";
import { isBrowser } from "../utils/helpers";

/**
 * Sets and removes event listeners
 *
 * @param {string} event                              - A string which represents the event to listen
 * @param {Function} callback                         - The callback function for the event listener
 * @param {HTMLElement} [target]                      - Target element (window by default)
 * @param {boolean | AddEventListenerOptions} options - The event listener options
 */
const useEventListener = (
	event,
	callback,
	target = isBrowser() ? window : undefined,
	options
) => {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		if (!isBrowser()) return;

		const supportsEventListener = target && target.addEventListener;

		if (!supportsEventListener) return;

		const listenerCallback = (event) => savedCallback.current(event);
		target.addEventListener(event, listenerCallback, options);
		return () => target.removeEventListener(event, listenerCallback, options);
	}, [event, target, options]);
};
export default useEventListener;
