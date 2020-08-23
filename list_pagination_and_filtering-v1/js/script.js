/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//Get all students
const studentList = document.querySelector('.student-item cf');
//Show only 10 students per page
const studentsPerPage = 10;

/**
 * Function to show as many items on the page as declared in 'itemsPerPage'
 * @param students - All students in the ul
 * @param page -  page to show
 */

function showPage(students, page) {
    const startIndex = (page * studentsPerPage) - studentsPerPage
    const endIndex = page * studentsPerPage;
    //loops over each student, and hides those that aren't needed
    for(let i = 0; i < students.length; i++) {
        if(i > startIndex && i<endIndex) {
            //show students
            items[i].style.display = '';
        }
        //hide students
        } or 
            items[i].style.display = 'none';
    }

/**
 * creates page buttons on the bottom of the page with click listener to change pages
 * @param studentList - All students in the ul
 */

const appendPageLinks = (studentList) => {
    const pageTotal = math.floor (studentList.length / studentsPerPage);
    const divPage = document.querySelector('.page');
    divPage.appendChild(div);
    const div = document.createElement('div');
    div.className = 'pagination';
    const ul = document.createElement('ul');
    div.appendChild(ul);
}


// Remember to delete the comments that came with this file, and replace them with your own code comments