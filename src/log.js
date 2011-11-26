/* log.js, r2 - Copyright 2011 Carl Calderon - Licensed under the Apache License, Version 2.0 */
var logging = 
// OPTIONS:
{
	title   : 'log.js',	// log title
	verbose : true,     // logging (on/off)
	level   : 6
	/*
		0 system
		1 critical
		2 errors
		3 warnings
		4 info
		5 debug
		6 all
	*/
};

/**
 * Output a standardized message to the browser console.
 * Can be switched of by setting #verbose to false.
 * Level of detail is defined by #logLevel. Higher the
 * value, the more information.
 * Method is equal to console#log().
 * @param msg   Any form of message.
 *				Optional prefixes:
 *				x   System
 *				c   Critical
 *				e   Error
 *				w   Warning
 *				i   Informational
 *				d   Debug
 *  			n/a Undefined type
 */
function log( msg )
{
	if( logging.verbose )
	if( console ) if( console.log ) 
	{
		if( msg === undefined )
			console.log(logging.title + ' - log message was "undefined".');
		else
		{
			msg = String(msg);
			if( msg.match !== undefined )
			if( msg.match( /^[a-z]{1}\s/ ) )
			{
				var prefix  = '';
				var level   = 0;
				var func    = 'log';
				switch( msg.substr(0,1) )
				{	
					case '0' : case 'x': prefix = 'SYSTEM';    level = 0; break;
					case '1' : case 'c': prefix = 'CRITICAL';  level = 1; func = 'error'; break;
					case '2' : case 'e': prefix = 'ERROR';     level = 2; func = 'error'; break;
					case '3' : case 'w': prefix = 'WARNING';   level = 3; func = 'warn';  break;
					case '4' : case 'i': prefix = 'INFO';      level = 4; func = 'info';  break;
					default :
					case 'd': prefix = 'DEBUG';     level = 5; func = 'debug'; break;
				}
				if( level <= logging.level )
					console[func]( logging.title + '#'+prefix+' - ' + msg.substr(2) );
			}
			else if( 6 <= logging.level ) console.log( logging.title + ' - ' + msg );
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
	if( logging.verbose )
		console.log( obj )
}