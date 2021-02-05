// скрипт для маленьких экранов вызова меню и слайда
$(document).ready(function () {
  // создаем кнопку меню
  const mMenuBtn = $('.m-menu-button');
  // новый элем- т для меню с классом
  const mMenu = $('.m-menu');
  // переменная для смены таблици актеры создатели
  const tab = $('.tab');
  //  нахожу кнопку и совершаю событие клик
  // переменная.событие, выполняется ф-я открывается наше меню
  mMenuBtn.on('click', function () {
    // этому меню присваеваем класс activ через toggleClass  это будет обозначать что меню активно
    mMenu.toggleClass('activ');
    // для тега body приеним toggleClass не скролить в css его опишем d начале
    $('body').toggleClass('no-scroll');

  });
  // актеры создатели 25-07 скрипт переключения актерыисоздатели по приципу табов
  tab.on("click", function () {
    // сделать ремуф очистку от класса active
    tab.removeClass('active');
    $(this).toggleClass('active');
    // сделать чистку всех классов от класса visible
    $('.tabs-content').removeClass('visible');
    // у this вытащить атрибут attr
    // $(this).attr('data-target');
    //data-target содержит то что мы поместили в него в HTML
    // console.log($(this).attr('data-target'));
    // сщздадим для таргетф переменную 28-34
    let activeTabContent = $(this).attr('data-target');
    // обращаемся к переменной activeTabContent и применим для него через toggleClass класс 'visible'
    $(activeTabContent).toggleClass('visible');


  });
  // слайды
  const swiper = new Swiper('.swiper-container', {
    // в одном слайде 4 карточки слайда 
    slidesPerView: 4,
    // растояние между карточками слайды
    saceBetween: 25,
    loop: true,
    // размеры для разных экранов
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      560: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 70,
        navigation: {
          nextEl: ".button-next",
        },

      },


    }
  });

});




// слайды
const swiper = new Swiper('.swiper-container', {
  // в одном слайде 4 карточки слайда 
  slidesPerView: 4,
  // растояние между карточками слайды
  saceBetween: 25,
  loop: true,
  // размеры для разных экранов
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    560: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
      slidesOffsetAfter: 70,
      navigation: {
        nextEl: ".button-next",
      },

    },


  }
})
// 9-49