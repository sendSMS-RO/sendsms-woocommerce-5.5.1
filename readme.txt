=== SendSMS ===
Contributors: neamtua, catalinsendsms
Tags: sms, woocommerce, sendsms
Requires at least: 4.0
Tested up to: 7.0
Stable tag: 1.4.3
License: GPLv2
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Use our SMS shipping solution to deliver the right information at the right time. Give your customers a superior experience!

== Description ==
Why use SMS Notifications?

Simple - it is the simplest and handy channel through which you can communicate information about their orders. SMS as a communication method has an opening rate of 95% and most are read within 5 seconds of receiving them. It was found to be 3 times more productive than email and by far the easiest to customize. For example, when the order status changes to "Complete" you can include a 10% discount coupon on the next order.

All you have to do is get creative, and your sales will exceed your expectations!

We offer a variety of order statuses for uninterrupted communication with your customers.

Characteristics:

* Easy to install
* Easy to personalize
* Order details: order number, order status
* Extended settings
* Compatible with WooCommerce 3.0+
* All versions of WordPress 4.0+ are supported
* Possibility to send a test SMS to any number (you have the possibility to preview the notification to be sent)
* Ability to selectively send messages to any of the customers who have placed orders on your site.

== Installation ==
This module requires you to have WooCommerce installed.

1. Unzip and upload the wc_sendsms folder to the folder /wp-content/plugins/
2. Activate the plugin in the Plugins section of the WordPress admin
3. Configure the module in the section SendSMS -> Configurare

== Screenshots ==
1. General informations
2. Module configuration
3. SMS History
4. Send campaigns
5. Send test
6. Send SMS within an order

== Changelog ==
= 1.4.3 =
Security hardening and WordPress.org plugin-check compliance pass.
* Order metabox single-send AJAX endpoint now requires both a nonce and the manage_woocommerce capability; previously any logged-in user could trigger SMS sends and write order notes.
* Test-send form now CSRF-protected with wp_nonce_field/check_admin_referer.
* SendSMS account password is no longer rendered back into the settings form value; the stored value is preserved when the password field is submitted empty.
* History page now escapes every column value (defense against stored XSS via SMS content).
* Balance check now uses HTTPS.
* Order metabox is now registered on both the legacy and HPOS Orders screens (and the callback works with either WP_Post or WC_Order).
* Campaign sends now build the CSV body in memory instead of writing to plugin/batches/ — eliminates a concurrency race and a brief web-readable window.
* Multisite db-version check uses the same option storage as install (prevents dbDelta from running on every request on multisite).
* Plugin slug, text domain, and translation file names harmonised under sendsms-for-woocommerce in preparation for WordPress.org submission.
* Replaced the jQuery UI datepicker (loaded over CDN) with the native HTML5 date input.
* Many smaller fixes: proper esc_attr in attribute contexts, prepared SQL in History list, sanitize+wp_unslash on all $_GET/$_POST reads, current_time()/gmdate() instead of date(), HPOS compatibility declared, prefixed previously-non-prefixed globals.
= 1.4.2 =
Tested up to WordPress 7.0.
HPOS-aware opt-out: opt-out checkbox at checkout is now stored and read via the WooCommerce order API, so it correctly blocks SMS on sites using High-Performance Order Storage.
Removed a WooCommerce "doing it wrong" notice triggered on every order status change (direct $order->billing_phone access replaced with get_billing_phone()).
Fixed a PHP 8 deprecation in the {order_date} template variable.
= 1.3.0 =
Fixed several XSS vulnerabilities
= 1.2.8 = 
The plugin is now using batch create and csv files to send campaign messages.
Under campaign, the possibility to send a message with short and unsubscribe link are removed for now.
Under settings, dded a country selector for better phone formating.
= 1.2.7 = 
Fixed a bug when the password contains a space
= 1.2.6 =
Translation
Internalization support
Multisite support
Bug fixes
= 1.2.5 =
Added option to send a non gdpr / short url message
Added price estimation
Added credit balance on configuration page
Bug fixes
= 1.2.2 = 
Possibility to receive message with each new order
Bug fixes
= 1.1.0 =
API update
Possibility to select multiple counties / products
Bug fixes
