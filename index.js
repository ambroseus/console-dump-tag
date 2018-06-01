const dump = (strings, ...values) => {
  console.log(
    strings.reduce((total, current, index) => {
      total += current;
      if (values.hasOwnProperty(index)) {
        total += JSON.stringify(values[index], null, 2);
      }
      return total;
    }, "")
  );
};

module.exports = dump;
