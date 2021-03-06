let pu={
  strlen:function(str,len){
  if(str.length>10){
    return  str.substr(0,len)+"......"
  }else{
    return str
  }
  },
  mydata:function(timestamp,formats){

  }
}
module.exports=pu