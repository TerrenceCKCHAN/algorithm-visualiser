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

function helper(array, auxArray, start, end, animations) {
  if (start === end) {
    return
  }
  const middle = Math.floor((start + end) / 2);
  helper(array, auxArray, start, middle, animations);
  helper(array, auxArray, middle + 1, end, animations);
  merge(array, start, middle, end, auxArray, animations);
}

export default function getAnimations(array) {
  // returns a list of animations from merge sort that we will use to animate our algorithm
  const animations = [];
  const auxArray = array.slice();
  helper(array, auxArray, 0, array.length - 1, animations);
  return animations;
}
