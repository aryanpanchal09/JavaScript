function findDuplicates(arr) {
  const duplicates = [];
  const seen = {};

  for (const item of arr) {
    if (seen[item]) {
      if (!duplicates.includes(item)) {
        duplicates.push(item);
      }
    } else {
      seen[item] = true;
    }
  }

  return duplicates;
}

// Explanation: We use an object 'seen' to track elements we've encountered.
// If we see an element already in 'seen', we add it to duplicates array.
// The includes() check ensures we don't add the same duplicate multiple times.

/*
function findDuplicates(array):
    create empty list called duplicates
    create empty set or dictionary called seen

    for each item in array:
        if item is in seen:
            if item is not in duplicates:
                add item to duplicates
        else:
            add item to seen

    return duplicates
*/
