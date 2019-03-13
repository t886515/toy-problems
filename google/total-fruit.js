/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    const collectionMap = new Map();
    let maxRange = [0, 0];
    let startIndex = 0;

    tree.forEach((fruit, index) => {

        collectionMap.set(fruit, index);
        if (collectionMap.size > 2) {
            // when the size of the map is bigger than 2, then we find the min value of index to delete
            const theOlderIndex = Math.min(...collectionMap.values());
            // before delete, we do a current index - smallest index, and we keep going
            if (index - startIndex > maxRange[1]-maxRange[0] + 1) {
                maxRange[0] = startIndex;
                maxRange[1] = index -1;
            }
            // new start would be theOlderIndex + 1;
            startIndex = theOlderIndex + 1;

            // find the fruit of that older index...
            collectionMap.forEach((value, key) => {
                if (value === theOlderIndex) {
                    collectionMap.delete(key);
                }
            });

        }


    });
    if (maxRange[1] - maxRange[0] === 0 && collectionMap.size) {
        return tree.length;
    } else {
        return maxRange[1]-maxRange[0] < tree.length - startIndex? tree.length - startIndex : maxRange[1]-maxRange[0] + 1;
    }

};
