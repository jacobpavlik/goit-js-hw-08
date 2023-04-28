import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const idPlayer = document.querySelector('#vimeo-player');
const player = new Player(idPlayer);

player.on(
  'play',
  throttle(
    function (currentTime) {
      console.log('played the video!');
      localStorage.setItem('videoplayer-current-time', currentTime.seconds);
    },
    1000,
    'trailing: false'
  )
);
const savedTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
// poniżej kod chyba niepotrzebny, ale był w dokumentacji - upewnić się i skasować
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
