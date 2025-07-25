//popup.js

document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var proxyImage = document.getElementById('proxyImage');

    chrome.storage.sync.get(['proxyEnabled', 'iconPath'], function(data) {
        toggleButton.innerText = data.proxyEnabled ? 'Disconnect' : 'Connect';
        proxyImage.src = data.iconPath;
    });

    toggleButton.addEventListener('click', function () {
        chrome.storage.sync.get(['proxyEnabled', 'iconPath'], function(data) {
            var proxyEnabled = !data.proxyEnabled;
            var iconPath = proxyEnabled ? 'enable.png' : 'disable.png';

            chrome.storage.sync.set({ 'proxyEnabled': proxyEnabled, 'iconPath': iconPath }, function () {
                toggleButton.innerText = proxyEnabled ? 'Disconnect' : 'Connect';
                proxyImage.src = iconPath;
                chrome.runtime.sendMessage({ 'proxyEnabled': proxyEnabled });
            });
        });
    });

    chrome.storage.sync.get('proxyEnabled', function(data) {
        toggleButton.innerText = data.proxyEnabled ? 'Disconnect' : 'Connect';
    });
});
