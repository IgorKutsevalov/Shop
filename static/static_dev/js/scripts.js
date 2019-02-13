$(document).ready(function() {
    var form = $('#form_buying_product');
    console.log(form);

    function basketUpdating(product_id, nmb, is_delete){
        var data = {};
        data.product_id = product_id;
        data.nmb = nmb;
        var csrf_token = $('#form_buying_product [name="csrfmiddlewaretoken"]').val();
        data["csrfmiddlewaretoken"] = csrf_token;

        if (is_delete){
            data["is_delete"] = true;
        }

        var url = form.attr("action");

        console.log(data);
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: true,
            success: function (data) {
                console.log("OK");
                console.log(data.products_total_nmb);
                if (data.products_total_nmb || data.products_total_nmb == false){
                    $('#basket_total_nmb').text("("+data.products_total_nmb+")");
                    console.log(data.products);
                    $('.basket-items ul').html("");
                    $.each(data.products, function (k, v) {
                        $('.basket-items ul').append('<li>' + v.name + ' ' + v.nmb + ' шт. ' + v.total_price + ' UAH ' + '<a class="delete-item" href="" data-product_id="'+v.id+'">x</a>' + '</li>');
                    });
                }

            },
            error: function () {
                console.log("error")
            }
        })

    }

    form.on('submit', function(e) {
        e.preventDefault();
        console.log('123');
        var nmb = $('#number').val();
        console.log(nmb);
        var submit_btn = $('#submit_btn');
        var product_id = submit_btn.data("product_id");
        var name = submit_btn.data("name");
        var price = submit_btn.data("price");
        console.log(product_id);
        console.log(name);

        basketUpdating(product_id, nmb, is_delete=false)

    });

    function showingBasket(){
        $('.basket-items').toggleClass('hidden');
    }

    // $('.basket-container').on('click', function (e) {
    //     e.preventDefault();
    //     showingBasket()
    // });

    $('.basket-container').mouseover(function () {
        showingBasket()
    });

    $('.basket-container').mouseout(function (e) {
        // e.preventDefault();
        showingBasket()
    });

    // $('.basket-container').mouseout(function () {
    //     $('.basket-items').addClass('hidden');
    // }

    $(document).on('click', '.delete-item', function (e) {
        e.preventDefault();
        product_id = $(this).data("product_id");
        nmb = 0;
        basketUpdating(product_id, nmb, is_delete=true)
    });

    function calculatingBasketAmount() {
        var total_order_amount = 0;
        $('.total-product-in-basket-amount').each(function () {
            total_order_amount += parseFloat($(this).text());
        });
        $('#total_order_amount').text(total_order_amount.toFixed(2));
    }

    $(document).on('change', ".product-in-basket-nmb", function () {
        var current_nmb = $(this).val();
        var current_tr = $(this).closest('tr');
        var current_price = parseFloat(current_tr.find('.product-price').text()).toFixed(2);
        var total_amount = parseFloat(current_nmb*current_price).toFixed(2);
        current_tr.find('.total-product-in-basket-amount').text(total_amount);

        calculatingBasketAmount();
    });

    calculatingBasketAmount();
    });

    $(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.toTop').fadeIn();}
            else {
                $('.toTop').fadeOut();
            }
    });
    $('.toTop').click(function() {
        $('body,html').animate({scrollTop:0},900);
    });
    });

    // $(document).ready(function(){
    //    $('a[href*=#]').bind("click", function(e){
    //         var anchor = $(this);
    //         $('html, body').stop().animate({
    //         scrollTop: $(anchor.attr('href')).offset().top
    //     }, 1000);
    //     e.preventDefault();
    //     });
    // return false;
    // });

    $(function(){
        $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({scrollTop: targetOffset}, 800);//скорость прокрутки
                    return false;
                }
            }
        });
    });

    $(document).ready(function(){
      $('.slider').bxSlider();
    });

    $('.parallax-window').parallax();