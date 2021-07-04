var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {
     slideIndex = 1
    }   

  if (n < 1) {slideIndex = slides.length}


  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  

}


var _index =0;
fnAnimSlide();

function fnAnimSlide(){
  var i; 
  var slides = document.getElementsByClassName("animSlide");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  _index++;
  if (_index > slides.length) {_index = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[_index-1].style.display = "block";  
  dots[_index-1].className += " active";
  setTimeout(fnAnimSlide, 2000);

}



function fnValidateForm(){
  var flag = true;
    let x = document.forms["myForm"]["fname"].value;
   
    if (x == "" && x.length<=0) {
         document.getElementById('tooltipName').innerHTML = 'Invalid name'
        document.getElementById('fname').style.border = '1px solid red';
        document.getElementById('tooltipName').style.display='block';
        flag = false;

     
    }else{
      document.getElementById('fname').style.border = '1px solid #000';
      document.getElementById('tooltipName').style.display='none';
    }
    
    let patten = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let x1 = document.forms["myForm"]["email"].value;
   
    if(x1.match(patten)){   
      document.getElementById('tooltipText').style.display='none';
     
    }else{

      document.getElementById('tooltipText').innerHTML = 'InValid Email'
      document.getElementById('email').style.border = '1px solid red';
      document.getElementById('tooltipText').style.display='block';
      flag= false;
    
    }
    if(flag)
    {
      alert('Form Submitted Successfully');
    }
      return flag;
   
}

function fnLearnMore(){
  alert('Learn more Link')
}
