<script>
(function(){
  var u="https://addyourlink.com/ddsaD";
  var f=10000,i=20000;
  var r=false,l=false;
  function open_u(){
    try{
      var p=window.open(u,"_blank");
      if(p){p.blur();window.focus();}
      else{window.location.href=u;}
    }catch(e){window.open(u,"_blank");}
  }
  function cool(){
    l=true;r=false;
    setTimeout(function(){l=false;r=true;},i);
  }
  function click_h(e){
    if(!r||l)return;
    open_u();cool();
  }
  function init(){
    setTimeout(function(){
      r=true;
      document.addEventListener("click",click_h,true);
      document.addEventListener("touchend",click_h,{capture:true,passive:true});
    },f);
  }
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",init);
  }else{init();}
})();
</script>
