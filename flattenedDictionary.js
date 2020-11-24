//return a flatted dictionary where each key represents the keys to reach a value

//iterate through each key through recursion
//base case: the value is not an object, return that as the key
//otherwise call our function and pass in the value (which is a dictionary)

function flattenDictionary(dict) {
  let output = {};

  function _flattenDictionary(val, currKey){
    if (val !== 'object'){
      output.currKey = dict[val];
    }
    else {
      _flattenDictionary(dict[val], `${currKey}.${val}`)
    }
	}
	
  for (let val in dict){
    _flattenDictionary(val, `${val}`)
  }
  return output;
}

/*There solution*/

function flattenDictionary(dict):
    flatDictionary = {}
    flattenDictionaryHelper("", dict, flatDictionary)

    return flatDictionary


function flattenDictionaryHelper(initialKey, dict, flatDictionary):
    for (key : dict.keyset()):
        value = dict.get(key)

        if (!isDictionary(value)): # the value is of a primitive type
            if (initialKey == null || initialKey == ""):
                flatDictionary.put(key, value)
            else:
                flatDictionary.put(initialKey + "." + key, value)
        else:
            if (initialKey == null || initialKey == "")
                flattenDictionaryHelper(key, value, flatDictionary)
            else:
                flattenDictionaryHelper(initialKey + "." + key, value, flatDictionary)


// Flatten a Dictionary
// A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise assume that values are either an integer, a string or another dictionary.

// Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

// If you’re using a compiled language such Java, C++, C#, Swift and Go, you may want to use a Map/Dictionary/Hash Table that maps strings (keys) to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.

// If a certain key is empty, it should be excluded from the output (see e in the example below).

// Example:

// input:  dict = {
//             "Key1" : "1",
//             "Key2" : {
//                 "a" : "2",
//                 "b" : "3",
//                 "c" : {
//                     "d" : "3",
//                     "e" : {
//                         "" : "1"
//                     }
//                 }
//             }
//         }

// output: {
//             "Key1" : "1",
//             "Key2.a" : "2",
//             "Key2.b" : "3",
//             "Key2.c.d" : "3",
//             "Key2.c.e" : "1"
//         }
// Important: when you concatenate keys, make sure to add the dot character between them. For instance concatenating Key2, c and d the result key would be Key2.c.d.

// Constraints:

// [time limit] 5000ms
// [input] Dictionary dict
// [output] Dictionary