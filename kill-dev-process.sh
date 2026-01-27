#!/bin/bash

# Скрипт для поиска и убийства процесса, запущенного с помощью npm run dev (next dev)

echo "Поиск процессов, связанных с 'next dev'..."

# Ищем процессы, содержащие 'next dev' или 'npm run dev'
processes=$(ps aux | grep -E "(next dev|npm.*run.*dev)" | grep -v grep | grep -v kill-dev-process.sh)

if [ -z "$processes" ]; then
    echo "Процессы, связанные с 'next dev', не найдены."
else
    echo "Найдены следующие процессы:"
    echo "$processes"

    # Извлекаем PID и убиваем каждый процесс
    pids=$(echo "$processes" | awk '{print $2}')

    for pid in $pids; do
        echo "Убиваю процесс с PID: $pid"
        kill -TERM $pid

        # Ждем немного, чтобы процесс завершился корректно
        sleep 2

        # Проверяем, существует ли процесс все еще
        if ps -p $pid > /dev/null; then
            echo "Процесс $pid не завершился корректно, использую принудительное завершение..."
            kill -KILL $pid
        fi
    done

    echo "Все процессы, связанные с 'next dev', были убиты."
fi
