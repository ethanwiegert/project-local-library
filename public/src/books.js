function findAuthorById(authors, id) {
  //use find, return full author identity
  return authors.find((author)=> author.id===id)
}

function findBookById(books, id) {
  //use find, return the book that matches id
return books.find((book)=> book.id===id)
}

function partitionBooksByBorrowedStatus(books) {
  //create blank array
  let result =[]
  //create array of all books that are borrowed
  let borrowedBooks=books.filter((book)=>book.borrows[0]["returned"]===false)
  //create array of all books returned
  let notBorrowed=books.filter((book)=>book.borrows[0]["returned"]===true)
  //put arrays inside of result
  result.push(borrowedBooks)
  result.push(notBorrowed)
  //return the full array
  return result
}

function getBorrowersForBook(book, accounts) {
  //create a variable for all the borrows
const {borrows}=book
  //filter through and find all the ids that matches an account id
  let borrowers=[]
  accounts.forEach(account=>{
     const borrow = borrows.find(borrow=>borrow.id === account.id)
     if(borrow)
       {
        //if the borrow matches the id push the borrow and account 
         borrowers.push({...borrow, ...account})
       }
  })
  //return the first ten
return borrowers.splice(0,10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
