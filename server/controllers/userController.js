var pageBean = require('../utils/pageBean')

var userService = require("../services/userService")
var emailService = require("../services/emailService")

exports.list = function(req, res, next){
    let query = req.body.query;
    let pager = pageBean.pagerFromRequest(req);  
    userService.list(query, pager, function(err, results){
        if(err){
            console.log(err)
        }else{
            res.send(results)
        }
    })
}

exports.create = function(req, res){
    let user = {
        username: req.body.username,
        password: req.body.password,
        location: req.body.location,
        email: req.body.email
    }

    userService.create(user, function(err, results){
        if(err){
            res.send({success: false})
        }else{
            var subject = "New account created for you to access application"
            var body = "User Name: <b>" + user.username + "</b>";
            var body = body + "<br>" + "Password: <b>" + user.password + "</b>";
            emailService.sendEmail(user.username, user.email, subject, body);
            res.send({success: true})
        }
    })  
}

exports.get = function(req, res){
    
}

exports.update = function(req, res){
    
}

exports.delete = function(req, res){
    
}

exports.validate = function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    userService.getUserByName(username, function(err, results){
        if(err){
            console.log(err)
        }else{
            if(results){
                if(results.password==password){
                    res.send({success: true, user: {displayname: results.username, mail: results.email, location: results.location}})
                }else{
                    res.send({success: false})
                }
            }else{
                res.send({success: false})
            }
        }
    })  
}