!function(){"use strict";var e,r={273:function(){var e=window.wp.blocks,r=window.wp.element,n=window.wp.i18n,t=window.wp.blockEditor;(0,e.registerBlockType)("create-block/gutenberg-custom-blocks",{edit:function(){return(0,r.createElement)("p",(0,t.useBlockProps)(),(0,n.__)("Gutenberg Custom Blocks – hello from the editor!","gutenberg-custom-blocks"))},save:function(){return(0,r.createElement)("p",t.useBlockProps.save(),(0,n.__)("Gutenberg Custom Blocks – hello from the saved content!","gutenberg-custom-blocks"))}})}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}};return r[e](u,u.exports,t),u.exports}t.m=r,e=[],t.O=function(r,n,o,u){if(!n){var c=1/0;for(f=0;f<e.length;f++){n=e[f][0],o=e[f][1],u=e[f][2];for(var s=!0,i=0;i<n.length;i++)(!1&u||c>=u)&&Object.keys(t.O).every((function(e){return t.O[e](n[i])}))?n.splice(i--,1):(s=!1,u<c&&(c=u));if(s){e.splice(f--,1);var l=o();void 0!==l&&(r=l)}}return r}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[n,o,u]},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={826:0,431:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o,u,c=n[0],s=n[1],i=n[2],l=0;if(c.some((function(r){return 0!==e[r]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(i)var f=i(t)}for(r&&r(n);l<c.length;l++)u=c[l],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(f)},n=self.webpackChunkgutenberg_custom_blocks=self.webpackChunkgutenberg_custom_blocks||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var o=t.O(void 0,[431],(function(){return t(273)}));o=t.O(o)}();