
/*$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1000);
        }
        return false;
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    })

});

Vue.component('blog-post', {
    props: ["blogs"],
    template: `<div uk-grid class="uk-child-width-1-3 blog__items">
                <div v-for="blog in blogs" >
                <img :src="blog.img" alt="Image">
                 <h5>{{blog.title}}</h5>
                 <p>{{blog.author}}</p>
                 <img src="img/Layer_12.png" alt="">
                 <p>{{blog.content}}</p>
                 <p><a href="">Read more</a></p>
                 </div>
  </div>`
});

var blog = new Vue({
    el: "#blog",
    data: {
        newImage: '',
        newTitle: '',
        newAuthor:'',
        newPost: '',
        showNewPost: false,
        blogs: [{
            img: 'img/Layer_43.png',
            title: 'Is there hope for the SEO profession?',
            author: 'Post by Lawrence R. Smith',
            content: 'Donec nulla justo, pharetra in nulla in, lacinia pulvinar nunc. Nunc rutrum nisi vel nibh cursus, nec vestibulum orci feugiat. Nunc in luctus lacus. Integer eget dui nisi. Integer mauris lacus.'
        }, {
            img: 'img/Layer_44.png',
            title: 'Is there hope for the SEO profession?',
            author: 'Post by Lawrence R. Smith',
            content: 'Donec nulla justo, pharetra in nulla in, lacinia pulvinar nunc. Nunc rutrum nisi vel nibh cursus, nec vestibulum orci feugiat. Nunc in luctus lacus. Integer eget dui nisi. Integer mauris lacus.'
        }, {
            img: 'img/Layer_45.png',
            title: 'Is there hope for the SEO profession?',
            author: 'Post by Lawrence R. Smith',
            content: 'Donec nulla justo, pharetra in nulla in, lacinia pulvinar nunc. Nunc rutrum nisi vel nibh cursus, nec vestibulum orci feugiat. Nunc in luctus lacus. Integer eget dui nisi. Integer mauris lacus.'
        }]
    }


});


































