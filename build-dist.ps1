[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$src = "C:\Users\eh0256\Desktop\Claude\claude-training-app"
$dist = "C:\Users\eh0256\Desktop\Claude\Claude Skill Up"

if (Test-Path $dist) { Remove-Item $dist -Recurse -Force }
New-Item -ItemType Directory -Path $dist -Force | Out-Null
New-Item -ItemType Directory -Path "$dist\css" -Force | Out-Null
New-Item -ItemType Directory -Path "$dist\js" -Force | Out-Null
New-Item -ItemType Directory -Path "$dist\assets" -Force | Out-Null

Copy-Item "$src\index.html" "$dist\START.html"
Copy-Item "$src\css\style.css" "$dist\css\style.css"
Copy-Item "$src\js\app.js" "$dist\js\app.js"
Copy-Item "$src\js\modules.js" "$dist\js\modules.js"
Copy-Item "$src\js\quiz.js" "$dist\js\quiz.js"
Copy-Item "$src\assets\ehi-logo.png" "$dist\assets\ehi-logo.png"

Write-Host "Done!"
