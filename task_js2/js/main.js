function myLog(msg)
{
	document.write("<br>");
	document.write(msg);
	console.log(msg);
}


function isEven(value)
{
	if(!Number.isInteger(value))
	{
		throw "Not integer";
	}

	if(Math.abs(value) > 100)
	{
		throw "Recursion too deep is forbidden";
	}
	
	if (value === 0)
	{
		return true;
	}
	if (value === 1)
	{
		return false;
	}
	
	return isEven(value > 0 ? value - 2 : value + 2 );
}

function isEvenTest()
{
	myLog(`--------------------isEvenTest----------------------`);
	
	
	let array_values = [50, 75, -1, 'test', 5.5, 101];  
	
	for (let value of array_values) 
	{
		try 
		{
			res = isEven(value);
			myLog(`Value: \'${value}\' ` + (res ? `чётное` : `нечётное`));

		} 
		catch (err) 
		{
			myLog(`Value: \'${value}\' - ${err}`);
		}

	}

	
}


function countChar(str, chr)
{
	if (typeof str === 'string') 
	{
		let count = 0;
		for (var i = 0; i < str.length; i++) 
		{
			if (str.charAt(i) === chr)
			{
				count++;
			}
		}
		return count;
	}
	else
	{
		throw "Value not String";
	}
}



const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function countCharTest()
{
	myLog(`--------------------countCharTest----------------------`);
	
	
	let array_values = [generateString(100), generateString(100), generateString(100), 12345];  
	
	for (let value of array_values) 
	{
		try 
		{
		
			chr = generateString(1);
			res = countChar(value, chr);
			myLog(`str: \'${value}\', chr: \'${chr}\'  count=${res}`);

		} 
		catch (err) 
		{
			myLog(`Value: \'${value}\' - ${err}`);
		}

	}
}


function getRange(start, end)
{
	if(!Number.isInteger(start))
	{
		throw "start param not integer";
	}

	if(!Number.isInteger(end))
	{
		throw "end param not integer";
	}

	if(end < start)
	{
		throw "end < start";
	}


	var list = [];
	for (var i = start; i <= end; i++) 
	{
		list.push(i);
	}
	return list;
}

function getRangeCount(values)
{
	let count = 0;
    for ( let i = 0; i < values.length; i++ ) {
        count += values[i];
	}
	return count;
}
function getRangeTest()
{
	myLog(`--------------------getRangeTest----------------------`);
	let array_values = [[1, 10], [10, 9], [9, 9]];  
	
	for (let value of array_values) 
	{
		try 
		{
		
			
			res = getRange(value[0], value[1]);
			resCount = getRangeCount(res);
			myLog(`array = ${res}; count = ${resCount}`);

		} 
		catch (err) 
		{
			myLog(`for ${value} ${err}`);
		}

	}
}

function reverseArray(values) 
{
	if( !Array.isArray(values))
	{
		throw "Not Array";
	}

	let list = [];

	for (var i = values.length - 1; i >= 0; i--) 
	{
		list.push(values[i]);
	}
	return list;

}
function reverseArrayInPlace(values)
{
	if( !Array.isArray(values))
	{
		throw "Not Array";
	}

	let length = values.length;
	if(length === 0 || length === 1)
	{
		return;
	} 
	let start = 0;
	let end = length - 1;

	while (start < end)
	{
		t = values[start];
		values[start] = values[end];
		values[end] = t;

		start++;
		end--;
	}
	
}

function timeForReversTests()
{
	let list =  getRange(0, 1000000);

	let t0 = performance.now()
	res = reverseArray(list)
	let t1 = performance.now()

	let basereverseTime = t1 - t0;


	t0 = performance.now()
	res = reverseArrayInPlace(list)
	t1 = performance.now()

	let inPlaceReverseTime = t1 - t0;


	myLog("Call to reverseArray(1 million elements) took " + basereverseTime + " milliseconds");
	myLog("Call to reverseArrayInPlace(1 million elements) took " + inPlaceReverseTime + " milliseconds");


}

function reversTests()
{
	myLog(`--------------------reversTests----------------------`);
	let array_values = [getRange(0, 7), getRange(0, 8)];  
	
	for (let value of array_values) 
	{
		try 
		{
		
			
			res = reverseArray(value)
			myLog(`reverse base original = ${value}; reversed = ${res}`);

			reverseArrayInPlace(value)
			myLog(`reverse inplace ${value}`);

		} 
		catch (err) 
		{
			myLog(`for ${value} ${err}`);
		}

	}

	timeForReversTests();
}

function nth(list, n)
{
	if(n === 0)
	{
		return list;
	}
	else 
	{	if(list.next === undefined)
		{
			return undefined;
		}
		else{
			return nth(list.next, n - 1);
		}
	}
}

function prepend(e, list)
{ 
	let newList = {value: e, next: list};
	return newList;
}

function arrayToList(values)
{
	let list = undefined
	for (let i = values.length - 1; i >= 0; i--) 
	{
		list  = prepend(values[i], list)
	}
	return list;
}

function  listToArray(list)
{
	let array = [];
	let i = 0;
	do
	{
		e = nth(list, i);
		if( e != undefined)
		{
			array.push(e.value);
			i++;
		} 
		
	} while(e != undefined)
	
	return array;
}

function arrayToListTest()
{
	myLog(`--------------------arrayToListTest----------------------`);

	let array_values = getRange(0, 3);
	res = arrayToList(array_values);
	let listStr = JSON.stringify(res, null, 2);
	myLog(`array to list ${listStr}`);


	res  = listToArray(res);
	myLog(`list to array ${res}`);
}

function deepEqual(e1, e2)
{
	if(e1 ===e2)
	{
		return true;
	}

	if( e1 == null || e2 == null || 
		typeof e1 != 'object' || typeof e2 != 'object')
	{
		return false;
	}

	let e1Keys = Object.keys(e1);
	let e2Keys = Object.keys(e2);

	if(e1Keys.length != e2Keys.length)
	{
		return false;
	}

	for(let key of e1Keys)
	{
		if(!e2Keys.includes(key) || !deepEqual(e1[key], e2[key]))
		{
			return false;
		}
	}

	return true;
}



function testDeepEqual()
{
	myLog(`--------------------testDeepEqual----------------------`);
	let array_values = [
		[1, 1],
		[1, 2],
		[1, null],
		[{ 	value: 1,
			properties: {
				prop1: true,
				prop2: 'test'
			}
		},
		{ 	value: 1,
			properties: {
				prop1: true,
				prop2: 'test'
			}
		}], 
		[{ 	value: 1,
			properties: {
				prop1: true,
				prop2: 'test'
			}
		},
		{ 	value: 1,
			properties: {
				prop1: true,
				prop2: 'test error'
			}
		}]
	
	];  
	
	for (let value of array_values) 
	{
		res = deepEqual(value[0], value[1]);
		myLog((res ? "Equal": "notEqual"));
	}
}

function startTests()
{
	isEvenTest();
	countCharTest();
	getRangeTest();
	reversTests();
	arrayToListTest();
	testDeepEqual();
	myLog(`-------------goodbye--------------`);
}

