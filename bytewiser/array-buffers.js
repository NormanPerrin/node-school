var argInt = Number(process.argv[2]);

var uInt32Arr = new Uint32Array(1);
uInt32Arr[0] = argInt;
var uInt16Arr = new Uint16Array(uInt32Arr.buffer);

console.log(JSON.stringify(uInt16Arr));

