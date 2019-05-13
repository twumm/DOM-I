let limit = 10;
let start = 0;

const timer = setInterval(increment, 100);

function increment() {
  if (start < 10) {
    start = start + 1;
  }
}
