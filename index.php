<?php
$file = isset($_GET['file']) ? $_GET['file'] : 'index';
$arr_file = ['index','cookies_policy','personal_stats','start','stats'];
if(!in_array($file, $arr_file)) $file = 'index';
$query = [];
if($file == 'personal_stats'){
$wallet = isset($_GET['wallet']) ? htmlspecialchars($_GET['wallet']) : '';
$wallet = explode('.', $wallet);
$eth = $wallet[0];
$zil = $wallet[1];
$query['wallet'] = $wallet[0].'.'.$wallet[1];
}
$json = [];
$json['dataManager'] = "[]";
$json['props'] = [];
$json['props']['pageProps'] = [];
$json['props']['cookies'] = [];
$json['props']['cookies']['changeListeners'] = [];
$json['props']['cookies']['TESTING_ONETWO'] = 2;
$json['props']['cookies']['cookies'] = $_COOKIE ? $_COOKIE : [];
$json['props']['cookies']['HAS_DOCUMENT_COOKIE'] = false;
$json['page'] = $_SERVER['REDIRECT_URL'] ? $_SERVER['REDIRECT_URL'] : '/';
$json['query'] = $query;
$json['buildId'] = 'lJ3vH62866Tf9mMSSC9Wj';
$json['dynamicBuildId'] = false;
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charSet="utf-8" class="next-head"/>
		<title class="next-head">Ezil - ETH+ZIL Dual Mining</title>
		<link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png" class="next-head"/>
		<link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" class="next-head"/>
		<link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" class="next-head"/>
		<link rel="manifest" href="static/site.webmanifest" class="next-head"/>
		<link rel="mask-icon" href="static/safari-pinned-tab.svg" color="#5bbad5" class="next-head"/>
		<link rel="shortcut icon" href="static/favicon.ico" class="next-head"/>
		<meta name="msapplication-TileColor" content="#ffffff" class="next-head"/>
		<meta name="msapplication-config" content="/static/browserconfig.xml" class="next-head"/>
		<meta name="theme-color" content="#ffffff" class="next-head"/>
		<link rel="dns-prefetch" href="https://fonts.gstatic.com" class="next-head"/>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" class="next-head"/>
		<link rel="preload" href="https://fonts.googleapis.com/css?family=Inconsolata|Roboto:400,500,700" as="fetch" crossorigin="anonymous" class="next-head"/>
		<script type="text/javascript" class="next-head">!function(e,n,t){"use strict";var o="https://fonts.googleapis.com/css?family=Inconsolata|Roboto:400,500,700",r="__3perf_googleFonts_58b4a";function c(e){(n.head||n.body).appendChild(e)}function a(){var e=n.createElement("link");e.href=o,e.rel="stylesheet",c(e)}function f(e){if(!n.getElementById(r)){var t=n.createElement("style");t.id=r,c(t)}n.getElementById(r).innerHTML=e}e.FontFace&&e.FontFace.prototype.hasOwnProperty("display")?(t[r]&&f(t[r]),fetch(o).then(function(e){return e.text()}).then(function(e){return e.replace(/@font-face {/g,"@font-face{font-display:swap;")}).then(function(e){return t[r]=e}).then(f).catch(a)):a()}(window,document,localStorage);</script>
		<meta name="viewport" content="initial-scale=1, viewport-fit=cover" class="next-head"/>
		<link rel="preload" href="_next/static/lJ3vH62866Tf9mMSSC9Wj/pages/<?php echo $file; ?>.js" as="script"/>
		<link rel="preload" href="_next/static/lJ3vH62866Tf9mMSSC9Wj/pages/_app.js" as="script"/>
		<link rel="preload" href="_next/static/runtime/webpack-fe2250ffbfadbf79e883.js" as="script"/>
		<link rel="preload" href="_next/static/chunks/commons.613a70dd6be9d11cfff7.js" as="script"/>
		<link rel="preload" href="_next/static/runtime/main-deee97ed073cf7b29be6.js" as="script"/>
		<link rel="preload" href="_next/static/chunks/styles.5a4043722ffabcd92447.js" as="script"/>
		<link rel="stylesheet" href="_next/static/css/styles.3a9b9473.chunk.css"/>
	</head>
	<body>
		<div id="__next"></div>
		<script id="__NEXT_DATA__" type="application/json"><?php echo json_encode($json); ?></script><script async="" id="__NEXT_PAGE__/" src="_next/static/lJ3vH62866Tf9mMSSC9Wj/pages/index.js"></script><script async="" id="__NEXT_PAGE__/_app" src="_next/static/lJ3vH62866Tf9mMSSC9Wj/pages/_app.js"></script><script src="_next/static/runtime/webpack-fe2250ffbfadbf79e883.js" async=""></script><script src="_next/static/chunks/commons.613a70dd6be9d11cfff7.js" async=""></script><script src="_next/static/runtime/main-deee97ed073cf7b29be6.js" async=""></script><script src="_next/static/chunks/styles.5a4043722ffabcd92447.js" async=""></script>
	</body>
</html>