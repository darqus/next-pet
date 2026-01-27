const ContactsPage = () => {
  return (
    <section className="content">
      <h2 className="section-title">Контакты</h2>
      <p>
        Email: <a href="mailto:info@petshop.ru">info@petshop.ru</a>
        <br />
        Телефон: <a href="tel:+74951234567">+7 (495) 123-45-67</a>
        <br />
        Адрес:{' '}
        <a
          href="https://maps.google.com/?q=г.Москва,ул.Ленина,д.10"
          target="_blank"
          rel="noopener noreferrer"
        >
          г. Москва, ул. Ленина, д. 10
        </a>
      </p>
    </section>
  )
}

export default ContactsPage
