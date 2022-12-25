const help_text = {
    "path": ["Folder path", 'Directory to serve files from. If the directory is within a hidden folder, then make sure to enable <a href="https://simplewebserver.org/docs/options.html#serve-hidden-dot-files">Serve hidden/dot files</a>.'],
    "port": ["Port", 'A number between 1 - 65535. Port that the local web server is accessible on. Access the website at <code>http://localhost:[PORT]</code>.'],
    "localnetwork": ["Accessible on local network", 'Makes the web server accessible over LAN to other computers on the network. Access it from another computer using the host computer\'s local IP address and the specified port. The LAN IP address will appear under web server URLs.<br><br>Enabling this option requires local network access. You may see a firewall permission prompt when enabling this option, and you must allow access in order for the web server to work over LAN.'],
    "showIndex": ["Automatically show index.html", 'When no file path is specified, automatically serve <code>index.html</code> (if it exists).'],
    "spa": ["Single page rewrite (for SPAs)", 'Automatically rewrite all paths that don\'t exist to a single page. For <a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA">Single Page Applications</a>.'],
    "rewriteTo": ["Rewrite to (for SPAs)", 'If the Single page rewrite option is enabled, specify what file to rewrite to. For <a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA">Single Page Applications</a>.'],
    "directoryListing": ["Show directory listing", 'Show a list of files in the specified directory instead of a 404 page.'],
    "excludeDotHtml": ["Exclude .html extension", 'Exclude .htm and .html extensions from URLs. For example, <code>/example.html</code> will redirect to <code>/example</code>. If a file exists at the path without an extension, the HTML file will still be rendered instead.'],
    "ipv6": ["Listen on IPV6", 'Listen over IPV6 instead of the default, which is IPV4. This will change the web server URL(s) to be IPV6 instead of IPV4, however some IPV4 addresses will remain functional when LAN is enabled.'],
    "cacheControl": ["Cache-Control header value", 'Optionally specify a custom <code>Cache-Control</code> HTTP header value. <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control">Learn more about the Cache-Control header.</a>'],
    "cors": ["Set CORS headers", 'Allow cross origin requests. Sets <code>Access-Control-Allow-Origin</code> header to <code>*</code>, <code>Access-Control-Allow-Methods</code> to <code>GET, POST, PUT, DELETE</code>, and <code>Access-Control-Max-Age</code> to <code>120</code>. <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Learn more about Cross-Origin Resource Sharing.</a>'],
    "hiddenDotFiles": ["Serve hidden/dot files", 'Allow requesting hidden/dot files. These are files or folders with names that begin with a <code>.</code> character.'],
    "upload": ["Allow file upload", 'Allows PUT/POST requests. Includes hidden/dot files if they are enabled.'],
    "replace": ["Allow replacing files", 'If file upload is enabled, allows replacing files that already exist. Includes hidden/dot files if they are enabled.'],
    "delete": ["Allow deleting files", 'Allows DELETE requests. Includes hidden/dot files if they are enabled.'],
    "staticDirectoryListing": ["Always use static directory listing", 'Disables JavaScript enhancement of the directory listing page.'],
    "hiddenDotFilesDirectoryListing": ["Show hidden/dot files in directory listing", 'If hidden/dot files are enabled, determines if they will additionally be shown in the directory listing. This includes <code>.swshtaccess</code> files.'],
    "htaccess": ["Enable .swshtaccess configuration files", 'You can use <code>.swshtaccess</code> files to set additional rules on a per-directory basis. See <a href="https://simplewebserver.org/docs/swsaccess.html">Advanced configuration using .swshtaccess files</a>.'],
    "custom404": ["Custom 404 page file path", 'File path to a custom 404 page. Will fallback to a generic 404 page if this value is empty or specified path is not valid.'],
    "custom403": ["Custom 403 page file path", 'File path to a custom 403 page. Will fallback to a generic 403 page if this value is empty or specified path is not valid.'],
    "custom401": ["Custom 401 page file path", 'File path to a custom 401 page. Will fallback to a generic 401 page if this value is empty or specified path is not valid.'],
    "customErrorReplaceString": ["Custom error path variable", 'Optionally specify a custom string that will be looked for in your error pages and replaced with the current path. For example, if your custom 404 page included: <code>The file at {{PATH}} does not exist</code> and you set this option to <code>{{PATH}}</code>, when your custom page is served it would say <code>The file at /example.txt does not exist</code>.'],
    "https": ["Use HTTPS", 'Make server accessible over a secure connection (https) instead of http. Uses the same single port, so you cannot use both http and https at the same time. See <a href="https://simplewebserver.org/docs/https.html">Using HTTPS</a>.'],
    "httpsCert": ["SSL/TLS cerificate", 'Optionally override this option to provide a custom HTTPS certificate. See <a href="https://simplewebserver.org/docs/https.html">Using HTTPS</a>.'],
    "httpsKey": ["SSL/TLS private key", 'Optionally override this option to provide a custom HTTPS private key. See <a href="https://simplewebserver.org/docs/https.html">Using HTTPS</a>.'],
    "httpAuth": ["Enable HTTP Basic authentication", 'Require authentication using the HTTP Basic authentication protocol. Specify a username and password in the HTTP Basic auth username and HTTP Basic auth password options. If either the username or password option is missing or invalid, the web server will become inaccessible.'],
    "httpAuthUsername": ["HTTP Basic auth username", 'Username for HTTP Basic authentication. Cannot contain a colon (<code>:</code>) character.'],
    "httpAuthPassword": ["HTTP Basic auth password", 'Password for HTTP Basic authentication. Stored in plain text.'],
    "ipThrottling": ["Maximum connections per IP address", 'Limits the number of incoming connections per IP address. Set to 0 for unlimited connections.'],
    "background": ["Keep running when closed", 'When enabled, the app will continue to run web servers in the background even when the window is closed. To stop the program while this option is enabled, click the "Stop & Quit" button.'],
    "updates": ["Check for updates", 'Periodically check if there is a new version of the app available. Updates are not automatically installed.'],
    "theme": ["Appearance", 'Change appearance (light/dark theme). By default the app follows your system theme. Set to <code>light</code> or <code>dark</code> to override.'],
    "plugins": ["Plugins", 'Plugins allow you to further modify your web servers beyond the options that are available in the app. <a href="https://simplewebserver.org/docs/plugins.html">Learn more about plugins.</a><br><br>To install a plugin, click "Add Plugin" and then choose a directory or ZIP file. After installing a plugin, you must specifically enable it for each server you want to use it with.<br><br>Plugins aren\'t sandboxed, and run with the same permissions as the app. Only install a plugin if you know and trust the developer.']
}