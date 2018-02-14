/** 返回一个 指定svg 根节点和宽高，class的一个矩形
 * @param svg
 * @param width
 * @param heigth
 * @param clazz 样式
 */
function rect(svg,width,heigth,clazz){
    var svg.rect(width,heigth).addClass('drag '+clazz)
}