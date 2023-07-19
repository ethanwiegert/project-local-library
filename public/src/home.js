const { findAuthorById } = require("./books")

const getTotalBooksCount=(books) =>{
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  //create an array of all the books that are currently borrowed
  let borrowedBooks=books.filter((book)=>book.borrows[0]["returned"]===false)
  //return the length
  return borrowedBooks.length
      
}

function getMostCommonGenres(books) {
//create empty object for key value pair
let mostPopular={}
//create for loop here
books.forEach((book)=>{
  if (mostPopular[book.genre]){
    mostPopular[book.genre]++
  }
  else {mostPopular[book.genre]=1}
  
})
//use Object.entries to convert most popular to an array
const popularArray=Object.entries(mostPopular);
//sort by genre count
const popularityOrder=popularArray.sort((genreA, genreB)=>genreA[1]>genreB[1]?-1:1)
//map the genre and count into desired output
const genreAndCount=popularityOrder.map((genre)=>({"name": genre[0], "count": genre[1]}))
//return the first 5 values
return genreAndCount.splice(0,5)
 }




 



 function getMostPopularBooks(books) {
  //sort by length of borrows array
  const popularityOrder=books.sort((bookA, bookB)=>bookA.borrows.length>bookB.borrows.length?-1:1)
  //use map  to create array with {name:..., count:...}
  
  const titlesAndCount=popularityOrder.map((book)=>({"name": book.title, "count": book.borrows.length}))


//return the first 5
return titlesAndCount.splice(0,5)
 }
  
//helper function for getMostPopularAuthors()
 function findAuthorName(authors, id) {
  //use find to locate the author that mathces given id
  const writer= authors.find((author)=> author.id===id)
  //return their name
  return `${writer.name.first} ${writer.name.last}`
}


function getMostPopularAuthors(books, authors) {
  //sort the books by the number of times they have been borrowed
  const popularityOrder=books.sort((bookA, bookB)=>bookA.borrows.length>bookB.borrows.length?-1:1)
  //use map to create array and use helper findAuthorName function to match to book
  const authorAndCount=popularityOrder.map((book)=>({"name": findAuthorName(authors, book.authorId), "count": book.borrows.length}))

  //return the first 5 values
  return authorAndCount.splice(0,5)
   }
     

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};