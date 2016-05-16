// ==UserScript==
// @name        Navigator Platform Hider
// @namespace   meh
// @description change your navigator.platform when browsing
// @include     *
// @version     1.1
// ==/UserScript==
var fakePlatformGetter = function () {
return "LINCE";
};
if (Object.defineProperty) {
Object.defineProperty(navigator, "platform", {
get: fakePlatformGetter
});
} else if (Object.prototype.__defineGetter__) {
navigator.__defineGetter__("platform", fakePlatformGetter);
}
