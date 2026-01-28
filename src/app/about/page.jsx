import Image from 'next/image'

const AboutPage = () => {
  return (
    <section className="content">
      <h2 className="section-title">About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at
        suscipit rem fugit ipsum beatae recusandae repudiandae excepturi libero,
        dolor tempora provident eius itaque enim maiores eum et blanditiis
        porro.
      </p>
      <Image
        src="/dodge-400-200.jpg"
        alt="Dodge"
        width="400"
        height="200"
        priority
      />
    </section>
  )
}

export default AboutPage
