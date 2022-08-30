
//reverse
const result_reverse = []
const array=[1, 2, 3, 4, 5]

 Array.prototype.reversed=function () {
  for (i = (this.length - 1); i > -1; i--) {
    result_reverse.push(this[i])
  }
  console.log(result_reverse)

}
array.reversed()


// filter 
const data = [1, 2, 3, 4, 5];

Array.prototype.filter= function (func) {
  const filtered = []; 

  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      filtered.push(this[i]);
    }
  }

  return filtered;
};

const filteredData = data.filter((el)=>el<5)
console.log(filteredData)



//include

const data2 = [1, 2, 3, 4, 5];

Array.prototype.include= function (el) {
  

  for (let i = 0; i < this.length; i++) {
    if ( this[i]==el) {
  return true
    }
    return false 
  }
};
const Includedata = data2.include(3)
console.log(Includedata)


