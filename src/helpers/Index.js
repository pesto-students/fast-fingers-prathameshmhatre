import dictionary from './data/dictionary.json';

export const getRandomWord = () => {
  return dictionary[Math.floor(Math.random() * dictionary.length)];
};
