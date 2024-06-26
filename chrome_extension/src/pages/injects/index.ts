function injectScript (src) {
    const s = document.createElement('script');
    s.src = chrome.runtime.getURL(src);
    s.type = "module" // <-- Add this line for ESM module support
    s.onload = () => s.remove();
    (document.head || document.documentElement).append(s);
    console.log("injecting scripts");
}

injectScript('assets/inject.js')