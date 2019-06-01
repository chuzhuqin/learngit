module.exports = function main(num) {
	string1 = '._....._.._....._.._.._.._.._.';
	string2 = '|.|..|._|._||_||_.|_...||_||_|';
	string3 = '|_|..||_.._|..|._||_|..||_|..|';
	var stringarr1 = new Array();
	var stringarr2 = new Array();
	var stringarr3 = new Array();
	//console.log(num.length);
	
	for (var i=0;  i<num.length; ++i) {
		stringarr1.push(string1.substr(eval(num[i])*3, 3));
		stringarr2.push(string2.substr(eval(num[i])*3, 3));
		stringarr3.push(string3.substr(eval(num[i])*3, 3));
	}

	var s1 = stringarr1.join(" ");
	var s2 = stringarr2.join(" ");
	var s3 = stringarr3.join(" ");
	var stringarr = new Array();
	stringarr.push(s1);
	stringarr.push(s2);
	stringarr.push(s3);
	var temp = stringarr.join("\n");
	temp = temp + '\n';
    return temp;
};