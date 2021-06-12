var mongoose = require('mongoose');
var express = require('express');

var StudentModel = require('./studentschema');
var router = express.Router();

// Connecting to database
var query = 'mongodb+srv://vinod:nodepass123$@cluster0.dagma.mongodb.net/College?retryWrites=true&w=majority'

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
	if (error) {
		console.log("Error!" + error);
	}
});

module.exports = router;

router.get('/save', function(req, res) {
    var newStudent = new StudentModel({StudentId:101, 
        Name:"Sam", Roll:1, Birthday:2001-09-08});

    newStudent.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});


router.post('/savea', function(req, res) {
    var newStudent = new StudentModel();
       newStudent.StudentId = req.body.StudentId;
       newStudent.Name = req.body.Name;
       newStudent.Roll = req.body.Roll;
       newStudent.Birthday = req.body.Birthday;
       
       newStudent.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });


    //find data

    router.get('/findall', function(req, res) {
        StudentModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });


     //

     router.get('/findfirst', function(req, res) {
        StudentModel.findOne({StudentId:{$gt:185}}, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
    });


    //delete


    router.get('/delete', function(req, res) {
        StudentModel.remove({StudentId:188}, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
    });

    //
    router.post('/delete', function(req, res) {
        StudentModel.findByIdAndDelete((req.body.id), 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        });  
    });

    //update

    router.post('/update', function(req, res) {
        StudentModel.findByIdAndUpdate(req.body.id, 
        {Name:req.body.Name}, function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });  
    });






