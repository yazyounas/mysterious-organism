// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  // Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      
    let randomIndex = Math.floor(Math.random() * this.dna.length)
    let newBase = returnRandBase();
    console.log(randomIndex)
    console.log(newBase)
    while (this.dna[randomIndex] === newBase) {
      newBase = returnRandBase();
    }
    this.dna[randomIndex] = newBase
    return this.dna
  }
  }
};
console.log(pAequorFactory(2, ['A', 'T', 'C', 'G']).mutate())