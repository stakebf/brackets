module.exports = function check(str, bracketsConfig) {
    let tempArr = [];

    str.split('').map((el, indx) => {
      for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < bracketsConfig[i].length; j++) {
          if ((el == bracketsConfig[i][1]) && (tempArr[tempArr.length - 1] == bracketsConfig[i][0])) {
              tempArr.pop();
              break;
          }
          if (el == bracketsConfig[i][0]) {
            tempArr.push(bracketsConfig[i][0]);
            break;
          }
          if (tempArr.length == 0 && el == bracketsConfig[i][1]) {
            tempArr.push(false);
            break;
          }
        }
      }
    });
  
    return tempArr.length == 0 ? true : false;
}
