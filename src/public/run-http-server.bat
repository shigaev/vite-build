@echo off

set example=C:\Users\shigaev_dv\AppData\Roaming\nvm\v18.18.0\http-server
if not exist %example% (
	goto end
	:end
	SetLocal
	set /p "ch=Node.js HTTP-SERVER not installed. Do you agree? (y/n)"
	if /i "%ch%"=="Y" ( 
		echo The installation has started.
		start /b /wait cmd /c npm install -g http-server
		echo The http server is installed.
		start /b /wait cmd /c http-server -o
		cmd /k
	) else ( exit )	
) else (
	start http-server -o
)