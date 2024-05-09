const prod_color_btn=document.querySelectorAll('.prod_color');
prod_color_btn.forEach(color => {
    color.addEventListener('click', () => {
        if(!color.classList.contains('active-color')){
            resetcolor();
            color.classList.add('active-color');
        }
        else {
            color.classList.remove('active-color');
        }
    })
} )

function resetcolor(){
    prod_color_btn.forEach(color => {
        color.classList.remove('active-color');
    })

}

const faq_btn=document.querySelectorAll('.faq-container');
faq_btn.forEach(faq_tigger => {
    faq_tigger.addEventListener('click', () => {
        console.log('done');
        faq_tigger.classList.toggle("active");

      
    })
})

function viewmore() {
    var dot=document.getElementById("dots");
    var view_more=document.getElementById("view_more");
    var more=document.getElementById("more");

    if (dot.style.display=="none"){
        
    }
}