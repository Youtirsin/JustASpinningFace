window.addEventListener("load",()=>{
    var faces = [
        "(`　　 )",
        "(･` )",
        "(ω･`　)",
        "(･ω･` )",
        "(´･ω･`)",
        "( ´･ω･)",
        "(　´･ω)",
        "( 　 ´･)",
        "( 　　´)",
        "( )"
    ];
    var content = document.querySelector("#content p");
    var current_face = 0;
    var faces_length = faces.length;
    setInterval(() => {
        content.textContent = faces[current_face];
        current_face = (current_face+1)%faces_length;
    }, 100);
});