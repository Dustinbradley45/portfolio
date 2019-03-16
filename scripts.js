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
            imageDesktop: "I am an image",
            imageIpad: "I am an ipad size Image",
            imagePhone: "I am an iphone size image",
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
            liveLink: "Link Live",
            gitHub: ""
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
               
                console.log(aboutPosition,educationPosition)
                $('.lineTwo').addClass('pageLineActive');
            }
            if (y >= educationPosition  && y < portfolioPosition) {
              console.log(educationPosition, portfolioPosition, 'top')
               console.log(y, 'where we are on scroll')
                
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


    
myPortfolio.appendProjectOne = () => {
    $(".leftProjectContainer h2").html(`<h2>${myPortfolio.projectInfo[0].title}</h2>`);

    $(".responsiveIcons .desktop").addClass("activeProject");

    $(".leftProjectContainer p").html(
        `<p>${myPortfolio.projectInfo[0].description}</p>
            <div class="languagesInvolved">
                <p>${myPortfolio.projectInfo[0].languages}</p>
            </div>
            <a href="${myPortfolio.projectInfo[0].liveLink}" target="_blank">Live</a>
             <a href="${myPortfolio.projectInfo[0].gitHub}" target="_blank">GitHub</a>
            `);
}
    // myPortfolio.getDesktop = $(".desktop").on('click', function () {
    //     $(".responsiveIcons .desktop").addClass("activeProject");
    //     $(".responsiveIcons .mobile, .responsiveIcons .tablet").removeClass("activeProject");
     
         
        // if ($(".responsiveIcons .desktop").hasClass("activeProject") === true) {
        //     //  console.log($(".responsiveIcons .desktop").hasClass("activeProject") === true)
        //     $(".mainProjectSpace").html(
        //         `<img src="${myPortfolio.projectInfo[0].imageDesktop}" alt=""/>
        //               `)
        
         
    
        // } else if ($(".responsiveIcons .tablet").hasClass("activeProject") === true) {
        //     $(".mainProjectSpace").html(
        //         `<img src="${myPortfolio.projectInfo[0].imageTablet}" alt=""/>
             
        //         `)
        // } else {
        //     $(".mainProjectSpace").html(
        //         `<img src="${myPortfolio.projectInfo[0].imageTablet}" alt=""/>
        //         `)
    
        // }

    // })
        myPortfolio.appendProjectTwo = () => {
            $(".leftProjectContainer h2").html(`<h2>${myPortfolio.projectInfo[1].title}</h2>`);
            $(".leftProjectContainer h2:after").css({
                'opacity': 0
            });

            $(".responsiveIcons .desktop").addClass("activeProject");


            $(".leftProjectContainer p").html(
                `<p>${myPortfolio.projectInfo[1].description}</p>
            <div class="languagesInvolved">
                <p>${myPortfolio.projectInfo[1].languages}</p>
            </div>
            `);
    
            if ($(".responsiveIcons .desktop").hasClass("activeProject") === true) {
                $(".mainProjectSpace").html(
                    `<img src="${myPortfolio.projectInfo[1].imageDesktop}" alt=""/>
                `)

            } else if ($(".responsiveIcons .tablet").hasClass("activeProject") === true) {
                console.log($(".responsiveIcons .desktop").hasClass("activeProject") === true)

                $(".mainProjectSpace").html(
                    `<img src="${myPortfolio.projectInfo[1].imageTablet}" alt=""/>
                `)
            } else {
                $(".mainProjectSpace").html(
                    `<img src="${myPortfolio.projectInfo[1].imageMobile}" alt=""/>
                `)
            }


        }

        myPortfolio.appendProjectThree = () => {
            $(".leftProjectContainer h2").html(`<h2>${myPortfolio.projectInfo[2].title}</h2>`);
            $(".leftProjectContainer h2:after").css({
                'opacity': 0
            });

            $(".responsiveIcons .desktop").addClass("activeProject");
    
            $(".leftProjectContainer p").html(
                `<p>${myPortfolio.projectInfo[2].description}</p>
            <div class="languagesInvolved">
                <p>${myPortfolio.projectInfo[2].languages}</p>
            </div>
            `);
            $(".mainProjectSpace").html(
                `<a href="${myPortfolio.projectInfo[2].liveLink}" target="_blank">Live</a>
             <a href="${myPortfolio.projectInfo[2].gitHub}" target="_blank">GitHub</a>`);
    
            if ($(".responsiveIcons .desktop").hasClass("activeProject") === true) {
                console.log($(".responsiveIcons .desktop").hasClass("activeProject") === true)
                $(".mainProjectSpace").html(
                    `<img src="${myPortfolio.projectInfo[1].imageDesktop}" alt=""/>
                `)

            } else if ($(".responsiveIcons .tablet").hasClass("activeProject") === true) {
                $(".mainProjectSpace").html(
                    `<img src="${myPortfolio.projectInfo[1].imageTablet}" alt=""/>
                `)
            } else {
                $(".mainProjectSpace").html(
                    `<img src="${myPortfolio.projectInfo[1].imageMobile}" alt=""/>
                `)
            }
        }






        //   FUNCTION INITIAL
myPortfolio.init = () => {
    //  ANIMATE ON SCROLL
    AOS.init();
           
    // CHANGE LINES ON SIDE
    myPortfolio.changeLine()

    // DEFAULT SHOW PROJECT ONE
    myPortfolio.appendProjectOne();
    $(".mainProjectSpace").html(
        `<img src="${myPortfolio.projectInfo[0].imageDesktop}" alt=""/>
                `)
    $(".responsiveIcons .desktop").addClass("activeProject")

    // CHECK TO SEE WHICH HAS A CLASS
     
    // myPortfolio.allProjects = () => {
    //     myPortfolio.appendProjectOne();
    //     myPortfolio.appendProjectTwo();
    //     myPortfolio.appendProjectThree();
    // }


    // SCROLL FEATURE
    $('.scrollDown').on("click", function () {
        window.scrollBy({
            top: 821,
            behavior: 'smooth'
        });

        $(this).animate({
            "opacity": 0
        });
    });


    // $(".responsive").on("click", () => {
    //     if ($(this).hasClass('activeProject') === true ) {
    //         console.log(true);
    //         $(".responsiveIcons .tablet").addClass("activeProject");
    //         $(".responsiveIcons .mobile, .responsiveIcons .desktop").removeClass("activeProject");
    //         console.log("this is tablet")
    
    //         $(".mainProjectSpace").html(
    //             `<img src="${myPortfolio.projectInfo[0].imageTablet}" alt=""/>
    //                   `)
    //     }

    // })


    //  CHANGE PROJECT
    $(".projectChange").on("click", function () {
        if ($(this).data('id') === 1) {
            myPortfolio.appendProjectOne();

            $(".responsiveIcons button").on("click", () => {
                if ($(this).data('id') === 1) {
                
                    $(".responsiveIcons .desktop").addClass("activeProject");
                    $(".responsiveIcons .mobile, .responsiveIcons .tablet").removeClass("activeProject");
                    console.log("this is desktop")
                    $(".mainProjectSpace").html(
                        `<img src="${myPortfolio.projectInfo[0].imageDesktop}" alt=""/>
                        `)
        
                } else if ($(this).data("id") === 2) {
                    $(".responsiveIcons .tablet").addClass("activeProject");
                    $(".responsiveIcons .mobile, .responsiveIcons .desktop").removeClass("activeProject");
                    console.log("this is tablet")

                    $(".mainProjectSpace").html(
                        `<img src="${myPortfolio.projectInfo[0].imageTablet}" alt=""/>
                    `)

                } else {
                    console.log("this is mobile")
                    $(".responsiveIcons .mobile").addClass("activeProject");
                    $(".responsiveIcons .desktop, .responsiveIcons .tablet").removeClass("activeProject");

                    $(".mainProjectSpace").html(
                        `<img src="${myPortfolio.projectInfo[0].imageMobile}" alt=""/>
                    `)
               
                }
            })
        } else if ($(this).data('id') === 2) {
            myPortfolio.appendProjectTwo();
        } else if ($(this).data('id') === 3) {
            myPortfolio.appendProjectThree();
        }
    })

}



     


