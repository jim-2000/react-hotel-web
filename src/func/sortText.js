export const sortText = (str,max)=>{
    if (str.length >max) {
      str = str.substring(0,max)+ "....";      
      return str;
    }else{
        return str;
    }
}