function squaredDigits(num) {
    let digits = num.toString().split('');
    let squared = digits.map(digit => digit = digit*digit);
    return parseInt(squared.join(''));
   }



   console.log(squaredDigits(123)); // Output: 149
