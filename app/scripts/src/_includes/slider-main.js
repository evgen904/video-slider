$(function(){

    var startPositionSlider = 0;
    if ($('.owl-carousel-wrap').data('video')=='1') {
        startPositionSlider = 1;
    }

    if (screen.width>640) {
        $('#thumbGalleryDetai').lightGallery({
            selector: '.item',
            thumbWidth:120,
            thumbMargin: 3,
            share: false,
            download: false,
            actualSize: false,
            fullScreen: false,
            toogleThumb: false,
            autoplayControls: false
        });
    }

    var $thumbGalleryDetail = $('#thumbGalleryDetai'),
        $thumbGalleryThumbs = $('#thumbGalleryThumbs'),
        flag = false,
        duration = 300;
        lastSlideClick = 0;

    $thumbGalleryDetail
        .owlCarousel({
            items: 1,
            margin: 10,
            lazyLoad:true,
            nav: true,
            dots: false,
            loop: false,
            smartSpeed: 800,
            startPosition: startPositionSlider,
            //animateOut: 'fadeOut',
            navText: []
        })
        .on('changed.owl.carousel', function(e) {
            if (!flag) {
                flag = true;
                $thumbGalleryThumbs.trigger('to.owl.carousel', [e.item.index-1, duration, true]);
                flag = false;

                var current = e.item.index;
                $thumbGalleryThumbs
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");

                var videoStream = document.querySelector('.player-wrap');
                if (videoStream) {
                    videoStream.children[0].pause();
                }
            }
        });

    $thumbGalleryThumbs
        .on('initialized.owl.carousel', function() {
            $thumbGalleryThumbs.find(".owl-item").eq(startPositionSlider).addClass("current");
        })
        .owlCarousel({
            margin: 2,
            items: 6,
            lazyLoad:true,
            nav: false,
            center: false,
            dots: false,
            startPosition: 0,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    item: 4
                },
                960: {
                    items: 5
                },
                1024: {
                    items: 5
                },
                1280: {
                    items: 6
                }
            }
        })
        .on('click', '.owl-item', function() {
            if ($('#thumbGalleryThumbs .owl-item').length-1 == $(this).index()) {
                lastSlideClick++;
            }
            else {
                lastSlideClick=0;
            }
            if (lastSlideClick>1) {
                $thumbGalleryDetail.trigger('to.owl.carousel', [0, duration, true]);
                lastSlideClick=0;
            }
            else {
                $thumbGalleryDetail.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            }
            var videoStream = document.querySelector('.player-wrap');
            if (videoStream) {
                videoStream.children[0].pause();
            }
        })
        .on('changed.owl.carousel', function(e) {
            if (!flag) {
                flag = true;
                $thumbGalleryDetail.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
                var current = e.item.index;
                $thumbGalleryThumbs
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");
            }
        });

    var videoStreamSlider = document.querySelector('.player-owl-wrapper .player-wrap');
    if (videoStreamSlider) {
        $('.fullscreen-video').on('click',function(){
            $(this).addClass('hidden');
            $('#thumbGalleryDetai').addClass('active');
            videoStreamSlider.children[0].play();
            videoStreamSlider.children[0].querySelector('.vjs-fullscreen-control').click();
        });
        function pauseVideo() {
            videoStreamSlider.children[0].pause();
            $('.fullscreen-video').removeClass('hidden');
            $('#thumbGalleryDetai').removeClass('active');
        }
        videoStreamSlider.children[0].addEventListener('pause', pauseVideo);
    }

});
