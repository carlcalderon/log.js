/*
   Copyright 2011 Carl Calderon

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/function log(a){if(logging.verbose&&console&&console.log)if(a===undefined)console.log(logging.title+' - log message was "undefined".');else{a=String(a);if(a.match!==undefined)if(a.match(/^[a-z]{1}\s/)){var b="",c=0,d="log";switch(a.substr(0,1)){case"x":b="SYSTEM";c=0;break;case"c":b="CRITICAL";c=1;d="error";break;case"e":b="ERROR";c=2;d="error";break;case"w":b="WARNING";c=3;d="warn";break;case"i":b="INFO";c=4;d="info";break;default:case"d":b="DEBUG";c=5;d="debug"}c<=logging.level&&console[d](logging.title+"#"+b+" - "+a.substr(2))}else console.log(logging.title+" - "+a)}}function dump(a){logging&&console.log(a)}var logging={title:"log.js",verbose:!1,level:5};