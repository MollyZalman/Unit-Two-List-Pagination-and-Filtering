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
         if (i >= page*10-10 && i < page*10) {
            list[i].style.display = '';
         } else {
            list[i].style.display = 'none';
         }
      }

//Searchbar function and adding functionality
function studentSearch = (list) => {
   const divPageHeader = document.querySelector('div.page-header');
   const div = document.createElement('div');
   //Inspired by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add#:~:text=The%20add()%20method%20appends,end%20of%20a%20Set%20object.
   div.classList.add('student-search');
   pageDivHeader.appendChild(div);
   const input = document.createElement('input');
   const button = document.createElement("BUTTON");
   button.innerHTML = "Let's go!";
   div.append(input, button);
}

// inspired by Tania Rascia's blog: https://www.taniarascia.com/how-to-paginate-an-array-in-javascript/
//allows you to go back a page
function prev (present, pages) {
   let index = pages.indexOf(present);
   if (index === 0) {
      return pages[pages.length - 1]
   }
   return pages [index - 1] 
}
   document.getElementById('prev').addEventListener('click', () => {
      pages.back();
   });  

//allows you to go forward a page
function next (presentPage, pages) {
   let index = pages.indexOf(presentPage);
   if (index === pages.length - 1) {
      return pages [0];
   }
   return pages[index + 1]
}
document.getElementById('next').addEventListener('click', () => {
   pages.forward();
});  

   const startIndex = page * rowsPerPage;
   const endIndex = startIndex + rowsPerPage;

   for (let i = startIndex; i < endIndex; i++) {
      if(students[i]) {
         students[i].style.display = "block";
      }
   }
}

//appends and creates functionality for the pagination links at the bottom of the page
function appendPageLinks = (list) => {
   const divDetails = document.querySelector('.page');
   const newDiv = document.createElement('div');
   newDiv.className = 'pagination';
   divDetails.appendChild(pagination);
   const newUl = document.createElement('ul');
   pagination.appendChild(newUl);
   const amountOfPages = Math.ceil(listLength / itemsPerPage);

   //New li button
   //Inspired by https://www.w3schools.com/jsref/met_element_setattribute.asp
   function newLiLink(pageNumber)
   //SOMETHING IS WRONG HERE ON LINE 98
   newLiLink = document.createElement('a');
   link.setAttribute('href', '#');
   link.textContent = pageNumber;
      if(pageNumber === 1) {
         link.className = 'active';
   }
   ul.appendChild(li);
   ul.appendChild(a);
   link.push(li)
}

// Remember to delete the comments that came with this file, and replace them with your own code comments