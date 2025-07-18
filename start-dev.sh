#!/bin/bash

# Script para iniciar el servidor de desarrollo
# Detecta automáticamente el gestor de paquetes disponible

echo "🚀 Iniciando servidor de desarrollo para Cursos Blatam IA..."

# Verificar si las dependencias están instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    
    # Intentar con npm primero
    if command -v npm &> /dev/null; then
        echo "📦 Usando npm para instalar dependencias..."
        npm install --legacy-peer-deps
    elif command -v yarn &> /dev/null; then
        echo "📦 Usando yarn para instalar dependencias..."
        yarn install
    elif command -v pnpm &> /dev/null; then
        echo "📦 Usando pnpm para instalar dependencias..."
        pnpm install
    else
        echo "❌ Error: No se encontró ningún gestor de paquetes (npm, yarn, o pnpm)"
        exit 1
    fi
fi

# Iniciar el servidor de desarrollo
echo "🌐 Iniciando servidor de desarrollo..."

if command -v npm &> /dev/null; then
    echo "🚀 Ejecutando con npm..."
    npm run dev
elif command -v yarn &> /dev/null; then
    echo "🚀 Ejecutando con yarn..."
    yarn dev
elif command -v pnpm &> /dev/null; then
    echo "🚀 Ejecutando con pnpm..."
    pnpm run dev
else
    echo "❌ Error: No se encontró ningún gestor de paquetes"
    exit 1
fi 