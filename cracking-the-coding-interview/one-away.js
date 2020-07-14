function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;
  let canEdit = true;
  for (let i = 0; i < str1.length ; i++) {
    if (str1[i] !== str2[i]) {
      if (canEdit) {
        // if str2 is shorter, u can only insert (hence make the final one same length)
        if (str2.length > str1.length) {
          str2 = str2.slice(0, i) + str2.slice(i+1);
        // if str2 is longer, then can only remove (hence make the final one same length)
        } else if (str1.length > str2.length) {
            str2 = str2.slice(0, i) + 'a' + str2.slice(i);
        }
        // if same, can only replace
        canEdit = false;
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(oneAway('pale', 'paale'));