export function nextAnimationFrame() {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}
export function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });
}
export default { nextAnimationFrame, delay };
