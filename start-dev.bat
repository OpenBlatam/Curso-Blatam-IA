@echo off
REM Script para iniciar el servidor de desarrollo en Windows
REM Detecta automáticamente el gestor de paquetes disponible

echo 🚀 Iniciando servidor de desarrollo para Cursos Blatam IA...

REM Verificar si las dependencias están instaladas
if not exist "node_modules" (
    echo 📦 Instalando dependencias...
    
    REM Intentar con npm primero
    where npm >nul 2>&1
    if %errorlevel% equ 0 (
        echo 📦 Usando npm para instalar dependencias...
        npm install --legacy-peer-deps
    ) else (
        where yarn >nul 2>&1
        if %errorlevel% equ 0 (
            echo 📦 Usando yarn para instalar dependencias...
            yarn install
        ) else (
            where pnpm >nul 2>&1
            if %errorlevel% equ 0 (
                echo 📦 Usando pnpm para instalar dependencias...
                pnpm install
            ) else (
                echo ❌ Error: No se encontró ningún gestor de paquetes (npm, yarn, o pnpm)
                pause
                exit /b 1
            )
        )
    )
)

REM Iniciar el servidor de desarrollo
echo 🌐 Iniciando servidor de desarrollo...

where npm >nul 2>&1
if %errorlevel% equ 0 (
    echo 🚀 Ejecutando con npm...
    npm run dev
) else (
    where yarn >nul 2>&1
    if %errorlevel% equ 0 (
        echo 🚀 Ejecutando con yarn...
        yarn dev
    ) else (
        where pnpm >nul 2>&1
        if %errorlevel% equ 0 (
            echo 🚀 Ejecutando con pnpm...
            pnpm run dev
        ) else (
            echo ❌ Error: No se encontró ningún gestor de paquetes
            pause
            exit /b 1
        )
    )
) 