import React from 'react';
import Card from './Card';

const ticket = {
  origin: 'VVO',
  origin_name: 'Владивосток',
  destination: 'TLV',
  destination_name: 'Тель-Авив',
  departure_date: '12.05.18',
  departure_time: '16:20',
  arrival_date: '12.05.18',
  arrival_time: '22:10',
  carrier: 'TK',
  stops: 3,
  price: 12400
};

const App = () => {
  return (
    <Card
      origin={ticket.origin}
      originName={ticket.origin_name}
      destination={ticket.destination}
      destinationName={ticket.destination_name}
      departureDate={ticket.departure_date}
      departureTime={ticket.departure_time}
      arrivalDate={ticket.arrival_date}
      arrivalTime={ticket.arrival_time}
      carrier={ticket.carrier}
      stops={ticket.stops}
      price={ticket.price}
    />
  );
};

export default App;
