document.getElementById('heading').addEventListener('click',function websitename(){
    alert("This is our Site name😊")
});

function toggleCourses(){
    const courseContent = document.getElementById("courseContent");
    courseContent.classList.toggle("visible");
    courseContent.classList.toggle("hidden");
}

function toggleBusiness(){
    const businessContent = document.getElementById("businessContent");
    businessContent.classList.toggle("visible");
    businessContent.classList.toggle("hidden");
}

function toggleCodingcourse(){
    const codingcourseContent = document.getElementById("codingcourseContent");
    codingcourseContent.classList.toggle("visible");
    codingcourseContent.classList.toggle("hidden");
}

function toggleScienceandresearch(){
    const scienceandResearchcontent = document.getElementById("scienceandResearchcontent");
    scienceandResearchcontent.classList.toggle("visible");
    scienceandResearchcontent.classList.toggle("hidden");
}

function toggleLanguageandcommunication(){
    var languageandCommunicationcontent = document.getElementById("languageandCommunicationcontent");
    languageandCommunicationcontent.classList.toggle("visible");
    languageandCommunicationcontent.classList.toggle("hidden");
}