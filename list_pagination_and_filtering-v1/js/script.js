/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//Get all students
const studentList = document.querySelector('.student-item cf');

//Get only student names
const studentName = document.getElementsByTagName('h3');

//Show only 10 students per page
const itemsPerPage = 10;

//The current page you're on 
const presentPage = 1;

//Shows correct page of students
//Inspired by https://codepen.io/karpovsystems/pen/fFHxK
function showPage(page, list) {
   const listLength = list.length;

   //to loop over each item and hide items not requested
   for (let i = 0; i < listLength; i++) {
      list[i].style.display = '';
   } else {
      list[i].style.display = 'none';
   }

   const startIndex = page * rowsPerPage;
   const endIndex = startIndex + rowsPerPage;

   for (let i = startIndex; i < endIndex; i++) {
      if(students[i]) {
         students[i].style.display = "block";
      }
   }
}

// inspired by Tania Rascia's blog: https://www.taniarascia.com/how-to-paginate-an-array-in-javascript/
const previous = document.getElementById('previous');
const forward = document.getElementById('forward');

//allows you to go back a page
function prev (present, pages) {
   let index = pages.indexOf(present);
   if (index === 0) {
      return pages[pages.length - 1]
   }
   return pages [index - 1]
}

//allows you to go forward a page
function next (present, pages) {
   let index = pages.indexOf(present);
   if (index === pages.length - 1) {
      return pages [0];
   }
   return pages[index + 1]
}


// Remember to delete the comments that came with this file, and replace them with your own code comments.