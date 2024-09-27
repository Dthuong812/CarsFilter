// cach 1 hien thi toan bo data sau dos cho an di theo type .hieu nang cao nhung du lieu phai fix cung

// var btnList = document.querySelectorAll('button')
// var imgList = document.querySelectorAll('img')

// btnList.forEach(btn=>{
//     btn.addEventListener('click',e=>{
//         // console.log(e.currentTarget.getAttribute('type'));
//         let type = e.currentTarget.getAttribute('type');
//         imgList.forEach(img=>{
//             let typeImg = img.getAttribute('type');
//             if(type == typeImg || type == 'all'){
//                 img.classList.remove('hide')
//             }else{
//                 img.classList.add('hide')
//             }       
//         })
//     })
// })

// cach 2 cho thanh mang xu ly ve data , logic de dang de hieu linh dong them ddc nhieu chung nang 
var listImg = document.querySelectorAll('img');
var container = document.querySelector('.container');
var btnList = document.querySelectorAll('button')
var arr =[]

//init
listImg.forEach(item=>{
    arr.push({
        src :item.src,
        type: item.getAttribute('type')
    })
})
//
function activeButton(btnActive){
    btnList.forEach(btn=>{
        btn.classList.remove('active')
    })
    btnActive.classList.add('active')
}
//
btnList.forEach(btn=>{
    btn.addEventListener('click',e=>{
        //active button
        activeButton(e.currentTarget)
        //filter data
        let type = e.currentTarget.getAttribute('type');
        if(type == 'all'){
            render (arr)  ;
            return;
        }
        let fitterData = arr.filter(car=>{
            return car.type == type 
        })
        render(fitterData);
    })
})
//render
function render(list) {
    if (!container) return; 

    container.innerHTML = "";
    list.forEach(item => { 
        let imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.setAttribute('type', item.type);
        let divElment = document.createElement('div')
        divElment.classList.add('car')
        divElment.append(imgElement)
        container.append(divElment);
    });
}