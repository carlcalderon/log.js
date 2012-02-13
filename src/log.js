/*! log.js, r5 - Copyright 2011 Carl Calderon - Licensed under the Apache License, Version 2.0 */
var logging = 
// OPTIONS:
{
	title     : 'log.js', // log title
	verbose   : true,     // logging (on/off)
	align	  : true,     // align all message
	align_id  : navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? 'ff' : (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ? 'ch' : 'normal'),	// firefox and chrome ruin alignment
	level     : 6,/* 0 system
                     1 critical
                     2 errors
                     3 warnings
                     4 info
                     5 debug
                     6 all
	              */
	_alignments :
	{
		normal :
		{
			none     : '         ',
			system   : '  ',
			critical : '',
			error    : '   ',
			warning  : ' ',
			info     : '    ',
			debug    : '   '
		},
		ff :
		{
			none     : '\t\t  ',
			system   : '\t  ',
			critical : '  ',
			error    : '\t  ',
			warning  : '\t',
			info     : '\t',
			debug    : '\t  '
		},
		ch :
		{
			none     : '           ',
			system   : '    ',
			critical : '',
			error    : '   ',
			warning  : '   ',
			info     : '      ',
			debug    : '     '
		}
	}
};

/**
 * Output a standardized message to the browser console.
 * Can be switched of by setting #verbose to false.
 * Level of detail is defined by #logLevel. Higher the
 * value, the more information.
 * Method is equal to console#log().
 * @param msg   Any form of message.
 *              Optional prefixes:
 *              x   System
 *              c   Critical
 *              e   Error
 *              w   Warning
 *              i   Informational
 *              d   Debug
 *              n/a Undefined type
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
			msg 		= String(msg);
			var align	= logging.align?( logging._alignments[logging.align_id].none ):'',
				prefix  = '',
				level   = 0,
				func    = 'log';
			if( msg.match !== undefined )
			if( msg.match( /^[a-z]{1}\s/ ) )
			{
				switch( msg.substr(0,1) )
				{	
					case '0' : case 'x': prefix = 'SYSTEM';    align=logging._alignments[logging.align_id].system;   level = 0; break;
					case '1' : case 'c': prefix = 'CRITICAL';  align=logging._alignments[logging.align_id].critical; level = 1; func = 'error'; break;
					case '2' : case 'e': prefix = 'ERROR';     align=logging._alignments[logging.align_id].error;    level = 2; func = 'error'; break;
					case '3' : case 'w': prefix = 'WARNING';   align=logging._alignments[logging.align_id].warning;  level = 3; func = 'warn';  break;
					case '4' : case 'i': prefix = 'INFO';      align=logging._alignments[logging.align_id].info;     level = 4; func = 'info';  break;
					default :  case 'd': prefix = 'DEBUG';     align=logging._alignments[logging.align_id].debug;    level = 5; func = 'debug'; break;
				}
				if( level <= logging.level )
				{
					if( !logging.align )
						align = '';
					console[func]( logging.title + '#'+prefix + align + ' | ' + msg.substr(2) );
				}
			}
			else if( 6 <= logging.level ) console.log( logging.title + align + ' | ' + msg );
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