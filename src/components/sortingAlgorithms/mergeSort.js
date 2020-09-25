function helper(auxArray) {
  // TODO Implement merge sort here
  console.log(auxArray);
  return -1;
}

function merge(array, start, middle, end, auxArray, animations) {
  let i = start;
  let j = middle + 1;
  let x = start;

  while (i <= middle && j <= end) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxArray[i] <= auxArray[j]) {
      animations.push([x, auxArray[i]]);
      array[x] = auxArray[i];
      i += 1;
      x += 1;
    } else {
      animations.push([x, auxArray[j]]);
      array[x] = auxArray[j];
      j += 1;
      x += 1;
    }
  }

  while (i <= middle) {
    animations.push([i, i]);
    array[x] = auxArray[i];
    i += 1;
    x += 1;
  }

  while (j <= end) {
    animations.push([j, j]);
    array[x] = auxArray[j];
    j += 1;
    x += 1;
  }
}

export default function getAnimations(array) {
  // returns a list of animations from merge sort that we will use to animate our algorithm
  const animations = [];
  const auxArray = array.slice();
  // TODO Implement helper to sort array using merge sort
  helper(auxArray);
  return animations;
}
