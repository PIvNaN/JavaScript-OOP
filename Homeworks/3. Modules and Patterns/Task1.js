function solve() {

    var Course = {
        init: function (title, presentations) {

            if (presentations.length < 1) {
                throw Error('There are no presentations');
            }

            function validateTitle(title) {
                if (title.length < 1) {
                    throw Error('Titles have at least one character');
                }
                if (/^\s{1,}/.test(title)) {
                    throw Error('Titles do not start with spaces');
                }
                if (/\s{1,}$/.test(title)) {
                    throw Error('Titles do not start or end with spaces');
                }
                if (/\s{2,}/.test(title)) {
                    throw Error('Titles do not have consecutive spaces');
                }
            }

            validateTitle(title);

            for (let presentationTitle of presentations) {
                validateTitle(presentationTitle);
            }

            this.students = [];
            this.homeworks = [];

            let presentation = {};

            for (let i = 0; i < presentations.length; i += 1) {
                presentation.id = i + 1;
                presentation.title = presentations[i];
                this.homeworks.push(presentation);
            }

            return this;
        },

        addStudent: function (name) {
            let nameParts = name.split(' ');

            if (nameParts.length === 1 || nameParts.length > 2) {
                throw Error('Invalid name');
            }

            nameParts.forEach(function (name) {
                if (!name.match(/^[A-Z][a-z]*$/)) {
                    throw Error('Invalid name');
                }
            });

            let student = {};
            student.id = this.students.length + 1;
            student.firstname = nameParts[0];
            student.lastname = nameParts[1];

            this.students.push(student);
            return student.id;
        },

        getAllStudents: function () {
            return this.students;
        },

        submitHomework: function (studentID, homeworkID) {

            if (!this.students.some(student => student.id === studentID)) {
                throw Error('Invalid StudentID');
            }

            if (!this.homeworks.some(homework => homework.id === homeworkID)) {
                throw Error('Invalid HomeworkID');
            }

        },

        pushExamResults: function (results) {
            if (results === 'undefined') {
                throw Error('No arguments given');
            }
            if (!Array.isArray(results)) {
                throw Error('Given string, not array as parameter');
            }
            if (results.some(x => Number.isNaN(Number(x.score)))) {
                throw Error('Score is not a Number');
            }

            let firstStudent = results[0].StudentID;
            for (let i = 1; i < results.length; i += 1) {
                if (firstStudent === results[i].StudentID) {
                    throw Error('Same student twice');
                }
            }

            for (let i = 0; i < results.length; i += 1) {
                if (results[i].StudentID < this.students[0].id) {
                    throw Error(`Id < first student's number`);
                }
            }

            results.forEach(function (result) {
                if (Number.isNaN(Number(result.StudentID))) {
                    throw Error('Id is not a number');
                }
            });

            let studentsNumber = this.students.length;
            results.forEach(function (result) {
                if (result.StudentID > studentsNumber) {
                    throw Error('Id > students number');
                }
            });
        },

        getTopStudents: function () {
        }
    };

    return Course;
}