@echo off
setlocal

rem change to the correct directory
rem count the files
dir /b *.java /s 2> nul | find "" /v /c > %temp%\count
set /p _count=<%temp%\count
rem cleanup
del %temp%\count
rem output the number of files
echo Files found : %_count%
rem list the files
echo Files Paths :
dir /b *.java /s
for /f "delims=" %%a in ('dir /s /b *.java') do set "filepath=%%a"

if %_count%==0 (echo "Tidak ada File") else (choice /c yn /m "Do you want to rename it (Jangan lupa ekstensi file-nya)")
rem if %_count%==0 (echo "Tidak ada File") else (choice /c yn /m "Do you want to rename it (Jangan lupa ekstensi file-nya)")
set /P "newname= New Name: "
if errorlevel 1 ren %filepath% %newname%
if errorlevel 2 echo "Tidak"
pause
endlocal