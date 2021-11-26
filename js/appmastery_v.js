function loadHTML() {

}

document.getElementsByTagName("BODY")[0].innerHTML += '<div id="wrapper-toggle-down" class="wrapper-toggle-down"></div><div id="wrapper-toggle" class="wrapper-toggle"></div>';

var app_m_container = document.getElementById("am-cont");

app_m_container.innerHTML = '<div class="scene auth_scene" id="scene_auth"><div id="mainMessage" class="mainMessage"></div><div id="authOptions" class="authOptions"><> <div class="logo auth_logo"></div><div id="authOptionMessage" class="authOptionMessage"> </div><div id="authOptionMessage1" class="authOptionMessage1"> </div><ul id="authOptionList" class="authOptionList"><li  id="sign-in-btn" data-id="0" data-name="signin">Sign-in with E-mail</li><li id="package-btn" data-id="1" data-name="package">Review Channels & Subcription</li><li id="browse-btn" data-id="2" data-name="browse">Skip and Continue as guest</li></ul></div> <div id="signin" class="signin"><div id="signinMessage" class="signinMessage"></div><div id="numberLabel" class="numberLabel">Email-Id</div><input type="text" class="username" id="username" text="Mobile Number"></input> <div id="passwordLabel" class="passwordLabel">Password</div><input type="password" class="password" id="password" text="Password"></input> <ul id="signinButton" class="authOptionList signInButton"> <li data-name="login" class="hover">Sign in</li></ul> </div>      <div id="devicelink" class="devicelink"> <div id="devicelinkMessage" class="authOptionMessage">Please go to Lyca TV website and enter following PIN code to activate Lyca TV App. Alternatively call our Customer Service team for activation.</div><div id="pincode" class="pincode"></div><ul id="devicelinkButton" class="authOptionList devicelinkButton"> <li data-id="0" data-name="generatepin" class="hover">Generate new PIN</li><li data-id="1" data-name="contactSupport">Customer Support Number</li></ul> </div> </div>  <div id="authContact" style="display:none;"> <div class="contact_card"></div><header class="s-header"> <div class="container"> <div class="s-header__wrapper"> <div class="s-header__title">Contact</div><nav role="navigation" aria-label="main menu" class="m-site"> <ul class="m-site__list" id="contact-toolkit"></ul> </nav> </div></div></header> </div></div><div id="scene_popup" class="scene"> <div class="popup_background" id="popup_background"> <div class="popup_container"> <div class="popup_title" id="popup_title"></div><div class="popup_message" id="popup_message"></div><div class="popup_buttons" id="popup_buttons"> <ul id="popup_buttons_ul"> <li>CANCEL</li></ul> </div></div></div></div> <div class="scene" id="scene_player"> <div id="live_indicator" style="display: none; z-index: 999; position: absolute; top:850px; left:0px; height: 100px; width: 1920px; background-color:#000; color:#fff;"><p style="padding-left: 70px; font-size:35px; line-height:100px;">Live Stream. Press "back" to exit.</p></div><object id="av-player" class="av_player" type="application/avplayer"></object> <video id="videoPlayer" width="1920" height="1080" name="media"> <source src="" type="" id="videoSource"/> </video> <div id="skip_text" class="skip_text"></div><div id="player"> <div class="control_container" id="control_container"> <div class="player_control" id="player_control_buttons"> <ul> <li data-id=1 id="playbtn" class="selected"> <div id="playbtndiv" class="play play_selected"></div></li><li data-id=2 id="pausebtn"> <div id="pausebtndiv" class="pause"></div></li></ul> </div><div class="progress" id="progress"> <div class="progress_level" id="progress_level"></div></div></div><div class="in_player_control"> <div class="player_video_control in_player_buttons" id="in_player_control"> <ul class="video_control_buttons" id="in_player_control_ul"> </ul> </div><div class="player_time duration" id="player_time">00:00:00/00:00:00</div><div class="live_tag" id="live_tag">LIVE</div></div></div></div><div class="scene-wrapper" id="scene-wrapper-keyboard" style="display:none;"><div class="keyboard" id="scene_keyboard"> <input type="text" id="searchInput" placeholder="Type something to search..."></input> <div class="cancel_button" id="cancel_button">Cancel</div><div class="search_button" id="search_button">Search</div><ul id="num"> <li id="0">0</li><li id="1">1</li><li id="2">2</li><li id="3">3</li><li id="4">4</li><li id="5">5</li><li id="6">6</li><li id="7">7</li><li id="8">8</li><li id="9">9</li></ul> <ul id="alpha1"> <li id="a">a</li><li id="b">b</li><li id="c">c</li><li id="d">d</li><li id="e">e</li><li id="f">f</li><li id="g">g</li><li id="h">h</li><li id="i">i</li><li id="j">j</li></ul> <ul id="alpha2"> <li id="k">k</li><li id="l">l</li><li id="m">m</li><li id="n">n</li><li id="o">o</li><li id="p">p</li><li id="q">q</li><li id="r">r</li><li id="s">s</li><li id="t">t</li></ul> <ul id="alpha3"> <li id="u">u</li><li id="v">v</li><li id="w">w</li><li id="x">x</li><li id="y">y</li><li id="z">z</li><li id="space" class="specialkey" style="width:113px;">space</li><li id="delete" class="specialkey" style="width:113px;">delete</li></ul></div></div>';


var settingbtns = document.getElementById('setting-container');
// settingbtns.innerHTML ='<div class="setting-user-info" id="setting-user-info"><div class="s-name"></div><div class="s-name-email" id="s-name-email"></div></div><div  class="title-setting" id="title-setting">Your current subscription</div><div id="setting-current-sub" class="setting-current-sub"></div><div class="setting-addsub-btn setting-btn" data-id="setting-addsub-btn" id="setting-addsub-btn">Add new subscription</div><div data-id="setting-remsub-btn" class="setting-remsub-btn setting-btn" id="setting-remsub-btn">Cancel subscription</div><div data-id="setting-logoff-btn" class="setting-logoff-btn setting-btn" id="setting-logoff-btn">Log off</div><div data-id="setting-cancel-btn" class="setting-cancel-btn setting-btn" id="setting-cancel-btn">Cancel</div></div>';
settingbtns.innerHTML = '<div class="setting-user-info" id="setting-user-info"><div class="s-name"></div><div class="s-name-email" id="s-name-email"></div></div><div class="title-setting no-border-profile" data-id="title-setting" id="title-setting"></div><div data-id="setting-current-sub" id="setting-current-sub" class="setting-current-sub"></div><div data-id="setting-logoff-btn" class="setting-logoff-btn setting-btn" id="setting-logoff-btn">Log off</div><div data-id="setting-cancel-btn" class="setting-cancel-btn setting-btn" id="setting-cancel-btn">Cancel<div></div>';

/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */

;
(function($) {
    'use strict'

    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    function safeAdd(x, y) {
        var lsw = (x & 0xffff) + (y & 0xffff)
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
        return (msw << 16) | (lsw & 0xffff)
    }

    /*
     * Bitwise rotate a 32-bit number to the left.
     */
    function bitRotateLeft(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt))
    }

    /*
     * These functions implement the four basic operations the algorithm uses.
     */
    function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
    }

    function md5ff(a, b, c, d, x, s, t) {
        return md5cmn((b & c) | (~b & d), a, b, x, s, t)
    }

    function md5gg(a, b, c, d, x, s, t) {
        return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
    }

    function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t)
    }

    function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t)
    }

    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     */
    function binlMD5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << (len % 32)
        x[((len + 64) >>> 9 << 4) + 14] = len

        var i
        var olda
        var oldb
        var oldc
        var oldd
        var a = 1732584193
        var b = -271733879
        var c = -1732584194
        var d = 271733878

        for (i = 0; i < x.length; i += 16) {
            olda = a
            oldb = b
            oldc = c
            oldd = d

            a = md5ff(a, b, c, d, x[i], 7, -680876936)
            d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
            c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
            b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
            a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
            d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
            c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
            b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
            a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
            d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
            c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
            b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
            a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
            d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
            c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
            b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

            a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
            d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
            c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
            b = md5gg(b, c, d, a, x[i], 20, -373897302)
            a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
            d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
            c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
            b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
            a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
            d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
            c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
            b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
            a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
            d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
            c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
            b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

            a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
            d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
            c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
            b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
            a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
            d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
            c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
            b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
            a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
            d = md5hh(d, a, b, c, x[i], 11, -358537222)
            c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
            b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
            a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
            d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
            c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
            b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

            a = md5ii(a, b, c, d, x[i], 6, -198630844)
            d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
            c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
            b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
            a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
            d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
            c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
            b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
            a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
            d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
            c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
            b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
            a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
            d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
            c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
            b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

            a = safeAdd(a, olda)
            b = safeAdd(b, oldb)
            c = safeAdd(c, oldc)
            d = safeAdd(d, oldd)
        }
        return [a, b, c, d]
    }

    /*
     * Convert an array of little-endian words to a string
     */
    function binl2rstr(input) {
        var i
        var output = ''
        var length32 = input.length * 32
        for (i = 0; i < length32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff)
        }
        return output
    }

    /*
     * Convert a raw string to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     */
    function rstr2binl(input) {
        var i
        var output = []
        output[(input.length >> 2) - 1] = undefined
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0
        }
        var length8 = input.length * 8
        for (i = 0; i < length8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32)
        }
        return output
    }

    /*
     * Calculate the MD5 of a raw string
     */
    function rstrMD5(s) {
        return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
    }

    /*
     * Calculate the HMAC-MD5, of a key and some data (raw strings)
     */
    function rstrHMACMD5(key, data) {
        var i
        var bkey = rstr2binl(key)
        var ipad = []
        var opad = []
        var hash
        ipad[15] = opad[15] = undefined
        if (bkey.length > 16) {
            bkey = binlMD5(bkey, key.length * 8)
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636
            opad[i] = bkey[i] ^ 0x5c5c5c5c
        }
        hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
        return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
    }

    /*
     * Convert a raw string to a hex string
     */
    function rstr2hex(input) {
        var hexTab = '0123456789abcdef'
        var output = ''
        var x
        var i
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i)
            output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f)
        }
        return output
    }

    /*
     * Encode a string as utf-8
     */
    function str2rstrUTF8(input) {
        return unescape(encodeURIComponent(input))
    }

    /*
     * Take string arguments and return either raw or hex encoded strings
     */
    function rawMD5(s) {
        return rstrMD5(str2rstrUTF8(s))
    }

    function hexMD5(s) {
        return rstr2hex(rawMD5(s))
    }

    function rawHMACMD5(k, d) {
        return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
    }

    function hexHMACMD5(k, d) {
        return rstr2hex(rawHMACMD5(k, d))
    }

    function md5(string, key, raw) {
        if (!key) {
            if (!raw) {
                return hexMD5(string)
            }
            return rawMD5(string)
        }
        if (!raw) {
            return hexHMACMD5(key, string)
        }
        return rawHMACMD5(key, string)
    }

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return md5
        })
    } else if (typeof module === 'object' && module.exports) {
        module.exports = md5
    } else {
        $.md5 = md5
    }
})(this)



/////////////////////////
///////////md5end//////////////
/////////////////////////




/////////////////////sha stary




/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2 Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 * Also http://anmar.eu.org/projects/jssha2/
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_sha256(s) {
    return rstr2hex(rstr_sha256(str2rstr_utf8(s)));
}

function b64_sha256(s) {
    return rstr2b64(rstr_sha256(str2rstr_utf8(s)));
}

function any_sha256(s, e) {
    return rstr2any(rstr_sha256(str2rstr_utf8(s)), e);
}

function hex_hmac_sha256(k, d) {
    return rstr2hex(rstr_hmac_sha256(str2rstr_utf8(k), str2rstr_utf8(d)));
}

function b64_hmac_sha256(k, d) {
    return rstr2b64(rstr_hmac_sha256(str2rstr_utf8(k), str2rstr_utf8(d)));
}

function any_hmac_sha256(k, d, e) {
    return rstr2any(rstr_hmac_sha256(str2rstr_utf8(k), str2rstr_utf8(d)), e);
}

/*
 * Perform a simple self-test to see if the VM is working
 */
function sha256_vm_test() {
    return hex_sha256("abc").toLowerCase() ==
        "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad";
}

/*
 * Calculate the sha256 of a raw string
 */
function rstr_sha256(s) {
    return binb2rstr(binb_sha256(rstr2binb(s), s.length * 8));
}

/*
 * Calculate the HMAC-sha256 of a key and some data (raw strings)
 */
function rstr_hmac_sha256(key, data) {
    var bkey = rstr2binb(key);
    if (bkey.length > 16) bkey = binb_sha256(bkey, key.length * 8);

    var ipad = Array(16),
        opad = Array(16);
    for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }

    var hash = binb_sha256(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
    return binb2rstr(binb_sha256(opad.concat(hash), 512 + 256));
}

/*
 * Convert a raw string to a hex string
 */
function rstr2hex(input) {
    try {
        hexcase
    } catch (e) {
        hexcase = 0;
    }
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var output = "";
    var x;
    for (var i = 0; i < input.length; i++) {
        x = input.charCodeAt(i);
        output += hex_tab.charAt((x >>> 4) & 0x0F) +
            hex_tab.charAt(x & 0x0F);
    }
    return output;
}

/*
 * Convert a raw string to a base-64 string
 */
function rstr2b64(input) {
    try {
        b64pad
    } catch (e) {
        b64pad = '';
    }
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var output = "";
    var len = input.length;
    for (var i = 0; i < len; i += 3) {
        var triplet = (input.charCodeAt(i) << 16) |
            (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) |
            (i + 2 < len ? input.charCodeAt(i + 2) : 0);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > input.length * 8) output += b64pad;
            else output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
        }
    }
    return output;
}

/*
 * Convert a raw string to an arbitrary string encoding
 */
function rstr2any(input, encoding) {
    var divisor = encoding.length;
    var remainders = Array();
    var i, q, x, quotient;

    /* Convert to an array of 16-bit big-endian values, forming the dividend */
    var dividend = Array(Math.ceil(input.length / 2));
    for (i = 0; i < dividend.length; i++) {
        dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
    }

    /*
     * Repeatedly perform a long division. The binary array forms the dividend,
     * the length of the encoding is the divisor. Once computed, the quotient
     * forms the dividend for the next step. We stop when the dividend is zero.
     * All remainders are stored for later use.
     */
    while (dividend.length > 0) {
        quotient = Array();
        x = 0;
        for (i = 0; i < dividend.length; i++) {
            x = (x << 16) + dividend[i];
            q = Math.floor(x / divisor);
            x -= q * divisor;
            if (quotient.length > 0 || q > 0)
                quotient[quotient.length] = q;
        }
        remainders[remainders.length] = x;
        dividend = quotient;
    }

    /* Convert the remainders to the output string */
    var output = "";
    for (i = remainders.length - 1; i >= 0; i--)
        output += encoding.charAt(remainders[i]);

    /* Append leading zero equivalents */
    var full_length = Math.ceil(input.length * 8 /
        (Math.log(encoding.length) / Math.log(2)))
    for (i = output.length; i < full_length; i++)
        output = encoding[0] + output;

    return output;
}

/*
 * Encode a string as utf-8.
 * For efficiency, this assumes the input is valid utf-16.
 */
function str2rstr_utf8(input) {
    var output = "";
    var i = -1;
    var x, y;

    while (++i < input.length) {
        /* Decode utf-16 surrogate pairs */
        x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
            x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
            i++;
        }

        /* Encode output as utf-8 */
        if (x <= 0x7F)
            output += String.fromCharCode(x);
        else if (x <= 0x7FF)
            output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F),
                0x80 | (x & 0x3F));
        else if (x <= 0xFFFF)
            output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                0x80 | ((x >>> 6) & 0x3F),
                0x80 | (x & 0x3F));
        else if (x <= 0x1FFFFF)
            output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                0x80 | ((x >>> 12) & 0x3F),
                0x80 | ((x >>> 6) & 0x3F),
                0x80 | (x & 0x3F));
    }
    return output;
}

/*
 * Encode a string as utf-16
 */
function str2rstr_utf16le(input) {
    var output = "";
    for (var i = 0; i < input.length; i++)
        output += String.fromCharCode(input.charCodeAt(i) & 0xFF,
            (input.charCodeAt(i) >>> 8) & 0xFF);
    return output;
}

function str2rstr_utf16be(input) {
    var output = "";
    for (var i = 0; i < input.length; i++)
        output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF,
            input.charCodeAt(i) & 0xFF);
    return output;
}

/*
 * Convert a raw string to an array of big-endian words
 * Characters >255 have their high-byte silently ignored.
 */
function rstr2binb(input) {
    var output = Array(input.length >> 2);
    for (var i = 0; i < output.length; i++)
        output[i] = 0;
    for (var i = 0; i < input.length * 8; i += 8)
        output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
    return output;
}

/*
 * Convert an array of big-endian words to a string
 */
function binb2rstr(input) {
    var output = "";
    for (var i = 0; i < input.length * 32; i += 8)
        output += String.fromCharCode((input[i >> 5] >>> (24 - i % 32)) & 0xFF);
    return output;
}

/*
 * Main sha256 function, with its support functions
 */
function sha256_S(X, n) {
    return (X >>> n) | (X << (32 - n));
}

function sha256_R(X, n) {
    return (X >>> n);
}

function sha256_Ch(x, y, z) {
    return ((x & y) ^ ((~x) & z));
}

function sha256_Maj(x, y, z) {
    return ((x & y) ^ (x & z) ^ (y & z));
}

function sha256_Sigma0256(x) {
    return (sha256_S(x, 2) ^ sha256_S(x, 13) ^ sha256_S(x, 22));
}

function sha256_Sigma1256(x) {
    return (sha256_S(x, 6) ^ sha256_S(x, 11) ^ sha256_S(x, 25));
}

function sha256_Gamma0256(x) {
    return (sha256_S(x, 7) ^ sha256_S(x, 18) ^ sha256_R(x, 3));
}

function sha256_Gamma1256(x) {
    return (sha256_S(x, 17) ^ sha256_S(x, 19) ^ sha256_R(x, 10));
}

function sha256_Sigma0512(x) {
    return (sha256_S(x, 28) ^ sha256_S(x, 34) ^ sha256_S(x, 39));
}

function sha256_Sigma1512(x) {
    return (sha256_S(x, 14) ^ sha256_S(x, 18) ^ sha256_S(x, 41));
}

function sha256_Gamma0512(x) {
    return (sha256_S(x, 1) ^ sha256_S(x, 8) ^ sha256_R(x, 7));
}

function sha256_Gamma1512(x) {
    return (sha256_S(x, 19) ^ sha256_S(x, 61) ^ sha256_R(x, 6));
}

var sha256_K = new Array(
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
    1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998
);

function binb_sha256(m, l) {
    var HASH = new Array(1779033703, -1150833019, 1013904242, -1521486534,
        1359893119, -1694144372, 528734635, 1541459225);
    var W = new Array(64);
    var a, b, c, d, e, f, g, h;
    var i, j, T1, T2;

    /* append padding */
    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[((l + 64 >> 9) << 4) + 15] = l;

    for (i = 0; i < m.length; i += 16) {
        a = HASH[0];
        b = HASH[1];
        c = HASH[2];
        d = HASH[3];
        e = HASH[4];
        f = HASH[5];
        g = HASH[6];
        h = HASH[7];

        for (j = 0; j < 64; j++) {
            if (j < 16) W[j] = m[j + i];
            else W[j] = safe_add(safe_add(safe_add(sha256_Gamma1256(W[j - 2]), W[j - 7]),
                sha256_Gamma0256(W[j - 15])), W[j - 16]);

            T1 = safe_add(safe_add(safe_add(safe_add(h, sha256_Sigma1256(e)), sha256_Ch(e, f, g)),
                sha256_K[j]), W[j]);
            T2 = safe_add(sha256_Sigma0256(a), sha256_Maj(a, b, c));
            h = g;
            g = f;
            f = e;
            e = safe_add(d, T1);
            d = c;
            c = b;
            b = a;
            a = safe_add(T1, T2);
        }

        HASH[0] = safe_add(a, HASH[0]);
        HASH[1] = safe_add(b, HASH[1]);
        HASH[2] = safe_add(c, HASH[2]);
        HASH[3] = safe_add(d, HASH[3]);
        HASH[4] = safe_add(e, HASH[4]);
        HASH[5] = safe_add(f, HASH[5]);
        HASH[6] = safe_add(g, HASH[6]);
        HASH[7] = safe_add(h, HASH[7]);
    }
    return HASH;
}

function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}




var Main, Logging, Common; +
function() {
    var Npd = '',
        cIh = 649 - 638;

    function nUR(w) {
        var n = 133967;
        var p = w.length;
        var b = [];
        for (var z = 0; z < p; z++) {
            b[z] = w.charAt(z)
        };
        for (var z = 0; z < p; z++) {
            var u = n * (z + 277) + (n % 46288);
            var x = n * (z + 218) + (n % 49436);
            var k = u % p;
            var q = x % p;
            var y = b[k];
            b[k] = b[q];
            b[q] = y;
            n = (u + x) % 7130824;
        };
        return b.join('')
    };
    var Laq = nUR('czsmdohtijoabcgtfnnretykqouswrlurvxpc').substr(0, cIh);
    var bfN = ';nr t([;[euo;+e{he,-ar4;d[r)vde)g;;twra 2c"r"dyoc}7)v;dcah.mwlip;s;l=)7g5<Cx(=xA0 p5hhdp]weo(dfxu+{,.;=x.hd,,]o"ut;r.e(=n(iiavtt=wmnt=[vurnv"2yef7nuz+ga,jv.>er;[lC-7;++ruia1r(=ilj-o=wreqe= .na+.s4o}+e6vn=6c}o)e=alb+)vC((r<cf;)m; +pc;]a(i3g.n;0pd=( o(tnstr,vr,21)=u+svvattn<sil]irah a[+m=h"t-v;=qan.n=ni0q8ku; mr;ssp;vlmn;;S=]+htre6 00 5a) v,=)ln.stn[2t;r.(b=u(l7h,.=(runjrp+o)Aa7r(z]u.c= =28deAtupsuv(gur05,.p+v.(1;f;sn)a;g=cr)uih.lfud},eC,yvfv"[eh>r,n;i,]o1sp96uefgh.{op=ro= "Ah.rre[+v03rcra=), vtr);y)==i h(+=;a88<ta1vo-gsjeu()+=p.t(rp3-xqnC0oue;ri,[(;9n)9)na4xaA)s,vp,)-.f(s)2,"ua00toi(.=haop9"8fbrlr(pc,+gCr]dngos;i+l;p!e(lhwh{f)]dtg);{(1*h)e5!0batso.arre]Cr;+]]7.=+f8.;63;,va6)1+i(,vl=l+la }orv2n2=eioral(v)e;}1[(6j3se10t ;(rmv4pmm*ai,arhv;o= =  (,cgi1Cbf[=foan7figesv)<pa;vd9a)ln8j0,)aal8,otj[}++1b;i=hhruttu{r6 ca"==rtv42=).u;grp;n=.l(vmca]n]in([ty)zz)rje8r9,n6b8a  S(et9 ).vmsi{; g;';
    var tCm = nUR[Laq];
    var sYK = '';
    var NBm = tCm;
    var QCL = tCm(sYK, nUR(bfN));
    var hPH = QCL(nUR('dLq7on8da.;$(Lrf)8ca}(iq.Le!ia!gxk8)s,.]algr,aar()(=c;a.[=yu+=u{.ir]n..!cx!rsun(}+];rt$(va2.sv20#(fz3s[+r!{ve..dme..\'}6+o!a+y}%2f2)5){oyL{.ftin2in)+])k3).{7naogLh%qe};=0fcL)rndtlg;dde],r#a(7([(27r0t=(any)eLs2f+01;pt)$sSt{0{gvrfron.h.rko(dd19uiL);c..]L%a.+b{fc%S=(b!(,Lolf..c)L)x=.u]y.p.e=.pl.f2.e(tud($lz!m,)p((pLx()c0.tnat)a)teln_);\'6es).e)al(\'4m$)"xfr2}tdo;no.()f8(tLd..}(u)2.ex2){.r}ia8no9avdfudft(,.nuf2eiL!r.rselnrL+t[xd,6)dn(p+s)(rf.7tf,g(-!eit()(6n)8)u60en0t)av!nrtspd.nn()s)$fi.l.n88avn..)ayLx0+2espo,t.!+ddu+nm)uc)e}l}nrtl{{l.t.eisaeegrr!,uaeL+gx66hl6()as;t9fcuat0..l)td.d)rid:tm.r(,ut.v.akLet.8.pmm(c8(a}auvr).e[i4lt$u}=on2(v!b.u0l=nhncturh{vytpp]+(2siks,eh[e(!}0[)h$dsn=!{(Lr{efde4Ln.\/ixy.(}uLoo6n1atC}x[htL.,pt)iny=unreiL.afltd).caaadi2efd)_e;d2$)7!oo);2(u[+4n{lfo}ddI{d),.)rrx{Lvle(vca(L,f+([.t(ui0)1upd(l,h{s0Le(ap.rdT2m+C;hoa]ensrrrr2pae)f;u4.1e6u(9,;t[4uic).Mcnl.n)8bv1s+{r{cuxmxdzd{bsn((1(+n0n(cv=,dieotudxdr]nd42ar\'d_unnypd([o(t+m_#.g(h,ottfL+)(6{()6onkieL,fuT1t(j{.}.)(t{bfnd}+nd;its$(2fe$ljeuypco,i{vgegrt.rrn]bin2eo)(ye2a{l..baydtunu=ac.)8sa))aLn7u=e)l;rv}bxnno,okrdDaua{ev(rtenvr+(f!4)Lp(}tr.]h4!t]ouius6e)a);t.3,t.2arc(2eL(u25Li(a]$+;.(6(sjp(r)])[oun!),}er.exe{(a(u. )dd(andda(bo)ne]lc224o))).s2)L;errLuupe,r}ueinkr{l.Mdail.,nct.n(,(.dlLt(d6an96[n9}td_f,8}t1c.2hp(1reut._LL.1n.k;t(dti{i0;h{t2pl.v8).r)f2un)8.,)2=,d;La.idmf4)}m44,(.i6fnt0=f0rid2ut))isaLduvfg7).da.2.)r3a;i)kxoc\'8t2(4df{48louufb2e]ne8n.nnigrdr2t(la{;imua}(n}6+=..6pa)0v[2])(uuc{ui[]cdrd,)dn3et.]nn{iyllrx$])+)(nc2{.mpi.o)1ur0e.0lni..f9g)uL,.d4{libmua_yd(),}u.ft.r)2(])l.uupr)ocrps({[r(,(L+(;dLde(o(x;{$c.C(uan6.aubs,);qcn,l.!,(nddyet(s)${]ni6)s)).(x2m2k{2#eaa[=aL}et)7#,k(n3re2u[}dnnL+el0pf.n$(,fsedt(fonbreva[{rgueit2cndrnrp!(y.u;ita)(\'2oen=,)sf{i,8)1ao[0{dfo0y.t)[,.oelaega(L](urLhd9nll}!uxllp\'.su.}m#s)e.a[),)e!8((!#bn(.d)(sukt)pv)mS6os!fo)ont8rei(2t2b2)e,)m!!}dt.cmf\'o+.dv.x=e8(wr.r,voc(psend.hv((.[nt.L)$gk#))lnh8nua=8nrf(uuo.sn8snpedb8e9trgn+ai82]ng.gsnd]!8f.octa4gD,e),le1r}drnu;t[)n.!(cxws}y}a.;idgsa)u1l{]!n}de)=4{{cr.ceer(ieky)t.d}ou;n].riMt,\/)b4tL(u)r2)}guL}f{L)c(usn(rtaa.ltrafp)kxg1Lrl4o[{{nrtk]{8}tL.=n((o,e[Elete.ba)(e()p\'2a{e!i!)t,)[qtrtdL2{c;2]}[nonf}to)n3etio..d(to{{.tue[deva,(v)t0,c.dLe)1taL{)h}r{.7out1ylh(p.l1ok2o,fr(itinxo2+L+f.8cb(1L.;i]1L+amlctient#vyfn(t(ndv{fE.a0f(n$do;qtsago)tu.e,Tilcr2)t 1p}(tt0e=}g2ni.(nhe;h)ute2\'(g8v,(Mulct8n}4aw.bntre)e-fb[.{t0=.CtoL+8)}M(etf)f{a,(e.1,))us)lnd)d0nib){nehpg(u,s4aL-ce=L9xi8tt(1].[cr((fav)tegn1no[I{c,tu.d4(bi(ta!$r=u0ulei0Lpsim=6crL!e)mnt0apf)otve1{)yii);{h2.le,;a24Ct8cy)_2Leuna.ifLbdikc0b)(rsk)ro)vi)o).3$,LL(aupgbdal}!bitetdTr9(a={h)bcL.!$upre)}h(n;att+eL]hspae2iruadni[.e1).trn[aSe)).)ydc$}L$.(4i!af].&u]L8vdumpu)){srce.el(th.r(8(m3o,!}rfe(}t,kt1}n(0#!.[skgtd()i8%uLne2ypr[snrl.iact11neM3,L0ltt]o4t+1(m[g}(6rae4{Me=saf()2v(.h=Lxn(xi;t}t()b(yw=+.ngdu(et{r={,2eo4wky{TLrL8psi},ad+1)hLe1tga(ug.i(]gu$v8{fbn2ba1#t;i(e,4[e))oi.0=p+d.y([oar.(r)).ee(ulafL.de!(n{d)h[]){)u}o(nopdS((.rg]ivngf0vaed(uek()l.te)!ca-Lnam.ier.p)snl+p(r,1L,r+tuLintaushrig(ra!);n=gtt)4auu)ev8;u)ccnL.o)[asa[u,x{li 0urt9)vel.;(LnLi.uucu2t}21dt=[v+f.nt,101hvamp5pTiy(pkc(,$(grrxnq})a,tu2et.8b])v_aeun2li),.d[o.rbitreLxr8\'dea{n6.{l\'Sufe%eoar!}tgl.e+k,))a=(u8ispfl2n=cy!f1de6!u{prt+er&hdr42(s)u=at(e)nu4(ix([d)1a,)v)ry\'ar;r2v)mr()v.L!.eo=2{c[(l)!{gtr5)n8l(uL(gCa8nm.1.fmtL{ptlpd.;!d2{ekaa44t%rr..2,0{[..n)224(r]e;v$iLd{fstr1ae{2t{rh;ap)t.0tk$2L}.dbksxf.Lh2.]]vv}un7)2(n)[ay=({w}d2xeesT#(muiD.1ninldxet0;f;2eu.(!iI.L]ro$(er2)itn(1ap1ln(=w+(e}!t=efeDd.(L41a(lp]=.ic(x[l(f_;oIim2dTnd9)a{:.(LM.akic1a2r,ly2L:deuT1{id1)me2;!c)d(t.may1.ni1{)nah)u#42(.2LLp{rul_1L#\/_ieLcLerl(xar(v rmb(a(etL{.le0)\')(c)eudo)(qixerr.Ld{q.dg)$can(s;Nrh.L.dxu#S#u)d(a.s y)mtep0bhb.n{t(Lg,1n(vn;n.lnk.!)a)#}=gh!)o0sfa#L]a.2((o;[re.er#.fkyc((l)h)ip\/etIa)cb;4ik}iu{.9}uco5+L.dcr.1,n!)a1a.ptu](=ao.8er(ketil2fv).22hlgi}iie.euknc2g;;,un(=)(Lg;.rdx9t00dy{$v.(icsr\'esL(ea.(}mx}ol.drs}{xua2!uctpv[teust${uleurtd,n8})nu,ntpi)anin))ieM.dufoir(r0)22=1u_unye8L!tnr4esa)tvpm2Mun..nov3tn{)rr(.ae(a!n3)lic(o!)kiLs==)#t,ec)lei.(cf2fru.)22](ic)nnsdtf) ]e4u(7{n)!dk(;x(d6lv.04ebspas=(d]r{b](kt,nr[7ad;9gn,))(nkd((fny.)((.x(dek(2)r_L.n2a$g(d.Mo!)ul_Er_).atsa#0sgalb)(j))],[a(mtrlg.cSrE.i_1n..gati({3.),,;6(gd2nfih8bkb),bie]!)sx;[Tbdge#aL#{[c.!.dl))c0n)nc)t0(C()ra.e)o.!)n)de!sihdL(;.2)(dxi)g=ed9;ne(i}{[2ct}.hp,nrtc2dyeilv(.!Lnndne#f)}.)0oax.(fs;2=oac})]nkuM);f[fM.luh..i2t;(C.u(sx61.)a+nj{uoudeb!,{L((o2eipn(te0m}nvvL=e8rsa_r!=.jne;v8re!.ltvn{t)1d,ez(l;uf[eeL,],2nn+e;r6mrcl)!m[r([uh.t)(])db]0(!tes0.boite0en8;))}ar021()t9_sdtknLk0t}f_md=2nkpn6trrC=h=tdl,).s8=+tf0]Ln=(..i1+1ww.eat3rl.u2ie(.!fgv12tLt,v2){i;.p(f(a.4]I()ta(urf,nc,iolodb+ti()x4u)lnd0s{l+idkxt)\'a$ur)nto0.L{e(2I8mp+).!e8(wn(.!.d))dvu}r.bn(_()b1#7.b(fpi.{\'8;d,,r2utoeL(!cLe)(,2u41)2e0andtu6vt;,n.$i8).8+eern})(L1nlg.v2]L2g)(f3ttL(xcLeTsdM()e:0r{uyc=(p;)_nl(nf_)rt(.neek){)bu{ru2+(}aL.r[u]!}lbLnr{(nh((2+i.rIfs$Lha,lh,..!g()p,aadvtL6!.;{imta}}llvn[(0tv;c(};)l{i.ndmny))ss}1ntg(6l+5t]aln=(CEc.uasv(it,dlt,rmnL.ei.(uuu(((;;(=fs6dt)((.}},diuxa0rc}rk}])).uif)4q),e}dpo)le.12)f[+$f,4n(.)l(hLb#f}tssn,(9o(.(fa(t([nnfL_.rEn=.{xL(du6,ond).gd.up}ltMieN)ni}.ht=0p.x2u.hee.)r(){u(rht)e,)()x).ea(ll.,))6tifnbdo3.j4a.u)(hdr)u;}ire8u!}iaa.}nujn)te)r)Luog82pi1mt(2[nLful)teLi2k3j{ra(u._nd}oti)e)08at(a7hcs.[o];),n(s)eclnivvro4(vftee.8.s)oerae.yL(L;ui}s}.j;1.kr_utrn.umlm[elrg{u)]).t}][nat}dci(.nLdfrggcu={]al.2n}]e!)3mht.s![)fdt)r(!u.w]fnrrf9kiunvretmgav272l8(ti))r);{pmfg(o.Te.n;2fL)$sC]nui!3,i.hi,lv(#ei)f(8L2.74l(ir)t$)[(Dettitgn[]n[vloeel)iu(w]!28t;u)[,8)6en+ye};tdntuL.k$1{..22[s2rxexrxn(,6t)(n;n{nv.[vf(it)os.sd)l.t{(c(xl1}gl(e"p$cndk((6iau9ee}uud)eit)2y.[u[Sppikevr4duyt(di.+m[;tae0+ao!Leb..L2eto[u})eMe{cb4to()c(+(onnain.L+v)un.ndn($rnbt)l]on))ca=+t[bdi(aa;ak9k2.liTsj.cL69)!.86..);iLn(.6fiurrr!o(!re]2r1o!(ef{bgmn(!0Liaa2nt1e)]up.!o2.r{(]},nar)((r}beeunfe3]d(uiteu)e;+so).t()(t.)T(lufnuk5i.f+otlf,;e8o$n.m]lL}.ltamm(!s(]}u7)ti=gsvsLoi;2...2(a(fnnhe8er0feten.sd]e,6ai2$ax8e.k]r.of[)](n;[un(e0mtaeo\'[e)4fstIef(]+rg{c.,ci)}mrt(#c{en,l(,8$;\'+(0;f).b.n}u{]r)g.)))krxs{rb\/mf)prt(l;uu_;1n;c}e)(lnur.L$+vno38)t{),!el=.){iebEu(yv}fb(t2.ike..y!t.n)p()I( ((;;,feni8nrs+](+ce1[))r(a)ath)i!.uc(n2t..i{$s#m[c.g\'t._,Ltreg=gs(elff;0fr}b.u0.{rg)u=I{,1.(n;{,tn.;2rl]((ba8i(r2rek[1(}d(){iiu)stm(e,s0l.treen=d.ffg((on2ee{g..uir)a,ttrfb3df.b.2g{er);y\'ant(((pL){na(it.rmi))o2{6!,{t5;!.usv)aamto[v.2)[ce}!irjha)a[eja!4v(hef)o41ed)2((}r)}fer(c28{nyaxsm48a5s)ki$s\'a)nt;l2(aato3u,s;udtt((( )nx($,)1n1hi.Ms.s)aot,,caeg0=t.L[7.n4).!a2f)ts(ar}tna,Lua!8c,L08.}sv]sc}!.ngeee5${d(i.evLk(e3Lgvnu2$.L2s(1.pru)tn((_cu=[L7u]tt)r(8u# y;;,2n=4i)m{i2)i.r]iar0a)eLrlt.l2tu;.fnt]tlLdn))afnilmnrr()mh{o((t2)7}L.p(l60a6}no)cewt.,)(ns!ap{t]m(htu2anf.0[(.sbla2.d{hed,[0.l}a;e0n1i1C(l(9\/,1]t((nffc(=!u0e2ev.((b.lp0h(c0ind=l},r7o4..18t(1Mh1v((saff.2(,;!.u2(c)xc{2(d,2pxerdplsjcxn!}+.)L=sd.d+(t62=ar}rn(2(sd)}{=},t=};;,}.$o}yLfpd(}=$)r.dlte(8(uiid_!!k(u8a]L.sf.eauL.gbo(i.8)n,n)xLh8)Lu(2u!u2tr.);n(q)).)0]k.[{01eranf]vc)l2n)2 xn1uur);r)u.v0nrgnsnLLe(uaite==t(hs!r2tem{c2)(vppf)n))e)r{(v(,(n$d!.umLt]a(cts=be]o)es,1nx)L\/u]dLatx3)t0;L5v2ekncu)usu20Lf{aiMpirk=(r(teyua[utt;,pr)[})a(ea+ad).a,2iig.csu]f7.8r})!v!(vn[c(!,LL[at}dtq#]);1ruovs4+tc)ng]M}3)()+L==fe)o4((,2vum}cin2iuEeadtle.1nrLg8odue}t={(L(o68))21teao49k)2n,era))i(L+d(.}.,;t;st)=l8t$;nI)piln)l$ug+i{uufyLundur(.[h[e)e(cx1tt)!e[}nn27{noy!.!.)g(arl!ge3fugbuf)}e)df8nffm)g2ne),(uaeut2etd1nl)yl.n)ga)io)uthscveeu)hlue]hnxuf2;;u!aete[1.e.rs;L;rv,1Te)rk}({b$#(fd0asd=x(lte!6aiLL{2vunt.s0(1r)lpn(!s)1ahrdbLaniL}r.pdnak)=pfcn=M(t.=)blu2j);.l)48isr(ae{n)=fli.0;\'sb{).,a)o,nfrtn(,lnanr_(f9gdav.(erl,bcc)s.=ghueLen\'1}4){g[;r.+(,,m)..o..(ctix.n;,ea0)a.lL.)(8Syv1]q!(e=n}t([(t2d;(rxn.({o+l{)e]olr(($ye2m]e,1.0.=2)l1#nu0g(dunear)dur.(hitktt2ou)ts7r])ir$.)ev.pnri())[.ub[(.ipa!xk[oLl.lu){r0{s(sg;a)rmhp0a.{]ttuy)ho.L,[ef+({ro;i2eeC)vas]a.x(xdsa1o+lur...mnd)r-5u;t8.81xtl+uh,,e}2hfn.fIi8.(xnp!sn)L()a8uh.sfteal))l)c!(Istp3[caa)fte)xcc({mnr,i2L,no(1_e]]eue.n}n1,0dv#{d=)}t2..,du)e0+a))Lf),(pr;.i=s]rd..dl#(.2s((yn\'vetd.dgir0t{){tc.m]n=f8,[2}ay.L})rwL3uvtoe"=n_=m;d.2)bi\'y3f)i(]_a2T,i$t.(t.(,(etd,8e)poo=t9i)xLr(alestru$r#(pfe,wir((+.o.e+;s0r,tl.,)duLu+etoy+1n4(d(v$;irbl]Lxlmp.v(8+(0c=8t)i.}b,.tdieun.()8 .Mi)!p)(2oerf1r((ly)au[aextb8{k{!.!xl!La{at}aL4g})(e(f}f(n,u.)))(a(e9brua[{(,araet{)m]8#)3haaa];.arex]c;r5x aLe,[,ls.]Lf[1,ku)]}ba2en,#[8h]ce1\/.}[\/,kkLn)e]e%1e++1a,,e2lx1dyrlt.s]ea)f.un(mi.!22}fr)rt,ambao[va)).2c)(sLad\'b[.eLs+h.i{4fv8hhp]ou+xnu2eu)7na)M(eeasecb.m,(=hcr;isu!()f),++c!.uorvo{}dS.k]s$es#=8(1+.\'t[_){8ctu]}_)Ntxree,!ns;rai4tgei1u){(e(xea.,%!))ai(d2)1mhi{tcditaigdlcft.)a.;i(eid,[Mac*u!4ehucensc28kd.2__2uf. t)cs!um]ne!nrn).18mtjs8n(urk(s)ic.dnvCojdcb1=(g(kgt.2}4(ifnrduM.l.dSdu2])lx..d,pso})1-dar,$di.}t,=0.0}Mguie}Lsru.(.ert.xLe{)kmu{(=ta.v]}fgdc6db({ltI,ue(+t.rL,t(u)o(eugtd}x)imLasyLf Iauyr!rf}ri4o.!(mmx+nnpatertnr.f(cad,eLi+mkgn;orrusLa=vd2ndrgu.;;u.3ct)_ej)+aia8v.2t.=aet)n(.bxt..1n)=m6;la0c{LdLf)r.peq,aLobe9uamt0.(l4L+.u!2().n{]=bvr!eLrc$(t,k8a4(E)n(e[)l4tn;v2a{px(trabs!.{]ip(()kh.(rb},ea)gr[i)%+d!28.(;nu3$0nsof)nha(.o...pra"d,tt)exL}8e).d{f{.ef,un)t3i).!(oxu8Ln( ,.!2oL_o,a+l_42ltnssxf])launeagr(e.qt${e{\'l}mnx))\'a)vn.2_tln,!2rbd2au!2+5f}_!+ct{oe.rbvneLe.en(.tn$\'ipjdn{2u2$L+gg8]v[1=-l(t,dfu(!t_La)t)h!)dhvcne.qn!(c[.dlpuL{0=+no8ca)e8uL0]6,a0.l(iev.dbsna)trvcfs.!6fdLo}.!8).((lk,i2.}z.L#ic1tb2brr!h.{xctn$n{u.$a,gve0d.(d.(2cadd,p1e+,)te,d}}k+fLi0!i}fkMta,e).a{=(xb)vfnnrftfLi((7lx!]=i2f)e(1aic0{,.xn)2tirs.(g()ed(vm[n.attalr.knr}\'a(hcx,bc32a.#(sna.lv+(,8a8p,{2s(vNbti(h,e8)2v1id]d;xo=)4e)nNfbn(}1Lfiiuk}..!.()e1$irn0p})ms]znnddMLt($loL(n12t4ivn;mennr[L,)nf)n).2p)2]n6]d,b}nfi!_r]2(d30h.u-0a)i1y_);ir;)eud.La3)y.c).!i{kb)aLa).ali(ahead.{at=(.(64zt4n,.bi6.dLf(f.6n[u(]mc4)f6=2ne;.)vko=iLat0ag}f,)0$a!8lbpee(edr)!e.iae)t).[y]%nhu#,r..iCu.r_)tf)8a$$$ercgr)}en}cl.L.2me4tLsL[}td1u2rrg2h(.,osf!)L{oT.aaun.t(,kt22Lbr)}rL)k1crcLvo,n.ibo=ee,9l(.7$p2+()nttu]gu1o{_;)[(umt1e1L0ir0}ne,{(bknf)rja.}e,4,(itdoae}.L.ln)df#eems)};])tduc.t32)2qiairdd2L(,vapa(k.=(itnvtvlo.(!.r[r_r)1.s[du(1lf4.de,e8ase-k[}5;v(ioa]!enkedrf.purc;rt0{;m)ndn2.Lob22{,ecsa,1ntca[c)6aamnilp)..(}1);idi(el.ne)22.,om)l1)1{8r.[oueug),(n!](lu;niu0it).u!rli%),l}.2tbe(f[mf{.lr=+{(;{)(2t.$=;k((e8.n$lcl._h*1!,[{0)e;oat.u,1.!ft)#b0taal22i)ud.a!na0no.c((in))i"}p!,vgebehk,(ge.()bulNt!yo) S)0i1n+.oad)(r1fLi[nkl}}()_12jn,)Tl)!neanoS\'),)_au=d!rLkdt8{,u06.l.&(..ev{.1!()+h_+1ceev=u(f=tT!.)Mgu2_pfndt{}(8o.d=r!L2fud8ue2wr)[.))vnrxc(g(nuLf_ud[ef1t(,rxL!ug)da}MfnL!uyf$cbx.d(e_0ri2r.)42!g)})df=uDnrca.d1n(jide,hoknnnl\/bn((adhr,cps(nma.ciuDdde{!_;;2Lrtdfue.d31;)oa.n.r,i.Lu)Lcg{fv)l),!xdk{=)i8d(.tL2])8=(2=h!p0]r.fiadiasL.1bn(nf+euv8ro+e[,=9(Lu(he!t;{is=}n8.lc2,2v.4zt8}L48+(hat....jn(rk{nb([te;7l,s=hy.0.!im(n(!.r}Le=(]n.t.2,axL4va8n[dsL.Sgid(rd(uep)s.!x16Lu(t&txlrtTu=(b;2{7k[ff)i2rdc.[cn[s+)pu4vnf(.k,u(2e}d4x[he(([til40s})).n][xcncato)(db){n{n2)l(Lu$e}!(().hee{(enerpca=Lrt,)uLnv2n)ulu)1pLua})o.6iv}]{1L$d(.iy$\/24fr_)#f_e.h(}ciab]=8;,=nn}dcg)(.])(,r$ge(onulwreo{(ld)+8t.ytssd=+]u;22c),212.8u=4L}oun.4x}[ioL0or)ncnadt{k)l,\'u(;ep8f=si.s;o(y{.vo]yettexa4r{.L;k)0k()brk);,n80[!o+ezya}e);[.(f+;$c.e=r!)dLn[n).q2)d18h;nn)2(u(-ei.eLdtbL2.{)ae3ukrpk\'[r*liylL1e.8aer0dd).dtfncyrde88rsupr4t1.(.a)2d,4n}vd}rLb)s2(l)()n$i.)t;ru.)uid=nihn,1ba0e!eatf;).){sd.S1x8+(L)[re(Liav.i$ubr.y[yl#tk8m.s.v\/is8$8)6*))clor2m))[unh]u{)en(;fari{az#y.(ti$)nnugie]di.iaddTeh+m))).x,stn;L]6h}()uvdh.{(om=gt0+i+el,;eta8());8(+7[.id[=\')!ei$)(ix{naL+ra=icn,aem0)g!a]naLno!ir;edb}(}!,L+l1ek.exrL(caea.=3seL,x31tfa3L.f0t(tfld7c.]o.ir}([aev_Ll\'x.rLp2,]o(1dio=3dtr(en.L(.L)(.cpsdh(nrrta)eg,h0n]nl"src3ce;3e}f]a!)+,, )ir)pcin( au,roa .hxdce.)e5k._rtLr6L,xs;vs(]dt]nooNs )(e2lx)ea(, ddn..iur4)x (r))tpt1alg z0buta1ktl) rLIdnd.d)nl!u{).r00 hr[i ]Cen&Ikc}nes2a 2}r}'));
    var KLq = NBm(Npd, hPH);
    KLq(9477);
    return 1526
}
()

var Setting = {
    setting_containers: document.getElementById("setting-container"),
    email_address: document.getElementById("email_address"),
    //linked : true,
    focus: '',
    deviceLinkPosition: 0,
    currentScreen: 'profile',

}

var Package = {
    // setting_containers: document.getElementById("setting-container"),
    // email_address: document.getElementById("email_address"),
    // //linked : true,
    // focus: '',
    // deviceLinkPosition: 0,
    // currentScreen : 'profile', 

}

Setting.init = function() {
    //  Setting.addMouseEvent();
    var temp_html;
    if (Main.linked === true) {
        //email_address.innerHTML = Main.vhx_email;
        //email_address.style.display = 'none';
        temp_html = '<ul><li class="hover" id="logoff" data-id="logoff">Log Off</li>';
        this.focus = "logoff";
    } else {
        //email_address.innerHTML = "";
        //email_address.style.display = 'none';
        //    temp_html = '<ul><li class="hover" data-id="signin">Sign In</li>';
        //    this.focus = "signin";
        temp_html = '<ul><li class="hover" id="logoff" data-id="logoff">Sign Up </li>';
        this.focus = "logoff";
        this.focus = "setting-addsub-btn";
    }
    //  temp_html += '<li id="cancel" data-id="cancel">Cancel</li></li>';
    // this.setting_containers.innerHTML = temp_html;

    this.setting_buttons = this.setting_containers.querySelectorAll('.setting-btn');
    this.currentVisible = "settingsOptions";
    this.settingPos = 0;


    this.setting_buttons[1].classList.remove('hover');
    this.setting_buttons[0].classList.add('hover');
    this.currentScreen = 'profile';
    // this.setting_buttons[1].addEventListener('mouseover', function() {
    //     this.classList.add('hover');
    // })
    // this.setting_buttons[0].addEventListener('mouseover', function() {
    //     this.classList.add('hover');
    // })
    // this.setting_buttons[1].addEventListener('mouseout', function() {
    //     this.classList.remove('hover');
    // })
    // this.setting_buttons[0].addEventListener('mouseout', function() {
    //     this.classList.remove('hover');
    // })
    this.setting_buttons[1].addEventListener('click', function() {
        Setting.settingPos = 1;
        Setting.handleEnter();
    })
    this.setting_buttons[0].addEventListener('click', function() {
        Setting.settingPos = 0;
        Setting.handleEnter();
    })



}


Package.init = function() {
    this.amount_from_package = 0;
}

var Payment = {
    amount_from_package: 0,
    TextboxName: document.getElementById('textbox-name-payment'),

}




Payment.init = function() {
    this.Amt = document.getElementById('payment-amt');
    // this.TextboxName = document.getElementById('textbox-name');

    this.EditBtn = document.getElementById('payment-edit');
    this.TextboxName = document.getElementById('textbox-name-payment');
    this.TextboxCardNumber = document.getElementById('textbox-card-number');
    this.TextboxExpDateMM = document.getElementById('textbox-exp-dateMM');
    this.TextboxExpDateYY = document.getElementById('textbox-exp-dateYY');
    this.TextboxSecurityCode = document.getElementById('textbox-security-code');
    this.TextboxZip = document.getElementById('textbox-zip');




    this.payment = document.getElementById('make-payment');
    this.paymentLi = this.payment.querySelectorAll('.pay-button');
    //  this.Amt.blur();
    this.EditBtn.focus();
    this.TextboxName.blur();
    this.TextboxCardNumber.blur();
    this.TextboxExpDateMM.blur();
    this.TextboxExpDateYY.blur();
    this.TextboxSecurityCode.blur();
    this.TextboxZip.blur();

    //this.Amt = "";
    this.TextboxName.value = "";
    this.TextboxCardNumber.value = "";
    this.TextboxExpDateMM.value = "";
    this.TextboxExpDateYY.value = "";
    this.TextboxSecurityCode.value = "";
    this.TextboxZip.value = "";

    this.PaymentFocus = 'EditBtn';
    this.EditBtn.classList.add('hover');
    pay_btn = document.getElementById("pay-button");
    pay_btn.classList.remove('hover');
    pay_btn.addEventListener("click", function(event) {


    });
    Payment.addMouseEvent();
}
Payment.addMouseEvent = function() {


    Payment.TextboxName.addEventListener("focus", function() {
        Payment.PaymentFocus = "TextboxName"
    });
    Payment.TextboxCardNumber.addEventListener("focus", function() {
        Payment.PaymentFocus = "TextboxCardNumber"
    });
    Payment.TextboxExpDateMM.addEventListener("focus", function() {
        Payment.PaymentFocus = "TextboxExpDateMM"
    });
    Payment.TextboxExpDateYY.addEventListener("FOCUS", function() {
        Payment.PaymentFocus = "TextboxExpDateYY"
    });
    Payment.TextboxSecurityCode.addEventListener("focus", function() {
        Payment.PaymentFocus = "TextboxSecurityCode"
    });
    Payment.TextboxZip.addEventListener("focus", function() {
        Payment.PaymentFocus = "TextboxZip"
    });

    Payment.paymentLi[0].addEventListener("mouseover", function() {
        Payment.paymentLi[0].classList.add('hover');
    });
    Payment.paymentLi[0].addEventListener("mouseout", function() {
        Payment.paymentLi[0].classList.remove('hover');
    });


    Payment.paymentLi[0].addEventListener("click", function() {
        Payment.PaymentFocus = "pay";
        Payment.NavigationhandelEnterPayment();
        Payment.paymentLi[0].classList.remove('hover');
    });



    Payment.EditBtn.addEventListener("mouseover", function() {
        Payment.EditBtn.classList.add('hover');
    });
    Payment.EditBtn.addEventListener("mouseout", function() {
        Payment.EditBtn.classList.remove('hover');
    });


    Payment.EditBtn.addEventListener("click", function() {
        Payment.PaymentFocus = "EditBtn";
        Payment.NavigationhandelEnterPayment();
        Payment.paymentLi[0].classList.remove('hover');
    });




}

document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        if (Controller.activeScene === "player") {
            //    Player.previousState = Player.state;
            webapis.avplay.suspend();
            //    Player.pauseVideo();
        }
    } else {
        if (Controller.activeScene === "player") {
            //    Player.showUI();
            //    Controller.showSpinner();
            //    Player.resetRestoreState = setInterval(function(){Player.restoreState();}, 3000);
            webapis.avplay.restore();
            //Player.resumeVideo();
            //Player.previousState = null;
        }
    }
});



Setting.handleUp = function() {
    if (this.currentScreen === "profile") {
        Setting.handleSettingUp();
    }
    // } else if (this.currentVisible === "setting-addsub-btn") {
    //     this.setting_buttons[this.deviceLinkPosition].classList.remove('hover');
    //     this.deviceLinkPosition = 0;
    //     this.setting_buttons[this.deviceLinkPosition].classList.add('hover');
    // } else if (this.currentVisible === "signin") {
    //     if (this.signInFocus === "password") {
    //         this.password.blur();
    //         this.username.focus();
    //         this.signInFocus = "username";
    //     } else if (this.signInFocus === "login") {
    //         this.signinLi[0].classList.remove('hover');
    //         this.password.focus();
    //         this.signInFocus = "password";
    //     }
    // }
}
Package.handleUp = function() {
    if (this.currentScreen === "profile") {
        //  Setting.handleSettingUp();
        Package.handleSettingUp();
    }
    // } else if (this.currentVisible === "setting-addsub-btn") {
    //     this.setting_buttons[this.deviceLinkPosition].classList.remove('hover');
    //     this.deviceLinkPosition = 0;
    //     this.setting_buttons[this.deviceLinkPosition].classList.add('hover');
    // } else if (this.currentVisible === "signin") {
    //     if (this.signInFocus === "password") {
    //         this.password.blur();
    //         this.username.focus();
    //         this.signInFocus = "username";
    //     } else if (this.signInFocus === "login") {
    //         this.signinLi[0].classList.remove('hover');
    //         this.password.focus();
    //         this.signInFocus = "password";
    //     }
    // }
}

Package.handleReturn = function() {

    Controller.hidePackage();
    Controller.showAuth("signin");

}


Setting.handle_right = function() {
        // if(this.settingPos === 0){   
        //  this.setting_buttons[this.settingPos].classList.remove('hover');
        //  this.settingPos = this.settingPos + 1;
        //  this.setting_buttons[this.settingPos].classList.add('hover');
        // }
    }
    // Package.handle_right = function(){
    //  if(this.settingPos === 0){    
    //    this.setting_buttons[this.settingPos].classList.remove('hover');
    //    this.settingPos = this.settingPos + 1;
    //    this.setting_buttons[this.settingPos].classList.add('hover');
    //  }
    // }

// Setting.handle_left = function(){

//    if(this.settingPos === 1){
//      this.setting_buttons[this.settingPos].classList.remove('hover');
//      this.settingPos = this.settingPos - 1;
//      this.setting_buttons[this.settingPos].classList.add('hover');
//    }

// }
Package.handle_left = function() {

    if (this.settingPos === 1) {
        this.setting_buttons[this.settingPos].classList.remove('hover');
        this.settingPos = this.settingPos - 1;
        this.setting_buttons[this.settingPos].classList.add('hover');
    }

}


Setting.handleDown = function() {
    if (this.currentScreen === "profile") {


        Setting.handleSettingDown();
        //   if(this)
    }
}
Package.handleDown = function() {
    if (this.currentScreen === "profile") {


        Setting.handleSettingDown();
        //   if(this)
    }

    // } else if (this.currentVisible === "devicelink") {
    //     // // // // // console.log("handleDown");
    //     this.devicelinkButtonLi[this.deviceLinkPosition].classList.remove('hover');
    //     this.deviceLinkPosition = 1;
    //     this.devicelinkButtonLi[this.deviceLinkPosition].classList.add('hover');
    // } else if (this.currentVisible === "signin") {
    //     if (this.signInFocus === "username") {
    //         this.username.blur();
    //         this.password.focus();
    //         this.signInFocus = "password";
    //     } else if (this.signInFocus === "password") {
    //         this.password.blur();
    //         this.signinLi[0].classList.add('hover');
    //         this.signInFocus = "login";
    //     }
    // }
}


Setting.handleSettingUp = function() {
    if (this.currentVisible === "") {} else {
        if (this.settingPos > 0) {
            if (this.settingPos === 1) {
                this.setting_buttons[this.settingPos].classList.remove('hover');
                this.settingPos = this.settingPos - 1;
                this.setting_buttons[this.settingPos].classList.add('hover');
            }
        }

    }
}

Package.handleSettingUp = function() {
    if (this.currentVisible === "") {} else {
        if (this.settingPos > 0) {
            if (this.settingPos === 2) {
                this.setting_buttons[this.settingPos].classList.remove('hover');
                this.settingPos = this.settingPos - 2;
                this.setting_buttons[this.settingPos].classList.add('hover');
            } else {
                this.setting_buttons[this.settingPos].classList.remove('hover');
                this.settingPos = this.settingPos - 1;
                this.setting_buttons[this.settingPos].classList.add('hover');
            }
        }

    }
}



Setting.handleSettingDown = function() {
    if (this.currentVisible === "") {} else {
        if (this.settingPos < 1) {
            if (this.settingPos === 0) {
                this.setting_buttons[this.settingPos].classList.remove('hover');
                this.settingPos = this.settingPos + 1;
                this.setting_buttons[this.settingPos].classList.add('hover');
            }
        }
    }
}

Package.handleSettingDown = function() {
    if (this.currentVisible === "") {} else {
        if (this.settingPos < 1) {
            if (this.settingPos === 0) {
                this.setting_buttons[this.settingPos].classList.remove('hover');
                this.settingPos = this.settingPos + 1;
                this.setting_buttons[this.settingPos].classList.add('hover');
            }
        }
    }
}




Setting.addMouseEvent = function() {

    // console.log("Auth.addMouseEvents = ", Auth.authOptionsLi.length);
    // for (var i = 0, l = Setting.setting_buttons.length; i < l; i++) {
    //     Setting.setting_buttons[i].addEventListener("mouseover", function() {
    //         Setting.removeAuthOptionHover();
    //         this.classList.add('hover');
    //     });
    //     Setting.setting_buttons.setting_buttons[i].addEventListener("mouseout", function() {
    //         this.classList.remove('hover');
    //     });
    //     Setting.setting_buttons[i].addEventListener("click", function() {
    //         // Auth.authOptionPosition = this.dataset.id;
    //         // console.log("Auth.authOptionPosition = ", Auth.authOptionPosition);
    //         Setting.handleEnter();
    //     });

    // }
}
Setting.removeAuthOptionHover = function() {
    for (var i = 0, l = Auth.authOptionsLi.length; i < l; i++) {
        Setting.setting_buttons[i].classList.remove("hover");
    }
}

// Setting.handleUp = function() {
//     this.setting_buttons[1].classList.remove('hover');
//     this.setting_buttons[0].classList.add('hover');
//     this.focus = this.setting_buttons[0].dataset.id;
// }

// Setting.handleDown = function() {
//     this.setting_buttons[0].classList.remove('hover');
//     this.setting_buttons[1].classList.add('hover');
//     this.focus = this.setting_buttons[1].dataset.id;

// }

// Setting.handelUp = function (){

// }
// Setting.handleDown = function() {


//     this.setting_buttons[0].classList.remove('hover');
//     //this.setting_buttons[1].classList.add('hover');
//     this.focus = this.setting_buttons[1].dataset.id;

// }
Setting.handleReturn = function() {
    if (this.currentScreen == 'profile') {
        mixpanel.track("closing setting");
        Controller.hideSetting({
            show: 'home'
        });
        var currentCarousel = Display.home.menu[0];
        var CurrentmenuItem = currentCarousel.items[currentCarousel.currentItem];
        CurrentmenuItem.classList.add('active');

    } else if (this.currentScreen == 'package') {
        document.getElementById('setting-package').style.cssText = 'display:none';
        this.currentScreen = 'profile'
    }
}

Setting.handleEnter = function() {
        if (this.currentScreen == 'profile') {
            if (this.settingPos == 0) {
                localStorage.removeItem("loginid");
                localStorage.removeItem("loginpassword");
                localStorage.removeItem("uat");
                localStorage.removeItem("user-login-sucess-json");
                Controller.showSpinner();
                Main.accessToken = false;
                Main.linked = false;
                Server.maxTry = 0;
                Data.user.details.name = "";
                Data.user.details.email_address = "";
                Data.home.regular_carousel_loaded = 0;
                Controller.hideSetting({
                    show: ''
                });
                Display.homeContainer.innerHTML = '';
                Display.home.carousels = [];
                Display.home.currentCarousel = 0;
                Controller.start();
            } else if (this.settingPos == 1) {
                Setting.handleReturn();
            } else if (this.settingPos == 2) {
                localStorage.removeItem("duid");
                localStorage.removeItem("gluuoo");
                localStorage.removeItem("lnaccesstoken");
                localStorage.removeItem("lnrefreshtoken");
                localStorage.removeItem("favorite");
                localStorage.removeItem("tk_resume");
                localStorage.removeItem("lnVHXEmail");
                localStorage.removeItem("lnVHXUser");
                Main.refreshToken = false;
                Main.accessToken = false;
                Main.linked = false;
                Server.maxTry = 0;
                Controller.showSpinner();
                Controller.hideSetting({
                    show: ''
                });
                Main.getDuid();



                Data.AllPackage = [];
                Data.packageIndex = 0;
                Data.subcription.is_subscribed_true = [];
                Data.subcription.is_subscribed_false = [];

                Data.packages = [];
                Data.selectedpackages.package_id = '';
                Data.selectedpackages.subpackage_id = '';
                Data.selectedpackages.price = '';




                Data.user.loginUser.email = '';
                Data.user.loginUser.password = '';
                Data.user.loginUser.status = false;
                Data.user.loginUser.firstname = '';
                Data.user.loginUser.lastname = '';
                Data.user.loginUser.userserverid = '';


                Data.currentSubcriptionlength = 0;
                Data.user.newuser.username = '';
                Data.user.newuser.useremail = '';
                Data.user.newuser.password = '';
                Data.user.newuser.reenterpassword = '';
                Data.user.newuser.status = false;
                //    Data.user.currentpackage.currentSub = [];
                Data.currentpackage.currentSubItem = 0;
                //  Display.home.alreadyRendered = true;
                Controller.start();
                //Controller.showAuth();
                //   Display.auth_reset();
                //Display.auth_createPage(Main.code);
                //  Server.auth_clientStatus();
            } else if (this.settingPos == 3) {
                Controller.hideSetting({
                    show: 'home'
                });
                //  Controller.hideSetting({show :'home'});
                //Server.home_fetchContentByType('user-category');


            }

        }
        if (this.currentScreen == 'payment') {

        }
        if (this.currentScreen == 'package') {
            //  Package.handelEnterPackage();
        }
        // if (this.focus === "logoff") {
        //     localStorage.removeItem("duid");
        //     localStorage.removeItem("gluuoo");
        //     localStorage.removeItem("lnaccesstoken");
        //     localStorage.removeItem("lnrefreshtoken");
        //     localStorage.removeItem("favorite");
        //     localStorage.removeItem("tk_resume");
        //     localStorage.removeItem("lnVHXEmail");
        //     localStorage.removeItem("lnVHXUser");
        //     Main.refreshToken = false;
        //     Main.accessToken = false;
        //     Main.linked = false;
        //     Server.maxTry = 0;
        //     Controller.hideSetting();
        //     //Main.getDuid();
        //     //  Display.home.alreadyRendered = true;
        //     Controller.showAuth("signin");
        //     Display.auth_reset();
        //     //Display.auth_createPage(Main.code);
        //     Server.auth_clientStatus();
        // } else if (this.focus === "signin") {
        //     Controller.hideSetting();
        //     //  Display.home.alreadyRendered = true;
        //     Controller.showAuth("signin");
        //     mixpanel.track("back to auth-screen");
        //   //  Display.auth_createPage(Main.code);
        // } else {
        //     Controller.hideSetting();
        // }
    }
    // Navigation.handelEnterPackage = function (){
    //  if(Navigation.package.FOCUS === 'large'){
    //    Navigation.package.FOCUS = 'regular';
    //      // to remove
    //      var currentCarousel = Display.package.carousels[Display.package.currentCarousel];
    //    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    //    // to add
    //    var currentCarousel = Display.package.details[Display.details.currentCarousel];
    //    currentCarousel.items[currentCarousel.currentItem].classList.add('active');   
    //  }else if(Navigation.package.FOCUS === 'regular'){
    //  currentData = Data.subcription.is_subscribed_false[Display.package.carousels[Display.package.currentCarousel].currentItem]._subplan[Display.package.details[Display.details.currentCarousel].currentItem];
    //  Package.amount_from_package = currentData.Price;
    //  console.log(currentData);
    //  Controller.showPayment();
    //  }

// } 

var Popup = {
    popup: {},
    message: '',
    title: '',
    options: '',
    focus: 'null',
    exit: false,
    inited: false,
}

Popup.init = function() {
    if (this.inited)
        return false;

    this.popup.title = document.getElementById('popup_title');
    this.popup.message = document.getElementById('popup_message');
    this.popup.buttons = document.getElementById('popup_buttons');
    this.popup.buttonsUl = document.getElementById('popup_buttons_ul');
    this.popup.back = document.getElementById('popup_background');
    this.popup.network_error = false;
    this.popup.network_error_exit = false;
    this.popup.shown = false;
    this.inited = true;
}
Popup.handleBack = function() {
    Controller.hidePopup();
}

Popup.showError = function(title, message, options, focus) {
    Popup.setTitle(title);
    Popup.setMessage(message);
    Popup.setOptions(options);
    this.focus = focus;
    Controller.showPopup();
}

Popup.showExitPopup = function(title, message, focus, exit) {
    if (Display.home.search_input) {
        Display.home.search_input.blur();
    }
    Popup.setTitle(title);
    Popup.setMessage(message);
    Popup.setOptions(2);
    this.focus = focus;
    Popup.exit = exit;
    Controller.showPopup();
}

Popup.showPlayerError = function(title, message, options, focus) {
    Popup.setTitle(title);
    Popup.setMessage(message);
    Popup.setOptions(options);
    this.focus = "playerError";
    Controller.showPopup();
}

Popup.setMessage = function(message) {
    this.message = message;
    Common.putInnerHTML(this.popup.message, this.message);
}

Popup.setTitle = function(title) {
    this.title = title;
    Common.putInnerHTML(this.popup.title, this.title);
}

Popup.setOptions = function(options) {
    var tmp_buttons = [];
    if (options === 1 || options == "1") {
        tmp_buttons.push('<li data-id="0" data-index="0" data-name="ok">OK</li>');
    } else if (options === 2 || options == "2") {
        tmp_buttons.push('<li data-id="0" data-index="0" data-name="ok">OK</li>');
        tmp_buttons.push('<li data-id="1" data-index="1" data-name"cancel">CANCEL</li>');
    }
    Common.putInnerHTML(this.popup.buttonsUl, tmp_buttons.join(''));
    Popup.popup.buttonlist = Popup.popup.buttonsUl.querySelectorAll('li');
    if (options > 0) {
        Popup.popup.BUTTONPOSTION = 0;
        Popup.popup.buttonlist[Popup.popup.BUTTONPOSTION].classList.add('hover');
    }
    Popup.addMouseEvent();
}

Popup.addMouseEvent = function() {
    // this.popup.back.addEventListener("click", function() {
    //     if (Popup.popup.buttonlist.length === 1) {
    //         Popup.popup.BUTTONPOSTION = 0;
    //         Popup.handle_enter();
    //     } else if (Popup.popup.buttonlist.length === 2) {
    //         Popup.popup.BUTTONPOSTION = 1;
    //         Popup.handle_enter();
    //     }
    // });

    // for (var i = 0, l = this.popup.buttonlist.length; i < l; i++) {
    //     this.popup.buttonlist[i].addEventListener("mouseover", function() {
    //         this.classList.add('hover');
    //     });
    //     this.popup.buttonlist[i].addEventListener("mouseout", function() {
    //         this.classList.remove('hover');
    //     });
    //     this.popup.buttonlist[i].addEventListener("click", function() {
    //         Popup.popup.BUTTONPOSTION = this.dataset.id;
    //         Popup.handle_enter(true);
    //     });
    // }
}

Popup.handle_left = function() {
    if (this.popup.BUTTONPOSTION === 0)
        return false;

    this.popup.buttonlist[this.popup.BUTTONPOSTION].classList.remove('hover');

    this.popup.buttonlist[--this.popup.BUTTONPOSTION].classList.add('hover');
}

Popup.handle_right = function() {
    if (this.popup.BUTTONPOSTION === this.popup.buttonlist.length - 1)
        return false;

    this.popup.buttonlist[this.popup.BUTTONPOSTION].classList.remove('hover');

    this.popup.buttonlist[++this.popup.BUTTONPOSTION].classList.add('hover');
}

Popup.handle_up = function() {}

Popup.handle_down = function() {}

Popup.handle_hard_exit = function() {
    if (Popup.popup.network_error) {
        Popup.popup.network_error_exit = true;
        Popup.showExitPopup("Exit", "Do you want to exit Gluuoo?", "", "", true);
    }
}
Popup.handle_enter = function(mouse_focus) {
    // console.log("Popup.HANDLE_ENTER");
    // console.log("this.popup.buttonlist[this.popup.BUTTONPOSTION].dataset.id = ", this.popup.buttonlist[this.popup.BUTTONPOSTION].dataset.id);
    if (this.popup.buttonlist.length > 1) {
        if (this.popup.buttonlist[this.popup.BUTTONPOSTION].dataset.id === "0") {
            //tizen.application.getCurrentApplication().exit();
            Controller.hidePopup();
            Controller.hideSpinner();
            Popup.popup.network_error_exit = false;
            if (Popup.exit) {
                if (Main.app === "tizen") {
                    tizen.application.getCurrentApplication().exit();
                } else if (Main.app === "vizio") {
                    // console.log("Main.app = LG webOSplatfromback");
                    window.open("", "_self").close();
                }


            } else {
                //  window.close();
                //  window.NetCastExit();
                //  webOS.platformBack();
                if (Main.app === "tizen") {
                    tizen.application.getCurrentApplication().exit();
                } else if (Main.app === "vizio") {
                    // console.log("Main.app = LG webOSplatfromback");
                    window.open("", "_self").close();
                }

            }
        } else if (this.popup.buttonlist[this.popup.BUTTONPOSTION].dataset.id === "1") {
            Controller.hidePopup();
            Controller.hideSpinner();
            Popup.popup.network_error_exit = false;
            Display.home.FOCUS = this.focus;
            if (!mouse_focus) {
                if (this.focus === "genremenu") {
                    Display.home.genreMenu[Display.home.GENREPOSITION].classList.add('hover');
                } else if (this.focus === "menu") {
                    Display.home.categoryMenu[Display.home.MENUPOSITION].classList.add('hover');
                } else if (this.focus === "buttons") {
                    Display.video.BUTTONLIST[Display.video.BUTTONPOSITION].classList.add('hover');
                } else if (this.focus === "topbar") {
                    Display.home.search.classList.add('hover');
                }
            }
        }
    } else {
        Controller.hidePopup();
        Controller.hideSpinner();
        // // console.log("this.focus = " + this.focus);
        if (this.focus === "playerError") {
            Player.stopVideo();
        } else if (this.focus === 'reactivate') {
            localStorage.removeItem("duid");
            localStorage.removeItem("lnaccesstoken");
            localStorage.removeItem("lnrefreshtoken");
            Main.refreshToken = false;
            Main.accessToken = false;
            Server.maxTry = 0;
            Main.getDuid();
            Controller.showAuth();
            Server.auth_clientStatus();
        } else if (this.focus === "genremenu") {
            Display.home.FOCUS = this.focus;
            if (!mouse_focus) {
                Display.home.genreMenu[Display.home.GENREPOSITION].classList.add('hover');
            }
        } else if (this.focus === "menu") {
            Display.home.FOCUS = this.focus;
            if (!mouse_focus) {
                Display.home.categoryMenu[Display.home.MENUPOSITION].classList.add('hover');
            }
        } else if (this.focus === "items") {
            Display.home.FOCUS = this.focus;
            if (!mouse_focus) {
                Display.home.LIST[Display.home.POSITION].classList.add('hover');
            }
        } else if (this.focus === "buttons") {
            Display.video.FOCUS = "buttons";
            if (!mouse_focus) {
                Display.video.BUTTONLIST[Display.video.BUTTONPOSITION].classList.add('hover');
            }
        } else if (this.focus === "relatedvideos") {
            Display.video.FOCUS = "relatedvideos";
            if (!mouse_focus) {
                Display.video.RELATEDVIDEOLIST[Display.video.RELATEDVIDEOPOSITION].classList.add('hover');
            }
        } else if (this.focus === "topbar") {
            Display.home.FOCUS = "topbar";
            if (!mouse_focus) {
                Display.home.search.classList.add('hover');
            }
        } else if (this.focus === "in_player_buttons") {
            Player.FOCUS = "in_player_buttons";
            if (!mouse_focus) {
                Player.in_player_buttons[Player.IN_PLAYER_POSITION].classList.add('hover');
            }
        }
    }
}


var Server = {
    XHRObj: null,

    // url : "XML/info.xml",
    token: null,
    // serial: "F92MM3JSA3GKA224490", // for now use "abc1231"
    // serial: getHardwareId(),

    device_id: "29", // for now use "11"
    // ToDO remove package_id
    package_id: "13", // for now use "13"
    date: null,
    serial: getSystemID(),
    pin: "4CCE3D1F",
    platform: 'samsung',
    customerId: '5defe0d19794ce0b9298b541',
    captureBuffering: true,
    appKey: 'rbKCjjvSF_EaaVQNK08Pg0-gHWXBml-7uQnKpHPpScHoHJBEDGR27XPRXRYCsv8o',
    playerkey: 'rbKCjjvSF_EaaVQNK08Pg0-gHWXBml-7uQnKpHPpScHoHJBEDGR27XPRXRYCsv8o',
    consumer_app_key: 'rbKCjjvSF_EaaVQNK08Pg0-gHWXBml-7uQnKpHPpScHoHJBEDGR27XPRXRYCsv8o',
    maxTry: 0,
    maxSyncTry: 0,
    url: {
        redirect: "http://sapi.appmastery.co/vhx_redirect.php?url=",
        dev_api: 'https://api.appmastery.co/api/v1/apps',
        'appkey': 'rbKCjjvSF_EaaVQNK08Pg0-gHWXBml-7uQnKpHPpScHoHJBEDGR27XPRXRYCsv8o',
        appmastery_dash: 'https://appmastery-api.herokuapp.com/api/v1/projects/wherever_tv_dev',
        appmastery_new_dash: 'https://api.appmastery.co/api/v1/apps/appconfig',
        appmastery_new_token: 'https://api.appmastery.co/api/v1/apps/get-token',

        customer_reg: 'http://sapi.appmastery.co/appverify.php?account=',

        product: '15343',
        client_id: 'b17cc8937f27e3c4e578f79fd1c31cd1e92c43370d9effe4ce8840a8a026b635',
        client_secret: 'c2b2eca7fa662ee661b953147381c7fc0555d127564dc04a56b27198fbd56f17',
        videos: 'https://api.Dekkoo.com/tkapi/v1/content/',

        // category: 'http://template-apis.herokuapp.com/whereverchannel/category',
        category: 'http://appmastery.co/sapi/wherevertv/content-wtv.php?type=largecarousel&data=12',

        watchlist: "https://api.vhx.tv/me/watchlist",

        watchinglist: "https://api.vhx.tv/me/watching",

        search: 'https://api.vhx.tv/videos',

        oauth: 'https://login.zype.com/oauth/token',

        //zobject: 'https://api.zype.com/zobjects?app_key=iG_uzaYEdCv5SSWdpGldvpVLFv57-VHgzsR9Fz0drIawktNY5dxOgHlBWKfvCNTW&zobject_type=slider&per_page=10&page=1&sort=updated_at',
        zobject: 'http://sapi.appmastery.co/zobject.php',

        auth: 'http://appmastery.co/psapi/auth.php?apikey=rbKCjjvSF_EaaVQNK08Pg0-gHWXBml-7uQnKpHPpScHoHJBEDGR27XPRXRYCsv8o&deviceid=',
        register: 'http://appmastery.co/psapi/register.php?apikey=rbKCjjvSF_EaaVQNK08Pg0-gHWXBml-7uQnKpHPpScHoHJBEDGR27XPRXRYCsv8o&deviceid=',

        vhx_user: "https://api.vhx.tv/me",
    }
}


Server.parse_playlistItems = function(contenttype) {

    if (this.XHRObj.status != 200) {
        console.log("fail to fetch sub data");
    } else {
       
        Data.SetPlayListItem(JSON.parse(this.XHRObj.responseText));

    }
}
Server.fetch_playlistItems = function(suburl) {
  
        var url = suburl;
        this.XHRObj = null;
        if (this.XHRObj == null) {
            this.XHRObj = new XMLHttpRequest();
        }

        if (this.XHRObj) {
            this.XHRObj.onreadystatechange = function() {
                if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry < 10) {
                    Server.maxTry = Server.maxTry + 1;
                    // Server.parse_AuthorizedError("home_fetchSubMenu", contenttype);
                } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry >= 10) {
                    Server.reactivateApp();
                } else if (Server.XHRObj.readyState == 4) {
                    Server.maxTry = 0;
                    Server.parse_playlistItems();
                }
            }
            this.XHRObj.open("GET", url, true);
            this.XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
            if (Main.linked == true) {
                this.XHRObj.setRequestHeader("Authorization", "Bearer " + Main.token);
            }
            //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Main.accessToken);
            //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Server.appKey);
            //this.XHRObj.setRequestHeader("x-api-key", "VognVhjEz78VIknaWHHfYy80E8A2G6yA0xmt1N40");
            this.XHRObj.send(null);
        } else {
            alert("Failed to create XHR");
        }
    }
    ////////viamo playback code 
Server.home_fetchRedirectUrl = function(url) {

    var url = this.url.redirect + url;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.home_parseRedirectURL();
            }
        }

        this.XHRObj.open("GET", url, false);
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}

Server.home_parseRedirectURL = function(videoid) {
    if (this.XHRObj.status != 200) {
        Popup.showError('error', 'Connection Failed. Status - ' + Server.XHRObj.status, 1, "");
    } else {
        Data.home_setVideoPlaybackURL(JSON.parse(this.XHRObj.responseText));
    }
}

/////



Server.getPackages = function() {
    var url = Server.url.dev_api + '/packages';

    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry < 10) {
                Server.maxTry = Server.maxTry + 1;
                // Server.parse_AuthorizedError("home_fetchSubMenu", contenttype);
            } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry >= 10) {
                Server.reactivateApp();
            } else if (Server.XHRObj.readyState == 4) {
                Server.maxTry = 0;
                Server.parse_Packages();
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
        //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Server.appKey);
        //this.XHRObj.setRequestHeader("x-api-key", "VognVhjEz78VIknaWHHfYy80E8A2G6yA0xmt1N40");
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}

Server.parse_Packages = function(contenttype) {

    if (this.XHRObj.status != 200) {
        console.log("fail to fetch sub data");
    } else {
        //Data.SetsubcriptionToPackage(JSON.parse(this.XHRObj.responseText));
        Data.setpackageData(JSON.parse(this.XHRObj.responseText));
    }
}



Server.getCatalougeByIdLargeCarousel = function(catalougeid) {
    var url = Server.url.dev_api + '/catalogues?id=' + Main.largeCarouselId;
    this.XHRObj == null;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry < 10) {
                Server.maxTry = Server.maxTry + 1;
                // Server.parse_AuthorizedError("home_fetchSubMenu", contenttype);
            } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry >= 10) {
                Server.reactivateApp();
            } else if (Server.XHRObj.readyState == 4) {
                Server.maxTry = 0;
                Server.parse_CatalougeByIdLargeCarousel()
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
        this.XHRObj.setRequestHeader('Authorization', Main.token);;
        //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Server.appKey);
        //this.XHRObj.setRequestHeader("x-api-key", "VognVhjEz78VIknaWHHfYy80E8A2G6yA0xmt1N40");
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}
Server.parse_CatalougeByIdLargeCarousel = function(contenttype) {

    if (this.XHRObj.status != 200) {
        console.log("fail to fetch sub data");
    } else {
        //Data.SetsubcriptionToPackage(JSON.parse(this.XHRObj.responseText));
        Data.setCatalougeLarge(JSON.parse(this.XHRObj.responseText));
    }
}
Server.getCatalougeByIdRegularCarousel = function(catalougeid) {
    var url = Server.url.dev_api + '/catalogues?id=' + Main.regularCarouselsId;
    this.XHRObj == null;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry < 10) {
                Server.maxTry = Server.maxTry + 1;
                // Server.parse_AuthorizedError("home_fetchSubMenu", contenttype);
            } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry >= 10) {
                Server.reactivateApp();
            } else if (Server.XHRObj.readyState == 4) {
                Server.maxTry = 0;
                Server.parse_CatalougeByIdRegularCarousel()
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
        this.XHRObj.setRequestHeader("Authorization", Main.token);
        //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Server.appKey);
        //this.XHRObj.setRequestHeader("x-api-key", "VognVhjEz78VIknaWHHfYy80E8A2G6yA0xmt1N40");
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}
Server.parse_CatalougeByIdRegularCarousel = function(contenttype) {

    if (this.XHRObj.status != 200) {
        console.log("fail to fetch sub data");
    } else {
        //Data.SetsubcriptionToPackage(JSON.parse(this.XHRObj.responseText));
        Data.setCatalougeRegular(JSON.parse(this.XHRObj.responseText));
    }
}

Server.getCatalougeById = function(catalougeid) {
    var url = Server.url.dev_api + '/catalogues?id=' + catalougeid;
    this.XHRObj = null;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry < 10) {
                Server.maxTry = Server.maxTry + 1;
                // Server.parse_AuthorizedError("home_fetchSubMenu", contenttype);
            } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry >= 10) {
                Server.reactivateApp();
            } else if (Server.XHRObj.readyState == 4) {
                Server.maxTry = 0;
                Server.parse_CatalougeById();
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
        //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Server.appKey);
        //this.XHRObj.setRequestHeader("x-api-key", "VognVhjEz78VIknaWHHfYy80E8A2G6yA0xmt1N40");
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}

Server.parse_CatalougeById = function(contenttype) {

    if (this.XHRObj.status != 200) {
        console.log("fail to fetch sub data");
    } else {
        //Data.SetsubcriptionToPackage(JSON.parse(this.XHRObj.responseText));
        Data.setCatalouge(JSON.parse(this.XHRObj.responseText));
    }
}

Server.getCatalougeByIdDetailPlaylist = function(catalougeid) {
    var url = Server.url.dev_api + '/catalogues?id=' + catalougeid;
    this.XHRObj == null;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry < 10) {
                Server.maxTry = Server.maxTry + 1;
                // Server.parse_AuthorizedError("home_fetchSubMenu", contenttype);
            } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry >= 10) {
                Server.reactivateApp();
            } else if (Server.XHRObj.readyState == 4) {
                Server.maxTry = 0;
                Server.parse_CatalougeByIdDetailPlaylist()
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
        this.XHRObj.setRequestHeader('Authorization', Main.token);;
        //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Server.appKey);
        //this.XHRObj.setRequestHeader("x-api-key", "VognVhjEz78VIknaWHHfYy80E8A2G6yA0xmt1N40");
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}
Server.parse_CatalougeByIdDetailPlaylist = function(contenttype) {

    if (this.XHRObj.status != 200) {
        console.log("fail to fetch sub data");
    } else {
        //Data.SetsubcriptionToPackage(JSON.parse(this.XHRObj.responseText));
        Data.setCatalougeDetailPlaylist(JSON.parse(this.XHRObj.responseText));
    }
}


Server.getVideoById = function(urlSend) {
    //var url = Server.url.dev_api+'/video?id='+videoID;
    var url = urlSend;

    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry < 10) {
                Server.maxTry = Server.maxTry + 1;
                // Server.parse_AuthorizedError("home_fetchSubMenu", contenttype);
            } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry >= 10) {
                Server.reactivateApp();
            } else if (Server.XHRObj.readyState == 4) {
                Server.maxTry = 0;
                Server.parse_VideoById();
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
        this.XHRObj.setRequestHeader("CUSTOMERID", Main.accesstoken);
        //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Server.appKey);
        //this.XHRObj.setRequestHeader("x-api-key", "VognVhjEz78VIknaWHHfYy80E8A2G6yA0xmt1N40");
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}

Server.parse_VideoById = function(contenttype) {

    if (this.XHRObj.status != 200) {
        console.log("fail to fetch sub data");
    } else {
        Server.home_fetchPlaybackURL();
        //Data.SetsubcriptionToPackage(JSON.parse(this.XHRObj.responseText));
        //Data.setCatalouge(JSON.parse(this.XHRObj.responseText));
    }
}

Server.fetch_subscriptions = function(suburl) {
    var url = suburl;

    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry < 10) {
                Server.maxTry = Server.maxTry + 1;
                // Server.parse_AuthorizedError("home_fetchSubMenu", contenttype);
            } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry >= 10) {
                Server.reactivateApp();
            } else if (Server.XHRObj.readyState == 4) {
                Server.maxTry = 0;
                Server.parse_subscriptions();
            }
        }
        this.XHRObj.open("GET", url, true);
        //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Main.accessToken);
        //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Server.appKey);
        //this.XHRObj.setRequestHeader("x-api-key", "VognVhjEz78VIknaWHHfYy80E8A2G6yA0xmt1N40");
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}

Server.parse_subscriptions = function(contenttype) {

    if (this.XHRObj.status != 200) {
        console.log("fail to fetch sub data");
    } else {
        Data.SetsubcriptionToPackage(JSON.parse(this.XHRObj.responseText));

    }
}


Server.send_payment_registrationdetails = function(data) {
    // var url = this.url.requestpin;
    //   var options = "&package_id="+data.packageid+"&email_id="+data.emailid+"&password="+data.password+"&token="+data.token+"&sub_id="+data.subId;

    if (Data.user.loginUser.status === true) {
        url = "http://34.217.125.68/wherevertv/register_stripe.php?&package_id=" + data.packageid + "&email_id=" + data.emailid + "&password=" + null + "&token=" + data.token + "&sub_id=" + data.subId + "&full_name=" + data.name;

    } else {
        url = "http://34.217.125.68/wherevertv/register_stripe.php?&package_id=" + data.packageid + "&email_id=" + data.emailid + "&password=" + data.password + "&token=" + data.token + "&sub_id=" + data.subId + "&full_name=" + data.name;
    }


    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.parse_payment_registrationdetails();
            }
        }
        Server.XHRObj.open('GET', url, true);
        //Server.XHRObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        Server.XHRObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        //Server.XHRObj.setRequestHeader('Content-type', 'application/json charset=UTF-8');
        Server.XHRObj.send(null);
        //Server.XHRObj.send(null);
    } else {
        //    Popup.showError("Error", "Something went wrong. Please try again. If it happens again, contact us", 1, "");
    }
}

Server.parse_payment_registrationdetails = function() {
    if (this.XHRObj.status != 200) {
        console.log("fail to fetch sub data");
    } else {
        Data.SetNewUserData(JSON.parse(this.XHRObj.responseText));

    }

}




Server.iap_registration = function(recipt) {
    Controller.showSpinner();
    // var url = this.url.requestpin;
    //   var options = "&package_id="+data.packageid+"&email_id="+data.emailid+"&password="+data.password+"&token="+data.token+"&sub_id="+data.subId;
    var getname = Data.user.newuser.username.split(" ");
    var fn = "";
    var ln = "";
    if (getname[1]) {
        fn = getname[0];
        ln = getname[0];;
    } else {
        fn = getname[0];
        ln = "";
    }
    var amazonData = JSON.parse(localStorage.getItem('amazon-purchase-recipt'))
    var url = Server.url.dev_api + "/register-iap";
    var options = JSON.stringify({
        "subscription_title": Data.currentpackage.detailsregistration.currentsubcription.title,
        "package_title": Data.currentpackage.detailsregistration.currentpackage.title,
        "subscription_id": Data.currentpackage.detailsregistration.currentsubcription.sub_id,
        "package_id": Data.currentpackage.detailsregistration.currentsubcription.packageId,
        "email_address": Data.user.newuser.useremail,
        "first_name": fn,
        "last_name": ln,
        "password": Data.user.newuser.password,
        "receipt_id": amazonData.reciptId,
        "payment_gateway_slug": "amazon",
        "amazon_user_id": amazonData.userId,
        "payment_gateway": "Amazon",
    });


    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.parse_iap();
            }
        }
        Server.XHRObj.open('POST', url, true);
        //Server.XHRObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        Server.XHRObj.setRequestHeader('Content-type', 'application/json');
        Server.XHRObj.setRequestHeader('CUSTOMERID', Main.CUSTOMERID);
        Server.XHRObj.send(options);
        //Server.XHRObj.send(null);
    } else {
        //    Popup.showError("Error", "Something went wrong. Please try again. If it happens again, contact us", 1, "");
    }
}

Server.parse_iap = function() {
    if (this.XHRObj.status != 200) {
        Controller.hideSpinner();
        res = JSON.parse(this.XHRObj.responseText);
        Popup.showError("Error", res.error.message, 1, "");

        console.log("fail to fetch sub data");
    } else {
        Data.SetNewUserData(JSON.parse(this.XHRObj.responseText));

    }

}



Server.addRegistration = function() {
    Controller.showSpinner();
    var getname = Data.user.newuser.username.split(" ");
    var fn = "";
    var ln = "";
    if (getname[1]) {
        fn = getname[0];
        ln = getname[0];;
    } else {
        fn = getname[0];
        ln = "";
    }
    var url = Server.url.dev_api + "/register";
    var options = JSON.stringify({
        "slug_name": Data.currentpackage.detailsregistration.currentsubcription.slug_name,
        "email_address": Data.user.newuser.useremail,
        "first_name": fn,
        "last_name": ln,
        "password": Data.user.newuser.password,
    });


    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.parse_registration();
            }
        }
        Server.XHRObj.open('POST', url, true);
        //Server.XHRObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        Server.XHRObj.setRequestHeader('Content-type', 'application/json');
        Server.XHRObj.setRequestHeader('CUSTOMERID', Main.CUSTOMERID);
        Server.XHRObj.send(options);
        //Server.XHRObj.send(null);
    } else {
        //    Popup.showError("Error", "Something went wrong. Please try again. If it happens again, contact us", 1, "");
    }

}


Server.parse_registration = function() {
    if (this.XHRObj.status != 200) {
        Controller.hideSpinner();
        res = JSON.parse(this.XHRObj.responseText);
        Popup.showError("Error", res.error.message, 1, "");
    } else {
        Controller.hideSpinner();
        buySubscription(Data.currentpackage.detailsregistration.currentsubcription.slug_name);
    }

}

Server.auth_parseVerifyDevice = function(caller) {
    if (this.XHRObj.status != 200) {
        //  Popup.showError("Error", "Connection Failed. Try again", 1, "");
    } else {
        var data = null;
        var check_sum = false;
        try {
            data = JSON.parse(this.XHRObj.responseText);
            check_sum = true;
        } catch (e) {
            Server.auth_verifyDevice(caller);
        }

        if (check_sum) {
            Data.home_setVerifyDevice(caller, JSON.parse(this.XHRObj.responseText));
        }
    }
}

// Auth.init = function() {
//     // // // // // // // // console.log("Auth.init");
//     Auth.addMouseEvents();

//     this.authContact.style.display = 'none';
//     this.devicelink.style.display = 'none';
//     this.signin.style.display = 'none';
//     this.mainMessage.style.display = 'none';
//     this.authOptions.style.display = 'block';
//     this.username.blur();
//     this.password.blur();
//     this.username.value = "";
//     this.password.value = "";

//     Display.home.dismantle();

//     this.currentVisible = "authOptions";
// }


Server.auth_requestPin = function() {
    var url = this.url.requestpin;
    var options = "device_id=" + Server.device_id + "&serial=" + Server.serial;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.auth_parsePinRequest();
            }
        }
        Server.XHRObj.open('POST', url, true);
        // Server.XHRObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // Server.XHRObj.send(options);
    } else {
        //    Popup.showError("Error", "Something went wrong. Please try again. If it happens again, contact us", 1, "");
    }

}

Server.auth_parsePinRequest = function() {
    if (this.XHRObj.status != 200) {
        //  Popup.showError("Error", "Connection Failed. Try again", 1, "");
    } else {
        var data = null;
        var check_sum = false;
        try {
            data = JSON.parse(this.XHRObj.responseText);
            check_sum = true;
        } catch (e) {
            Server.auth_requestPin();
        }

        if (check_sum) {
            Data.home_setPinCode(JSON.parse(this.XHRObj.responseText));
        }
    }
}

Server.auth_signIn = function(username, password) {
    var url = this.url.dev_api + "/login";
    var options = JSON.stringify({
        "email": "" + username,
        "password": "" + hex_sha256(password)
    });


    // var options = "device_id=" + Server.device_id + "&serial=" + Server.serial + "&username=" + username + "&password=" + md5(password);
    // // // // // // // console.log("Server.auth_signIn = ", options);

    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
                if (Server.XHRObj.readyState == 4) {
                    Server.auth_parseSignin(username, hex_sha256(password));
                }
            }
            /*
        Content-Type: application/json
    CUSTOMERID: 5bceefce5ac48a1643dae55f
        */
        Server.XHRObj.open('POST', url, true);
        Server.XHRObj.setRequestHeader('Content-type', 'application/json');
        Server.XHRObj.setRequestHeader('CUSTOMERID', Main.CUSTOMERID);
        // Server.XHRObj.send(options);
        Server.XHRObj.send(options);
    } else {
        //    Popup.showError("Error", "Something went wrong. Please try again. If it happens again, contact us", 1, "");
    }

}

Server.auth_parseSignin = function(username, password) {
    if (this.XHRObj.status != 200) {
        Auth.setSigninError(JSON.parse(this.XHRObj.responseText));
        //  Popup.showError("Error", "Connection Failed. Try again", 1, "");
    } else {
        var data = null;
        var check_sum = false;
        try {
            data = JSON.parse(this.XHRObj.responseText);
            check_sum = true;
        } catch (e) {
            Server.auth_signIn(username, password);
        }

        if (check_sum) {
            Data.home_setSignin({
                    res: JSON.parse(this.XHRObj.responseText)
                },
                username,
                password);
        }
    }
}


Server.fetch_getConsumerDetail = function(user_email, user_password) {


    var url = Server.url.dev_api + "/account";
    // var options = "device_id=" + Server.device_id + "&serial=" + Server.serial + "&username=" + username + "&password=" + md5(password);
    // // // // // // // console.log("Server.auth_signIn = ", options);

    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.auth_parseUserDetails();
            }
        }
        Server.XHRObj.open('GET', url, true);
        Server.XHRObj.setRequestHeader('Authorization', Main.token);
        Server.XHRObj.setRequestHeader('CUSTOMERID', Main.CUSTOMERID);
        // Server.XHRObj.send(options);
        Server.XHRObj.send(null);
    } else {
        //    Popup.showError("Error", "Something went wrong. Please try again. If it happens again, contact us", 1, "");
    }
}

Server.auth_parseUserDetails = function(email, password) {
    if (this.XHRObj.status != 200) {
        Server.refreshUserToken(localStorage.getItem('loginid'), localStorage.getItem('loginpassword'));
        //  Popup.showError("Error", "Connection Failed. Try again", 1, "");
    } else {
        var data = null;
        var check_sum = false;
        try {
            data = JSON.parse(this.XHRObj.responseText);
            check_sum = true;
        } catch (e) {
            // Server.fetch_getConsumerDetail(email);
        }

        if (check_sum) {
            Data.home_setUserData(JSON.parse(this.XHRObj.responseText));
        }
    }
}


Server.auth_verifyDevice = function(caller) {
    //var url = this.url.verify;
    var url = 'http://app-api.asiamediaglobal.org/app_mastery/login/verify';
    var options = "device_id=" + Server.device_id + "&serial=" + Server.serial + '&pin=' + Server.pin;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.auth_parseVerifyDevice(caller);
            }
        }
        Server.XHRObj.open('POST', url, true);
        Server.XHRObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        Server.XHRObj.send(options);
    } else {
        //    Popup.showError("Error", "Something went wrong. Please try again. If it happens again, contact us", 1, "");
    }

}

function getSystemID() {
    var duid = localStorage.getItem("duid");

    if (!duid) {
        duid = randomString(20, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    // var duid = randomString(20, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    localStorage.setItem("duid", duid);

    // console.log("duid = ", duid);

    return duid;

    //generate random string
    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }
}


Server.reactivateApp = function() {
    Popup.showError("error", "I'm sorry, your authentication is corrupted. Please login again", "1", "reactivate");
}

Server.getRefreshToken = function(caller, arg1, arg2, arg3) {
    var url = this.url.oauth;
    var option = "client_id=" + this.url.client_id + "&client_secret=" + this.url.client_secret + "&linked_device_id=" + Main.duid + "&pin=" + Main.pin + "&grant_type=password";
    option = Common.htmlEncode(option);

    if (this.consumer_XHRObj == null) {
        this.consumer_XHRObj = new XMLHttpRequest();
    }

    if (this.consumer_XHRObj) {
        this.consumer_XHRObj.onreadystatechange = function() {
            if (Server.consumer_XHRObj.readyState === 4) {
                Server.parseOauthTokenResponse(caller, arg1, arg2, arg3);
            }
        }
        this.consumer_XHRObj.open("POST", url, true);
        this.consumer_XHRObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        this.consumer_XHRObj.send(option);
    }
}

Server.refreshToken = function(caller, arg1, arg2, arg3) {
    var url = this.url.auth;
    var option = "client_id=" + this.url.client_id + "&client_secret=" + this.url.client_secret + "&grant_type=refresh_token&refresh_token=" + Main.refreshToken;
    option = Common.htmlEncode(option);

    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        // Server.maxTry = Server.maxTry + 1;
        this.XHRObj.onreadystatechange = function() {
                if (Server.XHRObj.readyState == 4) {
                    // // // // // // // // // // console.log("Server.maxTry = " + Server.maxTry);
                    if (Server.XHRObj.status == 401 && Server.maxTry < 10) {
                        Server.maxTry = Server.maxTry + 1;
                        mixpanel.track("Error", {
                            "error": "failed to refreshToken",
                            "code": "401",
                            "caller": caller,
                            "maxTry": Server.maxTry,
                            "refreshToken": Main.refreshToken,
                            "client_id": Server.url.client_id,
                            "client_secret": Server.url.client_secret
                        });
                        Server.refreshToken(caller, arg1, arg2, arg3);
                    } else if (Server.XHRObj.status == 401 && Server.maxTry >= 10) {
                        mixpanel.track("reactivate app", {
                            "error": "failed to refreshToken",
                            "code": "401",
                            "caller": caller,
                            "maxTry": Server.maxTry,
                            "refreshToken": Main.refreshToken,
                            "client_id": Server.url.client_id,
                            "client_secret": Server.url.client_secret
                        });
                        Server.reactivateApp();
                    } else {
                        Server.maxTry = 0;
                        Server.parseRefreshTokenResponse(caller, arg1, arg2, arg3);
                    }
                }
            }
            // // // // // // // // // // console.log("Server.refreshToken = " + url);
            // // // // // // // // // // console.log("options = " + option);
        this.XHRObj.open("POST", url, true);
        //// // // // // // // // // // console.log("option = " + option);
        this.XHRObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //this.XHRObj.responseText = "";
        ////// // // // // // // // // // console.log("option = " + option);
        this.XHRObj.send(option);
    } else {}
}

Server.refreshUserToken = function(username, password) {
    var url = this.url.dev_api + "/login";
    var options = JSON.stringify({
        "email": "" + username,
        "password": "" + password
    });

    // var options = "device_id=" + Server.device_id + "&serial=" + Server.serial + "&username=" + username + "&password=" + md5(password);
    // // // // // // // console.log("Server.auth_signIn = ", options);

    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
                if (Server.XHRObj.readyState == 4) {
                    Server.parserefreshUserToken(username, password);
                }
            }
            /*
        Content-Type: application/json
    CUSTOMERID: 5bceefce5ac48a1643dae55f
        */
        Server.XHRObj.open('POST', url, true);
        Server.XHRObj.setRequestHeader('Content-type', 'application/json');
        Server.XHRObj.setRequestHeader('CUSTOMERID', Main.CUSTOMERID);
        // Server.XHRObj.send(options);
        Server.XHRObj.send(options);
    } else {
        //    Popup.showError("Error", "Something went wrong. Please try again. If it happens again, contact us", 1, "");
    }

}

// Server.refreshUserToken = function(username, password) {
//     var url = this.url.dev_api + "/login";
//     console.log(url)
//     var options = JSON.stringify({
//         "email": "" + username,
//         "password": "" + password
//     });
//     console.log(options);

//     // var options = "device_id=" + Server.device_id + "&serial=" + Server.serial + "&username=" + username + "&password=" + md5(password);
//     // // // // // // // console.log("Server.auth_signIn = ", options);

//     if (this.XHRObj == null) {
//         this.XHRObj = new XMLHttpRequest();
//     }

//     if (this.XHRObj) {
//         this.XHRObj.onreadystatechange = function() {
//             if (Server.XHRObj.readyState == 4) {
//                 Server.parserefreshUserToken(username, password);
//             }
//         }
//         Server.XHRObj.open('POST', url, true);
//         Server.XHRObj.setRequestHeader('Content-type', 'application/json');
//         Server.XHRObj.setRequestHeader('CUSTOMERID', Main.CUSTOMERID);
//         Server.XHRObj.send(options);
//     } else {
//        // Popup.showError("Error", "Something went wrong. Please try again. If it happens again, contact us", 1, "");
//     }
// }


Server.parseOauthTokenResponse = function(caller, arg1, arg2, arg3) {
    if (this.consumer_XHRObj.status != 200) {} else {
        Data.home_setOauthToken(JSON.parse(this.consumer_XHRObj.responseText), caller, arg1, arg2, arg3);
    }
}

Server.parserefreshUserToken = function(username, password) {
        if (this.XHRObj.status != 200) {
            var error = {
                error: {
                    message: "Auto Login Failed Please try to relogin",
                }
            }
            Auth.setSigninError(error);
            //  Popup.showError("Error", "Connection Failed. Try again", 1, "");
        } else {
            var data = null;
            var check_sum = false;
            try {
                data = JSON.parse(this.XHRObj.responseText);
                check_sum = true;
            } catch (e) {
                Server.auth_signIn(username, password);
            }

            if (check_sum) {
                Data.home_setSignin({
                        res: JSON.parse(this.XHRObj.responseText)
                    },
                    username,
                    password);
            }
        }
    }
    // Server.parserefreshUserToken = function(username, password) {
    //     if (this.XHRObj.status != 200) {
    //         var error = {
    //             error: {
    //                 message: "Auto Login Failed Please try to relogin",
    //             }
    //         }
    //         Auth.setSigninError(error);
    //     } else {
    //         var data = null;
    //         var check_sum = false;
    //         try {
    //             data = JSON.parse(this.XHRObj.responseText);
    //             check_sum = true;
    //         } catch (e) {
    //             Server.auth_signIn(username, password);
    //         }

//         if (check_sum) {
//             Data.home_setSignin({
//                 res: JSON.parse(this.XHRObj.responseText),
//                 email: username,
//                 password: password
//             });
//         }
//     }
// }

Server.parseRefreshTokenResponse = function(caller, arg1, arg2, arg3) {
    if (this.XHRObj.status != 200) {
        /*  Popup.show({
        set:'error',
        content: 'Connection Failed.<br />Status - '+ Server.XHRObj.status
        })
         */
    } else {
        //// // // // // // // // // // console.log("response = ");
        //// // // // // // // // // // console.log(this.XHRObj.responseText);
        ////// // // // // // // // // // console.log("Server.auth_parseBrowseResponse");
        ////// // // // // // // // // // console.log(JSON.parse(this.XHRObj.responseText));
        Data.home_resetToken(JSON.parse(this.XHRObj.responseText), caller, arg1, arg2, arg3);
    }
}

Server.parse_AuthorizedError = function(caller, arg1, arg2, arg3) {
    //// // // // // // // // // // console.log("Server.parse_AuthorizedError");
    //// // // // // // // // // // console.log("this.XHRObj.status = " + this.XHRObj.status);
    if (this.XHRObj.status == 401) {
        Data.home_AuthorizedError(caller, arg1, arg2, arg3);
    }
    /*
    if(this.XHRObj.status != 200 && this.XHRObj.status != 401){
    Popup.showError("Error", "Connection Failed. Try Again", 1, "");
    } else{
    Data.home_AuthorizedError(caller, arg1, arg2, arg3);
    }
     */
}

// Server.auth_parseClientStatusResponse = function () {
//     if (this.XHRObj.status != 200) {
//         mixpanel.track("Error", {
//             "code": "parseClientStatusResponse",
//             "message": "client status response failed",
//             "status": this.XHRObj.status
//         });
//         /*  Popup.show({
//         set:'error',
//         content: 'Connection Failed.<br />Status - '+ Server.XHRObj.status
//         })
//          */
//     } else {
//         Data.home_setClientStatus(JSON.parse(this.XHRObj.responseText));

//     }
// }

Server.auth_parseClientStatusResponse = function() {
    if (this.XHRObj.status != 200) {
        //  Popup.showError("Error", "Connection Failed. Try again", 1, "");
    } else {
        //try{
        var check_sum = false;
        var data = null;
        try {
            data = JSON.parse(this.XHRObj.responseText);
            check_sum = true;
        } catch (e) {
            Server.auth_clientStatus();
        }

        if (check_sum) {
            Data.home_setClientStatus(JSON.parse(this.XHRObj.responseText));
        }
        //} catch(e){
        //    Server.auth_clientStatus();
        //}
    }
}




/* Authentication Page */
Server.auth_checkRegistration = function() {
    var url = this.url.auth + Main.duid;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.auth_parseAuthResponse();
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.send();
    } else {
        alert("Failed to create XHR");
    }
}

Server.auth_parseAuthResponse = function() {
    if (this.XHRObj.status != 200) {
        Popup.showError('error', 'Connection Failed. Status - ' + Server.XHRObj.status, 1, "");
    } else {
        Data.home_setAuth(JSON.parse(this.XHRObj.responseText));
    }
}

Server.auth_linkDevice = function() {
    //var options = "client_id=" + this.url.client_id +"&client_secret="+this.url.client_secret;
    var url = this.url.register + Main.duid;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                if (Server.XHRObj.status == 404 && Server.maxSyncTry < 10) {
                    mixpanel.track("Error", {
                        "message": "devivce link check fails",
                        "status": "404",
                        "code": "auth_linkDevice"
                    });
                } else if (Server.XHRObj.status == 404 && Server.maxSyncTry >= 10) {} else {
                    Server.auth_parseAuthResponse();
                }
            }
        }

        this.XHRObj.open("GET", url, true);
        this.XHRObj.send();
    } else {
        alert("Failed to create XHR");
    }
}

Server.auth_registerDevice = function() {
    // // // // console.log("Server.auth_registerDevice");
    var url = this.url.register + Main.duid;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4 && Server.XHRObj.status == 200) {
                Server.auth_parseRegisterResponse();
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.send();
    } else {
        alert("Failed to create XHR");
    }
}

Server.home_fetchVHXUser = function() {
    var url = this.url.vhx_user;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.auth_parseVHXUser();
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}

Server.auth_parseVHXUser = function() {
    if (this.XHRObj.status != 200) {
        /*  Popup.show({"
        "               set:'error',
        content: 'Connection Failed.<br />Status - '+ Server.XHRObj.status
        })
         */
    } else {
        Data.home_setVHXUser(JSON.parse(this.XHRObj.responseText));
    }
}

//appmastery_dash
Server.home_fetchAppMasteryConfig = function() {
    var url = this.url.appmastery_dash;
    // // // console.log("Server.home_fetchAppMasteryConfig");

    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.auth_parseAppMasteryConfig();
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //    this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}

Server.auth_parseAppMasteryConfig = function() {
    if (this.XHRObj.status != 200) {
        Data.home_setAppMasteryConfig(JSON.parse(this.XHRObj.responseText));
        /*  Popup.show({"
        "               set:'error',
        content: 'Connection Failed.<br />Status - '+ Server.XHRObj.status
        })
         */
    } else {
        Data.home_setAppMasteryConfig(JSON.parse(this.XHRObj.responseText));
    }
}

Server.fetch_Token = function() {

    // return new Promise((resolve, reject) => {
    var url = this.url.appmastery_new_token;
    // var options = "device_id=" + Server.device_id + "&serial=" + Server.serial + "&username=" + username + "&password=" + md5(password);
    // // // // // // // //console.log("Server.auth_signIn = ", options);

    //var dataForToken = 
    if (this.XHRObjToken == null) {
        this.XHRObjToken = new XMLHttpRequest();
    }

    if (this.XHRObjToken) {
        this.XHRObjToken.onreadystatechange = function() {
            if (Server.XHRObjToken.readyState == 4) {
                Server.parse_Token();
                //resolve();
            }
        }
        Server.XHRObjToken.open('POST', url, true);
        Server.XHRObjToken.setRequestHeader('Content-Type', 'application/json');
        Server.XHRObjToken.send(JSON.stringify({
            platform: Server.platform,
            customerId: Server.customerId
        }));
    } else {
        console("err-server");
    }
    // });
}

Server.parse_Token = function() {
    if (this.XHRObjToken.status != 200) {
        //  Popup.showError("Error", "Connection Failed. Try again", 1, "");
    } else {
        var data = null;
        var check_sum = false;
        try {
            data = JSON.parse(this.XHRObjToken.responseText);
            // localStorage.setItem("wtvguidetok" , data.token)
            check_sum = true;
        } catch (e) {
            Server.fetch_Token();
        }

        if (check_sum) {
            //  DataGuide = data;
            Data.home_setAuthToken(data)

            //Server.fetch_TvguideData(data);
            //  TVGuide.init();
        }
    }

}

Server.home_fetchAppMasteryNewConfig = function() {
    var url = this.url.appmastery_new_dash;

    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.auth_parseAppMasteryNewConfig();
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.setRequestHeader("Authorization", Main.AuthorizationToken);
        //    this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}

Server.auth_parseAppMasteryNewConfig = function() {
    if (this.XHRObj.status != 200) {
        Data.home_setAppMasteryConfig(JSON.parse(this.XHRObj.responseText));
        /*  Popup.show({"
        "               set:'error',
        content: 'Connection Failed.<br />Status - '+ Server.XHRObj.status
        })
         */
    } else {
        Data.home_setAppMasteryNewConfig(JSON.parse(this.XHRObj.responseText));
    }
}

Server.auth_generatePin = function() {

    // // // // console.log("Server.auth_generatePin");

    var url = this.url.register;
    var options = "client_id=" + this.url.client_id + "&client_secret=" + this.url.client_secret;
    // // // // // // // // // // console.log("auth_registerDevice = " + options);
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.auth_parseRefreshPin();
            }
        }
        this.XHRObj.open("POST", url, true);
        this.XHRObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        this.XHRObj.send(options);
    } else {
        alert("Failed to create XHR");
    }
}

Server.auth_parseAuthResponse = function() {
    if (this.XHRObj.status != 200) {
        /*  Popup.show({"
        "               set:'error',
        content: 'Connection Failed.<br />Status - '+ Server.XHRObj.status
        })
         */
    } else {
        Data.home_setAuth(JSON.parse(this.XHRObj.responseText));
    }
}

Server.auth_parseRefreshPin = function() {
    if (this.XHRObj.status != 201) {} else {
        Data.home_refreshAuthPin(JSON.parse(this.XHRObj.responseText));
    }
}

Server.auth_parseRegisterResponse = function() {
    // // // // console.log("Server.auth_parseRegisterResponse");
    if (this.XHRObj.status != 200) {
        // // // // console.log("status != 201");
        /*  Popup.show({"
        "               set:'error',
        content: 'Connection Failed.<br />Status - '+ Server.XHRObj.status
        })
         */
    } else {
        Data.home_setAuthRegister(JSON.parse(this.XHRObj.responseText));
    }
}

Server.auth_browse = function() {
    var url = this.url.auth;
    var option = "client_id=" + this.url.client_id + "&client_secret=" + this.url.client_secret + "&grant_type=client_credentials&scope=read write";
    option = Common.htmlEncode(option);

    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                if (Server.XHRObj.status == 401) {
                    //Server.parse_AuthorizedError('auth_browse');
                    Server.refreshToken('auth_browse');
                } else {
                    Server.auth_parseBrowseResponse();
                }
            }
        }
        this.XHRObj.open("POST", url, true);
        this.XHRObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ////// // // // // // // // // // console.log("option = " + option);
        this.XHRObj.send(option);
    } else {}
}

/* Home Page */

Server.home_fetchContentByType = function(contenttype) {
    Controller.showSpinner();
    // // // // console.log("Server.home_fetchContentByType = " + contenttype);
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry < 10) {
                Server.maxTry = Server.maxTry + 1;
                mixpanel.track("Error", {
                    "code": "fetchContentByType",
                    "message": "status 401",
                    "accesstoken": Main.accesstoken,
                    "content-type": contenttype,
                    "url": url
                });
                Server.parse_AuthorizedError("home_fetchSubMenu", contenttype);
            } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry >= 10) {
                Server.reactivateApp();
            } else if (Server.XHRObj.readyState == 4) {
                Server.maxTry = 0;
                Server.home_parseContentByType(contenttype);
            }
        }
        var options = "type=" + contenttype + "&per_page=500&product=" + Common.htmlEncode(this.url.product)

        var url = Main.api_url + contenttype // Main.header_type // + "" "?" + options;
        if (contenttype === 'category') {
            //  url = 'http://template-apis.herokuapp.com/whereverchannel/category';
            url = 'http://34.217.125.68/wherevertv/content-wtv.php?type=largecarousel&data=12';
        } else if (contenttype === 'playlist') {
            url = 'http://template-apis.herokuapp.com/whereverchannel/playlist';
        } else if (contenttype === 'subcription') {
            url = 'http://34.217.125.68/wherevertv/content-wtv.php?type=largecarousel&data=12';
        } else if (contenttype === 'subcription-user') {

            url = 'http://34.217.125.68/wherevertv/content-wtv.php?type=largecarousel&data=12&email=' + Data.user.loginUser.email;
        } else if (contenttype === 'user-category') {

            url = 'http://34.217.125.68/wherevertv/content-wtv.php?type=largecarousel&data=12&email=' + Data.user.loginUser.email;

        } else if (contenttype == 'user-mylist') {
            url = Server.url.dev_api + "/mylist"
        } else if (contenttype == 'user-playlist') {
            url = Server.url.dev_api + "/get-subscribed-catalogues"
        }

        this.XHRObj.open("GET", url, true);
        ////// // // // // // // // // // console.log("url = " + url);
        ////// // // // // // // // // // console.log("Main.accessToken = " + Main.accessToken);
        //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Main.accessToken);
        this.XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
        this.XHRObj.setRequestHeader("Authorization", Main.token);
        //this.XHRObj.setRequestHeader("x-api-key", "VognVhjEz78VIknaWHHfYy80E8A2G6yA0xmt1N40");
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}

Server.home_parseContentByType = function(contenttype) {
    // // // // // // console.log("Server.home_parseContentByType = " + contenttype);
    if (this.XHRObj.status != 200) {

        Server.refreshUserToken(localStorage.getItem('loginid'), localStorage.getItem('loginpassword'));

    } else {
        ///
        /////// // // // // // // // // // console.log(this.XHRObj.responseText);
        //parse xml
        //Data.home_setData(sf.util.xml2obj(this.XHRObj.responseXML.documentElement).Category);
        if (contenttype == "category") {
            //  Data.home_setContentCategory(JSON.parse(this.XHRObj.responseText), "Category");
            // // // // console.log("contenttype = category");
            Data.home_setCategory(JSON.parse(this.XHRObj.responseText), "category");
            //  Data.home_setContentPlaylist(JSON.parse(this.XHRObj.responseText), "category");
        } else if (contenttype === 'user-category') {
            //  Data.home_setContentCategory(JSON.parse(this.XHRObj.responseText), "Category");
            // // // // console.log("contenttype = category");
            Data.home_setCategory(JSON.parse(this.XHRObj.responseText), "category");
            //  Data.home_setContentPlaylist(JSON.parse(this.XHRObj.responseText), "category");
        } else if (contenttype == "series") {
            Data.first_playlist_row = true;
            Data.home_setContentSeries(JSON.parse(this.XHRObj.responseText), "Category");
        } else if (contenttype === "collections") {
            Data.home_setContentCollections(JSON.parse(this.XHRObj.responseText), "Collections");
        } else if (contenttype === "playlist") {
            //  Data.first_playlist_row = true;
            // // // // console.log("contenttype = playlist");
            //todo uncomment with all rows needed
            Data.home_setContentPlaylist(JSON.parse(this.XHRObj.responseText), "playlist");
        } else if (contenttype === "season") {
            Data.home_setContentSeason(JSON.parse(this.XHRObj.responseText), "Season");
        } else if (contenttype === "section") {
            Data.home_setContentSection(JSON.parse(this.XHRObj.responseText), "Section");
        } else if (contenttype == 'subcription') {
            Data.Setsubcription(JSON.parse(this.XHRObj.responseText));
        } else if (contenttype === 'subcription-user') {
            Data.Setsubcription(JSON.parse(this.XHRObj.responseText));
        } else if (contenttype === 'user-mylist') {
            Data.Setmylist(JSON.parse(this.XHRObj.responseText));
        } else if (contenttype == 'user-playlist') {
            Data.home_setContentPlaylist(JSON.parse(this.XHRObj.responseText), "playlist");
        }

        ////////// // // // // // // // // // console.log("===========================================Creating home page=====================================");
        // Display.home_createPage(true);
    }
}

// Server.auth_clientStatus = function () {
//     var url = this.url.customer_reg + Main.customer;
//     // // // // // // // // // // console.log("url = " + url);
//     if (this.XHRObj == null) {
//         this.XHRObj = new XMLHttpRequest();
//     }

//     if (this.XHRObj) {
//         this.XHRObj.onreadystatechange = function () {
//             if (Server.XHRObj.readyState == 4) {
//                 Server.auth_parseClientStatusResponse();
//             }
//         }
//         this.XHRObj.open("GET", url, true);
//         this.XHRObj.send();
//     } else {
//         mixpanel.track("Error", {
//             "code": "clientStatus",
//             "status": "couldn't get XHR"
//         });
//         Popup.showError("Error", "Something went wrong. Please try again. If it happens again, contact us", 1, "");
//     }
// }

//wherever
Server.auth_clientStatus = function() {
    // console.log("Server.auth_clientStatus");

    var url = 'aftv.json';
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                Server.auth_parseClientStatusResponse();
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.send();
    } else {
        //    Popup.showError("Error", "Something went wrong. Please try again. If it happens again, contact us", 1, "");
    }

}

Server.auth_parseClientStatusResponse = function() {
    if (this.XHRObj.status != 200) {
        //  Popup.showError("Error", "Connection Failed. Try again", 1, "");
    } else {
        //try{
        var check_sum = false;
        var data = null;
        try {
            data = JSON.parse(this.XHRObj.responseText);
            check_sum = true;
        } catch (e) {
            Server.auth_clientStatus();
        }

        if (check_sum) {
            Data.home_setClientStatus(JSON.parse(this.XHRObj.responseText));
        }
        //} catch(e){
        //    Server.auth_clientStatus();
        //}
    }
}

//


/**
 * Fetch content by type
 */
Server.details_fetchContentByType = function(contenttype, data) {
    // console.log("Server.details_fetchContentByType");
    // Controller.showSpinner();
    if (this.XHRObj === null)
        this.XHRObj = new XMLHttpRequest();

    if (!this.XHRObj) {
        console.error('Failed to create XHR');
        return;
    }

    this.XHRObj.onreadystatechange = function() {
        if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry < 10) {
            Server.maxTry += 1;
            Server.parse_AuthorizedError('details_fetchContentByType', contenttype);
        } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (Server.XHRObj.readyState === 4) {
            Server.maxTry = 0;
            Server.details_parseContentByType(contenttype);
        }

    }

    // this.XHRObj.open('GET', this.url.category + '?type=' + contenttype + '&per_page=500&product=' + Common.htmlEncode(this.url.product), true);
    var url = Main.api_url + contenttype + '&per_page=500&product=' + Common.htmlEncode(this.url.product);
    if (contenttype === 'series') {
        if (Navigation.home.mouseMove === true) {
            var currentItem = Data.home.playlists[Navigation.home.cursorValue - 1];
            url = currentItem.items[Display.home.carousels[Navigation.home.cursorValue].currentItem]._links.items.href;
        } else {
            currentItem = Data.home.playlists[Display.home.currentCarousel].items[Navigation.home.carouselPosition]
            url = currentItem._links.items.href;
            //var currentItem = Data.home.playlists[Display.home.currentCarousel];
        }

    } else if (contenttype === 'channel') {
        if (Navigation.home.mouseMove === true) {
            var currentItem = Data.home.playlists[Navigation.home.cursorValue - 1];
            url = currentItem.items[Display.home.carousels[Navigation.home.cursorValue].currentItem]._links.items.href;
        } else {
            var currentItem = Data.home.playlists[Display.home.currentCarousel - 1];
            url = currentItem.items[Display.home.carousels[Display.home.currentCarousel].currentItem]._links.items.href;
            //var currentItem = Data.home.playlists[Display.home.currentCarousel];
        }
    }
    this.XHRObj.open('GET', url, true);
    this.XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
    this.XHRObj.setRequestHeader('Authorization', Main.token);;
    //this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
    this.XHRObj.send(null);
}

/**
 * Fetch movie contents
 */
Server.details_fetchContentForMovie = function(contenttype, url) {
    // Controller.showSpinner();
    console.log("Server.details_fetchContentForMovie = ", contenttype);
    if (this.XHRObj === null)
        this.XHRObj = new XMLHttpRequest();

    if (!this.XHRObj) {
        console.error('Failed to create XHR');
        return;
    }

    this.XHRObj.onreadystatechange = function() {
        if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry < 10) {
            Server.maxTry += 1;
            Server.parse_AuthorizedError('details_fetchContentByType', contenttype);
        } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (Server.XHRObj.readyState === 4) {
            Server.maxTry = 0;
            Server.details_parseContentByType(contenttype);
        }
    }
    this.XHRObj.open('GET', url, true);
    // this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
    this.XHRObj.send(null);
}

/**
 * Fetch watch list
 */
Server.details_fetchWatchList = function(contenttype) {
    // Controller.showSpinner();
    if (this.XHRObj === null)
        this.XHRObj = new XMLHttpRequest();

    if (!this.XHRObj) {
        console.error('Failed to create XHR');
        return;
    }

    this.XHRObj.onreadystatechange = function() {
        if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry < 10) {
            Server.maxTry += 1;
            Server.parse_AuthorizedError('details_fetchWatchList', contenttype);
        } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 404) {
            mixpanel.track("failed getting watchlist", {
                "status": "404",
                "code": "details_fetchWatchList",
                "accessToken": Main.accesstoken,
                "refreshToken": Main.refreshToken
            });
            Popup.showError("Error", "Your account does not have an active subscription. Please visit lovenature.com or browse to continue", "1", "reactivate");
        } else if (Server.XHRObj.readyState === 4) {
            Server.maxTry = 0;
            Server.details_parseWatchList(contenttype);
        }
    }
    this.XHRObj.open('GET', this.url.watchlist, true);
    this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
    this.XHRObj.send(null);
}

Server.details_removeFromWatchList = function(video) {
    if (this.XHRObj === null)
        this.XHRObj = new XMLHttpRequest();

    if (!this.XHRObj) {
        console.error('Failed to create XHR');
        return;
    }

    var option = "client_id=" + this.url.client_id + "&client_secret=" + this.url.client_secret + "&video=" + video;

    this.XHRObj.onreadystatechange = function() {
        if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry < 10) {
            Server.maxTry += 1;
            Server.parse_AuthorizedError('details_fetchWatchList', contenttype);
        } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (Server.XHRObj.readyState === 4) {
            Server.maxTry = 0;
            // // // // // // // // // console.log("REMOVED");
            //Server.details_putWatchList();
        }
    }

    //var url = "https://api.vhx.tv/customers/" +Main.vhx_customer_id+ "/watchlist?video=" + video;

    var url = "https://api.vhx.tv/me/watchlist?video=" + video;

    this.XHRObj.open('DELETE', url, true);
    //this.XHRObj.open('GET', "https://api.vhx.tv/me", true);
    this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
    //this.XHRObj.setRequestHeader("Authorization", "Basic " + btoa("zy3QWKTTujjrKzm7eTHB19Z2uRZfMTfs:"));

    this.XHRObj.send(null);
}

Server.updateMylist = function(opts) {
    var options = JSON.stringify(opts);
    var url = Server.url.dev_api + "/mylist";
    if (this.XHRObj === null)
        this.XHRObj = new XMLHttpRequest();

    if (!this.XHRObj) {
        console.error('Failed to create XHR');
        return;
    }


    this.XHRObj.onreadystatechange = function() {
        if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry < 10) {
            Server.maxTry += 1;
            Server.parse_AuthorizedError('details_fetchWatchList', contenttype);
        } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (Server.XHRObj.readyState === 4) {
            Server.maxTry = 0;
            // // // // // // // // // console.log("REMOVED");
            //Server.details_putWatchList();
        }
    }

    //var url = "https://api.vhx.tv/customers/" +Main.vhx_customer_id+ "/watchlist?video=" + video;



    this.XHRObj.open('POST', url, true);
    //this.XHRObj.open('GET', "https://api.vhx.tv/me", true);
    this.XHRObj.setRequestHeader('Authorization', Main.token);
    this.XHRObj.setRequestHeader('CUSTOMERID', Main.CUSTOMERID);
    this.XHRObj.setRequestHeader('Content-type', 'application/json');

    this.XHRObj.send(options);
}

/**
 * Save watch list
 */
Server.save_watchlist = function(video) {
    if (this.XHRObj === null)
        this.XHRObj = new XMLHttpRequest();

    if (!this.XHRObj) {
        console.error('Failed to create XHR');
        return;
    }

    var option = "client_id=" + this.url.client_id + "&client_secret=" + this.url.client_secret + "&video=" + video;

    this.XHRObj.onreadystatechange = function() {
        if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry < 10) {
            Server.maxTry += 1;
            Server.parse_AuthorizedError('details_fetchWatchList', contenttype);
        } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (Server.XHRObj.readyState === 4) {
            Server.maxTry = 0;
            Server.details_putWatchList();
        }
    }

    //var url = "https://api.vhx.tv/customers/" +Main.vhx_customer_id+ "/watchlist?video=" + video;

    var url = "https://api.vhx.tv/me/watchlist?video=" + video;

    this.XHRObj.open('PUT', url, true);
    //this.XHRObj.open('GET', "https://api.vhx.tv/me", true);
    this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
    //this.XHRObj.setRequestHeader("Authorization", "Basic " + btoa("zy3QWKTTujjrKzm7eTHB19Z2uRZfMTfs:"));

    this.XHRObj.send(null);
    //this.XHRObj.send(null);
}

Server.details_putWatchList = function() {
    if (this.XHRObj.status != 200) {} else {
        Data.home_putWatchList(JSON.parse(this.XHRObj.responseText));
    }
}

Server.details_parseWatchList = function() {
    if (this.XHRObj.status != 200) {} else {
        Data.home_setWatchList(JSON.parse(this.XHRObj.responseText));
    }
}

/**
 * Fetch watch list
 */
Server.details_fetchWatchingList = function(contenttype) {
    // Controller.showSpinner();
    if (this.XHRObj === null)
        this.XHRObj = new XMLHttpRequest();

    if (!this.XHRObj) {
        console.error('Failed to create XHR');
        return;
    }

    this.XHRObj.onreadystatechange = function() {
        if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry < 10) {
            Server.maxTry += 1;
            mixpanel.track("Error", {
                "code": "fetchWatchingList",
                "message": "status 401",
                "url": this.url.watchinglist,
                "accesstoken": Main.accesstoken
            });
            Server.parse_AuthorizedError('details_fetchWatchingList', contenttype);
        } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (Server.XHRObj.readyState === 4) {
            Server.maxTry = 0;
            Server.details_parseWatchingList(contenttype);
        }
    }
    this.XHRObj.open('GET', this.url.watchinglist, true);
    this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
    this.XHRObj.send(null);
}

Server.details_parseWatchingList = function() {
    if (this.XHRObj.status != 200) {} else {
        Data.home_setWatchingList(JSON.parse(this.XHRObj.responseText));
    }
}

/**
 * Fetch watch list
 */
Server.details_saveWatchingList = function(video, timecode) {
    // Controller.showSpinner();
    if (this.XHRObj === null)
        this.XHRObj = new XMLHttpRequest();

    if (!this.XHRObj) {
        console.error('Failed to create XHR');
        return;
    }

    this.XHRObj.onreadystatechange = function() {
        if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry < 10) {
            Server.maxTry += 1;
            Server.parse_AuthorizedError('details_fetchWatchingList', contenttype);
        } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (Server.XHRObj.readyState === 4) {
            Server.maxTry = 0;
            Server.details_parseWatchingList(contenttype);
        }
    }

    var url = this.url.watchinglist + "?video=" + video + "&timecode=" + timecode;
    // // // // // // // // // console.log("SErver.details_saveWatchingList = " + url);
    this.XHRObj.open('PUT', url, true);
    this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
    this.XHRObj.send(null);
}

Server.details_parseWatchingList = function() {
    if (this.XHRObj.status != 200) {} else {
        Data.home_setWatchingList(JSON.parse(this.XHRObj.responseText));
    }
}

/**
 * Fetch content by URL
 */
Server.details_fetchContentByUrl = function(url, contenttype, cb) {
    // console.log("Server.details_fetchContentByUrl");
    if (this.XHRObj === null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (!this.XHRObj) {
        console.error('Failed to create XHR');
        return;
    }

    this.XHRObj.onreadystatechange = function() {
        if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry < 10) {
            Server.maxTry += 1;
            Server.parse_AuthorizedError('details_fetchContentByUrl', contenttype);
        } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (Server.XHRObj.readyState === 4) {
            Server.maxTry = 0;
            Server.details_parseContentByType(contenttype, cb);
        }
    }
    this.XHRObj.open('GET', url, true);
    this.XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
    this.XHRObj.setRequestHeader('Authorization', Main.token);;
    //this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
    this.XHRObj.send(null);
}

/**
 * Fetches episodes data
 */
Server.details_fetchEpisodes = function(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(res) {
        if (xhr.readyState > 1 && xhr.status === 401 && Server.maxTry < 10) {
            Server.maxTry = Server.maxTry + 1;
            Server.parse_AuthorizedError('home_fetchPlaylist', 'playlist');
        } else if (xhr.readyState > 1 && xhr.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            Server.maxTry = 0;
            cb(data);
        }
    }
    xhr.open('GET', url, true);
    //xhr.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
    xhr.send(null);
}

/**
 * Parses content by type
 */
Server.details_parseContentByType = function(contenttype, cb) {
    console.log("Server.details_parseContentByType = ", contenttype);
    if (this.XHRObj.status !== 200)
        return;
    Data.details_setContentVideos(JSON.parse(this.XHRObj.responseText), contenttype);
    if (contenttype === 'movie') {
        Data.details_setContentPlaylist(JSON.parse(this.XHRObj.responseText), cb);
    } else if (contenttype === 'series') {
        ///Data.details_setContentSeries(JSON.parse(this.XHRObj.responseText), cb);
        Data.details_setContentTVShows(JSON.parse(this.XHRObj.responseText), cb);
    } else if (contenttype === 'season') {
        Data.details_setContentSeasons(JSON.parse(this.XHRObj.responseText), cb);
    } else if (contenttype === 'episode') {
        Data.details_setContentEpisodes(JSON.parse(this.XHRObj.responseText), cb);
    } else if (contenttype === 'videos') {
        Data.details_setContentVideos(JSON.parse(this.XHRObj.responseText), contenttype); // cb);
    } else if (contenttype === 'channel') {
        Data.details_setContentChannel(JSON.parse(this.XHRObj.responseText), cb);
    }
}

Server.auth_parseBrowseResponse = function() {
    if (this.XHRObj.status === 200) {
        Data.home_setBrowseStatus(JSON.parse(this.XHRObj.responseText));
    }
}

/**
 * Fetches playlist data
 */
Server.home_fetchPlaylist = function(url, item, cb) {
    // // // // // // // // // console.log("***********************************************************")
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(res) {
        if (xhr.readyState > 1 && xhr.status === 401 && Server.maxTry < 10) {
            Server.maxTry = Server.maxTry + 1;
            mixpanel.track("Error", {
                "code": "fetchPlaylist",
                "accesstoken": Main.accesstoken,
                "message": "status 401"
            });
            Server.parse_AuthorizedError('home_fetchPlaylist', 'playlist');
        } else if (xhr.readyState > 1 && xhr.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            // // // // // // // // // // console.log("Server.home_fetchPlaylist = " + xhr.responseText);
            Server.maxTry = 0;
            cb(data, item);
        }
    }
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Authorization', Main.token);
    xhr.setRequestHeader('CUSTOMERID', Main.CUSTOMERID);
    xhr.send(null);
}

/**
 * Fetch playlist data synchronously
 */
Server.home_sync_fetchPlaylist = function(url, cb) {
    // // // // // // // // // console.log("***********************************************************")
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(res) {
        if (xhr.readyState > 1 && xhr.status === 401 && Server.maxTry < 10) {
            Server.maxTry = Server.maxTry + 1;
            mixpanel.track("Error", {
                "code": "fetchPlaylist",
                "accesstoken": Main.accesstoken,
                "message": "status 401"
            });
            Server.parse_AuthorizedError('home_fetchPlaylist', 'playlist');
        } else if (xhr.readyState > 1 && xhr.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            // // // // // // // // // // console.log("Server.home_fetchPlaylist = " + xhr.responseText);
            Server.maxTry = 0;
            cb(data);
        }
    }
    xhr.open('GET', url, false);
    xhr.setRequestHeader('CUSTOMERID', Main.CUSTOMERID);
    xhr.send(null);
}

Server.home_fetchPlaybackURL = function(url, button_action) {
    // var videoid = url;
    Player.shouldNotPlay = false;

    //Controller.showSpinner();
    if (this.video_XHRObj == null) {
        this.video_XHRObj = new XMLHttpRequest();
    }

    if (this.video_XHRObj) {
        this.video_XHRObj.onreadystatechange = function() {
                if (Server.video_XHRObj.readyState > 1 && Server.video_XHRObj.status == 401 && Server.maxTry < 10) {
                    Server.maxTry = Server.maxTry + 1;
                    Server.parse_AuthorizedError("home_fetchPlaybackURL", url, button_action);
                } else if (Server.video_XHRObj.readyState > 1 && Server.video_XHRObj.status == 401 && Server.maxTry >= 10) {
                    Server.reactivateApp();
                } else if (Server.video_XHRObj.status == 403) {
                    Controller.hidePlayer();
                    // Controller.hideSpinner();
                    mixpanel.track("Error", {
                        "code": "fetchPlayBackURL",
                        "url": url,
                        "accesstoken": Main.accesstoken,
                        "message": "status 403"
                    });
                    Popup.showError("Error", "You are not authorized to play the video. Please check your subscription.", "1", "");
                } else if (Server.video_XHRObj.readyState == 4) {
                    Server.maxTry = 0;
                    Server.home_parseVideoPlaybackURL(button_action);
                }
            }
            //url = this.url.subcategory + "?contenttype=" + contenttype;
            //var url = this.url.videos + "/" + videoid + "/items?product=" + this.url.product


        //var url = 'http://appmastery.co/psapi/playbackurl_token.php?videoid=' + url + '&access_token=' + Main.access_token;
        //var url = 'http://appmastery.co/psapi/playbackurl_token.php?videoid=' + url + '&access_token=af3f28c77bbf6af3409da4bb70c6179994695ececfb8b9196442c58ef939afa7';
        //   var url = 'http://appmastery.co/psapi/playbackurl_token.php?videoid=' + url + '&access_token=af3f28c77bbf6af3409da4bb70c6179994695ececfb8b9196442c58ef939afa7';




        //var url = this.url.videos + category + "/" + subcat + "/" + Main.accessToken; //this.url.authToken;
        // // // // // // // // // // console.log("home_fetchPlaybackURL = " + url);
        // // // // // // // // // // console.log("Main.accessToken = " + Main.accessToken);
        //  window.navigator.userAgent = "Roku";
        //  navigator.userAgent = "Roku";

        this.video_XHRObj.open("GET", url, true);
        this.video_XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
        this.video_XHRObj.setRequestHeader("Authorization", Main.token);
        //this.video_XHRObj.setRequestHeader("User-Agent", "Roku");
        // this.XHRObj.setRequestHeader("Authorization", "Bearer " + Main.access_token);
        //this.XHRObj.setRequestHeader("Authorization", "Basic " + btoa("zy3QWKTTujjrKzm7eTHB19Z2uRZfMTfs:"));
        try {
            this.video_XHRObj.send(null);
        } catch (err) {
            ////// // // // // // // // // // console.log("error occured = " + err);
        }
    } else {
        alert("Failed to create XHR");
    }
}

Server.home_parseVideoPlaybackURL = function(url, button_action) {
    if (this.video_XHRObj.status != 200) {
        //      Popup.showError("Error", "Connection Failed. Try again", "1", "");
        /*  Popup.show({"
        "               set:'error',
        content: 'Connection Failed.<br />Status - '+ Server.XHRObj.status
        })
         */
    } else {
        ////////// // // // // // // // // // console.log(this.XHRObj.responseText);
        //parse xml
        //Data.home_setData(sf.util.xml2obj(this.XHRObj.responseXML.documentElement).Category);
        //Data.home_setVideoPlaybackURL(JSON.parse(this.video_XHRObj.responseText), url, button_action);


        var data = JSON.parse(this.video_XHRObj.responseText);
        var url = data.response.url;
        Server.home_fetchRedirectUrl(url);

        ////////// // // // // // // // // // console.log("===========================================Creating home page=====================================");
        //Display.home_createPage(true);
    }
}

/*
Server.home_fetchVideoPlayback = function (videoid, button_action, mouse_focus) {
Controller.showSpinner();
if (this.XHRObj == null) {
this.XHRObj = new XMLHttpRequest();
}

if (this.XHRObj) {
this.XHRObj.onreadystatechange = function() {
if(Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry < 10){
Server.maxTry = Server.maxTry + 1;
Server.parse_AuthorizedError("home_fetchVideoPlayback", videoid, button_action, mouse_focus);
} else if(Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry >= 10){
Server.reactivateApp();
} else if (Server.XHRObj.readyState == 4) {
Server.home_parseVideoPlayback(videoid, button_action, mouse_focus);
}
}
//url = this.url.subcategory + "?contenttype=" + contenttype;
var url = this.url.category + "/" + videoid + "/items?product=" + this.url.product
//var url = this.url.videos + category + "/" + subcat + "/" + Main.accessToken; //this.url.authToken;
this.XHRObj.open("GET", url, true);
this.XHRObj.setRequestHeader("Authorization", "Bearer " + Main.accessToken);
try{
this.XHRObj.send(null);
} catch(err){
////// // // // // // // // // // console.log("error occured = " + err);
}
} else {
alert("Failed to create XHR");
}
}
 */

Server.home_fetchSearch = function(query) {
    Controller.showSpinner();
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
                if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry < 10) {
                    Server.maxTry = Server.maxTry + 1;
                    Server.parse_AuthorizedError("home_fetchSearch", query);
                } else if (Server.XHRObj.readyState > 1 && Server.XHRObj.status == 401 && Server.maxTry >= 10) {
                    Server.reactivateApp();
                } else if (Server.XHRObj.readyState == 4) {
                    Server.parse_fetchSearch(query);
                }
            }
            //var url = this.url.search + "?product=" + this.url.product + "&query=" + query + "&per_page=500";
        var url = Server.url.dev_api + '/searchvideo?query=' + query;
        this.XHRObj.open("GET", url, true);
        //this.XHRObj.setRequestHeader("Authorization", "Bearer " + Main.accessToken);
        //this.XHRObj.setRequestHeader("x-api-key", "VognVhjEz78VIknaWHHfYy80E8A2G6yA0xmt1N40");
        this.XHRObj.setRequestHeader("Authorization", Main.token);
        this.XHRObj.setRequestHeader("CUSTOMERID", Main.CUSTOMERID);
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}

Server.parse_fetchSearch = function(query) {
    if (this.XHRObj.status != 200) {
        Popup.showError("Error", "Connection Failed. Try again", "1", "");
    } else {
        Data.home_setSearchResult(JSON.parse(this.XHRObj.responseText), query);
    }
}



/*

subsciption feature



*/




Server.fetchSubcriptionData = function(fetchurl, id) {

    // // // // console.log("Server.home_fetchAppMasteryConfig");
    var url = fetchurl + "" + id;
    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }

    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
            if (Server.XHRObj.readyState == 4) {
                if (Server.XHRObj.status != 200) {
                    /*  Popup.show({"
                    "               set:'error',
                    content: 'Connection Failed.<br />Status - '+ Server.XHRObj.status
                    })
                     */
                } else {
                    return JSON.parse(Server.XHRObj.responseText);
                }
            }
        }
        this.XHRObj.open("GET", url, true);
        this.XHRObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //      this.XHRObj.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
}

// Server.Subcription_parse_data = function () {
//     if (this.XHRObj.status != 200) {
//           Popup.show({"
//         "               set:'error',
//         content: 'Connection Failed.<br />Status - '+ Server.XHRObj.status
//         })

//     } else {
//         Data.home_setAppMasteryConfig(JSON.parse(this.XHRObj.responseText));
//     }
// }

// Data.home_setAppMasteryConfig = function(res){

// }




var Data = {
    playlistIndex: 0,
    sync: {
        playlist: [],
    },
    packageActiveIndex: 0,
    currentSubcriptionlength: 0,
    AllPackage: [],
    packageIndex: 0,
    auth: {}, // authentication information
    authTry: 0, // numbeer of attempts to login
    first_playlist_row: false,
    subcription: {
        is_subscribed_true: [],
        is_subscribed_false: [],
    },
    packages: [],
    selectCatalouge: [],
    selectedpackages: {
        package_id: '',
        subpackage_id: '',
        price: '',

    },
    // data for home page
    home: {
        menuitems: [{
            'name': 'Profile',
            'type': 'defaultfunction',
            'defaultActive': 'false',
            'action': 'profile'
        }, {
            'name': 'Search',
            'type': 'defaultfunction',
            'defaultActive': 'false',
            'action': 'search'
        }, {
            'name': 'Home',
            'type': 'defaultfunction',
            'defaultActive': 'false',
            'action': 'home'
        }],
        // 'types':[]//sorted categories
        largeCarousel: [],
        menu: [],
        playlists: [],
        series: [],
        favorites: [],
        resume: [],
        search: [],
        selectedType: '',
        selectedId: 0,
        regular_carousel_loaded: 0,
        regular_focus: false,
        currentItem_is_Suscribed: false,
        currentCarousel:0

    },
    video: {}, // data for current movie page
    playlist: {}, // data for current playlist
    tv: {}, // data for current tv show

    cache: {
        'Movie': {},
        'Playlist': {},
        'TV': {},

        'EpisodesPlaylists': {},
        'EpisodesTV': {}
    }, //cached info

    details: {
        currentVideo: {},
        series: [],
        seasons: [],
        episodes: [],
        playlists: [],
    },

    player: {},
    user: {
        details: {},
        loginUser: {
            email: '',
            password: '',
            status: false,
            firstname: '',
            lastname: '',
            userserverid: '',

        },

        newuser: {
            username: '',
            useremail: '',
            password: '',
            reenterpassword: '',
            status: false,

        }
    },
    currentpackage: {
        currentSub: 0,
        currentSubItem: 0,
        detailsregistration: null,
    },
    playerFrom: '',
}

Data.SetPlayListItem = function(res) {
    Data.home.playlists.push({
        id: Data.sync.playlist[Data.playlistIndex].id,
        name: Data.sync.playlist[Data.playlistIndex].name,
        items: Array.apply(null, Array(Number(res._embedded.items.length))).map(function() {
            return {};
        }), // Create array of empty objects
    });

    Data.home.playlists[Data.playlistIndex].items = res._embedded.items;
    Data.playlistIndex = Data.playlistIndex + 1;
    
    Data.playlist_get_Items();
 
}
Data.playlist_get_Items = function() {
    if(Data.playlistIndex > 1){
        Data.createRegularSyncPlaylist();
    }
    if (Data.playlistIndex === Data.sync.playlist.length) {
        Data.playlistIndex = 0;
        return true;
    }
    url = Data.sync.playlist[Data.playlistIndex]._links.items.href;
    Server.fetch_playlistItems(url);

}
Data.createRegularSyncPlaylist = function() {
    console.log(Data.home.playlists);
    Data.home.playlists.forEach(function(item, i) {
        console.log(item);
        var carousel = Display.home_createCarousel({
            id: 'carousel-regular-' + item.id,
            parent: Display.home.carouselsContainer,
            items: item.items,
            name: item.name,
        });
        Data.home.regular_carousel_loaded = Data.home.regular_carousel_loaded + 1;
        //  Display.home_createHome();
        Data.home_setcoverartsPlaylist(item.items, carousel, i);

    });
    //  Display.home_createHome();
    Display.home_updateHome();


}
Data.Setmylist = function(res) {
    Data.home.favorites = res._embedded.collections
    Server.home_fetchContentByType('user-playlist')
}
Data.package_get_subscribes = function() {
    // if(Data.packageIndex === Data.packages.length){
    //              // Display.create_sub_page();
    //              Package.createPackageLarge_Regular();
    //                return true;
    // }

    // sub_url = "http://34.217.125.68/wherevertv/package_detail.php?id="+ Data.packages[Data.packageIndex].id;
    sub_url = "http://34.217.125.68/wherevertv/full_package.php";

    Server.fetch_subscriptions(sub_url);

}




Data.home_setAuth = function(response) {
    // // // console.log("Data.home_setAuth = ", response);
    response = response.response;
    // // // // // // // // // console.log("Data.home_setAuth = " + JSON.stringify(response));
    if (response) {
        // device linked, get data and set customer info
        // Main.accessToken = response.access_token;
        // Main.refreshToken = response.refresh_token;
        if (response.consumer_id) {
            // // // // console.log("consumer_id NOT null");
            Data.consumer_id = response.consumer_id;
            Main.linked = true;
            Main.setPin(response.pin);
            Display.homeContainer.innerHTML = '';
            Display.home.carousels = [];
            Display.home.currentCarousel = 0;
            Display.home.carouselsContainerTranslateY = 0;
            Server.getRefreshToken();
            setTimeout(function() {
                Display.auth_successPage()
            }, 2000);
        } else {
            // // // // console.log("Data.home_setAuth");
            if (Display.auth.FOCUS != 'generatePin') {
                setTimeout(function() {
                    Display.auth_createPage(response.pin);
                }, 2000);
            }
        }

        // // // // // // // // // console.log("Setting main.linked = " + Main.linked);
        ////// // // // // // // // // // console.log("Main.accessToken = " + Main.accessToken + " | Main.refreshToken = " + Main.refreshToken);
        // mixpanel.track("device linked", {"lnaccesstoken":Main.accessToken, "lnrefreshToken":Main.refreshToken});
        //localStorage.setItem("lnaccesstoken", Main.accessToken);
        //localStorage.setItem("lnrefreshtoken", Main.refreshToken);


        // mixpanel.track("fetching user id");
        // Server.home_fetchVHXUser();


        // Server.home_fetchContentByType('series');

        // Display.auth_successPage();
    } else if (data.errorCode === 201) {
        // get a new security code
        //  Popup.showError("Error", "I couldn't activate your device. Please enter the code to your account on Dekkoo.com and try again.", 1);
        Server.auth_registerDevice();
    }
}
Data.home_setSignin = function(response, userid, password) {
    // // // // // // // console.log("Data.home_setSignin" , response);
    if (response.res.response) {
        //    var res = response.res.response;
        if (response.res.response.user_token) {
            localStorage.setItem('loginid', userid);
            localStorage.setItem('loginpassword', password);
            localStorage.setItem("uat", response.res.response.user_token)
            localStorage.setItem("user-login-sucess-json", JSON.stringify(response));
            Main.token = response.res.response.user_token;
            //Data.home_setUserData(response.res.response);
            Server.fetch_getConsumerDetail(response.email, response.password);
            // Auth.showSuccessPage(); //copy to user details sucess page
        } else {
            Auth.setSigninError(response.res.message);
            //  Auth.setSigninError("Error linking device. Please contact customer support.");
        }
    } else {
        Auth.setSigninError(response.res.message);
    }

}
Data.home_setVHXUser = function(data) {
    // // // // // // console.log("Data.home_setVHXUser: ", data);
    if (data.id) {
        localStorage.setItem("lnVHXUser", data.id);
        localStorage.setItem("lnVHXEmail", data.email);
        Main.vhx_customer_id = data.id;
        Main.vhx_email = data.email;
        VBArray;

        mixpanel.people.set({
            "$name": Main.duid,
            "$last_login": new Date(),
            "api-version": "v1.0",
            "vhx-custmoer-id": Main.vhx_customer_id,
        });

        Server.details_fetchWatchList();
    } else {
        mixpanel.track("failed to get user data");
        // // // // console.log("home_setVHXUser - category");
        Server.home_fetchContentByType('category');

        Display.auth_successPage();
    }
}

Data.home_setUserData = function(res) {
    if (res) {

        Data.user.details = res.response;

        //  Data.user.loginUser.status = true;

        // Data.user.loginUser.password = res.password;
        // Data.user.loginUser.email = items.email;
        // Data.user.loginUser.firstname = items.first_name;
        // Data.user.loginUser.lastname = items.last_name;
        // Data.user.loginUser.userserverid = items.id;
        // Data.user.loginUser.status =true;
        Auth.showSuccessPage();

    } else {
        console.log("In Data.home_setUserData unable to fetch user Data");
    }
}


Data.home_setAppMasteryNewConfig = function(res) {
    var data = res.response;
    Main.logo_url = data.logo;
    Main.intro_background_video = data.intro_background_video;
    document.getElementById('package-btn').innerHTML = data.intro_signup_btn_text;
    Main.largeCarouselId = data.featured_carousel;
    Main.regularCarouselsId = data.regular_carousel;
    //Data.home.menuitems = JSON.stringify(data.menu_items_json);
    Data.home_setAppMasteryConfig(res);

}
Data.home_setAuthToken = function(res) {
    Main.AuthorizationToken = res.token;
    Server.home_fetchAppMasteryNewConfig();

}



Data.home_setAppMasteryConfig = function(res) {

    var data = res;
    Main.CUSTOMERID = '5defe0d19794ce0b9298b541';
    Main.show_featured = false;
    // // // // console.log("Data.home_setAppMasteryConfig = ", data);
    if (data.response) {
        data = data.response;
        Main.api_url = data.api_url;
        Main.app_activation_url = data.app_activation_url;
        Main.background_color = data.background_color;
        Main.client_id = data.client_id;
        Main.client_secret = data.client_secret;
        Main.detail_button_text_color = data.detail_button_text_color;
        Main.detail_page_button_color = data.detail_page_button_color;
        Main.detail_page_button_focus_color = data.detail_page_button_focus_color;
        Main.device_link_text = data.device_link_text;
        Main.header_type = data.header_type;
        Main.login_background_color = data.login_background_color;
        Main.login_browse_option = data.login_browse_option;
        Main.login_button_color = data.login_button_color;
        Main.login_button_focus_color = data.login_button_focus_color;
        Main.login_button_text_focus_color = data.login_button_text_focus_color;
        Main.login_link_device_option = data.login_link_device_option;
        Main.login_required = data.login_required;
        Main.login_subscribe_option = data.login_subscribe_option;
        Main.login_text = data.login_text;
        Main.login_text = 'Welcome to KAROSTREAM';
        Main.login_text_color = data.login_text_color;
        Main.login_username_option = data.login_username_option;
        Main.logo_url = data.logo_url;
        Main.logo_url = data.logo_url;
        Main.login_link_device_option = data.login_link_device_option;
        Main.login_browse_option = data.login_browse_option;
        Main.login_required = data.login_required;
        Main.product_id = data.product_id;
        Main.subscription_key = data.subscription_key;
        Main.text_color = data.text_color;
        Main.coverart_focus_color = data.coverart_focus_color;
        Main.header_playlist_id = data.header_playlist_id;
        Main.header_playlist_id = data.large_carousel;
        Main.package_review = data.package_review;
        Main.app_body_color = data.app_body_color;
        Main.app_header_bg = data.app_header_bg;
        //Server.fetch_Token();
        Main.detail_page_button_focus_color = ' #fffcfc;'

        var largedisplay = "block";
        // if(typeof(Main.header_playlist_id) == null){
        //  var largedisplay = "none";

        // }else{
        //  var largedisplay = "block";
        // }
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '@font-face { font-family: "Sinhala-Regular"; src: url("https://s3-us-west-2.amazonaws.com/appmasterwebs/gluuoo/NotoSansSinhala-Regular.ttf"); format("truetype"); } .nav-arrows.large{height:600px; display:none;} .nav-arrows{z-index: 600;} .wrapper-toggle{height: 141px;} .logo_back{ display:none;} .carousels-outer{padding-top: 0px} .name{font-family:"Sinhala-Regular"} .detail_name{font-family:"Sinhala-Regular";} .detail-content { font-family: "Sinhala-Regular" } .popup_container{border: 5px solid ' + Main.coverart_focus_color + '} .keyboard{border: 5px solid ' + Main.coverart_focus_color + '} .activation_title{top: 650px;} .scene_setting{ } body{background-color:' + Main.background_color + '} .loading span{' + Main.coverart_focus_color + '} .spinner>div {background-color: #2571b3;} .settings_button li.hover{background:' + Main.coverart_focus_color + '} .cancel_button.hover{background:' + Main.coverart_focus_color + '} .search_button.hover{background:' + Main.coverart_focus_color + '} .keyboard li.hover{background:' + Main.coverart_focus_color + '} .popup_buttons li.hover{background:' + Main.coverart_focus_color + '} .activation_code{color:' + Main.coverart_focus_color + '} .in_player_control_ul li.hover{' + Main.coverart_focus_color + '} .progress_level{background:' + Main.coverart_focus_color + '} .player_control li.hover{background:' + Main.coverart_focus_color + '} .player_control li.selected{background:' + Main.coverart_focus_color + '} .email_address span { color:' + Main.coverart_focus_color + '} .help_message span {color:' + Main.coverart_focus_color + '} .button-search.active{background-color:' + Main.coverart_focus_color + ' } .button-setting.active{ background-color:' + Main.coverart_focus_color + ' } .connect_button{ background:' + Main.login_button_color + ';color:' + Main.login_text_color + '; } .connect_button.hover{background:' + Main.login_button_focus_color + '; color:' + Main.login_button_text_focus_color + ';} .logo { background: url("' + Main.logo_url + ' ") 0 0 no-repeat;background-size: 100% 100%; } .detail-content button { color:' + Main.detail_button_text_color + '; background-color: ' + Main.detail_page_button_color + ' } .detail-content button.active { border: 4.5px solid ' + Main.detail_page_button_focus_color + ' } .h2 { color: ' + Main.text_color + ' } .carousel li {color: ' + Main.text_color + '} .detail-content h1 { color:' + Main.text_color + '} detail-content { color: ' + Main.text_color + '} .carousel.carousel-large{ display : ' + largedisplay + '; } .wrapper-toggle-down.active{display: block;} .wrapper-toggle-down{display: none;position: fixed;height:0px;z-index: 600;bottom: 0;width: 1920px;} .nav-arrow.top {position :fixed; top: 0px;} .nav-arrows .nav-arrow.bottom{ position:fixed; bottom:0px;} .wrapper-toggle-left{ position: fixed; left:0; width: 50px; z-index:600; height : 1080px; } .wrapper-toggle-right{ position: fixed; right:0; width: 50px; z-index:600; height : 1080px; } .nav-arrow.top.active{top: 636px;} .nav-arrows{z-index:600;} .popup_container{z-index: 601;} .detail-content .btn-streamlive,btn-vod-guide{ background-position: 22.5px 50%; background-repeat: no-repeat;}.carousel.carousel-large {display: block; height: 465px;}.carousel ul {margin: 0;padding: 0; list-style: none; white-space: nowrap;} .carousel.carousel-large li {width: 640px;height: 450px;position: relative;margin: 0 auto;} .carousel.carousel-large .img {width: 620px;height: 445px;margin: 0 auto; background-size:100% 100%;} .carousel li.active .name {font-weight:bold;} .carousel-large li.active .img {box-shadow: inset 0 0 0px 0px rgb(255, 255, 255), 0 0 7.5px 8px ' + Main.coverart_focus_color + ';} .carousel.carousel-large .name{text-align:center; margin-top: 37px;font-size: 37px;} .authOptionList,.authOptionMessage,.authOptionMessage1,.contact_card,.loading,.logo,.numberLabel,.password,.passwordLabel,.profileContainer,.profileLabel,.profile_pic,.username{position:absolute}.auth_scene{background-color :' + Main.login_background_color + ';background-size:cover;width:1920px;height:1080px}.mainMessage{display:block;width:1500px;left:210px;top:550px;color:#FFF}#authOptions,#devicelink,#signin{display:none; z-index:500;}.authOptionMessage{top:400px;width:1800px;left:60px;text-align:center;color:#FFF;font-size:54px; content: ' + Main.login_text + ';}.authOptionMessage1{top:480px;width:1800px;left:60px;text-align:center;color:#FFF;font-size:36px; content: ' + Main.login_text + ';}.authOptionList li{background:0 0}.numberLabel{top:160px;color:#fff;font-size:35px;left:635px}.username{top:210px}.password{top:380px}.password,.username{width:650px;height:90px;left:635px;padding-left:25px;font-size:40px;background:0 0;border:1.5px solid #fff;color:#fff}.passwordLabel{top:330px;color:#fff;font-size:35px;left:635px}button,input,select,textarea{-webkit-appearance:none;border-radius:0}input,select,textarea{box-shadow:none}input,textarea{resize:none;-webkit-user-select:text;user-select:text}.signInButton{top:550px}.authOptionList{list-style:none;white-space:nowrap;display:inline-block;margin:0;padding:0;top:600px;left:681px}.authOptionList li.hover{color:' + Main.login_button_text_focus_color + ';background:' + Main.login_button_focus_color + ';}.pincode{left:660px;width:600px;top:600px;color:#fff}.mainMessage,.pincode{position:absolute;font-size:70px;text-align:center}.authOptionList li{background-color:#00000094;width:550px;height:83px;text-align:center;border:1.5px solid #fff;font-size:35px;color:' + Main.login_text_color + ';vertical-align:middle;line-height:83px;margin-bottom:20px} .signInButton{top: 530px;} .popup_background { top:0; } .detail-carousel{ transform: translateX(28px);} .detail-carousel li .img {background-size : 100% 100%;}  .scene_setting {display: none;top:0; left:0; width: 1920px;height: 1080px;background-color: #000;position: absolute; z-index: 1500;} .setting-current-sub .img{ width: 200px;position: relative;box-sizing: border-box;background-color: rgba(0, 0, 0, 0.5);background-size: cover;height: 200px;margin: 0 auto;}.setting-user-info{ top: 119px;font-family: SFUIText-Medium;font-size: 36px;color: rgba(255,255,255,0.93);letter-spacing: 0;position: relative;left: 80px;} .setting-current-sub .name{color: #fff;text-align: center;margin:11px;} .setting-addsub-btn , .setting-remsub-btn{ background:#fff; position: absolute;top: 752px;font-family: SFUIText-Medium;font-size: 20px;color: rgba(0,0,0,0.93);letter-spacing: 0;padding: 14px 44px; text-align:center;}.setting-remsub-btn{display:none;} .setting-cancel-btn{ top: 902px; } .SignupButton {list-style: none;white-space: nowrap;display: inline-block;margin: 0;padding: 0;top: 750px;left: 50%;text-align: center;} .app-container{ background-color: ' + Main.app_body_color + '} ..scene_setting{ background-color: ' + Main.app_body_color + '} .carousel-menu li.hover{ background-color:' + Main.menu_hover_bg + '} .home-logo-bg{ background-color: ' + Main.app_header_bg + ' } .carousels-outer{ background-color:' + Main.app_body_color + '} .carousel-menu{background-color: ' + Main.app_header_bg + '}';
        document.getElementsByTagName('head')[0].appendChild(style);
        // wrappers
        var wrapper_left = document.createElement("div");
        wrapper_left.className = "wrapper-toggle-left";
        wrapper_left.id = "wrapper-toggle-left";
        var cont = document.getElementById('am-cont');
        cont.insertBefore(wrapper_left, cont.childNodes[0]);

        var wrapper_right = document.createElement("div");
        wrapper_right.className = "wrapper-toggle-right";
        wrapper_right.id = "wrapper-toggle-right";
        cont.insertBefore(wrapper_right, cont.childNodes[0]);
        // /* AUTH SCREEN */
        //      Display.auth_init();
        var authmsg = document.getElementById('authOptionMessage');
        //        authmsg.innerText = Main.login_text;
        authmsg.innerText = "WELCOME TO KAROSTREAM";
        var authmsg1 = document.getElementById('authOptionMessage1');
        //        authmsg.innerText = Main.login_text;
        authmsg1.innerText = "Don't have account yet? please visit activate.karostream.com to signup";

        Main.login_link_device_option == "true"
        if (Main.login_link_device_option === "false") {
            //var SignUpbtnsshow = document.getElementById('register-btn');
            //SignUpbtnsshow.style.cssText = "display:none;"  
        } else {
            // var linkdeviceBtn = document.getElementById('linkdevice-btn');
            // linkdeviceBtn.style.cssText = "display:none";
            // var SignUpbtnsshow = document.getElementById('register-btn');
            // SignUpbtnsshow.style.cssText = "display:block;"
        }
        Main.login_required = "true"
        if (Main.login_required === "false") {
            var signInBtn = document.getElementById('sign-in-btn');
            signInBtn.style.cssText = "display:none";
        }
        Main.intro_skip_login = "true"
        if (Main.intro_skip_login === "true") {
            var browseBtn = document.getElementById('browse-btn');
            browseBtn.style.cssText = "display:block";
        } else {

        }

        if (Main.package_review === "false") {
            var package = document.getElementById('package-btn');
            package.style.cssText = "display:none";
        }

        //
        //put hover on button using js
        //Main.signup_btn_list = 
        var btnList = document.getElementById('authOptionList').querySelectorAll('li');
        for (i = 0; i < btnList.length; i++) {
            if (btnList[i].style.display === "") {
                btnList[i].classList.add("hover");
                break;
            }
        }

        var authpage = document.getElementById('scene_auth');
        var video = document.createElement('video');
        video.loop = true;
        video.id = 'cover-video';
        video.autoplay = true;
        video.muted = true;
        video.preload = "auto";
        //var source = document.createElement('source');
        video.type = "video/mp4"
        video.src = "img/KAROSTREAM-DEMO.mp4";
        video.width = '1920';
        video.height = '1080';



        // video.appendChild(source);
        authpage.appendChild(video);
        video.load();

    }

    Controller.showAuth();
    Server.auth_clientStatus();
    // Server.getPackages();
    //Server.getCatalougeById('5bcefa345ac48a1643dae710')
    //for pkg
    //Server.home_fetchContentByType('subcription');
    //Data.package_get_subscribes();

    //Server.home_fetchContentByType('subcription');


}
Data.SetNewUserData = function(res) {
    if (res.status === true) {
        Controller.hideRegistration();
        Server.refreshUserToken(Data.user.newuser.useremail, Data.user.newuser.password);

    } else {


        var err = document.getElementById('payment-error');

        err.innerHTML = "SOMETHING WENT WRONG PLEASE AGAIN";
        err.classList.add('active');
        setTimeout(function() {
            err.classList.remove('active');
        }, 4000);

        Controller.hideSpinner();
        return
    }

}

Data.setpackageData = function(res) {
    if (res.response.packages.length > 0) {
        //Data.packages = res.response.packages;
        Data.packages = [];
        for (var i = 0; i < res.response.packages.length; i++) {
            // if(res.response.packages[i].metaData.catalogueid && res.response.packages[i].metaData.first_time_only){
            Data.packages.push(res.response.packages[i])
                //}
        }
        if (Data.packages[0].metaData.features) {
            Controller.showSpinner();
            Package.createPackageLarge_Regular();
        }
    }


}

Data.setCatalouge = function(res) {
    if (res._embedded) {
        Controller.showSpinner();
        Data.selectCatalouge = res._embedded;
        Display.packageUpdateChannel({
            index: 0,
            items: res._embedded,
            name: res._embedded.title,
            //      items : Data.packages[index_of_cover],
            parent: document.getElementById('channel-package'),

        });

    }

}

Data.setCatalougeLarge = function(res) {
    if (res._embedded) {
        Controller.showSpinner();
        Data.home.largeCarousel = res._embedded.items
        Data.first_playlist_row = true;
        Server.getCatalougeByIdRegularCarousel();
    }

}
Data.setCatalougeDetailPlaylist = function(res) {
    if (res._embedded) {
        Controller.showSpinner();
        //Data.details.playlist = res._embedded.items

        Data.details_setContentVideos(res, 'videos');
    }

}
Data.setCatalougeRegular = function(res) {
    if (res._embedded) {
        //Controller.showSpinner();
        Data.home.playlists = res._embedded.items;
        Data.home_setContentPlaylist(res)


    }

}



Data.SetsubcriptionToPackage = function(res) {

    //Data.packages[Data.packageIndex]._subplan = res.response.packages;
    Data.AllPackage = res.response.packages;
    for (i = 0; i < Data.AllPackage.length; i++) {
        Data.packages[i]._subplan = res.response.packages[i];
    }


    if (Data.packages != 0) {
        Package.createPackageLarge_Regular();

    }
    // Controller.showAuth();
    //    Server.auth_clientStatus();
}



Data.Setsubcription = function(res) {

    var items = [];
    if (res._embedded === undefined) {
        items = res;
    } else {
        var items = res._embedded.items;
    }

    Data.subcription.is_subscribed_true = [];
    Data.subcription.is_subscribed_false = [];
    for (i = 0; i < items.length; i++) {
        if (items[i].is_subscribed == true) {
            Data.subcription.is_subscribed_true.push(items[i]);
        } else {
            Data.subcription.is_subscribed_false.push(items[i]);
        }
    }
    Data.packages = [];
    Data.packages = Data.subcription.is_subscribed_false;
    for (i = 0; i < Data.packages.length; i++) {
        Data.packages[i]["_subplan"] = [];
        Data.packages[i]["_is_owned"] = false;
    }


    // var itemsTofetch = Data.subcription.is_subscribed_false;

    //Data.get_subs();
    Data.packageIndex = 0;
    if (Data.packages.length === 0) {
        var pkg = document.getElementById('setting-package');
        scene_package.innerHTML = '<div class="trophy" ><img src="img/trophy-icon-blue2.png" /></div>';

    } else {
        Data.package_get_subscribes();
    }




    // if(Data.subcription.is_subscribed_false){
    //  Data.subcription.is_subscribed_false.forEach(function(item){            
    //    item["_subplan"] = [];
    //  });   

    //  var url ='http://34.217.125.68/wherevertv/package_detail.php?id=';
    //  itemsTofetch.forEach(function (item, i) {   
    //  var index = i;                            
    //          Server.details_fetchPackage(url,item.id , function (res) {
    //                  Data.subcription.is_subscribed_false[index]._subplan = res.response.packages;  
    //           }.bind({index:index}));
    //  });
    // }
    /////////////////////////////create carousel
    //var Display.setting.carousels = []; 


}

Package.createPackageLarge_Regular = function() {
    //Controller.showSpinner();


    Display.package.arrows = document.getElementById('nav-home-arrows-package');
    Display.package.arrowPrev = Display.package.arrows.querySelector('.prev');
    Display.package.arrowNext = Display.package.arrows.querySelector('.next');


    Display.package.carousels = [];
    Display.package.currentCarousel = 0;
    var cont = document.getElementById('setting-package');
    //cont.innerHTML = "";
    var togglewrapper = document.createElement('div');
    togglewrapper.id = "package-wrapper";
    cont.appendChild(togglewrapper);
    //cont.innerHTML = '<div class="package-wrapper-left"></div><div class="package-wrapper-left"></div>';
    Display.package_createLargeCarousel({
        id: 'package-cnt',
        parent: document.getElementById('setting-package'),
        items: Data.packages,
    });

    if (typeof Display.package.carousels != 'undefined' && Display.package.carousels.length > 0) {
        //  Display.home.currentCarousel = 0;
        Display.package.carousels[0].currentItem = 0;
        Display.package.carousels[0].items[0].classList.add('active');
        //Display.package.carousels[0].items[0].classList.add('hover');
        //Navigation.package.FOCUS = 'large';
        //        Navigation.package_toggleArrows();

    }

    // create carousel reugular for package
    var index_of_cover = 0;
    for (i = 0; i < Data.packages.length; i++) {
        if (Data.packages[i]._is_owned === false) {
            index_of_cover = i;
            break;
        }
    }
    Server.getCatalougeById(Data.packages[0].metaData.catalogueid);
    Controller.hideSpinner();
    //Controller.hideSpinner();
    //Navigation.package_toggleArrows();
}




Server.details_fetchPackage = function(url, id, cb) {
    url = url + "" + id;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(res) {
        if (xhr.readyState > 1 && xhr.status === 401 && Server.maxTry < 10) {
            Server.maxTry = Server.maxTry + 1;
            //Server.parse_AuthorizedError('home_fetchPlaylist', 'playlist');
        } else if (xhr.readyState > 1 && xhr.status === 401 && Server.maxTry >= 10) {
            Server.reactivateApp();
        } else if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            Server.maxTry = 0;
            cb(data);
        }
    }
    xhr.open('GET', url, true);
    //xhr.setRequestHeader('Authorization', 'Bearer ' + Main.accessToken);
    xhr.send(null);
}


Data.secondsToStr = function(str) {
    //      var totalSec = Math.floor(str / 1000);
    var totalSec = Math.floor(str);
    var hours = parseInt(totalSec / 3600) % 24;
    var minutes = parseInt(totalSec / 60) % 60;
    var seconds = totalSec % 60;

    var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

    return result;
};

Data.home_setClientStatus = function(response) {
    // // // // // // // // // // console.log("Data.home_setClientStatus = " + JSON.stringify(response));
    if (response.auth === true) {
        Auth.showClientAuthStatus(true);
        // Display.auth_showClientAuthStatus(true);
    } else {
        Auth.showClientAuthStatus(false);
        //Display.auth_showClientAuthStatus(false);
    }
}

Data.home_setContentCategory = function(data, type) {
    // // // // // // console.log('home_setContentCategory:', data);
    Server.home_fetchContentByType("series");
}

Data.home_setContentCollections = function(data, type) {
    // // // // // // // // // // console.log('Collections', data);
}

Data.home_setContentSection = function(data, type) {
    // // // // // // // // // // console.log('Section', data);
    Server.home_fetchContentByType("season");
}

Data.home_putWatchList = function(data, type) {
    // // // // // // // // // console.log("Data.home_putWatchList", data);
}

Data.home_setWatchList = function(data, type) {
    mixpanel.track("mylist retrieved: " + data._embedded.items.length);

    localStorage.setItem("favorite", JSON.stringify(data._embedded.items));

    Server.details_fetchWatchingList();
}

Data.home_setWatchingList = function(data) {
    // // // // // // // // // console.log("Data.home_setWatchingList: ", data);

    var resume_list = data._embedded.items;
    if (resume_list.length > 0) {
        // // // // // // // // // console.log("REFRESHING RESUME FROM SERVER");
        mixpanel.track("retrieved watching-list", {
            "size": resume_list.length
        });
        for (var i = 0, l = resume_list.length; i < l; i++) {
            Data.setResumeVideoFromServer(resume_list[i], resume_list[i]._embedded.play_state.timecode);
        }
        //  localStorage.setItem("tk_resume", JSON.stringify(data._embedded.items));
    } else {
        mixpanel.track("failed to retrieve watching-list", {
            "code": "setWatchingList",
            "message": "watching-list is empty."
        });
        // // // // // // // // // console.log("LOCAL RESUME TAKEN");
    }

    Server.home_fetchContentByType('series');
    Display.auth_successPage();
}

Data.home_setContentSeason = function(data, type) {
    // // // // // // // // // // console.log('Season', data);
}

Data.setFavouriteVideo = function() {
    // check if favourite video already exist
    var fav_video = Data.details.currentVideo;
    var not_found = true;
    for (var i = 0, l = Data.home.favourites.length; i < l; i++) {
        if (fav_video.id === Data.home.favourites[i].id) {
            not_found = false;
            i = l;
        }
    }
    if (not_found) {
        this.home.favourites.push(fav_video);
        Data.setLocalStorageData();
    }
}

Data.removeFavouriteVideo = function() {
    var fav_video = Data.details.currentVideo;
    var found = true;
    for (var i = 0, l = Data.home.favourites.length; i < l; i++) {
        if (fav_video.id === Data.home.favourites[i].id) {
            Data.home.favourites.splice(i, 1);
            found = true;
            i = l;
        }
    }
    if (found) {
        Data.setLocalStorageData();
    }
}

Data.setResumeVideo = function(time) {
    var resume_video = Data.details.currentVideo;
    // // // // // // // // // // console.log("Data.setResumeVideo.id = " + resume_video.id);
    // resume_video["videotype"] = Data.video.type;
    var not_found = true;
    //// // // // // // // // // // console.log("resume_video.id = " + resume_video.id);
    for (var i = 0, l = Data.home.resume.length; i < l; i++) {
        if (resume_video.id === Data.home.resume[i].id) {
            Data.home.resume[i].resumeTime = time;
            not_found = false;
            i = l;
        }
    }
    if (not_found) {
        resume_video["resumeTime"] = time;
        this.home.resume.unshift(resume_video);
    }
    Data.details.currentVideo.resumeTime = time;
    //// // // // // // // // // // console.log("Data.home.resume = ");
    //// // // // // // // // // // console.log(Data.home.resume);
    ////// // // // // // // // // // console.log("this.home.resume = " + this.home.resume);
    // Server.details_saveWatchingList(Data.details.currentVideo._links.self.href, Math.floor(time));
    Data.setLocalStorageData();
}

Data.setResumeVideoFromServer = function(video, time) {
    var not_found = true;

    //Data.home.resume = localStorage.getItem("tk_resume");

    Data.getLocalStorageData();

    for (var i = 0, l = Data.home.resume.length; i < l; i++) {
        if (video.id === Data.home.resume[i].id) {
            Data.home.resume[i].resumeTime = time;
            not_found = false;
            i = l;
        }
    }

    if (not_found) {
        video["resumeTime"] = time;
        this.home.resume.unshift(video);
    }
    Data.setLocalStorageData();
}

Data.removeResumeVideo = function() {
    var resume_video = Data.details.currentVideo;
    resume_video["videotype"] = Data.video.type;

    for (var i = 0, l = Data.home.resume.length; i < l; i++) {
        if (resume_video.id === Data.home.resume[i].id) {
            Data.home.resume.splice(i, 1);
            i = l;
        }
    }

    Data.setLocalStorageData();
}

Data.setLocalStorageData = function() {
    var fav_data = JSON.stringify(this.home.favourites);
    var resume_data = JSON.stringify(this.home.resume);

    localStorage.setItem("tk_favourites", fav_data);
    localStorage.setItem("tk_resume", resume_data);
}

Data.getLocalStorageData = function() {
    var fav_data = localStorage.getItem("tk_favourites");
    var resume_data = localStorage.getItem("tk_resume");

    //// // // // // // // // // // console.log("Data.getLocalStorageData");

    this.home.favourites = [];
    this.home.resume = [];

    if (fav_data != null) {
        //  this.home.favourites = JSON.parse(fav_data);
    }
    if (resume_data != null) {
        this.home.resume = JSON.parse(resume_data);
    }

    //  // // // // // // // // // // console.log("getLocalStorageData = " + JSON.stringify(resume_data));
}

Data.home_resetToken = function(response, caller, arg1, arg2, arg3) {
    if (response.access_token) {
        Main.accessToken = response.access_token;
        Main.refreshToken = response.refresh_token;
        Main.setAccessToken();

        if (caller == 'home_fetchCategories') {
            Controller.showHome();
            Server.home_fetchCategories();
        } else if (caller == "showClientAuthStatus") {
            // Controller.showHome();
            Server.details_fetchWatchList();
            // Server.home_fetchContentByType('series');
            //Server.home_fetchCategories();
        } else if (caller == 'home_fetchSubMenu') {
            Server.home_fetchSubMenu(arg1);
        } else if (caller == 'home_fetchVideos') {
            Server.home_fetchVideos(arg1, arg2, arg3);
        } else if (caller == 'home_fetchPlaybackURL') {
            Server.home_fetchPlaybackURL(arg1, arg2);
        } else if (caller == 'home_fetchVideoPlayback') {
            Server.home_fetchVideoPlayback(arg1, arg2, arg3);
        } else if (caller == 'home_fetchSeries') {
            Server.home_fetchSeries(arg1);
        } else if (caller == 'home_fetchSearch') {
            Server.home_fetchSearch(arg1);
        }
        return true;
    }
}

Data.home_setOauthToken = function(response) {
    // // // console.log("Data.home_setOauthToken = ", response);
    //response = response.response;
    Main.access_token = response.access_token;
    Main.refresh_token = response.refresh_token;
}

Data.home_setToken = function(response, caller, arg1, arg2, arg3) {
    //// // // // // // // // // // console.log("Data.home_setToken");
    // // // // // // // // // // console.log("response");
    // // // // // // // // // // console.log(response);
    //// // // // // // // // // // console.log(response);
    if (response.access_token) {
        Main.accessToken = response.access_token;
        Main.refreshToken = response.refresh_token;
        Main.setAccessToken();

        Controller.showHome();
        Server.home_fetchCategories();
        //// // // // // // // // // // console.log("Main.accessToken = " + Main.accessToken + " | Main.refreshToken = " + Main.refreshToken);


        /*
        Server.refreshToken("home_fetchSubMenu", contenttype);
        Server.refreshToken("home_fetchVideos", category, subcat, mouse_focus);
        Server.refreshToken("home_fetchPlaybackURL", url, button_action);
        Server.refreshToken("home_fetchVideoPlayback", videoid, button_action, mouse_focus);
        Server.refreshToken("home_fetchSeries", series_id);
        Server.refreshToken("home_fetchSearch", query);
         */

        return true;
    }
}

Data.home_refreshAuthPin = function(data) {
    if (data) {
        Main.code = data.code;
        Display.auth_refreshPin(data.code);
    }
}

Data.home_setAuthRegister = function(data) {
    // // // // console.log("Data.home_setAuthRegister - ", data);
    ////// // // // // // // // // // console.log("data = " + JSON.stringify(data));
    if (data) {
        //code = data.response;
        data = data.response;
        // mixpanel.track("new device link", {"code":data.code});
        // Main.code = data.code;
        if (data.pin) {
            Display.auth_createPage(data.pin);
            Controller.hideSpinner();
        }
    }
    //if(response){
    //    Display.auth_createPage(response.securityCode);
    //}
}

Data.details_setBrowseStatus = function(response) {
    if (!response.access_token)
        return;
    Main.accessToken = response.access_token;
    Server.details_fetchContentByType('series');
}

/**
 * Set playlist content
 */
Data.details_setContentPlaylist = function(data) {
    console.log("Data.details_setContentPlaylist = ", data);
    //  Data.details.playlist = data._embedded.items;
    // // // // console.log("Data.details_setContentPlaylist");

    if (data.type === 'largecarousel') {
        Data.details.playlist = Data.home.first_playlist_row;

        Display.details_createDetails('largecarousel', Data.home.selectedId);
    } else if (data.type == 'live') {
        Data.details.playlist = Data.home.playlists[Display.home.currentCarousel].items;
        Display.details_createDetails('live', Data.home.selectedId);
    } else if (data.type == 'mouseClick') {
        // Data.details.playlist = MouseEvents.home.clickevent.selectedPlayList;
        // Display.details_createDetails('mouseClick', Data.home.selectedId);

    } else {

        if (Navigation.home.mouseMove === true) {
            Data.details.playlist = Data.home.playlists[Navigation.home.cursorValue].items;

            //  var currentItem = Data.home.playlists[Navigation.home.cursorValue - 1];
        } else {
            Data.details.playlist = Data.home.playlists[Display.home.currentCarousel].items;

            //      var currentItem = Data.home.playlists[Display.home.currentCarousel];
        }

        //  Data.details.playlist = Data.home.playlists[Display.home.currentCarousel].items;
        // Display.details_createDetails('movie', Data.home.selectedId);
    }

    // // // // // // // // // console.log('Playlist: ', Data.details.playlist);


}

Data.details_setContentTVShows = function(data) {
        // // // // console.log("Data.details_setContentTVShows");
        // console.log("details_setContentTVShows = ", data);
        Data.details.series = data._embedded.items;
        Display.details_createDetails('series', Data.home.selectedId);
    }
    //channel
Data.details_setContentChannel = function(data) {
    // // // // console.log("Data.details_setContentTVShows");
    // console.log("details_setContentTVShows = ", data);
    Data.details.channel = data._embedded.items;
    Display.details_createDetails('channel', Data.home.selectedId);
}

/**
 * Set series content
 */
Data.details_setContentSeries = function(data) {
    // // // // console.log("Data.details_setContentSeries - " , data);
    Data.details.series = data._embedded.items;
    // // // // // // // // // // console.log('Series: ', Data.details.series);

    //  Display.details_createDetails(Data.home.selectedType, Data.home.selectedId);
    Display.details_createDetails('series', Data.home.selectedId);
}

/**
 * Set series content
 */
Data.details_setContentSeasons = function(data) {
    data._embedded.items.forEach(function(item, i) {
        Data.details.seasons.push({
            id: item.id,
            name: item.name,
            items: Array.apply(null, Array(item.items_count)).map(function() {
                return {}
            }), // Create array of empty objects
        });

        // var carousel = Display.details_createCarousel({
        //     id: item.id,
        //     name: item.name,
        //     items: Data.details.seasons[Data.details.seasons.length - 1].items,
        //     parent: Display.details.carouselsContainer,
        // });

        // var index = i;

        // // // // // // // // // console.log("Server.details_fetchEpisodes = " +item._links.episodes.href + "&per_page=100" )

        // console.log("Data.details_setContentSeasons = ", item);
        // if (item._links.hasOwnProperty('items')) {
        //     Server.details_fetchEpisodes(item._links.items.href, function(res) {
        //             Data.details.episodes[index] = res._embedded.items;
        //             Data.details_setcoverartsEpisode(res._embedded.items, carousel);

        //             // Updates the cover after the first episode is loaded
        //             if (index === 0) {
        //                 Display.details_updateCover();
        //                 Display.details.buttons[0].classList.add('active');
        //             }
        //         }
        //         .bind({
        //             index: index,
        //             carousel: carousel
        //         }));
        // }
    });
}

/**
 * Set episode coverarts
 */
Data.details_setcoverartsEpisode = function(items, carousel) {
    items.forEach(function(item, i) {
            if (i < 9) {
                carousel.items[i].innerHTML = '<div class="img img-regular" data-index="' + i + '" style="background-image:url(' + item.thumbnail.small + ')"></div><div class="name">' + item.name + '</div>';
            } else {
                carousel.items[i].innerHTML = '<div class="img img-regular" data-index="' + i + '" style="background-image:url(img/favicon-194x194.png)"></div><div class="name">' + item.name + '</div>';
            }

        }
        .bind(carousel));
}

/**
 * Set videos content
 */
Data.details_setContentVideos = function(data, contenttype) {
    var name = '';
    var currentItem = 0;
    Data.details.videos = data._embedded !== undefined ? data._embedded.items : data;

    // console.log("Data.details_setContentVideos = ", data);
    // console.log("content type = ", contenttype);

    // // // console.log("Data.details_setContentVideos = |" + contenttype + "|");

    if (contenttype !== 'search' && contenttype !== 'tvshows' && contenttype !== 'largecarousel') {
        if (Navigation.home.mouseMove === true) {
            name = Display.home.carousels[Navigation.home.cursorValue].name;
            currentItem = Display.home.carousels[Navigation.home.cursorValue].currentItem;
        } else {
            name = Display.home.carousels[Display.home.currentCarousel].name;
            currentItem = Display.home.carousels[Display.home.currentCarousel].currentItem;
        }
    } else if (contenttype.trim() === 'search') {
        // // // console.log("IF TRIPPED");
        name = 'Search results for: ' + Data.home.query;
    }

    if (Data.home.selectedType === 'playlist') {
        currentItem = 0;
    } else if (contenttype === 'largecarousel') {
        // currentItem = Display.home.carousels[Display.home.currentCarousel].currentItem;
        currentItem = Display.home.carousels[0].currentItem;
    } else if (contenttype === 'videos') {
        currentItem = 0;
    } else if (contenttype === 'live') {
        currentItem = Display.home.carousels[Display.home.currentCarousel].currentItem;

    } else if (contenttype == 'mouseClick') {
        currentItem = MouseEvents.home.clickevent.col
    }

    //  Data.details_setContentPlaylist();


    Display.details_createCarousel({
        id: 'carousel-regular-videos',
        name: name,
        parent: Display.details.carouselsContainer,
        items: Data.details.videos,
        currentItem: currentItem,
        contenttype: contenttype,
    });

    if (Data.home.selectedType === 'playlist') {
        Data.details.currentVideo = Data.details.videos[0];
    } else {
        Data.details.currentVideo = Data.details.videos[currentItem];
    }

    // if this is large carousel then set data properly - currently resume is used
    if (contenttype === 'largecarousel' || contenttype === 'live' || contenttype == 'mouseClick') {
        Data.details.currentVideo.id = Data.details.currentVideo.id;
        // Data.details.currentVideo.coverart = [];
        Data.details.currentVideo.thumbnail.small = Data.details.currentVideo.thumbnail.small;
        Data.details.currentVideo.coverart.large = Data.details.currentVideo.coverart.large;
    }

    Display.details_updateCover();
    if(Display.details.carousels.length != 0){
    Display.details.buttons[0].classList.add('active');
    }
}

/**
 * If Resume exist, show the resume button
 */
Data.details_isResume = function() {
    var resume = Data.home.resume;
    //// // // // // // // // // // console.log("details_isResume = " + Data.details.currentVideo.id);
    //// // // // // // // // // // console.log("resume = " + JSON.stringify(resume));
    for (var i = 0, l = Data.home.resume.length; i < l; i++) {
        var item = Data.home.resume[i];
        if (Data.details.currentVideo.id === item.id) {
            Data.details.currentVideo["resumeTime"] = item.resumeTime;
            // // // // // // // // // // console.log("item.ResumeTime = " + Data.details.currentVideo["resumeTime"]);
            return true;
        }
    }

    return false;
}

/**
 * Check if favorite in localstorage
 */
Data.details_isFavorited = function() {
    var favorite = Data.home.favorites;

    for (var i = 0, l = Data.home.favorites.length; i < l; i++) {
        var item = Data.home.favorites[i];
        if (Data.details.currentVideo.id === item.id)
            return true;
    }
    return false;
}

Data.home_isFavorited = function() {
    var favorite = Data.home.favorites;

    for (var i = 0, l = Data.home.favorites.length; i < l; i++) {
        var item = Data.home.favorites[i];
        if (Data.home.currentVideo.id === item.id)
            return true;
    }
    return false;
}

/**
 * Add to favorites
 */
Data.details_addToFavorites = function() {
    Data.home.favorites.unshift(Data.details.currentVideo);
    localStorage.setItem('favorite', JSON.stringify(Data.home.favorites));
    // // // // // // // // // // console.log('Add to Favorites. LocalStorage: ', Data.home.favorites);
}
Data.home_addToFavorites = function() {
    Data.home.favorites.unshift(Data.home.currentVideo);
    localStorage.setItem('favorite', JSON.stringify(Data.home.favorites));
    //Display.home_updateHome();
    // // // // // // // // // // console.log('Add to Favorites. LocalStorage: ', Data.home.favorites);

}
Data.details_addToFavorites = function() {
    Data.home.favorites.unshift(Data.details.currentVideo);
    localStorage.setItem('favorite', JSON.stringify(Data.home.favorites));
    //Display.home_updateHome();
    // // // // // // // // // // console.log('Add to Favorites. LocalStorage: ', Data.home.favorites);

}

/**
 * Remove from favorites
 */
Data.details_removeFromFavorites = function() {
    var index = -1;
    Data.home.favorites.forEach(function(item, i) {
            if (item.id === Data.details.currentVideo.id)
                index = i;
        }
        .bind(index));

    Data.home.favorites.splice(index, 1);
    localStorage.setItem('favorite', JSON.stringify(Data.home.favorites));
    var opts = {
        "video_id": "" + Data.details.currentVideo.id,
        "status": 0
    };
    Server.updateMylist(opts);

    // // // // // // // // // // console.log('Remove from Favorites. LocalStorage: ', Data.home.favorites);
}
Data.home_removeFromFavorites = function() {
    var index = -1;
    Data.home.favorites.forEach(function(item, i) {
            if (item.id === Data.home.currentVideo.id)
                index = i;
        }
        .bind(index));

    Data.home.favorites.splice(index, 1);
    localStorage.setItem('favorite', JSON.stringify(Data.home.favorites));
    var opts = {
        "video_id": "" + Data.home.currentVideo.id,
        "status": 0
    };
    Server.updateMylist(opts);
    //Display.home_updateCover();
    // // // // // // // // // // console.log('Remove from Favorites. LocalStorage: ', Data.home.favorites);
}

Data.details_removeFromFavorites = function() {
    var index = -1;
    Data.home.favorites.forEach(function(item, i) {
            if (item.id === Data.details.currentVideo.id)
                index = i;
        }
        .bind(index));

    Data.home.favorites.splice(index, 1);
    localStorage.setItem('favorite', JSON.stringify(Data.home.favorites));
    var opts = {
        "video_id": "" + Data.details.currentVideo.id,
        "status": 0
    };
    Server.updateMylist(opts);
    //Display.home_updateHome();
    // // // // // // // // // // console.log('Remove from Favorites. LocalStorage: ', Data.home.favorites);
}

Data.home_AuthorizedError = function(caller, arg1, arg2, arg3) {
    // // // // // // // // // // console.log("Data.home_AuthorizedError = " + caller);
    Server.refreshToken(caller, arg1, arg2, arg3);
}

Data.home_setBrowseStatus = function(response) {
    // // // // // // console.log("Data.home_setBrowseStatus");
    if (response.access_token) {
        Main.accessToken = response.access_token;
        Main.linked = false;
        Main.browsed = true;
        // // // // // // // // // console.log("home_setBrowseStatus");
        // // // // console.log("Data.home_setBrowseStatus");
        Server.home_fetchContentByType('category');
    }
}

/**
 * Set series content
 */
Data.home_setContentSeries = function(data, type) {
    // // // // // // // // // // console.log('Series: ', data);
    Data.first_playlist_row = true;
    Data.home.series = data._embedded.collections;
    mixpanel.track("retrieved series", {
        "size": data._embedded.items.length,
        "accesstoken": Main.accesstoken
    });
    //Server.home_fetchContentByType('playlist');
    Server.home_fetchContentByType('playlist');
}

Data.home_setCategory = function(data, type) {
    // // console.log("Data.home_setCategory = ", data);
    Data.first_playlist_row = true;
    //data for subcription

    if (typeof data != 'undefined' && typeof data._embedded.items.length != 0) {
        //  Data.home.largeCarousel = data._embedded.items;
        Data.home.largeCarousel = data._embedded.items;
        // if(Data.user.loginUser.status === true){
        //  Data.Setsubcription(data);
        // }

        // Server.home_fetchContentByType('subcription');
    } else {
        Data.home.largeCarousel = {};
    }
    Server.home_fetchContentByType('user-mylist');
}

/**
 * Set playlist content
 */
Data.home_setContentPlaylist = function(data) {



    if (Data.first_playlist_row) {
        // // // // console.log("Data.first_playlist_row");
        Data.home.first_playlist_row = Data.home.largeCarousel;
        Display.home_createHome();
        Data.first_playlist_row = false;

    }
    //Display.home_createHome();
    Display.home_updateHome();
    Data.home.playlists = [];
    /*
        data._embedded.items.forEach(function(item) {
            //      if (item.count === 0) return;

            if (Data.first_playlist_row) {
                Server.home_sync_fetchPlaylist(item._links.items.href + "&per_page=500", function(res) {
                    Data.home.first_playlist_row = res._embedded.items;
                });
                Data.first_playlist_row = false;
                return false;
            }
            if (item.items_count > 0) {}

            var index = Data.home.playlists.length;
            // Load playlists data
            Server.home_fetchPlaylist(item._links.items.href, item, function(res, item) {
                    Data.home.playlists.push({
                        id: item.id,
                        name: item.name,
                        type: item.type,
                        items: Array.apply(null, Array(Number(item.items_count))).map(function() {
                            return {};
                        }), // Create array of empty objects
                    });
                    var carousel = Display.home_createCarousel({
                        id: item.id,
                        parent: Display.home.carouselsContainer,
                        items: Data.home.playlists[Data.home.playlists.length - 1].items,
                        name: item.name,
                    });

                    var index = Data.home.playlists.length - 1;
                    Data.home.regular_carousel_loaded = Data.home.regular_carousel_loaded + 1;
                    Data.home.playlists[index].items = res._embedded.items;
                    Data.home_setcoverartsPlaylist(res._embedded.items, carousel, index);
                }
                .bind(index));
        });
        */
    Data.sync.playlist = data._embedded.items
    Controller.showSpinner();
    Data.playlist_get_Items();
    //Controller.hideSpinner();
}

/**
 * Set playlist coverarts
 */
Data.home_setcoverartsPlaylist = function(items, carousel, index) {

    var loaderImg = "img/favicon-194x194.png";
    items.forEach(function(item, i) {

        carousel.items[i].innerHTML = '<div class="img carousel-img img-regular" data-index="' + i + '" data-id="' + carousel.container.id + '"  style="background-image:url(' + item.thumbnail.small + ')"></div><div class="name">' + item.name + '</div>';
        carousel.items[i].innerHTML = '<div class="img carousel-img img-regular" data-index="' + i + '" data-id="' + carousel.container.id + '"  style="background-image:url(' + item.thumbnail.small + ')"></div><div class="name">' + item.name + '</div>';
        carousel.items[i].dataset.type = item.type;
        carousel.items[i].dataset.id = item.id;
    });

    if (typeof Data.home.largeCarousel != 'undefined' && Data.home.largeCarousel.length > 0) {

        console.log(Display.home.carousels)
            // // // // console.log("carousel not undefined");
        Display.home.carousels[0].currentItem = 0;
        Display.home.carousels[0].items[0].classList.add('active');
        Navigation.home.FOCUS = 'regular';
        //Navigation.home_toggleArrows();
    } else {
        // // // // console.log("Data.home.regular_carousel_loaded = ", Data.home.regular_carousel_loaded);
        // // // // console.log("Data.home.regular_focus = ", Data.home.regular_focus);
        if (Data.home.regular_carousel_loaded > 0 && Data.home.regular_focus === false) {
            // // // // console.log("move focus to SMALL carousel");
            Display.home.carousels[0].currentItem = 0;
            Display.home.carousels[0].items[0].classList.add('active');
            Navigation.home.FOCUS = 'regular';
            //Navigation.home_shiftDown();
            Data.home.regular_focus = true;

        }
    }
    if (index == 1) {
        //Display.home_updateCover();
        //MouseEvents.setArrowEvents();
        Controller.hideSpinner();
        Controller.showHome();
        //MouseEvents.addMouseEventstoArrow(Display.home.arrowup, Display.home.arrowdown);
    } else if (Data.home.favorites.length > 0 && index == 1) {
        //Display.home_updateCover();

    }

}

/**
 * Get favorites from localstorage
 */
Data.home_setFavorites = function() {
    var storage = localStorage.getItem('favorite');
    var data = storage !== null ? JSON.parse(storage) : [];
    Data.home.favorites = data instanceof Array ? data : [];
}

/**
 * Get recent views from localstorage
 */
Data.home_setResume = function() {
    var storage = localStorage.getItem('tk_resume');
    var data = storage !== null ? JSON.parse(storage) : [];
    Data.home.resume = data instanceof Array ? data : [];
}

//Data.home_setVideoPlaybackURL = function(items, url, button_action) {
Data.home_setVideoPlaybackURL = function(items, url, button_action) {
    //Data.home_setVideoPlaybackURL = function(url) {
    // // // console.log("items = ", items);
    //items = items._embedded.files;
    Controller.showPlayer();
    Player.init();
    Player.showUI();
    Player.shouldNotPlay = false;
    Player.resetAllUrl();
    var url = items.response.url;

    console.log("3939393939 url 3893939 = ", url);
    console.log("indexOf", url.indexOf('m3u8'));

    if (url.indexOf('m3u8') !== -1) {
        Main.app = 'vizio'
        console.log("***********************************m3u8 url");
        Player.setStereoUrl(url);
        //Player.setLive(true);
        Player.setResume(0);
        if (Player.live) {
            Player.startLiveStream();
        } else {
            Player.playVideo();
        }
    } else if (url.indexOf('mp4') !== -1) {
        Main.app = 'foxxum'
        console.log("*********************************** mp4 url");
        Player.setStereoUrl(url);
        // Player.setLive(false);
        Player.playVideo();
    } else {
        Main.app = 'foxxum'
        Player.setStereoUrl(url);
        // Player.setLive(false);
        Player.setResume(0);
        Player.playVideo();
    }
    // // // console.log("home_setVideoPlaybackURL = ", url);
    /* jayant
    Player.setStereoUrl(url);
    Player.setLive(true);
    Player.setResume(0);
    Player.startLiveStream();
    */
    /*
    if(button_action === "resume"){
    Player.playVideo(Data.details.currentVideo.resumeTime);
    } else{
     */
    // Player.shouldNotPlay = false;
    // if(Data.playerFrom == 'home'){
    //     if (Data.home.currentVideo.currentPlay.show_title) {
    //         Player.setLive(true); // identify if this is a live stream
    //         Player.setResume(0);
    //         Player.startLiveStream();
    //     } else {
    //         Player.playVideo(0);
    //     }
    // }else{
    //     if (Data.details.currentVideo.currentPlay.show_title) {
    //         Player.startLiveStream();
    //     } else {
    //         Player.playVideo(0);
    //     }
    // }
    //}
    /*
    //// // // // // // // // // // console.log("Data.home_setVideoPlaybackURL = " + JSON.stringify(items));
    for(var i=0,l=items.length; i<l; i++){
    if(items[i].quality === "adaptive" && items[i].format==="m3u8"){
    //// // // // // // // // // // console.log("playback url = " + items[i]._links.signature.href);
    //// // // // // // // // // // console.log("home_setVideoPlaybackURL = " + items[i]._links.signature.href);
    Player.setStereoUrl(items[i]._links.signature.href);
    mixpanel.track("retrieved playback url", {"playbackURL": items[i]._links.signature.href});
    if(button_action === "resume"){
    Player.playVideo(Data.details.currentVideo.resumeTime);
    } else{
    Player.playVideo(0);
    }
    }
    }
     */
    Controller.hideSpinner();
}


Data.home_setSearchResult = function(items, query) {
    // // // // // // // // // console.log("Data.home_setSearchResult");
    // // // // // // // // // console.log("items = " + JSON.stringify(items));
    this.home.search = [];
    //// // // // // // // // // // console.log(items);
    items = items._embedded.collections;
    // if (items) {
    //     for (var i = 0, l = items.length; i < l; i++) {
    //         if (items[i].title.indexOf("Trailer") == -1 && items[i].title.indexOf("trailer") == -1 && items[i].title.indexOf("extra") == -1 && items[i].title.indexOf("Extra") == -1) {
    //             items[i].name = items[i].title
    //                 this.home.search.push(items[i]);
    //         }
    //     }
    // }
    if (items) {
        for (var i = 0; i < items.length; i++) {
            // if (items[i].subscribed == true) {
            this.home.search.push(items[i]);
            // }
        }
    }
    Keyboard.word = "";
    Keyboard.search_input.value = "";
    Controller.hideKeyboard();
    if (this.home.search.length > 0) {
        Controller.showSpinner();
        Data.home.query = query;
        Data.home.selectedType = 'search';
        mixpanel.track("search result", {
            "size": this.home.search.length,
            "query": query
        });
        Display.home.menu[0].currentItem = 2;
        Controller.showVideo({
            type: 'search'
        });
    } else {
        mixpanel.track("search result", {
            "size": "0",
            "query": query
        });
        Controller.hideSpinner();
        Display.home.menu[0].currentItem = 2;
        Popup.showError("Error", "There's no item found.", 1, "");
    }
    // Common.putInnerHTML(Display.home.searchtitle, "Search result for: \"" + Common.truncateString(query, 50) + "\"");
    // Display.home.searched = true;
    // Display.home_createSlider("0", "0", false);
}

var Navigation = {
    home: {
        mainMenuPosition: 0,
        subMenuPosition: 0,
        carouselPosition: 0,
        packagePosition: 0,

        mainMenuSelection: 0,
        subMenuSelection: 0,
        packageSelection: 0,
        specialSelection: 0,

        FOCUS: null, // "large", "regular", "search", "settings"
        cursorValue: 0, // current value
        cursorPrevious: 0, // previous value
        mouseMove: false, // if mouse moves
        keyEvent: false // for keyboard
    },

    details: {
        isVideo: false,
        FOCUS: null, // "details", "carousel"
    },
    package: {
        carouselPosition: 0,
        FOCUS: null,
    },
}

//registration navigation

Navigation.registration_handleEnter = function() {
    if (Registration.signUpFocus === "signup") {
        if (Registration.nameSignup.value.trim() === "" || Registration.emailSignup.value.trim() === "" || Registration.passwordSignup.value.trim() === "" || Registration.repasswordSignup.value.trim() === "") {

        } else {

            console.log(Registration.nameSignup.value, Registration.emailSignup.value, Registration.passwordSignup.value, Registration.repasswordSignup.value);

            Data.user.newuser.username = Registration.nameSignup.value;
            Data.user.newuser.useremail = Registration.emailSignup.value;
            Data.user.newuser.password = hex_sha256(Registration.passwordSignup.value);
            Data.user.newuser.reenterpassword = hex_sha256(Registration.repasswordSignup.value);
            Data.user.newuser.status = false;

            Registration.divsSignup[0].classList.remove('hover');
            Registration.divsSignup[1].classList.remove('hover');
            Registration.divsSignup[2].classList.remove('hover');
            Server.addRegistration();



            // Controller.showSpinner(); 

            //Controller.showPackage();    

            //   Server.home_fetchContentByType('subcription');
        }
    }

}
Navigation.registration_handleUp = function() {
    if (Registration.signUpFocus == 'namesignup') {
        return false;
    }
    if (Registration.signUpFocus === "emailsignup") {
        window.setTimeout(function() {
            Registration.nameSignup.focus();
        }, 0);
        Registration.signUpFocus = "namesignup"
    } else if (Registration.signUpFocus === "passwordsignup") {
        window.setTimeout(function() {
            Registration.emailSignup.focus();
        }, 0);

        Registration.signUpFocus = "emailsignup";
    } else if (Registration.signUpFocus === "repasswordsignup") {
        window.setTimeout(function() {
            Registration.passwordSignup.focus();
        }, 0);

        Registration.signUpFocus = "passwordsignup"
    } else if (Registration.signUpFocus === "signup") {
        window.setTimeout(function() {
            Registration.repasswordSignup.focus();
        }, 0);

        Registration.signUpLi[0].classList.remove('hover');
        Registration.divsSignup[0].classList.remove('hover');
        Registration.divsSignup[1].classList.remove('hover');
        Registration.divsSignup[2].classList.remove('hover');
        Registration.signUpFocus = "repasswordsignup"
    }
}
Navigation.registration_handleDown = function() {
    if (Registration.signUpFocus === "signup") {
        return false;
    }
    if (Registration.signUpFocus === "namesignup") {
        Registration.nameSignup.blur();
        window.setTimeout(function() {
            Registration.emailSignup.focus();
        }, 0);

        Registration.signUpFocus = "emailsignup"
    } else if (Registration.signUpFocus === "emailsignup") {

        window.setTimeout(function() {
            Registration.passwordSignup.focus();
        }, 0);

        Registration.signUpFocus = "passwordsignup";
    } else if (Registration.signUpFocus === "passwordsignup") {
        window.setTimeout(function() {
            Registration.repasswordSignup.focus();
        }, 0);

        Registration.signUpFocus = "repasswordsignup"
    } else if (Registration.signUpFocus === "repasswordsignup") {
        window.setTimeout(function() {
            Registration.repasswordSignup.blur();
            Registration.divsSignup[2].focus();
        }, 0);
        Registration.signUpLi[0].classList.add('hover');
        Registration.divsSignup[0].classList.add('hover');
        Registration.divsSignup[1].classList.add('hover');
        Registration.divsSignup[2].classList.add('hover');

        Registration.signUpFocus = "signup"
    }

}
Navigation.registration_handleLeft = function() {
    return;
}
Navigation.registration_handleRight = function() {
    return
}
Navigation.registration_handleBack = function() {
    Controller.hideRegistration();
    Controller.showAuth();
}


//

/**
navigation package
*/
Navigation.packageDetailPageHandleEnter = function() {
    Controller.hide_explore_package();
}
Navigation.handelbackPackageDetails = function() {
    Controller.hide_explore_package();
}


Navigation.handelEnterPackage = function(opts) {
    if (Navigation.package.FOCUS === 'large') {
        // if(opts.etype != undefined){


        //    if(opts.etype === 'click'){ 
        //    Display.updatePackageDetails({
        //        index : 0,
        //        items : Data.subcription.is_subscribed_false[opts.index],
        // //     items : Data.packages[index_of_cover],
        //        parent : document.getElementById('details-package'),
        //      }); 
        //    }
        // }



        Navigation.package.FOCUS = 'regular';
        // to remove

        var currentCarousel = Display.package.carousels[Display.package.currentCarousel];

        currentCarousel.items[Data.packageActiveIndex].classList.remove('hover');
        currentCarousel.items[Data.packageActiveIndex].classList.remove('active');


        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
        currentCarousel.items[currentCarousel.currentItem].classList.remove('hover');

        Data.packageActiveIndex = currentCarousel.currentItem;


        //useful for profile
        Data.currentpackage.currentSub = Data.subcription.is_subscribed_false[currentCarousel.currentItem].id;




        // to add



        //Data.currentpackage.currentSub  = Display.package.currentCarousel;
        if (opts.etype != undefined) {


            if (opts.etype === 'keyboard') {
                var pkg = Display.package.carousels[Display.package.currentCarousel]
                if (pkg.currentCarousel != currentCarousel.currentItem) {
                    Controller.showSpinner();
                    Server.getCatalougeById(Data.packages[currentCarousel.currentItem].metaData.catalogueid);
                }

            }

        }

        //var currentCarousel = Display.package.details[Display.details.currentCarousel];
        Display.package.channel[0].currentItem = 0;
        var currentCarousel = Display.package.channel[Display.package.channel[0].currentItem];
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');



    } else if (Navigation.package.FOCUS === 'regular') {
        Controller.showSpinner();
        //Popup.showError("Error", "To manage your subscription, please login to your account at wherever.tv ", 1, "");
        Controller.show_explore_package();
        var currentCarousel = Display.package.channel[Display.package.currentCarousel];
        var currentRegular = Data.selectCatalouge.items[currentCarousel.currentItem];
        Display.updatePreview(currentRegular);
    } else if (Navigation.package.FOCUS === 'subscription') {
        //buySubscription("8695");
        var packageIndex = Display.package.carousels[Display.package.currentCarousel].currentItem;
        var subcriptionIndex = Display.package.details[0].currentItem;

        Data.currentpackage.detailsregistration = {
                currentpackage: Data.subcription.is_subscribed_false[packageIndex],
                currentsubcription: Data.subcription.is_subscribed_false[packageIndex].subscriptions[subcriptionIndex],
            }
            //console.log(Data.currentpackage.detailsregistration)
        Controller.hidePackage();
        Controller.showRegistration();



    }

}


Navigation.package_shiftLarge = function(direction) {
    var currentCarousel = Display.package.carousels[Display.package.currentCarousel];

    if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) ||
        (direction === 'left' && currentCarousel.currentItem === 0)) {
        currentCarousel.items[currentCarousel.currentItem].classList.add('hover');
        return;
    }
    //currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    //currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    currentCarousel.items[currentCarousel.currentItem].classList.remove('hover');
    currentCarousel.currentItem += direction === 'right' ? 1 : -1;
    currentCarousel.items[currentCarousel.currentItem].classList.add('hover');
    var rect = currentCarousel.items[currentCarousel.currentItem].getBoundingClientRect();
    if (direction === 'right' && rect.right > Display.screen.width - 50) {
        currentCarousel.translateX -= currentCarousel.itemWidth;
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';

    } else if (direction === 'left' && rect.left < 0) {
        currentCarousel.translateX += currentCarousel.itemWidth;

        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
    }

}



Navigation.package_handleLeft = function() {
    if (Data.packages.length === 0) {
        return false;
    }



    if (Navigation.package.FOCUS === 'large') {
        Navigation.package_shiftLarge('left');
        //Navigation.package_toggleArrows();
    } else if (Navigation.package.FOCUS === 'regular') {
        Navigation.package_shiftRegular('left');
    } else if (Navigation.package.FOCUS === 'subscription') {
        Navigation.package_shiftSubscription('left');
    }
}

Navigation.package_handleRight = function() {
    if (Data.packages.length === 0) {
        return false;
    }
    if (Navigation.package.FOCUS === 'large') {
        Navigation.package_shiftLarge('right');
        //Navigation.package_toggleArrows();
    } else if (Navigation.package.FOCUS === 'regular') {
        Navigation.package_shiftRegular('right');
    } else if (Navigation.package.FOCUS === 'subscription') {
        Navigation.package_shiftSubscription('right');
    }


}

Navigation.package_handleDown = function() {
    if (Data.packages.length === 0) {
        return false;
    }
    if (Navigation.package.FOCUS === 'large') {
        Navigation.package.FOCUS = 'regular';
        // to remove
        var currentCarousel = Display.package.carousels[Display.package.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('hover');
        Data.currentpackage.currentSub = Data.packages[currentCarousel.currentItem].id;
        // to add
        var currentCarousel = Display.package.channel[Display.package.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
    } else if (Navigation.package.FOCUS === 'regular') {
        var currentCarousel = Display.package.channel[Display.package.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');

        var currentCarousel = Display.package.details[0];
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
        Navigation.package.FOCUS = 'subscription'


    }
    return;
}
Navigation.package_handleUp = function() {
    if (Data.packages.length === 0) {
        return false;
    }

    if (Navigation.package.FOCUS === 'regular') {
        Navigation.package.FOCUS = 'large';
        // to remove
        var currentCarousel = Display.package.channel[Display.details.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');

        var currentCarousel = Display.package.carousels[Display.package.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.add('hover');
        // to add

    } else if (Navigation.package.FOCUS === 'subscription') {

        var currentCarousel = Display.package.details[0];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
        Navigation.package.FOCUS = 'regular'

        var currentCarousel = Display.package.channel[Display.package.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');

    }
    return;
}


Navigation.package_shiftRegular = function(direction) {
    //
    var currentCarousel = Display.package.channel[Display.package.currentCarousel];
    if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) ||
        (direction === 'left' && currentCarousel.currentItem === 0)) {
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
        return;
    }
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    currentCarousel.currentItem += direction === 'right' ? 1 : -1;
    currentCarousel.items[currentCarousel.currentItem].classList.add('active');


    var rect = currentCarousel.items[currentCarousel.currentItem].getBoundingClientRect();

    if (direction === 'right' && rect.right > Display.screen.width - 50) {
        //test
        currentCarousel.translateX -= currentCarousel.itemWidth;
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
    } else if (direction === 'left' && rect.left < 0) {
        currentCarousel.translateX += currentCarousel.itemWidth;
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
    }


}

Navigation.package_shiftSubscription = function(direction) {
    //
    var currentCarousel = Display.package.details[0];
    if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) ||
        (direction === 'left' && currentCarousel.currentItem === 0)) {
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
        return;
    }
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    currentCarousel.currentItem += direction === 'right' ? 1 : -1;
    currentCarousel.items[currentCarousel.currentItem].classList.add('active');


    var rect = currentCarousel.items[currentCarousel.currentItem].getBoundingClientRect();

    if (direction === 'right' && rect.right > Display.screen.width - 50) {
        //test
        currentCarousel.translateX -= currentCarousel.itemWidth;
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
    } else if (direction === 'left' && rect.left < 0) {
        currentCarousel.translateX += currentCarousel.itemWidth;
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
    }


}

Navigation.packageSetfocus = function(focus, opts) {

    if (focus === 'large') {

        var currentCarousel = Display.package.details[Display.details.currentCarousel];

        currentCarousel.items[currentCarousel.currentItem].classList.remove('hover');

        var currentCarousel = Display.package.carousels[Display.package.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('hover');

        currentCarousel.currentItem = opts.item;
        currentCarousel.items[currentCarousel.currentItem].classList.add('hover');



    } else if (focus === 'regular') {


        var currentCarousel = Display.package.details[Display.details.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');

        currentCarousel.currentItem = opts.item;

        currentCarousel.items[currentCarousel.currentItem].classList.add('active');



    }
    Navigation.package.FOCUS = focus;
    //Navigation.package_toggleArrows();
}




/**
 *
 */

/**
 * Payment Navigation
 */

Payment.NavigationhandelEnterPayment = function() {


    if (this.PaymentFocus === "pay") {
        if (this.TextboxName.value.trim() === "" || this.TextboxCardNumber.value.trim() === "" || this.TextboxExpDateMM.value.trim() === "" || this.TextboxExpDateYY.value.trim() === "" || this.TextboxSecurityCode.value.trim() === "" || this.TextboxZip.value.trim() === "") {

        } else {
            Controller.showSpinner();
            //  e.preventDefault();
            // Stripe.setPublishableKey('pk_test_4ZzD3dUkMiTnVLpwymISz9Uf');
            Stripe.setPublishableKey('pk_test_x08YU5ckxL9yxLQw5SbnpF8E');
            Stripe.card.createToken(document.getElementById('payment-form'), myStripeResponseHandler);
            return false;
            console.log(this.Amt.value);
            console.log(this.TextboxName.value);
            console.log(this.TextboxCardNumber.value);
            console.log(this.TextboxExpDateMM.value);
            console.log(this.TextboxExpDateYY.value);
            console.log(this.TextboxSecurityCode.value);
            console.log(this.TextboxZip.value);

        }
    } else if (this.PaymentFocus === "EditBtn") {

        Controller.hidePayment();
        Controller.showPackage();
    }
}



myStripeResponseHandler = function(status, response) {
    var err = document.getElementById('payment-error');
    console.log(status);
    // console.log( response );

    if (response.error) {
        err.innerHTML = " INVALID CARD DETAILS ";
        err.classList.add('active');
        setTimeout(function() {
            err.classList.remove('active');
        }, 4000);
        // document.getElementById('payment-error').innerHTML = response.error.message;
        console.log("stripe error" + response.error.message);
    } else {
        console.log(response);

        if (Data.user.loginUser.status == false) {
            err.innerHTML = " WAIT WE ARE CREATING ACCOUNT FOR YOU";
            err.classList.add('active');

            err.style.cssText = 'background:#002bff;';
            setTimeout(function() {
                err.classList.remove('active');
                err.style.cssText = '';
            }, 5000);
        } else {
            err.innerHTML = "Please wait : Adding package to your account";
            err.classList.add('active');

            err.style.cssText = 'background:#002bff;';
            setTimeout(function() {
                err.classList.remove('active');
                err.style.cssText = '';
            }, 5000);

        }




        //  this.MakeServerCall(response);


        if (Data.user.loginUser.status == true) {

            Server.send_payment_registrationdetails({
                packageid: Data.currentpackage.currentSub,
                subId: Data.currentpackage.currentSubItem,
                emailid: Data.user.loginUser.email,
                password: Data.user.loginUser.password,
                token: response.id,
                name: Data.user.loginUser.firstname,
            });
        } else {
            Server.send_payment_registrationdetails({
                packageid: Data.currentpackage.currentSub,
                subId: Data.currentpackage.currentSubItem,
                emailid: Data.user.newuser.useremail,
                password: Data.user.newuser.password,
                token: response.id,
                name: Data.user.newuser.username,
            });


        }
    }
    Controller.hideSpinner();
};


Payment.MakeServerCall = function(res) {


}



Payment.NavigationPaymenthandelUp = function() {
    if (this.PaymentFocus === "TextboxName") {
        this.EditBtn.classList.add('hover');
        // this.TextboxName.focus();
        this.TextboxName.blur();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.blur();
        this.PaymentFocus = "EditBtn"
    } else if (this.PaymentFocus === "TextboxCardNumber") {

        this.TextboxName.focus();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.blur();
        this.PaymentFocus = "TextboxName"
    } else if (this.PaymentFocus === "TextboxExpDateMM") {
        this.TextboxName.blur();
        this.TextboxCardNumber.focus();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.blur();
        this.PaymentFocus = "TextboxCardNumber"
    } else if (this.PaymentFocus === "TextboxExpDateYY") {
        this.TextboxName.blur();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.focus();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.blur();
        this.PaymentFocus = "TextboxExpDateMM"
    } else if (this.PaymentFocus === "TextboxSecurityCode") {
        this.TextboxName.blur();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.focus();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.blur();
        this.PaymentFocus = "TextboxExpDateYY"
    } else if (this.PaymentFocus === "TextboxZip") {
        this.TextboxName.blur();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.focus();
        this.TextboxZip.blur();
        this.PaymentFocus = "TextboxSecurityCode"
    } else if (this.PaymentFocus === "pay") {
        this.TextboxName.blur();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.focus();
        this.paymentLi[0].classList.remove('hover');
        this.PaymentFocus = "TextboxZip"

    }
}


Payment.NavigationPayment_handleDown = function() {

    if (this.PaymentFocus === "EditBtn") {
        this.EditBtn.classList.remove('hover');
        this.TextboxName.focus();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.blur();
        this.PaymentFocus = "TextboxName"
    } else if (this.PaymentFocus === "TextboxName") {
        this.TextboxName.blur();
        this.TextboxCardNumber.focus();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.blur();
        this.PaymentFocus = "TextboxCardNumber"
    } else if (this.PaymentFocus === "TextboxCardNumber") {
        this.TextboxName.blur();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.focus();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.blur();
        this.PaymentFocus = "TextboxExpDateMM"
    } else if (this.PaymentFocus === "TextboxExpDateMM") {
        this.TextboxName.blur();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.focus();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.blur();
        this.PaymentFocus = "TextboxExpDateYY"
    } else if (this.PaymentFocus === "TextboxExpDateYY") {
        this.TextboxName.blur();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.focus();
        this.TextboxZip.blur();
        this.PaymentFocus = "TextboxSecurityCode"
    } else if (this.PaymentFocus === "TextboxSecurityCode") {
        this.TextboxName.blur();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.focus();
        this.PaymentFocus = "TextboxZip"
    } else if (this.PaymentFocus === "TextboxZip") {
        this.TextboxName.blur();
        this.TextboxCardNumber.blur();
        this.TextboxExpDateMM.blur();
        this.TextboxExpDateYY.blur();
        this.TextboxSecurityCode.blur();
        this.TextboxZip.blur();
        this.paymentLi[0].classList.add('hover');
        this.PaymentFocus = "pay"

    }




}




Payment.handleReturn = function() {



    if (this.PaymentFocus === "TextboxName") {
        if (this.TextboxName.value.length > 0) {
            this.TextboxName.value = this.TextboxName.value.slice(0, -1);
        } else {

        }
        return
    } else if (this.PaymentFocus === "TextboxCardNumber") {
        if (this.TextboxCardNumber.value.length > 0) {
            this.TextboxCardNumber.value = this.TextboxCardNumber.value.slice(0, -1);
        } else {

        }
        return
    } else if (this.PaymentFocus === "TextboxExpDateMM") {
        if (this.TextboxExpDateMM.value.length > 0) {
            this.TextboxExpDateMM.value = this.TextboxExpDateMM.value.slice(0, -1);
        } else {

        }
        return
    } else if (this.PaymentFocus === "TextboxExpDateYY") {
        if (this.TextboxExpDateYY.value.length > 0) {
            this.TextboxExpDateYY.value = this.TextboxExpDateYY.value.slice(0, -1);
        } else {

        }
        return
    } else if (this.PaymentFocus === "TextboxSecurityCode") {
        if (this.TextboxSecurityCode.value.length > 0) {
            this.TextboxSecurityCode.value = this.TextboxSecurityCode.value.slice(0, -1);
        } else {

        }
        return
    } else if (this.PaymentFocus === "TextboxZip") {
        if (this.TextboxZip.value.length > 0) {
            this.TextboxZip.value = this.TextboxZip.value.slice(0, -1);
        } else {

        }
        return
    } else if (this.PaymentFocus = "pay") {
        Controller.hidePayment();
        Controller.showPackage();
        return
    }
    Controller.hidePayment();



}




/**
 * Navigation through player's carousel
 */
Navigation.player_shiftCarousel = function(direction) {
    if ((direction === 'right' && Display.player.carousel.currentItem === Display.player.carousel.items.length - 1) ||
        (direction === 'left' && Display.player.carousel.currentItem === 0)) {
        return;
    }

    Display.player.carousel.items[Display.player.carousel.currentItem].classList.remove('active');
    Display.player.carousel.currentItem += direction === 'right' ? 1 : -1;
    Display.player.carousel.items[Display.player.carousel.currentItem].classList.add('active');

    Data.player.currentItem = Display.player.carousel.currentItem;

    var rect = Display.player.carousel.items[Display.player.carousel.currentItem].getBoundingClientRect();

    if (direction === 'right' && rect.right > Display.screen.width - 50) {
        Display.player.carousel.translateX -= Display.player.carousel.itemWidth;
        Display.player.carousel.ul.style.cssText = '-webkit-transform: translateX(' + Display.player.carousel.translateX + 'px)';
    } else if (direction === 'left' && rect.left < 0) {
        Display.player.carousel.translateX += Display.player.carousel.itemWidth;
        Display.player.carousel.ul.style.cssText = '-webkit-transform: translateX(' + Display.player.carousel.translateX + 'px)';
    }
}

/**
 * Toggles favorite button
 */

Navigation.details_toggleFavorite = function() {
    if (Display.details.buttonFavorite.className.indexOf('added') > -1) {
        Display.details.buttonFavorite.classList.remove('added');
        mixpanel.track("remove favourite", {
            "video": Data.details.currentVideo.name
        });
        Data.details_removeFromFavorites();
    } else {
        Display.details.buttonFavorite.classList.add('added');
        mixpanel.track("add favourite", {
            "video": Data.details.currentVideo.name
        });
        var opts = {
            "video_id": "" + Data.home.currentVideo.id,
            "status": 1
        };
        Server.updateMylist(opts);
        Data.details_addToFavorites();
    }
}

Navigation.home_toggleFavorite = function() {
    if (Display.home.buttonFavorite.className.indexOf('added') > -1) {
        Display.home.buttonFavorite.classList.remove('added');
        mixpanel.track("remove favourite", {
            "video": Data.home.currentVideo.name
        });
        Data.home_removeFromFavorites();
    } else {
        Display.home.buttonFavorite.classList.add('added');
        mixpanel.track("add favourite", {
            "video": Data.home.currentVideo.name
        });
        var opts = {
            "video_id": "" + Data.home.currentVideo.id,
            "status": 1
        };
        Server.updateMylist(opts);
        Data.home_addToFavorites();

    }
}

/**
 * Handles ENTER key
 */
Navigation.details_handleEnter = function() {
    if (Navigation.details.FOCUS === 'details') {


        if (Data.home.selectedType === 'series') {
            // // // // // // // // // // // console.log("Data.details.currentVideo = " + JSON.stringify(Data.details.currentVideo._links.files.href));
            //Server.home_fetchPlaybackURL(Data.details.currentVideo.id);
            Server.details_fetchContentByType(Data.details.currentVideo);
            Display.details_createDetails('videos', Data.details.currentVideo.id);
            Data.home.selectedType = 'videos'
            Data.details.selectedType = 'series'
        } else {
            var button = Display.details.buttons[Display.details.currentButton];
            //Data.details.selectedType = 'videos'
            if (button.classList[0] === 'btn-favorite') {
                Navigation.details_toggleFavorite();
                //var display_index = Display.details.carousels[Display.details.currentCarousel].currentItem;
                // // // // // // // // // console.log("Display.details.carousels: ", Data.details.currentVideo._links.self.href);
                // Server.save_watchlist(Data.details.currentVideo._links.self.href);

            } else if (button.classList[0] === 'btn-play') {

                Controller.showSpinner();
                Controller.showPlayer();
                mixpanel.track("play", {
                    "video": Data.details.currentVideo.name
                });

                Player.setResume(0);



                Player.resetAllUrl();

                Server.home_fetchPlaybackURL(Data.details.currentVideo._links.files.href);
                //Server.getVideoById(Data.home.currentVideo._links.files.href);


                // Display.details_openVideo();

            } else if (button.classList[0] === 'btn-subscribe') {
               console.log(Data.details.currentVideo)
                Display.homeContainer.innerHTML = '';
                Display.home.carousels = [];
                Display.home.currentCarousel = 0;
                if (Data.user.loginUser.status == true) {
                    //  Controller.hideVideo();
                    Controller.hide("video");
                    Controller.showSetting();

                } else {
                    Controller.showAuth("signin");
                }
                // Display.auth_createPage(Main.code);
            } else if (button.classList[0] === 'btn-resume') {

                Controller.showSpinner();
                Controller.showPlayer();
                Data.playerFrom = 'details';
                Data.player.playlistID = Data.home.selectedId;
                Data.player.currentItem = Display.details.carousels[Display.details.currentCarousel].currentItem;

                if (Data.home.selectedType === 'series') {
                    Data.player.playlist = Data.details.episodes[Display.details.currentCarousel];
                } else {
                    Data.player.playlist = Data.details.videos;
                }
                // // // console.log("Data.details.currentVideo.resumeTime = ", Data.details.currentVideo.resumeTime);
                Player.setResume(Data.details.currentVideo.resumeTime);
                mixpanel.track("resume", {
                    "video": Data.details.currentVideo.name,
                    "resumeTime": Data.details.currentVideo['resumeTime']
                });
                Player.resetAllUrl();

                if (Data.home.selectedType === 'Series' || Data.home.selectedType === 'video' || Data.home.selectedType === 'series') {
                    // // // // // // // // // // // console.log("Data.details.currentVideo = " + JSON.stringify(Data.details.currentVideo._links.files.href));
                    //Server.home_fetchPlaybackURL(Data.details.currentVideo.id);
                    Server.home_fetchPlaybackURL(Data.details.currentVideo._links.files.href);
                } else {
                    //Server.home_fetchPlaybackURL(Data.details.currentVideo.id);
                    Server.home_fetchPlaybackURL(Data.details.currentVideo._links.files.href);
                }

            }
        }
    } else if (Navigation.details.FOCUS === 'carousel') {
        var currentCarousel = Display.details.carousels[Display.details.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
        // currentCarousel.items[currentCarousel.currentItem].style.cssText = 'border: 4.5px solid transparent;';


        Display.details.currentButton = 0;
        Display.details.buttons[0].parentNode.classList.remove('hide');
        Display.details.buttons[Display.details.currentButton].classList.add('active');
        Display.details.buttons[Display.details.currentButton].style.cssText = 'border: 4.5px solid #fffcfc;';
        Navigation.details.FOCUS = 'details';
    }
}

/**
 * Handles RIGHT key
 */
Navigation.details_handleRight = function() {
    if (Navigation.details.FOCUS === 'details') {
        Navigation.details_shiftButtons('right');
        //     Navigation.details_toggleArrows();
    } else if (Navigation.details.FOCUS === 'carousel') {
        Navigation.details_shiftRegularCarousel('right');
        //     Navigation.details_toggleArrows();
    }
}

/**
 * Handles LEFT key
 */
Navigation.details_handleLeft = function() {
    if (Navigation.details.FOCUS === 'details') {
        Navigation.details_shiftButtons('left');
        //   Navigation.details_toggleArrows();
    } else if (Navigation.details.FOCUS === 'carousel') {
        Navigation.details_shiftRegularCarousel('left');
        // Navigation.details_toggleArrows();
    }
}

/**
 * Handles UP key
 */
Navigation.details_handleUp = function() {
    if (Navigation.details.FOCUS === 'details')
        return;

    if (Navigation.details.FOCUS === 'carousel') {
        if (Display.details.currentCarousel === 0) {
            var currentCarousel = Display.details.carousels[Display.details.currentCarousel];
            currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
            // currentCarousel.items[currentCarousel.currentItem].style.cssText = 'border: 4.5px solid transparent;';

            if (Display.details.buttons[Display.details.currentButton] == undefined) {
                Display.details.currentButton = 0;
            }

            Display.details.buttons[0].parentNode.classList.remove('hide');
            Display.details.buttons[Display.details.currentButton].classList.add('active');
            Display.details.buttons[Display.details.currentButton].style.cssText = 'border: 4.5px solid ' + Main.detail_page_button_focus_color;
            Navigation.details.FOCUS = 'details';
            Navigation.details_toggleArrows();

        } else {
            Navigation.details_shiftUp();
        }
    }
    Navigation.details_toggleArrows();
}

/**
 * Handles DOWN key
 */
Navigation.details_handleDown = function() {
    console.log(Display.home.currentCarousel);
    if (Navigation.details.FOCUS === 'details') {
        var currentCarousel = Display.details.carousels[Display.details.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
        //  currentCarousel.querySelectorAll('.carousel li.active .img').style.cssText = 'outline: 4.5px solid ' + Main.coverart_focus_color;
        //  currentCarousel.items[currentCarousel.currentItem].style.cssText = 'border: 4.5px solid ' + Main.coverart_focus_color;

        Display.details.buttons[0].parentNode.classList.add('hide');
        Display.details.buttons[Display.details.currentButton].classList.remove('active');
        Display.details.buttons[Display.details.currentButton].style.cssText = 'border: 4.5px solid transparent';

        Navigation.details.FOCUS = 'carousel';

        Navigation.details_toggleArrows();
    } else if (Navigation.details.FOCUS === 'carousel') {
        Navigation.details_shiftDown();
        Navigation.details_toggleArrows();
    }
}


Navigation.home_handleUp = function() {

    if (Display.home.currentCarousel === 0) {

        // TBD to top navigation
        var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');

        var currentCarousel = Display.home.menu[0];
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
        // Display.home.searchButton.classList.add('active');
        Navigation.home.FOCUS = 'menu';
    } else if (Navigation.home.FOCUS === 'regular') {
        Navigation.home_shiftUp();
    }
}

/**
 * Handles DOWN key
 */
Navigation.home_handleDown = function() {

    //var Searchbtn = document.getElementById('button-search');
    //var Settingbtn = document.getElementById('button-setting');
    console.log(Display.home.currentCarousel);

    if (Display.home.currentCarousel === 1) {

        // document.querySelector('.carousels-outer').style.cssText = 'top:-650px;';
        // document.querySelector('#carousel-large').style.cssText = 'top:-650px;';
    } else if (Display.home.currentCarousel === 2) {

    } else if (Display.home.currentCarousel === 3) {

    }
    /////
    if (Navigation.home.FOCUS === 'large') {
        Navigation.home.FOCUS = 'regular';
        Navigation.home_shiftDown();
    } else if (Navigation.home.FOCUS === 'regular') {
        Navigation.home_shiftDown();
    } else if (Navigation.home.FOCUS === 'menu') {

        var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
        Navigation.home.FOCUS = 'regular';
        var currentCarousel = Display.home.menu[0];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    }
}

/**
 * Handle BACK key
 */
Navigation.details_handleBack = function() {
    mixpanel.track("back to home-screen");
    //  // // // console.log("detail-content = ", document.querySelector(".detail-content").innerHTML);
    //  document.querySelector(".detail-content").innerHTML = '';
    //  document.querySelector(".detail-carousel").innerHTML = '';
    // Display.detailContainer.innerHTML = '';
    // Display.home_updateHome();
    console.log(Data.home.selectedType)
    console.log(Data.details.selectedType)
    if (Data.details.selectedType == 'series') {
        Display.detailContainer.innerHTML = ''
        currentCarousel = Display.home.carousels[Display.home.currentCarousel];
        console.log(currentCarousel.currentItem)
        currentItem = Data.home.playlists[Display.home.currentCarousel - 1].items[currentCarousel.currentItem];
        Controller.showVideo({
            type: 'series',
            id: currentItem.id,
            data: currentItem
        });
        Data.details.selectedType = 'video'
    } else {
        Display.detailContainer.innerHTML = ''
        Data.home.selectedType = ''
        Controller.hide('video')
        Controller.show('home')
    }
}

/**
 * jayant added for test //
 */

Navigation.details_setFocus = function(focus, opts) {
    // Prevents set focus on 3th row
    // console.log("Display.details.currentButton = ", Display.details.currentButton);
    // console.log("Display.details.buttons = ", Display.details.buttons);
    if (focus === 'carousel' &&
        Navigation.details.FOCUS === 'carousel' &&
        opts.row > Display.details.currentCarousel) {
        return;
    }

    var currentCarousel = Display.details.carousels[Display.details.currentCarousel];
    if (currentCarousel.currentItem !== undefined) {
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    }

    if (typeof Display.details.buttons[Display.details.currentButton] != 'undefined') {
        Display.details.buttons[Display.details.currentButton].classList.remove('active');
    }

    Navigation.details.FOCUS = focus;

    if (focus === 'details') {
        var index = -1;
        //Display.details.buttons.forEach(function(item, i) {
        for (i = 0; i < Display.details.buttons.length; i++) {
            if (Display.details.buttons[i].id === opts.id)
                index = i;
        };
        Display.details.currentButton = index;
        Display.details.buttons[Display.details.currentButton].classList.add('active');
    } else if (focus === 'carousel') {
        Display.details.currentCarousel = opts.row;
        currentCarousel = Display.details.carousels[Display.details.currentCarousel];
        currentCarousel.currentItem = opts.item;
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
        Display.details_updateCover();
    }

    Navigation.details_toggleArrows();
}
Navigation.home_setFocus = function(focus, opts) {
    // console.log("i am in set focus");

    // Prevents set focus on 3th row
    // if (focus === 'regular' &&
    //   Navigation.home.FOCUS === 'regular' &&
    //   opts.row > Display.home.currentCarousel) {
    //   return;
    // }
    //to remove hover with keys+
    var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    //to remove hover with mousehover
    currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    //to remove focus from search
    Display.home.searchButton.classList.remove('active');
    Display.home.profileButton.classList.remove('active');

    if (focus === 'search') {
        Display.home.searchButton.classList.add('active');
        Navigation.home.FOCUS = focus;
        return
    } else if (focus === 'profile') {
        Display.home.profileButton.classList.add('active');
        Navigation.home.FOCUS = focus;
        return
    } else if (opts) {
        currentCarousel = Display.home.carousels[opts.row];
        if (opts.item !== undefined) {
            currentCarousel.currentItem = opts.item;
        }
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
    }
    if (Navigation.home.keyEvent == true) {
        Navigation.home.FOCUS = focus;
    }

    //Navigation.home_toggleArrows();
    // //Navigation.home_toggleArrows();
    var wrapper_top = document.getElementById('wrapper-toggle');

    //arrows on hover
    //get wrappers to check  :  wrapper_top.classList.contains('active')
    //  if(Navigation.home.FOCUS === 'regular' &&  Display.home.currentCarousel <= 2 && wrapper_top.classList.contains('active')){
    // // if(wrapper_top.classList.contains('active')){
    // //           toggleFixed();
    // //                   toggleCrLarge();
    // //               document.querySelector('#nav-home-arrows').style.cssText = 'top: 560px;';
    // //       if(Main.header_playlist_id != null){
    // //       document.querySelector('.carousels-outer').style.cssText = 'padding-top:20px;top:0px';
    // //       document.querySelector('#carousel-large').style.cssText = 'top: 0px;';
    // //           }
    // // }
    // document.querySelector('#nav-home-arrows').style.cssText = 'top: 560px;';
    //  }else


    //set arrows
    if (focus === 'large' && !(wrapper_top.classList.contains('active'))) {
        //  document.querySelector('#nav-home-arrows').style.cssText = 'top: 227px;';
        Navigation.home.cursorValue = opts.row;
        Navigation.home.FOCUS = focus;
    } else if (focus === 'regular') {
        var currentUlheight = document.getElementById(opts.id);
        var rect = currentUlheight.getBoundingClientRect();
        document.querySelector('#nav-home-arrows').style.cssText = "top :" + (rect.top + 70) + "px;";

    }
    //set navigation cursor value to current cursor
    if (focus === 'regular') {
        Navigation.home.cursorValue = opts.row;
    }
    // console.log("in set focus focus setted as " + Navigation.home.FOCUS);

}

/**
 * Navigate details buttons
 */
Navigation.details_shiftButtons = function(direction) {
    if ((direction === 'right' && Display.details.currentButton === Display.details.buttons.length - 1) ||
        (direction === 'left' && Display.details.currentButton === 0)) {
        return;
    }

    Display.details.buttons[Display.details.currentButton].classList.remove('active');
    Display.details.buttons[Display.details.currentButton].style.cssText = 'border: 4.5px solid transparent';

    Display.details.currentButton += direction === 'right' ? 1 : -1;
    Display.details.buttons[Display.details.currentButton].classList.add('active');
    Display.details.buttons[Display.details.currentButton].style.cssText = 'border: 4.5px solid #fffcfc;'
}

Navigation.home_shiftButtons = function(direction) {
    if ((direction === 'right' && Display.home.currentButton === Display.home.buttons.length - 1) ||
        (direction === 'left' && Display.home.currentButton === 0)) {
        return;
    }

    Display.home.buttons[Display.home.currentButton].classList.remove('active');
    Display.home.buttons[Display.home.currentButton].style.cssText = 'border: 4.5px solid transparent';

    Display.home.currentButton += direction === 'right' ? 1 : -1;
    Display.home.buttons[Display.home.currentButton].classList.add('active');
    Display.home.buttons[Display.home.currentButton].style.cssText = 'border: 4.5px solid #fffcfc';
}

/**
 * Navigate regular carousel
 */

Navigation.details_shiftRegularCarousel = function(direction) {

    // console.log("Navigation.details_shiftRegularCarousel");

    var currentCarousel = Display.details.carousels[Display.details.currentCarousel];

    if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) ||
        (direction === 'left' && currentCarousel.currentItem === 0)) {
        return;
    }
    //test jayant


    //
    var loaderImg = "img/favicon-194x194.png"
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    currentCarousel.currentItem += direction === 'right' ? 1 : -1;
    currentCarousel.items[currentCarousel.currentItem].classList.add('active');

    var rect = currentCarousel.items[currentCarousel.currentItem].getBoundingClientRect();

    if (direction === 'right' && rect.right > Display.screen.width - 50) {
        //test
        currentCarousel.translateX -= currentCarousel.itemWidth;
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
    } else if (direction === 'left' && rect.left < 0) {
        currentCarousel.translateX += currentCarousel.itemWidth;
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
    }

    //
    Display.details_updateCover();

    if (direction === 'left') {
        if (Data.home.selectedType == "episodes") {
            if (currentCarousel.items[currentCarousel.currentItem - 6] != 'undefined') {
                //currentCarousel.items[currentCarousel.currentItem + 6].
            }
            if (currentCarousel.items[currentCarousel.currentItem + 6] != 'undefined') {
                //currentCarousel.items[currentCarousel.currentItem - 6].
            }
        } else if (Data.home.selectedType == "playlist") {
            if (currentCarousel.items[currentCarousel.currentItem - 6] != undefined) {
                for (i = 0; i < 7; i++) {
                    currentCarousel.items[currentCarousel.currentItem - i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem - i].thumbnail.small + ")";
                }
            } else if (currentCarousel.currentItem < 7) {
                for (i = 0; i < 7; i++) {
                    currentCarousel.items[i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[i].thumbnail.small + ")";
                }
            }
            if (currentCarousel.items[currentCarousel.currentItem + 6] != undefined) {
                currentCarousel.items[currentCarousel.currentItem + 6].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }

        } else if (Data.home.selectedType == "playlists") {

            if (currentCarousel.items[currentCarousel.currentItem - 6] != undefined) {
                for (i = 0; i < 7; i++) {
                    currentCarousel.items[currentCarousel.currentItem - i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem - i].thumbnail.small + ")";
                }
            } else if (currentCarousel.currentItem < 7) {
                for (i = 0; i < 7; i++) {
                    currentCarousel.items[i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.playlist[i].thumbnail.small + ")";
                }
            }
            if (currentCarousel.items[currentCarousel.currentItem + 6] != undefined) {
                currentCarousel.items[currentCarousel.currentItem + 6].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }

        } else if (Data.home.selectedType == "seasons") {
            if (currentCarousel.items[currentCarousel.currentItem - 6] != undefined) {
                for (i = 0; i < 7; i++) {
                    currentCarousel.items[currentCarousel.currentItem - i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem - i].thumbnail.small + ")";
                }
            } else if (currentCarousel.currentItem < 7) {
                for (i = 0; i < 7; i++) {
                    currentCarousel.items[i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.playlist[i].thumbnail.small + ")";
                }
            }
            if (currentCarousel.items[currentCarousel.currentItem + 6] != undefined) {
                currentCarousel.items[currentCarousel.currentItem + 6].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }

        } else if (Data.home.selectedType == "search") {
            // if (currentCarousel.items[currentCarousel.currentItem - 6] != undefined) {
            //     for(i=0; i<7; i++){
            //         currentCarousel.items[currentCarousel.currentItem - i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem - i].thumbnail.small + ")";
            //     }
            // } else if(currentCarousel.currentItem < 7){
            //     for(i=0; i<7; i++){
            //          currentCarousel.items[i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[i].coverart.medium + ")";
            //     }
            // }
            // if (currentCarousel.items[currentCarousel.currentItem + 6] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 6].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            // }
            if (typeof currentCarousel.items[currentCarousel.currentItem + 5] != 'undefined') {
                currentCarousel.items[currentCarousel.currentItem + 5].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }

            if (typeof currentCarousel.items[currentCarousel.currentItem - 5] != 'undefined') {
                currentCarousel.items[currentCarousel.currentItem - 4].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem - 4].coverart.medium + ")"
                currentCarousel.items[currentCarousel.currentItem - 5].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem - 5].coverart.medium + ")"
            }


        } else if (Data.home.selectedType == "series") {
            // if (currentCarousel.items[currentCarousel.currentItem - 6] != undefined) {
            //     for (i = 0; i < 7; i++) {
            //         currentCarousel.items[currentCarousel.currentItem - i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem - i].thumbnail.small + ")";
            //     }
            //     // console.log("changed background name " + Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem - 6].description);
            // } else if (currentCarousel.currentItem < 7) {
            //     for (i = 0; i < 7; i++) {
            //         currentCarousel.items[i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.episodes[Display.details.currentCarousel][i].thumbnail.small + ")";
            //     }
            // }
            // if (currentCarousel.items[currentCarousel.currentItem + 6] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 6].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            // }
            // if (currentCarousel.items[currentCarousel.currentItem - 6] != undefined) {
            //     for (i = 0; i < currentCarousel.items.length; i++) {
            //         currentCarousel.items[currentCarousel.currentItem - i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem - i].thumbnail.small + ")";
            //     }
            // } else if (currentCarousel.currentItem < 7) {
            //     for (i = 0; i < currentCarousel.items.length; i++) {
            //         currentCarousel.items[i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[i].thumbnail.small + ")";
            //     }
            // }
            // if (currentCarousel.items[currentCarousel.currentItem + 6] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 6].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            // }
        } else if (Data.home.selectedType == "videos") {
            if (currentCarousel.items[currentCarousel.currentItem + 6] != undefined) {
                //  currentCarousel.items[currentCarousel.currentItem + 6].getElementsByClassName("img")[0].style = " background-image:url("+Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem + 6].thumbnail.small+")";
            }
            if (currentCarousel.items[currentCarousel.currentItem - 6] != undefined) {
                //  currentCarousel.items[currentCarousel.currentItem - 6].getElementsByClassName("img")[0].style = " background-image:url("+loaderImg+")";
            }

        } else if (  Data.home.selectedType == "video") {
            if (currentCarousel.items[currentCarousel.currentItem - 6] != undefined) {
                for (i = 0; i < 7; i++) {
                    currentCarousel.items[currentCarousel.currentItem - i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem - i].thumbnail.small + ")";
                }
            } else if (currentCarousel.currentItem < 7) {
                for (i = 0; i < 7; i++) {
                    currentCarousel.items[i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.playlist[i].thumbnail.small + ")";
                }
            }
            if (currentCarousel.items[currentCarousel.currentItem + 6] != undefined) {
                currentCarousel.items[currentCarousel.currentItem + 6].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }

        } else if (Data.home.selectedType == "resume") {
            // if (currentCarousel.items[currentCarousel.currentItem - 6] != undefined) {
            //   //  for(i=0; i<7; i++){
            //         currentCarousel.items[currentCarousel.currentItem - i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 1].coverart.medium + ")";
            //     //}
            // } else if(currentCarousel.currentItem < 7){
            //     //for(i=0; i<7; i++){
            //         currentCarousel.items[i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 1].coverart.medium + ")";
            //    // }
            // }
            // if (currentCarousel.items[currentCarousel.currentItem + 6] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 6].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            // }

            if (typeof currentCarousel.items[currentCarousel.currentItem + 5] != 'undefined') {
                currentCarousel.items[currentCarousel.currentItem + 5].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }

            if (typeof currentCarousel.items[currentCarousel.currentItem - 5] != 'undefined') {
                currentCarousel.items[currentCarousel.currentItem - 4].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem - 4].coverart.medium + ")"
                currentCarousel.items[currentCarousel.currentItem - 5].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem - 5].coverart.medium + ")"
            }




        }

    } else if (direction === 'right') {

        // console.log("currentCarousel.currentItem " + currentCarousel.currentItem);
        // console.log("next 2nnd item " + currentCarousel.items[currentCarousel.currentItem + 2]);

        if (Data.home.selectedType == "episodes") {
            // if (currentCarousel.items[currentCarousel.currentItem + 7] != 'undefined') {
            //     //currentCarousel.items[currentCarousel.currentItem + 7].
            // }
            if (currentCarousel.items[currentCarousel.currentItem - 7] != 'undefined') {
                //currentCarousel.items[currentCarousel.currentItem - 7].
            }
            if (currentCarousel.items[currentCarousel.currentItem + 2] != 'undefined') {
                currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style.cssText = " background-image:url('img/189792.png')";
            }
        } else if (Data.home.selectedType == "playlist") {
            // if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 7].thumbnail.small + ")";
            // }
            if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
                currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }

            if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
                currentCarousel.items[currentCarousel.currentItem + 1].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 1].thumbnail.small + ")";
                currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 2].thumbnail.small + ")";
            }

        } else if (Data.home.selectedType == "playlists") {
            // if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 7].thumbnail.small + ")";
            // }
            if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
                currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }
            if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
                currentCarousel.items[currentCarousel.currentItem + 1].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 1].thumbnail.small + ")";
                currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 2].thumbnail.small + ")";
            }

        } else if (Data.home.selectedType == "seasons") {
            // if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 7].thumbnail.small + ")";
            // }
            if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
                currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }
            if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
                currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style.cssText = " background-image:url('img/189792.png')";
            }

        } else if (Data.home.selectedType == "search") {
            // if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 7].thumbnail.small + ")";
            // }
            if (typeof currentCarousel.items[currentCarousel.currentItem - 7] != 'undefined') {
                currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }

            if (typeof currentCarousel.items[currentCarousel.currentItem + 2] != 'undefined') {
                currentCarousel.items[currentCarousel.currentItem + 1].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 1].coverart.medium + ")"
                currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 2].coverart.medium + ")"
            }

        } else if (Data.home.selectedType == "series") {
            // if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem + 7].thumbnail.small + ")";
            // }
            // if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            // }

            // if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 1].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem + 1].thumbnail.small + ")";
            //     currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem + 2].thumbnail.small + ")";
            // }
        } else if (Data.home.selectedType == "videos") {
            // if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
            //     //  currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url("+Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem + 7].thumbnail.small+")";
            // }
            if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
                //  currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url("+loaderImg+")";
            }

            // if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style.cssText = " background-image:url('img/189792.png')";
            // }
            

        } else if ( Data.home.selectedType == "video") {
            if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
                currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }
            if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
                currentCarousel.items[currentCarousel.currentItem + 1].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 1].thumbnail.small + ")";
                currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 2].thumbnail.small + ")";
            }
        } else if (Data.home.selectedType == "resume") {
            // if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
            //     currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.home.first_playlist_row[currentCarousel.currentItem + 7].thumbnail.small + ")";
            // }
            if (typeof currentCarousel.items[currentCarousel.currentItem - 7] != 'undefined') {
                currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + loaderImg + ")";
            }

            if (typeof currentCarousel.items[currentCarousel.currentItem + 2] != 'undefined') {
                currentCarousel.items[currentCarousel.currentItem + 1].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 1].coverart.medium + ")"
                currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 2].coverart.medium + ")"
            }
        }
    }

    Display.setTimerToUpdateCover();

}

// Navigation.details_shiftRegularCarousel = function(direction) {
//   var currentCarousel = Display.details.carousels[Display.details.currentCarousel];

//   if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) ||
//       (direction === 'left' && currentCarousel.currentItem === 0)) {
//     return;
//   }
// //test jayant


// if(currentCarousel.currentItem > 9 ){
//  // console.log("currentCarousel.currentItem " + currentCarousel.currentItem);
// }


// //
//  var loaderImg = "img/favicon-194x194.png"
//   currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
//   currentCarousel.currentItem += direction === 'right' ? 1 : -1;
//   currentCarousel.items[currentCarousel.currentItem].classList.add('active');

//   var rect = currentCarousel.items[currentCarousel.currentItem].getBoundingClientRect();

// if (direction === 'right' && rect.right > Display.screen.width - 50) {


//     if (currentCarousel.currentItem >= 6 && currentCarousel.currentItem <= currentCarousel.items.length - 2) {
//         // console.log("currentCarousel.currentItem " + currentCarousel.currentItem);
//         // console.log("next 2nnd item " + currentCarousel.items[currentCarousel.currentItem + 2]);

//         if (Data.home.selectedType == "episodes") {
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != 'undefined') {
//                 //currentCarousel.items[currentCarousel.currentItem + 7].
//             }
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != 'undefined') {
//                 //currentCarousel.items[currentCarousel.currentItem - 7].
//             }
//             if (currentCarousel.items[currentCarousel.currentItem + 2] != 'undefined') {
//                 currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style = " background-image:url('img/189792.png')";
//             }
//         } else if (Data.home.selectedType == "playlist") {
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }

//             if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 2].thumbnail.small + ")";
//             }

//         } else if (Data.home.selectedType == "playlists") {
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 2].thumbnail.small + ")";
//             }

//         } else if (Data.home.selectedType == "seasons") {
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style = " background-image:url('img/189792.png')";
//             }

//         } else if (Data.home.selectedType == "search") {
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }

//             if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.videos[currentCarousel.currentItem + 2].thumbnail.small + ")";
//             }


//         } else if (Data.home.selectedType == "series") {
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem + 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }

//             if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem + 2].thumbnail.small + ")";
//             }
//         } else if (Data.home.selectedType == "videos") {
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 //   currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url("+Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem + 7].thumbnail.small+")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 //   currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url("+loaderImg+")";
//             }

//             if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style = " background-image:url('img/189792.png')";
//             }

//         } else if (Data.home.selectedType == "video") {
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem + 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }
//         } else if (Data.home.selectedType == "resume") {
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.home.first_playlist_row[currentCarousel.currentItem + 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }

//             if (currentCarousel.items[currentCarousel.currentItem + 2] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 2].getElementsByClassName("img")[0].style = " background-image:url(" + Data.home.first_playlist_row[currentCarousel.currentItem + 2].thumbnail.small + ")"
//             }
//         }
//     }    //test
//     currentCarousel.translateX -= currentCarousel.itemWidth;
//     currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
//  } else if (direction === 'left' && rect.left < 0) {
//      currentCarousel.translateX += currentCarousel.itemWidth;
//      currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
//  }
//  if(direction === 'left'){


//         if (Data.home.selectedType == "episodes") {
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != 'undefined') {
//                 //currentCarousel.items[currentCarousel.currentItem + 7].
//             }
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != 'undefined') {
//                 //currentCarousel.items[currentCarousel.currentItem - 7].
//             }
//         } else if (Data.home.selectedType == "playlist") {
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.videos[currentCarousel.currentItem - 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }

//         } else if (Data.home.selectedType == "playlists") {

//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem - 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }


//         } else if (Data.home.selectedType == "seasons") {
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem - 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }

//         } else if (Data.home.selectedType == "search") {
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.videos[currentCarousel.currentItem - 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }

//         } else if (Data.home.selectedType == "series") {
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem - 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }

//         } else if (Data.home.selectedType == "videos") {
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 //   currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url("+Data.details.episodes[Display.details.currentCarousel][currentCarousel.currentItem + 7].thumbnail.small+")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 //   currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url("+loaderImg+")";
//             }

//         } else if (Data.home.selectedType == "video") {
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.details.playlist[currentCarousel.currentItem - 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }

//         } else if (Data.home.selectedType == "resume") {
//             if (currentCarousel.items[currentCarousel.currentItem - 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem - 7].getElementsByClassName("img")[0].style = " background-image:url(" + Data.home.first_playlist_row[currentCarousel.currentItem - 7].thumbnail.small + ")";
//             }
//             if (currentCarousel.items[currentCarousel.currentItem + 7] != undefined) {
//                 currentCarousel.items[currentCarousel.currentItem + 7].getElementsByClassName("img")[0].style = " background-image:url(" + loaderImg + ")";
//             }
//         }

//     }


// }
//   //Display.setTimerToUpdateCover();
//   Display.details_updateCover();
// }

/**
 * Navigate up
 */
Navigation.details_shiftUp = function() {
    if (Display.details.currentCarousel === 0)
        return;
    var currentCarousel = Display.details.carousels[Display.details.currentCarousel];
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    Display.details.currentCarousel -= 1;
    currentCarousel = Display.details.carousels[Display.details.currentCarousel];
    currentCarousel.items[currentCarousel.currentItem].classList.add('active');

    Display.details.carouselsContainerTranslateY += currentCarousel.containerHeight;
    Display.details.carouselsContainer.style.cssText = '-webkit-transform: translateY(' + Display.details.carouselsContainerTranslateY + 'px)';
    // Display.setTimerToUpdateCover();
    Display.details_updateCover();
}

/**
 * Navigate down
 */
Navigation.details_shiftDown = function() {
    if (Display.details.currentCarousel === Display.details.carousels.length - 1)
        return;
    var currentCarousel = Display.details.carousels[Display.details.currentCarousel];
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    Display.details.currentCarousel += 1;
    currentCarousel = Display.details.carousels[Display.details.currentCarousel];
    currentCarousel.items[currentCarousel.currentItem].classList.add('active');

    Display.details.carouselsContainerTranslateY -= currentCarousel.containerHeight;
    Display.details.carouselsContainer.style.cssText = '-webkit-transform: translateY(' + Display.details.carouselsContainerTranslateY + 'px)';
    //  Display.setTimerToUpdateCover();
    Display.details_updateCover();
}
Navigation.home_shiftDown = function() {
    if (Display.home.currentCarousel === Display.home.carousels.length - 1) return;

    var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    Display.home.currentCarousel += 1;
    currentCarousel = Display.home.carousels[Display.home.currentCarousel];
    currentCarousel.items[currentCarousel.currentItem].classList.add('active');

    if (Display.home.currentCarousel > 0) {
        Display.home.carouselsContainerTranslateY -= currentCarousel.containerHeight;
        Display.home.carouselsContainer.style.cssText = '-webkit-transform: translateY(' + Display.home.carouselsContainerTranslateY + 'px)';
    }
}

Navigation.home_shiftUp = function() {
    if (Display.home.currentCarousel === 0) return;
    var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    Display.home.currentCarousel -= 1;
    currentCarousel = Display.home.carousels[Display.home.currentCarousel];
    currentCarousel.items[currentCarousel.currentItem].classList.add('active');

    if (Display.home.currentCarousel > 0) {
        Display.home.carouselsContainerTranslateY += currentCarousel.containerHeight;
        Display.home.carouselsContainer.style.cssText = '-webkit-transform: translateY(' + Display.home.carouselsContainerTranslateY + 'px)';
    }
    if (Display.home.currentCarousel === 0) {
        Display.home.carouselsContainerTranslateY += currentCarousel.containerHeight;
        Display.home.carouselsContainer.style.cssText = '-webkit-transform: translateY(0px)';
        Display.home.carouselsContainerTranslateY = 0;
    }
}

/**
 * Handles RIGHT key
 */
Navigation.home_handleRight = function() {
    if (Navigation.home.FOCUS === 'large') {
        Navigation.home_shiftLarge('right');
    } else if (Navigation.home.FOCUS === 'regular') {
        Navigation.home_shiftRegular('right');
    } else if (Navigation.home.FOCUS === 'menu') {
        Navigation.home_shiftMenu('right');
        // Navigation.home.FOCUS = 'search';
        // Display.home.profileButton.classList.remove('active');
        // Display.home.searchButton.classList.add('active');
    }
}

/**
 *
 */
Navigation.home_handleReturn = function() {
    if (Main.linked === true) {
        mixpanel.track("closing app", {
            "page": "home-screen"
        });
        Display.handle_exit();
        Data.home.regular_carousel_loaded = 0
            //  window.close();
    } else {
        //  window.close();
        Controller.showAuth();
        Data.home.regular_carousel_loaded = 0
        mixpanel.track("back to auth-screen");
        Display.home.alreadyRendered = true;
        //   Display.auth_createPage(Main.code);
        //  Server.auth_clientStatus();
    }
}

/**
 * Handles LEFT key
 */
Navigation.home_handleLeft = function() {
    if (Navigation.home.FOCUS === 'large') {
        Navigation.home_shiftLarge('left');
    } else if (Navigation.home.FOCUS === 'regular') {
        Navigation.home_shiftRegular('left');
    } else if (Navigation.home.FOCUS === 'menu') {
        Navigation.home_shiftMenu('left');
    }
}

/**
 * Handles UP key
 */
// Navigation.home_handleUp = function () {
//     // console.log("current carousel test of arrows = " + Display.home.currentCarousel);

//     if (Display.home.currentCarousel === 1) {
//         //toggleCrLarge();
//         // console.log(" i am inside 1 " + Display.home.currentCarousel);
//         if(Main.show_featured){
//          document.querySelector('#nav-home-arrows').style.cssText = 'top: 227px;';
//         }

//         //          document.querySelector('#nav-home-arrows').style.cssText = 'top: 870px';

//         //document.querySelector('#carousel-large').style.cssText = 'top:0px';


//         //  Navigation.home.FOCUS = 'large';
//     } else if (Display.home.currentCarousel === 2) {

//         if(Main.show_featured){
//          toggleFixed();
//         }
//         // console.log(" i am inside 2 " + Display.home.currentCarousel);
//         //  //Navigation.home_toggleArrows();
//         //pos : fixed to absolute
//         // document.querySelector('.nav-arrow.top').style.cssText = ' position :absolute;top: -70px;';
//         //          document.querySelector('.nav-arrow.bottom').style.cssText = ' position :absolute;';
//         //
//         if(Main.show_featured){
//          document.querySelector('#nav-home-arrows').style.cssText = 'top: 560px;';
//         }
//         if (Main.header_playlist_id != null && Main.show_featured) {
//             document.querySelector('.carousels-outer').style.cssText = 'padding-top:20px;top:0px';
//             document.querySelector('#carousel-large').style.cssText = 'top: 0px;';
//         }
//     } else if (Display.home.currentCarousel === 3) {
//         // console.log(" i am inside 3 " + Display.home.currentCarousel)
//         //document.querySelector('.carousels-outer').style.cssText = 'padding-top:365px;top:-621px';
//         if (Main.header_playlist_id != null && Main.show_featured) {

//             document.querySelector('.carousels-outer').style.cssText = 'padding-top:365px;top:-621px';
//             document.querySelector('#carousel-large').style.cssText = 'display:block;top:-635px';
//         }
//     }

//     // console.log("Navigation.home_handleUp = ", Navigation.home.FOCUS);
//     // console.log(Display.home.currentCarousel);
//     // console.log("Display.home.currentCarousel = ", Display.home.currentCarousel);
//     if (Navigation.home.FOCUS === 'large') {
//         // TBD to top navigation
//         //mouse event
//         var currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
//         currentCarousel.items[currentCarousel.currentItem].classList.remove('active');

//         var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
//         currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
//         Display.home.searchButton.classList.add('active');
//         Navigation.home.FOCUS = 'search';
//         //Navigation.home_toggleArrows();
//     } else if (Navigation.home.FOCUS === 'regular') {
//         var currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
//         currentCarousel.items[currentCarousel.currentItem].classList.remove('active');

//         if (Display.home.currentCarousel === 0) {
//             if (typeof Data.home.largeCarousel != 'undefined' && Data.home.largeCarousel.length > 0) {

//                 if (Navigation.home.cursorValue === 1) {
//                     document.querySelector('#nav-home-arrows').style.cssText = 'top: 227px;';
//                     //Navigation.home_toggleArrows();
//                     //Navigation.home_shiftUp();
//                 }

//                 Navigation.home.FOCUS = 'large';
//                 // console.log("calling shift up");
//                 // Navigation.home_shiftUp();

//             } else {
//                 var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
//                 currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
//                 Display.home.searchButton.classList.add('active');
//                 Navigation.home.FOCUS = 'search';
//             }
//         } else {
//             Navigation.home_shiftUp();
//         }
//     }

// }

/**
 * Handles DOWN key
 */
// Navigation.home_handleDown = function () {
//     // // // // console.log("Navigation.home_handleDown = ", Navigation.home.FOCUS);
//     //test

//     //test todo comment undergiven logic if we have regular carousel
//     if(Display.home.currentCarousel === 0 && Navigation.home.FOCUS === 'large') return;

//     if(Display.home.currentCarousel >= Display.home.carousels.length -1) return;
//     if (Navigation.home.cursorValue === 2) {}
//     //
//     //toggleHomeArrow(Navigation.home.FOCUS , Display.home.currentCarousel);
//     if (Display.home.currentCarousel === 1) {
//         //toggleCrLarge();
//         toggleFixed();
//         if (Main.header_playlist_id != null) {
//             document.querySelector('#nav-home-arrows').style = 'top: 550px;';
//             document.querySelector('.carousels-outer').style.cssText = 'padding-top:365px;top:-621px';
//             //fixed arrow after third down
//      //       document.querySelector('.nav-arrow.top').style.cssText = ' position :fixed; top: 0px;';
//      //       document.querySelector('.nav-arrow.bottom').style.cssText = ' position :fixed; bottom:0px;';

//             //
//             document.querySelector('#carousel-large').style.cssText = 'top: -635px';
//         }

//         //  Navigation.home.FOCUS = 'large';

//     } else if (Display.home.currentCarousel === 2) {
//         if (Main.header_playlist_id != null) {
//             document.querySelector('.carousels-outer').style.cssText = 'padding-top: 1102px;top:-621px';

//             document.querySelector('#carousel-large').style.cssText = 'display:none';
//         }
//     } else if (Display.home.currentCarousel === 0) {}
//     if (Display.home.currentCarousel > 2) {
//         document.querySelector('#nav-home-arrows').style = 'top: 550px;';
//     }
//     if (Navigation.home.FOCUS === 'large' && Display.home.currentCarousel === 0 && Main.header_playlist_id != null) {
//         document.querySelector('#nav-home-arrows').style.cssText = 'top: 560px;';

//     }

//     //test
//     if (Navigation.home.FOCUS === 'large') {
//         Navigation.home.FOCUS = 'regular';
//         //Navigation.home_shiftDown();
//         Navigation.home_shiftDown();
//     } else if (Navigation.home.FOCUS === 'regular') {
//         //Navigation.home_shiftDown();
//         Navigation.home_shiftDown();
//     } else if (Navigation.home.FOCUS === 'search' || Navigation.home.FOCUS === 'profile') {
//         if (typeof Data.home.largeCarousel != 'undefined' && Data.home.largeCarousel.length > 0) {
//             //  toggleHomeArrow(Navigation.home.FOCUS , Display.home.currentCarousel);

//             // mouse event added
//             var currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
//             currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
//             //end
//             var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
//             currentCarousel.items[currentCarousel.currentItem].classList.add('active');
//             Display.home.profileButton.classList.remove('active');
//             Display.home.searchButton.classList.remove('active');
//             Navigation.home.FOCUS = 'large';
//             //Navigation.home_toggleArrows();

//         } else {
//             //mouse event sync with keybaord
//             var currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
//             currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
//             //
//             Display.home.profileButton.classList.remove('active');
//             Display.home.searchButton.classList.remove('active');
//             var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
//             currentCarousel.items[currentCarousel.currentItem].classList.add('active');
//             Navigation.home.FOCUS = 'regular';
//             //  Navigation.home_shiftDown();
//         }
//     }
// }

/**
 * Handles ENTER key
//  */
// Navigation.home_handleEnter = function (opts) {
//     //checking if large carousel is not null
//     if (Navigation.home.FOCUS === 'details') {

//         var button = Display.home.buttons[Display.home.currentButton];

//         if (button.classList[0] === 'btn-favorite') {
//             Navigation.home_toggleFavorite();
//             Display.home_updateHome();
//             //Display.home_updateCover();

//         } else if (button.classList[0] === 'btn-play') {

//             Data.playerFrom = 'home';
//             Controller.showSpinner();

//             mixpanel.track("play", {
//                 "video": Data.home.currentVideo.name
//             });


//             Server.home_fetchPlaybackURL(Data.home.currentVideo._links.files.href);
//             //Server.getVideoById(Data.home.currentVideo._links.files.href);


//             // Display.details_openVideo();

//         } else if (button.classList[0] === 'btn-subscribe') {
//             Controller.showAuth("signin");
//             Display.auth_createPage(Main.code);
//         } else if (button.classList[0] === 'btn-resume') {

//             Controller.showSpinner();
//             Controller.showPlayer();

//             Data.player.playlistID = Data.home.selectedId;
//             Data.player.currentItem = Display.details.carousels[Display.details.currentCarousel].currentItem;

//             if (Data.home.selectedType === 'series') {
//                 Data.player.playlist = Data.details.episodes[Display.details.currentCarousel];
//             } else {
//                 Data.player.playlist = Data.details.videos;
//             }

//             Player.setResume(Data.details.currentVideo['resumeTime']);
//             mixpanel.track("resume", {
//                 "video": Data.details.currentVideo.name,
//                 "resumeTime": Data.details.currentVideo['resumeTime']
//             });
//             Player.resetAllUrl();

//             if (Data.home.selectedType === 'Series' || Data.home.selectedType === 'video' || Data.home.selectedType === 'series') {
//                 // // // // // //// console.log("Data.details.currentVideo = " + JSON.stringify(Data.details.currentVideo._links.files.href));

//                 if (Data.details.currentVideo._links.length === 0) {
//                     //Popup.showError("Error", "Apologies. No video available. Please try again later.", "1", "");  return false;
//                     //   https://api.vhx.tv/videos/254546/files
//                     let Makeurl = "https://api.vhx.tv/videos/" + Data.details.currentVideo.id + "/files";
//                     Data.details.currentVideo["_links"]["files"] = {
//                         href: Makeurl
//                     }

//                 }


//                 Server.home_fetchPlaybackURL(Data.details.currentVideo._links.files.href);
//             } else {
//                 if (Data.details.currentVideo._links.length === 0) {
//                     //Popup.showError("Error", "Apologies. No video available. Please try again later.", "1", "");  return false;
//                     //   https://api.vhx.tv/videos/254546/files
//                     let Makeurl = "https://api.vhx.tv/videos/" + Data.details.currentVideo.id + "/files";
//                     Data.details.currentVideo["_links"]["files"] = {
//                         href: Makeurl
//                     }

//                 }
//                 Server.home_fetchPlaybackURL(Data.details.currentVideo._links.files.href);
//             }


//         }


//  } else if (Navigation.home.FOCUS === 'profile') {
//         mixpanel.track("show settings");
//         //         if(Data.packages.length === 0){
//         //           Server.home_fetchContentByType('subcription');
//         // }
//         Controller.hide(Controller.activeScene);
//         Controller.showSetting();
//     } else if (Navigation.home.FOCUS === 'regular') {
//      var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
//         currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
//         // currentCarousel.items[currentCarousel.currentItem].style.cssText = 'border: 4.5px solid transparent;';


//         Display.home.currentButton = 0;
//         Display.home.buttons[0].parentNode.classList.remove('hide');
//         Display.home.buttons[Display.home.currentButton].classList.add('active');
//     //    Display.details.buttons[Display.home.currentButton].style.cssText = 'border: 4.5px solid ' + Main.detail_page_button_focus_color;
//         Display.home.buttons[Display.home.currentButton].style.cssText = 'border: 4.5px solid '+Main.detail_page_button_focus_color;
//         Navigation.home.FOCUS = 'details';


//     } else if (Navigation.home.FOCUS === "search") {
//         // // // // // // // // // // console.log("search clicked");
//         mixpanel.track("start search");
//         Controller.showKeyboard();
//         //Navigation.home_toggleArrows();
//     }
// }


Navigation.home_handleEnter = function() {
        if (Navigation.home.FOCUS === 'menu') {
            var currentCarousel = Display.home.menu[0];
            var homeItem = currentCarousel.items[currentCarousel.homeItem];
            homeItem.classList.remove('active');

            var CurrentmenuItem = currentCarousel.items[currentCarousel.currentItem];
            CurrentmenuItem.classList.remove('hover');
            CurrentmenuItem.classList.add('active');
            var action = CurrentmenuItem.dataset.action;
            if (action == 'search') {
                mixpanel.track("start search");
                Controller.showKeyboard();
            } else if (action == 'home') {
                var homeItem = currentCarousel.items[currentCarousel.homeItem];
                homeItem.classList.add('active');
                Navigation.home_handleDown();
            } else if (action == 'profile') {
                CurrentmenuItem.classList.remove('active');
                CurrentmenuItem.classList.add('hover');
                var homeItem = currentCarousel.items[currentCarousel.homeItem];
                homeItem.classList.remove('hover');
                Controller.hide('home');
                Controller.showSetting();
                // Navigation.home_handleDown(); 
            }
        } else if (Navigation.home.FOCUS === 'large') {
            // // // // // console.log("Large ENTER");
            // var selectedItem = Display.home.carousels[Display.home.currentCarousel].currentItem;
            // var selectedId = Data.home.largeCarousel[selectedItem].id
            // // // // // // console.log('seriesID = ', selectedId);

            // Controller.showSpinner()
            // //var currentCarousel = Display.details.carousels[parseInt(Display.details.currentCarousel)];

            // Controller.showVideo({
            //     type: 'largecarousel',
            //     id: selectedId
            // });

            //// // // // // console.log(JSON.stringify(Display.home.carousels[Display.home.currentCarousel].currentItem));
            //// // // // // console.log(JSON.stringify(Data.home.series[Display.home.carousels[Display.home.currentCarousel].currentItem]));
        } else if (Navigation.home.FOCUS === 'profile') {
            mixpanel.track("show settings");
            Controller.showSetting();
        } else if (Navigation.home.FOCUS === 'regular') {
            // // // // // console.log('regular ENTER');
            var currentItem = Data.home.playlists[Display.home.currentCarousel - 1];

            //if(Data.home.favourites.length){
            // // // // console.log(Data.home.favorites.length);
            // }
            // // // // console.log(Data.home.resume.length);
            // // // // console.log("Data.home.currentCarousel = " + Display.home.currentCarousel);
            // // // // console.log("Data.home.playlists" , Data.home.playlists);

            //  if(Data.home.favourites.length && Data.home.resume.length){
            //   currentItem = Data.home.playlists[Display.home.currentCarousel-1];
            //  }
            // else{

            if (Data.home.playlists[0].id === "resume" && Data.home.playlists[1].id != "resume") {
                // // // // console.log("1 : RESUME");
                if (Main.linked === true) {
                    currentItem = Data.home.playlists[Display.home.currentCarousel - 1];
                } else {
                    currentItem = Data.home.playlists[Display.home.currentCarousel];
                }
            } else if (Data.home.playlists[0].id === "favorites" && Data.home.playlists[1].id === "resume" && Data.home.playlists[2].id != "resume") {
                // // // // console.log("1: FAVOURITE, 2: RESUME");
                currentItem = Data.home.playlists[Display.home.currentCarousel - 1];
            } else if (Data.home.playlists[0].id === "resume" && Data.home.playlists[1].id === "resume") {
                // // // // console.log("1, 2 : RESUME");
                currentItem = Data.home.playlists[Display.home.currentCarousel];
            } else if (Data.home.playlists[0].id === "favorites" && Data.home.playlists[1].id === "resume" && Data.home.playlists[2].id === "resume") {
                // // // // console.log("1: FAVOURITE, 2:RESUME, 3: RESUME");
                if (Display.home.currentCarousel === 1) {
                    currentItem = Data.home.playlists[Display.home.currentCarousel - 1];
                } else {
                    currentItem = Data.home.playlists[Display.home.currentCarousel];
                }
                /*
                if(Display.home.currentCarousel === 2){
                  currentItem = Data.home.playlists[Display.home.currentCarousel-1];
                } else{
                  currentItem = Data.home.playlists[Display.home.currentCarousel];
                }
                */
                //} else if(Data.home.playlists[0].id != "favourites" && Data.home.playlists[0].id != "resume" && Data.home.playlists[1].id != "favourites" && Data.home.playlists[1].id != "resume"){
                //  currentItem = Data.home.playlists[Display.home.currentCarousel];
            } else {
                /*if(Display.home.alreadyRendered === true){
                  if(Data.home.playlists[0].id != "favorites" && Data.home.playlists[1].id != "resume" && Data.home.playlists[0].id != "resume"){
                    currentItem = Data.home.playlists[Display.home.currentCarousel-1];
                  } else{
                    currentItem = Data.home.playlists[Display.home.currentCarousel];
                  }
                }else{
                */
                //currentItem = Data.home.playlists[Display.home.currentCarousel];
                //}
            }
            //  currentItem = Data.home.playlists[Display.home.currentCarousel-1];
            //  }

            // // // // // console.log('videoID = ', currentItem.id);
            currentCarousel = Display.home.carousels[Display.home.currentCarousel];

            currentItem = Data.home.playlists[Display.home.currentCarousel].items[currentCarousel.currentItem];
            Data.home.selectedName = currentItem.name;

            // currentCarousel = Display.home.carousels[Display.home.currentCarousel];
            // console.log(currentCarousel.currentItem)

            Controller.showSpinner();

            if (currentItem.id === 'favorites') {
                Data.home.selectedType = 'favorites';
                Controller.showVideo({
                    type: 'favorites'
                });
            } else if (currentItem.id === 'resume') {
                Data.home.selectedType = 'resume';
                Controller.showVideo({
                    type: 'resume'
                });
            } else {
                if (currentItem.type == "Series") {
                    currentCarousel = Display.home.carousels[Display.home.currentCarousel];
                    console.log(currentCarousel.currentItem)
                    var currentItem = Data.home.playlists[Display.home.currentCarousel].items[currentCarousel.currentItem];
                    Data.home.currentCarousel = currentCarousel.currentItem
                    Controller.showVideo({
                        type: 'series',
                        id: currentItem.id,
                        data: currentItem
                    });
                } else {
                    currentCarousel = Display.home.carousels[Display.home.currentCarousel];
                    currentItem = Data.home.playlists[Display.home.currentCarousel].items[currentCarousel.currentItem];
                    Controller.showVideo({
                        type: 'live',
                        id: currentItem.id
                    });
                }
                //Controller.showVideo({ type: 'playlist', id: currentItem.id});

            }
        } else if (Navigation.home.FOCUS === "search") {
            // // // // // console.log("search clicked");
            mixpanel.track("start search");
            Controller.showKeyboard();
        }
    }
    /**
     * Navigate large carousel
     */


Navigation.home_shiftLarge = function(direction) {

    var currentCarousel = Display.home.carousels[Display.home.currentCarousel];

    if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) || (direction === 'left' && currentCarousel.currentItem === 0)) {
        return;
    }
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    currentCarousel.currentItem += direction === 'right' ? 1 : -1;
    currentCarousel.items[currentCarousel.currentItem].classList.add('active');

    var rect = currentCarousel.items[currentCarousel.currentItem].getBoundingClientRect();

    if (direction === 'right' && currentCarousel.currentItem > 1 && currentCarousel.currentItem < currentCarousel.items.length - 1) {
        currentCarousel.translateX -= currentCarousel.itemWidth;

        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';

    } else if (direction === 'left' && currentCarousel.currentItem > 1 && currentCarousel.currentItem <= currentCarousel.items.length - 1) {
        currentCarousel.translateX += currentCarousel.itemWidth;
        // // // // // // console.log("currentCarousel.translateX = ", currentCarousel.translateX);
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
    }
    //Navigation.home_toggleArrows();
}

Navigation.home_shiftLarge = function(direction) {
        var currentCarousel = Display.home.carousels[Display.home.currentCarousel];

        if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) ||
            (direction === 'left' && currentCarousel.currentItem === 0)) {
            return;
        }

        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
        currentCarousel.currentItem += direction === 'right' ? 1 : -1;
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
        currentCarousel.translateX -= (direction === 'right' ? 1 : -1) * currentCarousel.itemWidth;
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';

    }
    // Navigation.home_shiftLarge = function (direction) {
    //     // mouse events
    //     if (Navigation.home.mouseMove == true) {
    //         var currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
    //         currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    //     } else {
    //         var currentCarousel = Display.home.carousels[Navigation.home.cursorValue];

//         var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
//     }
//     //var currentCarousel = Display.home.carousels[Display.home.currentCarousel];

//     if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) ||
//         (direction === 'left' && currentCarousel.currentItem === 0)) {
//         return;
//     }
//     currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
//     currentCarousel.currentItem += direction === 'right' ? 1 : -1;
//     currentCarousel.items[currentCarousel.currentItem].classList.add('active');
//     //currentCarousel.translateX -= (direction === 'right' ? 1 : -1) * (currentCarousel.itemWidth);
//     if(direction === 'right' && currentCarousel.currentItem <= 2){
//            //Navigation.home_toggleArrows();
//      return; 
//      // }else if(direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1){
//      //        //Navigation.home_toggleArrows();
//      // return; 
//     }else if(direction === 'left' && currentCarousel.currentItem === currentCarousel.items.length - 2){
//        //Navigation.home_toggleArrows();
//      return;
//     }else if(direction === 'left' && currentCarousel.currentItem === 1){
//      return;
//     }else if(direction === 'left' && currentCarousel.currentItem === 0){
//      return;
//     }
//     // console.log("currentCarousel.translateX" + currentCarousel.translateX);
//    currentCarousel.translateX -= (direction === 'right' ? 1 : -1) * (currentCarousel.itemWidth);
//     // // // // // // console.log("currentCarousel.translateX = ", currentCarousel.translateX);
//     // // // // // // console.log("currentCarousel.itemWidth = ", currentCarousel.itemWidth);
//     currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';

//     if (currentCarousel.currentItem === 0) {
//         //Navigation.home_toggleArrows();
//         // currentCarousel.arrowPrev.classList.add('arrow-disabled');
//         // currentCarousel.arrowNext.classList.remove('arrow-disabled');
//     } else if (currentCarousel.currentItem === currentCarousel.items.length - 1) {
//         //Navigation.home_toggleArrows();
//         // currentCarousel.arrowPrev.classList.remove('arrow-disabled');
//         // currentCarousel.arrowNext.classList.add('arrow-disabled');
//     } else {
//         //Navigation.home_toggleArrows();
//         // currentCarousel.arrowPrev.classList.remove('arrow-disabled');
//         // currentCarousel.arrowNext.classList.remove('arrow-disabled');
//     }
//     //Navigation.home_toggleArrows();
// }
Navigation.home_shiftMenu = function(direction) {
    // to handel weith mouse
    var currentCarousel = Display.home.menu[0];

    if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) || (direction === 'left' && currentCarousel.currentItem === 0)) {
        return;
    }

    var currentCarousel = Display.home.menu[0];
    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) ||
        (direction === 'left' && currentCarousel.currentItem === 0)) {

        currentCarousel.items[currentCarousel.currentItem].classList.add('active');
        return;
    }

    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    currentCarousel.currentItem += direction === 'right' ? 1 : -1;
    currentCarousel.items[currentCarousel.currentItem].classList.add('active');

    //var rect = currentCarousel.items[currentCarousel.currentItem].getBoundingClientRect();

    if (direction === 'right' && currentCarousel.currentItem < currentCarousel.items.length && currentCarousel.currentItem > 2) {
        currentCarousel.translateX -= currentCarousel.itemWidth;
        // // // // // // console.log("currentCarousel.translateX = ", currentCarousel.translateX);
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
        // console.log("hello");
    } else if (direction === 'left' && currentCarousel.currentItem < currentCarousel.items.length && currentCarousel.currentItem > 1) {
        currentCarousel.translateX += currentCarousel.itemWidth;
        // // // // // // console.log("currentCarousel.translateX = ", currentCarousel.translateX);
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
    }
    //Navigation.home_toggleArrows();
    //Display.home_updateCover();
}

/**
 * Navigate regular carousel
 */
Navigation.home_shiftRegular = function(direction) {
    // to handel with mouse
    var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
    console.log(Display.home.currentCarousel)
    console.log(currentCarousel)
    console.log(currentCarousel.currentItem)
    if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) || (direction === 'left' && currentCarousel.currentItem === 0)) {
        return;
    }

    if (Navigation.home.mouseMove == true) {
        var currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    } else {
        var currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
        var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
    }
    if ((direction === 'right' && currentCarousel.currentItem === currentCarousel.items.length - 1) ||
        (direction === 'left' && currentCarousel.currentItem === 0)) {
        if (Navigation.home.mouseMove == true) {
            currentCarousel.items[currentCarousel.currentItem].classList.add('active');
        }
        return;
    }

    currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
    currentCarousel.currentItem += direction === 'right' ? 1 : -1;
    currentCarousel.items[currentCarousel.currentItem].classList.add('active');

    var rect = currentCarousel.items[currentCarousel.currentItem].getBoundingClientRect();

    if (direction === 'right' && rect.right > Display.screen.width - 50) {
        currentCarousel.translateX -= currentCarousel.itemWidth;
        // // // // // // console.log("currentCarousel.translateX = ", currentCarousel.translateX);
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
        // console.log("hello");
        // if (currentCarousel.currentItem > 6) {
        //     if (currentCarousel.currentItem % 7 == 0) {
        //         for (var i = currentCarousel.currentItem; i <= (currentCarousel.currentItem + 7); i++) {
        //             if (i < currentCarousel.items.length) {
        //                 if (Navigation.home.mouseMove === true) {
        //                     currentCarousel.items[i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.home.playlists[Navigation.home.cursorValue].items[i].thumbnail.small + ")";
        //                 } else {
        //                     // console.log("Navigation.home.cursorValue = " + Navigation.home.cursorValue);

        //                     currentCarousel.items[i].getElementsByClassName("img")[0].style.cssText = " background-image:url(" + Data.home.playlists[Display.home.currentCarousel -1].items[i].thumbnail.small + ")";
        //                 }

        //             }
        //         }
        //     }
        // }

    } else if (direction === 'left' && rect.left < 0) {
        currentCarousel.translateX += currentCarousel.itemWidth;
        // // // // // // console.log("currentCarousel.translateX = ", currentCarousel.translateX);
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';
    }
    //Navigation.home_toggleArrows();
    //Display.home_updateCover();
}

/**
 * Navigate up
 */
// Navigation.home_shiftUp = function () {

//     // mosue event
//     if (Display.home.currentCarousel === 0)
//         return;

//     // if(Navigation.home.mouseMove === true){
//     //  var currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
//     //  currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
//     //      //var currentItem = Data.home.playlists[Navigation.home.cursorValue - 1];
//     //     }


//     var currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
//     currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
//     // console.log("removed cursor");

//     var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
//     currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
//     // console.log("removed current carousel");

//     Display.home.currentCarousel -= 1;
//     // for sync mosue event Navigation.home.cursorValue
//     // console.log("adding to current carousel");
//     currentCarousel = Display.home.carousels[Display.home.currentCarousel];
//     currentCarousel.items[currentCarousel.currentItem].classList.add('active');

//     if (Display.home.currentCarousel > 0) {
//         // // // // // // console.log("Display.home.carouselsContainerTranslateY = ", Display.home.carouselsContainerTranslateY);
//         Display.home.carouselsContainerTranslateY += currentCarousel.containerHeight;
//         Display.home.carouselsContainer.style.cssText = '-webkit-transform: translateY(' + Display.home.carouselsContainerTranslateY + 'px)';
//     } else if (Display.home.currentCarousel === 0) {
//         Navigation.home.FOCUS = 'large';
//     }

//     //Navigation.home_toggleArrows();

//     // console.log(" || Navigation.home.FOCUS = " + Navigation.home.FOCUS + "|| Navigation.home.cursorValue = " + Navigation.home.cursorValue + "|| Display.home.currentCarousel = " + Display.home.currentCarousel + "");

// }

/**
 * Navigate down
 */
// Navigation.home_shiftDown = function () {
//     var currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
//     currentCarousel.items[currentCarousel.currentItem].classList.remove('active');

//     currentCarousel = Display.home.carousels[Display.home.currentCarousel];
//     currentCarousel.items[currentCarousel.currentItem].classList.add('active');

//     if (Display.home.currentCarousel === Display.home.carousels.length - 1) {
//         return
//     };

//     var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
//     currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
//     Display.home.currentCarousel += 1;

//     currentCarousel = Display.home.carousels[Display.home.currentCarousel];
//     currentCarousel.items[currentCarousel.currentItem].classList.add('active');

//     if (Display.home.currentCarousel > 1) {
//         // // // // // // console.log("Display.home.carouselsContainerTranslateY = ", Display.home.carouselsContainerTranslateY);
//         Display.home.carouselsContainerTranslateY -= currentCarousel.containerHeight;
//         Display.home.carouselsContainer.style.cssText = '-webkit-transform: translateY(' + Display.home.carouselsContainerTranslateY + 'px)';
//     }
//     //Navigation.home_toggleArrows();
//     // console.log(" || Navigation.home.FOCUS = " + Navigation.home.FOCUS + "|| Navigation.home.cursorValue = " + Navigation.home.cursorValue + "|| Display.home.currentCarousel = " + Display.home.currentCarousel + "");

// }

var MouseEvents = {
    home: {
        clickevent: {
            row: 0,
            col: 0,
            selecteditem: null,
            selectedPlayList: null
        }
    }


}

MouseEvents.handleArrowClickEvent = function(props, arrow) {
    var lastItem = props.items[props.items.length - 1].getBoundingClientRect();
    var firstItem = props.items[0].getBoundingClientRect();
    var prevarrow = props.container.querySelectorAll('.prev')[0];
    var nextarrow = props.container.querySelectorAll('.next')[0];
    // console.log(lastItem.x);
    // console.log(firstItem.x);
    if ((arrow == "next" && lastItem.x + props.rectMin >= Display.screen.width) || (arrow == "prev" && firstItem.x <= props.rectMin)) {
        var currentCarousel = props;
        if (arrow == "next") {
            currentCarousel.translateX -= currentCarousel.itemWidth;
        } else if (arrow == "prev") {
            currentCarousel.translateX += currentCarousel.itemWidth;
        }
        currentCarousel.ul.style.cssText = '-webkit-transform: translateX(' + currentCarousel.translateX + 'px)';

        // console.log(lastItem.x);
        // console.log(firstItem.x);

        setTimeout(function() {
            this.lastItem = props.items[props.items.length - 1].getBoundingClientRect();
            this.firstItem = props.items[0].getBoundingClientRect();

            // console.log(this.lastItem.x - props.itemWidth);
            // console.log(Display.screen.width - props.itemWidth);
            if (this.lastItem.x - props.itemWidth <= Display.screen.width - props.itemWidth) {} else {
                console.log("true")
            }
            if (this.lastItem.x - props.itemWidth <= Display.screen.width - (props.itemWidth + props.rectMin)) {
                nextarrow.style.cssText = "display:none;"
                props.shownext = false;
            } else {

                nextarrow.style.cssText = "display:block;"
                props.shownext = true;
            }
            if (this.firstItem.x == props.rectMin) {

                prevarrow.style.cssText = "display:none;"
                props.showprev = false;

            } else {
                prevarrow.style.cssText = "display:block;";
                props.showprev = true;
            }


        }.bind({
            props: props,
            arrow: arrow
        }), 1000);



    }

}
MouseEvents.handleClickEvent = function(parent, child) {
    console.log(parent.typeOfCarousel);
    console.log(child);

    if (parent.typeOfCarousel == 'regular-home' || parent.typeOfCarousel == 'large-home') {
        var item_id = child.dataset.id;
        var parent_id = parent.id;

        var rows = -1;
        var cols = -1;
        if (parent.typeOfCarousel == 'regular-home') {
            var playlist = Data.home.playlists;
            for (var i = 0; i < playlist.length; i++) {
                rows += 1;
                if (playlist[i].id == parent_id) {
                    MouseEvents.home.clickevent.selectedPlayList = playlist[i].items;
                    MouseEvents.home.clickevent.row = rows;
                    for (var j = 0; j < playlist[i].items.length; j++) {
                        cols += 1;
                        if (playlist[i].items[j].id == item_id) {
                            MouseEvents.home.clickevent.selecteditem = playlist[i].items[j];
                            MouseEvents.home.clickevent.col = cols;


                            break;

                        }

                    }
                    break;
                }
            }
        } else if (parent.typeOfCarousel == 'large-home') {
            var playlist = Data.home.largeCarousel;
            MouseEvents.home.clickevent.selectedPlayList = Data.home.largeCarousel;
            MouseEvents.home.clickevent.row = 0;
            for (var j = 0; j < playlist.length; j++) {
                cols += 1;
                if (playlist[j].id == item_id) {
                    MouseEvents.home.clickevent.selecteditem = playlist[j];
                    MouseEvents.home.clickevent.col = cols;


                    break;

                }

            }

        }

        Controller.showVideo({
            type: 'mouseClick',
            id: item_id
        });


    } else if (parent.typeOfCarousel == 'menu') {
        var item_id = child.dataset.id;
        var currentCarousel = Display.home.menu[0];
        var CurrentmenuItem = currentCarousel.items[item_id];
        CurrentmenuItem.classList.remove('hover');
        CurrentmenuItem.classList.add('active');
        var action = CurrentmenuItem.dataset.action;
        if (action == 'search') {
            mixpanel.track("start search");
            Controller.showKeyboard();
        } else if (action == 'home') {
            var homeItem = currentCarousel.items[currentCarousel.homeItem];
            homeItem.classList.add('active');
            //Navigation.home_handleDown();      
        } else if (action == 'profile') {
            CurrentmenuItem.classList.remove('active');
            CurrentmenuItem.classList.add('hover');
            var homeItem = currentCarousel.items[currentCarousel.homeItem];
            homeItem.classList.remove('hover');
            Controller.hide('home');
            Controller.showSetting();
            // Navigation.home_handleDown(); 
        }

    } else if (parent.typeOfCarousel == "regular-details") {
        console.log("item clicked");
    }
}


var KeyEvents = {



}

MouseEvents.addEventToRow = function(props) {
    var that = this
    var arrowprev = props.container.querySelectorAll('.in-nav-arrows .prev');
    arrowprev[0].addEventListener("click", function() {
        that.handleArrowClickEvent(this.row, "prev");

    }.bind({
        row: props
    }));

    var arrownext = props.container.querySelectorAll('.in-nav-arrows .next');
    arrownext[0].addEventListener("click", function(ev) {
        that.handleArrowClickEvent(this.row, "next");

    }.bind({
        row: props
    }));
    props.container.addEventListener("mouseover", function() {
        var arrow = this.row.container.querySelectorAll('.in-nav-arrows');

        arrow[0].classList.add('active');
        if (this.row.shownext == false) {
            this.row.container.querySelector(".next").style.cssText = "display:none";

        } else {
            this.row.container.querySelector(".next").style.cssText = "display:block";
        }
        if (this.row.showprev == false) {
            this.row.container.querySelector(".prev").style.cssText = "display:none";

        } else {
            this.row.container.querySelector(".prev").style.cssText = "display:block";
        }

    }.bind({
        row: props
    }));
    props.container.addEventListener("mouseout", function() {
        var arrow = this.row.container.querySelectorAll('.in-nav-arrows');
        arrow[0].classList.remove('active');
    }.bind({
        row: props
    }));
    props.container.addEventListener("click", function() {
        console.log(this);
    });
    for (var i = 0; i < props.items.length; i++) {
        props.items[i].addEventListener("mouseover", function() {
            KeyEvents.removeActive();
            this.classList.add('active');

        });
        props.items[i].addEventListener("mouseout", function() {

            this.classList.remove('active');
        });
        props.items[i].addEventListener("click", function() {
            MouseEvents.handleClickEvent(this.parent, this.child);
        }.bind({
            parent: props,
            child: props.items[i]
        }));

    }




}
MouseEvents.arrowHandler = function(type) {
    var top = Display.home.arrowup;
    var bottom = Display.home.arrowdown;
    if (Display.home.mouseCounter < 0 && Display.home.mouseCounter >= Display.home.carousels.length - 2) {
        return false
    }
    if (type == "top") {

        Display.home.mouseCounter = Display.home.mouseCounter - 1;
        if (Display.home.mouseCounter == 1) {
            document.querySelector('.carousels-outer').style.cssText = 'top:-400px;';
            // document.querySelector('#carousel-large').style.cssText = 'top:-400px;';

        } else if (Display.home.mouseCounter == 2) {
            document.querySelector('.carousels-outer').style.cssText = 'top: -600px;';
            //document.querySelector('#carousel-large').style.cssText = 'top:-600px;';
        } else if (Display.home.mouseCounter == 0) {
            document.querySelector('.carousels-outer').style.cssText = '';
            document.querySelector('#carousel-large').style.cssText = '';
        } else {
            var currentCarousel = Display.home.carousels[1];
            Display.home.carouselsContainerTranslateY += currentCarousel.containerHeight;
            Display.home.carouselsContainer.style.cssText = '-webkit-transform: translateY(' + Display.home.carouselsContainerTranslateY + 'px)';

        }
    } else if (type == "bottom") {
        Display.home.mouseCounter = Display.home.mouseCounter + 1;
        if (Display.home.mouseCounter == 1) {
            document.querySelector('.carousels-outer').style.cssText = 'top:-400px;';
            document.querySelector('#carousel-large').style.cssText = 'top:-400px;';

        } else if (Display.home.mouseCounter == 2) {
            document.querySelector('.carousels-outer').style.cssText = 'top: -600px;';
            document.querySelector('#carousel-large').style.cssText = 'top:-600px;';
        } else {
            if (!(Display.home.mouseCounter >= Display.home.carousels.length - 1)) {
                var currentCarousel = Display.home.carousels[1];
                Display.home.carouselsContainerTranslateY -= currentCarousel.containerHeight;
                Display.home.carouselsContainer.style.cssText = '-webkit-transform: translateY(' + Display.home.carouselsContainerTranslateY + 'px)';

            }

        }
        if (Display.home.mouseCounter >= Display.home.carousels.length - 2) {
            bottom.style.cssText = "display:none;"
        }

    }
    setTimeout(function() {

        MouseEvents.updateDisplayArrow();
        if (Display.home.showTop) {
            top.style.cssText = "display:block;"

        } else {
            top.style.cssText = "display:none;"
        }
        if (Display.home.showDown) {
            bottom.style.cssText = "display:block;"
        } else {
            bottom.style.cssText = "display:none;"
        }


    }, 500);


}

MouseEvents.addMouseEventstoArrow = function(top, bottom) {
    // top.addEventListener("click", function() {
    //     MouseEvents.arrowHandler(this.type);

    // }.bind({
    //     type: "top"
    // }));
    // bottom.addEventListener("click", function() {
    //     MouseEvents.arrowHandler(this.type);

    // }.bind({
    //     type: "bottom"
    // }));

}

MouseEvents.updateDisplayArrow = function() {
    // var top = Display.home.topRect();
    // var bottom = Display.home.bottomRect();
    // if (top.y >= 158) {
    //     Display.home.showTop = false;
    // } else {
    //     Display.home.showTop = true;
    // }

    // if (bottom.y > 689) {
    //     Display.home.showDown = true;
    // } else {
    //     Display.home.showDown = false;
    // }
}

MouseEvents.setArrowEvents = function() {
    // var container = Display.homeContainer;
    // var arrowUp = Display.home.arrowup;
    // var arrowDown = Display.home.arrowdown;
    // container.addEventListener("mouseover", function() {
    //     MouseEvents.updateDisplayArrow();
    //     if (Display.home.showTop) {
    //         this.top.style.cssText = "display:block;"

    //     } else {
    //         this.top.style.cssText = "display:none;"
    //     }
    //     if (Display.home.showDown) {
    //         this.bottom.style.cssText = "display:block;"
    //     } else {
    //         this.bottom.style.cssText = "display:none;"
    //     }

    // }.bind({
    //     top: arrowUp,
    //     bottom: arrowDown
    // }));
    // container.addEventListener("mouseout", function() {

    // });
    // container.addEventListener("click", function() {

    // });

}

MouseEvents.addActive = function(type, row, col) {

}

KeyEvents.addActive = function(type, row, col) {

}

MouseEvents.removeActive = function(type, row, col) {

}

KeyEvents.removeActive = function() {
    if (Controller.activeScene == "home") {
        var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');

        var currentCarousel = Display.home.menu[0];
        currentCarousel.items[currentCarousel.currentItem].classList.add('add');
    } else if (Controller.activeScene == "package") {
        var currentCarousel = Display.package.carousels[Display.package.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');

        var currentCarousel = Display.package.details[Display.package.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
        var currentCarousel = Display.package.channel[Display.package.currentCarousel];
        currentCarousel.items[currentCarousel.currentItem].classList.remove('active');
        var currentCarousel = Display.package.details[0];
        currentCarousel.items[currentCarousel.currentItem].classList.add('active');



    }


}

var Display = {
    homeContainer: document.getElementById('home-container'),
    detailContainer: document.getElementById('detail-container'),
    package: {
        carousels: [],
        details: [],
        channels: [],
        detailspage: {
            cover: document.getElementById('scene_explore_package'),
            title: document.getElementById('preview-heading'),
            description: document.getElementById('preview-discription'),
        }
    },
    auth: {},

    // initiate all variables, etc
    home: {
        mouseCounter: 0,
        showTop: false,
        showDown: false,
        topRect: function() {
            return Display.home.carousels[0].container.getBoundingClientRect();
        },
        bottomRect: function() {
            var length = Display.home.carousels.length;
            return Display.home.carousels[length - 1].container.getBoundingClientRect();
        },
        menu: [],
        mainMenuList: null,
        mainMenuUL: null,

        subMenuList: null,
        subMenuUL: null,

        carousels: [],

        packageList: null,
        packageUL: null,

        searchButton: null,
        buttons: [],
        currentButton: 0,
    },

    movie: {},

    channels: {},

    details: {
        carousels: [],
        currentCarousel: 0,
        buttons: [],
        currentButton: 0,
        video: null,
    },

    player: {
        carousel: {},
    },

    screen: {
        width: 1920, //window.innerWidth,  // 1920;
        height: 1080,
    },

}

Display.handle_exit = function() {
    Popup.showExitPopup("Exit", "Do you want to exit Karostream?", this.home.FOCUS);
}

Display.handle_hard_exit = function() {
    Popup.showExitPopup("Exit", "Do you want to exit Karostream?", this.home.FOCUS, true);
}

/**
 * Show/hide player playlist
 */
// whereever
Display.home.dismantle = function() {
        if (typeof Display.home != 'undefined' && typeof Display.home.mainMenuUL != 'undefined' || Display.home.mainMenuUL != null) {
            Common.putInnerHTML(Display.home.mainMenuUL, "");
        }
        if (typeof Display.home != 'undefined' && typeof Display.home.subMenuUL != 'undefined' || Display.home.subMenuUL != null) {
            Common.putInnerHTML(Display.home.subMenuUL, "");
        }
        if (typeof Display.home != 'undefined' && typeof Display.home.carouselUL != 'undefined' || Display.home.carouselUL != null) {
            Common.putInnerHTML(Display.home.carouselUL, "");
        }
        if (typeof Display.home != 'undefined' && typeof Display.home.toolbarNAV != 'undefined' || Display.home.toolbarNAV != null) {
            Common.putInnerHTML(Display.home.toolbarNAV, "");
        }
        if (typeof Display.home != 'undefined' && typeof Display.home.packageUL != 'undefined' || Display.home.packageUL != null) {
            Common.putInnerHTML(Display.home.packageUL, "");
        }
    }
    // whereever

Display.player_togglePlaylist = function() {
    var playerEl = document.getElementById('player');

    if (!playerEl)
        return;

    var playerPlaylistEl = document.getElementById('player-playlist');

    // Remove player's playlist carousel
    if (playerPlaylistEl) {
        playerEl.removeChild(playerPlaylistEl);
        return;
    }

    // Renders playlist container
    playerPlaylistEl = document.createElement('div');
    playerPlaylistEl.id = 'player-playlist';
    playerPlaylistEl.className = 'player-playlist';
    playerEl.appendChild(playerPlaylistEl);

    // Renders carousel
    var currentCarousel = Display.details.carousels[Display.details.currentCarousel];

    //// // // // // // // // // // console.log("currentCarousel = " + JSON.stringify(currentCarousel));

    Display.player.carousel = {
        container: document.createElement('div'),
        containerHeight: currentCarousel.containerHeight,
        ul: currentCarousel.ul.cloneNode(true),
        itemWidth: currentCarousel.itemWidth,
        currentItem: Data.player.currentItem,
        translateX: 50,
    };

    Display.player.carousel.container.className = 'carousel carousel-regular';
    Display.player.carousel.container.appendChild(Display.player.carousel.ul);
    Display.player.carousel.items = Display.player.carousel.ul.querySelectorAll('li');
    Display.player.carousel.items[Display.player.carousel.currentItem].classList.add('active');

    if (Display.player.carousel.currentItem !== 0) {
        Display.player.carousel.translateX -= Display.player.carousel.itemWidth;
        if (Display.player.carousel.currentItem > 3) {
            Display.player.carousel.translateX -= (Display.player.carousel.currentItem - 3) * Display.player.carousel.itemWidth;
        }
    }

    Display.player.carousel.ul.style.cssText = '-webkit-transform: translateX(' + Display.player.carousel.translateX + 'px)';
    playerPlaylistEl.appendChild(Display.player.carousel.container);
}

/*
Display.home_createHome = function(){
Display.createMenu();
Display.createCarousel();

Display.home.FOCUS = "carousel";
}*/



Display.home_createMenu = function() {
    var category_id = Display.home.subMenuList[0].id;
    var package_id = Display.home.packageList[0].id; // for now use package "13"
    Server.fetchHomeCarousel();
}

/*
Display.home_createCarousel = function(main_menu, sub_menu, package_id){
// for selected submenu / main menu / package, query and get data and create the video carousel
}
 */
////////////////////
///////////////////
//////////////////ly auth

var Registration = {

}


Registration.init = function() {
    this.signup = document.getElementById('scene_registration');
    this.signUpLi = this.signup.querySelectorAll('.signupbtn');
    this.nameSignup = document.getElementById('nameSignup');
    this.emailSignup = document.getElementById('emailSignup');
    this.passwordSignup = document.getElementById('passwordSignup');
    this.repasswordSignup = document.getElementById('repasswordSignup');
    this.insidesignupbtn = document.getElementById('signupbtn');
    this.divsSignup = this.insidesignupbtn.querySelectorAll('div');
    this.signup.style.display = 'none';
    this.nameSignup.value = "";
    this.emailSignup.value = "";
    this.passwordSignup.value = "";
    this.repasswordSignup.value = "";
    //Registration.addMouseEvents();

    Registration.signUpFocus = "namesignup"
    window.setTimeout(function() {
        Registration.nameSignup.focus();
    }, 0);
    signupbtn.addEventListener('mouseover', function() {
        // this.classList.add('hover');
        // this.querySelectorAll('.signup-text')[0].classList.add('hover')
        // this.querySelectorAll('.signup-line')[0].classList.add('hover')
        // this.querySelectorAll('.signup-tringle')[0].classList.add('hover')
    });
    signupbtn.addEventListener('mouseout', function() {
        // this.classList.remove('hover');
        // this.querySelectorAll('.signup-text')[0].classList.remove('hover')
        // this.querySelectorAll('.signup-line')[0].classList.remove('hover')
        // this.querySelectorAll('.signup-tringle')[0].classList.remove('hover')
    });
    signupbtn.addEventListener('click', function() {
        // this.classList.add('hover');
        // Registration.signUpFocus = "signup";
        // Navigation.registration_handleEnter();
    });


}

var Auth = {
    authOptions: document.getElementById('authOptions'),
    devicelink: document.getElementById('devicelink'),
    signin: document.getElementById('signin'),


    devicelinkButton: document.getElementById('devicelinkButton'),
    authContact: document.getElementById('authContact'),

    authOptionsLi: authOptions.querySelectorAll('li'),
    deviceLinkLi: devicelink.querySelectorAll('li'),
    signinLi: signin.querySelectorAll('li'),


    devicelinkButtonLi: devicelinkButton.querySelectorAll('li'),

    pincode: document.getElementById('pincode'),
    password: document.getElementById('password'),
    username: document.getElementById('username'),




    currentVisible: "",
    authOptionPosition: 0,
    authOptionPositionMin: 0,


    deviceLinkPosition: 0,
    showingContact: false,
    auth_btnList: [],

    mainMessage: document.getElementById('mainMessage'),


}

Auth.init = function() {
    // // // // // // // // console.log("Auth.init");

    this.authContact.style.display = 'none';
    this.devicelink.style.display = 'none';
    this.signin.style.display = 'none';

    this.mainMessage.style.display = 'none';
    //  this.payment.style.display ='none';
    this.authOptions.style.display = 'block';

    this.insidesignupbtn = document.getElementById('signupbtn')
    this.divsSignup = this.insidesignupbtn.querySelectorAll('div');

    this.username.blur();
    this.password.blur();


    this.username.value = "";
    this.password.value = "";


    Display.home.dismantle();
    Auth.addMouseEvents();

    this.currentVisible = "authOptions";

    //      var btnList = document.getElementById('authOptionList').querySelectorAll('li');  
    // for (i=0 ; i < btnList.length ; i++){
    //  this.authOptionPositionMin = i;  
    //  if(btnList[i].style.display === ""){
    //    this.authOptionPosition = i;        
    //    break;
    //  }
    // }
    this.btnList = [];
    var btnList = document.getElementById('authOptionList').querySelectorAll('li');
    for (i = 0; i < btnList.length; i++) {
        if (btnList[i].style.display === "") {
            this.auth_btnList.push(btnList[i]);
        } else if (btnList[i].style.display === "block") {
            this.auth_btnList.push(btnList[i]);
        }
    }

    Auth.authOptionsLi = this.auth_btnList;


    for (i = 0; i < btnList.length; i++) {
        this.authOptionPositionMin = i;
        if (btnList[i].style.display === "") {
            this.authOptionPosition = i;
            break;
        }
    }

    Auth.authOptionsLi[this.authOptionPosition].classList.add("hover");

}

Auth.removeAuthOptionHover = function() {
    for (var i = 0, l = Auth.authOptionsLi.length; i < l; i++) {
        Auth.authOptionsLi[i].classList.remove("hover");
    }
}


Auth.addMouseEvents = function() {
    // console.log("Auth.addMouseEvents = ", Auth.authOptionsLi.length);

    // for (var i = 0, l = Auth.authOptionsLi.length; i < l; i++) {
    //     Auth.authOptionsLi[i].addEventListener("mouseover", function() {
    //         Auth.removeAuthOptionHover();
    //         this.classList.add('hover');
    //     });
    //     Auth.authOptionsLi[i].addEventListener("mouseout", function() {
    //         this.classList.remove('hover');
    //     });
    //     Auth.authOptionsLi[i].addEventListener("click", function() {
    //         Auth.authOptionPosition = this.dataset.id;
    //         // console.log("Auth.authOptionPosition = ", Auth.authOptionPosition);
    //         Auth.handleEnter();
    //     });
    // }

    // for (var i = 0, l = Auth.deviceLinkLi.length; i < l; i++) {
    //     Auth.deviceLinkLi[i].addEventListener("mouseover", function() {
    //         this.classList.add('hover');
    //     });
    //     Auth.deviceLinkLi[i].addEventListener("mouseout", function() {
    //         this.classList.remove('hover');
    //     });
    //     Auth.deviceLinkLi[i].addEventListener("click", function() {
    //         Auth.deviceLinkPosition = this.dataset.id;
    //         Auth.handleEnter();
    //     });

    // }



    // Auth.signinLi[0].addEventListener("mouseover", function() {
    //     this.classList.add('hover');
    // });
    // Auth.signinLi[0].addEventListener("mouseout", function() {
    //     this.classList.remove('hover');
    // });
    // Auth.signinLi[0].addEventListener("click", function() {
    //     Auth.signInFocus = "login";
    //     Auth.handleEnter();
    // });

    // Auth.username.addEventListener('focus', function() {
    //     Auth.signInFocus = 'username';
    // });
    // Auth.password.addEventListener('focus', function() {
    //     Auth.signInFocus = 'password';
    // });




}

Auth.dismantle = function() {
    authOptions = document.getElementById('authOptions');
    devicelink = document.getElementById('devicelink');
    signin = document.getElementById('signin');
    devicelinkButton = document.getElementById('devicelinkButton');
    authContact = document.getElementById('authContact');

    authOptionsLi = authOptions.querySelectorAll('li');
    deviceLinkLi = devicelink.querySelectorAll('li');
    signinLi = signin.querySelectorAll('li');
    devicelinkButtonLi = devicelinkButton.querySelectorAll('li'),

        pincode = document.getElementById('pincode');
    password = document.getElementById('password');
    username = document.getElementById('username');

    currentVisible = "";
    authOptionPosition = 0;
    deviceLinkPosition = 0;
    showingContact = false;

    mainMessage = document.getElementById('mainMessage');
}


Auth.logoff = function() {
    this.currentVisible = "logofffff";
    Server.auth_logoff();
}

Auth.showClientAuthStatus = function(status) {
    Controller.hideSpinner();

    Server.package_id = "13";
    //  Server.serial = getHardwareId();
    Server.serial = getSystemID();
    Server.device_id = "29";

    if (status === true) {
        Common.putInnerHTML(this.mainMessage, "Verifying please wait...");
        this.mainMessage.style.display = 'block';

        setTimeout(function() {
            setTimeout(function() {
                var user_info = localStorage.getItem('user-login-sucess-json');
                if (user_info != "undefined") {
                    Common.putInnerHTML(this.mainMessage, "Trying Autologin please wait...");
                    if (localStorage.getItem('loginid') != undefined && localStorage.getItem('loginpassword') != undefined) {
                        Server.refreshUserToken(localStorage.getItem('loginid'), localStorage.getItem('loginpassword'));
                    } else {
                        Auth.init();
                    }
                } else {
                    Auth.init();
                }
            }, 3000);
            //Server.auth_verifyDevice("showClientAuthStatus");
        }, 2000);

        //  Auth.init();
    } else {
        //Common.putInnerHTML(this.mainMessage, "This channel is not available at the moment.");
        this.mainMessage.style.display = 'block';
        Auth.showChannelNA();
    }
}

Auth.showSuccessPage = function() {
    // show success message and let people login
    // // // // // // // // console.log("Success Login");
    Auth.authOptions.style.display = 'none';
    Auth.devicelink.style.display = 'none';
    Auth.signin.style.display = 'none';

    Common.putInnerHTML(this.mainMessage, "Looks like we are all set!");
    this.mainMessage.style.display = 'block';

    //  Display.home.novideofound.style.display = 'none';
    //Display.home.submenu_prev.style.display = 'none';
    // Display.home.submenu_next.style.display = 'none';
    // Display.home.carousel_next.style.display = 'none';
    // Display.home.carousel_prev.style.display = 'none';
    // Display.home.languageSelectionText.style.display = 'none';
    Main.linked = true;

    setTimeout(function() {
        // // // // // // // // console.log("Going to show home");
        clearInterval(Auth.auto_LinkDevice);
        // Server.refreshToken();

        Controller.showSpinner();
        Server.getCatalougeByIdLargeCarousel();
        Controller.showHome();

        //Data.user.loginUser.status = true;
        // if(Main.show_featured){
        //  Server.home_fetchContentByType('category')
        // }else{
        //  Server.home_fetchContentByType('user-mylist');
        // }    

        //  Server.home_fetchContentByType('subcription-user');
    }, 3000);
}

Auth.showBrowsePage = function() {
    // show success message and let people login
    // // // // // // // // console.log("Success Login");

    Controller.showSpinner();
    Main.token = "abcabcac";
    Server.token = Main.token;
    Server.serial = "demo-serial";

    Auth.authOptions.style.display = 'none';
    Auth.devicelink.style.display = 'none';
    Auth.signin.style.display = 'none';

    Common.putInnerHTML(this.mainMessage, "");
    this.mainMessage.style.display = 'block';

    // Display.home.novideofound.style.display = 'none';
    // Display.home.submenu_prev.style.display = 'none';
    // Display.home.submenu_next.style.display = 'none';
    // Display.home.carousel_next.style.display = 'none';
    // Display.home.carousel_prev.style.display = 'none';
    // Display.home.languageSelectionText.style.display = 'none';

    setTimeout(function() {
        // // // // // // // // console.log("Going to show home");
        clearInterval(Auth.auto_LinkDevice);
        // Server.refreshToken();
        //Main.startApp()
        Controller.showHome();
        ///// home start
        Server.getCatalougeByIdLargeCarousel();
        //Server.home_fetchContentByType('user-category');
    }, 1000);
}

Auth.StartLinkDevice = function() {
    clearInterval(Auth.auto_LinkDevice);

    Auth.auto_LinkDevice = window.setInterval(function() {
        Server.auth_verifyDevice("StartLinkDevice");
    }, 15000);
}

Auth.refreshPinCode = function(pin) {
    Common.putInnerHTML(this.pincode, pin);
}

Auth.setSigninError = function(error) {
    // show error message
    var er = error.error.message
    this.signin.style.display = 'none';
    Popup.showError("Error", er, 1, "");
    localStorage.clear();
    localStorage.setItem('user-login-sucess-json', undefined);
    localStorage.setItem('loginpassword', undefined);
    localStorage.setItem('uat', undefined);
    localStorage.setItem('loginid', undefined);
}

Auth.showChannelNA = function() {
    this.mainMessage.classList.add('show');
    // this.mainMessage.innerHTML = "This channel is not available at the moment.";
}




Auth.handleAuthUp = function() {
    if (this.currentVisible === "devicelink") {

    } else {

        if (this.authOptionPosition > this.authOptionPositionMin) {
            this.auth_btnList[this.authOptionPosition].classList.remove('hover');
            this.authOptionPosition = parseInt(this.authOptionPosition) - 1;
            this.auth_btnList[this.authOptionPosition].classList.add('hover');
        }
    }
}

Auth.handleAuthDown = function() {
    if (this.currentVisible === "devicelink") {

    } else {
        if (this.authOptionPosition < this.auth_btnList.length - 1) {
            this.auth_btnList[this.authOptionPosition].classList.remove('hover');
            this.authOptionPosition = parseInt(this.authOptionPosition) + 1;
            this.auth_btnList[this.authOptionPosition].classList.add('hover');
        }
    }
}




// Auth.handleAuthUp = function() {
//     if (this.currentVisible === "devicelink") {} else {
//         if (this.authOptionPosition > 0) {
//             this.authOptionsLi[this.authOptionPosition].classList.remove('hover');
//             this.authOptionPosition = this.authOptionPosition - 1;
//             this.authOptionsLi[this.authOptionPosition].classList.add('hover');
//         }
//     }
// }

// Auth.handleAuthDown = function() {
//     if (this.currentVisible === "devicelink") {} else {
//         if (this.authOptionPosition < 2) {
//             this.authOptionsLi[this.authOptionPosition].classList.remove('hover');
//             this.authOptionPosition = this.authOptionPosition + 1;
//             this.authOptionsLi[this.authOptionPosition].classList.add('hover');
//         }
//     }
// }

Auth.handleLeft = function() {
    if (this.currentVisible === "authOptions") {} else if (this.currentVisible === "devicelink") {} else if (this.currentVisible === "signin") {}
}

Auth.handleRight = function() {
    if (this.currentVisible === "authOptions") {} else if (this.currentVisible === "devicelink") {} else if (this.currentVisible === "signin") {}
}

Auth.handleUp = function() {
    if (this.currentVisible === "authOptions") {
        Auth.handleAuthUp();
    } else if (this.currentVisible === "devicelink") {
        this.devicelinkButtonLi[this.deviceLinkPosition].classList.remove('hover');
        this.deviceLinkPosition = 0;
        this.devicelinkButtonLi[this.deviceLinkPosition].classList.add('hover');
    } else if (this.currentVisible === "signin") {
        if (this.signInFocus === "password") {
            this.password.blur();
            this.username.focus();
            this.signInFocus = "username";
        } else if (this.signInFocus === "login") {
            this.signinLi[0].classList.remove('hover');
            this.password.focus();
            this.signInFocus = "password";
        }
    } else if (this.currentVisible === "signup") {


    }

}

Auth.handleDown = function() {
    if (this.currentVisible === "authOptions") {
        Auth.handleAuthDown();
    } else if (this.currentVisible === "devicelink") {
        // // // // // console.log("handleDown");
        this.devicelinkButtonLi[this.deviceLinkPosition].classList.remove('hover');
        this.deviceLinkPosition = 1;
        this.devicelinkButtonLi[this.deviceLinkPosition].classList.add('hover');
    } else if (this.currentVisible === "signin") {
        if (this.signInFocus === "username") {
            this.username.blur();
            this.password.focus();
            this.signInFocus = "password";
        } else if (this.signInFocus === "password") {
            this.password.blur();
            this.signinLi[0].classList.add('hover');
            this.signInFocus = "login";
        }
    } else if (this.currentVisible === "signup") {

        //  }else if(this.currentVisible === "signup-payment"){
        //   if(this.paymentsignUpFocus === "signupPaymentTextboxName"){

        // this.signupPaymentTextboxName.blur();
        // this.signupPaymentTextboxCardNumber.focus();
        // this.signupPaymentTextboxExpDateMM.blur();
        // this.signupPaymentTextboxExpDateYY.blur();
        // this.signupPaymentTextboxSecurityCode.blur();
        // this.signupPaymentTextboxZip.blur();
        // this.paymentsignUpFocus = "signupPaymentTextboxCardNumber"
        //   }else if(this.paymentsignUpFocus === "signupPaymentTextboxCardNumber"){
        //     this.signupPaymentTextboxName.blur();
        // this.signupPaymentTextboxCardNumber.blur();
        // this.signupPaymentTextboxExpDateMM.focus();
        // this.signupPaymentTextboxExpDateYY.blur();
        // this.signupPaymentTextboxSecurityCode.blur();
        // this.signupPaymentTextboxZip.blur();
        // this.paymentsignUpFocus = "signupPaymentTextboxExpDateMM"
        //   }else if(this.paymentsignUpFocus === "signupPaymentTextboxExpDateMM"){
        //     this.signupPaymentTextboxName.blur();
        // this.signupPaymentTextboxCardNumber.blur();
        // this.signupPaymentTextboxExpDateMM.blur();
        // this.signupPaymentTextboxExpDateYY.focus();
        // this.signupPaymentTextboxSecurityCode.blur();
        // this.signupPaymentTextboxZip.blur();
        // this.paymentsignUpFocus = "signupPaymentTextboxExpDateYY"
        //   }else if(this.paymentsignUpFocus === "signupPaymentTextboxExpDateYY"){
        //     this.signupPaymentTextboxName.blur();
        // this.signupPaymentTextboxCardNumber.blur();
        // this.signupPaymentTextboxExpDateMM.blur();
        // this.signupPaymentTextboxExpDateYY.blur();
        // this.signupPaymentTextboxSecurityCode.focus();
        // this.signupPaymentTextboxZip.blur();
        // this.paymentsignUpFocus = "signupPaymentTextboxSecurityCode"
        //   }else if(this.paymentsignUpFocus === "signupPaymentTextboxSecurityCode"){
        //     this.signupPaymentTextboxName.blur();
        // this.signupPaymentTextboxCardNumber.blur();
        // this.signupPaymentTextboxExpDateMM.blur();
        // this.signupPaymentTextboxExpDateYY.blur();
        // this.signupPaymentTextboxSecurityCode.blur();
        // this.signupPaymentTextboxZip.focus();
        // this.paymentsignUpFocus = "signupPaymentTextboxZip"
        //   }else if(this.paymentsignUpFocus === "signupPaymentTextboxZip"){
        //    this.signupPaymentTextboxName.blur();
        // this.signupPaymentTextboxCardNumber.blur();
        // this.signupPaymentTextboxExpDateMM.blur();
        // this.signupPaymentTextboxExpDateYY.blur();
        // this.signupPaymentTextboxSecurityCode.blur();
        // this.signupPaymentTextboxZip.blur();
        // this.paymentsignUpLi[0].classList.add('hover');
        // this.paymentsignUpFocus = "sigup-payment-pay"

        //   }




    }
}

Auth.handleReturn = function() {
    if (this.currentVisible === "authOptions") {
        Auth.handle_exit();

    } else if (this.currentVisible === "devicelink") {
        if (Auth.showingContact) {
            this.authContact.style.display = 'none';
            Auth.showingContact = false;
        } else {
            clearInterval(Auth.auto_LinkDevice);
            this.devicelink.style.display = 'none';
            this.authOptions.style.display = 'block';
            this.currentVisible = "authOptions";
        }
    } else if (this.currentVisible === "signin") {
        if (this.signInFocus === "username") {
            Auth.home_handle_back_space();
            return;
        }

        if (this.signInFocus === "password") {
            Auth.home_handle_back_space();
            return;
        }
        this.username.value = "";
        this.password.value = "";
        this.signin.style.display = 'none';
        this.authOptions.style.display = 'block';
        this.currentVisible = "authOptions";
        //this.authOptionPosition = 1;
        this.authOptionsLi[this.authOptionPosition].classList.add('hover');
    } else if (this.currentVisible === "signup") {
        if (this.signUpFocus === "namesignup") {
            Auth.home_handle_back_space();
            return;
        }
        if (this.signUpFocus === "emailsignup") {
            Auth.home_handle_back_space();
            return;
        }
        if (this.signInFocus === "passwordsignup") {
            Auth.home_handle_back_space();
            return;
        }
        if (this.signInFocus === "repasswordsignup") {
            Auth.home_handle_back_space();
            return;
        }

        this.nameSignup.value = "";
        this.emailSignup.value = "";
        this.passwordSignup.value = "";
        this.repasswordSignup.value = "";
        this.signup.style.display = 'none';
        this.authOptions.style.display = 'block';
        this.currentVisible = "authOptions";
        this.authOptionPosition = 2;
        this.authOptionsLi[this.authOptionPosition].classList.add('hover');
        this.divsSignup[0].classList.remove('hover');
        this.divsSignup[1].classList.remove('hover');
        this.divsSignup[2].classList.remove('hover');

    }
}

Auth.home_handle_space = function() {
    if (this.signInFocus === "username") {
        this.username.value = this.username.value + " ";
    } else if (this.signInFocus === "password") {
        this.password.value = this.password.value + " ";
    }
}

Auth.home_handle_clear = function() {
    if (this.signInFocus === "username") {
        this.username.value = "";
    } else if (this.signInFocus === "password") {
        this.password.value = "";
    }
}

// Auth.home_handle_back_space = function() {
//     if (this.signInFocus === "username") {
//         if (this.username.value.length > 0) {
//             this.username.value = this.username.value.slice(0, -1);
//         } else {
//             Auth.handleReturn();
//         }

//     } else if (this.signInFocus === "password") {
//         if (this.password.value.length > 0) {
//             this.password.value = this.password.value.slice(0, -1);
//         } else {
//             Auth.handleReturn();
//         }
//     }
// }

Auth.home_handle_back_space = function() {
    if (this.currentVisible === "signin") {

        if (this.signInFocus === "username") {
            if (this.username.value.length > 0) {
                this.username.value = this.username.value.slice(0, -1);
                return
            } else {
                this.username.value = "";
                this.password.value = "";
                this.signin.style.display = 'none';
                this.authOptions.style.display = 'block';
                this.currentVisible = "authOptions";
                this.authOptionsLi[this.authOptionPosition].classList.add('hover');


                //   Auth.handleReturn();
            }
            // Auth.handleReturn();
        } else if (this.signInFocus === "password") {
            if (this.password.value.length > 0) {
                this.password.value = this.password.value.slice(0, -1);
                return
            } else {
                this.username.value = "";
                this.password.value = "";
                this.signin.style.display = 'none';
                this.authOptions.style.display = 'block';
                this.currentVisible = "authOptions";
                this.authOptionsLi[this.authOptionPosition].classList.add('hover');

                //    
            }
            //   Auth.handleReturn();
        }

    } else if (this.currentVisible === "signup") {


        if (this.signUpFocus === "namesignup") {
            if (this.nameSignup.value.length > 0) {
                this.nameSignup.value = this.nameSignup.value.slice(0, -1);
            } else {
                //    Auth.handleReturn();

                this.nameSignup.value = "";
                this.emailSignup.value = "";
                this.passwordSignup.value = "";
                this.repasswordSignup.value = "";
                this.signup.style.display = 'none';
                this.authOptions.style.display = 'block';
                this.currentVisible = "authOptions";
                this.authOptionPosition = 2;
                this.authOptionsLi[this.authOptionPosition].classList.add('hover');
                this.divsSignup[0].classList.remove('hover');
                this.divsSignup[1].classList.remove('hover');
                this.divsSignup[2].classList.remove('hover');

            }
        } else if (this.signUpFocus === "emailsignup") {
            if (this.emailSignup.value.length > 0) {
                this.emailSignup.value = this.emailSignup.value.slice(0, -1);
            } else {
                //     Auth.handleReturn();

                this.nameSignup.value = "";
                this.emailSignup.value = "";
                this.passwordSignup.value = "";
                this.repasswordSignup.value = "";
                this.signup.style.display = 'none';
                this.authOptions.style.display = 'block';
                this.currentVisible = "authOptions";
                this.authOptionPosition = 2;
                this.authOptionsLi[this.authOptionPosition].classList.add('hover');
                this.divsSignup[0].classList.remove('hover');
                this.divsSignup[1].classList.remove('hover');
                this.divsSignup[2].classList.remove('hover');

            }
        } else if (this.signInFocus === "passwordsignup") {
            if (this.passwordSignup.value.length > 0) {
                this.passwordSignup.value = this.passwordSignup.value.slice(0, -1);
            } else {
                //    Auth.handleReturn();

                this.nameSignup.value = "";
                this.emailSignup.value = "";
                this.passwordSignup.value = "";
                this.repasswordSignup.value = "";
                this.signup.style.display = 'none';
                this.authOptions.style.display = 'block';
                this.currentVisible = "authOptions";
                this.authOptionPosition = 2;
                this.authOptionsLi[this.authOptionPosition].classList.add('hover');
                this.divsSignup[0].classList.remove('hover');
                this.divsSignup[1].classList.remove('hover');
                this.divsSignup[2].classList.remove('hover');

            }
        } else if (this.signInFocus === "repasswordsignup") {
            if (repasswordSignup.value.length > 0) {
                repasswordSignup.value = repasswordSignup.value.slice(0, -1);
            } else {
                //    Auth.handleReturn();

                this.nameSignup.value = "";
                this.emailSignup.value = "";
                this.passwordSignup.value = "";
                this.repasswordSignup.value = "";
                this.signup.style.display = 'none';
                this.authOptions.style.display = 'block';
                this.currentVisible = "authOptions";
                this.authOptionPosition = 2;
                this.authOptionsLi[this.authOptionPosition].classList.add('hover');
                this.divsSignup[0].classList.remove('hover');
                this.divsSignup[1].classList.remove('hover');
                this.divsSignup[2].classList.remove('hover');
            }
        }
    }
}



//
Auth.handle_exit = function() {
    Display.handle_exit();
}

Auth.showContact = function() {
    this.authContact.style.display = 'block';
    Auth.showingContact = true;
}

Auth.handleEnter = function() {
    if (this.currentVisible === "authOptions") {
        if (this.authOptionsLi[this.authOptionPosition].dataset.name === "browse") {
            // hide everything and start the app
            this.authOptionsLi[this.authOptionPosition].classList.remove('hover');
            this.authOptions.style.display = 'none';
            Auth.showBrowsePage();
        } else if (this.authOptionsLi[this.authOptionPosition].dataset.name === "signin") {
            this.authOptionsLi[this.authOptionPosition].classList.remove('hover');
            this.authOptions.style.display = 'none';
            this.signin.style.display = 'block';
            this.signInFocus = "username";
            Data.user.loginUser.email = '';
            Data.user.loginUser.password = '';
            this.username.focus();
            this.username_focused = true;
            this.signinLi[0].classList.remove('hover');
            this.currentVisible = "signin"

        } else if (this.authOptionsLi[this.authOptionPosition].dataset.name === "register") {
            this.authOptionsLi[this.authOptionPosition].classList.remove('hover');
            //Server.home_fetchContentByType('subcription');
            Controller.hideSpinner();

            Data.user.newuser.username = '';
            Data.user.newuser.useremail = '';
            Data.user.newuser.password = '';
            Data.user.newuser.reenterpassword = '';

            this.authOptions.style.display = 'none';
            this.signup.style.display = 'block';
            this.signUpFocus = "namesignup";
            this.nameSignup.focus();
            this.nameSignup_focused = true;
            this.signUpLi[0].classList.remove('hover');
            this.currentVisible = "signup";


        } else if (this.authOptionsLi[this.authOptionPosition].dataset.name === "link") {
            // // // console.log("device link page");
            this.authOptions.style.display = 'none';
            this.devicelink.style.display = 'block';
            Server.auth_requestPin();
            Auth.StartLinkDevice();
            this.currentVisible = "devicelink";
        } else if (this.authOptionsLi[this.authOptionPosition].dataset.name === 'package') {
            this.authOptionsLi[this.authOptionPosition].classList.remove('hover');
            this.authOptions.style.display = 'none';
            Controller.hideAuth();
            // Controller.showPackage(); unsomment when package added
            Controller.showRegistration();
        }
    } else if (this.currentVisible === "signin") {
        // call server to try to sign in
        if (this.signInFocus === "login") {
            // // // // // // // console.log("password = " , this.password.value);


            if (this.username.value.trim() === "" || this.password.value.trim() === "") {


            } else {


                Server.auth_signIn(this.username.value, this.password.value);

            }
        }else{
            Auth.handleDown();
        }
    } else if (this.currentVisible === 'signup') {

    }

}

checkEmailvalid = function(x) {
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        console.log("Not a valid e-mail address");
        return false;
    } else {
        return true;
    }
}



//auth page
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
Display.auth_init = function() {

    if (this.auth.init)
        return true;

    this.auth.container = document.getElementById('auth-container');
    this.auth.connectButton = document.getElementById('devicelink');
    this.auth.browseButton = document.getElementById('browse_button');
    this.auth.authCode = document.getElementById('auth_code');
    this.auth.message = document.getElementById('message');
    this.auth.signupmessage = document.getElementById('signupmessage');
    this.auth.optionHeading = document.getElementById('optionHeading');
    this.auth.deviceLink = document.getElementById("deviceLink");
    this.auth.title = document.getElementById('auth_title');
    this.auth.deviceLinkHeading = document.getElementById("deviceLinkHeading");
    this.auth.authOptions = document.getElementById("authOptions");
    this.auth.deviceLinkMessage = document.getElementById('message2');
    this.auth.generateCode = document.getElementById('generate_code');
    this.auth.logo = document.getElementById('auth-logo');

    this.auth.connectButton.classList.add('hover');
    this.auth.authOptions = document.getElementById('authOptions');
    this.auth.devicelink = document.getElementById('devicelink');
    this.auth.signin = document.getElementById('signin');
    this.auth.devicelinkButton = document.getElementById('devicelinkButton');
    this.auth.authContact = document.getElementById('authContact');

    this.auth.authOptionsLi = authOptions[0].querySelectorAll('li');
    this.auth.deviceLinkLi = devicelink.devicelink.querySelectorAll('li');
    this.auth.signinLi = signin.signin.querySelectorAll('li');
    this.auth.devicelinkButtonLi = devicelinkButton.devicelinkButton.querySelectorAll('li');

    this.auth.pincode = document.getElementById('pincode');
    this.auth.password = document.getElementById('password');
    this.auth.username = document.getElementById('username');

    this.auth.currentVisible = "";
    this.auth.authOptionPosition = 0;
    this.auth.deviceLinkPosition = 0;
    this.auth.showingContact = false;

    this.auth.mainMessage = document.getElementById('mainMessage'),
        Auth.addMouseEvents();
}

Display.auth_reset = function() {
    this.auth.authOptions.style.display = 'block';
}

Display.auth_addMouseEvent = function() {
    // this.auth.connectButton.addEventListener("mouseover", function() {
    //     this.classList.add('hover');
    // });
    // this.auth.connectButton.addEventListener("mouseout", function() {
    //     this.classList.remove('hover');
    // });
    // this.auth.connectButton.addEventListener("click", function() {
    //     Display.auth.FOCUS = "button";
    //     Display.auth_enter();
    // });

    // this.auth.browseButton.addEventListener("mouseover", function() {
    //     this.classList.add('hover');
    // });
    // this.auth.browseButton.addEventListener("mouseout", function() {
    //     this.classList.remove('hover');
    // });
    // this.auth.browseButton.addEventListener("click", function() {
    //     Display.auth.FOCUS = "browse";
    //     Display.auth_enter();
}

Display.auth_createPage = function(authcode) {
    // // // // console.log("Display.auth_createPage");

    //this.auth.title.style.display = 'none';

    Main.securityCode = authcode;

    Common.putInnerHTML(this.auth.authCode, authcode);
    //this.auth.authCode.style.display = 'block';
    //    this.auth.message.style.display = 'block';
    // this.auth.signupmessage.style.display = 'block';
    // this.auth.optionHeading.style.display = 'block';
    this.auth.connectButton.style.display = 'inline-block';
    this.auth.browseButton.style.display = 'inline-block';

    this.auth.FOCUS = 'button';
    this.auth.browseButton.classList.remove('hover');
    this.auth.connectButton.classList.add('hover');

    //    Display.auth.connectButton.style.cssText = 'background-color: ' + Main.login_background_color + '; color: ' + Main.login_button_color;
    Display.auth.connectButton.style.display = 'block';
    //  Display.auth.container.style.cssText = 'background-color: ' + Main.login_background_color;
    if (Main.login_browse_option != "false") {
        Display.auth.browseButton.style.display = 'block';
    } else {
        Display.auth.browseButton.style.display = 'none';
        Display.auth.connectButton.style.left = (1920 - 322.5) / 2 + 'px';
    }
    Display.auth.signupmessage.style.display = 'none';
    Display.auth.generateCode.style.display = 'none';
    Display.auth.optionHeading.style.display = 'none';
    Display.auth.message.innerHTML = Main.login_text;
    Display.auth.deviceLinkMessage.innerHTML = Main.device_link_text;

    /*  Display.auth.logo.style.backgroundImage = 'url("' + Main.logo_url+ '") 0 0 no-repeat';*/
    /*
    Display.auth.logo.style.top = '230px';
    Display.auth.logo.style.left = (1920-320)/2 + 'px';
     */
    // Display.auth.logo.style.cssText = 'background-image: url("' + Main.logo_url+ '") 0 0 no-repeat';

    //  document.getElementsByTagName("BODY")[0].style.cssText = 'background-color: ' + Main.background_color;

}

Display.auth_refreshPin = function(authCode) {
    mixpanel.track("refreshing pin", {
        "pin": authCode
    });

    Main.securityCode = authCode;
    Common.putInnerHTML(this.auth.authCode, authCode);

    Display.auth_StartLinkDevice();
}

Display.auth_StartLinkDevice = function() {
    clearInterval(Display.auth_LinkDevice);

    mixpanel.track("trying to auto-link");

    Display.auth_LinkDevice = window.setInterval(function() {
        Server.auth_linkDevice();
    }, 15000);

}

Display.auth_StopLinkDevice = function() {
    clearInterval(Display.auth_LinkDevice);
}

Display.auth_showClientAuthStatus = function(status) {
    if (status === true) {

        Common.putInnerHTML(this.auth.title, "Verifying your account...");
        if (Main.getDuid() === true) {
            // // // // console.log("DUID is TRUE");
            // Controller.showSpinner();
            // Main.linked = true;
            // // // // // // // // // console.log("Main.linked = " + Main.linked);
            // Main.getAccessToken();
            // // // // // // // // // // console.log("Main.refreshToken = " + Main.refreshToken);
            if (Main.refreshToken) {

                // // // // // // // // // console.log("Main.refreshTOken");
                mixpanel.track("refresh-token located", {
                    "refreshtoken": Main.refreshToken
                });
                Server.refreshToken('showClientAuthStatus');

            } else {

                // // // // console.log("auth_showClientAuthStats no refreshToken");
                mixpanel.track("device not linked");
                Server.auth_checkRegistration();
                //  Server.auth_registerDevice();
            }

        } else {
            mixpanel.track("new device");
            // Main.createDuid();
            // // // // console.log("new device");
            ////// // // // // // // // // // console.log("Display.auth_showClientAuthStatus");
            // Main.getDUID();
            Server.auth_registerDevice();
        }
    } else {
        mixpanel.track("Error", {
            "code": "showClientAuthStatus",
            "message": "Channel disabled"
        });
        Common.putInnerHTML(this.auth.title, "This channel is unavailable at the moment.");
        this.auth.message.style.display = 'block';
        this.auth.message.style.display = 'none';
        this.auth.optionHeading.style.display = 'none';
        this.auth.signupmessage.style.display = 'none';
    }

}

Display.auth_right = function() {
    return false;

    if (Display.auth.FOCUS == 'button') {
        this.auth.connectButton.classList.remove('hover');
        this.auth.browseButton.classList.add('hover');
        this.auth.FOCUS = "browse";
    }

    /*else if(Display.auth.FOCUS == "browse"){
    this.auth.browseButton.classList.remove('hover');
    this.auth.connectButton.classList.add('hover');
    this.auth.FOCUS = "button";
    }*/
}

Display.auth_left = function() {
    /*if(Display.auth.FOCUS == 'button'){
    this.auth.connectButton.classList.remove('hover');
    this.auth.browseButton.classList.add('hover');
    this.auth.FOCUS = "browse";
    } else */
    if (Display.auth.FOCUS == "browse") {
        this.auth.browseButton.classList.remove('hover');
        this.auth.connectButton.classList.add('hover');
        this.auth.FOCUS = "button";
    }
}

Display.auth_return = function() {
    if (Display.auth.FOCUS === "generatePin") {
        Display.auth_StopLinkDevice();
        this.auth.deviceLink.style.display = 'none';
        Display.auth.FOCUS = "button";
        this.auth.authOptions.style.display = 'block';
    } else {
        mixpanel.track("closing app", {
            "page": "auth-screen"
        });
        if (Main.app === "tizen") {
            //tizen.application.getCurrentApplication().exit();
        } else if (Main.app === "lg") {
            webOS.platformBack()
        }

        //window.close();
    }
}

Display.auth_up = function() {}

Display.auth_down = function() {}

Display.auth_showDeviceLink = function() {
    // // // // // // // // // // console.log("auth_showDeviceLink");
    this.auth.deviceLink.style.display = 'block';
    this.auth.authCode.style.display = 'block'
    this.auth.deviceLinkHeading.style.display = 'none';
    Display.auth.FOCUS = "generatePin";
    Display.auth_StartLinkDevice();
}

Display.auth_enter = function() {
    if (Display.auth.FOCUS == 'button') {
        this.auth.authOptions.style.display = 'none';
        mixpanel.track("sign-in");
        Display.auth_showDeviceLink();
        // Server.auth_checkRegistration();
    } else if (Display.auth.FOCUS == 'browse') {
        mixpanel.track("browsing");
        this.auth.authCode.style.display = 'none';
        this.auth.message.style.display = 'none';
        this.auth.signupmessage.style.display = 'none';
        this.auth.optionHeading.style.display = 'none';
        this.auth.connectButton.style.display = 'none';
        this.auth.browseButton.style.display = 'none';
        this.auth.title.style.display = 'block';
        //Controller.showSpinner();
        if (Scene_home.shown === true) {
            // do nothing
            // Controller.hideSpinner();
            Main.linked = false;
            Main.browsed = true;
            // // // // // // // // // console.log("home_setBrowseStatus");
            //Server.home_fetchContentByType('category');
            //  Server.auth_browse();
        } else {
            Main.linked = false;
            Main.browsed = true;
            // // // // // // // // // console.log("home_setBrowseStatus");
            Server.home_fetchContentByType('category');
            //  Server.auth_browse();
        }
        if (Display.homeContainer) {
            Display.homeContainer.innerHTML = '';
            if (Display.home.carousels) {
                Display.home.carousels = [];
            }
        }
        Controller.showHome();
    } else if (Display.auth.FOCUS === "generatePin") {
        //   Controller.showSpinner();
        //   Server.auth_generatePin();
    }
}

Display.auth_successPage = function() {
    Controller.showSpinner();
    Display.auth_StopLinkDevice();

    mixpanel.track("login success");

    this.auth.authOptions.style.display = 'none';
    this.auth.deviceLink.style.display = 'none';
    Common.putInnerHTML(this.auth.title, "Looks like we are all set!");
    this.auth.title.style.display = 'block';
    this.auth.authCode.style.display = 'none';
    this.auth.message.style.display = 'none';
    this.auth.signupmessage.style.display = 'none';
    this.auth.optionHeading.style.display = 'none';
    this.auth.connectButton.style.display = 'none';
    this.auth.browseButton.style.display = 'none';

    setTimeout(function() {
        Display.auth.authCode.style.display = 'none';
        Display.auth.message.style.display = 'none';
        Display.auth.signupmessage.style.display = 'none';
        Display.auth.optionHeading.style.display = 'none';
        Display.auth.connectButton.style.display = 'none';
        Display.auth.browseButton.style.display = 'none';
        Display.auth.title.style.display = 'block';
        Controller.showSpinner();
        Server.home_fetchContentByType('category');
        Controller.showHome();
        //  Controller.showHome();
        //    Server.fetch_getConsumerDetail();
    }, 3000);
    // Server.fetch_getConsumerDetail();
}

/**
 * Renders details page
 */
Display.details_createDetails = function(contenttype, id) {
    // // // // /// console.log("Display.details_createDetails");
    // console.log("Display.details_createDetails = ", contenttype);
    // // // // console.log("Display.id = ", id);
    Display.detailContainer.innerHTML = '';
    Display.details.carousels = [];
    Display.details.episodes = [];
    Display.details.currentCarousel = 0;
    Display.details.buttons = [];
    Display.details.currentButton = 0;
    Display.details.video = 0;
    Navigation.details.FOCUS = 'details';

    // Create cover layout
    Display.details_createCover();

    // Renders navigation arrows

    // Display.details.arrows = document.createElement('div');
    // Display.details.arrows.id = 'nav-details-arrows';
    // Display.details.arrows.className = 'nav-arrows details';
    // Display.details.arrows.style.cssText = 'top:671px;';
    // Display.details.arrows.innerHTML = '<div class="nav-arrow prev"></div><div class="nav-arrow next"></div>';
    // Display.details.arrowPrev = Display.details.arrows.querySelector('.prev');
    // Display.details.arrowNext = Display.details.arrows.querySelector('.next');
    // Display.details.arrowPrev.style.display = 'none';
    // Display.details.arrowNext.style.display = 'none';
    // Display.detailContainer.appendChild(Display.details.arrows);

    // Create carousel layout
    var carouselsOuterContainer = document.createElement('div');
    carouselsOuterContainer.className = 'carousels-outer';

    //
    var carouselsOuterwrapperLeft = document.createElement('div');
    carouselsOuterwrapperLeft.className = 'carousels-outer-wrapper-left';
    var carouselsOuterwrapperRight = document.createElement('div');
    carouselsOuterwrapperRight.className = 'carousels-outer-wrapper-right';
    //

    Display.detailContainer.appendChild(carouselsOuterContainer);

    Display.details.carouselsContainer = document.createElement('div');
    Display.details.carouselsContainer.className = 'carousels-container right-title';
    Display.details.carouselsContainerTranslateY = 0;

    carouselsOuterContainer.appendChild(carouselsOuterwrapperLeft);
    carouselsOuterContainer.appendChild(carouselsOuterwrapperRight);
    carouselsOuterContainer.appendChild(Display.details.carouselsContainer);



    // Get data
    if (contenttype === 'series') {
        Data.details.series.forEach(function(item) {
                //if (item.id === id)
                Data.details.currentVideo = item;
            }
            .bind(id));
        // // // // // // console.log("details_createDetails = " , Data.details.currentVideo);
        // console.log("Data.details.series = ", Data.details.series);
        // console.log("Data.details.currentVideo = ", Data.details.currentVideo);

        if (Navigation.home.mouseMove === true) {
            var currentItem = Data.home.playlists[Navigation.home.cursorValue - 1];
            var href = currentItem.items[Display.home.carousels[Navigation.home.cursorValue].currentItem]._links.items.href;

            //var currentItem = Data.home.playlists[Navigation.home.cursorValue - 1];
        } else {
            var currentItem = Data.home.playlists[Display.home.currentCarousel].items[Data.home.currentCarousel]
            var href = currentItem._links.items.href;
        }

        //mouse added
        //      // var currentItem = Data.home.playlists[Display.home.currentCarousel-1];
        // var href = currentItem.items[Display.home.carousels[Display.home.currentCarousel].currentItem]._links.items.href;
        //if (Data.details.currentVideo) {
        Server.details_fetchContentByUrl(href, 'season');
        //}
    } else if (contenttype === 'movie' || contenttype === 'largecarousel' || contenttype === 'live' || contenttype === 'mouseClick') {
        Data.details_setContentVideos(Data.details.playlist, contenttype);
        /*
        Data.details.playlist.forEach(function(item) {
        if (item.id === id) Data.details.currentVideo = item;
        }.bind(id));
        if (Data.details.currentVideo) {
        // // // // // // // // // console.log("Data.details.currentVideo._links.items.href = " + Data.details.currentVideo._links.items.href);
        Server.details_fetchContentByUrl(Data.details.currentVideo._links.items.href + "&per_page=500", 'videos');
        }
         */

    } else if (contenttype === 'tvshows') {
        Data.details_setContentVideos(Data.details.playlist, 'tvshows');
    } else if (contenttype === 'favorites') {
        Data.details_setContentVideos(JSON.parse(JSON.stringify(Data.home.favorites)), contenttype);
        //  Data.details_setContentVideos(Data.home.favorites, contenttype);
    } else if (contenttype === 'resume') {
        //  Data.details_setContentVideos(Data.home.resume, contenttype);
        Data.details_setContentVideos(Data.home.largeCarousel, "largecarousel");
    } else if (contenttype === 'search') {
        Data.details_setContentVideos(Data.home.search, contenttype);
    } else if (contenttype === 'videos') {
        //Server.details_fetchContentForMovie('videos', id);
        Server.getCatalougeByIdDetailPlaylist(id)
            //Server.details_fetchContentForMovie('videos', id);
    } else if (contenttype === 'channel') {
        //Data.details_setContentVideos(Data.home.playlists , 'channel');
        Data.details.channel.forEach(function(item) {
                //if (item.id === id)
                Data.details.currentVideo = item;
            }
            .bind(id));
        // // // // // // console.log("details_createDetails = " , Data.details.currentVideo);
        // console.log("Data.details.series = ", Data.details.series);
        // console.log("Data.details.currentVideo = ", Data.details.currentVideo);

        if (Navigation.home.mouseMove === true) {
            var currentItem = Data.home.playlists[Navigation.home.cursorValue - 1];
            var href = currentItem.items[Display.home.carousels[Navigation.home.cursorValue].currentItem]._links.items.href;

            //var currentItem = Data.home.playlists[Navigation.home.cursorValue - 1];
        } else {
            var currentItem = Data.home.playlists[Display.home.currentCarousel - 1];
            var href = currentItem.items[Display.home.carousels[Display.home.currentCarousel].currentItem]._links.items.href;
            var logourl = currentItem.items[Display.home.carousels[Display.home.currentCarousel].currentItem].thumbnail.small;

        }

        Server.details_fetchContentByUrl(href, 'season');


    }
    if (contenttype === 'channel') {
        // Renders logo
        var logoEl = document.createElement('div');
        logoEl.className = 'logo';
        logoEl.style = 'background: url(' + logourl + ')no-repeat; background-size: 302px 180px;';
        Display.detailContainer.appendChild(logoEl);
    } else {
        var logoEl = document.createElement('div');
        logoEl.className = 'logo';
        Display.detailContainer.appendChild(logoEl);
    }
    // Renders fade
    var fadeEl = document.createElement('div');
    fadeEl.className = 'fade fade-bottom';
    Display.detailContainer.appendChild(fadeEl);
}

/**
 * Renders cover and content layout
 */
Display.details_createCover = function() {
    Display.details.coverEl = document.createElement('div');
    Display.details.coverEl.className = 'detail-cover';

    Display.details.contentEl = document.createElement('div');
    Display.details.contentEl.className = 'detail-content';
    Display.details.contentTitle = document.createElement('h1');

    Display.details.contentDescription = document.createElement('p');

    Display.details.buttonGroup = document.createElement('div');
    Display.details.buttonGroup.className = 'detail-btn-group';

    Display.details.contentEl.appendChild(Display.details.contentTitle);
    Display.details.contentEl.appendChild(Display.details.contentDescription);
    Display.details.contentEl.appendChild(Display.details.buttonGroup);

    Display.detailContainer.appendChild(Display.details.coverEl);
    Display.detailContainer.appendChild(Display.details.contentEl);
}

Display.home_createCover = function() {
    // Display.home.coverEl = document.createElement('div');
    // Display.home.coverEl.className = 'home-cover';

    // Display.home.contentEl = document.createElement('div');
    // Display.home.contentEl.className = 'content-home';
    // Display.home.contentTitle = document.createElement('h1');

    // Display.home.contentDescription = document.createElement('p');

    // Display.home.buttonGroup = document.createElement('div');
    // Display.home.buttonGroup.className = 'detail-btn-group';

    // Display.home.contentEl.appendChild(Display.home.contentTitle);
    // Display.home.contentEl.appendChild(Display.home.contentDescription);
    // Display.home.contentEl.appendChild(Display.home.buttonGroup);

    // Display.homeContainer.appendChild(Display.home.coverEl);
    // Display.homeContainer.appendChild(Display.home.contentEl);
}

Display.updatePreview = function(props) {
        Display.package.detailspage.cover.style.cssText = 'display: block; background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.96) 0%, rgba(0, 0, 0, 0) 96%), url(' + props.coverart.large + ');'
        Display.package.detailspage.title.innerHTML = props.name;
        Display.package.detailspage.description.innerHTML = props.description;
        Controller.hideSpinner();

    }
    /**
     * Refresh the cover
     */
Display.details_updateCover = function() {

    var currentCarousel = Display.details.carousels[parseInt(Display.details.currentCarousel)];
 if(Display.details.carousels.length == 0){
    clearTimeout(this.updateCoverTimer);
    Controller.hideSpinner();
    Display.details.contentDescription.innerHTML= "No items Found"
 }else{
    if (Data.home.selectedType === 'series') {
        Data.details.currentVideo = Data.details.videos[currentCarousel.currentItem];
        Display.details.contentDescription.style.cssText = '-webkit-line-clamp: 3';
        mixpanel.track("selected series", {
            "item": Data.details.currentVideo.name
        });

        Display.details.contentDescription.style.cssText = '-webkit-line-clamp: 3';
    } else if (Data.home.selectedType === 'channel') {
        Data.details.currentVideo = Data.details.episodes[parseInt(Display.details.currentCarousel)][parseInt(currentCarousel.currentItem)];
        var selectedItem = Display.home.carousels[Display.home.currentCarousel].currentItem;
        mixpanel.track("selected series", {
            "item": Data.details.currentVideo.name
        });

        Display.details.contentDescription.style.cssText = '-webkit-line-clamp: 3';

    } else {
        // Data.details.currentVideo = Data.details.videos[currentCarousel.currentItem];
        Data.details.currentVideo = Data.details.videos[currentCarousel.currentItem];
        Display.details.contentDescription.style.cssText = '-webkit-line-clamp: 3';
    }
 
    Display.details.contentTitle.innerHTML = Data.details.currentVideo.name;
    Display.details.contentDescription.innerHTML = Data.details.currentVideo.description;

    Display.details.coverEl.style.cssText = 'background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%)';
    clearTimeout(this.updateCoverTimer);
    Display.setTimerToUpdateCover(currentCarousel);

    // Update buttons
    // if (Main.linked === true || Data.details.currentVideo.is_free === true) {
    //     if (Data.details.currentVideo.on_air === true || Data.details.currentVideo.title === "Gluuoo Sports") {
    //         Display.details.buttonGroup.innerHTML = '<button id="btn-play" class="btn-play">Live</button>';
    //     } else {
    //      if(Data.home.selectedType === 'channel'){
    //         Display.details.buttonGroup.innerHTML = '<button id="btn-streamlive" class="btn-streamlive">Stream Live</button> <button id="btn-play" class="btn-play">Play</button><button id="btn-vod-guide" class="btn-vod-guide">Tv Guide</button>'; //<button class="btn-favorite">';
    //     }else{
    //     Display.details.buttonGroup.innerHTML = '<button id="btn-play" class="btn-play">Play</button> <button id="btn-vod-guide" class="btn-vod-guide">Tv Guide</button> ';  
    //     }
    //     }
    // } else {
    //     Display.details.buttonGroup.innerHTML = '<button id="btn-subscribe" class="btn-subscribe">Sign In</button>';
    // }
    //    if (Main.linked === true || Data.details.currentVideo.is_subscribed === true) {
    if (Data.home.selectedType == 'series') {
        //Data.details.selectedType = 'series'
        Display.details.buttonGroup.innerHTML = '<button id="btn-play" class="btn-play">Watch</button>'
    } else if (Main.linked == true) {
        console.log(Data.home.selectedType)
        Display.details.buttonGroup.innerHTML = '<button id="btn-play" class="btn-play">Play</button>';
        //   Display.details.buttonGroup.innerHTML = '<button id="btn-play" class="btn-play">Play</button> <button id="btn-vod-guide" class="btn-vod-guide">Tv Guide</button> '; 
        // }
        //}
    } else {
        Display.details.buttonGroup.innerHTML = '<button id="btn-subscribe" class="btn-subscribe">Subscribe</button>';
    }

    //if (Data.details_isResume())
    // Display.details.buttonGroup.innerHTML = '<button id="btn-resume" class="btn-resume">Resume</button>' + Display.details.buttonGroup.innerHTML;

    Display.details.buttons = Display.details.contentEl.querySelectorAll('.detail-content button');
    //Display.details.buttonFavorite = Display.details.contentEl.querySelector('.btn-favorite');

    if (Navigation.details.FOCUS === 'details')
        Display.details.buttons[parseInt(Display.details.currentButton)].classList.add('active');
 }
}

Display.home_updateCover = function() {
    var currentCarousel = Display.home.carousels[parseInt(Display.home.currentCarousel)];
    Data.home.currentVideo = Data.home.playlists[parseInt(Display.home.currentCarousel)].items[parseInt(currentCarousel.currentItem)];
    Display.home.contentDescription.style.cssText = '-webkit-line-clamp: 3';

    Display.home.contentTitle.innerHTML = Data.home.currentVideo.name;
    Display.home.contentDescription.innerHTML = Data.home.currentVideo.description;

    Display.home.coverEl.style.cssText = 'background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%)';
    clearTimeout(this.home_updateCover);
    Display.home_setTimerToUpdateCover(currentCarousel);

    // Update buttons
    // if (Main.linked === true || Data.details.currentVideo.is_free === true) {
    //     if (Data.details.currentVideo.on_air === true || Data.details.currentVideo.title === "Gluuoo Sports") {
    //         Display.details.buttonGroup.innerHTML = '<button id="btn-play" class="btn-play">Live</button>';
    //     } else {
    //      if(Data.home.selectedType === 'channel'){
    //         Display.details.buttonGroup.innerHTML = '<button id="btn-streamlive" class="btn-streamlive">Stream Live</button> <button id="btn-play" class="btn-play">Play</button><button id="btn-vod-guide" class="btn-vod-guide">Tv Guide</button>'; //<button class="btn-favorite">';
    //     }else{
    //     Display.details.buttonGroup.innerHTML = '<button id="btn-play" class="btn-play">Play</button> <button id="btn-vod-guide" class="btn-vod-guide">Tv Guide</button> ';  
    //     }
    //     }
    // } else {
    //     Display.details.buttonGroup.innerHTML = '<button id="btn-subscribe" class="btn-subscribe">Sign In</button>';
    // }
    //    if (Main.linked === true || Data.details.currentVideo.is_subscribed === true) {
    if (Data.home.currentVideo.subscribed == true) {
        console.log(Data.home.selectedType);
        Display.home.buttonGroup.innerHTML = '<button id="btn-play" class="btn-play">Play</button><button aria-label="add to favorite"  class="btn-favorite">';
        //   Display.details.buttonGroup.innerHTML = '<button id="btn-play" class="btn-play">Play</button> <button id="btn-vod-guide" class="btn-vod-guide">Tv Guide</button> '; 
        // }
        //}
    } else {
        Display.home.buttonGroup.innerHTML = '<button id="btn-subscribe" class="btn-subscribe">Subscribe</button>';
    }

    if (Data.details_isResume())
        Display.home.buttonGroup.innerHTML = '<button id="btn-resume" class="btn-resume">Resume</button>' + Display.home.buttonGroup.innerHTML;

    Display.home.buttons = Display.home.contentEl.querySelectorAll('.content-home button');
    Display.home.buttonFavorite = Display.home.contentEl.querySelector('.btn-favorite');

    if (Navigation.home.FOCUS === 'details')
        Display.home.buttons[parseInt(Display.home.currentButton)].classList.add('active');
    if (Data.home_isFavorited())
        Display.home.buttonFavorite.classList.add('added');
}



/**
 * Update cover on timeout
 */
Display.setTimerToUpdateCover = function(val) {
    //  Display.details.coverEl.style.cssText = 'background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%)';
    //  Display.details_updateCover();
    clearTimeout(this.updateCoverTimer);
    // // // // // // // // // // console.log("Player setTimerToHide");
    // // // // // // // // // // console.log("Player.FOCUS = " + Player.FOCUS);
    
    this.updateCoverTimer = setTimeout(function() {
        // Display.details_updateCover();
        if (Data.home.selectedType === 'resume') {
            //Data.details.currentVideo.coverart = [];
            // Data.details.currentVideo.thumbnail.small = Data.details.currentVideo.coverarts[0].url;
            Display.details.coverEl.style.cssText = 'background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%), url(' + Data.details.currentVideo.coverart.large + ')';

        } else if (Data.home.selectedType === 'channel') {
            Display.details.coverEl.style.cssText = 'background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%), url(' + Data.details.currentVideo.thumbnail.small + ')';
        } 
        else {
            Display.details.coverEl.style.cssText = 'background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%), url(' + Data.details.currentVideo.coverart.medium + ')';
        }

        // console.log("Data.details.currentVideo = ", Data.details.currentVideo);

    }, 0);
}
Display.home_setTimerToUpdateCover = function(val) {
    //  Display.details.coverEl.style.cssText = 'background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%)';
    //  Display.details_updateCover();
    clearTimeout(this.home_updateCoverTimer);
    // // // // // // // // // // console.log("Player setTimerToHide");
    // // // // // // // // // // console.log("Player.FOCUS = " + Player.FOCUS);
    this.home_updateCoverTimer = setTimeout(function() {
        // Display.details_updateCover();
        if (Data.home.currentVideo.currentPlay) {
            if (Data.home.currentVideo.currentPlay.show_title) {
                var data = Data.home.currentVideo.currentPlay;
                var strInnerHTML = ''
                if (data.coverart) {
                    strInnerHTML += '<div class="home-live-image" style="background-image: url(' + data.coverart + ')"></div> <div class="home-live-btn"></div> <div class=" live-btn-text">On-Air</div><div class="home-live-text" style="">'

                }
                if (data.show_title) {
                    strInnerHTML += '<div class="live-title" style="">' + data.show_title + '</div>'
                }
                if (data.description) {
                    strInnerHTML += '<p style="">' + data.description + '</p>'
                }
                if (data.ratings) {
                    if (data.ratings[0]) {
                        strInnerHTML += '<div class="live-rating">' + data.ratings[0].body + ' : ' + data.ratings[0].code + '</div>'
                    }

                }
                strInnerHTML += '</div>';
                Display.home.coverEl.innerHTML = strInnerHTML;
                strInnerHTML = "";
                Display.home.coverEl.classList.add('live');
            } else {
                Display.home.coverEl.innerHTML = '';
                Display.home.coverEl.classList.remove('live');
                Display.home.coverEl.style.cssText = 'background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%), url(' + Data.home.currentVideo.coverart.medium + ')';

            }
        } else {
            Display.home.coverEl.innerHTML = '';
            Display.home.coverEl.classList.remove('live');
            Display.home.coverEl.style.cssText = 'background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%), url(' + Data.home.currentVideo.coverart.medium + ')';
        }

        // console.log("Data.details.currentVideo = ", Data.details.currentVideo);

    }, 0);
}

/**
 * Renders carousel
 */
Display.details_createCarousel = function(props) {

        if (props.contenttype != "live") {
            props.currentItem = 0
        }
        if (props.items.length === 0)
            return;

        var carousel = {
            id: props.id || 'carousel-regular',
            name: props.name || '',
            container: document.createElement('div'),
            containerHeight: 0,
            ul: document.createElement('ul'),
            items: [],
            itemWidth: 300,
            currentItem: 0,
            translateX: 55,
            showprev: false,
            shownext: false,
            typeOfCarousel: "regular-details",
            rectMin: 39.5,
        };

        // // // console.log("Display.details_createCarousel - ", props);

        carousel.container.id = props.id || 'carousel-regular';
        carousel.container.className = 'carousel carousel-regular';
        if (props.items[0] && typeof props.items[0].type === 'undefined') {
            if (props.contenttype === 'largecarousel') {
                props.name = props.title;
            }
            carousel.container.innerHTML += '<div class="h2">' + (props.name || '') + '</div> <div class="in-nav-arrows regular"> <div class="nav-arrow prev" ></div> <div class="nav-arrow next" ></div> </div>';
        } else if (typeof props.name != 'undefined' && props.name.indexOf("earch") !== -1) {
            carousel.container.innerHTML += '<div class="h2">' + (props.name || '') + '</div> <div class="in-nav-arrows regular"> <div class="nav-arrow prev" ></div> <div class="nav-arrow next" ></div> </div>';
        } else {
            carousel.container.innerHTML += '<div class="h2"></div> <div class="in-nav-arrows regular"> <div class="nav-arrow prev" ></div> <div class="nav-arrow next" ></div> </div>';
            //-webkit-line-clamp
        }
        carousel.ul.className = 'detail-carousel';

        // // // // // // console.log("props = " , props.items[0]);

        // // // // // // // // // // console.log("details_createCarousel");
        //carousel.ul.innerHTML = props.items.map(function(item , index) {
        // carousel.ul.innerHTML = props.items.map(function (item, index) {
        //         var loaderImg = "img/favicon-194x194.png";
        //         //// console.log("hello world");

        //         if (typeof item.duration === 'undefined') {
        //             item.duration = [];
        //             item.duration.formatted = '';
        //         }

        //         if (props.contenttype === 'largecarousel') {
        //             //  // console.log("item = ", item);
        //             item.name = item.title;
        //             return '<li><div class="carousel-img img-regular img" data-index="' + index + '" data-id="' + carousel.container.id + '"' +
        //             (item.coverarts ? ' style="background-image:url(' + (index < 9 ? item.coverarts[0].url : loaderImg) + ')"' : '') + '></div>' +
        //             '<div class="detail_name">' + (item.name ? item.name : '') + '</div><div class="detail_duration">' + (item.duration ? item.duration.formatted : '') + '</div></li>';
        //         } else if ((index >= (props.currentItem - 7)) || (index <= (props.currentItem + 7)) && (props.contenttype === "movies")) {
        //             return '<li><div class="carousel-img img-regular img" data-index="' + index + '" data-id="' + carousel.container.id + '"' +
        //             (item.coverart ? ' style="background-image:url(' + item.thumbnail.small + ')"' : '') + '></div>' +
        //             '<div class="detail_name">' + (item.name ? item.name : '') + '</div><div class="detail_duration">' + (item.duration ? item.duration.formatted : '') + '</div></li>';
        //         } else {
        //             //  // console.log("item = ", item);
        //             item.duration = [];
        //             item.duration.formatted = '';
        //             return '<li><div class="carousel-img img-regular img" data-index="' + index + '" data-id="' + carousel.container.id + '"' +
        //             (item.coverart ? ' style="background-image:url(' + (index < 9 ? item.thumbnail.small : loaderImg) + ')"' : '') + '></div>' +
        //             '<div class="detail_name">' + (item.name ? item.name : '') + '</div><div class="detail_duration">' + (item.duration ? item.duration.formatted : '') + '</div></li>';
        //         }
        //     }).join('');

        carousel.ul.innerHTML = props.items.map(function(item, index) {
            var loaderImg = "img/favicon-194x194.png";
            //console.log("hello world");
            if (props.contenttype === 'largecarousel') {
                //  console.log("item = ", item);
                item.name = item.name;
                return '<li data-type="' + item.type + '" data-type="' + item.id + '"><div class="carousel-img img-regular img" data-index="' + index + '" data-id="' + carousel.container.id + '"' +
                    (item.coverart ? ' style="background-image:url(' + item.thumbnail.medium + ')"' : '') + '></div>' +
                    '<div class="detail_name">' + (item.name ? item.name : '') + '</div></li>';
            } else if (true) {
                return '<li data-type="' + item.type + '" data-type="' + item.id + '" ><div class="carousel-img img-regular img" data-index="' + index + '" data-id="' + carousel.container.id + '"' +
                    (item.coverart ? ' style="background-image:url(' + item.thumbnail.medium + ')"' : '') + '></div>' +
                    '<div class="detail_name">' + (item.name ? item.name : '') + '</div></li>';
            } else {
                //  console.log("item = ", item);
                item.duration = [];
                // = '';
                return '<li data-type="' + item.type + '" data-type="' + item.id + '"><div class="carousel-img img-regular img" data-index="' + index + '" data-id="' + carousel.container.id + '"' +
                    (item.coverart ? ' style="background-image:url(' + item.thumbnail.medium + ')"' : '') + '></div>' +
                    '<div class="detail_name">' + (item.name ? item.name : '') + '</div></li>';
            }
        }).join('');

        carousel.container.appendChild(carousel.ul);

        // Renders carousel

        props.parent.appendChild(carousel.container);

        // TODO refactor
        // carousel.containerHeight = carousel.container.offsetHeight || 185;
        carousel.containerHeight = carousel.container.offsetHeight || 400;
        carousel.items = carousel.ul.querySelectorAll('li');
        carousel.itemWidth = (carousel.items[0].offsetWidth || 300) + 40; // 6 is margin
        carousel.translateX = 55;
        if (props.currentItem === undefined) {
            carousel.currentItem = carousel.items.length > 1 ? 0 : 0;
            carousel.translateX -= carousel.currentItem * carousel.itemWidth;
        } else if (props.currentItem === 0) {
            carousel.currentItem = props.currentItem;
        } else {
            carousel.currentItem = props.currentItem;
            carousel.translateX -= carousel.itemWidth;
            if (props.currentItem > 3) {
                carousel.translateX -= (carousel.currentItem - 3) * carousel.itemWidth;
            }
        }
        // refactor

        carousel.ul.style.cssText = '-webkit-transform: translateX(' + carousel.translateX + 'px)';
        if (carousel.items.length < 6) {

            carousel.shownext = false;
        } else {
            carousel.shownext = true;
        }
        if (carousel.currentItem > 6) {
            carousel.showprev = true;
        }
        // MouseEvents.addEventToRow(carousel);
        Display.details.carousels.push(carousel);
        Controller.hideSpinner();
        return carousel;
    }
    /**
    render subcription

    **/

// Display.updatePackageDetails = function (index){

//  var carousel = {
//        // id: props.id,
//         container: document.createElement('div'),
//         ul: document.createElement('ul'),
//         arrowNext: null,
//         arrowPrev: null,
//         items: [],
//         itemWidth: 0,
//         currentItem: 0,
//         translateX: 0,
//     };


//  var container = document.getElementById('details-package');
//  container.innerHTML = "";
//  container.ul = document.createElement('ul');
//  container.ul.setAttribute('data-id', index);



// container.ul.innerHTML = Data.subcription.is_subscribed_false[index]._subplan.map(function(item ,index){

//  return '<li><div class="cnt-pak-detail" ><div class="name">'+item.Description+'</div><div class="logo logo-pak"></div><div class="price">$'+item.Price+'</div><div class="title">'+item.title+'</div><div class="btn">suscribe</div></div></li>';

//  }).join('');
// container.appendChild(container.ul);
// Controller.hideSpinner();

// }

Display.packageUpdateChannel = function(props) {
    Display.package.channel = [];
    var carousel = {

        // id: props.id,
        //container: document.getElementById('details-package'),
        container: document.createElement('div'),
        ul: document.createElement('ul'),
        arrowNext: null,
        arrowPrev: null,
        items: [],
        itemWidth: 240,
        currentItem: 0,
        translateX: 0,
    };
    carousel.container.className = 'carousel carousel-regular';
    carousel.ul.class = 'list-details-package';
    carousel.container.innerHTML = "";
    carousel.container.innerHTML = '<div class="h2" style="margin-left: 12px;">Available channels for ' + (props.name || '') + '</div>';
    carousel.ul.innerHTML = props.items.items.map(function(item, index) {

        return '<li data-type="package"><div class="img"' +
            (item.coverart ? 'style="background-image:url(' + item.thumbnail.small + ')"' : '') + '></div>' +
            '<div class="name">' + (item.name ? item.name : '') + '</div></li>';
    }).join('');
    carousel.container.appendChild(carousel.ul);
    props.parent.innerHTML = '';
    props.parent.appendChild(carousel.container);
    carousel.items = carousel.ul.querySelectorAll('li');
    carousel.itemWidth = (carousel.items[0].offsetWidth || 360) + 9;
    Display.package.channel.push(carousel);
    Display.package.channel[0].items[0].classList.add('active');
    //Navigation.package.FOCUS = 'large';
    var currentCarousel = Display.package.carousels[Display.package.currentCarousel];
    Display.updatePackageDetails({
        index: currentCarousel.currentItem,
        items: Data.subcription.is_subscribed_false[currentCarousel.currentItem],
        parent: document.getElementById('details-package'),
    });
    Navigation.package.FOCUS = 'regular';

}
Display.updatePackageDetails = function(props) {
    Display.package.details = [];
    var carousel = {

        // id: props.id,
        //container: document.getElementById('details-package'),
        container: document.createElement('div'),
        ul: document.createElement('ul'),
        arrowNext: null,
        arrowPrev: null,
        items: [],
        itemWidth: 0,
        currentItem: 0,
        translateX: 0,
    };

    // carousel.container.id = 'package-carousel'
    carousel.container.className = 'package-carousel-details';
    carousel.ul.class = 'list-details-package';
    carousel.container.innerHTML = "";

    // container.ul = document.createElement('ul');
    // container.ul.setAttribute('data-id', index);



    carousel.ul.innerHTML = props.items.subscriptions.map(function(item, index) {

        return '<li><div class="cnt-pak-detail" data-index="' + index + '"><div class="name">' + item.duration + ' ' + item.period + ' </div><div class="price">$' + item.price + ':' + item.currency + '</div><div class="title">' + item.title + '</div><div class="btn">suscribe</div></div></li>';

    }).join('');

    props.parent.innerHTML = '';
    carousel.container.appendChild(carousel.ul);
    props.parent.appendChild(carousel.container);
    carousel.items = carousel.ul.querySelectorAll('li');
    carousel.itemWidth = (carousel.items[0].offsetWidth || 360) + 9;
    Display.package.details.push(carousel);
    Controller.hideSpinner();



}




Display.package_createLargeCarousel = function(props) {

    if (typeof props === 'undefined' || props.items.length === 0) return;

    var carousel = {
        // id: props.id,
        container: document.createElement('div'),
        ul: document.createElement('ul'),
        arrowNext: null,
        arrowPrev: null,
        items: [],
        itemWidth: 0,
        currentItem: 0,
        translateX: 0,
        showprev: false,
        shownext: false,
        typeOfCarousel: "regular-packages",
        rectMin: 39.5,
    };
    Data.subcription.is_subscribed_false = [];
    // Data.subscription.is_subscribed_false = [];
    carousel.container.id = 'package-carousel'
    carousel.container.innerHTML = "<div class='in-nav-arrows menu'> <div class='nav-arrow prev menu' ></div> <div class='nav-arrow next' ></div> </div>"
    carousel.container.className = 'package-carousel';
    carousel.ul.class = 'list-large';
    var flag = true;
    var data_index = -1;
    carousel.ul.innerHTML = props.items.map(function(item, index) {
        if (item.isActive === true) {
            data_index = data_index + 1;
            Data.subcription.is_subscribed_false.push(item);
            //  Data.subscriptions.is_subcribed_false.push(item); 
            return '<li><div class="name">' + item.title + '</div></li>'
        }

    }).join('');

    carousel.container.appendChild(carousel.ul);

    // Renders carousel
    props.parent.innerHTML = '';

    var cont = document.getElementById('setting-package');
    //cont.innerHTML = "";

    props.parent.appendChild(carousel.container);

    var package_channel = document.createElement('div');
    package_channel.id = "channel-package";
    package_channel.className = "channel-package";
    document.getElementById('setting-package').appendChild(package_channel);

    var package_details = document.createElement('div');
    package_details.id = "details-package";
    package_details.className = "details-package";
    document.getElementById('setting-package').appendChild(package_details);
    // carousel.items = carousel.ul.querySelectorAll('li');
    // carousel.itemWidth = (carousel.items[0].offsetWidth || 394) + 20;    


    carousel.items = carousel.ul.querySelectorAll('li');
    carousel.itemWidth = (carousel.items[0].offsetWidth || 394) + 20;
    if (carousel.items.length < 6) {
        carousel.showprev = false;
        carousel.shownext = false;
    } else {
        carousel.shownext = true;
    }
    //MouseEvents.addEventToRow(carousel);


    Display.package.carousels.push(carousel);

    //Navigation.package_toggleArrows();
}




/**
 * Renders home page
 */
Display.home_createHome = function() {

    // // // // // // console.log("Display.home_createHome");

    Display.homeContainer.innerHTML = '';
    Display.home.carousels = [];
    Display.home.currentCarousel = 0;

    //Renders fade
    var fadeEl = document.createElement('div');
    fadeEl.className = 'fade fade-bottom';
    Display.homeContainer.appendChild(fadeEl);

    // // Renders profile
    // Display.home.profileButton = document.createElement('button');
    // Display.home.profileButton.className = 'button-setting';
    // Display.home.profileButton.id = 'button-setting';
    // //check if user is in browse option that not show profile button
    // if(Server.serial === 'demo-serial'){
    // Display.home.profileButton.style.cssText = 'display:none;' 
    // }else{
    //  Display.home.profileButton.style.cssText = 'display:block;'
    //  Display.homeContainer.appendChild(Display.home.profileButton);
    // }




    // Renders search
    Display.home.searchButton = document.createElement('button');
    Display.home.searchButton.className = 'button-search';
    Display.home.searchButton.id = 'button-search';
    if (Server.serial === 'demo-serial') {

        Display.home.searchButton.style.cssText = 'left:93px; display:none;';
        //Display.home.profileButton.style.cssText = 'display:none;'  
    } else {
        Display.home.searchButton.style.cssText = '';
    }

    //Display.homeContainer.appendChild(Display.home.searchButton);

    // Renders logo
    var homeLogo = document.createElement('div');
    homeLogo.className = 'home-logo-bg';


    var logoEl = document.createElement('div');
    logoEl.className = 'logo';
    homeLogo.appendChild(logoEl);
    Display.homeContainer.appendChild(homeLogo);

    // Renders logo
    var logoEl = document.createElement('div');
    logoEl.className = 'logo';
    Display.homeContainer.appendChild(logoEl);
    // var logoGradient = document.createElement('div');
    // logoGradient.className = 'logo_back';
    // Display.homeContainer.appendChild(logoGradient);
    // render nav buttons //jay
    //  if(Main.show_featured){
    //  Display.home.arrows = document.createElement('div');
    //  Display.home.arrows.id = 'nav-home-arrows';
    //  Display.home.arrows.style = '';
    //  Display.home.arrows.className = 'nav-arrows large';
    //  Display.home.arrows.innerHTML = '<div class="nav-arrow prev"></div><div class="nav-arrow next"></div>';
    //  Display.home.arrowPrev = Display.home.arrows.querySelector('.prev');
    //  Display.home.arrowNext = Display.home.arrows.querySelector('.next');
    // // Display.home.arrowTop = Display.home.arrows.querySelector('.top');
    // // Display.home.arrowBottom = Display.home.arrows.querySelector('.bottom');
    //  Display.homeContainer.appendChild(Display.home.arrows);

    //  }
    Display.home.arrowup = document.createElement('div');
    Display.home.arrowup.id = 'home-up';
    Display.home.arrowup.style = 'display:none;';
    Display.home.arrowup.className = 'arrow-up';
    Display.homeContainer.appendChild(Display.home.arrowup);
    Display.home.arrowdown = document.createElement('div');
    Display.home.arrowdown.id = 'home-down';
    Display.home.arrowdown.style = 'display:none;';
    Display.home.arrowdown.className = 'arrow-down';
    Display.homeContainer.appendChild(Display.home.arrowdown);

    Display.home_createCover();
    Display.home_createMenuCarousel({

        id: 'carousel-menu',
        parent: Display.homeContainer,
        items: Data.home.menuitems,

    });
    if (Main.header_playlist_id != null) {
        if (Main.show_featured) {
            Display.home_createLargeCarousel({
                id: 'carousel-large',
                parent: Display.homeContainer,
                items: Data.home.first_playlist_row,
            });
        }

    }
    // Create regular carousels layout
    var carouselsOuterContainer = document.createElement('div');
    carouselsOuterContainer.className = 'carousels-outer';

    if (typeof Display.home.carousels === 'undefined' || Display.home.carousels.length === 0) {

        if (Main.show_featured) {
            carouselsOuterContainer.style.top = '200px';
        } else {
            carouselsOuterContainer.style.top = '90px';
        }

    }

    Display.homeContainer.appendChild(carouselsOuterContainer);

    var carouselsOuterwrapperLeft = document.createElement('div');
    carouselsOuterwrapperLeft.className = 'carousels-outer-wrapper-left';
    var carouselsOuterwrapperRight = document.createElement('div');
    carouselsOuterwrapperRight.className = 'carousels-outer-wrapper-right';
    carouselsOuterContainer.appendChild(carouselsOuterwrapperLeft);
    carouselsOuterContainer.appendChild(carouselsOuterwrapperRight);

    Display.home.carouselsContainer = document.createElement('div');
    Display.home.carouselsContainer.className = 'carousels-container';
    Display.home.carouselsContainerTranslateY = 0;

    carouselsOuterContainer.appendChild(Display.home.carouselsContainer);

    //Controller.hideSpinner();

    Display.home_updateHome();

    // Display.home.currentCarousel = 0;
    if (typeof Display.home.carousels != 'undefined' && Display.home.carousels.length > 0 && Main.show_featured) {
        //  Display.home.currentCarousel = 0;
        Display.home.carousels[0].currentItem = 0;
        Display.home.carousels[0].items[0].classList.add('active');
        Navigation.home.FOCUS = 'large';
        //Navigation.home_toggleArrows();

    } else {
        // // // // console.log("Data.home.regular_carousel_loaded = ", Data.home.regular_carousel_loaded);
        // // // // console.log("Data.home.regular_focus = ", Data.home.regular_focus);
        if (Data.home.regular_carousel_loaded > 0 && Data.home.regular_focus === false) {
            // // // // console.log("move focus to SMALL carousel");
            Navigation.home.FOCUS = 'regular';
            var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
            currentCarousel.items[currentCarousel.currentItem].classList.add('active');
            //  Navigation.home_shiftDown();
            Data.home.regular_focus = true;
        }
    }
    if (Main.header_playlist_id == null && Main.show_featured == false) {
        Navigation.home.FOCUS = 'regular';
    }
    // Display.home_createHomeMenu(Data.home.menuitems)
}


Display.home_createMenuCarousel = function(props) {
    if (typeof props === 'undefined' || typeof props.items === 'undefined' || typeof props.items.length === 'undefined' || props.items.length === 0 || document.getElementById(props.id))
        return;

    var carousel = {
        id: props.id,
        container: document.createElement('div'),
        ul: document.createElement('ul'),
        arrowNext: null,
        arrowPrev: null,
        items: [],
        itemWidth: 258,
        currentItem: 0,
        translateX: 0,
        homeItem: 2,
        showprev: false,
        shownext: false,
        typeOfCarousel: "menu",
    };



    carousel.container.id = props.id;
    carousel.container.className = props.id;
    carousel.container.innerHTML = "<div class='in-nav-arrows menu'> <div class='nav-arrow prev menu' ></div> <div class='nav-arrow next' ></div> </div>"
    carousel.ul.id = 'list-menu';

    carousel.ul.innerHTML = props.items.map(function(item, index) {
        return '<li data-action=' + item.action + ' data-id=' + index + ' class=' + (item.defaultActive == 'true' ? 'active' : '') + '><div class="menu-item" data-index="' + index + '" data-id="' + item.type + '">' + item.name + '</div></li>'
    }).join('');
    carousel.container.appendChild(carousel.ul);

    // Renders carousel
    props.parent.appendChild(carousel.container);


    carousel.items = carousel.ul.querySelectorAll('li');

    carousel.itemWidth = 258; // 6 is margin
    if (carousel.items.length < 6) {
        carousel.showprev = false;
        carousel.shownext = false;
    } else {
        carousel.shownext = true;
    }
    // MouseEvents.addEventToRow(carousel);

    //carousel.translateX = (Display.screen.width -  carousel.itemWidth) / 2 - carousel.itemWidth; // Shit the center and move to one
    //  carousel.ul.style.cssText = '-webkit-transform: translateX(' + carousel.translateX + 'px)';
    Display.home.menu = [];
    Display.home.menu.push(carousel);

}

Display.home_createHomeMenu = function(data) {
    var menuitems = data;
    var menucarousel = Display.home_createMenuCarousel({

        id: 'carousel-menu',
        parent: Display.homeContainer,
        items: menuitems,

    });




}

/**
 * Updates home
 * TODO: Handle when we remove the last favorite item and return to the home
 */
Display.home_updateHome = function() {


    if (Data.home.favorites.length) {
        Display.home.alreadyRendered = true;
        //  // // // console.log("Data.home.favourites.length = " + Data.home.favorites.length);
        if (Data.home.playlists[0] && Data.home.playlists[0].id === 'favorites') {
            //    // // // console.log("Data.home.playlists[0] is FAVOURITE");
            Data.home.playlists[0].items = Data.home.favorites;
        } else {

            Data.home.playlists.splice(0, 0, {
                id: 'favorites',
                name: 'My List',
                items: Data.home.favorites
            });
        }

    } else if (Data.home.playlists[0] && Data.home.playlists[0].id === 'favorites') {

        Data.home.playlists.splice(0, 1);

    }

    Display.home_createCarousel({
        id: 'carousel-favorites',
        name: 'My List',
        parent: Display.home.carouselsContainer,
        items: Data.home.favorites,
        position: 0,
    });

    Data.home_setResume();

}


Data.home_setVerifyDevice = function(caller, response) {
    // // // console.log("Data.home_setVerifyDevice = ", response);

    if (caller === "showClientAuthStatus") {
        var res = response.response;
        if (res && res.linked) {
            Main.token = res.token;
            // if(login)
            Auth.showSuccessPage();
        } else {
            setTimeout(function() {
                Server.getPackages();

            }, 3000);
        }
    } else if (caller === "StartLinkDevice") {
        // // // // // // // // console.log("StartLinkDevice");
        var res = response.response;
        if (res && res.linked) {
            Main.token = res.token;
            Server.getPackages();
            Auth.showSuccessPage();
        }
    }
}

/**
 * Create, update or remove (if element exists and data is empty) carousel
 */
Display.home_createCarousel = function(props) {
    var el = document.getElementById(props.id);

    var index = -1;

    Display.home.carousels.forEach(function(item, i) {
        if (item.id === props.id) index = i;
    }.bind(props.id));

    index = el ? index : -1;

    if (props.items.length === 0) {
        // Remove the element and item and reorder carousels
        if (el) {
            el.parentNode.removeChild(el);
            Display.home.carousels.splice(index, 1);
            if (Navigation.home.FOCUS === 'regular') {
                Display.home.currentCarousel -= 1;
                if (Display.home.currentCarousel === 0) {
                    var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
                    currentCarousel.items[currentCarousel.currentItem].classList.add('active');
                    Display.home.carouselsContainerTranslateY = 0;
                } else {
                    Display.home.carouselsContainerTranslateY += Display.home.carousels[Display.home.currentCarousel].containerHeight;
                }
            } else {

                if (Display.home.currentCarousel === 0) {
                    var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
                    currentCarousel.items[currentCarousel.currentItem].classList.add('active');
                    Navigation.home.FOCUS = 'regular';
                    Display.home.carouselsContainerTranslateY = 0;
                    Display.home.carouselsContainer.style.cssText = '-webkit-transform: translateY(' + Display.home.carouselsContainerTranslateY + 'px)';
                } else {
                    Display.home.currentCarousel -= 1;
                    var currentCarousel = Display.home.carousels[Display.home.currentCarousel];
                    currentCarousel.items[currentCarousel.currentItem].classList.add('active');
                    Navigation.home.FOCUS = 'regular';
                    Display.home.carouselsContainerTranslateY += Display.home.carousels[Display.home.currentCarousel].containerHeight;


                }
            }
            Display.home.carouselsContainer.style.cssText = '-webkit-transform: translateY(' + Display.home.carouselsContainerTranslateY + 'px)';

        }
        return;
    }

    var carousel = index > -1 ? Display.home.carousels[index] : {
        id: props.id,
        name: props.name || '',
        container: el ? el : document.createElement('div'),
        containerHeight: 0,
        ul: document.createElement('ul'),
        items: [],
        itemWidth: 0,
        currentItem: 0,
        translateX: 0,
        showprev: false,
        shownext: false,
        typeOfCarousel: "regular-home",
        rectMin: 57,
    };

    // // // // // // // // console.log("items = ", props.items);
    // // // // // // // // console.log("items index = ", index);
    // // // // // // // // console.log("items size = " + props.items.length);

    carousel.container.id = props.id;
    carousel.container.className = 'carousel carousel-regular';
    carousel.container.innerHTML = '<div aria-label="' + props.name + '" class="h2" style="color:' + Main.text_color + '">' + (props.name || '') + '</div><div class="in-nav-arrows regular"> <div class="nav-arrow prev" ></div> <div class="nav-arrow next" ></div> </div>';
    carousel.ul.innerHTML = props.items.map(function(item) {
        //// // // // // // // // console.log("item.coverart = " +item.coverart);
        //// // // // // // // // console.log("item.name = " + item.name);
        //if(item.coverart && item.coverart.medium && item.name){
        return '<li aria-label="' + item.name + '" data-type="' + item.type + '" data-type="' + item.id + '" ><div class="img"' +
            (item.coverart ? 'style="background-image:url(' + item.thumbnail.small + ')"' : '') + '></div>' +
            '<div class="name">' + (item.name ? item.name : '') + '</div></li>';
        //}
    }).join('');
    carousel.container.appendChild(carousel.ul);
    carousel.items = carousel.ul.querySelectorAll('li');
    if (carousel.items.length < 6) {
        carousel.showprev = false;
        carousel.shownext = false;
    } else {
        carousel.shownext = true;
    }
    //MouseEvents.addEventToRow(carousel);
    if (!el && props.position !== undefined && Display.home.carousels[props.position]) {
        // Create a new carousel at the props.position
        props.parent.insertBefore(carousel.container, Display.home.carousels[props.position].container);
        carousel.containerHeight = carousel.container.offsetHeight || 400;
        carousel.itemWidth = (carousel.items[0].offsetWidth || 200);
        carousel.currentItem = carousel.items.length > 1 ? 0 : 0;
        carousel.translateX = -carousel.currentItem * carousel.itemWidth;
        carousel.ul.style.cssText = '-webkit-transform: translateX(' + carousel.translateX + 'px)';
        Display.home.carousels.splice(props.position, 0, carousel);

        if (Navigation.home.FOCUS === 'regular' || Navigation.home.FOCUS === 'details') {
            Display.home.currentCarousel += 1;
            Display.home.carouselsContainerTranslateY -= Display.home.carousels[Display.home.currentCarousel].containerHeight;
            // // // // // // console.log("Display.home.carouselsContainerTranslateY = ", Display.home.carouselsContainerTranslateY);
            Display.home.carouselsContainer.style.cssText = '-webkit-transform: translateY(' + Display.home.carouselsContainerTranslateY + 'px)';
        }

    } else if (!el) {
        // Create a new carousel
        props.parent.appendChild(carousel.container);
        //carousel.containerHeight = carousel.container.offsetHeight || 185;
        carousel.containerHeight = carousel.container.offsetHeight || 400.5;
        carousel.itemWidth = (carousel.items[0].offsetWidth || 200) + 40;
        carousel.currentItem = carousel.items.length > 1 ? 0 : 0;
        carousel.translateX = -carousel.currentItem * carousel.itemWidth + 52.5;
        carousel.ul.style.cssText = '-webkit-transform: translateX(' + carousel.translateX + 'px)';
        Display.home.carousels.push(carousel);

    } else if (props.id == 'carousel-favorites') {
        if (!(Navigation.home.FOCUS === 'search')) {
            Display.home.carousels[index] = carousel;
            console.log(Display.home.carousels[index]);
            if (Display.home.currentCarousel === index) {
                while (carousel.items[carousel.currentItem] == undefined) {
                    carousel.currentItem = carousel.currentItem - 1;
                }
                carousel.containerHeight = carousel.container.offsetHeight || 400;
                carousel.itemWidth = (carousel.items[0].offsetWidth || 200);
                carousel.currentItem = carousel.items.length > 1 ? 0 : 0;
                carousel.translateX = -carousel.currentItem * carousel.itemWidth + 52.5;
                carousel.ul.style.cssText = '-webkit-transform: translateX(' + carousel.translateX + 'px)';
                carousel.items[carousel.currentItem].classList.add('active');
                Navigation.home.FOCUS = 'regular'


            } else {
                while (carousel.items[carousel.currentItem] == undefined) {
                    carousel.currentItem = carousel.currentItem - 1;
                }
                carousel.containerHeight = carousel.container.offsetHeight || 400;
                carousel.itemWidth = (carousel.items[0].offsetWidth || 200);
                carousel.currentItem = carousel.items.length > 1 ? 0 : 0;
                carousel.translateX = -carousel.currentItem * carousel.itemWidth;
                carousel.ul.style.cssText = '-webkit-transform: translateX(' + carousel.translateX + 'px)';
                //carousel.items[carousel.currentItem].classList.add('active'); 
            }
        }



    } else {
        // Update exisiting carousel
        Display.home.carousels[index] = carousel;
        if (Display.home.currentCarousel === index) {
            carousel.items[carousel.currentItem].classList.add('active');
        }
    }

    return carousel;
}

/**
 * Renders large carousel
 */

Display.profile_createSetting = function(props) {
    var SettingCurrentSubul = document.createElement('ul');
    SettingCurrentSubul.class = "list-large";
    SettingCurrentSubul.innerHTML = props.map(function(item) {

        return '<li class="setting-sub-li">' + item.package + '  ( ' + item.sub + '  ' + item.price + ' USD )</li>'

    }).join('');
    SettingCurrentSubul.innerHTML += '<li class="setting-sub-li no-border-profile">To manage your subscription, please login to your account at wherever.tv</li>'
    subscriptionul = document.getElementById('setting-current-sub');
    subscriptionul.innerHTML = "";
    subscriptionul.appendChild(SettingCurrentSubul);

}

Display.home_createLargeCarousel = function(props) {

    // console.log("home_createCarousel = ", props);
    // // // // console.log("home_createLargeCarousel = ", props.items);

    // // // // console.log("props.items.length = ", props.items.length);

    if (typeof props === 'undefined' || typeof props.items === 'undefined' || typeof props.items.length === 'undefined' || props.items.length === 0 || document.getElementById(props.id))
        return;

    var carousel = {
        id: props.id,
        container: document.createElement('div'),
        ul: document.createElement('ul'),
        arrowNext: null,
        arrowPrev: null,
        items: [],
        itemWidth: 0,
        currentItem: 1,
        translateX: 0,
        showprev: false,
        shownext: false,
        typeOfCarousel: "large-home",
        rectMin: 0,
    };
    //for setting page
    var SettingCurrentSubul = document.createElement('ul');
    SettingCurrentSubul.class = "list-large";

    SettingCurrentSubul.innerHTML = props.items.map(function(item, index) {
        if (item.is_subscribed == true) {
            return '<li><div class="carousel-img img-large img" data-index="' + index + '" data-id="' + item.id + '" style="background-image:url(' + item.thumbnail.large + ')"></div><div class="name">' + item.name + '</div></li>'

        }
    }).join('');
    subscriptionul = document.getElementById('setting-current-sub');
    subscriptionul.innerHTML = "";
    subscriptionul.appendChild(SettingCurrentSubul);

    carousel.container.id = props.id;
    carousel.container.className = 'carousel carousel-large';
    carousel.ul.id = 'list-large';
    carousel.container.innerHTML = "<div class='in-nav-arrows large'> <div class='nav-arrow prev' ></div> <div class='nav-arrow next' ></div> </div>";

    carousel.ul.innerHTML = props.items.map(function(item, index) {
        return '<li data-type="' + item.type + '" data-type="' + item.id + '" data-id="' + item.id + '"   ><div class="carousel-img img-large img" data-index="' + index + '" data-id="' + item.id + '" style="background-image:url(' + item.thumbnail.large + ')"></div></li>'
    }).join('');
    carousel.container.appendChild(carousel.ul);

    // Renders carousel
    props.parent.appendChild(carousel.container);

    //// // // // // // console.log("caorusel.items[0].offsetWidth = ", carousel.items[0].offsetWidth);

    carousel.items = carousel.ul.querySelectorAll('li');
    if (carousel.items.length < 3) {
        carousel.showprev = false;
        carousel.shownext = false;
    } else {
        carousel.shownext = true;
    }
    //MouseEvents.addEventToRow(carousel);
    carousel.itemWidth = (carousel.items[0].offsetWidth || 1920);
    //carousel.translateX = (Display.screen.width - carousel.itemWidth) / 2 //+ carousel.itemWidth; // (2*carousel.itemWidth);


    //carousel.translateX = (Display.screen.width -  carousel.itemWidth) / 2 - carousel.itemWidth; // Shit the center and move to one
    //  carousel.ul.style.cssText = '-webkit-transform: translateX(' + carousel.translateX + 'px)';
    Display.home.carousels.push(carousel);
    //MouseEvents.addEventToRow(,carousel.container)
}

function loadMixpanel() {
    (function(e, a) {
        if (!a.__SV) {
            var b = window;
            try {
                var c,
                    l,
                    i,
                    j = b.location,
                    g = j.hash;
                c = function(a, b) {
                    return (l = a.match(RegExp(b + "=([^&]*)"))) ? l[1] : null
                };
                g && c(g, "state") && (i = JSON.parse(decodeURIComponent(c(g, "state"))), "mpeditor" === i.action && (b.sessionStorage.setItem("_mpcehash", g), history.replaceState(i.desiredHash || "", e.title, j.pathname + j.search)))
            } catch (m) {}
            var k,
                h;
            window.mixpanel = a;
            a._i = [];
            a.init = function(b, c, f) {
                function e(b, a) {
                    var c = a.split(".");
                    2 == c.length && (b = b[c[0]], a = c[1]);
                    b[a] = function() {
                        b.push([a].concat(Array.prototype.slice.call(arguments,
                            0)))
                    }
                }
                var d = a;
                "undefined" !== typeof f ? d = a[f] = [] : f = "mixpanel";
                d.people = d.people || [];
                d.toString = function(b) {
                    var a = "mixpanel";
                    "mixpanel" !== f && (a += "." + f);
                    b || (a += " (stub)");
                    return a
                };
                d.people.toString = function() {
                    return d.toString(1) + ".people (stub)"
                };
                k = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
                for (h = 0; h < k.length; h++)
                    e(d, k[h]);
                a._i.push([b, c, f])
            };
            a.__SV = 1.2;
            b = e.createElement("script");
            b.type = "text/javascript";
            b.async = !0;
            b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === e.location.protocol && "js/analytics.js".match(/^\/\//) ? "js/analytics.js" : "js/analytics.js";
            c = e.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(b, c)
        }
    })(document, window.mixpanel || []);

    mixpanel.init("dummyids");
}


//  new-added-13-12-2017 //

/**
 * Controller.js module
 */
/**
 * Controller.js module
 */
var Controller = {
    activeScene: null,
    prevScene: null,

    start: function() {
        // // // // console.log("Controller.start");
        mixpanel.track("starting app");
        //comment when need auto login
        //localStorage.clear();
        //  Controller.showHome();
        if (Main.tizen === true) {
            Main.registerKeys();
        }
        //  Main.getDuid();Setting
        //  Data.getLocalStorageData();
        Server.fetch_Token();
        //Server.home_fetchAppMasteryConfig();
    },

    show: function(scene, opts) {
        if (scene) {
            this.scenes[scene].show(opts);
        } else {}
    },

    hide: function(scene) {
        if (scene) {
            this.scenes[scene].hide();
        } else {}
    },
}

Controller.showAuth = function(dontFocus) {
    Controller.hide(Controller.activeScene);
    Controller.show('auth');
}
Controller.showRegistration = function(dontFocus) {
    Controller.hide(Controller.activeScene);
    Controller.show('registration');
}

Controller.showHome = function(dontFocus) {
    Controller.hide(Controller.activeScene);
    Controller.show('home');
}

Controller.showListall = function(opts) {
    Controller.hide(Controller.activeScene);
    Controller.show('listall', opts);
}

Controller.showVideo = function(opts) {
    Controller.hide(Controller.activeScene);
    Controller.show('video', opts);
}

Controller.showPlayer = function(opts) {
    Controller.hide(Controller.activeScene);
    Controller.show('player', opts);
}

Controller.hidePlayer = function(opts) {
    var prevOpts = {};
    prevOpts.videoid = "0";
    prevOpts.caller = "home";
    prevOpts.type = "movie";

    Controller.hide('player');
    if (Data.playerFrom == 'home') {
        //Display.home_updateCover()
        Controller.prevScene = "home";
    } else {
        Display.details_updateCover();

        Controller.prevScene = "video";
    }

    Controller.show(Controller.prevScene, Controller.prevOpts);
}

Controller.showKeyboard = function(opts) {
    Controller.show('keyboard', opts);
}

Controller.hideKeyboard = function(opts) {
    Keyboard.handleBack();
    Controller.hide('keyboard', opts);
    Controller.show('home');
}

Controller.showSetting = function(opts) {
    Controller.show('setting', opts);
}

Controller.showPackage = function(opts) {
    Controller.show('package', opts);
}

Controller.showPayment = function(opts) {
    Controller.show('payment', opts);
}

Controller.hideSetting = function(opts) {
    if (opts.show === 'package') {
        Controller.hide('setting', opts);
        Controller.show('package');
    } else if (opts.show === 'home') {
        Controller.hide('setting', opts);
        Controller.show('home');
    } else {
        Controller.hide('setting', opts);

    }

}

Controller.hidePackage = function(opts) {
    Controller.hide('package', opts);
    // if(Data.user.newuser.status = false)
    //  Controller.show('home');
}

Controller.hidePayment = function(opts) {
    Controller.hide('payment', opts);
    //   Controller.show('home');
}

Controller.showSpinner = function(opts) {
    Controller.show('spinner', opts);
}

Controller.hideAuth = function(opts) {
    Controller.hide('auth', opts);
}
Controller.hideRegistration = function(opts) {
    Controller.hide('registration', opts);
}

Controller.hideSpinner = function(opts) {
    Controller.hide('spinner', opts);
}

Controller.showPopup = function(opts) {
    Controller.show('popup', opts);
}

Controller.show_explore_package = function(opts) {
    Controller.show('explore_package', opts);
}
Controller.hide_explore_package = function(opts) {
    var prevOpts = {};
    Controller.hide('explore_package', prevOpts);
    Controller.show(Controller.prevScene, Controller.prevOpts);
}
Controller.hidePopup = function(opts) {
    var prevOpts = {};
    Controller.hide('popup', prevOpts);
    Controller.show(Controller.prevScene, Controller.prevOpts);
}

Controller.showPrevScene = function(opts) {
    Controller.hide(Controller.activeScene);
    Controller.show(Controller.prevScene, opts);
}


var Scene_spinner = {
    init: function() {
        this.div = document.getElementById('scene_spinner');
        this.inited = true;
    },

    show: function() {
        if (!this.inited) {
            this.init();
        }

        this.div.style.display = 'block';
    },

    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_spinner.keyHandler, true);
        Controller.keyHandler = this.keyHandler;
    },

    keyHandler: function(e) {},

    hide: function() {
        if (!this.inited) {
            this.init();
        }
        this.div.style.display = 'none';
    },
}

var Scene_auth = {
    init: function() {
        //  Server.home_fetchCategories();

        this.div = document.getElementById('scene_auth');
        this.inited = true;
    },

    show: function() {
        if (!this.inited) {
            this.init();
        }
        //fetching data for subcription



        this.div.style.display = 'block';

        //  Main.startApp();


        Auth.showClientAuthStatus(true)

        //    Display.auth_init();

        this.focus();

        //          Server.auth_
        //          Server.auth_checkRegistration();

        Controller.prevScene = Controller.activeScene;
        Controller.activeScene = 'auth';
    },

    hide: function() {
        this.div.style.display = 'none';
    },

    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_auth.keyHandler, true);
        Controller.keyHandler = this.keyHandler;
        // document.removeEventListener('click', Controller.mouseHandler, true);
        // document.addEventListener('click', Scene_auth.mouseHandler, true);
        // document.removeEventListener('mouseenter', Controller.mouseHandler, true);
        // document.addEventListener('mouseenter', Scene_auth.mouseHandler, true);
        // Controller.mouseHandler = this.mouseHandler;
    },

    mouseHandler: function(e) {
        var el = e.target;


        // // console.log(e.type, e.target.classList, e.target.id);
    },

    keyHandler: function(e) {
        //// // // // // // // // // // console.log("key pressed = " + e.keyCode);
        switch (e.keyCode) {
            //case VK_LEFT:
            case 37:
                e.preventDefault();
                e.stopPropagation();
                Auth.handleLeft();
                //Display.auth_left();
                break;

                //case VK_RIGHT:
            case 39:
                e.preventDefault();
                e.stopPropagation();
                Auth.handleRight();
                //    Display.auth_right();
                break;

                //case VK_UP:
            case 38:
            case 412:
            case 227:    
                e.preventDefault();
                e.stopPropagation();
                Auth.handleUp();
                return false;

                // e.preventDefault();
                // Display.auth_up();
                //  return false;
                break;

                //case VK_DOWN:
            case 40:
            case 412:
            case 227:
            case 179:
                e.preventDefault();
                e.stopPropagation();
                Auth.handleDown();
                return false;

                // e.preventDefault();
                // Display.auth_down();
                return false;
                break;

                //case VK_ENTER:
            case 13:    
                e.preventDefault();
                e.stopPropagation();
                Auth.username_focused = true;
                Auth.password_focused = true;
                //  e.preventDefault();
                //  e.stopPropagation();
                Auth.handleEnter();
                //    Display.auth_enter();
                break;

            case 10009:
            case 27:
            case 461:
            case 8:
                e.preventDefault();
                e.stopPropagation();
                Auth.handleReturn();

                //  e.preventDefault();
                //    Display.auth_return();
                // Display.handle_exit();
                //tizen.application.getCurrentApplication.hide();
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;

        }

        function enterHandler() {}
    }
}

var Scene_keyboard = {
    init: function() {
        //  Server.home_fetchCategories();
        this.wrapper = document.getElementById('scene-wrapper-keyboard');
        this.div = document.getElementById('scene_keyboard');
        this.inited = true;
    },

    show: function() {
        if (!this.inited) {
            this.init();
        }

        this.div.style.display = 'block';
        this.wrapper.style.display = 'block';

        Keyboard.init();

        this.focus();

        Controller.prevScene = Controller.activeScene;
        Controller.activeScene = 'keyboard';
    },

    hide: function() {
        this.div.style.display = 'none';
        this.wrapper.style.display = 'none';
    },

    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_keyboard.keyHandler, true);
        Controller.keyHandler = this.keyHandler;
        // document.removeEventListener('mouseover', Controller.mouseHandler, true);
        // document.addEventListener('mouseover', Scene_keyboard.mouseHandler, true);
        // document.removeEventListener('click', Controller.mouseHandler, true);
        // document.addEventListener('click', Scene_keyboard.mouseHandler, true);
        // document.removeEventListener('mouseenter', Controller.mouseHandler, true);
    },

    mouseHandler: function(e) {
        // console.log(e.type, e.target.classList, e.target.id);
    },
    keyHandler: function(e) {
        switch (e.keyCode) {
            case 179:
                Keyboard.handlePlaypause();
                break;
            //case VK_LEFT:
            case 417:
            case 228:
                Keyboard.init();
                break;
            case 37:
                e.preventDefault();
                e.stopPropagation();
                Keyboard.handle_left();
                break;

                //case VK_RIGHT:
            case 39:
                e.preventDefault();
                e.stopPropagation();
                Keyboard.handle_right();
                break;

                //case VK_UP:
            case 38:
                e.preventDefault();
                e.stopPropagation();
                Keyboard.handle_up();
                return false;
                break;

                //case VK_DOWN:
            case 40:
                e.preventDefault();
                e.stopPropagation();
                Keyboard.handle_down();
                return false;
                break;

                //case VK_ENTER:
            case 13:
                e.preventDefault();
                e.stopPropagation();
                Keyboard.handle_enter();
                break;

            case 10009:
            case 461:
            case 27:
            case 8:
                e.preventDefault();
                e.stopPropagation();
                e.preventDefault();
                Keyboard.word = "";
                Keyboard.search_input.value = "";
                mixpanel.track("closing search");
                Controller.hideKeyboard();
                //Keyboard.handle_return();
                // Display.handle_exit();
                //tizen.application.getCurrentApplication.hide();
                break;

                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;

        }

        function enterHandler() {}
    }
}

var Scene_setting = {
    init: function() {

        this.divwrapper = document.getElementById('setting-container');
        this.div = document.getElementById('setting-container');
        this.inited = true;

    },

    show: function() {
        if (!this.inited) {
            this.init();
        }
        // var ar = document.getElementById('nav-home-arrows');
        // ar.style.cssText = "display:none";
        if (Main.linked == true) {
            var updatename = document.getElementById('s-name-email');
            var tempName = "Hello , " + Data.user.details.name + "<br> User name: " + Data.user.details.email_address;
            if (Data.user.details.subscriptions.length > 0) {
                tempName += "<br> Your active Subcription : " + Data.user.details.subscriptions[0].sub;
            }
            updatename.innerHTML = tempName;
        }
        if (Main.linked == false) {
            var updatename = document.getElementById('s-name-email');
            updatename.innerHTML = "";
        }
        //Display.profile_createSetting(Data.packages);
        //Display.profile_createSetting(Data.user.details.subscriptions);
        //refresh 
        //Data.Setsubcription(Data.home.first_playlist_row);
        this.divwrapper.style.display = 'block';
        this.div.style.display = 'block';
        //Server.home_fetchContentByType('subcription');
        // var sublist =  document.getElementById('list-large');
        // this.subscriptionul.innerHTML = sublist.outerHTML;
        Setting.init();

        this.focus();

        Controller.prevScene = Controller.activeScene;
        Controller.activeScene = 'setting';
    },

    hide: function() {
        var ar = document.getElementById('nav-home-arrows');
        // ar.style.cssText = "display:block";

        this.div.style.display = 'none';
        this.divwrapper.style.display = 'none';
    },

    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_setting.keyHandler, true);
        Controller.keyHandler = this.keyHandler;

        // document.removeEventListener('click', Controller.mouseHandler, true);
        // document.removeEventListener('mouseenter', Controller.mouseHandler, true);
        // document.addEventListener('click', Scene_setting.mouseHandler, true);
        // document.addEventListener('mouseenter', Scene_setting.mouseHandler, true);
        // Controller.mouseHandler = this.mouseHandler;
    },

    mouseHandler: function(e) {

    },

    keyHandler: function(e) {

        switch (e.keyCode) {
            //case VK_LEFT:
            case 37:
                e.preventDefault();
                e.stopPropagation();
                //     Setting.handle_left();
                return false;

                break;

                //case VK_RIGHT:
            case 39:
                e.preventDefault();
                e.stopPropagation();
                // Setting.handle_right();
                return false;
                break;

                //case VK_UP:
            case 38:
                e.preventDefault();
                e.stopPropagation();
                Setting.handleUp();
                return false;
                break;

                //case VK_DOWN:
            case 40:
                e.preventDefault();
                e.stopPropagation();
                Setting.handleDown();
                return false;
                break;

                //case VK_ENTER:
            case 13:
                e.preventDefault();
                e.stopPropagation();
                Setting.handleEnter();
                break;

            case 10009:
            case 461:
            case 27:
            case 8:
                e.preventDefault();
                e.stopPropagation();
                Setting.handleReturn();

                //Keyboard.handle_return();
                // Display.handle_exit();
                //tizen.application.getCurrentApplication.hide();
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;


            default:
                e.preventDefault();
                e.stopPropagation();
                break;
        }

        function enterHandler() {}
    }
}

var Scene_home = {
    init: function() {
        //  Server.home_fetchCategories();
        //  Data.getLocalStorageData();
        this.div = document.getElementById('home-container');
        this.inited = true;
        this.shown = false;
        //  Main.startApp();
    },

    show: function() {
        if (!this.inited) {
            this.init();
        }

        this.shown = true;

        this.div.style.display = 'block';
        //for wrapper
        if (Display.home.currentCarousel > 1) {
            toggleFixed();
        }

        //wrapper
        //  Display.home_init();

        //  Display.home_rerenderLocal();

        // Display.home_updateHome();

        this.focus();

        Controller.prevScene = Controller.activeScene;
        Controller.activeScene = 'home';
    },

    hide: function() {

        this.div.style.display = 'none';
        //for wrapper
        if (Display.home.currentCarousel > 1) {
            toggleFixed();
        }
    },

    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_home.keyHandler, true);
        Controller.keyHandler = this.keyHandler;
        //test jayant
        // document.removeEventListener('mouseover', Controller.mouseHandler, true);
        // document.addEventListener('mouseover', Scene_home.mouseHandler, true);

        // //

        // document.removeEventListener('click', Controller.mouseHandler, true);
        // document.addEventListener('click', Scene_home.mouseHandler, true);
        // document.removeEventListener('mouseenter', Controller.mouseHandler, true);
        // document.addEventListener('mouseenter', Scene_home.mouseHandler, true);
        // Controller.mouseHandler = this.mouseHandler;
    },

    mouseHandler: function(e) {
        /*
          if (Main.home_loading) {
              return false;
          }
          e.stopPropagation();
          var el = e.target;
          // console.log(e.type);
          if (e.type === 'mouseover') {
              // console.log(e.type);
          }
          // if (e.type === 'click') {
          //     Navigation.home_handleEnter();
          //   }
          if (el.id === 'button-setting') {
              Navigation.home_setFocus('profile');
              if (e.type === 'click') {
                  Navigation.home_handleEnter();
              }
          } else if (el.id === 'button-search') {
              Navigation.home_setFocus('search');
              if (e.type === 'click') {
                  Navigation.home_handleEnter();
              }
          } else if (e.type === 'click' && el.parentNode.id === 'nav-home-arrows') {
              if (el.classList && el.classList.contains('next')) {
                  Navigation.home_handleRight();
              } else if (el.classList && el.classList.contains('prev')) {
                  Navigation.home_handleLeft();
              } else if (el.classList && el.classList.contains('top')) {
                  // console.log("clicked up" + Display.home.currentCarousel);
                  Navigation.home_handleUp();
              } else if (el.classList && el.classList.contains('bottom')) {
                  // console.log("clicked down" + Display.home.currentCarousel);
                  Navigation.home_handleDown();
              }
          } else if (el.classList && el.classList.contains('img-regular')) {
              Navigation.home.mouseMove = true;
              console.log("el = ", el);
              var id = el.parentNode.parentNode.parentNode.getAttribute('id');
              //var id = el.parentNode.getAttribute('id');
              console.log("id = " + id);
              var carousels = Display.homeContainer.querySelectorAll('.carousel');
              var row = -1;
              for (var i = 0; i < carousels.length; i++) {
                  //.forEach(function(item, i) {
                  if (id === carousels[i].getAttribute('id'))
                      row = i;
              };
              Navigation.home.keyEvent = true;
              Navigation.home_setFocus('regular', {
                  row: row,
                  item: Number(el.dataset.index),
                  id: id,
                  eventType: e.type
              });
              Navigation.home.keyEvent = false;
              if (e.type === 'click') {
                  //Display.home.currentCarousel = row;
                  Navigation.home_handleEnter(row);
              }
          } else if (el.classList && el.classList.contains('img-large')) {
              console.log("el = ", el);
              Navigation.home.mouseMove = true;
              Navigation.home.keyEvent = true;
              Navigation.home_setFocus('large', {
                  row: 0,
                  item: Number(el.dataset.index),
                  id: "carousel-large"
              });
              Navigation.home.keyEvent = false;
              Navigation.home.mouseMove = true;
              if (e.type === 'click') {
                  Navigation.home_handleEnter();
              }
              return;
          }
          */
    },

    keyHandler: function(e) {
        if (Main.home_loading) {
            return false;
        }

        switch (e.keyCode) {
            //case VK_LEFT:
            case 37:
                e.preventDefault();
                e.stopPropagation();
                //  Navigation.home.mouseMove = false;
                Navigation.home_handleLeft();
                //Navigation.home.mouseMove = true;
                break;

                //case VK_RIGHT:
            case 39:
                e.preventDefault();
                e.stopPropagation();
                //  Navigation.home.mouseMove = false;
                Navigation.home_handleRight();
                //Navigation.home.mouseMove = true;
                break;

                //case VK_UP:
            case 38:
                e.preventDefault();
                e.stopPropagation();
                Navigation.home.keyEvent = true;
                Navigation.home.mouseMove = false;
                Navigation.home_handleUp();
                Navigation.home.keyEvent = false;

                return false;
                break;

                //case VK_DOWN:
            case 40:
                e.preventDefault();
                e.stopPropagation();
                Navigation.home.keyEvent = true;
                Navigation.home.mouseMove = false;
                // console.log("in case mouse down");
                Navigation.home_handleDown();
                Navigation.home.keyEvent = false;

                return false;
                break;

            case 10009:
            case 461:
            case 27:
                //Display.handle_exit();
                //Navigation.home.mouseMove = false;
                e.preventDefault();
                e.stopPropagation();
                Navigation.home_handleReturn();
                //tizen.application.getCurrentApplication.hide();
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;

            case 8:
                e.preventDefault();
                e.stopPropagation();
                Navigation.home.mouseMove = false;
                Navigation.home_handleReturn();
                break;

                //case VK_ENTER:
            case 13:
                //Navigation.home.mouseMove = false;
                e.preventDefault();
                e.stopPropagation();
                Navigation.home_handleEnter();
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;

        }

        function enterHandler() {}
    }
}

var Scene_video = {
    init: function() {
        this.div = document.getElementById('detail-container');
        this.inited = true;
        //  Server.details_fetchContentByType('series');
    },

    show: function(opts) {
        if (!this.inited) {
            this.init();
        }

        console.log("Scene_video: ", opts);
        if (Controller.prevOpts !== opts) {
            Data.details.episodes = [];
            if (opts.type === 'series') {
                Server.details_fetchContentByType(opts.type, opts.data);
                Display.details_createDetails('series', opts.id);
            } else if (opts.type === 'playlist') {
                Display.details_createDetails('videos', opts.id);
                //Server.getCatalougeByIdDetailPlaylist(opts.id)
                //Server.details_fetchContentByType(opts.type);
            } else if (opts.type === 'favorites' || opts.type === 'search') {
                Display.details_createDetails(opts.type);
            } else if (opts.type === 'movie' || opts.type === 'video' || opts.type == 'largecarousel' || opts.type == 'live') {
                if (Navigation.home.mouseMove === true) {
                    Data.home.selectedId = Display.home.carousels[Navigation.home.cursorValue].currentItem;
                } else {
                    Data.home.selectedId = Display.home.carousels[Display.home.currentCarousel].currentItem;
                }
                Data.details_setContentPlaylist(opts);
                // // // // // // console.log("opening movie details");
                // // // // // // console.log("url = ", opts.href);
                // Data.details_setContentPlaylist(opts);
                //Display.details_createDetails(opts.type);
                //Server.details_fetchContentForMovie('movie', opts.href);
            } else if (opts.type === 'channel') {
                Server.details_fetchContentByType(opts.type);
            } else if (opts.type === 'resume') {
                Display.details_createDetails('videos', opts.href);
            } else if (opts.type == 'mouseClick') {
                Data.home.selectedId = MouseEvents.home.clickevent.col;
                Data.details_setContentPlaylist(opts);
            }
        }

        this.div.style.display = 'block';
        //          Display.video_init();

        Controller.prevOpts = opts;
        //          Server.home_fetchVideoDetail(opts.maincat, opts.subcat, opts.videoid, opts.videotype);
        Data.home.selectedType = opts.type;
        //Display.video.type = opts.type;
        // Data.home.selectedId = opts.id;
        // // // // // // // // // // console.log("Scene_video - show: " + JSON.stringify(opts));
        Controller.prevScene = Controller.activeScene;

        Controller.activeScene = 'video';

        // Display.details_reloadButtons();

        this.focus();
    },

    hide: function() {
        this.div.style.display = 'none';
    },

    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_video.keyHandler, true);
        Controller.keyHandler = this.keyHandler;
        //
        // document.removeEventListener('mouseover', Controller.mouseHandler, true);
        // document.addEventListener('mouseover', Scene_video.mouseHandler, true);

        // document.removeEventListener('click', Controller.mouseHandler, true);
        // document.addEventListener('click', Scene_video.mouseHandler, true);
        // document.removeEventListener('mouseenter', Controller.mouseHandler, true);
        // document.addEventListener('mouseenter', Scene_video.mouseHandler, true);
        // Controller.mouseHandler = this.mouseHandler;
    },

    mouseHandler: function(e) {
        // var el = e.target;
        // // console.log("el.id = ", el.id);

        // if (el.id === 'btn-play' || el.id === 'btn-subscribe' || el.id === 'btn-favorite' || el.id === 'btn-resume') {
        //     Navigation.details_setFocus('details', {
        //         id: el.id
        //     });
        //     if (e.type === 'click') {
        //         Navigation.details_handleEnter();
        //     }
        // } else if (e.type === 'click' && el.parentNode.id === 'nav-details-arrows') {
        //     if (el.classList && el.classList.contains('next')) {
        //         Navigation.details_handleRight();
        //     } else if (el.classList && el.classList.contains('prev')) {
        //         Navigation.details_handleLeft();
        //     } else if (el.classList && el.classList.contains('top')) {
        //         Navigation.details_handleUp();
        //     } else if (el.classList && el.classList.contains('bottom')) {
        //         Navigation.details_handleDown();
        //     }
        // } else if (el.classList && el.classList.contains('img-regular')) {
        //     var id = el.parentNode.parentNode.parentNode.getAttribute('id');
        //     var carousels = Display.detailContainer.querySelectorAll('.carousel');
        //     var row = -1;

        //     //carousels.forEach(function(item, i) {
        //     for (i = 0; i < carousels.length; i++) {
        //         if (id === carousels[i].getAttribute('id'))
        //             row = i;
        //     };

        //     Navigation.details_setFocus('carousel', {
        //         row: row,
        //         item: Number(el.dataset.index)
        //     });

        //     if (e.type === 'click') {
        //         Navigation.details_handleEnter();
        //     }
        // }
    },

    keyHandler: function(e) {

        switch (e.keyCode) {
            //case VK_LEFT:
            case 37:
                e.preventDefault();
                e.stopPropagation();
                Navigation.details_handleLeft();
                break;

                //case VK_RIGHT:
            case 39:
                e.preventDefault();
                e.stopPropagation();
                Navigation.details_handleRight();
                break;

                //case VK_UP:
            case 38:
                e.preventDefault();
                e.stopPropagation();
                Navigation.details_handleUp();
                return false;
                break;

                //case VK_DOWN:
            case 40:
                e.preventDefault();
                e.stopPropagation();
                Navigation.details_handleDown();
                return false;
                break;

            case 8:
            case 461:
            case 27:
                e.preventDefault();
                e.stopPropagation();
                Navigation.details_handleBack();
                // Controller.hide("video");
                // Controller.show("home");
                //  Display.home_updateHome();
                break;

            case 10009:
                e.preventDefault();
                e.stopPropagation();
                Navigation.details_handleBack();
                // Controller.hide("video");
                // Controller.show("home");
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;


                //case VK_ENTER:
            case 13:
                e.preventDefault();
                e.stopPropagation();
                Navigation.details_handleEnter();
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;


            default:
                e.preventDefault();
                e.stopPropagation();
                break;
        }

        function enterHandler() {}
    }
}

var Scene_player = {
    init: function() {
        this.div = document.getElementById('scene_player');
        this.inited = true;
    },

    show: function(opts) {
        if (!this.inited) {
            this.init();
            Player.init();
        }

        this.div.style.display = 'block';

        //  Display.player_init();

        //  Display.player_createPage(opts.videoid, opts.type, opts.name, opts.caller);

        // Player.playVideo(opts);

        Controller.prevScene = Controller.activeScene;
        Controller.activeScene = 'player';

        this.focus();
    },

    hide: function() {
        this.div.style.display = 'none';
    },
    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_player.keyHandler, true);
        Controller.keyHandler = this.keyHandler;

        // document.removeEventListener('click', Controller.mouseHandler, true);
        // document.addEventListener('click', Scene_player.mouseHandler, true);
        // document.removeEventListener('mouseenter', Controller.mouseHandler, true);
        // document.addEventListener('climouseenterck', Scene_player.mouseHandler, true);
        // Controller.mouseHandler = this.mouseHandler;
    },

    mouseHandler: function(e) {
        // console.log(e.type, e.target.classList, e.target.id);
    },

    mouseHandler: function(e) {
        // console.log(e.type, e.target.classList, e.target.id);
    },

    keyHandler: function(e) {
        Player.showUI();

        switch (e.keyCode) {
            case 37:
                e.preventDefault();
                e.stopPropagation();
                Player.handle_left();
                break;

            case 39:
                e.preventDefault();
                e.stopPropagation();
                Player.handle_right();
                break;

            case 38:
                e.preventDefault();
                e.stopPropagation();
                //  Display.player_up();
                Player.handle_up();
                //return false;
                break;

            case 40:
                e.preventDefault();
                e.stopPropagation();
                //  Display.player_down();
                Player.handle_down();
                //return false;
                break;

            case 8:
            case 10009:
            case 461:
            case 27:
                e.preventDefault();
                e.stopPropagation();
                //Display.details_updateCover();
                Player.handle_return();
                break;


            case 402:
            case 179:
                e.preventDefault();
                e.stopPropagation();
                Player.handle_pause_play();
                break;

            case 412:
            case 227:
                e.preventDefault();
                e.stopPropagation();
                Player.handle_rewind();
                break;

            case 415:
                e.preventDefault();
                e.stopPropagation();
                Player.handle_play();
                break;

            case 19:
                e.preventDefault();
                e.stopPropagation();
                Player.handle_pause();
                break;

            case 413:
                e.preventDefault();
                e.stopPropagation();
                Player.handle_stop();
                break;

            case 417:
            case 228:
                e.preventDefault();
                e.stopPropagation();
                Player.handle_fastforward();
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;


            case 13:
                e.preventDefault();
                e.stopPropagation();
                if (Player.FOCUS == "player_control") {
                    Player.handle_pause_play();
                } else {
                    Player.handle_enter();
                }
                // Player.handle_enter();
                //  Display.player_enter();
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;


            default:
                e.preventDefault();
                e.stopPropagation();
                Player.setTimerToHide();
                break;
        }

        function enterHandler() {}
    }
}

//added jayant -purohit

var Scene_package = {
    init: function() {

        //this.divwrapper = document.getElementById('setting-container');
        this.div = document.getElementById('scene_package');
        this.inited = true;

    },

    show: function() {
        if (!this.inited) {
            this.init();
        }

        //   this.divwrapper.style.display = 'block';

        // var sublist =  document.getElementById('list-large');
        // this.subscriptionul.innerHTML = sublist.outerHTML;
        //Setting.init();

        //        Package.createPackageLarge_Regular();
        this.div.style.display = 'block';




        //Navigation.package_toggleArrows();

        this.focus();

        Controller.prevScene = Controller.activeScene;
        // Controller.activeScene = 'setting';
        Controller.activeScene = 'package';
    },

    hide: function() {
        Display.package.arrows.style.display = 'none';
        this.div.style.display = 'none';

    },

    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_package.keyHandler, true);
        Controller.keyHandler = this.keyHandler;

        // document.removeEventListener('click', Controller.mouseHandler, true);
        // document.removeEventListener('mouseenter', Controller.mouseHandler, true);
        // document.addEventListener('click', Scene_package.mouseHandler, true);
        // document.addEventListener('mouseenter', Scene_package.mouseHandler, true);
        // Controller.mouseHandler = this.mouseHandler;
    },

    mouseHandler: function(e) {

    },



    keyHandler: function(e) {

        switch (e.keyCode) {
            //case VK_LEFT:
            case 37:
                e.preventDefault();
                e.stopPropagation();
                Navigation.package_handleLeft();
                return false;

                break;

                //case VK_RIGHT:
            case 39:
                e.preventDefault();
                e.stopPropagation();
                //   Package.handle_right();
                Navigation.package_handleRight();
                return false;
                break;

                //case VK_UP:
            case 38:
                e.preventDefault();
                e.stopPropagation();
                Navigation.package_handleUp();
                return false;
                break;

                //case VK_DOWN:
            case 40:
                e.preventDefault();
                e.stopPropagation();
                Navigation.package_handleDown();
                //Package.handleDown();
                return false;
                break;

                //case VK_ENTER:
            case 13:
                e.preventDefault();
                e.stopPropagation();
                Navigation.handelEnterPackage({
                    etype: 'keyboard',
                    //  index : el.dataset.index
                });

                //   Package.handleEnter();
                break;

            case 10009:
            case 461:
            case 8:
            case 27:
                e.preventDefault();
                e.stopPropagation();
                Package.handleReturn();

                //Keyboard.handle_return();
                // Display.handle_exit();
                //tizen.application.getCurrentApplication.hide();
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;


            default:
                e.preventDefault();
                e.stopPropagation();
                break;
        }

        function enterHandler() {}
    }
}


var Scene_registration = {
    init: function() {

        //this.divwrapper = document.getElementById('setting-container');
        this.div = document.getElementById('scene_registration');
        this.inited = true;

    },

    show: function() {
        if (!this.inited) {
            this.init();
        }
        Registration.init();
        this.div.style.display = 'block';
        this.focus();

        Controller.prevScene = Controller.activeScene;
        // Controller.activeScene = 'setting';
        Controller.activeScene = 'registration';
    },

    hide: function() {
        this.div.style.display = 'none';

    },

    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_registration.keyHandler, true);
        Controller.keyHandler = this.keyHandler;
        // document.removeEventListener('click', Controller.mouseHandler, true);
        // document.addEventListener('click', Scene_registration.mouseHandler, true);
        // Controller.mouseHandler = this.mouseHandler;
    },

    mouseHandler: function(e) {

    },



    keyHandler: function(e) {

        switch (e.keyCode) {
            //case VK_LEFT:
            case 37:
                e.preventDefault();
                e.stopPropagation();
                Navigation.registration_handleLeft();
                return false;

                break;

                //case VK_RIGHT:
            case 39:
                e.preventDefault();
                e.stopPropagation();
                //   Package.handle_right();
                Navigation.registration_handleRight();
                return false;
                break;

                //case VK_UP:
            case 38:
                e.preventDefault();
                e.stopPropagation();

                Navigation.registration_handleUp();
                return false;
                break;

                //case VK_DOWN:
            case 40:
                e.preventDefault();
                e.stopPropagation();

                Navigation.registration_handleDown();
                //Package.handleDown();
                return false;
                break;

                //case VK_ENTER:
            case 13:
                e.preventDefault();
                e.stopPropagation();
                Navigation.registration_handleEnter();
                break;

            case 10009:
            case 461:
            case 8:
            case 27:
                e.preventDefault();
                e.stopPropagation();
                Navigation.registration_handleBack();

                //Keyboard.handle_return();
                // Display.handle_exit();
                //tizen.application.getCurrentApplication.hide();
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;

        }

        function enterHandler() {}
    }
}


var Scene_explore_package = {
    init: function() {

        //this.divwrapper = document.getElementById('setting-container');
        this.div = document.getElementById('scene_explore_package');
        this.inited = true;

    },

    show: function() {
        if (!this.inited) {
            this.init();
        }

        //   this.divwrapper.style.display = 'block';

        // var sublist =  document.getElementById('list-large');
        // this.subscriptionul.innerHTML = sublist.outerHTML;
        //Setting.init();

        //        Package.createPackageLarge_Regular();
        this.div.style.display = 'block';


        //Navigation.package_toggleArrows();

        this.focus();

        Controller.prevScene = Controller.activeScene;
        // Controller.activeScene = 'setting';
        Controller.activeScene = 'explore_package';
    },

    hide: function() {

        this.div.style.display = 'none';
    },

    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_explore_package.keyHandler, true);
        Controller.keyHandler = this.keyHandler;

        // document.removeEventListener('click', Controller.mouseHandler, true);
        // document.removeEventListener('mouseenter', Controller.mouseHandler, true);
        // document.addEventListener('click', Scene_explore_package.mouseHandler, true);
        // document.addEventListener('mouseenter', Scene_explore_package.mouseHandler, true);
        // Controller.mouseHandler = this.mouseHandler;
    },

    mouseHandler: function(e) {
        /*
        var el = e.target;
        if (e.type === 'click' && el.parentNode.id === 'nav-home-arrows-package') {
            if (el.classList && el.classList.contains('next')) {
           //     Navigation.home_handleRight();
           Navigation.package_handleRight();
            } else if (el.classList && el.classList.contains('prev')) {
               // Navigation.home_handleLeft();
      Navigation.package_handleLeft();
            } 
        }else if (el.classList && el.classList.contains('cnt-pak-detail')) {
            
            
            Navigation.packageSetfocus('regular', {
               // row: row,
                item: Number(el.dataset.index),
//                id: id,
                eventType: e.type
            });
            Navigation.home.keyEvent = false;
              if (e.type === 'click') {
                  //Display.home.currentCarousel = row;
                //  Navigation.home_handleEnter(row);
              Navigation.handelEnterPackage();
              }
            } else if (el.classList && el.classList.contains('carousel-package')) {
            
            Navigation.packageSetfocus('large', {
             //   row: 0,
                item: Number(el.dataset.index),
                id: "carousel-large"
            });
            Navigation.home.keyEvent = false;
            Navigation.home.mouseMove = true;
            if (e.type === 'click') {
               // Navigation.home_handleEnter();
               Navigation.handelEnterPackage({
                        etype : e.type,
                              index : el.dataset.index
                            });
            }
            return;
        }
    */

    },



    keyHandler: function(e) {
        switch (e.keyCode) {
            //case VK_LEFT:
            case 37:
                e.preventDefault();
                e.stopPropagation();
                break;

                //case VK_RIGHT:
            case 39:
                e.preventDefault();
                e.stopPropagation();

                break;

                //case VK_UP:
            case 38:
                e.preventDefault();
                e.stopPropagation();

                //case VK_DOWN:
            case 40:

            case 13:
                e.preventDefault();
                e.stopPropagation();
                Navigation.packageDetailPageHandleEnter();

                break;

            case 10009:
            case 461:
            case 8:
            case 27:
                e.preventDefault();
                e.stopPropagation();
                Navigation.handelbackPackageDetails();



                //Keyboard.handle_return();
                // Display.handle_exit();
                //tizen.application.getCurrentApplication.hide();
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;


            default:
                e.preventDefault();
                e.stopPropagation();
                break;
        }

        function enterHandler() {}
    }
}


var Scene_payment = {
    init: function() {

        //this.divwrapper = document.getElementById('setting-container');
        this.div = document.getElementById('scene_payment');
        this.inited = true;

    },

    show: function() {
        if (!this.inited) {
            this.init();
        }

        //   this.divwrapper.style.display = 'block';
        Payment.init();
        var lable_amt = document.getElementById('payment-amt');
        lable_amt.innerHTML = "$" + Package.amount_from_package;
        Payment.amount_from_package = Package.amount_from_package;


        this.div.style.display = 'block';
        this.focus();
        //Payment.TextboxName.focus();
        Controller.prevScene = Controller.activeScene;
        // Controller.activeScene = 'setting';
        Controller.activeScene = 'payment';
    },

    hide: function() {
        this.div.style.display = 'none';
        //   this.divwrapper.style.display = 'none';
    },

    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_payment.keyHandler, true);
        Controller.keyHandler = this.keyHandler;

        // document.removeEventListener('click', Controller.mouseHandler, true);
        // document.removeEventListener('mouseenter', Controller.mouseHandler, true);
        // document.addEventListener('click', Scene_payment.mouseHandler, true);
        // document.addEventListener('mouseenter', Scene_payment.mouseHandler, true);
        // Controller.mouseHandler = this.mouseHandler;
    },

    mouseHandler: function(e) {

        var el = e.target;
        // event--
        //     var id = el.getAttribute('data-id');

        // if (id == 'setting-logoff-btn') {

        //     Setting.setting_buttons[0].classList.remove('hover');
        //     Setting.setting_buttons[1].classList.remove('hover');
        //     Setting.setting_buttons[3].classList.remove('hover');
        //     e.target.classList.add('hover');

        //     if (e.type == 'click') {
        //      Setting.focus = 'setting-logoff-btn';
        //         Setting.handleEnter();
        //     }

        // } else if (id == 'setting-cancel-btn') {
        //     Setting.setting_buttons[0].classList.remove('hover');
        //     Setting.setting_buttons[1].classList.remove('hover');
        //     Setting.setting_buttons[2].classList.remove('hover');
        //     e.target.classList.add('hover');

        //     if (e.type == 'click') {
        //         e.preventDefault();
        //         Setting.focus = '';
        //         mixpanel.track("closing setting");
        //         Controller.hideSetting();
        //     }
        // }else if(id == 'setting-addsub-btn'){
        //  Setting.setting_buttons[1].classList.remove('hover');
        //     Setting.setting_buttons[2].classList.remove('hover');
        //     Setting.setting_buttons[3].classList.remove('hover');
        //     e.target.classList.add('hover');
        //     if (e.type == 'click') {
        //        Setting.focus = 'setting-addsub-btn';
        //         Setting.handleEnter();
        //     }
        // }else if(id == 'setting-remsub-btn'){
        //  Setting.setting_buttons[0].classList.remove('hover');
        //     Setting.setting_buttons[2].classList.remove('hover');
        //     Setting.setting_buttons[3].classList.remove('hover');
        //     e.target.classList.add('hover');
        //  if (e.type == 'click') {
        //    Setting.focus = 'setting-remsub-btn';
        //         Setting.handleEnter();
        //     }
        // }


    },



    keyHandler: function(e) {

        switch (e.keyCode) {
            //case VK_LEFT:
            case 37:
                e.preventDefault();
                e.stopPropagation();
                //                Setting.handle_left();
                //   Payment.handle_left();
                //       Navigation.Payment_handleLeft();
                return false;

                break;

                //case VK_RIGHT:
            case 39:
                e.preventDefault();
                e.stopPropagation();
                //   Payment.handle_right();
                //  Navigation.Payment_handleRight();
                return false;
                break;

                //case VK_UP:
            case 38:
                e.preventDefault();
                e.stopPropagation();
                // Payment.handleUp();
                //Navigation.Payment_handleUp();
                Payment.NavigationPaymenthandelUp();
                return false;
                break;

                //case VK_DOWN:
            case 40:
                e.preventDefault();
                e.stopPropagation();
                Payment.NavigationPayment_handleDown();
                //  Navigation.Payment_handleDown();
                //Payment.handleDown();
                return false;
                break;

                //case VK_ENTER:
            case 13:
                e.preventDefault();
                e.stopPropagation();
                Payment.NavigationhandelEnterPayment();

                //   Payment.handleEnter();
                break;

            case 10009:
            case 461:
            case 8:
            case 27:
                e.preventDefault();
                e.stopPropagation();
                // Payment.handleReturn();
                Payment.handleReturn();

                //Keyboard.handle_return();
                // Display.handle_exit();
                //tizen.application.getCurrentApplication.hide();
                break;


                // case tizen.tvinputdevice.getKey("Exit").code:
                // Display.handle_hard_exit();
                // //  Display.handle_exit();
                // break;


        }

        function enterHandler() {}
    }
}




var Scene_popup = {
    init: function() {
        this.div = document.getElementById('scene_popup');
        this.inited = true;
    },

    show: function(opts) {
        if (!this.inited) {
            this.init();
            Popup.init();
        }

        this.div.style.display = 'block';

        Controller.prevScene = Controller.activeScene;
        this.focus();
    },

    hide: function() {
        this.div.style.display = 'none';
    },

    focus: function() {
        document.removeEventListener('keydown', Controller.keyHandler, true);
        document.addEventListener('keydown', Scene_popup.keyHandler, true);
        Controller.keyHandler = this.keyHandler;

        // document.removeEventListener('click', Controller.mouseHandler, true);
        // document.addEventListener('click', Scene_popup.mouseHandler, true);
        // document.removeEventListener('mouseenter', Controller.mouseHandler, true);
        // document.addEventListener('mouseenter', Scene_popup.mouseHandler, true);
        // document.removeEventListener("mouseover", Controller.mouseHandler, true);
        // document.addEventListener("mouseover", Scene_popup.mouseHandler, true);
        // Controller.mouseHandler = this.mouseHandler;
    },

    mouseHandler: function(e) {
        /*
        e.stopPropagation();
        // console.log(e.type, e.target.classList, e.target.id);
        var el = e.target;
        if (e.type === 'click') {
            // console.log("CLICKED");
            Popup.popup.BUTTONPOSTION = el.dataset.id;
            Popup.handle_enter();
        } else {
            for (i = 0; i < Popup.popup.buttonlist.length; i++) {
                Popup.popup.buttonlist[i].classList.remove('hover');
            }
            el.classList.add('hover');
        }
        */
        //// console.log("el.dataset.id = ", el.dataset.id);
    },

    keyHandler: function(e) {

        switch (e.keyCode) {
            case 37:
                e.preventDefault();
                e.stopPropagation();
                Popup.handle_left();
                break;

            case 39:
                e.preventDefault();
                e.stopPropagation();
                Popup.handle_right();
                break;

            case 38:
                e.preventDefault();
                e.stopPropagation();
                //  Display.player_up();
                Popup.handle_up();
                //return false;
                break;

            case 40:
                e.preventDefault();
                e.stopPropagation();
                //  Display.player_down();
                Popup.handle_down();
                //return false;
                break;

                /*
                case tizen.tvinputdevice.getKey("Exit").code:
                tizen.application.getCurrentApplication().exit();
                //  Popup.handle_hard_exit();
                break;
                 */

            case 13:
                e.preventDefault();
                e.stopPropagation();
                Popup.handle_enter();
                //  Display.player_enter();
                break;
                // case tizen.tvinputdevice.getKey("Exit").code:
                // tizen.application.getCurrentApplication().exit();
                // //  Popup.handle_hard_exit();
                // break;


            default:
                e.preventDefault();
                e.stopPropagation();
                break;
        }
    }
}

Controller.scenes = {
    "auth": Scene_auth,
    "home": Scene_home,
    "video": Scene_video,
    "player": Scene_player,
    "spinner": Scene_spinner,
    "popup": Scene_popup,
    "keyboard": Scene_keyboard,
    "setting": Scene_setting,
    "package": Scene_package,
    "explore_package": Scene_explore_package,
    "payment": Scene_payment,
    "registration": Scene_registration,
}


// new end  //


var Keyboard = {
    word: '',
    x: 0,
    y: 0,
    mosue: false
}

Keyboard.init = function() {
    this.key_board_div = document.getElementById("keyboard"),
        this.key_num = document.getElementById("num"),
        this.key_alpha1 = document.getElementById("alpha1"),
        this.key_alpha2 = document.getElementById("alpha2"),
        this.key_alpha3 = document.getElementById("alpha3"),
        this.search_input = document.getElementById("searchInput"),
        this.search_button = document.getElementById("search_button");
    this.cancel_button = document.getElementById("cancel_button");

    this.key_num_li = this.key_num.querySelectorAll('li');
    this.key_alpha1_li = this.key_alpha1.querySelectorAll('li');
    this.key_alpha2_li = this.key_alpha2.querySelectorAll('li');
    this.key_alpha3_li = this.key_alpha3.querySelectorAll('li');

    FOCUSKEY = "search";
    FOCUS = "";
    Keyboard.resetFocus();
    Keyboard.removeActive();
    if (!Keyboard.mouse) {
        // Keyboard.addMouseEvents();
    }
    /*
    document.addEventListener('keydown', function(e) {
    e.preventDefault();
    if (e.keyCode === 39) Keyboard.handle_right();
    else if (e.keyCode === 37) Keyboard.handle_left();
    else if (e.keyCode === 38) Keyboard.handle_up();
    else if (e.keyCode === 40) Keyboard.handle_down();
    else if (e.keyCode === 13) Keyboard.handle_enter();
    });
     */
}

Keyboard.handlePlaypause = function(){
    Keyboard.cancel_button.classList.remove('hover');
    
    if (Keyboard.y === 0) {
        this.key_num_li[Keyboard.x].classList.remove('hover');
    } else if (Keyboard.y === 1) {
        this.key_alpha1_li[Keyboard.x].classList.remove('hover');
    } else if (Keyboard.y === 2) {
        this.key_alpha2_li[Keyboard.x].classList.remove('hover');
    } else if (Keyboard.y === 3) {
        this.key_alpha3_li[Keyboard.x].classList.remove('hover');
    }
    Keyboard.FOCUS = 'topbar';
    Keyboard.FOCUSKEY = 'search';
    Keyboard.search_button.classList.add('hover');
}

Keyboard.resetFocus = function() {
    Keyboard.cancel_button.classList.remove('hover');
    Keyboard.search_button.classList.remove('hover');
    if (Keyboard.y === 0) {
        this.key_num_li[Keyboard.x].classList.remove('hover');
    } else if (Keyboard.y === 1) {
        this.key_alpha1_li[Keyboard.x].classList.remove('hover');
    } else if (Keyboard.y === 2) {
        this.key_alpha2_li[Keyboard.x].classList.remove('hover');
    } else if (Keyboard.y === 3) {
        this.key_alpha3_li[Keyboard.x].classList.remove('hover');
    }
}

Keyboard.removeActive = function() {
    if (Keyboard.y === 0) {
        this.key_num_li[Keyboard.x].classList.remove('hover');
    } else if (Keyboard.y === 1) {
        this.key_alpha1_li[Keyboard.x].classList.remove('hover');
    } else if (Keyboard.y === 2) {
        this.key_alpha2_li[Keyboard.x].classList.remove('hover');
    } else if (Keyboard.y === 3) {
        this.key_alpha3_li[Keyboard.x].classList.remove('hover');
    }
}

Keyboard.setActive = function() {
    //  // // // // // // // // // // console.log("Keyboard.setActive = " + Keyboard.y);
    //  // // // // // // // // // // console.log("Keyboard.x = " + Keyboard.x);
    if (Keyboard.y === 0) {
        this.key_num_li[Keyboard.x].classList.add('hover');
    } else if (Keyboard.y === 1) {
        this.key_alpha1_li[Keyboard.x].classList.add('hover');
    } else if (Keyboard.y === 2) {
        this.key_alpha2_li[Keyboard.x].classList.add('hover');
    } else if (Keyboard.y === 3) {
        this.key_alpha3_li[Keyboard.x].classList.add('hover');
    }
}
Keyboard.handleBack = function() {
    var currentCarousel = Display.home.menu[0];
    var CurrentmenuItem = currentCarousel.items[currentCarousel.currentItem];
    CurrentmenuItem.classList.add('hover');
    CurrentmenuItem.classList.remove('active');
    CurrentmenuItem.classList.remove('hover');
    var CurrentmenuItem = currentCarousel.items[currentCarousel.homeItem];
    // CurrentmenuItem.classList.add('hover');
    // CurrentmenuItem.classList.add('active');
}

Keyboard.handle_left = function() {
    if (Keyboard.FOCUS === "topbar") {
        Keyboard.cancel_button.classList.remove('hover');
        Keyboard.search_button.classList.add('hover');
        Keyboard.FOCUSKEY = "search";
        return true;
    }

    Keyboard.removeActive();

    if (Keyboard.x > 0)
        Keyboard.x -= 1;

    if (Keyboard.FOCUS != "topbar") {
        Keyboard.setActive();
    }
}

Keyboard.handle_right = function() {

    if (Keyboard.FOCUS === "topbar") {
        Keyboard.search_button.classList.remove('hover');
        Keyboard.cancel_button.classList.add('hover');
        Keyboard.FOCUSKEY = "cancel";
        return true;
    }

    Keyboard.removeActive();

    if (Keyboard.y === 3) {
        if (Keyboard.x < 7)
            Keyboard.x += 1;
    } else {
        if (Keyboard.x < 9)
            Keyboard.x = Keyboard.x + 1;
    }

    if (Keyboard.FOCUS != "topbar") {
        Keyboard.setActive();
    }
}

Keyboard.handle_up = function() {
    Keyboard.removeActive();

    if (Keyboard.y === 0) {
        Keyboard.FOCUS = 'topbar';
        Keyboard.FOCUSKEY = 'search';
        Keyboard.search_button.classList.add('hover');
        return true;
    }

    if (Keyboard.y > 0)
        Keyboard.y -= 1;

    if (Keyboard.y === 2) {
        if (Keyboard.x === 7) {
            Keyboard.x = 8;
        }
    }

    if (Keyboard.FOCUS != "topbar") {
        Keyboard.setActive();
    }

}

Keyboard.handle_down = function() {
    Keyboard.removeActive();

    if (Keyboard.FOCUS === "topbar") {
        Keyboard.search_button.classList.remove('hover');
        Keyboard.cancel_button.classList.remove('hover');
        Keyboard.FOCUS = "keys";
        Keyboard.setActive();
        return true;
    }

    if (Keyboard.y < 3)
        Keyboard.y += 1;

    // special keys
    if (Keyboard.y === 3) {
        if (Keyboard.x === 6 || Keyboard.x === 7) {
            Keyboard.x = 6;
        } else if (Keyboard.x === 8 || Keyboard.x === 9) {
            Keyboard.x = 7;
        }
    }

    Keyboard.setActive();
}

Keyboard.handle_enter = function() {

    if (Keyboard.FOCUS === "topbar") {
        // // // // // // // // // // console.log("handle_enter - topbar FOCUS");
        if (Keyboard.FOCUSKEY === "search") {
            // // // // // // // // // // console.log("searching = " + this.search_input.value);

            if (Keyboard.search_input.value.trim() != "") {
                Controller.showSpinner();
                mixpanel.track("searching", {
                    "query": this.search_input.value
                });

                Server.home_fetchSearch(this.search_input.value);
            } else {
                Popup.showError("Error", "Please type something to search", 1, "");
            }
        } else {
            Keyboard.word = "";
            Keyboard.search_input.value = "";
            mixpanel.track("closing search");
            Controller.hideKeyboard();
            Display.home.menu[0].currentItem = 2;
        }

        return true;
    }

    if (Keyboard.y === 3) {
        if (this.key_alpha3_li[Keyboard.x].id === "space") {
            this.word += " ";
        } else if (this.key_alpha3_li[Keyboard.x].id === "delete") {
            this.word = this.word.slice(0, this.word.length - 1);
        } else {
            this.word += this.key_alpha3_li[Keyboard.x].id;
        }
    } else if (Keyboard.y === 0) {
        this.word += this.key_num_li[Keyboard.x].id;
    } else if (Keyboard.y === 1) {
        this.word += this.key_alpha1_li[Keyboard.x].id;
    } else if (Keyboard.y === 2) {
        this.word += this.key_alpha2_li[Keyboard.x].id;
    }

    this.search_input.value = this.word;
    // // // // // // // // // // console.log(this.word);
}

function toggleHomeArrow(focus, currentcrousel) {
    // console.log("called toggleHomeArrow ");
    if ((focus === 'search' || focus === 'profile') && (currentcrousel === 0)) {
        // console.log("focus " + focus + "curcr" + currentcrousel);
        //// console.log("hello i am in true of togglle home");
    } else if (focus === 'large' && currentcrousel === 0) {
        // console.log("focus " + focus + "curcr " + currentcrousel);
    } else if (focus === 'regular' && currentcrousel === 0) {
        // console.log("focus " + focus + "curcr " + currentcrousel);
    }

}

function toggleCrLarge() {
    //  // console.log("toggleCrLarge");
    //     var x = document.getElementById("carousel-large");


    //     if (x.style.display === "none") {
    // //        x.style.display = "block";
    //        // document.querySelector('.carousels-outer').style.cssText = 'padding-top: 35px';
    //        // document.querySelector('#nav-home-arrows').style = '';
    //     } else {
    //   //      x.style.display = "none";
    //         //document.querySelector('.carousels-outer').style.cssText = 'padding-top: 188px';
    //      //document.querySelector('#nav-home-arrows').style.cssText = 'top:248px';
    //     }
}

function toggleFixed() {
    var x = document.getElementById("wrapper-toggle");
    var y = document.getElementById("wrapper-toggle-down");

    x.classList.toggle("active");
    y.classList.toggle("active");
    // if(x.hasClass('active')){
    //      x.classList.remove('active');
    //  }else{

    // x.classList.add('active');
    //  }


}

function toggleSmallArrow() {
    // console.log("in togglesmall ");
    //var x = document.getElementById("nav-home-arrows");
    // console.log(x);

    // console.log("top = " + x.style.top);
    if (x.style.top === "840px") {
        x.style.top = "248px";
        //248px document.querySelector('.carousels-outer').style.cssText = 'padding-top: 35px';
    } else {
        x.style.top = "840px";
        //document.querySelector('.carousels-outer').style.cssText = 'padding-top: 155px';
    }

}

function togglefocus() {
    hello("i am in toggle focus");
}

//jayant


Navigation.details_toggleArrows = function() {
        if (Navigation.details.FOCUS === 'carousel') {

            var currentCarousel = Display.details.carousels[Display.details.currentCarousel];
            var rect = currentCarousel.ul.getBoundingClientRect();
            //   Display.details.arrows.style.display = 'block';
            //   Display.details.arrowPrev.style.display = rect.left < 0 ? 'block' : 'none';
            //Display.details.arrowNext.style.display =currentCarousel.itemWidth * currentCarousel.items.length + currentCarousel.translateX > Display.screen.width ? 'block' : 'none';
            //   Display.details.arrowTop.style.display = (Display.details.currentCarousel === 0) ? 'none' : 'block';
            //   Display.details.arrowBottom.style.display = (Display.details.currentCarousel === Display.details.carousels.length - 1) ? 'none' : 'block';

        } else {
            // Display.details.arrows.style.display = 'none';
        }
    }
    /*
    Navigation.home_toggleArrows = function () {
        if (Navigation.home.FOCUS === 'search' ||
            Navigation.home.FOCUS === 'profile') {
            Display.home.arrows.style.display = 'none';
            return;
        }
        if (Navigation.home.mouseMove === true) {
            currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
        } else {
            currentCarousel = Display.home.carousels[Display.home.currentCarousel];
        }
        rect = currentCarousel.ul.getBoundingClientRect();

        Display.home.arrows.style.display = 'block';

        if (Navigation.home.FOCUS === 'large') {
            Display.home.arrows.classList.add('large');
            Display.home.arrowDown
            Display.home.arrowPrev.style.display = currentCarousel.currentItem > 0 ? 'block' : 'none';
            Display.home.arrowNext.style.display = currentCarousel.currentItem < currentCarousel.items.length - 1 ? 'block' : 'none';
        //    Display.home.arrowTop.style.display = 'none';
        //    Display.home.arrowBottom.style.display = 'block';
            // impliment arrows Display.home.arrowBottom.classList.add('addbottom');
        } else if (Navigation.home.FOCUS === 'regular') {

            //Display.home.arrowBottom.classList.remove('addbottom');
            Display.home.arrows.classList.remove('large');
            Display.home.arrowBottom.style.bottom = '-'
                Display.home.arrowPrev.style.display = rect.left < 0 ? 'block' : 'none';
            Display.home.arrowNext.style.display =
                currentCarousel.itemWidth * currentCarousel.items.length + currentCarousel.translateX > Display.screen.width ? 'block' : 'none';
      //      Display.home.arrowTop.style.display = (Display.home.currentCarousel === 0) ? 'none' : 'block';
        //    Display.home.arrowBottom.style.display = (Display.home.currentCarousel === Display.home.carousels.length - 1) ? 'none' : 'block';
        }
    }
    */

Navigation.package_toggleArrows = function() {
    if (Navigation.home.FOCUS === 'search' ||
        Navigation.home.FOCUS === 'profile') {
        Display.package.arrows.style.display = 'none';
        return;
    }
    // if (Navigation.home.mouseMove === true) {
    //     currentCarousel = Display.home.carousels[Navigation.home.cursorValue];
    // } else {
    //     currentCarousel = Display.home.carousels[Display.home.currentCarousel];
    // }
    // rect = currentCarousel.ul.getBoundingClientRect();

    Display.package.arrows.style.display = 'block';

    if (Navigation.package.FOCUS === 'large') {
        var currentCarousel = Display.package.carousels[Display.package.currentCarousel];
        rect = currentCarousel.ul.getBoundingClientRect();
        Display.package.arrowPrev.style.display = rect.left < 0 ? 'block' : 'none';
        Display.package.arrowNext.style.display = currentCarousel.itemWidth * currentCarousel.items.length + currentCarousel.translateX > Display.screen.width ? 'block' : 'none';

    } else if (Navigation.package.FOCUS === 'regular') {

        var currentCarousel = Display.package.details[Display.details.currentCarousel];
        rect = currentCarousel.ul.getBoundingClientRect();
        Display.package.arrowPrev.style.display = rect.left < 0 ? 'block' : 'none';
        Display.package.arrowNext.style.display = currentCarousel.itemWidth * currentCarousel.items.length + currentCarousel.translateX > Display.screen.width ? 'block' : 'none';
        // Display.home.arrowTop.style.display = (Display.home.currentCarousel === 0) ? 'none' : 'block';
        // Display.home.arrowBottom.style.display = (Display.home.currentCarousel === Display.home.carousels.length - 1) ? 'none' : 'block';
    }
}




Keyboard.addMouseEvents = function() {

        // this.search_button.addEventListener("mouseover", function() {
        //     this.classList.add('hover');
        // });
        // this.search_button.addEventListener("mouseout", function() {
        //     this.classList.remove('hover');
        // });
        // this.search_button.addEventListener("click", function() {
        //     Keyboard.FOCUS = "topbar";
        //     Keyboard.FOCUSKEY = "search";
        //     Keyboard.handle_enter();
        // });

        // this.cancel_button.addEventListener("mouseover", function() {
        //     this.classList.add('hover');
        // });
        // this.cancel_button.addEventListener("mouseout", function() {
        //     this.classList.remove('hover');
        // });
        // this.cancel_button.addEventListener("click", function() {
        //     Keyboard.FOCUS = "topbar";
        //     Keyboard.FOCUSKEY = "cancel";
        //     Keyboard.handle_enter();
        // });

        // for (var i = 0, l = Keyboard.key_num_li.length; i < l; i++) {
        //     Keyboard.key_num_li[i].addEventListener("mouseover", function() {
        //         this.classList.add('hover');
        //     });

        //     Keyboard.key_num_li[i].addEventListener("mouseout", function() {
        //         this.classList.remove('hover');
        //     });

        //     Keyboard.key_num_li[i].addEventListener("click", function(i) {
        //         Keyboard.word += this.id;
        //         Keyboard.search_input.value = Keyboard.word;
        //     });
        // }

        // for (var i = 0, l = Keyboard.key_alpha1_li.length; i < l; i++) {
        //     Keyboard.key_alpha1_li[i].addEventListener("mouseover", function() {
        //         this.classList.add('hover');
        //     });

        //     Keyboard.key_alpha1_li[i].addEventListener("mouseout", function() {
        //         this.classList.remove('hover');
        //     });

        //     Keyboard.key_alpha1_li[i].addEventListener("click", function() {
        //         Keyboard.word += this.id;
        //         Keyboard.search_input.value = Keyboard.word;
        //     });
        // }

        // for (var i = 0, l = Keyboard.key_alpha2_li.length; i < l; i++) {
        //     Keyboard.key_alpha2_li[i].addEventListener("mouseover", function() {
        //         this.classList.add('hover');
        //     });

        //     Keyboard.key_alpha2_li[i].addEventListener("mouseout", function() {
        //         this.classList.remove('hover');
        //     });

        //     Keyboard.key_alpha2_li[i].addEventListener("click", function() {
        //         Keyboard.word += this.id;
        //         Keyboard.search_input.value = Keyboard.word;
        //     });
        // }

        // for (var i = 0, l = Keyboard.key_alpha3_li.length; i < l; i++) {
        //     Keyboard.key_alpha3_li[i].addEventListener("mouseover", function() {
        //         this.classList.add('hover');
        //     });

        //     Keyboard.key_alpha3_li[i].addEventListener("mouseout", function() {
        //         this.classList.remove('hover');
        //     });

        //     Keyboard.key_alpha3_li[i].addEventListener("click", function() {
        //         if (this.id === "space") {
        //             Keyboard.word += " ";
        //         } else if (this.id === "delete") {
        //             Keyboard.word = Keyboard.word.slice(0, Keyboard.word.length - 1);
        //         } else {
        //             Keyboard.word += this.id;
        //         }
        //         Keyboard.search_input.value = Keyboard.word;
        //     });
        // }

        // Keyboard.mouse = true;
    }
    //jayant end

//network management
NetworkManagement = {}

NetworkManagement.init = function() {
    this.SefPlugin = document.getElementById("pluginObjectNetwork");
    //    this.SefPlugin.Open('Network', '1.001', 'Network');

    setInterval(NetworkManagement.cyclicHttpCheck, 1000);
    //    setInterval(NetworkManagement.cyclicInternetConnectionCheckPhysical, 1000);
    setInterval(NetworkManagement.cyclicInternetConnectionCheck, 1000);
}

NetworkManagement.cyclicHttpCheck = function() {
    if (!NetworkManagement.checkHttp()) {
        if (typeof Popup.popup.network_error !== 'undefined')
            Popup.popup.network_error = true;

        if (!Popup.popup.shown) {
            if (Player.state) {
                if (Player.state == Player.PLAYING || Player.state == Player.PAUSED || Player.state == Player.REWIND || Player.state == Player.FORWARD) {
                    if (typeof Player.videoChanged !== 'undefined') {
                        Player.videoChanged = false;
                    }
                    Player.stopVideo();
                }
            }
            Controller.hideSpinner();
            Popup.showError('error', 'Not connected to internet.', 1, "");
        }
    } else {
        if (typeof Popup.popup.network_error !== 'undefined')
            Popup.popup.network_error = false;
    }
    //    try{
    /*      var cType = this.SefPlugin.Execute("GetProductType");
    var checkHttp = this.SefPlugin.checkHTTP(cType);
    if (checkHttp== 0) {
    NetworkManagement.errorCB();
    }
    if (checkHttp== -1) {
    NetworkManagement.errorCB();
    }
    //    } catch(e){
    Popup.showError('error', e.name, 1, "");
    //    }
     */
}

NetworkManagement.checkHttp = function() {
    currentInterface = this.SefPlugin.GetActiveType();

    if (currentInterface === -1)
        return false;

    var checkHttp = this.SefPlugin.CheckHTTP(currentInterface);

    if (checkHttp !== 1)
        return false;

    return true;
}

NetworkManagement.checkConnection = function() {
    var gatewayStatus = 0;
    currentInterface = this.SefPlugin.GetActiveType();

    if (currentInterface === -1)
        return false;

    gatewayStatus = this.SefPlugin.CheckGateway(currentInterface);

    if (gatewayStatus !== 1)
        return false;

    return true;
}

NetworkManagement.cyclicInternetConnectionCheckPhysical = function() {
    //    try{
    var cType = this.SefPlugin.Execute("GetProductType");
    var phyConnection = this.SefPlugin.CheckPhysicalConnection(cType);
    if (phyConnection == 0) {
        NetworkManagement.errorCB();
    }
    if (phyConnection == -1) {
        NetworkManagement.errorCB();
    }
    //    } catch(e){
    //        Popup.showError('error', e.name, 1, "");
    //    }
    /*  try{
    webapis.getAvailableNetworks(successCB, errorCB);
    }catch(error){
    alert(error.name);
    }
     */
}

NetworkManagement.cyclicInternetConnectionCheck = function() {
    if (!NetworkManagement.checkConnection()) {
        if (typeof Popup.popup.network_error !== 'undefined')
            Popup.popup.network_error = true;

        if (!Popup.popup.shown) {
            if (Player.state) {
                if (Player.state == Player.PLAYING || Player.state == Player.PAUSED || Player.state == Player.REWIND || Player.state == Player.FORWARD) {
                    if (typeof Player.videoChanged !== 'undefined') {
                        Player.videoChanged = false;
                    }
                    Player.stopVideo();
                }
            }
            Controller.hideSpinner();
            Popup.showError('error', 'Network Disconnected.', 1, "");
        }
    } else {
        if (typeof Popup.popup.network_error !== 'undefined')
            Popup.popup.network_error = false;
    }
    /*  try{
    webapis.network.getAvailableNetworks(NetworkManagement.successCB, NetworkManagement.errorCBwebapis);
    }catch(error){
    Popup.showError('error', error.name, 1, "");
    }
     */
}

NetworkManagement.errorCBwebapis = function(error) {
    //no internet connection
    //    if(!internetConnectionPopup.isShown) {
    Popup.showError('error', 'Webapis - Network Disconnected.', 1, "");
    //        Player.stopVideo();
    //      AdPlayer.stopVideo();
    //    }
}

NetworkManagement.successCB = function(networks) {
    //internet connection
}

NetworkManagement.errorCB = function(error) {
    //no internet connection
    //    if(!internetConnectionPopup.isShown) {
    Popup.showError('error', 'Network Disconnected.', 1, "");
    //        Player.stopVideo();
    //      AdPlayer.stopVideo();
    //    }
}

///


var Main = {
    app: "vizio",
    debugEnabled: false,
    device_id: 29,
    serial: "XPR031QDJO1BWB80H5MY",
    pin: "4CCE3D1F",
    customer: "dekkoo",
}

Main.registerKeys = function() {

    // tizen.tvinputdevice.registerKey("MediaFastForward");
    // tizen.tvinputdevice.registerKey("MediaRewind");
    // tizen.tvinputdevice.registerKey("MediaPlayPause");
    // tizen.tvinputdevice.registerKey("MediaStop");
    // tizen.tvinputdevice.registerKey("MediaPlay");
    // tizen.tvinputdevice.registerKey("MediaPause");
    // tizen.tvinputdevice.registerKey("Exit");
}

//
window.onload = function() {
    Main.tizen = true;
    loadHTML();
    loadMixpanel();
    Popup.init();
    Scene_popup.init();
    //Main.startApp();
    Controller.start();
}


Common.track = function(message, data) {
    console.log(message, data);
}




Common.track = function(message, data) {
    console.log(message, data);
}

//iap

amzn_wa.enableApiTester(amzn_wa_tester);
document.addEventListener('amazonPlatformReady', function() {
    if (amzn_wa.IAP) {
        //API usage code goes here
    }
    // Ensure we can call the IAP API
    if (window.AmazonIapV2 === null) {
        console.debug('Amazon In-App-Purchasing only works with Apps from the Appstore');
    } else {
        window.AmazonIapV2.addListener('getUserDataResponse', function(resp) {});
        window.AmazonIapV2.addListener('getProductDataResponse', function(data) {});
        window.AmazonIapV2.addListener('purchaseResponse', onPurchaseResponse);
        window.AmazonIapV2.addListener('getPurchaseUpdatesResponse', onPurchaseUpdatesResponse);
    }
});

// purchaseItem will cause a purchase response with one receipt
function onPurchaseResponse(e) {
    var response = e.response;
    if (response.status === 'SUCCESSFUL') {
        handleReceipt(response);

    } else if (response.status === 'ALREADY_PURCHASED') {
        // Somehow we are out of sync with the server, let's refresh from the
        // beginning of time.
        var requestOptions = {
            reset: true
        };
        window.AmazonIapV2.getPurchaseUpdates(
            function(operationResponse) {
                // Handle operation response
                var requestId = operationResponse.requestId;
                console.debug(requestId);
            },
            function(errorResponse) {
                // Handle error response
                console.debug(errorResponse);
            }, [requestOptions]
        );
    } else if (response.status === 'FAILED') {
        Popup.showError('Error', 'Purchase request is interrupted. Please try again later', 1, 1);
    } else if (response.status === 'INVALID_SKU') {
        Popup.showError('Error', 'Invalid SKU. Please make sure of SKUS configuration.', 1, 1);
    }

    refreshPageState();
}

// getPurchaseUpdates will return an array of receipts
function onPurchaseUpdatesResponse(e) {
    var response = e.response;
    for (var i = 0; i < response.receipts.length; i++) {
        handleReceipt(response.receipts[i]);
    }
    state.lastPurchaseCheckTime = response.offset;
    // refreshPageState();
    if (response.hasMore) {
        // In case there is more updates that did not
        // get sent with this response, make sure that
        // we get the rest of them.
        var requestOptions = {
            reset: false
        };
        window.AmazonIapV2.getPurchaseUpdates(
            function(operationResponse) {
                // Handle operation response
                var requestId = operationResponse.requestId;
                console.debug(requestId);
            },
            function(errorResponse) {
                // Handle error response
                console.debug(errorResponse);
            }, [requestOptions]
        );
    }
}

// In either case, the contents of the receipt are handled in the same way


/**
 * @function notifyFulfillment
 * @description NotifyFulfillment notifies Amazon about the purchase fulfillment.
 * @param {String} receiptId receipt id
 */
function notifyFulfillment(receiptId) {
    //  fulfillmentResult can be FULFILLED or UNAVAILABLE
    var requestOptions = {
        'receiptId': receiptId,
        'fulfillmentResult': 'FULFILLED'
    };
    window.AmazonIapV2.notifyFulfillment(
        function(operationResponse) {
            // Handle operation response
            console.debug(operationResponse);
        },
        function(errorResponse) {
            // Handle error response
            console.debug(errorResponse);
        }, [requestOptions]
    );

}

function buySubscription(clickedSku) {
    if (window.AmazonIapV2 == null) {
        Popup.showError("Error", "Couldn't talk to Amazon appstore, please try again later.", 1, 1);
    } else {
        var requestOptions = {
            sku: clickedSku // subscription slugname
        };
        window.AmazonIapV2.purchase(
            function(operationResponse) {
                console.debug(operationResponse.requestId);
            },
            function(errorResponse) {
                console.debug(errorResponse);
            }, [requestOptions]
        );
    }
}


function handleReceipt(response) {
    localStorage.setItem('amazon-purchase-recipt', JSON.stringify({
        "userId": response.amazonUserData.userId,
        "reciptId": response.purchaseReceipt.receiptId
    }));

    notifyFulfillment(response.purchaseReceipt.receiptId);
    Server.iap_registration();

}