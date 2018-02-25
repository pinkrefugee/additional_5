module.exports = function check(str, bracketsConfig) {
  // your solution
  var open = [];
  var close = [];
  
  for (var i = 0; i < bracketsConfig.length; i++)
  {
    open[i] = bracketsConfig[i][0];
    close[i] = bracketsConfig[i][1];
  }
  var arr = str.split('');
  var temp = [];
  
  for (var i = 0; i < arr.length; i++)
  {
    if ( open.indexOf(arr[i]) != -1 && (open.indexOf(arr[i]) != close.indexOf(arr[i]) || arr[i] != temp[temp.length - 1]) )
        temp.push(arr[i]);
    else
    {
      if (close.indexOf(arr[i]) != -1 && open[close.indexOf(arr[i])] == temp[temp.length - 1])
        temp.pop();
      else return false;
    }
  }
  
  if (temp.length === 0)
  return true;
  else return false;

}
