var vm = new Vue({
  el: "#app",
  data: {
    imgsrc:"avatar.png",
    imgalt:"test",
    width:300,
    blur: 0,
    opacity: 0.8,
    border: 10,
    borderRadius: 10,
    color:"#ff0000"
  },
  computed: {
    styles: function() {
      return 'opacity:' + this.opacity + ';' + 'border:' + this.border + 'px solid ;' + 'border-radius:' + this.borderRadius + 'px ;' + 'filter: blur(' + this.blur + 'px) ;'+'width:'+this.width+'px;'+'border-color:' + this.color + ' ;'
    },
  },
});













/*var vm = new Vue({
    el: "#app",
    data: {
      width:200,
      o: 5,
      b: 15,
      r: 2,
      
      p:8,
      c:544,
      imgsrc:"avatar.png",
      imgalt:"test",
    },
    computed:
    {
      styles: function() {
        return 'opacity:' + this.o + ';' + 'border:' + this.b + 'px solid ;' + 'border-radius:' + this.r + 'px ;'+'width:'+this.width+'px;'+ 'border-color:' + this.c + ' #000 ;' 
      },
    },
 });
 




/*new Vue({
    el: '#app',
    data: {
        fontSize: 12,
        borderwidth:7,
        borderclor:"#000",
        opacity:50,
        borderradius: 100,
        blur:(10),
        imgsrc:"avatar.png",
        imgalt:"test",
        imgwith:"200",
        width:200,
    }
})

/*var app= new Vue({
    el: '#app',
    data: {
        fontSize: 12,
        imgsrc:"avatar.png",
        imgalt:"test",
        imgwith:"200",
        width:500,
        opacity:1,
    }
})*/