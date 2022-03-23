GoLang Back-end // For front-end instructions see /my-app/README.txt

----------------------------------------------------------------------------------------------
Get Source Code ------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------

Run these commands from the terminal where ever you want to clone the source code
-----------------------------------
git clone https://github.com/penCoding/lvlsample.git
cd lvlsample
-----------------------------------

----------------------------------------------------------------------------------------------
Installation ---------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------

Make sure the following have been installed
 
* gcc compiler required to get/install sqlite3 - it can be downloaded and installed from https://sourceforge.net/projects/mingw/files/Installer/

After installing make sure to add the path MinGW\bin to your PATH variable 

Run these commands from the terminal in the root of the project folder
-----------------------------------
go get github.com/mattn/go-sqlite3
go get github.com/labstack/echo/v4
go get github.com/sirupsen/logrus
-----------------------------------

In vscode Go extension, Go format tool needed to be set to gofmt to allow importing packages from subdirectories. By default it is set to goimport and goimport has this isssue of removing local imports on save despite being used.
See https://github.com/joefitzgerald/go-plus/issues/369

----------------------------------------------------------------------------------------------
Start Back-end Server ------------------------------------------------------------------------
----------------------------------------------------------------------------------------------

Run this command in the root of the project folder
-----------------------------------
go run main.go

if it worked you should see the following, and your back-end server should be started and listening on port 4041

----------------------------------------------------------------------------------------------
{"time":"2022-03-22T20:34:26.4763907-03:00","level":"-","prefix":"echo","file":"searcher.go","line":"38","message":"Listening on port 4041"}

   ____    __
  / __/___/ /  ___
 / _// __/ _ \/ _ \
/___/\__/_//_/\___/ v3.3.10-dev
High performance, minimalist Go web framework
https://echo.labstack.com
____________________________________O/_______
                                    O\
⇨ http server started on 127.0.0.1:4041



