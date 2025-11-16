import React, { useEffect, useState } from 'react';
import './styles.css';

const Hero = ({ title, subtitle, image, children, minHeight = '90vh', curved=false }) => (
  <section className={`hero ${curved ? 'curved' : ''}`} style={{ backgroundImage: `url(${image})`, minHeight }}>
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
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <header className={`site-header ${hidden ? 'hidden' : ''}`}>
      <div className="logo-wrap">
        <img src="/u-trainerBABA.png" alt="U-trainer Logo" />
        <div className="brand">U-trainer</div>
      </div>
    </header>
  );
};

const quotes = [
  { text: '“Belli başlı spor hareketlerini biliyorum ama hangisi benim için doğru emin değilim.”', name: 'Naz — Üniversite Öğrencisi' },
  { text: '“Başlıyorum ama üç gün sonra motivasyonum bitiyor. Ne yapmam gerektiğini biri söylese iyi olurdu.”', name: 'Said — 20 yaşında' },
  { text: '“İşten sonra spor yapmak istiyorum ama ne yapacağımı düşünmek bile yoruyor.”', name: 'Harun — Ofis Çalışanı' },
  { text: '“Gym ortamı kalabalık, herkes bakıyor gibi hissediyorum. Evde doğru bir rehberle çalışsam çok iyi olur.”', name: 'Hasan — Yeni Başlayan' }
];

const features = [
  { title: 'Kişiselleştirilmiş Programlar', items: ['Hedeflerine göre otomatik planlama', 'Kas grupları ve dinlenme süreleri akıllı şekilde ayarlanır'] },
  { title: 'Dinamik Haftalık Plan', items: ['Ders / iş yoğunluğuna göre uyarlanan takvim', 'Kaçırdığın antrenmanlar otomatik yeniden planlanır'] },
  { title: 'İlerleme Takibi', items: ['Fotoğraf, ölçü ve ağırlık takibi', 'Küçük hedeflerle motivasyon artırma'] },
  { title: 'Anlık Koçluk', items: ['Hareketleri nasıl yapacağını anında öğren', 'Sakatlanma riskini azaltan form geri bildirimi'] }
];

export default function App() {
  return (
    <div className="with-header-offset">
      <Header />
      <Hero
        curved
        title="Yapay Zeka Koçunla Fit Kal"
        subtitle="Sana özel bir antrenman programı için artık servet ödemen gerekmiyor.  Koçun her zaman yanında, her idmanda elinin altında."
        image="withAI.png"
      >
        <a href="#pre-signup" className="btn-primary">Ön Kayıt</a>
      </Hero>

      <Hero
        title="İnsanlar Neden Zorlanıyor?"
        subtitle="Çoğu insan spor yapmak istiyor ama nereden başlayacağını bilmiyor. Hazır programlar kişiye uymuyor, hareketleri doğru yapıp yapmadığından emin olamıyor, motivasyon birkaç gün sonra düşüyor. Spor için zaman yaratmak, düzen oturtmak ve doğru rehberliği bulmak zor."
        image="confusing.png"
        minHeight="80vh"
      />

      <section className="after-curved">
        <div className="container">
          <h2 className="section-title">Kullanıcılar Ne Diyor?</h2>
          <p className="section-desc">Gerçek görüşmelerden alınmış ifadeler</p>
          <div className="grid">
            {quotes.map(q => (
              <div key={q.name} className="card quote-card">
                <div className="quote-mark">"</div>
                <p>{q.text}</p>
                <div className="quote-name">{q.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">U-trainer Sana Ne Sunuyor?</h2>
          <p className="section-desc">Yapay zeka ve spor psikolojisini birleştirerek sürdürülebilir bir antrenman deneyimi sunuyoruz.</p>
          <div className="grid">
            {features.map(f => (
              <div key={f.title} className="card">
                <h3>{f.title}</h3>
                <ul>
                  {f.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pre-signup">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ön Kayıt Bırak</h2>
          <p className="section-subtitle">U-trainer’ı ilk deneyenlerden olmak için e-posta adresini bırak.</p>
          <p>(Buraya kayıt formu gelecek)</p>
        </div>
      </section>
    </div>
  );
}
