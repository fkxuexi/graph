$(function () {
    var draw = SVG('drawing').size(1000, 1000).move(100,100)
    var rect = draw.rect(200, 100).attr({fill: '#fff'}).addClass('process').radius(9)
    var rect2 = draw.rect(200, 100).attr({fill: '#fff'}).move(300, 300).addClass('process').radius(9)

    rect.draggable({
        minX: 10
        , minY: 15
        , maxX: 500
        , maxY: 500
        , snapToGrid: 20
    })


    var links = SVG.group();
    var markers = SVG.group();




    var rect3 = rect.clone().move(300);
    draw.style({
        border:'1px solid #000',
    })
    SVG.select('.process').style({
        'stroke':'red',
        'stroke-width':'1px'
    })
   /* .mouseover(function (event) {
        SVG.select('.process').style({
            cursor: 'move',
        })
    })

    var isMove = false;

    SVG.select('.process').mousedown(function () {
        isMove = true;
    })
    SVG.select('.process').mouseup(function () {
        isMove = false;
    })
    SVG.select('.process').mousemove(function (event) {
        if (isMove){
            var attr = this.attr();
            var centerX = attr.x + attr.width / 2;
            var centerY = attr.y + attr.height / 2;

            var newX = attr.x + (event.pageX - centerX)
            var newY = attr.y + (event.pageY - centerY)

            var root = SVG.get('drawing').attr();
            var rootX = root.x + root.width;
            var rootY = root.y + root.height;


           if(parseInt(newX + attr.width + root.x) <= parseInt(rootX)
               && parseInt(newY+attr.height+root.y) <= parseInt(rootY)){

               this.move(newX,newY);
           }
        }
    })*/
})