/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
// passed, but very slow
// var areSentencesSimilarTwo = function(words1, words2, pairs) {
//   if (words1.length !== words2.length) return false;
//   // if (isIdentical(words1, words2)) return true;
//   let collectionOfPairs = [];
//   pairs.forEach(pair => {
//     // if find one of the word in the pair to be in any of the collectionOfPairs, add to it
//     const pair1 = pair[0];
//     const pair2 = pair[1];

//     const existingSimilarity = [];
//     const newCollectionOfPairs = [];
//     collectionOfPairs.forEach(
//       (collection) => { 
//         collection[pair1] || collection[pair2] ? existingSimilarity.push(collection) : newCollectionOfPairs.push(collection);
//       }
//     );

//     if (existingSimilarity.length === 1) {
//       existingSimilarity[0][pair1] = true;
//       existingSimilarity[0][pair2] = true;
//     } else if (existingSimilarity.length > 1) {
//       const newSimilarityCollection = existingSimilarity.reduce((acc, obj) => {
//         acc = {
//           ...acc,
//           ...obj
//         };
//         return acc;
//       }, {});
//       newCollectionOfPairs.push(newSimilarityCollection);
//       collectionOfPairs = newCollectionOfPairs;
//     } else {
//       collectionOfPairs.push({
//         [pair1]: true,
//         [pair2]: true
//       });
//     }
//     // if not, just create a new object of the pairs and add to collectionOfPairs
//   });

//   for (let i = 0; i < words1.length; i++) {
//     const word = words1[i];
//     const similarWordsCollection = collectionOfPairs.filter(
//       collection => collection[word]
//     );
//     if (similarWordsCollection.length > 0) {
//       const someIsSimilar = similarWordsCollection.some(collection => {
//         if (!collection[words2[i]]) {
//           return false;
//         }
//         return true;
//       });
//       if (!someIsSimilar) {
//         return false;
//       }
//     } else {
//       if (word !== words2[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// learning from fastest solution which just use 1 single map

const findInMap = (word, map) => {
  if (!map[word]) return word;
  const parent = map[word];
  return findInMap(parent, map);
};

const areSentencesSimilarTwo = (words1, words2, pairs) => {
  if (words1.length !== words2.length) return false;

  let map = {};

  pairs.forEach((pair) => {
    const p1 = findInMap(pair[0], map);
    const p2 = findInMap(pair[1], map);

    if (p1 !== p2) map[p1] = p2;

  })
  console.log(map)
  for (let i = 0; i < words1.length; i++) {
    let word = words1[i];
    let word2 = words2[i];
    const parent = findInMap(word, map);
    const parent2 = findInMap(word2, map);
    if (parent !== parent2) return false;
  }
  return true;
}


// const x = ["jrocadcojmybpxmuj","livgsrfvgtovcurzq","mnrdscqkycodx","wgcjlntupylayse","tglnshmqlmkqqfbpf","uzlxmaoro","narvuaqmmkqhd","xozoyaqxtbustrymo","jrocadcojmybpxmuj","ainlwrwabqcwq","qnjidlmwmxxjgntez","bbchthovla","vaufbmwdrupcxpg","zwwgloilddclufwze","tyxrlpmcy","wtjtdrlm","edurtetzseifez","yzxogkunvohdmro","livgsrfvgtovcurzq","wmpvjvzljhnaxvp","rqbswlkw","umlzibkkpsyvpdol","jkcmceinlyhi","wlvmfxbleuot","aeloeauxmc","ooyllkxg","wlvmfxbleuot","cuewcvuy","vaufbmwdrupcxpg","bbchthovla","arigdtezmyz","yzxogkunvohdmro","wrszraxxdum","dhmiuqhqlsprxy","xpmxtfyvjrnujyxjh","bfxbncez","cjjkmybleu","mnrdscqkycodx","mzfpofjn","livgsrfvgtovcurzq","shfzcyboj","xozoyaqxtbustrymo","xozoyaqxtbustrymo","orlzzpytpzazxr","filnwifbukdqijgr","fllqjtnxwmfoou","mkmawbogphdttd","rthpxoxyyiy","dkhfozltuckwog","wmpvjvzljhnaxvp","dhmiuqhqlsprxy","yltljjairlkrmdq","cuewcvuy","subzoyxjkfiwmfb","mzvbgcizeeth","narvuaqmmkqhd","tglnshmqlmkqqfbpf","rpesfkhfjucj","xrgfejybbkezgor","vaufbmwdrupcxpg","czlgbqzffodsoxng","suvvqdiceuogcmv","fllqjtnxwmfoou","yltljjairlkrmdq","bubwouozgs","mnrdscqkycodx","rqbswlkw","ooyllkxg","livgsrfvgtovcurzq","rthpxoxyyiy","pyzcbpjhntpefbq","wtjtdrlm","rztcppnmud","inuzvkgolupxelcal","pdxsxjop","wmpvjvzljhnaxvp","xydwvemqvtgvzl","hqpnoczciajvkbdy","rvihrzzkt","jzquemjzpvfbka","gkqrglav","qyaxqaqxiwr","mzvbgcizeeth","umlzibkkpsyvpdol","vaufbmwdrupcxpg","ooyllkxg","arigdtezmyz","bubwouozgs","wtjtdrlm","xozoyaqxtbustrymo","jrocadcojmybpxmuj","rnlryins","fllqjtnxwmfoou","livgsrfvgtovcurzq","czlgbqzffodsoxng","hlcsiukaroscfg","bfxbncez","ainlwrwabqcwq","vaufbmwdrupcxpg","vaufbmwdrupcxpg"]

