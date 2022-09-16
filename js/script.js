$(document).ready(function(e){
    let myaudio = document.getElementById("myaudio");
    let musicText = $('#musicText');
    let myaudioPlayStatus;
    if(myaudio.paused){
        myaudioPlayStatus = false
        musicText.text('on')
    }else{
        myaudioPlayStatus = true
        musicText.text('off')
    }
    // menu
    $('.menu_btn').on('click', function(e){
        e.preventDefault();
        $('.main_nav').toggleClass('showMenu')

    })
    // closeModal
    $(document).click(function (e) {
        if ($(e.target).is('#modalAbout')) {
            $('#modalAbout').removeClass('showModal');
        }
        if ($(e.target).is('#modalALT')) {
            $('#modalALT').removeClass('showModal');
        }
        if ($(e.target).is('#modalMusic')) {
            $('#modalMusic').removeClass('showModal');
        }
        if ($(e.target).is('#modalMusic')) {
            $('#modalMusic').removeClass('showModal');
        }
        if ($(e.target).is('#modalBlog')) {
            $('#modalBlog').removeClass('showModal');
        }
        if ($(e.target).is('#modalLeva')) {
            $('#modalLeva').removeClass('showModal');
        }
        if ($(e.target).is('#modalContact')) {
            $('#modalContact').removeClass('showModal');
        }        
        if ($(e.target).is('#modalThank')) {
            $('#modalThank').removeClass('showModal');
        }
    });
    // quit menu
    $('.quit').on('click', function(e){
        e.preventDefault();
        $('.main_nav').removeClass('showMenu')
    })
    $('a[data-modal-btn]').on('click', function(e){
        e.preventDefault();
        let modalId = $(this).attr('href');
        $('#modalAllPagesHref').on('click', ()=>{
            $('.showModal').removeClass('showModal')
        })
        if($(modalId).hasClass('showModal')){
            $('.showModal').removeClass('showModal')
        }else{
            $('.showModal').removeClass('showModal')
            $(modalId).addClass('showModal');
            
        }

        let modalUrl = $(this).attr('data-modal-btn');
        let modalTarget = $(this).attr('target')
        if(modalId == '#modalMusic'){
            if(myaudio.paused){
                myaudioPlayStatus = false
                musicText.text('on')
                
            }else{
                myaudioPlayStatus = true
                musicText.text('off')
            }
        }
        if(modalId == '#modalAllPages'){
            if(modalUrl != ''){
                $('#modalAllPagesHref').attr('href', modalUrl)
                if (modalTarget) {
                    $('#modalAllPagesHref').attr('target', modalTarget)
                }
            }
        }
    })
    $('.modal_footer').on('click', function(e){
        $('.modal_container').removeClass('showModal')
    })  
        $('#onMusicBtn').on('click', function(e){
            e.preventDefault;
            if(myaudioPlayStatus){
                myaudio.pause();
            }else{
                myaudio.play();
            }
            $('.showModal').removeClass('showModal')
        })
        $('#offMusicBtn').on('click', function(e){
            e.preventDefault;
            if(myaudioPlayStatus){
                myaudio.play();
            }else{
                myaudio.pause();
            }
            $('.showModal').removeClass('showModal')
        })

    $('#prevAudio').on('click', function(e){
        e.preventDefault;
        let prevMusicLi = $('.playlist li[selected="selected"]').prev('li');
        let prevMusicLiSrc;
        $('.playlist li[selected="selected"]').removeAttr('selected')
        if(prevMusicLi.length > 0){
            prevMusicLiSrc = prevMusicLi.attr('audiourl');
            prevMusicLi.attr('selected', 'selected');
        }else{
            prevMusicLiSrc = $('.playlist li:last-child').attr('audiourl');
            $('.playlist li:last-child').attr('selected', 'selected');
        }
        myaudio.setAttribute('src', prevMusicLiSrc);
        myaudio.play();
    })
    $('#nextAudio').on('click', function(e){
        e.preventDefault;
        let nextMusicLi = $('.playlist li[selected="selected"]').next('li');
        let nextMusicLiSrc;
        $('.playlist li[selected="selected"]').removeAttr('selected')


        $('.playlist li[selected="selected"]').removeAttr('selected')
        if(nextMusicLi.length > 0){
            nextMusicLiSrc = nextMusicLi.attr('audiourl');
            nextMusicLi.attr('selected', 'selected');
        }else{
            nextMusicLiSrc = $('.playlist li:first-child').attr('audiourl');
            $('.playlist li:first-child').attr('selected', 'selected');
        }
        myaudio.setAttribute('src', nextMusicLiSrc);
        myaudio.play();
    })
    $('#eggsInput').on('keypress', function(e){
		if(e.keyCode == 13){
			let inputVal = $(this).val();
			$('.eggs_container_text').append("<h6>"+inputVal+"</h6>" );
			$(this).val('')
		}
	})
    
    // input mask
    /* let dotted = '...............';
    $('.form_message input').attr('placeholder',dotted); */

    let form_quotes = document.querySelectorAll('.form_quote')
    let t_ind = 23/* 
    $('.form_input').inputmask({"mask": "***************"}); */
    
    const revalue_mask_plsh = (el, val, select = false) => {
        el.innerHTML = ''
        for(let i = 0; i<t_ind; i++){
            if(val>=i){
                el.innerHTML += ' ';
            } else {
                el.innerHTML += '.'
            }
        }
    }

    form_quotes.forEach(form_quote => {
        quote_input = form_quote.querySelector('.form_input')
        
        form_quote.addEventListener('input', (e)=> {
            let val = e.path[0].value
            let inp = e.path[1]
            let mask_text = inp.querySelector('.breadcrumb__text')
            let mask__ = inp.querySelector('.breadcrumb___')
            let mask_plsh = inp.querySelector('.breadcrumb__mask')
            mask_text.innerHTML = val
            let mask_text_width = mask_text.clientWidth
            if (e.path[0].clientWidth > mask_text_width) {
                mask__.style.left = mask_text_width + 'px'
            }
        
            e.path[0].addEventListener('change', (e)=>{
                console.log('a')
                revalue_mask_plsh(mask_plsh, e.path[0].value.length-1, false)
            })

            mask_plsh.style.left = mask_text_width + 13 + 'px'
            revalue_mask_plsh(mask_plsh, val.length, true)
        })
    });


    function maskFunc(value){
        
    }
    // Name
  /*   $('#name').on('keyup',maskFunc('#name'))
    // Email
    $('#email').on('keyup',maskFunc('#email'))
    // Phone
    $('#phone').on('keyup',maskFunc('#phone'))
    // Country
    $('#country').on('keyup',maskFunc('#country'))
    // Messenger
    $('#messenger').on('keyup',maskFunc('#messenger')) */

    // Loader
    setTimeout(function(){
        $('.loader_container').hide();
            setTimeout(function(){
            $('#preloader').hide();
        },200)
    },1900)
    // start game
    $('#btnPlayGame').on('click', function(e){
        e.preventDefault();
        $('.tetresGame').addClass('play');
    })
    // start game
    $('.contact_modalBtn').on('click', function(e){
        e.preventDefault();
        $('.tetresGame').removeClass('play');
    })

    // Email
    $('.btn_request').click(function(){
        let name = $('#name').inputmask('unmaskedvalue');
        let email = $('#email').inputmask('unmaskedvalue');
        let phone = $('#phone').inputmask('unmaskedvalue');
        let country = $('#country').inputmask('unmaskedvalue');
        let messenger = $('#messenger').inputmask('unmaskedvalue');
        let body = '<div>'
        +'Name: '+ name + '<br>' 
        + 'Email: ' + email + '<br>' 
        +'Phone: ' + phone + '<br>'
        +'Country: ' + country + '<br>' 
        + 'Messanger: '+ messenger+'</div>';
        Email.send({
            Host : "smtp.gmail.com",
            Username : "client@gmail.com",
            Password : "client",
            To : 'Test@gmail.com',
            From : "client@gmail.com",
            Subject : "New message",
            Body : body
        }).then(
            $('.showModal').removeClass('showModal')
        ).then(
            $('#modalThank').addClass('showModal')
        );
    })
})

let input_bot_text = document.querySelector('.breadcrumb__text');
let input_bot_text_width = input_bot_text.clientWidth;

let input_bot = document.querySelector('.input_style')

input_bot.addEventListener('input', ()=>{
    let breadcrumb___ = document.querySelector('.breadcrumb___')
    input_bot_text.innerHTML = input_bot.value
    input_bot_text = document.querySelector('.breadcrumb__text');
    input_bot_text_width = input_bot_text.clientWidth;
    if(input_bot_text_width >= 300){
        input_bot_text_width = 300
        breadcrumb___.style.display = 'none'    
    } else {
        breadcrumb___.style.display = 'block'    
    }
    breadcrumb___.style.left = input_bot_text_width + 'px'
})

