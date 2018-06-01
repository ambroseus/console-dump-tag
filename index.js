const dump = (strings, ...values) => {
  let msg = "";
  if (strings && strings instanceof Array) {
    msg = strings.reduce((total, current, index) => {
      total += current;
      if (values && values.hasOwnProperty(index)) {
        total += JSON.stringify(values[index], null, 2);
      }
      return total;
    }, "");
  } else {
    msg = "ERROR: [dump call] first parameter must be an array";
  }
  console.log(msg);
  return msg;
};

module.exports = dump;
