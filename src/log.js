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
*/

// logging options
logging = 
{
	title	= 'log.js'	// log title
	verbose = false,	// logging (on/off)
	level 	= 5
	/*
		0 system
		1 critical
		2 errors
		3 warnings
		4 info
		5 debug
	*/
}

/**
 * Output a standardized message to the browser console.
 * Can be switched of by setting #verbose to false.
 * Level of detail is defined by #logLevel. Higher the
 * value, the more information.
 * Method is equal to console#log().
 * @param msg 	Any form of message.
 *				Optional prefixes:
 *				x System
 *				c Critical
 *				e Error
 *				w Warning
 *				i Informational
 *				d Debug
 */
function log( msg )
{
	if( logging.verbose )
	if( console ) if( console.log ) 
	{
		if( msg == undefined )
			console.log(logging.title + ' - log message was "undefined".');
		else
		{
			msg = String(msg);
			if( msg.match !== undefined )
			if( msg.match( /^[a-z]{1}\s/ ) )
			{
				var prefix 	= '';
				var level 	= 0;
				var func 	= 'log';
				switch( msg.substr(0,1) )
				{	
					case 'x': prefix = 'SYSTEM';	level = 0; 					break;
					case 'c': prefix = 'CRITICAL';	level = 1; func = 'error';	break;
					case 'e': prefix = 'ERROR'; 	level = 2; func = 'error';	break;
					case 'w': prefix = 'WARNING'; 	level = 3; func = 'warn';	break;
					case 'i': prefix = 'INFO'; 		level = 4; func = 'info';	break;
					default :
					case 'd': prefix = 'DEBUG'; 	level = 5; func = 'debug';	break;
				}
				if( level <= logging.level )
					console[func]( logging.title + '#'+prefix+' - ' + msg.substr(2) );
			}
			else console.log( logging.title + ' - ' + msg );
		}
	}
}

/**
 * Outputs the provided object and all public 
 * keys and/or variables.
 * 
 * @param obj Any object
 */
function dump( obj )
{
	if(logging)
		console.log(obj)
}