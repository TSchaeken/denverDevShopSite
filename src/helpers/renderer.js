import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes'
import { Helmet } from 'react-helmet'
import {SheetsRegistry} from "react-jss/lib/jss";
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

export default (req) => {
  const sheetsRegistry = new SheetsRegistry();
  const theme = createMuiTheme({
    palette: {
      primary: green,
      accent: red,
      type: 'light',
    },
  });
  const generateClassName = createGenerateClassName()
  const content = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
      </MuiThemeProvider>
    </JssProvider>
  )
  const css = sheetsRegistry.toString()
  const materialHead = `
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  `

  const headTagManager = `
    <!-- Google Tag Manager -->
    <script>{(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5P4N3P3')}</script>
    <!-- End Google Tag Manager -->
  `
  const bodyTagManager = `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P4N3P3" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
  `

  const helmet = Helmet.renderStatic()
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();

  // return (
  //     <html {...htmlAttrs}>
  //         <head>
  //             ${headTagManager}
  //             ${helmet.title.toComponent()}
  //             ${helmet.meta.toComponent()}
  //             ${helmet.link.toComponent()}
  //         </head>
  //         <body {...bodyAttrs}>
  //             ${bodyTagManager}
  //             <div id="root">${content}</div>
  //             <script src="bundle.js"></script>
  //         </body>
  //     </html>
  // )

  return `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${headTagManager}
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${materialHead}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        ${bodyTagManager}
        <div id="root">${content}</div>
        <style id="jss-server-side">${css}</style>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
