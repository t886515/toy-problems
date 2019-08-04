var storedArray = [];
document.getElementById('sort').addEventListener('click', onClickSortButton);
document
  .getElementById('delete')
  .addEventListener('click', onClickDeleteButton);

function onClickDeleteButton() {
  var inputStr = document.getElementById('stringInput2').value;
  if (storedArray.includes(inputStr)) {
    storedArray.splice(storedArray.indexOf(inputStr), 1);
    handleTableCreationFromStoredArray();
  } else {
    // Prompt users to input a valid str in table
  }
}
function onClickSortButton() {
  var inputStr = document.getElementById('stringInput1').value;
  storedArray = inputStr ? inputStr.split(' ') : [];
  // var columns = document.getElementById('colNo').value;
  //var columns = 4;
  if (storedArray.length !== 0) {
    handleTableCreationFromStoredArray();
  } else {
    // Do validations
  }
}

function handleTableCreationFromStoredArray() {
  var sortedArray = sortStringArray(storedArray);
  var rowRequirement = getRowsRequirement(sortedArray.length);
  var numberOfColumnsAllFilled = getNumberOfColumnsAllFilled(
    sortedArray.length
  );
  var theTable = createTableElement(
    sortedArray,
    rowRequirement,
    numberOfColumnsAllFilled
  );
  renderTableFromSortedArray(theTable);
}

function createTableElement(
  sortedArray,
  rowRequirement,
  numberOfColumnsAllFilled
) {
  var theTable = document.createElement('table');
  theTable.style.border = 'solid 1px';
  var tableBody = document.createElement('tbody');
  // first, create as many TR as required by rowsRequirement
  // each one of them has a class name to mark row-1 ...etc
  for (var x = 0; x < rowRequirement; x++) {
    var tr = document.createElement('tr');
    tr.className = 'row-' + x;

    var index = x;
    for (var y = 0; y < 4; y++) {
      var td = document.createElement('td');
      td.innerHTML = sortedArray[index] ? sortedArray[index] : '';
      td.style.border = 'solid 1px';
      tr.appendChild(td);
      index = computeNextIndexInArray(
        x,
        y,
        numberOfColumnsAllFilled,
        rowRequirement,
        index,
        sortedArray.length
      );
    }
    tableBody.appendChild(tr);
  }
  theTable.appendChild(tableBody);
  return theTable;
}

function renderTableFromSortedArray(theTable) {
  var cont = document.getElementById('resultCont');
  cont.innerHTML = '';
  cont.appendChild(theTable);
}

function computeNextIndexInArray(
  x,
  y,
  numberOfColumnsAllFilled,
  rowRequirement,
  index,
  outOfBoundIndex
) {
  if (y >= numberOfColumnsAllFilled - 1 && x === rowRequirement - 1) {
    return outOfBoundIndex;
  } else if (y < numberOfColumnsAllFilled) {
    return index + rowRequirement;
  } else {
    return index + (rowRequirement - 1);
  }
}

function getRowsRequirement(inputArrayLength) {
  return Math.ceil(inputArrayLength / 4);
}

function getNumberOfColumnsAllFilled(inputArrayLength) {
  return inputArrayLength % 4 ? inputArrayLength % 4 : 4;
}

function sortStringArray(inputArray) {
  var sortedArray = inputArray.sort(function(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return a > b ? 1 : b > a ? -1 : 0;
  });
  return sortedArray;
}
