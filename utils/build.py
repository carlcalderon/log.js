import subprocess
import os
print os.getcwd()
print subprocess.call('java -jar yuicompressor-2.4.7.jar -v -o '+os.getcwd()+'/../build/log-min.js '+os.getcwd()+'/../src/log.js', shell=True);