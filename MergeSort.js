// Merge Sort Algorithm

function mergeSort(arrOfItems) {
  // The final result to be returend at end
  let result = [];
  // split the input array into an array with arrays of 1 item.
  const arrays = arrOfItems.map(el => [el]);
  console.log('The arrays array after map is ', arrays);
  // holidng array for while loop
  let tempArray = [];

  while(arrays.length > 0)
  {
    let arr1 = arrays.shift();
    let arr2 = arrays.shift();
    console.log('arr1 & arr2 are :', arr1, arr2, ' respectively');
    tempArray = tempArray.concat(merge(arr1, arr2));
    console.log('The tempArray is ', tempArray);

    while(tempArray.length > 0)
    {
      let arr1 = tempArray.shift();
      let arr2 = tempArray.shift();
      result = result.concat(merge(arr1, arr2));
    }
  }
  console.log(result);
}

// Helper Function for merging arrays back together
function merge(arr1, arr2){
  // result to be returned once merging is completed
  let result = [];

  //setting up arrays from input that can be shifted.
  const a = Array.from(arr1);
  const b = Array.from(arr2);
  console.log('a & b from merge are :', a, b, ' respectively');

  while(a.length > 0 && b.length > 0)
  {
    if(b[0] < a[0])
    {
      result.push(b.shift());
      console.log('Does b evaluate & show that the result is ', result);
    }
    else {
      result.push(a.shift());
      console.log('Does a evaluate & show that the result is ', result);

    }
  }
  if(a.length > 0)
  {
    result.push(a[0]);
    console.log('Does a push', result);
  }
  if(b.length > 0)
  {
    result.push(b[0]);
    console.log('Does b push', result);
  }
  return result;
}
const myArray = [3,1,2,4];
mergeSort(myArray);
