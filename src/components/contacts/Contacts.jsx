import React from 'react';

const Contacts = () => (
  <section className="contacts">
    <div className="container">
      <div className="contacts__void" />
      <div className="contacts__block">
        <form className="contacts__form">
          <h1 className="contacts__title">Введите свои данные</h1>
          <input
            name="name"
            type="text"
            placeholder="Ваше имя"
            className="contacts__name"
            required
          />
          <input
            name="telephone"
            type="text"
            placeholder="Ваш телефон"
            className="contacts__name"
            required
          />
          <input
            name="studio"
            type="text"
            placeholder="Название фотостудии"
            className="contacts__name"
          />
          <input
            name="photographer"
            type="text"
            placeholder="Имя фотографа"
            className="contacts__name"
          />
          <textarea
            name="comment"
            placeholder="Комментарий"
          />
          <button type="submit">ОТПРАВИТЬ</button>
          <p className="contacts__questions">
            Еcть вопросы?
            <span>+375 (33) 988- 88-98</span>
          </p>
        </form>
      </div>
      <div className="contacts__void" />
    </div>
  </section>
);

export default Contacts;
