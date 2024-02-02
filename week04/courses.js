const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A",
        },
    ],
    enrollStudent(section) {
        let index = this.sections.findIndex((sectionEntry) => sectionEntry.sectionNum == section);

        if (index >= 0) {
            this.sections[index].enrolled++;
            renderSections(this.sections);
        }
    },
    dropStudent(section) {
        let index = this.sections.findIndex((sectionEntry) => sectionEntry.sectionNum == section);

        if (index >= 0) {
            this.sections[index].enrolled--;
            renderSections(this.sections);
        }
    },

};


document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum)
});

document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;

    aCourse.dropStudent(sectionNum)
});


function setNameAndNumber(aCourse) {
    document.querySelector("#courseName").textContent = aCourse.name;
    document.querySelector("#courseCode").textContent = aCourse.code;
}

function renderSections(sections) {
    let tbody = document.querySelector("#sections");
    let output = ``;
    for (let sectionEntry of sections) {
        output += `<tr>
        <td>${sectionEntry.sectionNum}</td>
        <td>${sectionEntry.roomNum}</td>
        <td>${sectionEntry.enrolled}</td>
        <td>${sectionEntry.days}</td>
        <td>${sectionEntry.instructor}</td>
        </tr>`;
    }
    tbody.innerHTML = (output);
    
}

setNameAndNumber(aCourse);
renderSections(aCourse.sections);
