  // had already done, but forgot, and this is another version
  /**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    let maxCount = 0;
    let indexRecord = {
        beginning: 0,
        lastDifferent: 0,
    }
    let record = [];
    
    tree.forEach((node, i) => {
        if (record.length === 0) {
            record.push(node);
        } else if (record.length === 1 && !record.includes(node)) {
            record.push(node);
            indexRecord.lastDifferent = i;
        } else if (record.length > 1) {
            if (!record.includes(node)) {
                const { beginning, lastDifferent } = indexRecord;
                const currCount = i - beginning;
                maxCount = currCount > maxCount? currCount : maxCount;
                indexRecord.beginning = lastDifferent;
                indexRecord.lastDifferent = i;
                record.shift();
                record.push(node);
            } else if (record[1] !== node) {
                indexRecord.lastDifferent = i;
                let temp = record[1];
                record[1] = record[0];
                record[0] = temp;
            }
            
        }
        
    });
    const currCount = tree.length - indexRecord.beginning;
    return currCount > maxCount ? currCount : maxCount;
};
