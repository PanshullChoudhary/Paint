window.addEventListener('load' , ()=>{
    const canvas = document.querySelector("#canvas");
    const eraser = document.getElementById('erase')
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    var er = 1;

    let painting = false;
    function startPos(e){
        painting = true;
        draw(e);
    }
    function endPos(){
        painting = false;
        ctx.beginPath()
    }

    eraser.addEventListener('click',()=>{
        console.log('clicked')
        er = er+1;
    });


    function draw(e){

        if(!painting)return;
        let ps = document.getElementById('ps');
        let psval = ps.value;
        ctx.lineWidth = psval;
        ctx.lineCap = "round" ;
        let original =  document.getElementById('colorWell').value;
        console.log(original);
        if(er %2 === 0){
            original = "white";
        }
        ctx.strokeStyle = original;
        ctx.lineTo(e.clientX , e.clientY)
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX , e.clientY)
    }
    canvas.addEventListener('mousedown',startPos);
    canvas.addEventListener('mouseup',endPos);
    canvas.addEventListener('mousemove',draw);
});

window.addEventListener('resize',()=>{
    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

