
$(function () {

	var PRODUCT_TEMPLATE_RIGHT = $('#product-item-right');
	var PRODUCT_TEMPLATE_LEFT = $('#product-item-left');

    
	function add_item(productName) {
        
		var left_clone = PRODUCT_TEMPLATE_LEFT.clone();
		var right_clone = PRODUCT_TEMPLATE_RIGHT.clone();
        
		left_clone.find('.title').text(productName);
		right_clone.find('#lable').text(productName);
		left_clone.show();
		right_clone.show();
        
		$('.left').append(left_clone);
		$('#still').append(right_clone);
        var amount = 1;
		left_clone.find('.plus').click(function(){
            amount++;
            if (amount > 1)
            	left_clone.find('.minus').css('background', 'red');
            $(this).closest('.column').find('.amount').text(amount);
            right_clone.find('.circular-amount').text(amount);
		});
        
        left_clone.find('.minus').click(function(){
        	if (amount < 2)
        		return;
            amount--;
            if (amount < 2)
            	$(this).css('background', ' #ff8181');
            $(this).closest('.column').find('.amount').text(amount);
            right_clone.find('.circular-amount').text(amount);
		});
        
        left_clone.find('.button-delete').click(function(){
            left_clone.hide();
            right_clone.hide();
        });
        
        left_clone.find('.button-buy').click(function(){
            left_clone.find('.plus').hide();
        	left_clone.find('.minus').hide();
        	left_clone.find('.button-buy').hide();
        	left_clone.find('.button-delete').hide();
        	left_clone.find('.not-buy').show();
        	left_clone.find('.title').html('<s>' + productName + '</s>');
        	right_clone.find('#lable').html('<s>' + productName + '</s>');
            $('#bought').append(right_clone);
        });

        left_clone.find('.not-buy').click(function(){
            left_clone.find('.plus').show();
        	left_clone.find('.minus').show();
        	left_clone.find('.button-buy').show();
        	left_clone.find('.button-delete').show();
        	left_clone.find('.not-buy').hide();
        	right_clone.find('#lable').html(productName);
        	left_clone.find('.title').html(productName);
            $('#still').append(right_clone);
        });
	}

	add_item("Помідори");
	add_item("Морква");
	add_item("Сир");

	$('#add-button').click(function(){
		var productName = $('#product-name').val();
		$('#product-name').val('');
		add_item(productName);
	});

	$(document).keypress(function (e) {
    if (e.which == 13) {
            $("#add-button").click();
    }
});


});