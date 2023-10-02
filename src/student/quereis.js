const getStudents = "SELECT * FROM student";
const getStudentById = "SELECT * FROM student WHERE id = $1";
const checkEmailExits = "SELECT s FROM student s WHERE s.email = $1";
const addStudents = "INSERT INTO student (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const removeStudents = "DELETE FROM student WHERE id = $1";

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExits,
    addStudents,
    removeStudents
}