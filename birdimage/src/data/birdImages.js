const path = require.context('../assets', true, /\.jpg$/);
const birdImages = {
  birds: [
    {
      name: 'bird 1',
      image: path('./1.jpg'),
    },
    {
      name: 'bird 2',
      image: path('./2.jpg'),
    },
    {
      name: 'bird 3',
      image: path('./3.jpg'),
    },
    {
      name: 'bird 4',
      image: path('./4.jpg'),
    },
  ],
};

export default birdImages;
