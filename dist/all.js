const img=document.getElementById("profile-pic"),logo=document.getElementById("logo");function removeTransition(e){img.classList.remove("wink")}function wink(e){img.classList.add("wink")}logo.addEventListener("mouseover",wink),logo.addEventListener("mouseout",removeTransition);