const arrCompared = [];
const arrComparing = [];

export default function validAnagram(compared, comparing) {

  const arrCompared = compared.split("");
  const arrComparing = comparing.split("");

  const sortedCompared = arrCompared.sort();
  const sortedComparing = arrComparing.sort();

  let result = true;

  if(sortedCompared === sortedComparing) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

export { arrCompared, arrComparing }