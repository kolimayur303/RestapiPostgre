const pool = require('../db');
const queries = require('./quereis')

const getStudent = (req, res) => {
    pool.query(queries.getStudents, (err, results)=> {
        if(err){
            res.status(400).json({status:400,msg:'Error',data:err.toString()});
        }else{
            res.status(200).json(results.rows);
        }
    });
}

const getStudentById = (req, res) => {
const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (err, results)=> {
        if(err){
            res.status(400).json({status:400,msg:'Error',data:err.toString()});
        }else{
            res.status(200).json(results.rows);
        }
    });
}

const addStudent = (req, res) => {
    const student = req.body;
    const studentData = [student.name,student.email,student.age,student.dob];
    //check email if exists
    pool.query(queries.checkEmailExits, [req.body.email], (error, results) => {
        if(results.rows.length){
            res.status(200).send("email already exits.");
            return;
        }
        //add student to db
        pool.query(queries.addStudents,studentData,(error, results) => {
                if(error) throw error;
                res.status(200).send("Student data added successfully.");
        });
    });
}

const removeStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (err, results)=> {
        if(!results.rows.length){
            res.status(404).json({ err }).send("Student does not exits in the database");
        }
        pool.query(queries.removeStudents, [id], (error, results)=> {
            if(error){
                res.status(404).json({ error });
            }else{
                res.status(200).send("Student removed successfully.")
            }
        })
    });
}


module.exports = {
    getStudent,
    getStudentById,
    addStudent,
    removeStudentById
}