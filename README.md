log.js
========

#### Prefix Logging in Javascript ####

Logging in Javascript takes alot of effort and time to keep clean and structured. This project makes this really easy. Prefix logging utilize one single character in the beginning of a message to determine the type of the event.

### Examples ###

#### Untyped log #### 

A log type is not required to perform a basic log.
```html
<script>
	log('Hello World!');
</script>
```

#### Other type of logs #### 
The power of log.js lay within the prefix. First char in the requested message defines the type. "e" for Error, "w" for warning, etc. These log types (levels) may be filtered out with the capital full tag of the message type, such as "CRITICAL" or "INFO".
```html
<script>
	log('d This is a debug message');
	log('i This is an informational message');
	log('w This is a warning message');
	log('e This is an error message');
	log('c This is a critical message');
	log('x This is a system message');
</script>
```

#### Log levels ####

Every log type is defined by a level. Higher levels are less important. 0 is defined as "SYSTEM", 1 is "CRITICAL" and so on. The logging options may define what level is the highest possible.

* 0 - system
* 1 - critical
* 2 - errors
* 3 - warnings
* 4 - info
* 5 - debug
* 6 - all

```html
<script>
	log('w This message will be displayed.');
	log('e This message will be displayed.');
	
	logging.level = 2;
	
	log('w This message will be ignored.');
	log('e This message will be displayed.');
</script>
```

#### Shut up! ####

Logging may also be completely turned off.
```html
<script>
	log('This message will be displayed.');
	
	logging.verbose = false;
	
	log('Any message from this point will be ignored.');
</script>
```