// const fs = require('fs');
// const path = require('path');

// --------------------------------------------
// Fetch(s) Functions:
// --------------------------------------------

export const encodedFilter = (currentFilter) => encodeURIComponent(JSON.stringify(currentFilter))



// --------------------------------------------
// Data type(s) Functions:
// --------------------------------------------

export const checkFor = (obj) => {
  return (Object.values(obj).some((val) => !arrayIsEmpty(val)))
}

export const checkAll = (obj) => {
  return (Object.values(obj).every((val) => !arrayIsEmpty(val)))
}

// Data types: 
export const getTypeOf = x => typeof x;

// Change data type: 
export const makeString = x => x.toString(); //makes into string



// --------------------------------------------
// Objects:
// --------------------------------------------

// export const flattenObj = obj => Object.keys(obj).reduce((r,k) => r.concat(k, obj[k]))

export const flattenObj = (ob) => {
  
  // The object which contains the
  // final result
  let result = {};

  // loop through the object "ob"
  for (const i in ob) {

      // We check the type of the i using
      // typeof() function and recursively
      // call the function again
      if ((typeof ob[i]) === 'object') {
          const temp = flattenObj(ob[i]);
          for (const j in temp) {

              // Store temp in result
              result[i + '.' + j] = temp[j];
          }
      }

      // Else store ob[i] in result directly
      else {
          result[i] = ob[i];
      }
  }
  return result;
};

// --------------------------------------------
// NULL/undefined Functions:
// --------------------------------------------

export const isNil = val => val === undefined || val === null; // checks if value is null or undefined. 

export const isUndefined = val => val === undefined; // checks if value is undefined. 

export const isEmpty = val => val === undefined || val === null || val === ""; // checks if value is null or undefined. 


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

export const makeInt = x => x.parseToInt(); //parses string, returns integer

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

export const makeStringToChars = x => {   // makes string into chars
    if(typeof x !== String){
        return console.log(`${x} is not a string`);
    } 
    return [...x] 
};

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

// export const isOfType = (type, val) => ![ , null].includes(val) && val.constructor === type;  // return true if value is of the given type, as such: is(Array, [1,2,3])


// --------------------------------------------
// ARRAYS
// --------------------------------------------

export const countOccurances = (arr) => arr.reduce((acc, curr) => {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }
  return acc;
}, {})


// FINDS IN ARRAY: ----------------------------

export const arrayIsEmpty = arr => {
  return (arr === undefined || arr.length === 0) ? true : false;
}

export const findWithinAttr = (array, attr, value) => {
  for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
  }
  return -1;
} 


export const deepMapKeys = (obj, f) =>
Array.isArray(obj)
  ? obj.map(val => deepMapKeys(val, f))
  : typeof obj === 'object'
    ? Object.keys(obj).reduce((acc, current) => {
      const val = obj[current];
      acc[f(current)] =
          val !== null && typeof val === 'object' ? deepMapKeys(val, f) : (acc[f(current)] = val);
      return acc;
    }, {})
    : obj;
// creates new obj mapped to its keys, can use function to alter every in deep obj. Usage: const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());


export const uniqueInArray = arr => [...new Set(arr)];  // creates a set for every element only once! Returns an array with all of the values listed just once. 
// function onlyUnique(value, index, self) { 
//   return self.indexOf(value) === index;
// }

export const foundInArray = (arr1, arr2) => arr1.some(r=> arr2.indexOf(r) >= 0);  // compare 2 arrays, return true/false

// Call: findWithAttr(Data, 'name', 'John'); : returns 0
// const Data = [{id_list: 2, name: 'John', token: '123123'},...]

export const newArrayFromObject = (obj, key) => {
  let arr = [];
  obj.map( (i) => 
    arr.push(i.key)
  )
  return arr;
}

// HANDLE ARRAY ------------------------------

export const getArrayDepth = (value) => {
  return Array.isArray(value) ? 
    1 + Math.max(...value.map(getArrayDepth)) :
    0;
}

export const flattenFullyArray = arr => arr.concat(...arr.map(val => (Array.isArray(val) ? flattenFullyArray(val) : val)));  // joins array values into one flat array that calls itself if any of its values are embedded arrays that also needed flattening. 

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

export const flattenByDepthArray = (arr, depth=1) =>
    arr.reduce((acc, val) => 
        acc.concat(depth > 1 && Array.isArray(val) 
            ? flattenByDepthArray(val, depth - 1) 
            : val), []);  // flattens array recursively by desired depth



// STYLE EDITS -------------------------------


export const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// export const printHexToRgba = (hex,a) => {
//   var bigint = parseInt(hex, 16);
//   var r = (bigint >> 16) & 255;
//   var g = (bigint >> 8) & 255;
//   var b = bigint & 255;
//   var a = a
//   return r + "," + g + "," + b + "," + a;
// }

export const printRgba = (rgba) => {
  return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`; 
}

export const hexToRgba = (hex, a) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: a
  } : null;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
export const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const convertCamelCase = (s) => s.replace(/([A-Z])/g, ' $1').trim();

export const convertFromCamelCase = (s) => s
// insert a space before all caps
.replace(/([A-Z])/g, ' $1')
// uppercase the first character
.replace(/^./, function(str){ return str.toUpperCase(); })

// FINDS IN OBJ: ----------------------------

// Check if object has any keys:
export const objectHasKeys = obj => { return Object.keys(obj).length === 0}

// Check if object has any keys:
export const isObject = obj => { return typeof obj === 'object' && obj !== null }

// check is object is empty:
export const isObjEmpty = obj => {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

export const sortBy = (array, firstProperty, ) => array.sort((a, b) => (a[firstProperty] > b[firstProperty]) ? 1 : -1)

// export const sortByTwo = (array, firstProperty, ) => array.sort((a, b) => (a[firstProperty] > b[firstProperty]) ? 1 : (a[firstProperty] === b[firstProperty]) ? ((a[secondProperty] > b[secondProperty]) ? 1 : -1) : -1 )

export const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};


// Object.keys(state).forEach( key => {
//   console.log(`${key} : ${state[key]}`);
// })
// Object.values(state).forEach( value => {
//   console.log(`${value}`);
// })
// Object.entries(state).forEach( ([key, value], i) => {
//   console.log(`${key} : ${value}`);
// })


// Compare Arrays/Objects:
export const isEqual = (value, other) => {

	// Get the value type
	let type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	let valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	let otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	let compare = function (item1, item2) {

		// Get the object type
		let itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!isEqual(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {

			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}

		}
	};

	// Compare properties
	if (type === '[object Array]') {
		for (let i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (let key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;

};


