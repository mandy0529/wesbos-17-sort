const lists = document.getElementById('bands');

const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

const sort = (name) => {
  return name.replace(/^(a|the|an)/i, '').trim();
};

const handleSort = () => {
  const sorting = bands.sort((a, b) => {
    return sort(a) > sort(b) ? 1 : -1;
  });
  lists.innerHTML = sorting
    .map((sort) => {
      return `<li>${sort}</li>`;
    })
    .join('');

  return sorting;
};
handleSort();
