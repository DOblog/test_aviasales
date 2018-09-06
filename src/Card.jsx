import React from 'react';
import PropTypes from 'prop-types';

const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июня'];
const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

// 12.05.18 --> 12 мая 2018, Пт
const formatDate = dateStr => {
  const [day, month, year] = dateStr.split('.');
  const fullYear = `20${year}`;
  const date = new Date(fullYear, month - 1, day);
  const dayNumber = date.getDay();
  console.log(date);
  return `${day} ${months[month - 1]} ${fullYear}, ${days[dayNumber]}`;
};

const Card = ({
  price,
  departureTime,
  stops,
  arrivalTime,
  origin,
  destination,
  destinationName,
  originName,
  departureDate,
  arrivalDate
}) => (
  <div className="wrapper">
    <div className="leftSide">
      <img alt="TK" src="./Turkish-Airlines-Logo-optimized-640x426.png" />
      <button type="button" className="buttonBuy">
        Купить
        <br />
        {`за ${price}₽`}
      </button>
    </div>
    <div className="rightSide">
      <div className="rightSide__inner">
        <div className="stops">3 пересадки</div>
        <div className="ticket">
          <div className="ticket__time">{departureTime}</div>
          <div className="ticket__airport">
            {origin}, {originName}
          </div>
          <div className="ticket__date">{formatDate(departureDate)}</div>
        </div>
        <div className="ticket ticket_right">
          <div className="ticket__time">{departureTime}</div>
          <div className="ticket__airport">
            {origin}, {originName}
          </div>
          <div className="ticket__date">{formatDate(departureDate)}</div>
        </div>
      </div>
    </div>
  </div>
);
Card.propTypes = {
  price: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired
};
// Card.defaultProps = {
//   price: 10000
// }

//<p className="time">{props.departureTime}</p>
//<p className='stops'>{props.stops} ПЕРЕСАДКИ</p>
//<hr />
//<p className='time'>{props.arrivalTime}</p>
//<p>{props.origin}, Владивосток</p>
//<p>{props.destination}, {props.destinationName}</p>
//<p className='stops'>{props.departureDate}</p>
//<p className='stops'>{props.arrivalDate}</p>
export default Card;
