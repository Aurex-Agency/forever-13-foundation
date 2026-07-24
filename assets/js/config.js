/* =========================================================================
   Forever 13 Foundation, site configuration.
   This is the ONLY file you need to edit to wire up services.
   ========================================================================= */
window.F13 = {
  /* Donation link. Every Donate button on the site points here once set.
     Example: "https://cash.app/$Forever13" or a Venmo/Zeffy link. */
  DONATE_URL: "",

  /* Cloudinary photo uploads (see assets/img/README.md and PLAN.md).
     CLOUD_NAME comes from the Cloudinary dashboard home.
     UPLOAD_PRESET is the name of an UNSIGNED upload preset. */
  CLOUDINARY_CLOUD_NAME: "eorqlvlw",
  CLOUDINARY_UPLOAD_PRESET: "fl13uploads",

  /* Tag applied to uploaded photos; the gallery lists images with this tag. */
  GALLERY_TAG: "forever13-gallery",

  /* Simple passcode for the hidden add-photos.html page. Share it with the
     family only. It deters strangers; it is not bank-grade security. */
  UPLOAD_PASSCODE: "keepsmiling13",
};
