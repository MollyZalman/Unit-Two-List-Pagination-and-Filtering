/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//My global variables

//Get all students
const listItems = document.querySelectorAll('li');
//Show only 10 students per page
const studentsPerPage = 10;

/**
 * My showPage function to show 10 students
 * @param list - All students in the ul
 * @param page -  Current page
 */

function showPage(list, page) {
     //Inspired by: https://jasonwatmore.com/post/2018/08/07/javascript-pure-pagination-logic-in-vanilla-js-typescript
     //Start of Index = 0, end of index = 10
    let startIndex = (page * studentsPerPage) - studentsPerPage;
    let endIndex = (page * studentsPerPage);
    //Loops over each li listItem
    for (let i = 0; i < list.length; i++) {
        //If i is greater than startIndex and less than endIndex...
        if(i >= startIndex && i < endIndex) {
            //True: show items
            list[i].style.display = 'block';
        } else {
            //False: Hide items
            list[i].style.display = 'none';
        }
     }
 }
/**
 * My appendPageLinks function to create page navigation buttons at the bottom of the webpage
 * @param list - All students in the ul
 */

function appendPageLinks(list) {
    //Set pageDiv to the class 'page'
    const pageDiv = document.querySelector('.page');
    const div = document.createElement('div');
    pageDiv.appendChild(div);
    //Adds pagination
    div.className = 'pagination'
     //Adding new ul items 
    const ul = document.createElement('ul');
    div.appendChild(ul);
    //The results = total pages
    const totalPages = Math.ceil(list.length / studentsPerPage);

    /**
     * My newLiLink function to create new Li links and keep track of page numbers 
     * @param currentPageNumber -  Current page
     */

    //Inspired by: https://www.w3schools.com/jsref/met_element_setattribute.asp 
    function newLiLink (currentPageNumber) {
        //New link with page number
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.textContent = currentPageNumber;
        if (currentPageNumber == 1) {
            link.className = 'active';
        }
        //Inspired by: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
        //Having issues with multiple buttons high-lighting after being clicked
        link.addEventListener('click', (e) => {
            const activeElements = document.getElementsByClassName('active');
            for (let i = 1; i < activeElements.length; i++) {
                activeElements[i].classList.remove('active');
            }
            e.target.classList.add('active');
            //Load page with specified items
            showPage(list, currentPageNumber);
        });
        //Adding links to new li items 
        const li = document.createElement('li');
        li.appendChild(link);
        return li;
    }
    for (let i = 1; i <= totalPages; i++) {
        ul.appendChild(newLiLink(i));
    }
}
//Calling the functions
showPage(listItems, 1);
appendPageLinks(listItems);
