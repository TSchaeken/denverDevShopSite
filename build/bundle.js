/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-hash-link");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _log = __webpack_require__(9);

var _log2 = _interopRequireDefault(_log);

var _renderer = __webpack_require__(10);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = new _log2.default('info');
var PORT = process.env.PORT || 8000;
var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
    if (req.path === '/') {
        res.send((0, _renderer2.default)(req));
    } else {
        res.redirect(301, '/');
    }
});

app.listen(PORT, '0.0.0.0', function () {
    log.info('Server is running on port: ' + PORT);
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("log");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(4);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

var _reactHelmet = __webpack_require__(5);

var _jss = __webpack_require__(27);

var _JssProvider = __webpack_require__(28);

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _styles = __webpack_require__(1);

var _red = __webpack_require__(29);

var _red2 = _interopRequireDefault(_red);

var _green = __webpack_require__(30);

var _green2 = _interopRequireDefault(_green);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var sheetsRegistry = new _jss.SheetsRegistry();
  var theme = (0, _styles.createMuiTheme)({
    palette: {
      primary: _green2.default,
      accent: _red2.default,
      type: 'light'
    }
  });
  var generateClassName = (0, _styles.createGenerateClassName)();
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _JssProvider2.default,
    { registry: sheetsRegistry, generateClassName: generateClassName },
    _react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: theme, sheetsManager: new Map() },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.path, context: {} },
        _react2.default.createElement(_App2.default, null)
      )
    )
  ));
  var css = sheetsRegistry.toString();
  var materialHead = '\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">\n    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\n  ';

  var headTagManager = '\n    <!-- Google Tag Manager -->\n    <script>{(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-5P4N3P3\')}</script>\n    <!-- End Google Tag Manager -->\n  ';
  var bodyTagManager = '\n    <!-- Google Tag Manager (noscript) -->\n    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P4N3P3" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n    <!-- End Google Tag Manager (noscript) -->\n  ';

  var helmet = _reactHelmet.Helmet.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

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

  return '\n    <!doctype html>\n    <html ' + helmet.htmlAttributes.toString() + '>\n      <head>\n        ' + headTagManager + '\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        ' + helmet.link.toString() + '\n        ' + materialHead + '\n      </head>\n      <body ' + helmet.bodyAttributes.toString() + '>\n        ' + bodyTagManager + '\n        <div id="root">' + content + '</div>\n        <style id="jss-server-side">' + css + '</style>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _CssBaseline = __webpack_require__(13);

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _Main = __webpack_require__(14);

var _Main2 = _interopRequireDefault(_Main);

var _NavBar = __webpack_require__(22);

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_CssBaseline2.default, null),
        _react2.default.createElement(_NavBar2.default, null),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Main2.default })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(5);

var _reactRouterHashLink = __webpack_require__(6);

var _styles = __webpack_require__(1);

var _Typography = __webpack_require__(2);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(15);

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(16);

var _Paper2 = _interopRequireDefault(_Paper);

var _Info = __webpack_require__(17);

var _Info2 = _interopRequireDefault(_Info);

var _unionStation = __webpack_require__(19);

var _unionStation2 = _interopRequireDefault(_unionStation);

var _Form = __webpack_require__(20);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var env = process.env.NODE_ENV || 'development';

//Photo by Owen CL on Unsplash

var styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  },
  main: {
    background: 'linear-gradient(\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0.5)\n    ), url(' + _unionStation2.default + ') no-repeat center center',
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover'
  },
  title: {
    color: '#eeeeee',
    marginLeft: '25px'
  },
  titleInfo1: {
    position: 'relative',
    left: '25px',
    color: '#eeeeee',
    transition: 'left 1s, color 2s',
    transitionDelay: '0.25s'
  },
  titleInfo2: {
    position: 'relative',
    left: '25px',
    color: '#eeeeee',
    transition: 'left 1s, color 2s',
    transitionDelay: '0.35s'
  },
  titleInfo3: {
    position: 'relative',
    left: '25px',
    color: '#eeeeee',
    transition: 'left 1s, color 2s',
    transitionDelay: '0.45s'

  },
  titleInfoHidden: {
    color: 'transparent',
    position: 'relative',
    left: '100px'
  },
  about: {
    width: '100%',
    padding: '20px',
    backgroundImage: 'hsl(210, 9%, 96%)'
  },
  contact: {
    height: '400px'
  }
};

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.state = {
      infoStyle1: 'titleInfoHidden',
      infoStyle2: 'titleInfoHidden',
      infoStyle3: 'titleInfoHidden'
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        infoStyle1: 'titleInfo1',
        infoStyle2: 'titleInfo2',
        infoStyle3: 'titleInfo3'
      });
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement('meta', { charSet: 'utf-8' }),
        _react2.default.createElement(
          'title',
          null,
          'Denver Dev Shop'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Custom Software Development' }),
        _react2.default.createElement('meta', { property: 'og:description', content: 'Custom Software Development' }),
        _react2.default.createElement('meta', { property: 'og:image', content: '' }),
        _react2.default.createElement('meta', { property: 'og:type', content: 'article' }),
        _react2.default.createElement('link', { rel: 'canonical', href: 'http://www.denverdevshop.com' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          infoStyle1 = _state.infoStyle1,
          infoStyle2 = _state.infoStyle2,
          infoStyle3 = _state.infoStyle3;

      return _react2.default.createElement(
        'div',
        null,
        this.head(),
        _react2.default.createElement(
          'div',
          { className: classes.root },
          _react2.default.createElement(
            'div',
            { className: classes.main, id: 'home' },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'display4', className: classes.title },
              'Denver Dev Shop'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'display3', className: classes[infoStyle1] },
                'Design'
              ),
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'display3', className: classes[infoStyle2] },
                'Develop'
              ),
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'display3', className: classes[infoStyle3] },
                'Deliver'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'about' },
            _react2.default.createElement(_Info2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { id: 'contact' },
            _react2.default.createElement(_Form2.default, null)
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(HomePage);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  aboutInfo: {
    height: '400px'
  },
  buttons: {
    marginTop: '40px'
  },
  textbox: {
    height: '400px',
    width: '100%'
  },
  text: {
    whiteSpace: 'pre-line',
    width: '60%'
  },
  guide: {
    height: '20vh',
    fontSize: '100px',
    width: '100%'
  }
};

