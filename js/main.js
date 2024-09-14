// 마우스 따라다니는 원
document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX - 2; // document의 x좌표값
    let mouseY = e.pageY - 3; // document의 y좌표값

    let cursor = document.querySelector('.cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
})

// gnb 로고 액팅
$(function(){

    // m 탭메뉴
    $('.btn_menu').on('click',function(){
        $('.m_gnb').addClass('on')
        $('.m_cover').fadeIn()
    })
    $('.m_cover').on('click',function(){
        $('.m_gnb').removeClass('on')
        $('.m_cover').fadeOut()
    })
    $('.m_close').on('click',function(){
        $('.m_gnb').removeClass('on')
        $('.m_cover').fadeOut()
    })

    // 로고 클릭시 토글
    $('.btn_menu').on('click',function(){
        $('.gnb').toggleClass('on')
        $(this).toggleClass('on')
    })
    // sec2
    // 버튼을 누르면 탭 화면 전환
    $('.tab_btn li').on('click',function(){
        let num = $(this).index()
        $('.tab_btn li').removeClass('on')
        $(this).addClass('on')


        // 기존클릭된 애는 숨기기(갤러리)
        $('.box').hide()
        // list 따라서 보여주기
        $('.box').eq(num).show()
        
    })


    // 웹퍼블리싱(slide)
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    })


    // sec1 mobile일때 아코디언
    $('#section1 .inner .right .experience').on('click',function(){
        $('#section1 .inner .right .experience').toggleClass('on')
        $('#section1 .inner .right .experience ul').stop().fadeToggle()
    })
    $('#section1 .inner .right .career').on('click',function(){
        $('#section1 .inner .right .career').toggleClass('on')
        $('#section1 .inner .right .career ul').stop().fadeToggle()
    })
    $('#section1 .inner .right .skills').on('click',function(){
        $('#section1 .inner .right .skills').toggleClass('on')
        $('#section1 .inner .right .skills ul').stop().fadeToggle()
    })

    

    
})

// 전체 페이지 액팅
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
    anchors:['num0','num1','num2','num3','num4','num41','num5'],


    // 화면안에 들어왔을때 작동되게 하기
    afterLoad: function(origin, destination){
        // destination 매개변수는 해당 섹션에 들어왔을때
        // origin 매개변수는 해당 섹션에서 나갔을 때
        var origin = this;
        console.log(origin)
        // console.log(`원래섹션: ${origin},${destination},${direction}`)

        // using index
        if(destination.index == 0 ){
            sec1_out()
        }if(destination.index == 1 ){
            sec1_in(),
            sec2_out()
        }if(destination.index == 2 ){
            sec1_out(),
            sec2_in()
        }if(destination.index == 3 ){
            sec2_out(),
            sec4_out()
        }if(destination.index == 4 ){
            sec4_in(),
            sec41_out()
        }if(destination.index == 5 ){
            sec41_in(),
            sec4_out()
        }if(destination.index == 6 ){
            sec41_out()
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
            duration: 500
        });
    
        tl.add({
            delay:500,
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
function sec1_out(){
    anime({
        targets:'.gazeins',
        width:0,
    })
}
// sec2 in
function sec2_in(){
    $('#section2 .sec2_contents').addClass('on')
}
function sec2_out(){
    $('#section2 .sec2_contents').removeClass('on')
}

// sec4,41
// 액팅
function sec4_in(){
    $('#section4 .inner .publish').addClass('on');
}
function sec4_out(){
    $('#section4 .inner .publish').removeClass('on');
}
function sec41_in(){
    $('#section41 .inner .publish').addClass('on');
}
function sec41_out(){
    $('#section41 .inner .publish').removeClass('on');
}




