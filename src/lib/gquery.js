export class Gquery{
    click(domNode){
        domNode.addEventListener('click', function(){
            window.alert("Working")
        }) 
    }
    css(domNode, property, value) {
        console.log(domNode.style)
        domNode.style[property]= value;
    }
}