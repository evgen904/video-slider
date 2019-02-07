$(function(){

    $.fn.lightGallery.modules.Thumbnail.prototype.build = function() {
        var _this = this;
        var thumbList = '';
        var vimeoErrorThumbSize = '';
        var $thumb;
        var html = '<div class="lg-thumb-outer">' +
            '<div class="lg-thumb lg-group">' +
            '</div>' +
            '</div>';

        switch (this.core.s.vimeoThumbSize) {
            case 'thumbnail_large':
                vimeoErrorThumbSize = '640';
                break;
            case 'thumbnail_medium':
                vimeoErrorThumbSize = '200x150';
                break;
            case 'thumbnail_small':
                vimeoErrorThumbSize = '100x75';
        }

        _this.core.$outer.addClass('lg-has-thumb');

        _this.core.$outer.find('.lg').append(html);

        _this.$thumbOuter = _this.core.$outer.find('.lg-thumb-outer');
        _this.thumbOuterWidth = _this.$thumbOuter.width();

        if (_this.core.s.animateThumb) {
            _this.core.$outer.find('.lg-thumb').css({
                width: _this.thumbTotalWidth + 'px',
                position: 'relative'
            });
        }

        if (this.core.s.animateThumb) {
            _this.$thumbOuter.css('height', _this.core.s.thumbContHeight + 'px');
        }

        function getThumb(src, thumb, index) {
            var isVideo = _this.core.isVideo(src, index) || {};
            var thumbImg;
            var vimeoId = '';

            if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                if (isVideo.youtube) {
                    if (_this.core.s.loadYoutubeThumbnail) {
                        thumbImg = '//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.vimeo) {
                    if (_this.core.s.loadVimeoThumbnail) {
                        thumbImg = '//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                        vimeoId = isVideo.vimeo[1];
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.dailymotion) {
                    if (_this.core.s.loadDailymotionThumbnail) {
                        thumbImg = '//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                    } else {
                        thumbImg = thumb;
                    }
                }
            } else {
                thumbImg = thumb;
            }

            thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; height: ' + _this.core.s.thumbHeight + '; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
            vimeoId = '';
        }

        // Thumb-video
        var indexVideo = null;

        if (_this.core.s.dynamic) {
            for (var i = 0; i < _this.core.s.dynamicEl.length; i++) {
                getThumb(_this.core.s.dynamicEl[i].src, _this.core.s.dynamicEl[i].thumb, i);
            }
        } else {
            _this.core.$items.each(function(i) {
                if (!_this.core.s.exThumbImage) {

                    // Thumb-video
                    if ($(this).find('img').attr('src') !== undefined && $(this).find('img').attr('src')!=='') {
                        getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).find('img').attr('src'), i);
                        if ($(this).find('img').data('thumb-video')) {
                            indexVideo = i;
                        }
                    }
                    else {
                        getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).find('img').data('thumb-src'), i);
                    }
                } else {
                    getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).attr(_this.core.s.exThumbImage), i);
                }

            });
        }

        _this.core.$outer.find('.lg-thumb').html(thumbList);

        // Thumb-video
        if (indexVideo !== null) {
            $('.lg-thumb > div').eq(indexVideo).addClass('video');
        }

        $thumb = _this.core.$outer.find('.lg-thumb-item');

        // Load vimeo thumbnails
        $thumb.each(function() {
            var $this = $(this);
            var vimeoVideoId = $this.attr('data-vimeo-id');

            if (vimeoVideoId) {
                $.getJSON('//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=?', {
                    format: 'json'
                }, function(data) {
                    $this.find('img').attr('src', data[0][_this.core.s.vimeoThumbSize]);
                });
            }
        });

        // manage active class for thumbnail
        $thumb.eq(_this.core.index).addClass('active');
        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            $thumb.removeClass('active');
            $thumb.eq(_this.core.index).addClass('active');
        });

        $thumb.on('click.lg touchend.lg', function() {
            var _$this = $(this);
            setTimeout(function() {

                // In IE9 and bellow touch does not support
                // Go to slide if browser does not support css transitions
                if ((_this.thumbClickable && !_this.core.lgBusy) || !_this.core.doCss()) {
                    _this.core.index = _$this.index();
                    _this.core.slide(_this.core.index, false, true, false);
                }
            }, 50);
        });

        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            _this.animateThumb(_this.core.index);
        });

        $(window).on('resize.lg.thumb orientationchange.lg.thumb', function() {
            setTimeout(function() {
                _this.animateThumb(_this.core.index);
                _this.thumbOuterWidth = _this.$thumbOuter.width();
            }, 200);
        });

    };

    function onHasVideo(event, index, src, html) {
        /*jshint validthis:true */
        var _this = this;
        _this.core.$slide.eq(index).find('.lg-video').append(_this.loadVideo(src, 'lg-object', true, index, html));
        if (html) {
            if (_this.core.s.videojs) {
                try {
                    videojs(_this.core.$slide.eq(index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                        if (!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                            this.play();
                        }
                    });
                } catch (e) {
                    console.error('Make sure you have included videojs');
                }
            } else {
                if(!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                    _this.core.$slide.eq(index).find('.lg-html5').get(0).play();
                }
            }
        }
    }

    function onAferAppendSlide(event, index) {
        /*jshint validthis:true */
        var $videoCont = this.core.$slide.eq(index).find('.lg-video-cont');
        if (!$videoCont.hasClass('lg-has-iframe')) {
            $videoCont.css('max-width', this.core.s.videoMaxWidth);
            this.videoLoaded = true;
        }
    }

    function onBeforeSlide(event, prevIndex, index) {
        /*jshint validthis:true */
        var _this = this;

        var $videoSlide = _this.core.$slide.eq(prevIndex);
        var youtubePlayer = $videoSlide.find('.lg-youtube').get(0);
        var vimeoPlayer = $videoSlide.find('.lg-vimeo').get(0);
        var dailymotionPlayer = $videoSlide.find('.lg-dailymotion').get(0);
        var vkPlayer = $videoSlide.find('.lg-vk').get(0);
        var html5Player = $videoSlide.find('.lg-html5').get(0);
        if (youtubePlayer) {
            youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } else if (vimeoPlayer) {
            try {
                $f(vimeoPlayer).api('pause');
            } catch (e) {
                console.error('Make sure you have included froogaloop2 js');
            }
        } else if (dailymotionPlayer) {
            dailymotionPlayer.contentWindow.postMessage('pause', '*');

        } else if (html5Player) {
            if (_this.core.s.videojs) {
                try {
                    videojs(html5Player).pause();
                } catch (e) {
                    console.error('Make sure you have included videojs');
                }
            } else {
                html5Player.pause();
            }
        } if (vkPlayer) {
            $(vkPlayer).attr('src', $(vkPlayer).attr('src').replace('&autoplay', '&noplay'));
        }

        var _src;
        if (_this.core.s.dynamic) {
            _src = _this.core.s.dynamicEl[index].src;
        } else {
            _src = _this.core.$items.eq(index).attr('href') || _this.core.$items.eq(index).attr('data-src');

        }

        var _isVideo = _this.core.isVideo(_src, index) || {};
        if (_isVideo.youtube || _isVideo.vimeo || _isVideo.dailymotion || _isVideo.vk) {
            _this.core.$outer.addClass('lg-hide-download');
        }

    }

    $.fn.lightGallery.modules.video.prototype.init = function() {
        var _this = this;

        // Event triggered when video url found without poster
        _this.core.$el.on('hasVideo.lg.tm', onHasVideo.bind(this));

        // Set max width for video
        _this.core.$el.on('onAferAppendSlide.lg.tm', onAferAppendSlide.bind(this));

        if (_this.core.doCss() && (_this.core.$items.length > 1) && (_this.core.s.enableSwipe || _this.core.s.enableDrag)) {
            _this.core.$el.on('onSlideClick.lg.tm', function() {
                var $el = _this.core.$slide.eq(_this.core.index);
                _this.loadVideoOnclick($el);
            });
        } else {

            // For IE 9 and bellow
            _this.core.$slide.on('click.lg', function() {
                _this.loadVideoOnclick($(this));
            });
        }

        _this.core.$el.on('onBeforeSlide.lg.tm', onBeforeSlide.bind(this));

        _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex) {
            _this.core.$slide.eq(prevIndex).removeClass('lg-video-playing');

            // stream-video-pause
            var videoStream = document.querySelector('.lg-item stream');
            if (videoStream) {
                videoStream.pause();
                videoStream.classList.add('active');
            }

        });

        if (_this.core.s.autoplayFirstVideo) {
            _this.core.$el.on('onAferAppendSlide.lg.tm', function (e, index) {
                if (!_this.core.lGalleryOn) {
                    var $el = _this.core.$slide.eq(index);
                    setTimeout(function () {
                        _this.loadVideoOnclick($el);
                    }, 100);
                }
            });
        }
    };

    $.fn.lightGallery.modules.video.prototype.loadVideoOnclick = function($el){

        var _this = this;
        // check slide has poster
        if ($el.find('.lg-object').hasClass('lg-has-poster') && $el.find('.lg-object').is(':visible')) {

            // check already video element present
            if (!$el.hasClass('lg-has-video')) {

                $el.addClass('lg-video-playing lg-has-video');

                var _src;
                var _html;
                var _loadVideo = function(_src, _html) {

                    $el.find('.lg-video').append(_this.loadVideo(_src, '', false, _this.core.index, _html));

                    if (_html) {
                        if (_this.core.s.videojs) {
                            try {
                                videojs(_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                                    this.play();
                                });
                            } catch (e) {
                                console.error('Make sure you have included videojs');
                            }
                        } else {
                            // stream-video-start
                            if (_this.core.$slide.eq(_this.core.index).find('stream').length) {
                                _this.core.$slide.eq(_this.core.index).find('stream > div:first').remove();
                            }

                            setTimeout(function(){

                                if (_this.core.$slide.eq(_this.core.index).find('stream').length) {

                                    var videoStream = document.querySelector('.lg-current stream');
                                    if (videoStream) {
                                        setTimeout(function(){
                                            videoStream.play();
                                            _this.core.$slide.eq(_this.core.index).find('.fullscreen-video').addClass('hidden');
                                        },400);
                                    }
                                }
                                else {
                                    _this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0).play();
                                }

                            },300);
                            // stream-video-end
                        }
                    }

                };

                if (_this.core.s.dynamic) {

                    _src = _this.core.s.dynamicEl[_this.core.index].src;
                    _html = _this.core.s.dynamicEl[_this.core.index].html;

                    _loadVideo(_src, _html);

                } else {

                    _src = _this.core.$items.eq(_this.core.index).attr('href') || _this.core.$items.eq(_this.core.index).attr('data-src');
                    _html = _this.core.$items.eq(_this.core.index).attr('data-html');

                    _loadVideo(_src, _html);

                }

                var $tempImg = $el.find('.lg-object');
                $el.find('.lg-video').append($tempImg);

                // @todo loading icon for html5 videos also
                // for showing the loading indicator while loading video
                if (!$el.find('.lg-video-object').hasClass('lg-html5')) {
                    $el.removeClass('lg-complete');
                    $el.find('.lg-video-object').on('load.lg error.lg', function() {
                        $el.addClass('lg-complete');
                    });
                }

            } else {

                var youtubePlayer = $el.find('.lg-youtube').get(0);
                var vimeoPlayer = $el.find('.lg-vimeo').get(0);
                var dailymotionPlayer = $el.find('.lg-dailymotion').get(0);
                var html5Player = $el.find('.lg-html5').get(0);
                if (youtubePlayer) {
                    youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                } else if (vimeoPlayer) {
                    try {
                        $f(vimeoPlayer).api('play');
                    } catch (e) {
                        console.error('Make sure you have included froogaloop2 js');
                    }
                } else if (dailymotionPlayer) {
                    dailymotionPlayer.contentWindow.postMessage('play', '*');

                } else if (html5Player) {
                    if (_this.core.s.videojs) {
                        try {
                            videojs(html5Player).play();
                        } catch (e) {
                            console.error('Make sure you have included videojs');
                        }
                    } else {
                        html5Player.play();
                    }
                }

                $el.addClass('lg-video-playing');

            }
        }
    };




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
<<<<<<< HEAD

=======
>>>>>>> 3ed962754ff63011b3f23a4413d7ea4f469491a3
            if ($('#thumbGalleryThumbs .owl-item').length-1 == $(this).index()) {
                lastSlideClick++;
            }
            else {
                lastSlideClick=0;
            }
<<<<<<< HEAD

=======
>>>>>>> 3ed962754ff63011b3f23a4413d7ea4f469491a3
            if (lastSlideClick>1) {
                $thumbGalleryDetail.trigger('to.owl.carousel', [0, duration, true]);
                lastSlideClick=0;
            }
            else {
                $thumbGalleryDetail.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            }
<<<<<<< HEAD

=======
>>>>>>> 3ed962754ff63011b3f23a4413d7ea4f469491a3
            var videoStream = document.querySelector('.player-wrap');
            if (videoStream) {
                videoStream.children[0].pause();
            }
<<<<<<< HEAD

=======
>>>>>>> 3ed962754ff63011b3f23a4413d7ea4f469491a3
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
