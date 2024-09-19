var for_img = document.querySelectorAll(".for_images");
for(let i=0; i<for_img.length;i++)
{
    for_img[i].classList.add("col-lg-6","col-xl-6","col-md-12");
}

var for_text = document.querySelectorAll(".for_text");
for(let i=0;i<for_text.length;i++)
{
    for_text[i].classList.add("col-lg-6","col-xl-6", "col-md-12","d-flex","flex-column","justify-content-center");
}
var for_about = document.querySelectorAll(".for_about");
for(let i=0;i<for_about.length;i++)
{
    for_about[i].classList.add("col-xxl-2","col-xl-2","col-lg-4","col-md-6","col-sm-12","pb-3");
}