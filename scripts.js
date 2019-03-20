// PORTFOLIO INFO

const myPortfolio = {

}
$(function () {
    myPortfolio.init();
})


        

    myPortfolio.projectInfo = [{
            projectid: 1,
            imageDesktop: "./assets/Planted - Home.jpg",
            imageTablet: "./assets/Planted - Home - Tablet.jpg",
            imagePhone: "./assets/Planted - Home - Mobile.jpg",
            title: "Planted",
            description: "Simple three page PSD conversion using HTML5 and SASS. ",
            languages: [
                'SASS',
                'HTML5',
            ],
            liveLink: "https://dustinbradley45.github.io/dustinBradleyProject2/",
            gitHub: "https://github.com/Dustinbradley45/dustinBradleyProject2"
        },
        {
            projectid: 2,
            imageDesktop: "./assets/Broken Telephone Desktop.png",
            imageIpad: "./assets/Broken Telephone Tablet.png",
            imagePhone: "./assets/Broken Telephone- Mobile.png",
            title: "Broken Phone",
            description: "Guess who said this famous quote after it has been sent through the translator and back again. Using HTML, SASS, javaScript, jQuery and the Google Translate RESTful API.",
            languages: [
                "HTML5",
                "SASS",
                "javaScript",
                "jQuery",
                "RESTful API",
                "Paired Programming"
            ],
            liveLink: "https://dustinbradley45.github.io/brokenPhone/#",
            gitHub: "https://github.com/Dustinbradley45/brokenPhone"
        },
        {
            projectid: 3,
            imageDesktop: "",
            imageIpad: "I am an ipad size Image",
            imagePhone: "I am an iphone size image",
            title: "Playlist Maker",
            description: "Guess who said this famous quote after it has been sent through the translator and back again. Using HTML, SASS, javaScript, jQuery and the Google Translate RESTful API.",
            languages: [
                "HTML5",
                "SASS",
                "javaScript",
                "jQuery",
                "RESTful API",
                "Paired Programming"
            ],
            liveLink: "Link Live",
            gitHub: ""
        }
    ]

myPortfolio.changeLine = () => {

        headerHeight = $('header').height();
        aboutPosition = $("#about").position().top;
        educationPosition = $("#education").position().top;
        portfolioPosition = $("#project").position().top;
        contactPosition = $("#contact").position().top;

    // SIDE LINES
        $(document).scroll(function () {
            let y = $(this).scrollTop();
            
            if (y >= aboutPosition - 300 && y < educationPosition) {
                $('.lineTwo').addClass('pageLineActive');
            }

            if (y >= educationPosition  && y < portfolioPosition) {
                $(".lineTwo, .lineOne, .lineFour, .lineFive").removeClass("pageLineActive");
                 $('.lineThree').addClass('pageLineActive');
            }

            if (y >= portfolioPosition && y < contactPosition) {      
                $(".lineThree, .lineTwo, .lineOne, .lineFive").removeClass("pageLineActive");
                $('.lineFour').addClass('pageLineActive');
            }

            if (y >= contactPosition) {         
               $(".lineFour").removeClass("pageLineActive");
               $('.lineFive').addClass('pageLineActive');
            }
        })
}

        //   FUNCTION INITIAL
