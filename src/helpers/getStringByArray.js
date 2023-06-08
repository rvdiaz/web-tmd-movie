const getStringByArray=(array)=>{
    let aux='';
    if(array){
    array.map((gen,index)=>{
      if(index==0)
      aux+=gen.name;
      else
      aux+=', '+gen.name;
    })
    }
    return aux;
}

export default getStringByArray;