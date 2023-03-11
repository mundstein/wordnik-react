export async function getWord(rnd = false) {
  const key = 'f39522e4f5fc72ddcf96d3f071a0e7ff49b1d0c20105e77c7';
  const url = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=';

  const random = randomDate(new Date(2013, 0, 1), new Date());
  const date = rnd
    ? '&date=' +
      random.toLocaleDateString('en-US', { year: 'numeric' }) +
      '-' +
      random.toLocaleDateString('en-US', { month: '2-digit' }) +
      '-' +
      random.toLocaleDateString('en-US', { day: '2-digit' })
    : '';

  const res = await fetch(url + key + date);
  if (res.status == 200) {
    return res.json();
  } else if (res.status == 204) {
    throw new Error(`No content. Perhaps date out of range.`);
  } else {
    throw new Error(`Network error. ${res.status}`);
  }
}

function randomDate(start: Date, end: Date) {
  var date = new Date(+start + Math.random() * (+end - +start));
  return date;
}
