const sentence = 'hello there from lighthouse labs';
const typist = function() {
  for (let char of sentence) {

    setTimeout(() => {
      setTimeout(() => {
        process.stdout.write(char);
      }, 50);
    }, 1000);
  }
  setTimeout(() => {
    console.log(' ');
  }, 1100);
};

// typist(sentence);
