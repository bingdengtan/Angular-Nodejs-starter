var User = require('../models/user')
var dbHelper = require('../utils/dbHelper')

exports.list = function(query, pager, callback){
    var aggregate = [];
    return dbHelper.pageAggregateQuery(pager.pageNumber, pager.pageSize, User, aggregate, query, pager.sort, callback)
}

exports.create = function(req, res){
    
}

exports.getById = function(id, callback){
    return User
        .findOne({_id: id})
        .exec(callback)
}

exports.getUserByName = function(username, callback){
    return User
        .findOne({username: {'$regex':'^'+username+'$','$options':'i'}})
        .exec(callback)
}

exports.update = function(req, res){
    
}

exports.delete = function(req, res){
    
}