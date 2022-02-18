// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `

// // const regexp = new RegExp('the', 'gi')
// // const regexp = /the/gi
// // console.log(str.match(/\.$/gim))
// const h = `  the hello  world       !

// `

// console.log(
//     // str.match(/h..p/g) http찾을수있음
//     // str.match(/\w{2,3}/g) 
//     // str.match(/\b\w{2,3}\b/g) 
//     //\w 영어,숫자포함하는 모든 문자
//     //\b 숫자,문자가 아닌 경계를 만들어줌
//     h.replace(/\s/g, '') // 모든 공백 없애기
// )

const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
    str.match(/(?<=\@).{1,}/g)
)