// const y = [
//   "jrocadcojmybpxmuj",
//   "livgsrfvgtovcurzq",
//   "mnrdscqkycodx",
//   "wgcjlntupylayse",
//   "bbchthovla",
//   "bfxbncez",
//   "ztisufueqzequ",
//   "yutahdply",
//   "suvvqdiceuogcmv",
//   "ainlwrwabqcwq",
//   "fquzrlhdsnuwhhu",
//   "tglnshmqlmkqqfbpf",
//   "vaufbmwdrupcxpg",
//   "zwwgloilddclufwze",
//   "livgsrfvgtovcurzq",
//   "wtjtdrlm",
//   "edurtetzseifez",
//   "ecqfdkebnamkfglk",
//   "livgsrfvgtovcurzq",
//   "wmpvjvzljhnaxvp",
//   "ryubcgbzmxc",
//   "pzlmeboecybxmetz",
//   "hqpnoczciajvkbdy",
//   "xpmxtfyvjrnujyxjh",
//   "zwwgloilddclufwze",
//   "khcyhttaaxp",
//   "wlvmfxbleuot",
//   "jzquemjzpvfbka",
//   "vaufbmwdrupcxpg",
//   "tglnshmqlmkqqfbpf",
//   "mzvbgcizeeth",
//   "cjjkmybleu",
//   "orlzzpytpzazxr",
//   "dhmiuqhqlsprxy",
//   "mzfpofjn",
//   "bfxbncez",
//   "inuzvkgolupxelcal",
//   "inhzsspqltvl",
//   "wlvmfxbleuot",
//   "livgsrfvgtovcurzq",
//   "orlzzpytpzazxr",
//   "yutahdply",
//   "yutahdply",
//   "orlzzpytpzazxr",
//   "gdziaihbagl",
//   "yltljjairlkrmdq",
//   "mkmawbogphdttd",
//   "aotjpvanljxe",
//   "aeloeauxmc",
//   "wmpvjvzljhnaxvp",
//   "dhmiuqhqlsprxy",
//   "yltljjairlkrmdq",
//   "dnaaehrekqms",
//   "khcyhttaaxp",
//   "mzvbgcizeeth",
//   "narvuaqmmkqhd",
//   "rvihrzzkt",
//   "bfufqsusp",
//   "xrgfejybbkezgor",
//   "vaufbmwdrupcxpg",
//   "czlgbqzffodsoxng",
//   "jrocadcojmybpxmuj",
//   "yltljjairlkrmdq",
//   "yltljjairlkrmdq",
//   "bubwouozgs",
//   "inhzsspqltvl",
//   "bsybvehdny",
//   "subzoyxjkfiwmfb",
//   "livgsrfvgtovcurzq",
//   "stkglpqdjzxmnlito",
//   "evepphnzuw",
//   "xrgfejybbkezgor",
//   "rztcppnmud",
//   "cjjkmybleu",
//   "qyaxqaqxiwr",
//   "ibwfxvxswjbecab",
//   "xydwvemqvtgvzl",
//   "hqpnoczciajvkbdy",
//   "tglnshmqlmkqqfbpf",
//   "dnaaehrekqms",
//   "gkqrglav",
//   "bfxbncez",
//   "qvwvgzxqihvk",
//   "umlzibkkpsyvpdol",
//   "vaufbmwdrupcxpg",
//   "khcyhttaaxp",
//   "arigdtezmyz",
//   "bubwouozgs",
//   "fllqjtnxwmfoou",
//   "xozoyaqxtbustrymo",
//   "jrocadcojmybpxmuj",
//   "rnlryins",
//   "wtjtdrlm",
//   "livgsrfvgtovcurzq",
//   "gkqrglav",
//   "orileazg",
//   "uzlxmaoro",
//   "ainlwrwabqcwq",
//   "vaufbmwdrupcxpg",
//   "vaufbmwdrupcxpg"
// ]

