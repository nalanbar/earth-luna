(function () {
  var root = document.documentElement;
  var appName = root.dataset.appName || "this app";
  var appScheme = root.dataset.appScheme || "";
  var callbackPath = root.dataset.callbackPath || "oauth/callback";
  var status = document.getElementById("oauth-status");
  var uri = document.getElementById("oauth-uri");
  var openLink = document.getElementById("oauth-open-link");

  if (!appScheme) {
    status.textContent = "This redirect page is missing its app configuration.";
    return;
  }

  var nativeURL = appScheme + "://" + callbackPath;
  if (window.location.search) {
    nativeURL += window.location.search;
  }
  if (window.location.hash) {
    nativeURL += window.location.hash;
  }

  status.textContent = "If " + appName + " is installed, it should reopen automatically.";
  uri.textContent = nativeURL;
  openLink.href = nativeURL;

  window.setTimeout(function () {
    window.location.replace(nativeURL);
  }, 120);
})();
