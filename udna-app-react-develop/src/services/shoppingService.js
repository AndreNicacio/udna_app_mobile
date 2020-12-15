import moment from 'moment';

import { masks } from './maskService';

const mapShoppingService = (shoppingData) => shoppingData.getExams.map((elt) => ({
  id: elt.id,
  examId: elt.examId,
  title: elt.title,
  price: masks.money(elt.price),
  status: elt.status,
  date: moment(elt.date).format('DD/MM/YYYY'),
}));

export { mapShoppingService };
