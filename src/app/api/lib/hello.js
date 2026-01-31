// тут может быть любая логика по получению данных извне

export const getHelloMassage = () => ({ message: 'Hello shared module!' })

export const createHelloGreeting = (name) => ({
  message: `Hello ${name} from shared module!`,
})
