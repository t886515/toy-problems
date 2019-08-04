document.getElementById('sort').addEventListener('click', function() {
  let inputStr = document.getElementById('stringInput1').value;
  var inputArray = inputStr ? inputStr.split(',') : [];
  var columns = document.getElementById('colNo').value;
  if (inputArray.length !== 0 && columns && parseInt(columns) > 0) {
    var result = processInput(inputArray, columns);
    createTable(result);
  } else {
    // Do validations
  }
});

function createTable(result) {
  var theTable = document.createElement('table');
  for (var j = 0; j < result.length; j++) {
    var td = document.createElement('td');

    for (var k = 0; k < result[j].length; k++) {
      var tr = document.createElement('tr');
      tr.innerHTML = result[j][k] != undefined ? result[j][k] : '';
      td.appendChild(tr);
    }

    theTable.appendChild(td);
  }
  var cont = document.getElementById('resultCont');
  cont.innerHTML = '';
  cont.appendChild(theTable);
}

function processInput(inputArray, columns) {
  var sortedArray = sortStringArray(inputArray);
  var rows =
    inputArray.length % columns === 0
      ? parseInt(inputArray.length / columns)
      : parseInt(inputArray.length / columns) + 1;
  return createResultArray(sortedArray, rows, columns);
}

function sortStringArray(inputArray) {
  var sortedArray = inputArray.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return a > b ? 1 : b > a ? -1 : 0;
  });
  return sortedArray;
}

function createResultArray(list, rows, columns) {
  var result = [];
  while (list[0]) {
    var spliceLen = list.length <= columns ? rows - 1 : rows;
    result.push(list.splice(0, spliceLen));
    columns--;
  }
  return result;
}
