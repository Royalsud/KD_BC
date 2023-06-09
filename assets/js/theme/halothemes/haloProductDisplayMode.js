import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */

export default function() {

   const product_class = ".product";

   // Product List
   $('#list-view').on('click', function() { 
      if (!$(this).hasClass('current-view')) {
         // show loading
         setTimeout(function(){ 
            $('#list-view').addClass('current-view');
            $('#grid-view').removeClass('current-view');
            $('#product-listing-container .productListing').removeClass('productGrid').addClass('productList');
         }, 300);
      }
   });

   // Product Grid
   $('#grid-view').on('click', function() { 
      if (!$(this).hasClass('current-view')) {
         setTimeout(function(){ 
            $('#grid-view').addClass('current-view');
            $('#list-view').removeClass('current-view');
            $('#product-listing-container .productListing').removeClass('productList').addClass('productGrid');
         }, 300);
      }
   });
}
