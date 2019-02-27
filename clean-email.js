/**
 * @param {string[]} emails
 * @return {number}
 */

var cleanEmail = email => {
  const overall = email.split('@');
  const domainName = overall[1];
  let localName = overall[0];
  let finalName = '';

  for (let i = 0; i < localName.length; i++) {
    if (localName[i] === '+') {
      break;
    } else if (localName[i] === '.') {
      continue;
    }
    finalName += localName[i];
  }
  return finalName + domainName;
  // return email.split('@')[0].split('+')[0].split('.').join('') + email.split('@')[1];
};

var numUniqueEmails = function(emails) {
  let count = 0;
  emails.reduce((map, email) => {
    let cleanedEmail = cleanEmail(email);
    if (!map[cleanedEmail]) {
      map[cleanedEmail] = true;
      count++;
    }
    return map;
  }, {});
  return count;
};
