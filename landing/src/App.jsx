import React, { useEffect, useState } from "react";
import "./styles.css";

const Hero = ({
  title,
  subtitle,
  image,
  children,
  minHeight = "90vh",
  curved = false,
}) => (
  <section
    className={`hero ${curved ? "curved" : ""}`}
    style={{ backgroundImage: `url(${image})`, minHeight }}
  >
    <div className="hero-content">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      {children}
    </div>
  </section>
);

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 90 && y > lastY + 5) {
        setHidden(true);
      } else if (y < lastY - 5 || y < 90) {
        setHidden(false);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header className={`site-header ${hidden ? "hidden" : ""}`}>
      <div className="logo-wrap">
        <img src="/u-trainerBABA.png" alt="U-trainer Logo" />
        <div className="brand">U-trainer</div>
      </div>
    </header>
  );
};

const testimonials = [
  {
    text: "Belli başlı spor hareketlerini biliyorum ama hangisi benim için doğru emin değilim. Programımı benim için hazırlayacak bir şeye ihtiyacım var.",
    name: "Naz",
    affiliation: "Boğaziçi Üniversitesi'nde Öğrenci",
  },
  {
    text: "Başlıyorum ama üç gün sonra motivasyonum bitiyor. Ne yapmam gerektiğini biri söylese iyi olurdu.",
    name: "Said",
    affiliation: "Boğaziçi Üniversitesi'nde Öğrenci",
  },
];

const features = [
  {
    title: "Kişiselleştirilmiş Programlar",
    items: [
      "Hedeflerine göre otomatik planlama",
      "Kas grupları ve dinlenme süreleri akıllı şekilde ayarlanır",
    ],
  },
  {
    title: "Dinamik Haftalık Plan",
    items: [
      "Ders / iş yoğunluğuna göre uyarlanan takvim",
      "Kaçırdığın antrenmanlar otomatik yeniden planlanır",
    ],
  },
  {
    title: "İlerleme Takibi",
    items: [
      "Fotoğraf, ölçü ve ağırlık takibi",
      "Küçük hedeflerle motivasyon artırma",
    ],
  },
  {
    title: "Anlık Koçluk",
    items: [
      "Hareketleri nasıl yapacağını anında öğren",
      "Sakatlanma riskini azaltan form geri bildirimi",
    ],
  },
];

const PreSignupModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
    // You can add API call here
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">Ön Kayıt</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="modal-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="modal-submit-btn">
            Gönder
          </button>
        </form>
        <p className="modal-info">
          Ürünü ilk deneyenlerden biri olabilmen için bu mail üzerinden
          iletişime geçeceğiz
        </p>
      </div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="with-header-offset">
      <Header />
      <PreSignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Hero
        curved
        title="Yapay Zeka Koçunla Fit Kal"
        subtitle="Sana özel bir antrenman programı için artık servet ödemen gerekmiyor.  Koçun her zaman yanında, her idmanda elinin altında."
        image="withAI.png"
      >
        <button onClick={() => setIsModalOpen(true)} className="btn-primary">
          Ön Kayıt
        </button>
      </Hero>

      <section className="after-curved">
        <div className="container">
          <h2 className="section-title">Nasıl Çalışır?</h2>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="workflow-number">1</div>
              <h3 className="workflow-step-title">Tanışma</h3>
              <p className="workflow-step-desc">
                Koçun ile tanış, ona kilon, boyun, sağlık durumun, hedeflerin ve
                imkanların gibi senle ilgili önemli şeylerden bahset
              </p>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-number">2</div>
              <h3 className="workflow-step-title">Analiz</h3>
              <p className="workflow-step-desc">
                Güçlü ve zayıf yanlarını analiz edebilmesi için koçuna fotoğraf
                gönderebilirsin, böylece koçun senin gerçekten neye ihtiyacın
                olduğunu anlayabilir
              </p>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-number">3</div>
              <h3 className="workflow-step-title">Programını Al</h3>
              <p className="workflow-step-desc">
                Sana ve hedeflerine en uygun, senin için hazırlanmış anternman
                programını alabilirsin. Programınla ilgili aklına takılan
                soruları koçuna sorabilirsin.
              </p>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-number">4</div>
              <h3 className="workflow-step-title">Takip</h3>
              <p className="workflow-step-desc">
                Antrenmanlarının nasıl gittiğinden koçunu haberdar et, gelişimine veya aksaklıklara göre programını güncelleyebilirsin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Kullanıcılar Ne Diyor?</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote-mark">
                  <img src="/icons/quote.svg" alt="Quote" />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-affiliation">
                    {testimonial.affiliation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">U-trainer Sana Ne Sunuyor?</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icons/affordable.svg" alt="Uygun" />
              </div>
              <h3 className="feature-card-title">Uygun</h3>
              <p className="feature-card-desc">
                Özenle eğitilmiş Al teknolojisi sayesinde servet ödemeden
                programını oluşturabilirsin
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icons/personalized.svg" alt="Kişiye Özel" />
              </div>
              <h3 className="feature-card-title">Kişiye Özel</h3>
              <p className="feature-card-desc">
                Verdiğin kişisel bilgiler ve antrenman hedeflerin doğrultusunda
                sana en uygun programa sahip olabilirsin
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pre-signup">
        <div className="container" style={{ textAlign: "center" }}>
          <button onClick={() => setIsModalOpen(true)} className="btn-primary">
            Ön Kayıt
          </button>
        </div>
      </section>
    </div>
  );
}
