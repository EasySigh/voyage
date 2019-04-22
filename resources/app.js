var $ = require("jquery");
import 'bootstrap';
import datepicker from 'js-datepicker';

const picker = datepicker('#date-input');
// const picker = datepicker('#date-input', {
//   onSelect: (instance, date) => {
//     // Do stuff when a date is selected (or unselected) on the calendar.
//     // You have access to the datepicker instance for convenience.
//   }
// })