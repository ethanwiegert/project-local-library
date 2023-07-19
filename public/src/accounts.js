function findAccountById(accounts, id) {
  //find the id that matches in account.id and return 
  return accounts.find((account)=>account.id===id)
}

function sortAccountsByLastName(accounts) {
  //sort the account names, places the alphabetized last name first
  return accounts.sort((accountA, accountB)=> accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1:-1)
}

function getTotalNumberOfBorrows(account, books) {
  //set account id
  const{id}=account
  //create counter 
const foundBooks=books.reduce((result, book)=>{
  //If the borrow id in book equals account id, add to counter.  Start at 0.
  const someBooks=book.borrows.some((borrow)=>borrow.id===id) 
  if (someBooks){result++}
  return result
}, 0)
return foundBooks
}




 




function findAuthorById(authors, id) {
  //use find, return full author identity
  return authors.find((author)=> author.id===id)
}


function getBooksPossessedByAccount(account, books, authors) {
  //create a variable to hold the account id
  const {id}=account
 //find all the books that are currently being borrowed
 let borrowedBooks=books.filter((book)=>book.borrows[0]["returned"]===false)
 //filter to just the books that contain the accountid
 let accountBorrowedBooks=borrowedBooks.filter((book)=>book.borrows[0]["id"]===id)
 //create and return new array containing the book, author, then borrows. Use findAuthorById to put in the author
 return booksBorrowedByAccount=accountBorrowedBooks.map((book)=>({"id": id, "title": book.title, "genere":book.genere, "authorId":book.authorId, "author":findAuthorById(authors, book.authorId),"borrows":book.borrows[0]}))
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
