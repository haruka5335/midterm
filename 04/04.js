function xor(boolA, boolB){
  let c = boolA || boolB;
  if(boolA == true && boolB == true){
      return !c;
  }
  return c;

}



