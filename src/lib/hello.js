// LRU кэш для хранения результатов
const lruCache = new Map()
const MAX_CACHE_SIZE = 100

const getFromCache = (key) => {
  if (lruCache.has(key)) {
    const value = lruCache.get(key)
    // Перемещаем в конец для обновления порядка использования
    lruCache.delete(key)
    lruCache.set(key, value)
    return value
  }
  return null
}

const setInCache = (key, value) => {
  // Если кэш заполнен, удаляем самый старый элемент
  if (lruCache.size >= MAX_CACHE_SIZE) {
    const firstKey = lruCache.keys().next().value
    lruCache.delete(firstKey)
  }
  lruCache.set(key, value)
}

// тут может быть любая логика по получению данных извне
export const getHelloMassage = () => {
  const cached = getFromCache('hello-message')
  if (cached) return cached

  const result = { message: 'Hello shared module!' }
  setInCache('hello-message', result)
  return result
}

export const createHelloGreeting = (name) => {
  const cacheKey = `greeting-${name}`
  const cached = getFromCache(cacheKey)
  if (cached) return cached

  const result = { message: `Hello ${name} from shared module!` }
  setInCache(cacheKey, result)
  return result
}
