# nekoray-chrome-route-addon
A lightweight Chrome extension for proxying browser traffic through a local SOCKS Nekoray default proxy. Useful for routing only browser traffic without system-wide proxy settings.


# 🧭 Chrome Proxy Toggle Extension (Works with Nekoray — make sure it's set up and running)

A simple Chrome extension to toggle proxy settings on/off using a local SOCKS5 proxy ([Nekoray](https://github.com/Matsuridayo/Nekoray)).  
It also includes a basic IP information popup using [ip-api.com](http://ip-api.com/) to check current connection state.

---

## 🚀 Features

- 🔁 One-click toggle between proxy ON/OFF
- 🧷 Works with local Nekoray proxy (default: `127.0.0.1:2080`, SOCKS5)
- 🌐 IP, ISP & country display (via `ip-api.com`)
- 🧩 Clean popup interface
- 🧠 Saves state across sessions
- 🔐 No external tracking, 100% local logic

---

## 📦 Installation

1. **Clone or download this repository**:
   ```bash
   git clone https://github.com/hesoyam1123/nekoray-chrome-route-addon

2. **Open Chrome and navigate to ```chrome://extensions/```**

3. **Enable Developer mode (toggle in the top-right)**

4. **Click "Load unpacked" and select the unpacked extension directory**

5. **The extension icon should now appear in your browser bar. Click it to toggle proxy and view IP info.**