myPortfolio.init = () => {
    //  ANIMATE ON SCROLL
    AOS.init();
           
    // CHANGE LINES ON SIDE
    myPortfolio.changeLine()

    // SCROLL FEATURE

    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });



    // $(window).resize(() => {
        if ($(window).width() < 700) {
            $(".projectButtonContainerOne").html(
                ` <div>
                    <a href="https://github.com/Dustinbradley45/dustinBradleyProject2">GitHub</a>
                    <a href="https://dustinbradley45.github.io/dustinBradleyProject2/">Live</a>
                </div>`
            );
            
            $(".projectButtonContainerTwo").html(
                ` <div>
                    <a href="https://github.com/Dustinbradley45/brokenPhone">GitHub</a>
                    <a href="https://dustinbradley45.github.io/brokenPhone/#">Live</a>
                </div>`
            )

            $(".projectButtonContainerThree").html(
                ` <div>
                    <a href = "https://github.com/Dustinbradley45/dineWithMe" > GitHub </a>
                    <a href="#">Live</a>
                </div>`
            )


        } else $(".buttonContainer").html(
            ` <button class="project1 projectChange" data-id="1">Preview</button>`
        )

}
    // )

    // let controller = new ScrollMagic.Controller({
    //     container: '.scrollContainer',
    //     globalSceneOptions: {
    //         triggerHook: 'onEnter'
    //     },
    //     vertical: false,
    // });

    // new ScrollMagic.Scene({
    //     triggerElement: "#sliderTitle",
    //     duration: 100,
    //     offset: 50
    // }).addTo(controller);

  
    myPortfolio.openNav = () => {
        $(".headerNav").animate({
            "width": "250px",
            "opacity": "1"
        })
        $(".headerNav").css({
            "display": "block"
        })
        $(".mainNav").animate({
            "opacity": "0"
        })
        $("body").animate({
            "marginRight": "250px"
        })
        
    }

    myPortfolio.openNavMobile = () => {
        $(".headerNav").animate({
            "width": "100vw",
            "opacity": "1",
            "background-color": "#1d1d1d",
            "z-index": "200",

        })

        $(".headerNav").css({
            "display": "block"
        })
        $(".mainNav").animate({
            "opacity": "0"
        })
        $("body").animate({
            "margin-right": "100vh",
           
        })
        $("header").animate({
            "opacity" : "0"
        })
    }

    myPortfolio.closeNav = () => {
        $(".headerNav").animate({
            "width": "0",
        })
        $(".headerNav").css({
            "display": "none"
        })
        $(".mainNav").animate({
            "opacity": "1"
        })
        $("body").animate({
            "margin-right": "0"
        })

        $("header").animate({
            "opacity": "1"
        })
    }

    $(".mainNav").on("click", () => {
        if ($(window).width() > 600) {
            myPortfolio.openNav();

        } else {
            myPortfolio.openNavMobile();

        }

    });

    $(".navBarButton").on("click", () => {
        myPortfolio.closeNav();
    })
    

   
    
    //  CHANGE PROJECT
    $(".buttonContainer").on("click", ".projectChange", function () {
       
        if ($(this).data('id') === 1) {
            console.log("hello world")
            $(".scrollContainer").html(`
             <button class="goBack"><i class="fas fa-chevron-down"></i></button>
             <div class="responsiveIcons">
                <button class="desktop  responsive" data-val="1"><i class="fas fa-desktop"></i></button>
                <button class="tablet responsive" data-val="2"><i class="fas fa-tablet-alt"></i></button>
                <button class="mobile responsive" data-val="3"><i class="fas fa-mobile-alt"></i></button>
            </div>         
            <object data="https://dustinbradley45.github.io/dustinBradleyProject2/" type="text/html"></object>
            <div class="projectLinks">
                <a href="https://github.com/Dustinbradley45/dustinBradleyProject2" target="_blank">GitHub</a>
                <a href="https://dustinbradley45.github.io/dustinBradleyProject2/" target="_blank">Live</a>
            </div>
            `);

            $(".scrollContainer").animate({ "width": "95%" })

            const screenWidth = $(window).width();
            $(".innerProjectScrollContainer").scrollLeft(screenWidth);


        } else if ($(this).data('id') === 2) {
            $(".scrollContainer").html(`
           
            <button class="goBack"><i class="fas fa-chevron-down"></i></button>
            <object data="https://dustinbradley45.github.io/brokenPhone/" type="text/html"></object>
             <div class="responsiveIcons">
                <button class="desktop  responsive" data-val="1"><i class="fas fa-desktop"></i></button>
                <button class="tablet responsive" data-val="2"><i class="fas fa-tablet-alt"></i></button>
                <button class="mobile responsive" data-val="3"><i class="fas fa-mobile-alt"></i></button>
            </div>
            <div class="projectLinks">
                <a href="https://github.com/Dustinbradley45/brokenPhone" target="_blank">GitHub</a>
                <a href="https://dustinbradley45.github.io/brokenPhone/" target="_blank">Live</a>
            </div>     `);

            const screenWidth = $(window).width();
            $(".innerProjectScrollContainer").scrollLeft(screenWidth);


        } else if ($(this).data('id') === 3) {
            $(".scrollContainer").html(`
            <button class="goBack"><i class="fas fa-chevron-down"></i></button>
            <object data="https://restdecider2.firebaseapp.com/" type="text/html"></object>
             <div class="responsiveIcons">
                <button class="desktop  responsive" data-val="1"><i class="fas fa-desktop"></i></button>
                <button class="tablet responsive" data-val="2"><i class="fas fa-tablet-alt"></i></button>
                <button class="mobile responsive" data-val="3"><i class="fas fa-mobile-alt"></i></button>
            </div>
            <div class="projectLinks">
                <a href="https://github.com/Dustinbradley45/dineWithMe" target="_blank">GitHub</a>
                <a href="https://restdecider2.firebaseapp.com/"
                target="_blank"> Live </a>
            </div>    `);

            const screenWidth = $(window).width();
            $(".innerProjectScrollContainer").scrollLeft(screenWidth);

        }
    })

    $(".scrollContainer").on("click", ".desktop", () => {
        $("object").removeClass("addTablet");
        $("object").removeClass("addMobile")
        $("object").addClass("addDesktop");

    });

    $(".scrollContainer").on("click", ".mobile", () => {
        $("object").removeClass("addTablet");
        $("object").removeClass("addDesktop")
        $("object").addClass("addMobile");
    });

    $(".scrollContainer").on("click", ".tablet", () => {
        $("object").removeClass("addMobile");
        $("object").removeClass("addDesktop")
        $("object").addClass("addTablet");
    });



    const newScreenWidth = $(window).width();
    $(".scrollContainer").on("click", ".goBack", () => {
        console.log("hello world")
        $(".innerProjectScrollContainer").scrollLeft(-newScreenWidth);
        $(".goBack").animate({
            "opacity": '0'
        })

    }

        
    )
}

