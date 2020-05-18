const KEYBOARD = 'ASDFGHJETUWY';
// const KEYS = [...document.querySelectorAll('kbd')];

const playOnKeyPress = evt => {
  const pressedKey = evt.key.toUpperCase();
  if (KEYBOARD.includes(pressedKey)) {
    const audio = new Audio(`./audio/${pressedKey}.mp3`);
    // const button = KEYS.find(it => it.innerText === pressedKey);
    // button.classList.add('pressed');
    audio.play();
    console.log(audio);
  }
}

document.addEventListener(
  'keydown',
  playOnKeyPress
);