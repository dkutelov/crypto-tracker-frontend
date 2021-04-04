import add from 'date-fns/add';
import sub from 'date-fns/sub';
import format from 'date-fns/format';

export function getChartsData(data) {
  const chartsData = [];
  let date = sub(Date.now(), {
    days: 7,
  });

  for (let i = 0; i < 7; i++) {
    let min = 1000000;
    let max = 0;
    let sum = 0;
    for (let index = i * 24; index <= i * 24 + 23; index++) {
      sum += data[index];

      if (data[index] < min) {
        min = data[index];
      }
      if (data[index] > max) {
        max = data[index];
      }
    }
    const currentDate = {
      name: format(date, 'dd-MM-yyyy'),
      avg: (sum / 24).toFixed(2),
      min: min.toFixed(2),
      max: max.toFixed(2),
    };
    chartsData.push(currentDate);
    date = add(date, {
      days: 1,
    });
  }
  return chartsData;
}
