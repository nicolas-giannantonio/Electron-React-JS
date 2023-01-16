const {app, BrowserWindow, ipcMain, Notification} = require("electron");
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            plugins: true,
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, "./preload.js"),
        },
        autoHideMenuBar: false,
    });
    win.loadFile("./public/index.html").then(r => console.log(r));
};

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})

app.whenReady().then(() => {
    createWindow();
});


