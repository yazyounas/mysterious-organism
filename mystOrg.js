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

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      
    let randomIndex = Math.floor(Math.random() * this.dna.length)
    let newBase = returnRandBase();
    //console.log(randomIndex)
    //console.log(newBase)
    while (this.dna[randomIndex] === newBase) {
      newBase = returnRandBase();
    }
    this.dna[randomIndex] = newBase
    return this.dna
  },

    compareDNA(pAequor) {
      let commonCount = 0;
      for (let i = 0; i < pAequor.length; i++) {
        if(pAequor[i] === this.dna[i]){
          commonCount++;
        }
      }
    return (commonCount * 100) / this.dna.length;
    
},
willLikelySurvive() {
  let count = 0;
  for (let i = 0; i < this.dna.length; i++) {
    if(this.dna[i] === 'C' || this.dna[i] === 'G') {
      count++
    }
  }
  const percentage = (count * 100) / this.dna.length;
  if(percentage >= 60) {
    return true;
  } else {
    return false;
  }

} ,
/*
willLikelySurvive() {
  const cOrG = this.dna.filter(ele => ele === 'C' || ele === 'G');

 const percentage = (cOrG.length * 100) / this.dna.length;
  if(percentage >= 60) {
    return true;
  } else {
    return false;
  }
}*/
 
}

  };
  console.log(pAequorFactory(2, ['A', 'C', 'C', 'G']).willLikelySurvive());

 console.log(pAequorFactory(2, ['A', 'T', 'C', 'G']).compareDNA(['A', 'T', '3', 'D']));


const survivingSpecimen = [];
let idCounter = 0;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg)
    idCounter++;
  }
 
}

console.log(survivingSpecimen)