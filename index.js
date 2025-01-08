document.body.addEventListener('click',(event)=>{
    
    const circle=document.createElement('div');
    circle.className='circle';
    // circle.classList.add('circle') and setattribute also method to create an element
    // circle.textContent="Hi";
    const x=event.clientX;
    const y=event.clientY;

    circle.style.left=`${x-25}px` // " " use `` due here x and y changable by this x and y can change than it can display
    circle.style.top=`${y-25}px`  // due to center the circle position

    const color=["red","blue","orange","green","purple","yellow","brown","wheat","pale","pink"]
    circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)];

    const text=["Mahadev","Shankar","Welcome","Ram","Krishna","SitaRam","Radhe","Hey","Gauri","OM"]
    circle.textContent=text[Math.floor(Math.random()*text.length)]

    document.body.appendChild(circle);
    // remove them after 5 sec
    setTimeout(()=>{
        circle.remove();
    },5000)
})