import Player from '@vimeo/player';

const idPlayer = document.querySelector('#vimeo-player');
const player = new Player(idPlayer);
// const player = new Vimeo.Player(idPlayer); // dokumentacja
console.log(idPlayer);
console.log(player);

// dokumentacja
// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

player.on('play', function (currentTime) {
  console.log('played the video!');
  console.log('currentTime');
  console.log(currentTime);
  console.log('');

  console.log('currentTime.seconds');
  console.log(currentTime.seconds);
  console.log('');
  //   currentTime = setCurrentTime;
  console.log('JSON.stringify(currentTime)');
  console.log(JSON.stringify(currentTime));
  console.log('');

  console.log('JSON.stringify(currentTime.seconds)');
  console.log(JSON.stringify(currentTime.seconds));
  console.log('');

  console.log('JSON.parse(JSON.stringify(currentTime))');
  console.log(JSON.parse(JSON.stringify(currentTime)));
  console.log('');

  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
  // JSON.stringify(currentTime.seconds)
  //   );
  console.log('localStorage.setItem');
  console.log(localStorage.setItem);
});
const savedTime = localStorage.getItem('videoplayer-current-time');
console.log('savedTime');
console.log(savedTime);
// dokumentacja
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

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
//Piotr 1
// playerBind: document.querySelector('#vimeo-player')
// this.playerInstance = this.playerBind;
// this.videoPlayer = new Player(this.playerInstance);

// Piotr 2
// this.videoPlayer.getVideoTitle().then(function (title) {
//     console.log('title:', title);
//      });
//      this.videoPlayer.on('play', function () {console.log('playing...');}
