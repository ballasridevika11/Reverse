function reverse1(sentence){
    let word=sentence.split(' ');
    let reverse1=word.map(word=>word.split('').reverse().join(''));
    return reverse1.join(' ');
}
let sentence="this is a sunny day";
let words=reverse1(sentence);
console.log(words);