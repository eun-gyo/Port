document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX - 2; // document의 x좌표값
    let mouseY = e.pageY - 3; // document의 y좌표값

    let cursor = document.querySelector('.cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
})

$(function(){
    // 로고 클릭시 토글
    $('.btn_menu').on('click',function(){
        $('.gnb').toggleClass('on')
        $(this).toggleClass('on')
    })
// 버튼을 누르면 탭 화면 전환
    $('.tab_btn li').on('click',function(){
        $('li.on').removeClass('on')
        $(this).addClass('on')
    })

})

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    // 위아래 스크롤
	scrollHorizontally: true,
    // 네비게이터를 보이고 숨김
    navigation: true,
    // 네비게이터 위치
    navigationPosition: 'right',
    // 하이퍼링크
    anchors:['num0','num1','num2','num3','num4','num5'],



    afterLoad: function(origin, destination){
        // destination 매개변수는 해당 섹션에 들어왔을때
        // origin 매개변수는 해당 섹션에서 나갔을 때
        var origin = this;
        console.log(origin)
        // console.log(`원래섹션: ${origin},${destination},${direction}`)

        // using index
        if(destination.index == 0 ){
            sec_out()
        }if(destination.index == 1 ){
            sec1_in()
        }if(destination.index == 2 ){
            sec_out()
        }if(destination.index == 3 ){
            
        }if(destination.index == 4 ){
            
        }
    }
});
// portfolio
function sec0_in(){
    // alert("서은교의 포트폴리오 페이지 입니다")
}
// about
function sec1_in(){
        let tl = anime.timeline({
            easing: 'linear',
            duration: 300
        });
    
        tl.add({
            delay:1000,
            targets: '.g1',
            width : '95%',
        })
        .add({
            targets: '.g2',
            width : '95%',
        })
        .add({
            targets: '.g3',
            width : '90%',
        })
        .add({
            targets: '.g4',
            width : '95%',
        })
        .add({
            targets: '.g5',
            width : '95%',
        })
        .add({
            targets: '.g6',
            width : '80%',
        })
        .add({
            targets: '.g7',
            width : '80%',
        })
        .add({
            targets: '.g8',
            width : '80%',
        })
    
}
// about화면을 벗어나면 그래프 게이지 가로 0
function sec_out(){
    anime({
        targets:'.gazeins',
        width:0,
    })
}


