#!/bin/bash

echo "📱 Сборка Android приложения..."

echo "🔨 Шаг 1: Сборка веб-приложения..."
npm run build

echo "📦 Шаг 2: Инициализация Capacitor..."
npx cap init "Книга Рецептов" "dev.poehali.recipes" --web-dir=dist

echo "📱 Шаг 3: Добавление Android платформы..."
npx cap add android

echo "🔄 Шаг 4: Синхронизация с Android..."
npx cap sync android

echo "✅ Готово! Проект Android создан в папке /android"
echo "📝 Инструкции по сборке APK:"
echo "1. Откройте папку /android в Android Studio"
echo "2. Build → Build Bundle(s) / APK(s) → Build APK(s)"
echo "3. APK файл будет в android/app/build/outputs/apk/"
