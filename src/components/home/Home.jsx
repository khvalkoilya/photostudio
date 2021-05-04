import React from 'react';
import MapLayout from '../map/Map';

const Home = () => (
  <section className="home">
    <article className="home__welcome">
      <div className="container">
        <div className="home__welcome__title">Добро пожаловать!</div>
        <div className="home__welcome__text">Делайте потрясающие снимки и воплощайте в жизнь творческие и креативные идеи</div>
      </div>
    </article>
    <article className="home__description">
      <div className="container">
        <div className="home__description__title">KI_Studio</div>
        <div className="home__description__text">
          Сеть фотостудий KI_Studio - это более 10 залов для съемок
          как индивидуальных, так и групповых. Настраиваемый декор,
          визажисты, гримеры, личные фотографы - всё это вы найдете у нас!
        </div>
      </div>
    </article>
    <article className="home__photos">
      <div className="container">
        <img className="home__photos-1" alt="home-1" src="../../assets/images/home-1.png" />
        <img className="home__photos-2" alt="home-2" src="../../assets/images/home-2.png" />
        <img className="home__photos-3" alt="home-3" src="../../assets/images/home-3.png" />
        <img className="home__photos-4" alt="home-4" src="../../assets/images/home-4.png" />
        <img className="home__photos-5" alt="home-5" src="../../assets/images/home-5.png" />
      </div>
      {/* <div></div>
      <div className="home__photos__double"></div>
      <div className="home__photos__double"></div> */}
    </article>
    <article className="home__map">
      <div className="container">
        <MapLayout />
      </div>
    </article>
  </section>
);

export default Home;
