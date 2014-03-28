var globals = {}

exports.globalSet = function(key, val){
	this.globals[key] = val;
}

exports.globalGet = function(key, val){
	return this.globals[key];
}

exports.globals = globals;