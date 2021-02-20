

$(".img-item").click((e)=>{
    let imgSrc = $(e.target).attr("src");//=> as a getter
    $("#maim-img").attr("src" ,imgSrc); // => as asetter
})