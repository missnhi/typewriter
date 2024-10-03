class Sentence {
  constructor(text) {
    this.text = text;
  }
  
  typewriter() {
    for (let i = 0; i < this.text.length; i++) {
      setTimeout(() => {
        process.stdout.write(this.text[i]);
      }, 50 * i);
    }
  }
}

const sentence1 = new Sentence("hello there from lighthouse labs");
const sentence2 = new Sentence("this is Nhi Phan from Lighthouse Labs");

sentence1.typewriter();
setTimeout(() => {
  console.log(); // move to the next line after the first sentence
  sentence2.typewriter();
}, 50 * sentence1.text.length);