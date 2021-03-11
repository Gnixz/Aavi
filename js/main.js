$(function () {
  //===== WOW JS =====//
  new WOW().init();

  // Preloader
  $(window).on("load", function (event) {
    $(".loader").delay(1500).fadeOut(500);
  });

  //===== Owl Carousel =====//
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  $(".owl-slider").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    // nav: true,
    // navText: [
    //   "<i class='fa fa-chevron-left'></i>",
    //   "<i class='fa fa-chevron-right'></i>",
    // ],
    margin: 0,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
  });
  $(".owl-pricing").owlCarousel({
    loop: true,
    items: 1,
    center: true,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  $(".owl-clients").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".owl-testimonials").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    margin: 0,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 2,
        dots: true,
      },
      1200: {
        items: 3,
        dots: true,
      },
    },
  });
  $(".owl-blogDetails").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  //===== Scroll Sticky Menu =====//
  let header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Vanilla Menu //
  function functionScroll() {
    var section = document.querySelectorAll(".section"),
      sections = {},
      i = 0;
    Array.prototype.forEach.call(section, function (e) {
      sections[e.id] = e.offsetTop;
    });
    let header = document.querySelector(".header");
    let height = header.offsetHeight;
    for (i in sections) {
      if (sections[i] <= window.pageYOffset + height) {
        const color = document.querySelector(".color");
        if (color) {
          color.classList.remove("color");
        }
        if (document.querySelector("a[href*=" + i + "]")) {
          document.querySelector("a[href*=" + i + "]").classList.add("color");
        }
      }
    }
  }
  window.addEventListener("scroll", functionScroll);
  window.addEventListener("resize", functionScroll);

  $(".scroll").click(function () {
    let header = document.querySelector(".header");
    let height = header.offsetHeight;
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        if ($(window).width() <= 991) {
          document.querySelector(".header__menu-button").click();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 59,
            },
            400,
            "easeInOutExpo"
          );
        } else {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - height,
            },
            400,
            "easeInOutExpo"
          );
        }
        return false;
      }
    }
  });

  //===== Click Toggle Menu =====//
  let body = document.querySelector("body");
  let menuList = document.querySelector(".header__menu-list");
  let overlay = document.querySelector(".header__overlay");
  let button = document.querySelector(".header__menu-button");
  button.addEventListener("click", () => {
    button.classList.toggle("change");
    body.classList.toggle("overflow-hidden");
    menuList.classList.toggle("show");
    overlay.classList.toggle("overlay");
    $(".submenu").removeClass("show");
  });
  overlay.addEventListener("click", () => {
    body.classList.remove("overflow-hidden");
    button.classList.remove("change");
    menuList.classList.remove("show");
    overlay.classList.remove("overlay");
    $(".submenu").removeClass("show");
  });

  //=== Click Show Submenu ===//
  let icon = document.querySelector(".link__icon");
  let submenu = document.querySelector(".submenu");
  icon.addEventListener("click", () => {
    submenu.classList.toggle("show");
  });
  let link = document.querySelectorAll(".has-child");
  link.forEach(function (item) {
    item.addEventListener("click", function () {
      console.log(this);
      this.nextElementSibling.classList.toggle("show");
      $(".has-child").not(this).next().removeClass("show");
    });
  });

  //===== Isotope =====//
  var $grid = $(".grid").imagesLoaded(function () {
    // init Isotope after all images have loaded
    $grid.isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      gutter: 0,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-sizer",
      },
    });
  });
  //===== Isotope click function =====//
  $(".iso-nav a").click(function () {
    $(".iso-nav a").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    console.log(selector);
    $(".grid").isotope({
      filter: selector,
    });
    return false;
  });

  //===== Back to Top =====//
  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });
  // Animate the scroll to top
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
  });

  //===== Swiper JS =====//
  var swiper = new Swiper(".screenShots__slide", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 10,
      stretch: 80,
      depth: 220,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //===== Venobox =====//
  $(".vbox-item").venobox({
    framewidth: "450px",
    border: "0",
    bgcolor: "#ddd",
    share: [], // default: []
  });

  //===== Number Auto Run =====/
  const clients = document.querySelector(".clients");
  const counters = document.querySelectorAll(".counters");
  const speed = 500; // The lower the slower
  window.addEventListener("scroll", () => {
    if (clients) {
      if (clients.offsetTop < window.pageYOffset + 0) {
        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            // Lower inc to slow and higher to slow
            const inc = target / speed;
            // Check if target is reached
            if (count < target) {
              // Add inc to count and output in counter
              counter.innerText = Math.ceil(count + inc);
              // Call function every ms
              setTimeout(updateCount, 100);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
      }
    }
  });
});
