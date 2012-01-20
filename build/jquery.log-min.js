/*! log.js, r4 - Copyright 2011 Carl Calderon - Licensed under the Apache License, Version 2.0 */
(function(b){var a={title:"log.js",verbose:true,align:true,_ff_align:navigator.userAgent.toLowerCase().indexOf("firefox")>-1,level:6};b.fn.dump=function(c){if(a.verbose){console.log(c)}};b.fn.log=function(e){if(a.verbose){if(console){if(console.log){if(e===undefined){console.log(a.title+' - log message was "undefined".')}else{if(typeof e=="object"){if(e.settings===undefined){b.fn.dump(e)}else{for(key in e){a[key]=e[key]}}}e=String(e);var g=a.align?(a._ff_align?"\t\t  ":"         "):"",d="",f=0,c="log";if(e.match!==undefined){if(e.match(/^[a-z]{1}\s/)){switch(e.substr(0,1)){case"0":case"x":d="SYSTEM";g=!!a._ff_align?"\t  ":"  ";f=0;break;case"1":case"c":d="CRITICAL";g=!!a._ff_align?"  ":"";f=1;c="error";break;case"2":case"e":d="ERROR";g=!!a._ff_align?"\t  ":"   ";f=2;c="error";break;case"3":case"w":d="WARNING";g=!!a._ff_align?"\t":" ";f=3;c="warn";break;case"4":case"i":d="INFO";g=!!a._ff_align?"\t":"    ";f=4;c="info";break;default:case"d":d="DEBUG";g=!!a._ff_align?"\t  ":"   ";f=5;c="debug";break}if(f<=a.level){if(!a.align){g=""}console[c](a.title+"#"+d+g+" | "+e.substr(2))}}else{if(6<=a.level){console.log(a.title+g+" | "+e)}}}}}}}}})(jQuery);