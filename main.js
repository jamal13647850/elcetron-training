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

    //let mainWin = new BrowserWindow({width:800,height:600,show : false});
    let mainWin = new BrowserWindow({width:1200,height:600,backgroundColor : '#27ae60'});
    let childwin = new BrowserWindow({width:800,height:600,backgroundColor : '#d35400',parent: mainWin});
   /* mainWin.loadURL(url.format({
        pathname : path.join(__dirname,'index.html'),
        protocol : 'file'
    }));*/
    mainWin.loadURL('https://gosafir.com');
    childwin.loadURL(`file://${__dirname}/index.html`);
    /*mainWin.once('ready-to-show',()=>{
        mainWin.show();
    })*/
    childwin.on('blur',()=>{
        console.log("blur");
    })
});