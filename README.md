# Active Search

#

[live-demo](https://activesearch.netlify.app/)

#

## Technology in use:

- React.js => VITE
- javaScript(ES6)
- CSS
- Axios
- dotenv
- [Google Books API](https://developers.google.com/books)

## About:

### This app will give ability of search for specific book to the users and by clicking on any book.they can find more information and summery of the book they select.

### They also can keep their favorite book in their collection page and it will stored in their local storage.

- note: There is only 1000 daily request limit!

# Build process:

1- The search has been powered by Google Books API.

## Main page:

2- Must provide Search bar for users and display card / carousel after search completed.

3- When user click on 1 of the book, it should directed to book page with book information display.

4- User must be able to Choice multiple books as their favorite.

5- Create favorite page and display the books user marked as favorite.

## Show The Book user want to see more info about it

6- Make bookCard interActive to user can click on it and identify which book was clicked by it's id

7- create and navigate to book info page with React router when the book clicked

8- Fetch and display that Book is info for the user

## Create Favorite books page

9- Display user favorites books in favorite page

- create state for favorite books
- add the state to local storage for memory
- do this operation in try/catch block
- handle add and remove operation
- navigation bar has been added in this step -

10- style it with css/ soon will be updated with Tailwind CSS!

#

## Challenges

### My main challenge was how to avoid crashing the app when using none verbal search term, that i got help from stack overflow and few good article in [geagsforgeegs](https://www.geeksforgeeks.org/), that finally help me to fix the bug i had with search term.

### CSS was same how my second challenge and i use css from my previous project i have.

# If i had more time

- The state management will be replace with react useContext
- Search query will be save in local storage
- pagination can be added show more books in both home and favorite page
- css may can be with Tailwind css
- authentication can be added.
