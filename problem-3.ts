{
  
  const countWordOccurrences = (sentence: string, givenWord: string): number => {

    let count:number = 0;
    const sentenceInLower = sentence.toLowerCase();
    const wordInLower = givenWord.toLowerCase();

    const words: string[] = sentenceInLower.split(" ");
    for (const word of words) {
      if (wordInLower === word) count++;
    }
    return count;
  }
  
  const ans: number = countWordOccurrences("I love typescript", "love");
  console.log(ans);
}
