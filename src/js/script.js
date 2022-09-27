function num_to_word() {
  let num = document.getElementById("num").value;
  let num_lenght = num.length;
  let ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  let tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
    "Hundred",
  ];
  let suffixes = [
    "",
    "",
    "",
    " Hundred ",
    " Thousand ",
    " million ",
    " billion ",
    " trillion ",
  ];
  if (num_lenght == 2) {
    print_num_to_word(last_2(num));
  } else if (num_lenght == 3) {
    print_num_to_word(ones[num[num.length - 3]] + suffixes[3] + last_2(num));
  } else if (num_lenght == 4) {
    print_num_to_word(
      ones[num[num.length - 4]] +
        suffixes[4] +
        ones[num[num.length - 3]] +
        suffixes[3] +
        last_2(num)
    );
  } else if (num_lenght == 5) {
    print_num_to_word(
      start_2(num, 0, 2) +
        suffixes[4] +
        ones[num[num.length - 3]] +
        suffixes[3] +
        last_2(num)
    );
  } else if (num_lenght == 6) {
    print_num_to_word(
      ones[num[num.length - 6]] +
        suffixes[3] +
        start_2(num, 1, 3) +
        suffixes[4] +
        ones[num[num.length - 3]] +
        suffixes[3] +
        last_2(num)
    );
  } else if (num_lenght == 7) {
    print_num_to_word(
      ones[num[num.length - 7]] +
        suffixes[5] +
        ones[num[num.length - 6]] +
        suffixes[3] +
        start_2(num, 2, 4) +
        suffixes[4] +
        ones[num[num.length - 3]] +
        suffixes[3] +
        last_2(num)
    );
  }
  
  function last_2(num) {
    let last_2 = num.slice(-2);
    if (parseInt(last_2) < 20) {
      return ones[parseInt(last_2)];
    } else {
      return (
        tens[last_2[last_2.length - 2]] + " " + ones[last_2[last_2.length - 1]]
      );
    }
  }

  function start_2(num, start, end) {
    let start_2 = num.slice(start, end);
    if (parseInt(start_2) < 20) {
      return ones[parseInt(start_2)];
    } else {
      return tens[start_2[0]] + " " + ones[start_2[1]];
    }
  }

  function print_num_to_word(formula) {
    document.getElementById("num_to_string").innerHTML = formula;
  }
}
