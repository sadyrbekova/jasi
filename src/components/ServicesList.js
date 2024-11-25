import React from 'react';
import '../components/ServicesList.css';

const ServicesList = () => {
  return (
    <div className="services-container">
      <header className="services-header">
        <span>Services</span>
        <span>Услуги</span>
      </header>

      <div className="services-title">
        <h1>СПИСОК</h1>
        <h1>МОИХ</h1>
        <h1>УСЛУГ</h1>
      </div>

      <div className="services-content">
        <p><strong>Каждая работа уникальна</strong>, поэтому все цены стоят <strong>ОТ</strong>, более подробно я могу назвать стоимость после обсуждения всех задач с вами</p>
        <p><strong>Стоимость зависит</strong> от объема работы, наличия анимации, желаемого дизайна, дополнительных сервисов и услуг</p>
        <p><strong>Если у вас есть запрос</strong>, можете написать мне в сообщениях, и мы быстро сможем обсудить ваш проект</p>
      </div>
    </div>
  );
};

export default ServicesList;
