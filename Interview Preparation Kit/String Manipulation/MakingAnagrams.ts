function makeAnagram(a: string, b: string): number {
    // Write your code here
    // find the number of same characters in both of the strings and 
    // sum the diff in two strings
    
    // get the larger and smaller string
    const largerString = a.length >= b.length ? a : b;
    const smallerString = a.length < b.length ? a: b;
    
    const letterFrequencies = {} as any;
    
    for(let i=0; i< largerString.length; i++){
        // add the letter frequencies to the map
        letterFrequencies[largerString[i]] = (letterFrequencies[largerString[i]] || 0) +1;
    }
    
    // now we have the letter frequencies
    // now lets count the letters in the string and not in b by looping through the smaller string
    
    let charsInA = 0;
    let charsNotInB = 0
    
    for(let i=0; i< smallerString.length; i++){
        // decreathe the frequency value if character is found
        if(letterFrequencies[smallerString[i]]) {
            // character is found in the map
            letterFrequencies[smallerString[i]] -= 1;
            charsInA++;
        }else {
            // character is not found in the map
            charsNotInB++
        }
    }
    
    return (largerString.length - charsInA) + charsNotInB
}