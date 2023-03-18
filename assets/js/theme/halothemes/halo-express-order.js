import $ from 'jquery';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';
import ProductDetails from '../common/product-details';
import { defaultModal } from '../global/modal';

// We want to ensure that the events are bound to a single instance of the product details component
let productSingleton = null;

export default function () {
    utils.hooks.on('product-option-change', (event, changedOption) => {
        productOptionsChanged(event, changedOption);
    });

    const modal = defaultModal();

    const $ajaxcart = $("a.add-to-cart");
    const $ajaxcart_option = $("a.add-to-cart-option");
    const $ajaxcart_all = $("#add-all-to-cart");
    const $content = $('<div class="modal-body quickView"><div class="row"></div></div>');
    var j, count = 0, qty = 0;
    var list_product = "", list_outofstock = [];


    $(document).ready(function () {

        callProductOption();
        listenQuantityChange();

        $(document).on('click', '#add-all-to-cart', function (event) {
            list_product = "";
            var pro = {}
            j = 0;
            qty = 0;
            count = 0;
            $('.data-product-qty').each(function (i) {
                if (parseInt($(this).val()) > 0) {
                    pro[j] = { "action": "add", "fastcart": "1", "product_id": $(this).prop("id").replace("data-product-qty-", ""), "qty[]": parseInt($(this).val(), 10) };
                    j++;
                    //qty += parseInt($(this).val(), 10);
                }
            });
            if (j == 0) {
                alert("Please enter a valid quantity");
            }
            else {
                var check = true;
                for (var i = 0; i < j; i++) {
                    check = checkBeforeAdd(pro[i]);
                    if (check != true) {
                        alert("Please select an option");
                        break;
                    }
                }
                //add to cart
                if (check == true) {
                    //modal.open();


                    $.each(pro, function (i) {
                        addToCart(pro[i], false);
                    });

                }
            }
        });

        $(document).on('click', 'a.add-to-cart', function (event) {
            const product_id = $(event.currentTarget).data('productId');
            const $el = $(`#data-product-qty-${product_id}`);
            const oldQty = parseInt($el.val(), 10);
            qty = 0;
            event.preventDefault();
            if (oldQty > 0) {
                var data = { "action": "add", "fastcart": "1" }
                data["product_id"] = product_id;
                data["qty[]"] = oldQty;
                qty = oldQty;
                list_product = "";
                checkBeforeAdd(data);
                addToCart(data, true);
            }
            else {
                alert("Please enter a valid quantity");
            }
        });

        $(document).on('click', 'a.add-to-cart-option', function (event) {
            const product_id = $(event.currentTarget).data('productId');
            const $el = $(`#data-product-qty-${product_id}`);
            const oldQty = parseInt($el.val(), 10);
            const $attributes = $(`.data-product-option-${product_id}`);
            qty = 0;
            event.preventDefault();
            var check = true;
            list_product = "";
            if (oldQty > 0) {
                var data = { "action": "add", "fastcart": "1" }
                data["product_id"] = product_id;
                data["qty[]"] = oldQty;
                check = checkBeforeAdd(data);
                if (check == true) {
                    qty = oldQty;

                    addToCart(data, true);
                }
                else {
                    alert("Please select an option");
                }
            }
            else {
                alert("Please enter a valid quantity");
            }
        });
    });

    function checkBeforeAdd(data) {

        const product_id = data.product_id;
        const $el = $(`#data-product-qty-${product_id}`);
        const oldQty = parseInt($el.val(), 10);
        const $attributes = $(`.data-product-option-${product_id}`);
        var check = true;

        var product_name = $el.parents("li").find("img").attr("alt");
        var product_price = $el.parents("li").find(".price-section [data-product-price-without-tax], .price-section [data-product-price-with-tax]").text();
        list_product += '<li data-product-id ="' + product_id + '" class="previewCartItem"><div class="previewCartItem-image"><a href="' + $el.parents("li").find("a").attr("href") + '">\
		<img src="'+ $el.parents("li").find("img").attr("src") + '" ></a></div>\
		<div class="previewCartItem-content"><h4 class="previewCartItem-name"><a href="'+ $el.parents("li").find("a").attr("href") + '">' + product_name + '</a></h4><div class="productView-price"><span>' + oldQty + ' x</span> ' + product_price + '</div><dl class="productView-info">';



        $attributes.find('input:text, input:password, input:file, select, textarea').each(function () {

            if (!$(this).prop('required')) {
                data[$(this).attr("name")] = $(this).val();
            } else {
                if ($(this).val()) {
                    data[$(this).attr("name")] = $(this).val();
                    list_product += '<dt class="productView-info-name">' + $(this).attr("data-name") + ':</dt><dd class="productView-info-value">' + $(this).find('option:selected').attr("data-title") + '</dd>';
                }
                else {

                    $(this).focus();
                    check = false;
                }
            }
        });

        var att = "";
        $attributes.find('input:radio, input:checkbox').each(function () {
            if (att != $(this).attr("name")) {

                att = $(this).attr("name");
                if (!$(this).prop('required')) {
                    if ($(this).attr("type") == "checkbox") {
                        if ($("[name='" + att + "']:checked").val()) { // check if the checkbox is checked
                            data[$(this).attr("name")] = $("[name='" + att + "']:checked").val();
                            list_product += '<dt class="productView-info-name">' + $(this).attr("data-name") + ':</dt><dd class="productView-info-value">' + $(this).find('input:checked').attr("data-title") + '</dd>';
                        }
                    }
                    if ($(this).attr("type") == "radio") {
                        if ($("[name='" + att + "']:checked").val()) { // check if the radio is checked
                            data[$(this).attr("name")] = $("[name='" + att + "']:checked").val();
                            //list_product += '<dt class="productView-info-name">'+$(this).attr("name")+':</dt><dd class="productView-info-value">'+$(this).val()+'</dd>';
                        }
                    }
                }
                else {
                    if ($(this).attr("type") == "checkbox") {
                        if ($("[name='" + att + "']:checked").val()) { // check if the checkbox is checked
                            data[$(this).attr("name")] = $("[name='" + att + "']:checked").val();
                        }
                        else {
                            check = false;
                        }
                    }
                    if ($(this).attr("type") == "radio") {
                        if ($("[name='" + att + "']:checked").val()) { // check if the radio is checked
                            data[$(this).attr("name")] = $("[name='" + att + "']:checked").val();
                        }
                        else {
                            check = false;
                        }
                    }
                }
                var title = $("[name='" + att + "']:checked").next().children().text();
                if (title == "") {
                    title = $("[name='" + att + "']:checked").next().children().first().attr('title');
                }
                if (title != undefined) {
                    list_product += '<dt class="productView-info-name">' + $(this).parent().parent().attr('data-name') + '</dt><dd class="productView-info-value">' + title + '</dd>';
                }

            }
        });
        list_product += '</dl></div></li>';

        return check;
    }

    function addToCart(data, add_single_to_cart) {
        const product_id = data.product_id;
        const $el = $(`#data-product-qty-${product_id}`);

        if (add_single_to_cart == true) {

            var form_data = new FormData();
            for (var key in data) {
                form_data.append(key, data[key]);
            }

            // Add item to cart
            utils.api.cart.itemAdd(form_data, (err, response) => {
                const errorMessage = err || response.data.error;

                // Guard statement
                if (errorMessage) {
                    // Strip the HTML from the error message
                    const tmp = document.createElement('DIV');
                    tmp.innerHTML = errorMessage;
                    return alert(tmp.textContent || tmp.innerText);
                }
                modal.open();
                count++;
                $el.val(0);

                getCart(qty, list_product);
            });

        }
        else {



            $.ajax({
                type: 'POST',
                async: false,
                url: "/remote/v1/cart/add",
                data: data,
                dataType: 'html',
                error: function (xhr, textStatus, errorThrown) {
                    console.log('function : addToCart() ' + (errorThrown ? errorThrown : xhr.status));
                },
                beforeSend: function () {
                    //modal.open({ size: 'small' });

                },
                success: function (response, textStatus, xhr) {

                    var obj = JSON.parse(response);

                    if (obj.data.error != undefined) {
                        for (var key in data) {
                            if (key === 'product_id') {
                                list_outofstock.push(data[key]);
                            }
                        }

                        alert(obj.data.error);
                        modal.close();
                    }
                    else if (obj.data.cart_item.id) {
                        modal.open();

                        count++;
                        $el.val(0);
                        for (var key in data) {
                            if (key === 'qty[]')
                                qty = qty + data[key];
                        }

                        //if(count == j ){
                        getCart(qty, list_product);
                        //}	        		
                    }
                    else {
                        console.log(response);
                    }

                },
                complete: function () {

                }
            });
        }

    }

    function getCart(qty, list_product) {

        const options = {
            template: {
                content: 'cart/content',
                pageTitle: 'cart/page-title',
                totals: 'cart/totals',
            },
        };

        utils.api.cart.getContent(options, (err, response) => {
            var $cartContent = response.content;

            const quantity = $(response.content).attr('data-cart-quantity') || 0;

            $('body').trigger('cart-quantity-update', quantity);
            //$(".cart-quantity").html(quantity);

            $content.html("");
            $content.append('<div class="modal-express-order"><h1 class="modal-header-title">' + qty + ' product has been added to your cart</h1><div class="previewCartAction haloExpressCartAdded"><div class="previewCartAction-viewCart navUser"><ul class="previewCartList">' + list_product + '</ul></div><div class="previewCartAction-checkout"><a href="/checkout.php" class="button button--primary btn-checkout btn-lg">Proceed to checkout</a><ul class="cart-totals"><li class="cart-total">' + $(response.totals).find("li:first-child").html() + '</li><li class="cart-total">' + $(response.totals).find("li:last-child").html() + '</li></ul><h3>' + $(response.pageTitle).text() + '</h3><a href="#" class="button btn-alt" id="modal_close" onclick="var m = document.getElementsByClassName(\'modal-close\');m[0].click();">Continue Shopping</a><a href="/cart.php" class="button button--primary btn-alt">View Cart</a></div></div></div>');
            for (var i = 0; i <= list_outofstock.length; i++) {
                $('[data-product-id="' + list_outofstock[i] + '"]', $content).remove();
            }
            modal.updateContent($content);
        });

    }

    function callProductOption() {

        $.each($ajaxcart_option, function (key, value) {

            var productId = $(this).data('productId');

            if (productId != undefined) {
                utils.api.product.getById(productId, { template: 'products/quick-view' }, (err, response) => {
                    var data_option = $('[data-product-option-change]', response).html();
                    data_option = data_option.replace(new RegExp(escapeRegExp("attribute_"), 'g'), "attribute_" + productId + "_");
                    data_option = data_option.replace(new RegExp(escapeRegExp("attribute_" + productId + "_value_images"), 'g'), "attribute_value_images");
                    $(".data-product-option-" + productId).append("<div data-product-option-change>" + data_option + "</div>");

                    utils.api.productAttributes.optionChange(productId, "action=add&product_id=" + productId, (err, response) => {
                        const attributesData = response.data || {};

                        updateProductAttributes(attributesData, $(".data-product-option-" + productId));
                        //this.updateView(attributesData);
                    });




                });
            }
        });


    }

    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    /**
     *
     * Handle product options changes
     *
     */
    function productOptionsChanged(event, changedOption) {
        const $changedOption = $(changedOption);
        const $scope = $changedOption.parents("li");
        const productId = $scope.find("div.last-addtocart-box").children("a").attr("data-product-id");
        if (productId == undefined) {
            return;
        }

        // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
        if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
            return;
        }
        var data = { "action": "add" }
        data["product_id"] = productId;

        $scope.find('input:text, input:password, input:file, select, textarea').each(function () {

            data[$(this).attr("name")] = $(this).val();

        });

        var att = "";
        $scope.find('input:radio, input:checkbox').each(function () {
            if (att != $(this).attr("name")) {

                att = $(this).attr("name");

                if ($(this).attr("name") != "products[]") {

                    if ($(this).attr("type") == "checkbox") {
                        if ($("[name='" + att + "']:checked").val()) { // check if the checkbox is checked
                            data[$(this).attr("name")] = $("[name='" + att + "']:checked").val();
                        }

                    }
                    if ($(this).attr("type") == "radio") {
                        if ($("[name='" + att + "']:checked").val()) { // check if the radio is checked
                            data[$(this).attr("name")] = $("[name='" + att + "']:checked").val();
                        }

                    }
                }

            }

        });

        data["qty[]"] = $("#data-product-qty-" + productId).val();

        utils.api.productAttributes.optionChange(productId, data, (err, response) => {
            const productAttributesData = response.data || {};

            updateProductAttributes(productAttributesData, $scope);
            updateView(productAttributesData, $scope);
        });
    }

    /**
     * Hide or mark as unavailable out of stock attributes if enabled
     * @param  {Object} data Product attribute data
     */
    function updateProductAttributes(data, $scope) {
        const behavior = data.out_of_stock_behavior;
        const inStockIds = data.in_stock_attributes;
        const outOfStockMessage = `(${data.out_of_stock_message})`;

        showProductImage(data.image, $scope);

        if (behavior !== 'hide_option' && behavior !== 'label_option') {
            return;
        }

        $('[data-product-attribute-value]', $scope).each((i, attribute) => {
            const $attribute = $(attribute);
            const attrId = parseInt($attribute.data('product-attribute-value'), 10);


            if (inStockIds.indexOf(attrId) !== -1) {
                enableAttribute($attribute, behavior, outOfStockMessage);
            } else {
                disableAttribute($attribute, behavior, outOfStockMessage);
            }
        });
    }

    function disableAttribute($attribute, behavior, outOfStockMessage) {
        if (getAttributeType($attribute) === 'set-select') {
            return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.hide();
        } else {
            $attribute.addClass('unavailable');
        }
    }

    function getAttributeType($attribute) {
        const $parent = $attribute.closest('[data-product-attribute]');

        return $parent ? $parent.data('product-attribute') : null;
    }

    function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        const $select = $attribute.parent();

        if (behavior === 'hide_option') {
            $attribute.toggleOption(false);
            // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
            if ($attribute.parent().val() === $attribute.attr('value')) {
                $select[0].selectedIndex = 0;
            }
        } else {
            $attribute.attr('disabled', 'disabled');
            $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
        }
    }

    function enableAttribute($attribute, behavior, outOfStockMessage) {
        if (getAttributeType($attribute) === 'set-select') {
            return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.show();
        } else {
            $attribute.removeClass('unavailable');
        }
    }

    function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        if (behavior === 'hide_option') {
            $attribute.toggleOption(true);
        } else {
            $attribute.removeAttr('disabled');
            $attribute.html($attribute.html().replace(outOfStockMessage, ''));
        }
    }

    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    function updateView(data, $scope) {
        const viewModel = getViewModel($scope);

        //this.showMessageBox(data.stock_message || data.purchasing_message);

        if ((typeof data.price === "object") && (data.price !== null)) {
            updatePriceView(viewModel, data.price);
        }

        // Set variation_id if it exists for adding to wishlist
        if (data.variantId) {
            viewModel.$wishlistVariation.val(data.variantId);
        }

        // If SKU is available
        if (data.sku) {
            viewModel.$sku.text(data.sku);
        }

        // if stock view is on (CP settings)
        if (viewModel.stock.$container.length && _.isNumber(data.stock)) {
            // if the stock container is hidden, show
            viewModel.stock.$container.removeClass('u-hiddenVisually');

            viewModel.stock.$input.text(data.stock);
        }

        if (!data.purchasable || !data.instock) {
            viewModel.$addToCart.prop('disabled', true);
            viewModel.$increments.prop('disabled', true);
        } else {
            viewModel.$addToCart.prop('disabled', false);
            viewModel.$increments.prop('disabled', false);
        }
    }

    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    function updatePriceView(viewModel, price) {
        if (price.with_tax) {
            viewModel.$priceWithTax.html(price.with_tax.formatted);
        }

        if (price.without_tax) {
            viewModel.$priceWithoutTax.html(price.without_tax.formatted);
        }

        if (price.rrp_with_tax) {
            viewModel.$rrpWithTax.html(price.rrp_with_tax.formatted);
        }

        if (price.rrp_without_tax) {
            viewModel.$rrpWithoutTax.html(price.rrp_without_tax.formatted);
        }
    }

    /**
     * Since $productView can be dynamically inserted using render_with,
     * We have to retrieve the respective elements
     *
     * @param $scope
     */
    function getViewModel($scope) {
        return {
            $priceWithTax: $('[data-product-price-with-tax]', $scope),
            $rrpWithTax: $('[data-product-rrp-with-tax]', $scope),
            $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
            $rrpWithoutTax: $('[data-product-rrp-without-tax]', $scope),
            $weight: $('.productView-info [data-product-weight]', $scope),
            $increments: $('.form-field--increments :input', $scope),
            $addToCart: $('#form-action-addToCart', $scope),
            $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
            stock: {
                $container: $('.form-field--stock', $scope),
                $input: $('[data-product-stock]', $scope),
            },
            $sku: $('[data-product-sku]', $scope),
            quantity: {
                $text: $('.form-input--incrementTotal', $scope),
                $input: $('[name=data-product-qty]', $scope),
            },

        };
    }


    function showProductImage(image, $scope) {
        if ((typeof image === "object") && (image !== null)) {
            //alert(image.data);

        }
    }

    /**
     *
     * Handle action when the shopper clicks on + / - for quantity
     *
     */
    function listenQuantityChange() {

        $(document).on('click', '[data-quantity-change] button', function (event) {

            event.preventDefault();
            const $target = $(event.currentTarget);
            const $scope = $target.parents("li");
            const viewModel = getViewModel($scope);
            const $input = viewModel.quantity.$input;
            const quantityMin = parseInt($input.data('quantity-min'), 10);
            const quantityMax = parseInt($input.data('quantity-max'), 10);

            let qty = parseInt($input.val(), 10);

            // If action is incrementing
            if ($target.data('action') === 'inc') {
                // If quantity max option is set
                if (quantityMax > 0) {
                    // Check quantity does not exceed max
                    if ((qty + 1) <= quantityMax) {
                        qty++;
                    }
                } else {
                    qty++;
                }
            } else if (qty > 0) {
                // If quantity min option is set
                if (quantityMin > 0) {
                    // Check quantity does not fall below min
                    if ((qty - 1) >= quantityMin) {
                        qty--;
                    }
                } else {
                    qty--;
                }
            }

            // update hidden input
            viewModel.quantity.$input.val(qty);
            // update text
            viewModel.quantity.$text.text(qty);
        });
    }
}
