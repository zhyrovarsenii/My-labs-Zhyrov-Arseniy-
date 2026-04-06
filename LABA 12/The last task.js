function findLongestWord(...words) {
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(findLongestWord("кіт", "собака", "слон", "жираф"));