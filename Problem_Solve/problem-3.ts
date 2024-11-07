{
    //

    const countWordOccurrences = (sentence: string, word: string): number => {
        const sentenceInLowerCase = sentence.toLowerCase();
        const wordInLowerCase = word.toLowerCase();
        const words = sentenceInLowerCase.split(' ');
        let count = 0;
        for (let i = 0; i < words.length; i++) {
            if (words[i] === wordInLowerCase) {
                count++;
            }
        }
        return count;
    }

    // console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));

    //
}