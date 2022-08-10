const str = ` 
010-1234-3344
thecon@gmail.com.
https://www.omdbapi.com/?apikey=7848484&frozen
The quick brown fox jumps over the lazy dog.
abbbbccccddd http
`;

// const regexp = new RegExp("the", "gi");

// console.log(regexp.test(str));
// console.log(str.replace(regexp, "AAA"));

// const regexp = /\.$/gim;
// console.log(str.match(regexp));

console.log(str.match(/\s/g));
