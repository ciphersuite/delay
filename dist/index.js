/**
 * Waits for the specified number of milliseconds.
 * @param ms milliseconds to wait
 */
export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
