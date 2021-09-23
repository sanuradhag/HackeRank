function alternatingCharacters(s: string): number {
    // s = AABAAB -> ABAB

    // find the the adjacent matching characters
    let deleteCount = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1])
            deleteCount++
    }
    return deleteCount;
}