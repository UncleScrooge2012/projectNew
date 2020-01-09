toggleModal = () => {
  const modal = document.querySelector('.modal');
  modal.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('modal') && !target.classList.contains('modal__dialog')) {
      hideModal();
    }
  });
  hideModal = () => {
    modal.classList.remove('modal--visible');
  };
  document.onkeydown = function (evt) {

    if (evt.keyCode == 27) {
      modal.classList.remove('modal--visible');
    }
  };
};
toggleModal();


$(document).ready(function () {


  $('body').append('<a href="#" class="scroll-up">листайте вверх</a>');



  $(function () {
    $.fn.scrollToTop = function () {
      $(this).hide().removeAttr("href");
      if ($(window).scrollTop() >= "800") $(this).fadeIn("slow")
      var scrollDiv = $(this);
      $(window).scroll(function () {
        if ($(window).scrollTop() <= "800") $(scrollDiv).fadeOut("slow")
        else $(scrollDiv).fadeIn("slow")
      });
      $(this).click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow")
      })
    }
  });

  $(function () {
    $(".scroll-up").scrollToTop();
  });

  $(document).ready(function () {
    var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closseBtn = $('.modal__close');


    modalBtn.on('click', function () {
      modal.toggleClass('modal--visible');
    });

    closseBtn.on('click', function () {
      modal.toggleClass('modal--visible');
    });



  });



  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  next.css('left', prev.width() + 5 + bullets.width() + 5)
 



  //initialize swiper when document ready

  //  Steps swiper - text slider for steps section
  var mySwiper2 = new Swiper('.steps-container', {
    // Optional parameters
    loop: false,
    navigation: {
      nextEl: '.steps-button-next',
      prevEl: '.steps-button-prev',
    },
    // If we need pagination
    pagination: {
      el: '.steps-pagination',
      type: 'bullets',
    },

  });

  var stepsNext = $('.steps-button-next');
  var stepsPrev = $('.steps-button-prev');
  var stepsBullets = $('.steps-pagination');

  stepsNext.css('left', '235px')

  //  Steps swiper - image slider for steps section
  var mySwiper3 = new Swiper('.gallery-container', {
    // If we need pagination
    pagination: {
      el: '.stages__pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.stages-button-next',
      prevEl: '.sstages-button-prev',
    },

  });


  // Points navigation in section steps
  $('.stages__box-item').on('click', function () {
    $('.stages__box-item').removeClass('active');
    $(this).addClass('active');
    const e = $(this).data('index');
    mySwiper2.slideTo(e)
    mySwiper3.slideTo(e)
  });
  mySwiper2.on('slideChange', (function () {
    let e = mySwiper2.activeIndex - 0;
    if (e === 6) { e = 0 };
    $('.stages__box-item').removeClass('active');
    $('.stages__box-item').eq(e).addClass('active');
  }));
  mySwiper3.on('slideChange', (function () {
    let e = mySwiper3.activeIndex - 0;
    if (e === 6) { e = 0 };
    $('.stages__box-item').removeClass('active');
    $('.stages__box-item').eq(e).addClass('active');
  }));

  new WOW().init()


  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите emall",
        email: "Введите в формате: name@domain.com"
      }
    },


     submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert(" Форма отправлена, мы свяжемся с вами через 10 минут");
          $(form)[0].reset();
          modal.removeClass("modal--visible");

        }
      });

    }

  });

  $('.masters__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите emall",
        email: "Введите в формате: name@domain.com"
      }
    },


    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert(" Форма отправлена, мы свяжемся с вами через 10 минут");
          $(form)[0].reset();
          modal.removeClass("modal--visible");
        }
      });

    },

  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required"
      // compound rule

    },

    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Телефон обязателен"

    }

  });


  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      userText: "required"

      // compound rule

    },

    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Телефон обязателен",
      userText: "Задайте вопрос?"

    }

  });

  $('[type=tel]').mask('+7(000) 000-00-00', { placeholder: "+7(___) ___-__-__" });





  var mixer = mixitup('.fantasy__box-imgs');




  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.751999, 37.617734],
      zoom: 15
    }, {
      searchControlProvider: 'yandex#search'
    }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наш офис',
        balloonContent: 'Вход по пропускам'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/pin.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      })
    myMap.geoObjects
      .add(myPlacemark);


    myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
  });

});