@echo off

set app_data_path=%appdata%
set example=\nvm\v18.18.0\http-server
set full_path=%app_data_path% %example%
set full_path=%full_path: =%
if not exist %full_path% (
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