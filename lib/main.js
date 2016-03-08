'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', function () {

  mainWindow = new BrowserWindow({
    width: 350,
    height: 500
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

});
