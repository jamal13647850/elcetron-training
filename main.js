//const {app , BrowserWindow} = require('electron');
import {app , BrowserWindow} from 'electron';
//const url = require('url');
import url from 'url';
//const path = require('path');
import path from 'path';

import electronReload from 'electron-reload';
electronReload(__dirname);

import Devtron from 'devtron';


app.on('ready', () => {
    Devtron.install();

    let mainWin = new BrowserWindow({width:800,height:600});
    mainWin.loadURL(url.format({
        pathname : path.join(__dirname,'index.html'),
        protocol : 'file'
    }))
});