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
        show:false,
        backgroundColor : '#27ae60'
    });

    mainWindowState.manage(mainWin);

    let splashScreen = new BrowserWindow({
        width:500,
        height:500,
        backgroundColor : '#d35400',
        //parent: mainWin,
        //transparent:true,
        frame: false
    });

    mainWin.on('closed',()=>{
        app.quit();
        mainWin =null;

    });
    mainWin.on('closed',()=>{
        splashScreen = null;
    });


    mainWin.on('ready-to-show',()=>{
        mainWin.show();
        splashScreen.close();
    });
   /* mainWin.loadURL(url.format({
        pathname : path.join(__dirname,'index.html'),
        protocol : 'file'
    }));*/
    mainWin.loadURL('https://gosafir.com');
    splashScreen.loadURL(`file://${__dirname}/index.html`);
    /*mainWin.once('ready-to-show',()=>{
        mainWin.show();
    })*/
    /*childwin.on('blur',()=>{
        console.log("blur");
    })*/
});