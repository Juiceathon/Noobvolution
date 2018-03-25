(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 281);
/******/ })
/************************************************************************/
/******/ ({

/***/ 281:
/***/ (function(module, exports) {

<<<<<<< HEAD
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/albert/Desktop/Noobvolution/src/lambda/tokbox.js'");
=======
/* global require, exports */
/* jshint strict:false, eqnull:true */

/**
* An object representing an OpenTok SIP call.
* <p>
* Do not call the <code>new()</code> constructor. To start a SIP call, call the
* {@link OpenTok#dial OpenTok.dial()} method.
*
* @property {String} id
*   The unique ID of the SIP conference.
*
* @property {String} connectionId
*   The connection ID of the audio-only stream that is put into an OpenTok Session.
*
* @property {String} streamId
*   The stream ID of the audio-only stream that is put into an OpenTok Session.
*
*
* @see {@link OpenTok#dial OpenTok.dial()}
*
* @class SipInterconnect
*/
function SipInterconnect(config, properties) {
  var hasProp = {}.hasOwnProperty;
  var key;

  for (key in properties) {
    if (hasProp.call(properties, key)) {
      this[key] = properties[key];
    }
  }

  /**
  * Starts a SIP call.
  * <p>
  * To disconnect the call use the moderation API from a client SDK or the cloud API.
  *
  * @param sessionId The session ID corresponding to the session to which the user will connect.
  *
  * @param token The token for the session ID with which the SIP user will use to connect.
  *
  * @param sipUri The sip URI the SIP Interconnect feature will dial.
  *
  * @param options {Object} An optional options object with the following properties:
  * <p>
  * <ul>
  *   <li>
  *     <code>headers</code> (Object) &mdash; Custom headers to be added to the SIP INVITE
  *     request iniated from OpenTok to the Third Party SIP Platform. All headers must start
  *     with the "X-" prefix, or a Bad Request (400) will be thrown.
  *   </li>
  *   <li>
  *     <code>auth</code> (Object) &mdash; The credentials to be used for HTTP Digest authentication
  *     in case this is required by the Third Party SIP Platform.
  *   <ul>
  *     <li> "username" -- The username to be used in the SIP INVITE.
  *     <li> "password" -- The password to be used in the SIP INVITE.
  *   </ul>
  *   </li>
  *   <li>
  *     <code>secure</code> (Boolean) &mdash; Whether the SIP call should be transmitted
  *     encrypted or not.
  *   </li>
  * </ul>
  */
}

module.exports = SipInterconnect;


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

/*global require, exports*/
/*jshint strict:false, eqnull:true */

var request = __webpack_require__(28);
var errors = __webpack_require__(36);
var pkg = __webpack_require__(35);
var _ = __webpack_require__(23);
var generateJwt = __webpack_require__(25);

var api = function(config, method, session, connection, body, callback) {
  var rurl = config.apiEndpoint + '/v2/project/' + config.apiKey + '/session/' + session;
  if (connection) {
    rurl += '/connection/' + connection;
  }
  if ("defaults" in request) {
    request = request.defaults(_.pick(config, 'proxy', 'timeout'));
  }
  request({
    url: rurl,
    method: method,
    headers: {
      'X-OPENTOK-AUTH': generateJwt(config),
      'User-Agent': 'OpenTok-Node-SDK/' + pkg.version +
        (config.uaAddendum ? ' ' + config.uaAddendum : '')
    },
    json: body
  }, callback);
};

exports.forceDisconnect = function(config, sessionId, connectionId, callback) {
  if(typeof options == 'function') {
    callback = options;
    options = {};
  }
  if(typeof callback != 'function') {
    throw(new errors.ArgumentError('No callback given to signal'));
  }
  if(sessionId == null || connectionId == null) {
    return callback(new errors.ArgumentError('No sessionId or connectionId tiven to signal'));
  }
  api(config, 'DELETE', sessionId, connectionId, null, function(err, response, body) {
    if(err || Math.floor(response.statusCode/100) != 2) {
      if(response && response.statusCode == 403) {
        callback(new errors.AuthError('Invalid API key or secret'));
      } else if(response && response.statusCode == 404) {
        callback(new errors.ForceDisconnectError('Session or Connection not found'));
      } else {
        callback(new errors.RequestError('Unexpected response from OpenTok'));
      }
    } else {
      callback(null);
    }
  });
};


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

/*global require, exports*/
/*jshint strict:false, eqnull:true */

var request = __webpack_require__(28);
var errors = __webpack_require__(36);
var pkg = __webpack_require__(35);
var _ = __webpack_require__(23);
var generateJwt = __webpack_require__(25);

var api = function(config, method, session, connection, body, callback) {
  var rurl = config.apiEndpoint + '/v2/project/' + config.apiKey + '/session/' + session;
  if (connection) {
    rurl += '/connection/' + connection;
  }
  rurl += '/signal';
  if ("defaults" in request) {
    request = request.defaults(_.pick(config, 'proxy', 'timeout'));
  }
  request({
    url: rurl,
    method: method,
    headers: {
      'X-OPENTOK-AUTH': generateJwt(config),
      'User-Agent': 'OpenTok-Node-SDK/' + pkg.version +
        (config.uaAddendum ? ' ' + config.uaAddendum : '')
    },
    json: body
  }, callback);
};

exports.signal = function(config, sessionId, connectionId, payload, callback) {
  if(typeof options == 'function') {
    callback = options;
    options = {};
  }
  if(typeof callback != 'function') {
    throw(new errors.ArgumentError('No callback given to signal'));
  }
  if(sessionId == null || payload == null) {
    return callback(new errors.ArgumentError('No sessionId or payload given to signal'));
  }
  api(config, 'POST', sessionId, connectionId, payload, function(err, response, body) {
    if(err || Math.floor(response.statusCode/100) != 2) {
      if(response && response.statusCode == 403) {
        callback(new errors.AuthError('Invalid API key or secret'));
      } else if(response && response.statusCode == 404) {
        callback(new errors.SignalError('Session or Connection not found'));
      } else {
        callback(new errors.RequestError('Unexpected response from OpenTok'));
      }
    } else {
      callback(null);
    }
  });
};


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

/*global require, exports*/
/*jshint strict:false, eqnull:true */

var request = __webpack_require__(28);
var errors = __webpack_require__(36);
var pkg = __webpack_require__(35);
var _ = __webpack_require__(23);
var generateJwt = __webpack_require__(25);

/**
* An object representing an OpenTok callback.
* <p>
* Do not call the <code>new()</code> constructor. To create a callback, call the
* {@link OpenTok#registerCallback OpenTok.registerCallback()} method.
*
* @property {Number} createdAt
*   The time at which the callback was registered, in milliseconds since the UNIX epoch.
*
* @property {String} id
*   The callback ID.
*
* @property {String} group
*   The group of the archive. If no name was provided when the archive was created, this is set
*   to null.
*
* @see {@link OpenTok#registerCallback OpenTok.registerCallback()}
* @see {@link OpenTok#unregisterCallback OpenTok.unregisterCallback()}
* @see {@link OpenTok#getCallbacks OpenTok.getCallbacks()}
*
* @class Archive
*/
function Callback(config, properties) {
  var hasProp = {}.hasOwnProperty,
      id = properties.id,
      key;

  for (key in properties) {
    if (!hasProp.call(properties, key)) continue;
    this[key] = properties[key];
  }

  /**
  * Stops the recording of the archive.
  * <p>
  * Archives automatically stop recording after 120 minutes or when all clients have disconnected
  * from the session being archived.
  *
  * @param callback {Function} The function to call upon completing the operation. Two arguments
  * are passed to the function:
  *
  * <ul>
  *
  *   <li>
  *      <code>error</code> &mdash; An error object (if the call to the method fails).
  *   </li>
  *
  *   <li>
  *       <code>archive</code> &mdash; The Archive object.
  *   </li>
  *
  * </ul>
  *
  * @method #unregister
  * @memberof Callback
  */
  this.unregister = function(callback) {
    exports.unregister(config, id, callback);
  };
}

var api = function(config, method, path, body, callback) {
  var rurl = config.apiEndpoint + '/v2/project/' + config.apiKey + path;
  if ("defaults" in request) {
    request = request.defaults(_.pick(config, 'proxy', 'timeout'));
  }
  request({
    url: rurl,
    method: method,
    headers: {
      'X-OPENTOK-AUTH': generateJwt(config),
      'User-Agent': 'OpenTok-Node-SDK/' + pkg.version +
        (config.uaAddendum ? ' ' + config.uaAddendum : '')
    },
    json: body
  }, callback);
};

exports.listCallbacks = function(config, options, callback) {
  if(typeof options == 'function') {
    callback = options;
    options = {};
  }
  if(typeof callback != 'function') {
    throw(new errors.ArgumentError('No callback given to listCallbacks'));
  }
  api(config, 'GET', '/callback', null, function(err, response, body) {
    if(!err && body ) {
      try {
        body = JSON.parse(body);
      } catch (_err) {
        err = _err;
      }
    }
    if(err || Math.floor(response.statusCode/100) != 2) {
      if(response && response.statusCode == 403) {
        callback(new errors.AuthError('Invalid API key or secret'));
      } else {
        callback(new errors.RequestError('Unexpected response from OpenTok'));
      }
    } else {
      callback(null, body.map(function(item){
        return new Callback(config, item);
      }));
    }
  });
};

exports.registerCallback = function(config, options, callback) {
  if(typeof options == 'function') {
    callback = options;
    options = {};
  }
  if(typeof callback != 'function') {
    throw(new errors.ArgumentError('No callback given to registerCallback'));
  }
  api(config, 'POST', '/callback', {
    group: options.group,
    event: options.event,
    url: options.url,
  }, function(err, response, body) {
    if(err) {
      callback(err);
    } else if(Math.floor(response.statusCode/100) != 2) {
      if(response && response.statusCode == 404) {
        callback(new errors.CallbackError('Callback event not found'));
      } else if(response && response.statusCode == 403) {
        callback(new errors.AuthError('Invalid API key or secret'));
      } else {
        callback(new errors.RequestError('Unexpected response from OpenTok'));
      }
    } else {
      callback(null, new Callback(config, body));
    }
  });
};

exports.unregisterCallback = function(config, callbackId, callback) {
  if(typeof callback != 'function') {
    throw(new errors.ArgumentError('No callback given to unregisterCallback'));
  }
  if(callbackId == null || callbackId.length === 0) {
    callback(new errors.ArgumentError('No callback ID given'));
    return;
  }
  api(config, 'DELETE', '/callback/' + encodeURIComponent(callbackId), {},
    function(err, response, body) {
    if(err) {
      callback(err);
    } else if(Math.floor(response.statusCode/100) != 2) {
      if(response && response.statusCode == 404) {
        callback(new errors.CallbackError('Callback not found'));
      } else if(response && response.statusCode == 403) {
        callback(new errors.AuthError('Invalid API key or secret'));
      } else {
        callback(new errors.RequestError('Unexpected response from OpenTok'));
      }
    } else {
      callback(null);
    }
  });
};


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  API_KEY: '46086672',
  API_SECRET: 'ee8c6482f67cd2d535447da73855afa61ee7769f'
};
>>>>>>> tokbox confi location

/***/ })

/******/ })));