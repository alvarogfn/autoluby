function replicateThings(counter, thing) {
  let replicatedThings = [];
  for (let index = 1; index <= counter; index++) {
    replicatedThings.push(thing);
  }
  return replicatedThings;
}

function mirrorArray(array) {
  return array.map((v, i) => array[(array.length - 1) - i]);
}

function cleanArray(array) {
  return array.filter((v) => !!v !== false);
}

function objectCreatorFromArray(array) {
  let object = {};
  array.forEach((v) => {
    object[v[0]] = v[1];
  });
  return object;
}

function removeArrayValues(array, ...valuesToBeRemoved) {
  for (index in valuesToBeRemoved) {
    let value = valuesToBeRemoved[index];
    while (array.indexOf(value) !== -1) {
      array.splice(array.indexOf(value), 1);
    }
  }
  return array;
}

function removeDuplicateItems(array) {
  return [...new Set(array)];
}

function igualityArrayTest(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (index in array1) {
    if (array1[index] !== array2[index]) return false;
  }

  return true;
}

function removeArrayNesting(array) {
  for (let index in array) {
    if (Array.isArray(array[index])) {
      array.splice(index, 1, ...array[index]);
      return removeArrayNesting(array);
    }
  }
  return array;
}

function sliceBySize(array, size) {
  let slicedArray = [];
  while (array.length) {
    let slicedPart = array.splice(0, size);
    slicedArray.push(slicedPart);
  }

  return slicedArray;
}

function getReplicatedValuesBetweenArrays(array1, array2) {
  let equalValues = [];

  for (value in array1) {
    let elementIndex = array2.indexOf(array1[value]);
    if (elementIndex !== -1) {
      equalValues.push(array2[elementIndex]);
    }
  }
  return [...new Set(equalValues)];
}
