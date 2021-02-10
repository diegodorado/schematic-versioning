/*

## **Part Two**

After years of usage, it turns out we want a yet more-expressive versioning system. We design Schematic Version Scheme Two as an extension of the old system, as follows:

### **Validity**

A version number is valid if it's a string where:

- it's comprised of numeric fields, separated by periods
- each field is non-empty, entirely digits, and has no extraneous leading zeroes
- there is at least one non-zero field

Example valid versions:

- 7
- 2.4
- 1.0.2
- 7.8.9
- 3.257.78
- 127.0.0.1
- 1.2.3.4

Example invalid versions:

- 03.2.5.9
- 0.0.0.0.0.0
- 2.5,3
- 3.5.alpha
- 2.3.-5
- why.wont.this.work.augh

### **Ordering**

Again, we read each version number as a series of period-separated integer fields. When v1 and v2 are Schematic Versions in Scheme Two, then v1 comes before v2 just if, for some N > 0, the first N-1 fields of v1 and v2 are equal, and the Nth field of v1 is less than the Nth field of v2.

For the purposes of this comparison, if v1 or v2 have a different number of fields, all "missing" fields are equal to 0.

All Scheme One orderings are still true. Further examples:

- 9.9 < 10 < 10.1
- 5.3 < 5.3.0.1 < 5.3.1 < 5.4
- 2.3.97 < 2.4 < 2.4.0.1
- 2.4 is neither before nor after 2.4.0 or 2.4.0.0

*/


const isValid = (v) => {


  let regexp = /^([0-9]+\.)*([0-9]+)$/m;

  if(!regexp.test(v)){
    return false;
  }else{
    const sum = v.split(".")
      .map( e => parseInt(e, 10))
      .reduce( (a,e)  => a+e , 0)
    return sum !== 0
  }

}


const versionArray = (v) => {

  if(isValid(v)){
    return v.split(".")
      .map( e => parseInt(e, 10))
  }else{
    return []
  }

}
const isBefore = (v1, v2) => {

  const va1 = versionArray(v1);
  const va2 = versionArray(v2);

  let i = 0;
  while( i < va1.length || i < va2.length) {
    if (va1[i] === va2[i]){
      i++;
    }else {
      return  (va1[i] < va2[i])
    }
  }

  // versions are the same
  return false
}


console.log(isBefore('1.2.3.4','2'))
