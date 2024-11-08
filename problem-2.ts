{

  const removeDuplicates = (numbers: number[]): number[] => {

    let ans: number[] = [];
    for (const num of numbers) {
      if (ans.includes(num)) {
        continue
      } else {
        ans.push(num);
      }
    }
    return ans;
  }
  
  const result: number[] = removeDuplicates([1, 2, 2, 3, 4, 6,6, 6, 4, 5]);
  console.log(result);
}
