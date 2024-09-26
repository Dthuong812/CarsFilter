var btnList = document.querySelectorAll('button')
var imgList = document.querySelectorAll('img')

btnList.forEach(btn=>{
    btn.addEventListener('click',e=>{
        // console.log(e.currentTarget.getAttribute('type'));
        let type = e.currentTarget.getAttribute('type');
        imgList.forEach(img=>{
            let typeImg = img.getAttribute('type');
            if(type == typeImg || type == 'all'){
                img.classList.remove('hide')
            }else{
                img.classList.add('hide')
            }       
        })
    })
})