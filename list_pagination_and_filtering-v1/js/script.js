                                                                /*#########################################
                                                                            Treehouse Techdegree:
                                                                FSJS Project 2 - List Filter and Pagination
                                                                ##########################################*/

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
     //Start of Index = 0
    let startIndex = (page * studentsPerPage) - studentsPerPage;
    //end of index = 10
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
    //Creates a new div 
    const div = document.createElement('div');
    //Adds div as a child to pageDiv
    pageDiv.appendChild(div);
    //Adds pagination
    div.className = 'pagination'
     //Adds new ul items 
    const ul = document.createElement('ul');
    //Adds ul as a child to the div
    div.appendChild(ul);
    //Rounding up, and calculating the pages so if there are 64 students, there will be 7 pages
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
        //Makes the current page button start on 1
        link.textContent = currentPageNumber;
            //If the currentPageNumber is equal to 1...
            if (currentPageNumber == 1) {
                //The new link is active! Hooray!
                link.className = 'active';
            } 
        //Inspired by: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
        link.addEventListener('click', (e) => {
            //Makes the elements active
            const activeElements = document.getElementsByClassName('active');
            //This one little line had me puzzled for days! Makes just one button active at a time and loops through each in light speed!
            for (let i = 0; i < activeElements.length; i++) {
                activeElements[i].classList.remove('active');
            }
            //
            e.target.classList.add('active');
            //Loads page with specified items
            showPage(list, currentPageNumber);
        });
        const li = document.createElement('li');
        //Adding links to new li items and returns an li
        li.appendChild(link);
        return li;
    }
    //Loops through all the new links
    for (let i = 1; i <= totalPages; i++) {
        ul.appendChild(newLiLink(i));
    }
}
//Calling the showPage and appendPageLinks functions
showPage(listItems, 1);
appendPageLinks(listItems);