// const z = [
//   ["yutahdply", "yutahdply"],
//   ["xozoyaqxtbustrymo", "xozoyaqxtbustrymo"],
//   ["xozoyaqxtbustrymo", "xozoyaqxtbustrymo"],
//   ["yutahdply", "yutahdply"],
//   ["bsybvehdny", "bsybvehdny"],
//   ["pzlmeboecybxmetz", "pzlmeboecybxmetz"],
//   ["rqbswlkw", "rqbswlkw"],
//   ["ryubcgbzmxc", "ryubcgbzmxc"],
//   ["umlzibkkpsyvpdol", "umlzibkkpsyvpdol"],
//   ["bsybvehdny", "bsybvehdny"],
//   ["rqbswlkw", "bsybvehdny"],
//   ["pzlmeboecybxmetz", "bsybvehdny"],
//   ["ryubcgbzmxc", "ryubcgbzmxc"],
//   ["umlzibkkpsyvpdol", "ryubcgbzmxc"],
//   ["hqpnoczciajvkbdy", "hqpnoczciajvkbdy"],
//   ["vdjccijgqk", "vdjccijgqk"],
//   ["rztcppnmud", "rztcppnmud"],
//   ["jkcmceinlyhi", "hqpnoczciajvkbdy"],
//   ["vdjccijgqk", "vdjccijgqk"],
//   ["rztcppnmud", "vdjccijgqk"],
//   ["hqpnoczciajvkbdy", "hqpnoczciajvkbdy"],
//   ["jkcmceinlyhi", "hqpnoczciajvkbdy"],
//   ["suvvqdiceuogcmv", "llrzqdnoxbscnkqy"],
//   ["jrocadcojmybpxmuj", "jrocadcojmybpxmuj"],
//   ["suvvqdiceuogcmv", "suvvqdiceuogcmv"],
//   ["llrzqdnoxbscnkqy", "suvvqdiceuogcmv"],
//   ["jrocadcojmybpxmuj", "jrocadcojmybpxmuj"],
//   ["dnaaehrekqms", "dnaaehrekqms"],
//   ["jzquemjzpvfbka", "muaskefecskjghzn"],
//   ["muaskefecskjghzn", "iziepzqne"],
//   ["cuewcvuy", "dnaaehrekqms"],
//   ["iziepzqne", "iziepzqne"],
//   ["muaskefecskjghzn", "iziepzqne"],
//   ["jzquemjzpvfbka", "iziepzqne"],
//   ["dnaaehrekqms", "dnaaehrekqms"],
//   ["cuewcvuy", "dnaaehrekqms"],
//   ["rpesfkhfjucj", "xpmxtfyvjrnujyxjh"],
//   ["wlvmfxbleuot", "bfufqsusp"],
//   ["xpmxtfyvjrnujyxjh", "mzfpofjn"],
//   ["rpesfkhfjucj", "rpesfkhfjucj"],
//   ["mzfpofjn", "rpesfkhfjucj"],
//   ["xpmxtfyvjrnujyxjh", "rpesfkhfjucj"],
//   ["bfufqsusp", "bfufqsusp"],
//   ["wlvmfxbleuot", "bfufqsusp"],
//   ["lkopigreodypvude", "lkopigreodypvude"],
//   ["hjogoueazw", "hjogoueazw"],
//   ["qvwvgzxqihvk", "qvwvgzxqihvk"],
//   ["mzvbgcizeeth", "mzvbgcizeeth"],
//   ["mzvbgcizeeth", "arigdtezmyz"],
//   ["arigdtezmyz", "arigdtezmyz"],
//   ["qvwvgzxqihvk", "arigdtezmyz"],
//   ["mzvbgcizeeth", "arigdtezmyz"],
//   ["lkopigreodypvude", "lkopigreodypvude"],
//   ["hjogoueazw", "lkopigreodypvude"],
//   ["tglnshmqlmkqqfbpf", "tglnshmqlmkqqfbpf"],
//   ["bbchthovla", "bbchthovla"],
//   ["rvihrzzkt", "tglnshmqlmkqqfbpf"],
//   ["tglnshmqlmkqqfbpf", "tglnshmqlmkqqfbpf"],
//   ["rvihrzzkt", "tglnshmqlmkqqfbpf"],
//   ["bbchthovla", "bbchthovla"],
//   ["filnwifbukdqijgr", "pkirimjwvyxs"],
//   ["gdziaihbagl", "gdziaihbagl"],
//   ["hlcsiukaroscfg", "hlcsiukaroscfg"],
//   ["gdziaihbagl", "orileazg"],
//   ["orileazg", "orileazg"],
//   ["gdziaihbagl", "orileazg"],
//   ["hlcsiukaroscfg", "orileazg"],
//   ["pkirimjwvyxs", "pkirimjwvyxs"],
//   ["filnwifbukdqijgr", "pkirimjwvyxs"],
//   ["xrgfejybbkezgor", "wtjtdrlm"],
//   ["yltljjairlkrmdq", "fllqjtnxwmfoou"],
//   ["wtjtdrlm", "wtjtdrlm"],
//   ["xrgfejybbkezgor", "wtjtdrlm"],
//   ["fllqjtnxwmfoou", "fllqjtnxwmfoou"],
//   ["yltljjairlkrmdq", "fllqjtnxwmfoou"],
//   ["ecqfdkebnamkfglk", "gwkkpxuvgp"],
//   ["inuzvkgolupxelcal", "inuzvkgolupxelcal"],
//   ["hgxrhkanzvzmsjpzl", "gwkkpxuvgp"],
//   ["cjjkmybleu", "cjjkmybleu"],
//   ["yzxogkunvohdmro", "yzxogkunvohdmro"],
//   ["inuzvkgolupxelcal", "yzxogkunvohdmro"],
//   ["yzxogkunvohdmro", "yzxogkunvohdmro"],
//   ["cjjkmybleu", "yzxogkunvohdmro"],
//   ["ecqfdkebnamkfglk", "ecqfdkebnamkfglk"],
//   ["gwkkpxuvgp", "ecqfdkebnamkfglk"],
//   ["hgxrhkanzvzmsjpzl", "ecqfdkebnamkfglk"],
//   ["qnjidlmwmxxjgntez", "hhrllhedyy"],
//   ["vyrvelteblnqaabc", "qnjidlmwmxxjgntez"],
//   ["wzflhbbgtc", "wzflhbbgtc"],
//   ["rnlryins", "rnlryins"],
//   ["fquzrlhdsnuwhhu", "zzdvolqtndzfjvqqr"],
//   ["zzdvolqtndzfjvqqr", "bvxiilsnsarhsyl"],
//   ["qnjidlmwmxxjgntez", "vyrvelteblnqaabc"],
//   ["vyrvelteblnqaabc", "vyrvelteblnqaabc"],
//   ["hhrllhedyy", "vyrvelteblnqaabc"],
//   ["rnlryins", "vyrvelteblnqaabc"],
//   ["fquzrlhdsnuwhhu", "zzdvolqtndzfjvqqr"],
//   ["zzdvolqtndzfjvqqr", "zzdvolqtndzfjvqqr"],
//   ["bvxiilsnsarhsyl", "zzdvolqtndzfjvqqr"],
//   ["wzflhbbgtc", "zzdvolqtndzfjvqqr"],
//   ["wgcjlntupylayse", "wgcjlntupylayse"],
//   ["hgtyntdmrgjh", "hgtyntdmrgjh"],
//   ["cemnayjhlnj", "cemnayjhlnj"],
//   ["wgcjlntupylayse", "wgcjlntupylayse"],
//   ["hgtyntdmrgjh", "wgcjlntupylayse"],
//   ["cemnayjhlnj", "cemnayjhlnj"],
//   ["aeloeauxmc", "aeloeauxmc"],
//   ["zwwgloilddclufwze", "aeloeauxmc"],
//   ["dkhfozltuckwog", "dwojnswr"],
//   ["dkhfozltuckwog", "dkhfozltuckwog"],
//   ["dwojnswr", "dkhfozltuckwog"],
//   ["aeloeauxmc", "aeloeauxmc"],
//   ["zwwgloilddclufwze", "aeloeauxmc"],
//   ["aotjpvanljxe", "aotjpvanljxe"],
//   ["stkglpqdjzxmnlito", "aotjpvanljxe"],
//   ["zfmpxgrevxp", "aotjpvanljxe"],
//   ["evepphnzuw", "evepphnzuw"],
//   ["rthpxoxyyiy", "pyzcbpjhntpefbq"],
//   ["aotjpvanljxe", "stkglpqdjzxmnlito"],
//   ["stkglpqdjzxmnlito", "stkglpqdjzxmnlito"],
//   ["zfmpxgrevxp", "stkglpqdjzxmnlito"],
//   ["rthpxoxyyiy", "rthpxoxyyiy"],
//   ["evepphnzuw", "rthpxoxyyiy"],
//   ["pyzcbpjhntpefbq", "rthpxoxyyiy"],
//   ["czlgbqzffodsoxng", "czlgbqzffodsoxng"],
//   ["gkqrglav", "gkqrglav"],
//   ["gkqrglav", "gkqrglav"],
//   ["czlgbqzffodsoxng", "czlgbqzffodsoxng"],
//   ["tyxrlpmcy", "tyxrlpmcy"],
//   ["livgsrfvgtovcurzq", "livgsrfvgtovcurzq"],
//   ["tyxrlpmcy", "tyxrlpmcy"],
//   ["livgsrfvgtovcurzq", "livgsrfvgtovcurzq"],
//   ["cufxsgbpjgqvk", "cufxsgbpjgqvk"],
//   ["cufxsgbpjgqvk", "inhzsspqltvl"],
//   ["shsgrqol", "shsgrqol"],
//   ["mnrdscqkycodx", "mnrdscqkycodx"],
//   ["inhzsspqltvl", "inhzsspqltvl"],
//   ["cufxsgbpjgqvk", "inhzsspqltvl"],
//   ["shsgrqol", "shsgrqol"],
//   ["mnrdscqkycodx", "shsgrqol"],
//   ["rphnhtvnihyfkrgv", "rphnhtvnihyfkrgv"],
//   ["edurtetzseifez", "edurtetzseifez"],
//   ["yykdqtkkdacpbwtbq", "yykdqtkkdacpbwtbq"],
//   ["rphnhtvnihyfkrgv", "rphnhtvnihyfkrgv"],
//   ["edurtetzseifez", "rphnhtvnihyfkrgv"],
//   ["yykdqtkkdacpbwtbq", "yykdqtkkdacpbwtbq"],
//   ["dhmiuqhqlsprxy", "dhmiuqhqlsprxy"],
//   ["ztisufueqzequ", "ztisufueqzequ"],
//   ["narvuaqmmkqhd", "narvuaqmmkqhd"],
//   ["narvuaqmmkqhd", "narvuaqmmkqhd"],
//   ["ztisufueqzequ", "narvuaqmmkqhd"],
//   ["dhmiuqhqlsprxy", "dhmiuqhqlsprxy"],
//   ["wmpvjvzljhnaxvp", "wmpvjvzljhnaxvp"],
//   ["ibwfxvxswjbecab", "ibwfxvxswjbecab"],
//   ["xydwvemqvtgvzl", "wmpvjvzljhnaxvp"],
//   ["wmpvjvzljhnaxvp", "wmpvjvzljhnaxvp"],
//   ["xydwvemqvtgvzl", "wmpvjvzljhnaxvp"],
//   ["ibwfxvxswjbecab", "ibwfxvxswjbecab"],
//   ["mkmawbogphdttd", "mkmawbogphdttd"],
//   ["bubwouozgs", "mkmawbogphdttd"],
//   ["ainlwrwabqcwq", "ainlwrwabqcwq"],
//   ["mkmawbogphdttd", "mkmawbogphdttd"],
//   ["bubwouozgs", "mkmawbogphdttd"],
//   ["ainlwrwabqcwq", "ainlwrwabqcwq"],
//   ["uzlxmaoro", "bfxbncez"],
//   ["qyaxqaqxiwr", "qyaxqaqxiwr"],
//   ["pdxsxjop", "pdxsxjop"],
//   ["pdxsxjop", "pdxsxjop"],
//   ["qyaxqaqxiwr", "pdxsxjop"],
//   ["bfxbncez", "bfxbncez"],
//   ["uzlxmaoro", "bfxbncez"],
//   ["subzoyxjkfiwmfb", "subzoyxjkfiwmfb"],
//   ["ooyllkxg", "ooyllkxg"],
//   ["subzoyxjkfiwmfb", "khcyhttaaxp"],
//   ["subzoyxjkfiwmfb", "subzoyxjkfiwmfb"],
//   ["khcyhttaaxp", "subzoyxjkfiwmfb"],
//   ["ooyllkxg", "ooyllkxg"],
//   ["orlzzpytpzazxr", "orlzzpytpzazxr"],
//   ["oufzmjgplt", "oufzmjgplt"],
//   ["wrszraxxdum", "wrszraxxdum"],
//   ["shfzcyboj", "shfzcyboj"],
//   ["oufzmjgplt", "oufzmjgplt"],
//   ["orlzzpytpzazxr", "oufzmjgplt"],
//   ["wrszraxxdum", "wrszraxxdum"],
//   ["shfzcyboj", "wrszraxxdum"],
//   ["yutahdply", "xozoyaqxtbustrymo"],
//   ["umlzibkkpsyvpdol", "pzlmeboecybxmetz"],
//   ["hqpnoczciajvkbdy", "rztcppnmud"],
//   ["llrzqdnoxbscnkqy", "jrocadcojmybpxmuj"],
//   ["cuewcvuy", "jzquemjzpvfbka"],
//   ["rpesfkhfjucj", "wlvmfxbleuot"],
//   ["lkopigreodypvude", "mzvbgcizeeth"],
//   ["tglnshmqlmkqqfbpf", "bbchthovla"],
//   ["orileazg", "filnwifbukdqijgr"],
//   ["yltljjairlkrmdq", "xrgfejybbkezgor"],
//   ["inuzvkgolupxelcal", "hgxrhkanzvzmsjpzl"],
//   ["hhrllhedyy", "wzflhbbgtc"],
//   ["cemnayjhlnj", "hgtyntdmrgjh"],
//   ["dkhfozltuckwog", "zwwgloilddclufwze"],
//   ["zfmpxgrevxp", "pyzcbpjhntpefbq"],
//   ["gkqrglav", "czlgbqzffodsoxng"],
//   ["tyxrlpmcy", "livgsrfvgtovcurzq"],
//   ["shsgrqol", "cufxsgbpjgqvk"],
//   ["rphnhtvnihyfkrgv", "yykdqtkkdacpbwtbq"],
//   ["dhmiuqhqlsprxy", "ztisufueqzequ"],
//   ["ibwfxvxswjbecab", "xydwvemqvtgvzl"],
//   ["mkmawbogphdttd", "ainlwrwabqcwq"],
//   ["pdxsxjop", "uzlxmaoro"],
//   ["ooyllkxg", "khcyhttaaxp"],
//   ["shfzcyboj", "orlzzpytpzazxr"]
// ];

const x = ["great", "acting", "skills"];
const y = ["fine", "painting", "talent"];
const z = [
  ["great", "fine"],
  ["drama", "acting"],
  ["skills", "talent"]
];
console.log(areSentencesSimilarTwo(x, y, z));