'use strict';

exports.getTime = (req, res) => {
  let date,
  months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'Jully',
  'August',
  'September',
  'October',
  'November',
  'December'],
  result;

  if (parseInt(req.params.time).toString() === req.params.time) {
    date = new Date(req.params.time * 1000);
  } else {
    date = new Date(req.params.time);
  }

  if(date.toString() !== 'Invalid Date') {
    result = {
      unix: date.getTime() / 1000,
      natural: `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    };    
  } else {
    result = {
      unix: null,
      natural: null
    }
  }

  res.send(result);
}
