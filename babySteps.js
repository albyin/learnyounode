var sum = 0;

for (var i = 2; i < process.argv.length; i++){
	//sum += Number(process.argv[i]);
	//prefixing the property with + casts it to Number, same as Number()
	sum += +process.argv[i];
}

console.log(sum);