export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">RELAX*CAFÉ</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Атмосфера</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Найти нас</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ВЫДОХНИ.
              <br />
              МЫ <span>ЖДЁМ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Семейная кофейня, где время замедляется. Тёплые чашки, тихая музыка и кофе, который не торопит.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Наша история
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ТЕПЛО
              <br />
              И ТИХО
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #УЮТНО
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              RELAX
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ЛАВАНДОВЫЙ РАФ * ТИХИЙ КАПУЧИНО * ОВСЯНЫЙ ДЗЕН * МАТЧА БЕЗ КОФЕИНА * БУЛОЧКА НЕВЕСОМОСТЬ * УСЛЫШЬ
            СЕБЯ * ЛАВАНДОВЫЙ РАФ * ТИХИЙ КАПУЧИНО * ОВСЯНЫЙ ДЗЕН * МАТЧА БЕЗ КОФЕИНА * БУЛОЧКА НЕВЕСОМОСТЬ * УСЛЫШЬ
            СЕБЯ
          </div>
        </div>

        {/* ── КОФЕЙНЫЕ НАПИТКИ ── */}
        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">КОФЕЙНЫЕ НАПИТКИ</h2>
            <a href="#" className="text-sm md:text-base" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}>
              Всё меню
            </a>
          </div>
          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Хит</span>
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/a8a3eee1-9e4a-4faa-9198-92c2140937ad.jpg"
                alt="Умиротворенный раф"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Умиротворенный раф</h3>
                  <span className="price">390 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Раф на кокосовом молоке с мёдом и щепоткой лаванды. Мягкий, обволакивающий вкус.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Нежный</span>
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/6c029abc-d7f1-45e8-9aef-3f3903a5a5ce.jpg"
                alt="Тихий капучино"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Тихий капучино</h3>
                  <span className="price">320 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Классический капучино с пониженной температурой и бархатистой пеной. Не обжигает.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Лёгкий</span>
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/6e7a57d6-c9ca-42f7-87f6-e5b73ecc3641.jpg"
                alt="Сонный эспрессо"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Сонный эспрессо</h3>
                  <span className="price">250 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Однодольный эспрессо лёгкой обжарки с нотами ромашки и белого винограда.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag">Новинка</span>
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/c73fcb4b-fc99-4e07-9e2d-c07444f53b8a.jpg"
                alt="Лавандовый флэт"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Лавандовый флэт</h3>
                  <span className="price">360 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Флэт уайт с лавандовой пылью и микродозой ванили. Без раздражителей.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Тепло</span>
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/0af60058-a99d-4927-a2f5-91919f56db79.jpg"
                alt="Овсяный дзен"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Овсяный дзен</h3>
                  <span className="price">340 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Горячий овсяный латте на паровом молоке с каплей рисового сиропа. Гладкое тело.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── БЕСКОФЕИНОВЫЕ ── */}
        <section className="section-padding" style={{ background: "var(--light)" }}>
          <div className="section-header">
            <h2 className="section-title">БЕЗ КОФЕИНА</h2>
          </div>
          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Для души</span>
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/08fc5e10-2dfb-4123-a1f7-4a2e9093a236.jpg"
                alt="Пустой латте"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Пустой латте</h3>
                  <span className="price">290 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Парное молоко с пылью кедровой смолы и щепоткой мускатного ореха. Только тепло.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Матча</span>
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/b771f898-c7a3-4d4b-ba37-05b497be543f.jpg"
                alt="Сонная матча"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Сонная матча</h3>
                  <span className="price">370 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Бамбуковая матча на миндальном молоке с цветами апельсина. Без кофеина.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag">Золотое</span>
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/2f5f65f1-50fb-467b-bfae-8c7aabe80ce6.jpg"
                alt="Эфирный куркума-латте"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Эфирный куркума-латте</h3>
                  <span className="price">310 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Золотое молоко с чёрным перцем, кокосовым маслом и каплей миндального экстракта.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ЕДА ── */}
        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">МАЛЕНЬКИЕ РИТУАЛЫ</h2>
            <span style={{ fontSize: "13px", color: "#999", fontStyle: "italic" }}>без хруста и резких запахов</span>
          </div>
          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">К кофе</span>
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/460a70d3-74fd-407a-921c-c1bd08f5366f.jpg"
                alt="Пустой круассан"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Пустой круассан</h3>
                  <span className="price">180 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Простой масляный круассан без начинки, чуть подсушенный — не крошится звонко.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Нежное</span>
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/5950268d-a122-403f-bebf-bfbd8884572f.jpg"
                alt="Печенье полудрёмы"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Печенье полудрёмы</h3>
                  <span className="price">150 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Миндальное песочное печенье с рисовой мукой — рассыпается в молоке, не хрустит.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Десерт</span>
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/c071129c-a491-4809-beec-b00e13142807.jpg"
                alt="Эхо воды"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Десерт «Эхо воды»</h3>
                  <span className="price">220 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Прозрачный грушевый кисель с ароматом бергамота и мятными листьями внутри.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── СПЕЦИАЛЬНЫЙ ФОРМАТ ── */}
        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЕНЮ ПО НАСТРОЕНИЮ</h2>
            <p className="vibe-text">
              «Внутренний звук» — напиток дня, который выбирает бариста. Подаётся с карточкой: «Твоё сегодняшнее
              состояние: ___». «Тишина на вынос» — любой напиток в непрозрачном термостакане с надписью «Услышь себя».
              Все заказы через планшет. Молча.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Узнать больше
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        {/* ── ГАЛЕРЕЯ ── */}
        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @RELAX.CAFE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/13066720-e545-4b58-8eb2-d2756a85ede8.jpg"
                alt="Атмосфера 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/8c20d392-7811-431d-b787-be8bef7ffefd.jpg"
                alt="Атмосфера 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/cbad17d8-4df8-4c46-912b-19610b734bb5.jpg"
                alt="Атмосфера 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/b6aa4b9f-418a-4e46-a8ec-42b722d8a460/files/2abd66c1-fc6d-46ca-b274-11327f8db1ae.jpg"
                alt="Атмосфера 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">RELAX*CAFÉ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Семейная кофейня, где время замедляется. Выдохни — мы ждём.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Меню</a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>О нас</a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Атмосфера</a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>г. Ишимбай</li>
            <li>ул. Космонавтов 6</li>
            <li>+7 (915) 997-82-12</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн-Пт: 08:00 - 21:00</li>
            <li>Сб-Вс: 09:00 - 22:00</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 RELAX CAFÉ</span>
          <span>УСЛЫШЬ СЕБЯ</span>
          <span>IG / TG</span>
        </div>
      </footer>
    </>
  );
}