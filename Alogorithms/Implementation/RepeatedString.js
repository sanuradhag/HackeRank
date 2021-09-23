function repeatedString(s, n) {
    // aba 10
    // aba aba aba a|ba
    // 3 whole 1 partial

    // a 10000

    if (s.length === 1 && s === 'a') {
        return n;
    }

    const noOfAsInString = (s.match(/a/g) || []).length;
    const lengthOfString = s.length;

    const wholeParts = Math.floor(n / lengthOfString);

    const partialLength = n % lengthOfString;

    const partialString = s.slice(0, partialLength);

    const noOfAsInPartial = (partialString.match(/a/g) || []).length

    return (wholeParts * noOfAsInString) + noOfAsInPartial
}