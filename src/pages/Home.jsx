import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      {/* Introducción general */}
      <section className="intro">
        <h1>Bienvenido a COONADOC</h1>
        <p>
          Somos una cooperativa comprometida con el bienestar de nuestros afiliados. 
          Brindamos soluciones financieras solidarias, promoviendo el desarrollo social, económico y humano.
        </p>
      </section>

      {/* Beneficios principales */}
      <section className="benefits">
        <h2>Beneficios de ser parte de COONADOC</h2>
        <ul>
          <li>Acceso a créditos con tasas preferenciales</li>
          <li>Asesoría financiera personalizada</li>
          <li>Convenios con aliados estratégicos</li>
          <li>Seguros y servicios complementarios</li>
        </ul>
      </section>

      {/* Sección de noticias/blog */}
      <section className="blog-preview">
        <h2>Noticias y Blog</h2>
        <article className="news-item">
          <h3>Convocatoria Asamblea General 2025</h3>
          <p>Conoce todos los detalles sobre nuestra próxima asamblea de afiliados, donde tomaremos decisiones importantes para el futuro de nuestra cooperativa.</p>
          <a href="/blog">Leer más</a>
        </article>
        <article className="news-item">
          <h3>Historias de Éxito: María Gómez</h3>
          <p>Gracias al apoyo de COONADOC, María logró iniciar su emprendimiento de productos orgánicos. ¡Conoce su historia!</p>
          <a href="/blog">Leer más</a>
        </article>
      </section>

      {/* Información de contacto */}
      <section className="contact-info">
        <h2>Contáctanos</h2>
        <p>
          📍 Dirección: Calle 123 # 45-67, Bogotá, Colombia <br />
          📞 Teléfono: (1) 234 5678 <br />
          ✉️ Correo: contacto@coonadoc.co
        </p>
        <div className="social-media">
          <a href="https://wa.me/573001112233" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href="https://facebook.com/coonadoc" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com/coonadoc" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;