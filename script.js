const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.getElementById('buttons');

let currentAudio = null;

// create buttons & audio elements
sounds.forEach(sound => {
  // create audio element
  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;

  document.body.appendChild(audio);

  // create button
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopAllSounds();
    audio.play();
    currentAudio = audio;
  });

  buttons.appendChild(btn);
});

// stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', stopAllSounds);
buttons.appendChild(stopBtn);

// helper function
function stopAllSounds() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
