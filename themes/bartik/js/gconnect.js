(function ($) {
  google.load("identitytoolkit", "1", {packages: ["ac"], language:"en"});
  window.google.identitytoolkit.setConfig({
      developerKey: "AIzaSyD44e8mze68FTgQm5RZP3nQnsEnVlmtXUQ",
      companyName: "Faichi",
      callbackUrl: "drupal/",
      realm: "",
      userStatusUrl: "drupal/",
      loginUrl: "drupal/",
      signupUrl: "http://drupal/user/register",
      homeUrl: "drupal/",
      logoutUrl: "http://drupal/user/logout",
      idps: ["Gmail"],
      tryFederatedFirst: true,
      useCachedUserStatus: false,
      useContextParam: false
  });
  $("#navbar").accountChooser();
})(jQuery);
