// background.js

let currentProxyEnabled = false;
let iconPath = 'enable.png';

chrome.storage.sync.get('iconPath', function(data) {
    iconPath = data.iconPath;
    chrome.action.setIcon({ path: { "19": iconPath } });
});

chrome.storage.sync.get('proxyEnabled', function(data) {
    currentProxyEnabled = data.proxyEnabled || false;

    if (currentProxyEnabled) {
        enableProxy();
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.proxyEnabled !== undefined) {
        currentProxyEnabled = message.proxyEnabled;

        if (currentProxyEnabled) {
            enableProxy();
        } else {
            disableProxy();
        }
    }
});

function enableProxy() {
    chrome.action.setIcon({
        path: { "19": "enable-19.png" }
    });
    iconPath = 'enable.png';
    chrome.storage.sync.set({ 'iconPath': iconPath });
    chrome.proxy.settings.set({ value: { mode: "fixed_servers", rules: { singleProxy: { scheme: "socks5", host: "127.0.0.1", port: 2080 } } }, scope: "regular" }, function() {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        } else {
            console.log("Proxy connected!");
        }
    });
}

function disableProxy() {
    chrome.action.setIcon({
        path: { "19": "disable-19.png" }
    });
    iconPath = 'disable.png';
    chrome.storage.sync.set({ 'iconPath': iconPath });
    chrome.proxy.settings.clear({ scope: "regular" }, function() {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        } else {
            console.log("Proxy disconnected!");
        }
    });
}
