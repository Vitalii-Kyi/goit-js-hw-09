!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');document.querySelector("form").addEventListener("submit",function(e){e.preventDefault();var n=Number(r.value),t=Number(u.value),o=Number(a.value);if(0>Number(n)||0>Number(t)||0>Number(o))(0,i.Notify).warning("Values can't be negative, please correct fill in the fields!");else if(0===Number(o))(0,i.Notify).warning("Amount can't be zero, please fill in correct value!");else for(var l=0;l<o;l++)(function(e,n){var t=Math.random()>.3;return new Promise(function(o,i){setTimeout(function(){t?o({position:e,delay:n}):i({position:e,delay:n})},n)})})(l,n+t*l).then(function(e){var n=e.position,t=e.delay;(0,i.Notify).success("✅ Fulfilled promise ".concat(n+1," in ").concat(t,"ms"))}).catch(function(e){var n=e.position,t=e.delay;(0,i.Notify).failure("❌ Rejected promise ".concat(n+1," in ").concat(t,"ms"))})})}();
//# sourceMappingURL=03-promises.82af1070.js.map