var Info = function (_Component) {
  _inherits(Info, _Component);

  function Info() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Info);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Info.__proto__ || Object.getPrototypeOf(Info)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: 'who',
      who: "I'll do it missen Off f'r a sup down t'pub, to'neet. Now then, as it 'appens it's o'er yonder! If in doubt-do nowt! If in doubt-do nowt! If in doubt-do nowt! Off f'r a sup down t'pub, to'neet. I'm off down't road, I'm flaggin'. Are'y reet? Dafteth Apeth. Yer flummoxed. Ee bye ecky thump! Were ya born in a barn, lad? Are'y reet? Dafteth Apeth. Now then, as it 'appens it's o'er yonder! If in doubt-do nowt! Wash tha' mouth out, tha's goin' doolally. He's a wrong'un like, I'm off down't road, I'm flaggin'. Oh aye! Owt goin' on today lad, bes' be goin' yam. If in doubt-do nowt! Aye, 'is as daft as a brush, lad! 'am as 'appy as a pig in muck, like. Put it on t'table Fair t' middlin, this is. How do? Eeh by gum, Are'y reet? Dafteth Apeth. I'll do it missen By eckers, well, I'll go to't foot of't stairs! I'll do it missen Theers nowt s'queer as folk. \n\n Now then, as it 'appens it's o'er yonder! Fair t' middlin, this is. If in doubt-do nowt! Wash tha' mouth out, tha's goin' doolally. Were ya born in a barn, lad? I'll do it missen Ee bye ecky thump! Were ya born in a barn, lad? Tha's getten tha'self in a pickle there lass. Just nipping t' lavvy. Off f'r a sup down t'pub, to'neet. I've got nowt to do today, I need summat to do. Oh aye! Now then, as it 'appens it's o'er yonder! 'am as 'appy as a pig in muck, like. If in doubt-do nowt! Theers nowt s'queer as folk. Yer flummoxed. Off f'r a sup down t'pub, to'neet. I'll do it missen Do I 'eckers like, Wash tha' mouth out, tha's goin' doolally. Yer flummoxed. Fair t' middlin, this is. By eckers, well, I'll go to't foot of't stairs! You're in luck m'boy! Fair t' middlin, this is. Now then, do as thy says, not as thy does. Put it on t'table Aye up lass. Wash tha' mouth out, tha's goin' doolally. \n\n Yer flummoxed. How do? Eeh by gum, Oh aye! Owt goin' on today lad, bes' be goin' yam. Were ya born in a barn, lad? Aye up lass. You're in luck m'boy! Just nipping t' lavvy. Yer couldn't organise a set of fat bobbies. Aye up, she's a reight bobby dazzler. Yer flummoxed.",
      what: 'We make stuff.',
      why: 'Because we love this shit.'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Info, [{
    key: 'handleClick',
    value: function handleClick(name) {
      this.setState({
        active: name
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _core.Grid,
          {
            container: true,
            justify: 'center',
            direction: 'row',
            alignItems: 'center',
            className: classes.guide
          },
          _react2.default.createElement(
            _core.Grid,
            { item: true },
            _react2.default.createElement(
              _core.Typography,
              { variant: 'display2' },
              'What makes us different'
            ),
            _react2.default.createElement(_core.Divider, null)
          )
        ),
        _react2.default.createElement(
          _core.Grid,
          {
            container: true,
            justify: 'center',
            direction: 'row',
            alignItems: 'center',
            className: classes.buttons
          },
          _react2.default.createElement(
            _core.Grid,
            { item: true },
            _react2.default.createElement(
              _core.Button,
              {
                name: 'who',
                className: classes.buttons,
                onClick: function onClick() {
                  return _this2.handleClick('who');
                }
              },
              'Who'
            )
          ),
          _react2.default.createElement(
            _core.Grid,
            { item: true },
            _react2.default.createElement(
              _core.Button,
              {
                name: 'what',
                className: classes.buttons,
                onClick: function onClick() {
                  return _this2.handleClick('what');
                }
              },
              'What'
            )
          ),
          _react2.default.createElement(
            _core.Grid,
            { item: true },
            _react2.default.createElement(
              _core.Button,
              {
                name: 'why',
                className: classes.buttons,
                onClick: function onClick() {
                  return _this2.handleClick('why');
                }
              },
              'Why'
            )
          )
        ),
        _react2.default.createElement(
          _core.Grid,
          {
            container: true,
            justify: 'center',
            alignItems: 'center',
            className: classes.textbox
          },
          _react2.default.createElement(
            _core.Grid,
            { item: true, className: classes.text },
            this.state[this.state.active]
          ),
          _react2.default.createElement(_core.Grid, null)
        )
      );
    }
  }]);

  return Info;
}(_react.Component);

exports.default = (0, _core.withStyles)(styles)(Info);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a75f3858ec38965c5436ab387c03d992.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _Typography = __webpack_require__(2);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _TextField = __webpack_require__(21);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '800px'
  },
  textField: {
    width: '300px',
    margin: '20px 40px',
    paddingRight: '40px',
    paddingTop: '20px'
  },
  Message: {
    width: '100%'
  }
};

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      message: '',
      sent: false
    }, _this.onChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    }, _this.onSubmit = function (event) {
      event.preventDefault();
      _this.setState({
        sent: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;


      return _react2.default.createElement(
        'div',
        { className: classes.container },
        !this.state.sent ? _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(_TextField2.default, {
            id: 'firstName',
            label: 'First Name',
            name: 'firstName',
            className: classes.textField,
            value: this.state.firstName,
            onChange: function onChange(e) {
              return _this2.onChange(e);
            }
          }),
          _react2.default.createElement(_TextField2.default, {
            id: 'lastName',
            label: 'Last Name',
            name: 'lastName',
            className: classes.textField,
            value: this.state.lastName,
            onChange: function onChange(e) {
              return _this2.onChange(e);
            }
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_TextField2.default, {
            name: 'email',
            label: 'Email Address',
            className: classes.textField,
            value: this.state.email,
            onChange: function onChange(e) {
              return _this2.onChange(e);
            }
          }),
          _react2.default.createElement(_TextField2.default, {
            name: 'location',
            label: 'Location',
            className: classes.textField,
            value: this.state.location,
            onChange: function onChange(e) {
              return _this2.onChange(e);
            }
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_TextField2.default, {
            name: 'message',
            label: 'Message',
            multiline: true,
            rows: '6',
            className: classes.textField + ' ' + classes.Message,
            value: this.state.message,
            onChange: function onChange(e) {
              return _this2.onChange(e);
            }

          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.onSubmit },
            'Submit'
          )
        ) : _react2.default.createElement(
          _Typography2.default,
          { variant: 'display3' },
          'Thanks for your interest, we\'ll get back to you soon.'
        )
      );
    }
  }]);

  return Form;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(Form);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterHashLink = __webpack_require__(6);

