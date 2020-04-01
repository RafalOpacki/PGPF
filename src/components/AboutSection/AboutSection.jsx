import React from 'react';
import { sections } from '../../constants/sections';
import './aboutSection.css';

const AboutSection = () => {
  return (
    <section id={sections.about} className='about-section__wrapper'>
      <h2 className='about-section__header'>O nas</h2>
      <p className='about-section__text'>
        Jesteśmy firmą zajmująca się odnawialnymi źródłami energii , znajdującą
        się w sercu województwa pomorskiego. Łączymy dwa światy: sztuki i
        biznesu. Dostarczamy spersonalizowane, prestiżowe rozwiązania najwyższej
        jakości na terenie całej Europy. Zawsze na czas.
      </p>
      <p className='about-section__text'>
        Nasi specjaliści są najlepsi w Polsce, o czym świadczy ich ponad
        15-letnie doświadczenie w zawodzie, szereg nagród oraz zlecenia
        wykonywane w prestiżowych lokalizacjach. Wszyscy z nich posiadają
        wykształcenie elektryczne z najwyższymi ocenami.
      </p>
      <p className='about-section__text'>
        Nie tylko tworzymy projekty na dmy jednorodzinne czy firmy, zajmujemy
        także budowaniem wielkich farm wiatrowych.
      </p>
      <p className='about-section__text'>
        Misją naszej firmy jest dostarczanie jak najwyższej jakości instalacji
        fotowoltaicznych dopasowanych do potrzeb i możliwości konkretnego
        klienta.
      </p>
    </section>
  );
};

export default AboutSection;
