const { execSync } = require('node:child_process')
const os = require('node:os')

function killDevProcesses() {
  console.log("Поиск процессов, связанных с 'next dev'...")

  try {
    // Выполняем команду для поиска процессов, связанных с next dev
    let processes

    if (os.platform() === 'win32') {
      // Команда для Windows
      processes = execSync('tasklist /fo csv /nh', { encoding: 'utf-8' })

      const nextProcesses = processes
        .split('\n')
        .filter(
          (line) =>
            line.includes('node') &&
            (line.includes('next dev') || line.includes('npm run dev')),
        )
        .map((line) => {
          const match = line.match(/"([^"]*)"/g)
          if (match) {
            const processName = match[0].replace(/"/g, '')
            const pid = match[1]?.replace(/"/g, '')
            return { processName, pid }
          }
          return null
        })
        .filter(Boolean)

      if (nextProcesses.length === 0) {
        console.log("Процессы, связанные с 'next dev', не найдены.")
        return
      }

      console.log('Найдены следующие процессы:')
      nextProcesses.forEach((p) => {
        console.log(`${p.processName} (PID: ${p.pid})`)
      })

      // Убиваем процессы
      nextProcesses.forEach((p) => {
        console.log(`Убиваю процесс с PID: ${p.pid}`)
        execSync(`taskkill /PID ${p.pid} /F`)
      })
    } else {
      // Команда для Unix-систем (Linux/macOS)
      processes = execSync('ps aux', { encoding: 'utf-8' })

      const nextProcesses = processes
        .split('\n')
        .filter(
          (line) =>
            line.includes('next dev') ||
            (line.includes('npm') &&
              line.includes('run') &&
              line.includes('dev')) ||
            (line.includes('yarn') && line.includes('dev')),
        )
        .filter(
          (line) =>
            !line.includes('grep') && !line.includes('kill-dev-process'),
        )
        .map((line) => {
          const parts = line.trim().split(/\s+/)
          if (parts.length >= 2) {
            return {
              command: parts.slice(10).join(' '),
              pid: parts[1],
            }
          }
          return null
        })
        .filter(Boolean)

      if (nextProcesses.length === 0) {
        console.log("Процессы, связанные с 'next dev', не найдены.")
        return
      }

      console.log('Найдены следующие процессы:')
      nextProcesses.forEach((p) => {
        console.log(`${p.command} (PID: ${p.pid})`)
      })

      // Убиваем процессы
      nextProcesses.forEach((p) => {
        console.log(`Убиваю процесс с PID: ${p.pid}`)
        try {
          process.kill(p.pid, 'SIGTERM')

          // Ждем немного, чтобы процесс завершился корректно
          setTimeout(() => {
            try {
              // Проверяем, существует ли процесс все еще
              process.kill(p.pid, 0) // Проверяем существование процесса
              console.log(
                `Процесс ${p.pid} не завершился корректно, использую принудительное завершение...`,
              )
              process.kill(p.pid, 'SIGKILL')
            } catch (_e) {
              // Процесс уже завершен
            }
          }, 2000)
        } catch (error) {
          console.error(
            `Ошибка при завершении процесса ${p.pid}:`,
            error.message,
          )
        }
      })
    }

    console.log("Все процессы, связанные с 'next dev', были убиты.")
  } catch (error) {
    console.error('Ошибка при выполнении команды:', error.message)
  }
}

killDevProcesses()
