module.exports = function getSeason(date) {
  if(date == undefined) return 'Unable to determine the time of year!';
  date.setMonth(date.getMonth());

  let srasonInMonh = new Map([[1, 'winter'], [2, 'spring'], [3, 'spring'], [4, 'spring'],
   [5, 'summer'], [6, 'summer'], [7, 'summer'], 
   [8, 'autumn'], [9, 'autumn'], [10, 'autumn'], 
   [11, 'winter'], [0, 'winter']]);
  let month = date.getMonth();

  return srasonInMonh.get(month);
};
