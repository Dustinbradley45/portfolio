// PORTFOLIO INFO

const myPortfolio = {

}
$(function () {
    myPortfolio.init();
})

$(".desktop").on("click", () => {
    $("object").animate({"width": "100%"})
})

$(".tablet").on('click', () => {
    $("object").animate({ "width": "50%" });
})

$(".mobile").on("click", () => {
    $("object").animate({ "width": "30%" });
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
    $('.scrollDown').on("click", function () {
        const y = $(window).height();
        window.scrollBy({
            top: y,
            behavior: 'smooth'
        });

        $(this).animate({
            "opacity": 0
        });
    });

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
        $(".mainNav").animate({
            "opacity": "0"
        })
        $("body").animate({
            "marginRight": "250px"
        })
        
    }

    myPortfolio.closeNav = () => {
        $(".headerNav").animate({
            "width": "0",
            "opacity": "0",
        })
        $(".mainNav").animate({
            "opacity": "1"
        })
        $("body").animate({
            "marginRight": "0"
        })
    }

    $(".mainNav").on("click", () => {
        myPortfolio.openNav();
        // myPortfolio.closeNav();
    });

    $(".close").on("click", () => {
        myPortfolio.closeNav();
    })
    

   
    
    //  CHANGE PROJECT
    // $(".projectChange").on("click", function () {
    //     if ($(this).data('id') === 1) {
    //         myPortfolio.appendProjectOne();
    //     } else if ($(this).data('id') === 2) {
    //         myPortfolio.appendProjectTwo();
    //     } else if ($(this).data('id') === 3) {
    //         myPortfolio.appendProjectThree();
    //     }
    // })
        

        
}

