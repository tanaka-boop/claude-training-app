@echo off
REM ========================================
REM 配布用フォルダを生成するスクリプト
REM claude-training-app-dist/ に必要ファイルのみコピー
REM ========================================

set DIST=..\claude-training-app-dist

REM 前回の配布フォルダを削除して再作成
if exist "%DIST%" rmdir /s /q "%DIST%"
mkdir "%DIST%"
mkdir "%DIST%\css"
mkdir "%DIST%\js"
mkdir "%DIST%\assets"

REM 必要ファイルのみコピー（index.html を分かりやすい名前で配布）
copy index.html "%DIST%\Claude スキルアップ.html"
copy css\style.css "%DIST%\css\"
copy js\app.js "%DIST%\js\"
copy js\modules.js "%DIST%\js\"
copy js\quiz.js "%DIST%\js\"
copy assets\ehi-logo.png "%DIST%\assets\"

echo.
echo ========================================
echo 配布用フォルダを生成しました:
echo   %DIST%
echo.
echo 含まれるファイル:
echo   Claude スキルアップ.html
echo   css/style.css
echo   js/app.js, modules.js, quiz.js
echo   assets/ehi-logo.png
echo.
echo このフォルダをGoogle Driveにアップロードしてください
echo ========================================
pause
