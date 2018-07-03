//const {app , BrowserWindow} = require('electron');
import {app , BrowserWindow} from 'electron';
//const url = require('url');
import url from 'url';
//const path = require('path');
import path from 'path';

import electronReload from 'electron-reload';
electronReload(__dirname);

import Devtron from 'devtron';

import windowStateKeeper from 'electron-window-state';

app.on('ready', () => {
    Devtron.install();

    let mainWindowState = windowStateKeeper({
        defaultWidth : 1200,
        defaultHeight : 600
    });

    //let mainWin = new BrowserWindow({width:800,height:600,show : false});
    let mainWin = new BrowserWindow({
        width:mainWindowState.width,
        height:mainWindowState.height,
        x:mainWindowState.x,
        y:mainWindowState.y,
        backgroundColor : '#27ae60'
    });

    mainWindowState.manage(mainWin);

    //let childwin = new BrowserWindow({width:800,height:600,backgroundColor : '#d35400',parent: mainWin});
   /* mainWin.loadURL(url.format({
        pathname : path.join(__dirname,'index.html'),
        protocol : 'file'
    }));*/
    mainWin.loadURL('https://gosafir.com');
    //childwin.loadURL(`file://${__dirname}/index.html`);
    /*mainWin.once('ready-to-show',()=>{
        mainWin.show();
    })*/
    /*childwin.on('blur',()=>{
        console.log("blur");
    })*/
});