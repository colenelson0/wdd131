// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
      { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
    ],
    enrollStudent: function(sectionNum) {
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
      }
    },
    dropStudent: function(sectionNum) {
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled--;
        renderSections(this.sections);
      }
    }
  };

function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  courseName.textContent = course.name;
  const courseCode = document.querySelector("#courseCode");
  courseCode.textContent = course.code;
}

function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  const sectionsElement = document.querySelector("#sections")
  sectionsElement.innerHTML = html.join("");
}

const enrollButton = document.querySelector("#enrollStudent")
enrollButton.addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});

const dropButton = document.querySelector("#dropStudent")
dropButton.addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.dropStudent(sectionNum);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);