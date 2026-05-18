# SendSMS for WooCommerce — *archived legacy repository*

> **This repository is archived.** Active development has moved to the new repository at
> **[sendSMS-RO/sendsms-for-woocommerce](https://github.com/sendSMS-RO/sendsms-for-woocommerce)**.

The plugin previously distributed from here as `sendsms-woocommerce` is being relaunched on the WordPress.org plugin directory under its new slug **`sendsms-for-woocommerce`**. The new repository mirrors the same codebase with version numbering reset to 1.0.0 for the WordPress.org launch.

---

## Final legacy release

If you currently have this plugin installed and want the last legacy build (1.4.3, the security-hardened final release of the `1.4.x` series):

* **[Download v1.4.3](https://github.com/sendSMS-RO/sendsms-woocommerce-5.5.1/releases/tag/v1.4.3)** — recommended for all existing installs as a security update.

## Switching to the new distribution

Once `sendsms-for-woocommerce` is approved on WordPress.org, the recommended path will be:

1. Install **SendSMS for WooCommerce** from the WordPress.org plugin directory (or from the [new GitHub repository](https://github.com/sendSMS-RO/sendsms-for-woocommerce)).
2. Deactivate and remove the old plugin folder (`sendsms-woocommerce-5.5.1-1.4.1/` or whichever directory you originally extracted into `wp-content/plugins/`).
3. Activate the new plugin. Your existing settings will not auto-migrate; reconfigure via **SendSMS → Configuration**. Your SMS history will remain in the database since both plugins use the same `wp_wcsendsms_history` table.

## Issues and support

New issues should be opened on the new repository:
<https://github.com/sendSMS-RO/sendsms-for-woocommerce/issues>.

Existing issues here will not be actively triaged.
