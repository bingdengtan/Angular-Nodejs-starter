var pageBean = require('../utils/pageBean')
var userService = require("../services/userService")

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
                    res.send({success: true, user: {displayname: results.username}})
                }else{
                    res.send({success: false})
                }
            }else{
                res.send({success: false})
            }
        }
    })  
}