var _styles = __webpack_require__(1);

var _AppBar = __webpack_require__(24);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(25);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(2);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _lodash = __webpack_require__(26);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  navtop: {
    position: 'absolute',
    boxShadow: 'none',
    width: '100%',
    top: 0,
    backgroundColor: 'transparent',
    color: 'white',
    transition: 'background-color 0.5s, color 0.5s'
  },
  navshow: {
    position: 'fixed',
    width: '100%',
    top: 0,
    transition: 'top 0.3s',
    backgroundColor: 'white',
    color: 'black'
  },
  navhidden: {
    width: '100%',
    top: '-100px',
    transition: 'top 0.5s',
    backgroundColor: 'white',
    color: 'black'
  },
  invisible: {
    width: '100%',
    top: '-100px',
    backgroundColor: 'transparent',
    color: 'transparent'
  }
};

var NavBar = function (_Component) {
  _inherits(NavBar, _Component);

  function NavBar() {
    _classCallCheck(this, NavBar);

    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this));

    _this.state = {
      top: true,
      detached: false,
      goingUp: false,
      pos: 0
    };

    _this.topDetect = _lodash2.default.throttle(_this.topDetect.bind(_this), 50);
    _this.scrollDirection = _lodash2.default.throttle(_this.scrollDirection.bind(_this), 50, { leading: true });
    return _this;
  }

  _createClass(NavBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('MOUNTED');
      window.addEventListener('scroll', this.topDetect);
      window.addEventListener('scroll', this.scrollDirection);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('UNMOUNTED');
      window.removeEventListener('scroll', this.topDetect);
      window.removeEventListener('scroll', this.scrollDirection);
    }
  }, {
    key: 'topDetect',
    value: function topDetect() {
      var x = window.pageYOffset || document.documentElement.scrollTop;
      console.log(x);
      switch (true) {
        case x == 0:
          {
            this.setState({
              top: true,
              detached: false,
              goingUp: false,
              pos: 0
            });
            break;
          }
        case 0 < x && x <= 400 && this.state.detached === false:
          {
            this.setState({
              top: true,
              detached: false
            });
            break;
          }
        case 400 < x && x <= 650 && this.state.detached === false:
          {
            this.setState({
              top: false,
              detached: false
            });
            break;
          }
        case x > 650:
          {
            this.setState({
              top: false,
              detached: true
            });
            break;
          }
        default:
          {
            this.setState(_extends({}, this.state));
          }
      }
    }
  }, {
    key: 'scrollDirection',
    value: function scrollDirection() {
      var lastScrollTop = this.state.pos;
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st < lastScrollTop) {
        this.setState({ goingUp: true });
      } else {
        this.setState({ goingUp: false });
      }
      lastScrollTop = st <= 0 ? 0 : st;
      this.setState({
        pos: lastScrollTop
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          top = _state.top,
          goingUp = _state.goingUp,
          detached = _state.detached;

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _AppBar2.default,
          {
            className: top ? classes.navtop : goingUp && detached ? classes.navshow : detached ? classes.navhidden : classes.invisible
          },
          _react2.default.createElement(
            _Toolbar2.default,
            null,
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'title', color: 'inherit', className: classes.flex },
              'Denver Dev Shop'
            ),
            _react2.default.createElement(
              _Button2.default,
              { smooth: true, component: _reactRouterHashLink.HashLink, color: 'inherit', to: '/#home' },
              'Home'
            ),
            _react2.default.createElement(
              _Button2.default,
              { smooth: true, component: _reactRouterHashLink.HashLink, color: 'inherit', to: '/#about' },
              'About'
            ),
            _react2.default.createElement(
              _Button2.default,
              { smooth: true, component: _reactRouterHashLink.HashLink, color: 'inherit', to: '/#contact' },
              'Contact Us'
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(_react.Component);

NavBar.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(NavBar);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/jss");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ })
/******/ ]);