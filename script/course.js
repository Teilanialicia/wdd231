const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



newCourseCard(courses);

// variables for filter function

const allBttn = document.getElementById("all");
const wddBttn = document.getElementById("wdd");
const cseBttn = document.getElementById("cse");

// filtering the array to get only the Wdd and Cse classes into variables
let wddFilter = courses.filter(getWddCourses);
let cseFilter = courses.filter(getCseCourses);

let counter = 0;

// adding event listening so that somehting happens when you hit the buttons.
allBttn.addEventListener("click", function(){
    newCourseCard(courses);
    counter++;

    if (counter === 5)
    {
        document.getElementById("header-img").style.width = '3060px'
        document.getElementById("header-img").src = 'https://i.pinimg.com/564x/19/0c/94/190c940175aa52442fd74f3bd35519f1.jpg'
    }
    else if (counter > 5)
    {
        document.getElementById("header-img").style.width = '80px'
        document.getElementById("header-img").src = 'https://www.operationkindness.org/wp-content/uploads/blog-kitten-nursery-operation-kindness.jpg'
        counter = 0
    }
});

// remember! you are running the newCourseCard on the variable that is holding the result from running the filter method 
wddBttn.addEventListener("click", function(){
    newCourseCard(wddFilter);
});

// 
cseBttn.addEventListener("click", function(){
    newCourseCard(cseFilter);
});


// -----------------------------------------------------------------------------------------------------------------------------

// FILTER functions to use in the filter method.
function getWddCourses(course){
    return course.subject === 'WDD'
};

function getCseCourses(course){
    return course.subject === 'CSE'
};


function newCourseCard(courses) {

    // we need to set the innerHTML to "" to make sure it is empty every time we run the newCourseCard function, otherwise it will keep adding to what is already there.
    document.getElementById("course-grid").innerHTML = ""
    
    // for each course in the array courses, => (do this) which in this case is create a course card
    //   variables that are plural usually means it is an array 
    // the course is a new variable being created in the forEach loop. 
    courses.forEach(course => {
        let rectangle = document.createElement("p");
        
        // we do not reference the whole Array, but instead a specific item in an Array, 
        // because the array doesnt have access to the information inside the item
        rectangle.textContent = course.subject + course.number
        
        // the course is completed, so give it a course-complete class
        if (course.completed) {
            rectangle.setAttribute('class', 'course-complete');
        }
        // the course is not completed, so give it a course-incomplete class
        else
        {
            rectangle.setAttribute('class', 'course-incomplete');
        }

        // once the P tag is created now you need to attach it somewhere in the document so you can actually see it. 
        document.getElementById("course-grid").appendChild(rectangle) 
        // document.querySelector(".image-grid").appendChild(card);

    
    });


};

// document.body.style.backgroundColor = "#A9A9A9";

// Dynamically display all the courses in the certificate section as shown in the example above. 
// The courses that you have completed must be marked in a different way versus those that you have not completed. 
// Use your page color scheme. The page should adjust automatically if the data source changes.

