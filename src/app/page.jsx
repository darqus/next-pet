import Button from '@/components/Button'

export const metadata = {
  title: 'Next JS Example',
  description: 'Dark modern Next.ls demo main page',
  keywords: 'business, next js, react',
}

export default function Home() {
  return (
    <div className="content">
      <h1>Изучаем Next.Js</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ex
        praesentium, veniam incidunt perspiciatis quos!
      </p>
      <Button />
    </div>
  )
}
