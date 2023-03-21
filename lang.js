languages = {
    "en": "English",
    "ru": "Русский",
    "zh_CN": "简体中文"
}

lang = {
    "en": {
        "settings": "Settings",
        "stop_and_quit": "Stop & Quit",
        "new_server": "New Server",
        "delete_server": "Delete Server",
        "delete_server_confirm": "Delete server?",
        "delete_server_confirm_description": "This action cannot be undone.",
        "prompt_confirm": "Confirm",
        "cancel": "Cancel",
        "save_changes": "Save Changes",
        "get_started": "Get Started",
        "prompt_done": "Done",
        "back": "Back",
        "help": "Help",
        "setting_language": "Language",
        "help_us_translate": "Help us translate",
        "setting_background": "Keep running when closed",
        "setting_background_description": "When enabled, the app will continue to run web servers in the background even when the window is closed. To stop the program while this option is enabled, click the \"Stop & Quit\" button.",
        "setting_tray": "Show icon in system tray/menu bar",
        "setting_tray_macos": "Show icon in menu bar",
        "setting_tray_windows": "Show icon in system tray",
        "setting_tray_description": "When enabled, adds a shortcut icon to the system tray or menu bar area whenever Simple Web Server is running.",
        "setting_updates": "Check for updates",
        "setting_updates_description": "Periodically check if there is a new version of the app available. Updates are not automatically installed.",
        "setting_theme": "Appearance",
        "setting_theme_description": "Change appearance (light/dark theme). By default the app follows your system theme.",
        "setting_theme_system": "Automatic (System)",
        "setting_theme_light": "Light",
        "setting_theme_dark": "Dark",
        "setting_plugins": "Plugins",
        "setting_plugins_description": "Plugins allow you to further modify your web servers beyond the options that are available in the app. <a href='https://simplewebserver.org/docs/plugins.html'>Learn more about plugins.</a><br><br>To install a plugin, click \"Add Plugin\" and then choose a directory or ZIP file. After installing a plugin, you must specifically enable it for each server you want to use it with.<br><br>Plugins aren't sandboxed, and run with the same permissions as the app. Only install a plugin if you know and trust the developer.",
        "add_plugin": "Add Plugin",
        "plugin_choose_folder": "Choose folder",
        "plugin_choose_zip": "Choose .zip file",
        "add_plugin_confirm": "Add \"[NAME]\" plugin?",
        "add_plugin_confirm_description": "Only install this plugin if you know and trust the developer.<br><br>Plugins aren't sandboxed, and run with the same permissions as the app.",
        "add_plugin_failed": "Failed to install plugin",
        "add_plugin_invalid": "Invalid plugin",
        "add_plugin_failed_description": "We couldn't find a valid <code>plugin.json</code> file in the directory or ZIP file you selected.",
        "remove_plugin": "Remove plugin",
        "remove_plugin_confirm": "Remove \"[NAME]\" plugin?",
        "remove_plugin_confirm_description": "All server options for this plugin will be cleared. If you want to update the plugin without resetting server options, just add the new version of the plugin instead of removing it first.",
        "edit_server": "Edit Server",
        "add_server": "Add Server",
        "create_server": "Create Server",
        "option_path": "Folder path",
        "option_path_description": "Directory to serve files from. If the directory is within a hidden folder, then make sure to enable <a href='https://simplewebserver.org/docs/options.html#serve-hidden-dot-files'>Serve hidden/dot files</a>.",
        "choose_folder": "Choose folder",
        "path_missing": "Please choose folder path",
        "option_port": "Port",
        "option_port_description": "A number between 1 - 65535. Port that the local web server is accessible on. Default port is 80 or 443 for HTTPS, but they may be busy or not available. Often used ports are: 8000, 8080, 8443. Access the website at <code>http://localhost:[PORT]</code>.",
        "port_invalid": "Enter a number between 1 and 65535",
        "port_in_use": "Port is already in use",
        "option_localnetwork": "Accessible on local network",
        "option_localnetwork_description": "Makes the web server accessible over LAN to other computers on the network. Access it from another computer using the host computer's local IP address and the specified port. The LAN IP address will appear under web server URLs.<br><br>Enabling this option requires local network access. You may see a firewall permission prompt when enabling this option, and you must allow access in order for the web server to work over LAN.",
        "option_localnetwork_abbreviation": "LAN",
        "section_basic_rules": "Basic Rules",
        "option_showIndex": "Automatically show index.html",
        "option_showIndex_description": "When no file path is specified, automatically serve <code>index.html</code> (if it exists).",
        "option_spa": "Single page rewrite (for SPAs)",
        "option_spa_description": "Automatically rewrite all paths that don't exist to a single page. For <a href='https://developer.mozilla.org/en-US/docs/Glossary/SPA'>Single Page Applications</a>.",
        "option_rewriteTo": "Rewrite to (for SPAs)",
        "option_rewriteTo_description": "If the Single page rewrite option is enabled, specify what file to rewrite to. For <a href='https://developer.mozilla.org/en-US/docs/Glossary/SPA'>Single Page Applications</a>.",
        "option_directoryListing": "Show directory listing",
        "option_directoryListing_description": "Show a list of files in the specified directory instead of a 404 page.",
        "option_excludeDotHtml": "Exclude .html extension",
        "option_excludeDotHtml_description": "Exclude .htm and .html extensions from URLs. For example, <code>/example.html</code> will redirect to <code>/example</code>. If a file exists at the path without an extension, the HTML file will still be rendered instead.",
        "section_advanced_rules": "Advanced Rules",
        "option_ipv6": "Listen on IPV6",
        "option_ipv6_description": "Listen over IPV6 instead of the default, which is IPV4. This will change the web server URL(s) to be IPV6 instead of IPV4, however some IPV4 addresses will remain functional when LAN is enabled.",
        "option_ipv6_abbreviation": "IPV6",
        "option_cacheControl": "Cache-Control header value",
        "option_cacheControl_description": "Optionally specify a custom <code>Cache-Control</code> HTTP header value. <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control'>Learn more about the Cache-Control header.</a>",
        "option_cors": "Set CORS headers",
        "option_cors_description": "Allow cross origin requests. Sets <code>Access-Control-Allow-Origin</code> header to <code>*</code>, <code>Access-Control-Allow-Methods</code> to <code>GET, POST, PUT, DELETE</code>, and <code>Access-Control-Max-Age</code> to <code>120</code>. <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS'>Learn more about Cross-Origin Resource Sharing.</a>",
        "option_hiddenDotFiles": "Serve hidden/dot files",
        "option_hiddenDotFiles_description": "Allow requesting hidden/dot files. These are files or folders with names that begin with a <code>.</code> character.",
        "option_upload": "Allow file upload",
        "option_upload_description": "Allows PUT/POST requests. Includes hidden/dot files if they are enabled.",
        "option_replace": "Allow replacing files",
        "option_replace_description": "If file upload is enabled, allows replacing files that already exist. Includes hidden/dot files if they are enabled.",
        "option_delete": "Allow deleting files",
        "option_delete_description": "Allows DELETE requests. Includes hidden/dot files if they are enabled.",
        "option_staticDirectoryListing": "Always use static directory listing",
        "option_staticDirectoryListing_description": "Disables JavaScript enhancement of the directory listing page.",
        "option_hiddenDotFilesDirectoryListing": "Show hidden/dot files in directory listing",
        "option_hiddenDotFilesDirectoryListing_description": "If hidden/dot files are enabled, determines if they will additionally be shown in the directory listing. This includes <code>.swshtaccess</code> files.",
        "option_htaccess": "Enable .swshtaccess configuration files",
        "option_htaccess_description": "You can use <code>.swshtaccess</code> files to set additional rules on a per-directory basis. See <a href='https://simplewebserver.org/docs/swsaccess.html'>Advanced configuration using .swshtaccess files</a>.<br><br>This functionality is experimental and may change in future releases. Consider using <a href='https://simplewebserver.org/docs/plugins.html'>plugins</a> instead.",
        "section_error_pages": "Error Pages",
        "option_custom404": "Custom 404 page file path",
        "option_custom404_description": "File path to a custom 404 page. Will fallback to a generic 404 page if this value is empty or specified path is not valid.",
        "option_custom403": "Custom 403 page file path",
        "option_custom403_description": "File path to a custom 403 page. Will fallback to a generic 403 page if this value is empty or specified path is not valid.",
        "option_custom401": "Custom 401 page file path",
        "option_custom401_description": "File path to a custom 401 page. Will fallback to a generic 401 page if this value is empty or specified path is not valid.",
        "option_customErrorReplaceString": "Custom error path variable",
        "option_customErrorReplaceString_description": "Optionally specify a custom string that will be looked for in your error pages and replaced with the current path. For example, if your custom 404 page included: <code>The file at {{PATH}} does not exist</code> and you set this option to <code>{{PATH}}</code>, when your custom page is served it would say <code>The file at /example.txt does not exist</code>.",
        "section_security": "Security",
        "option_https": "Use HTTPS",
        "option_https_description": "Make server accessible over a secure connection (https) instead of http. Uses the same single port, so you cannot use both http and https at the same time. See <a href='https://simplewebserver.org/docs/https.html'>Using HTTPS</a>.",
        "option_https_abbreviation": "HTTPS",
        "option_httpsCert": "TLS/SSL certificate",
        "option_httpsCert_description": "Optionally override this option to provide a custom HTTPS certificate (e.g. fullchain.pem). See <a href='https://simplewebserver.org/docs/https.html'>Using HTTPS</a>.",
        "option_httpsKey": "TLS/SSL private key",
        "option_httpsKey_description": "Optionally override this option to provide a custom HTTPS private key (e.g. privkey.pem). See <a href='https://simplewebserver.org/docs/https.html'>Using HTTPS</a>.",
        "generate_crypto": "Generate dummy cert",
        "generate_crypto_overwrite": "Overwrite certificate and private key?",
        "generate_crypto_overwrite_description": "A certificate and private key already exist. This action will overwrite them.",
        "option_httpAuth": "Enable HTTP Basic authentication",
        "option_httpAuth_description": "Require authentication using the HTTP Basic authentication protocol. Specify a username and password in the HTTP Basic auth username and HTTP Basic auth password options. If either the username or password option is missing or invalid, the web server will become inaccessible.",
        "option_httpAuthUsername": "HTTP Basic auth username",
        "option_httpAuthUsername_description": "Username for HTTP Basic authentication. Cannot contain a colon (<code>:</code>) character.",
        "httpAuthUsername_invalid": "Username cannot contain <code>:</code>",
        "option_httpAuthPassword": "HTTP Basic auth password",
        "option_httpAuthPassword_description": "Password for HTTP Basic authentication. Stored in plain text.",
        "option_ipThrottling": "Maximum connections per IP address",
        "option_ipThrottling_description": "Limits the number of incoming connections per IP address. Set to 0 for unlimited connections.",
        "ipThrottling_invalid": "Enter a number greater than or equal to 0",
        "state_stopped": "Stopped",
        "state_starting": "Starting...",
        "state_running": "Running",
        "state_error": "Error",
        "update_available": "An updated version of Simple Web Server is available",
        "enabled_switch": "Enabled",
        "no_servers": "You haven't created any servers yet",
        "error_port_in_use": "Port in use",
        "error_port_in_use_description": "Web server failed to start because port [PORT] is already in use by another program.",
        "error_file_system": "File system error",
        "error_plugins": "Error starting plugins",
        "error_generic": "Error",
        "version": "Version",
        "documentation": "Documentation",
        "issues_and_suggestions": "Issues & Suggestions",
        "web_server_url": "Web server URL",
        "ignore_update": "Ignore this update"
    },
    "ru": {
        "settings": "Настройки",
        "stop_and_quit": "Остановить и выйти",
        "new_server": "Новый север",
        "delete_server": "Удалить сервер",
        "delete_server_confirm": "Удалить сервер?",
        "delete_server_confirm_description": "Это будет не отменить.",
        "prompt_confirm": "Подтвердить",
        "cancel": "Отменить",
        "save_changes": "Сохранить изменения",
        "get_started": "Начнём",
        "prompt_done": "Готово",
        "back": "Назад",
        "help": "Помощь",
        "setting_language": "Язык / Language",
        "help_us_translate": "Помогите с переводом",
        "setting_background": "Оставить запущенным при закрытии",
        "setting_background_description": "Это приложение продолжит работать в фоне даже если его окно закрыто. Чтобы остановить программу нажмите кнопку \"Остановить и выйти\".",
        "setting_tray": "Показывать значок в трее или меню",
        "setting_tray_macos": "Показывать значок в меню",
        "setting_tray_windows": "Показывать значок в трее",
        "setting_tray_description": "В области уведомлений будет оказываться значок если Simple Web Server запущен.",
        "setting_updates": "Проверять обновления",
        "setting_updates_description": "Периодически проверять обновления. Они не будут установлены автоматически.",
        "setting_theme": "Appearance",
        "setting_theme_description": "Изменить тему оформления (светлая или тёмная). По умолчанию используется системная.",
        "setting_theme_system": "Автоматически как в системе",
        "setting_theme_light": "Светлая",
        "setting_theme_dark": "Тёмная",
        "setting_plugins": "Дополнения",
        "setting_plugins_description": "Plugins allow you to further modify your web servers beyond the options that are available in the app. <a href='https://simplewebserver.org/docs/plugins.html'>Learn more about plugins.</a><br><br>To install a plugin, click \"Add Plugin\" and then choose a directory or ZIP file. After installing a plugin, you must specifically enable it for each server you want to use it with.<br><br>Plugins aren't sandboxed, and run with the same permissions as the app. Only install a plugin if you know and trust the developer.",
        "add_plugin": "Добавить плагин",
        "plugin_choose_folder": "Выберете папку",
        "plugin_choose_zip": "Выберете файл .zip",
        "add_plugin_confirm": "Добавить плагин \"[NAME]\"?",
        "add_plugin_confirm_description": "Устанавливайте плагины только от тех кому доверяете.<br><br>Плагины не изолированы и имеют тот же доступ что и это приложение.",
        "add_plugin_failed": "Не удалось установить плагин",
        "add_plugin_invalid": "Неправильный плагин",
        "add_plugin_failed_description": "В папке или ZIP файле плагина не найдено описание плагина <code>plugin.json</code>.",
        "remove_plugin": "Удалить плагин",
        "remove_plugin_confirm": "Удалить плагин \"[NAME]\"?",
        "remove_plugin_confirm_description": "Все настройки этого плагина будут удалены. Если вы просто хотите обновить тогда добавьте новую версию плагина не удаляя его старую версию",
        "edit_server": "Изменить сервер",
        "add_server": "Добавить сервер",
        "create_server": "Создать сервер",
        "option_path": "Путь к папке",
        "option_path_description": "Папка в которой лежат файлы самого сайта. Если сама папка внутри скрытой папки тогда убедитесь что включили опцию <a href='https://simplewebserver.org/docs/options.html#serve-hidden-dot-files'>Показывать скрытые файлы</a>.",
        "choose_folder": "Выберете папку",
        "path_missing": "Пожалуйста выберете путь к папке",
        "option_port": "Порт",
        "option_port_description": "Номер от 1 до 65535. Стандартный порт 80 или 443 для HTTPS но они могут быть уже заняты или недоступны. Часто используют 8000, 8080, 8443. Открыть в браузере сайт можно будет по адресу <code>http://localhost:[ПОРТ]</code>.",
        "port_invalid": "Выберете порт в диапазоне от 1 до 65535",
        "port_in_use": "Порт уже занят",
        "option_localnetwork": "Доступен из локальной сети",
        "option_localnetwork_description": "Делает этот веб сервер доступным для других компьютеров в локальной сети. Открыть из другого компьютера можно по локальному IP адресу и указанному порт. Этот локальный IP адрес показан в списке адресов веб сервера.<br><br>Включение этой опции требует доступа по локальной сети. Ваш фаервол запросит подтверждение и вам следует разрешить это.",
        "option_localnetwork_abbreviation": "LAN",
        "section_basic_rules": "Основные правила",
        "option_showIndex": "Показывать index.html",
        "option_showIndex_description": "Если конкретный файл в папке не указан то автоматически показывать <code>index.html</code> (если он существует).",
        "option_spa": "Перенаправлять запросы для одностраничных сайтов SPA",
        "option_spa_description": "Автоматически перенаправлять все пути которые не существую на единую страницу SPA. Подробнее <a href='https://ru.wikipedia.org/wiki/Одностраничное_приложение'>Одностраничное приложение</a>.",
        "option_rewriteTo": "Перенаправлять запросы на эту страницу",
        "option_rewriteTo_description": "Если перенаправление для одностраничных сайтов SPA включено то укажите страницу куда перенаправлять.",
        "option_directoryListing": "Показывать файлы в папке",
        "option_directoryListing_description": "Показывать список файлов в указаной папке вместо страницы 404й ошибки.",
        "option_excludeDotHtml": "Убирать расширение .html",
        "option_excludeDotHtml_description": "Убирать из URL расширение .htm и .html файлов. Например, <code>/example.html</code> будет перенаправлен нао <code>/example</code>. Даже если существует такой файл без расширения т.е. <code>example</code> то всё равно будет показан HTML файл <code>example.html</code>.",
        "section_advanced_rules": "Расширенные правила",
        "option_ipv6": "Слушать на IPV6 адресе",
        "option_ipv6_description": "Использовать IPV6 вместо IPV4. Это изменит URL веб сервера.",
        "option_ipv6_abbreviation": "IPV6",
        "option_cacheControl": "Значение для заголовка Cache-Control",
        "option_cacheControl_description": "Значение для заголовка <a href='https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Cache-Control'>Cache-Control</a>.",
        "option_cors": "Установить заголовки CORS",
        "option_cors_description": "Разрешить <a href='https://developer.mozilla.org/ru/docs/Web/HTTP/CORS'>межсайтовые запросы</a>. Устанавливает заголовок <code>Access-Control-Allow-Origin</code> в значение <code>*</code>, <code>Access-Control-Allow-Methods</code> в <code>GET, POST, PUT, DELETE</code>, и <code>Access-Control-Max-Age</code> на <code>120</code> секунд.",
        "option_hiddenDotFiles": "Показывать скрытые файлы",
        "option_hiddenDotFiles_description": "Позволяет просматривать скрытые файлы чьих название начинается с точки <code>.</code>.",
        "option_upload": "Разрешить загрузку файлов",
        "option_upload_description": "Позволяет запросы PUT/POST для загрузки или изменения файлов.",
        "option_replace": "Разрешить перетирание файлов",
        "option_replace_description": "Если загрузка файлов разрешена то позволяет перетирать файлы которые уже существуют.",
        "option_delete": "Разрешить удаление файлов",
        "option_delete_description": "Разрешить запросы DELETE для удаления файлов.",
        "option_staticDirectoryListing": "Использовать чисто статический HTML для листинга папок",
        "option_staticDirectoryListing_description": "Убирает JavaScript улучшения для сгенерированных страниц с списком файлов в папке.",
        "option_hiddenDotFilesDirectoryListing": "Показывать скрытые файлы в листинге папок",
        "option_hiddenDotFilesDirectoryListing_description": "Если показ скрытых файлов включен то они также будут отображены в листинге папок. Это включает также и файлы <code>.swshtaccess</code>.",
        "option_htaccess": "Включить файлы конфигурации папок .swshtaccess",
        "option_htaccess_description": "Вы можете использовать файлы <code>.swshtaccess</code> чтобы установить правила конкретным папкам. Подробнее в <a href='https://simplewebserver.org/docs/swsaccess.html'>Продвинтуая конфигурация с помощью файла .swshtaccess</a>.<br><br>Эта функциональность экспериментальная и может менятся в будущих версиях.",
        "section_error_pages": "Страницы ошибок",
        "option_custom404": "Страница ошибки 404",
        "option_custom404_description": "*.html файл со страницей 404 page. Если файла нет то будет использоваться стандартная по умолчанию",
        "option_custom403": "Страница ошибки 403",
        "option_custom403_description": "*.html файл со страницей 403 page. Если файла нет то будет использоваться стандартная по умолчанию",
        "option_custom401": "Страница ошибки 401",
        "option_custom401_description": "*.html файл со страницей 401 page. Если файла нет то будет использоваться стандартная по умолчанию",
        "option_customErrorReplaceString": "Переменная окружения с файлом",
        "option_customErrorReplaceString_description": "Опционально укажите строку вместо которой следует вставить текущий путь к файлу на котором возникла ошибка. Например, если в странице 404 написано: <code>Файл {{PATH}} не существует</code> и вы установили эту опцию в <code>{{PATH}}</code>, тогда в пользователь увидит <code>Файл /example.txt не существует</code>.",
        "section_security": "Безопасность",
        "option_https": "Использовать HTTPS",
        "option_https_description": "Использовать безопасное шифрованное соединение HTTPS вместо HTTP. Использует тот-же порт поэтому вы не можете одновременно использовать HTTP и HTTPS. Подробнее про <a href='https://simplewebserver.org/docs/https.html'>Использование HTTPS</a>.",
        "option_https_abbreviation": "HTTPS",
        "option_httpsCert": "TLS/SSL сертификат",
        "option_httpsCert_description": "Если вы хотите использовать существующий сертификат TLS (т.е. fullchain.pem) то вставьте его текст сюда. Подробнее про <a href='https://simplewebserver.org/docs/https.html'>Использование HTTPS</a>.",
        "option_httpsKey": "TLS/SSL приватный ключ",
        "option_httpsKey_description": "Если вы хотите использовать существующий приватный ключ TLS (т.е. privkey.pem) то вставьте его текст сюда. Подробнее про <a href='https://simplewebserver.org/docs/https.html'>Использование HTTPS</a>.",
        "generate_crypto": "Сгенерировать сертификат-заглушку",
        "generate_crypto_overwrite": "Перетереть сертификат и приватный ключ?",
        "generate_crypto_overwrite_description": "Уже есть сертификат и приватный ключ. Это действие перетрёт их.",
        "option_httpAuth": "Включить HTTP Basic авторизацию",
        "option_httpAuth_description": "Требовать <a href='https://developer.mozilla.org/ru/docs/Web/HTTP/Authentication'>HTTP Basic авторизацию</a>.",
        "option_httpAuthUsername": "Имя пользователя HTTP Basic авторизации",
        "option_httpAuthUsername_description": "Имя пользователя для HTTP Basic авторизации. Не может содержать двоеточия (<code>:</code>).",
        "httpAuthUsername_invalid": "Имя пользователя не может содержать <code>:<code>",
        "option_httpAuthPassword": "Пароль HTTP Basic авторизации",
        "option_httpAuthPassword_description": "Пароль для HTTP Basic авторизации. Хранится в чистом виде.",
        "option_ipThrottling": "Предел соединений по IP адресу",
        "option_ipThrottling_description": "Ограничить количество входящих соединений по IP адресу. Установите в 0 если неограничено.",
        "ipThrottling_invalid": "Должно быть 0 если неограничено или больше ноля",
        "state_stopped": "Остановлено",
        "state_starting": "Запуск...",
        "state_running": "Запущено",
        "state_error": "Ошибка",
        "update_available": "Вышла новая версия Simple Web Server",
        "enabled_switch": "Включено",
        "no_servers": "Вы ещё не создали северов",
        "error_port_in_use": "Порт уже занят",
        "error_port_in_use_description": "Веб сервер не смог запуститься поскольку порт [PORT] уже занят другой программой.",
        "error_file_system": "Ошибка файловой системы",
        "error_plugins": "Ошибка при запуске плагинов",
        "error_generic": "Ошибка",
        "version": "Версия",
        "documentation": "Документация",
        "issues_and_suggestions": "Проблемы и предложения",
        "web_server_url": "URL вебсервера",
        "ignore_update": "Пропустить обновление"
    },
    "zh_CN": {
        "settings": "设置",
        "stop_and_quit": "停止并退出",
        "new_server": "新服务",
        "delete_server": "删除服务",
        "delete_server_confirm": "删除此服务吗？",
        "delete_server_confirm_description": "此操作无法撤消。",
        "prompt_confirm": "确认",
        "cancel": "取消",
        "save_changes": "保存更改",
        "get_started": "开始使用",
        "prompt_done": "知道了",
        "back": "返回",
        "help": "帮助",
        "setting_language": "语言",
        "help_us_translate": "帮助我们翻译",
        "setting_background": "保持后台运行",
        "setting_background_description": "启用后，即使窗口关闭，应用程序也将继续在后台运行Web服务器。要在启用此选项时停止程序，请单击\"停止并退出\"按钮。",
        "setting_tray": "在系统托盘/菜单栏中显示图标",
        "setting_tray_macos": "在菜单栏中显示图标",
        "setting_tray_windows": "在系统托盘中显示图标",
        "setting_tray_description": "启用后，运行Simple Web Server时，会在系统托盘或菜单栏区域中显示图标。",
        "setting_updates": "更新检查",
        "setting_updates_description": "定期检查是否有新版本可用。不会自动安装更新。",
        "setting_theme": "外观",
        "setting_theme_description": "更改外观(浅/深色主题)。默认跟随系统主题。",
        "setting_theme_system": "自动(跟随系统)",
        "setting_theme_light": "浅色",
        "setting_theme_dark": "深色",
        "setting_plugins": "插件",
        "setting_plugins_description": "插件允许您进一步修改应用程序中可用选项，进一步修改Web服务器。<a href='https://simplewebserver.org/docs/plugins.html'>了解有关插件的更多信息。</a><br><br>要安装插件，请点击 \"添加插件\" 然后选择目录或ZIP文件。安装插件后，须为需要的服务专门启用它。<br><br>插件没有隔离，并且以与应用程序相同的权限运行。您只有在了解并信任开发人员的情况下才安装插件",
        "add_plugin": "添加插件",
        "plugin_choose_folder": "选择文件夹",
        "plugin_choose_zip": "选择.zip文件",
        "add_plugin_confirm": "要添加 \"[NAME]\" 插件吗?",
        "add_plugin_confirm_description": "只有在您了解并信任开发人员的情况下才能安装此插件<br><br>插件没有隔离，并且以与应用程序相同的权限运行。",
        "add_plugin_failed": "无法安装插件",
        "add_plugin_invalid": "无效插件",
        "add_plugin_failed_description": "在您选择的目录或ZIP文件中找不到有效的<code>plugin.json</code>文件。",
        "remove_plugin": "移除插件",
        "remove_plugin_confirm": "要移除 \"[NAME]\" 插件吗?",
        "remove_plugin_confirm_description": "将清除此插件的所有服务器选项。如果您想在不重置服务器选项的情况下更新插件，只需添加插件的新版本，而不是先删除它。",	
        "edit_server": "编辑服务",
        "add_server": "新建服务",
        "create_server": "创建服务",
        "option_path": "文件夹路径",
        "option_path_description": "提供文件的目录。要使用隐藏的文件夹，请确保启用 <a href='https://simplewebserver.org/docs/options.html#serve-hidden-dot-files'>提供隐藏/.文件的访问(高级规则)</a>.",
        "choose_folder": "选择文件夹",
        "path_missing": "请选择文件夹路径",
        "option_port": "端口",
        "option_port_description": "介于1到65535之间的数字。此端口可访问本机Web服务器。 访问网站：<code>http://localhost:[PORT]</code>.",
        "port_invalid": "输入一个介于1到65535之间的数字",
        "port_in_use": "端口已被占用",
        "option_localnetwork": "可通过局域网访问",
        "option_localnetwork_description": "使局域网上的其他计算机可以通过LAN访问此Web服务器。使用主机的局域网IP地址和指定端口从另一台计算机访问它。LAN IP地址将显示在Web服务器URL下<br><br>启用此选项需要本地网络访问权限。 启用此选项时，您可能会看到防火墙权限提示，您必须允许访问，Web服务器才能通过LAN工作。",
        "option_localnetwork_abbreviation": "LAN",
        "section_basic_rules": "基本规则",
        "option_showIndex": "自动显示index.html页面",
        "option_showIndex_description": "如果未指定文件路径，则自动提供<code>index.html</code>(如果存在)。",
        "option_spa": "单页重写 (for SPAs)",
        "option_spa_description": "自动将不存在的所有路径重写为单个页面。参见 <a href='https://developer.mozilla.org/zh-CN/docs/Glossary/SPA'>单页应用</a>.",
        "option_rewriteTo": "重写到 (for SPAs)",
        "option_rewriteTo_description": "如果启用了单页重写选项，请指定要重写到的文件。参见 <a href='https://developer.mozilla.org/zh-CN/docs/Glossary/SPA'>单页应用</a>.",
        "option_directoryListing": "显示文件列表",
        "option_directoryListing_description": "显示指定目录中的文件列表，而不是404页面。",
        "option_excludeDotHtml": "排除.html扩展名",
        "option_excludeDotHtml_description": "从URL中排除.htm和.html扩展名。例如，访问<code>/example.html</code>将重定向到<code>/example</code>。如果路径上存在一个没有扩展名的文件，HTML文件仍然会被呈现。",
        "section_advanced_rules": "高级规则",
        "option_ipv6": "监听IPV6",
        "option_ipv6_description": "监听IPV6而不是默认的IPV4。这会将Web服务器URL更改为IPV6而不是IPV4，但是当启用LAN时，某些IPV4地址仍将正常工作。",
        "option_ipv6_abbreviation": "IPV6",
        "option_cacheControl": "Cache-Control 通用消息头字段",
        "option_cacheControl_description": "(可选)指定自定义<code>Cache-Control</code>通用消息头字段。<a href='https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control'>了解更多有关 Cache-Control header.</a>",
        "option_cors": "设置跨域请求头(CORS)",
        "option_cors_description": "允许跨域请求。<br>设置 <code>Access-Control-Allow-Origin</code> header to <code>*</code>;<br><code>Access-Control-Allow-Methods</code> to <code>GET, POST, PUT, DELETE</code>;<br><code>Access-Control-Max-Age</code> to <code>120</code>.<br><a href='https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS'>了解更多有关 Cross-Origin Resource Sharing.</a>",
        "option_hiddenDotFiles": "提供隐藏/.文件的访问",
        "option_hiddenDotFiles_description": "允许请求隐藏/.文件。这些文件或文件夹的名称以.字符开头。注意：要在文件列表中显示它们请开启 \"在文件列表中显示隐藏的/.文件\"",
        "option_upload": "允许上传文件",
        "option_upload_description": "允许PUT/POST请求。若包含隐藏/.文件，请确保开启\"提供隐藏/.文件的访问\"。",
        "option_replace": "允许替换文件",
        "option_replace_description": "如果启用了文件上传，允许替换已存在的文件。若包含隐藏/.文件，请确保开启\"提供隐藏/.文件的访问\"。",
        "option_delete": "允许删除文件",
        "option_delete_description": "允许DELETE请求。 若包含隐藏/.文件，请确保开启\"提供隐藏/.文件的访问\"。",
        "option_staticDirectoryListing": "始终使用静态文件列表",
        "option_staticDirectoryListing_description": "禁用文件列表页的JavaScript增强。",
        "option_hiddenDotFilesDirectoryListing": "在文件列表中显示隐藏的/.文件",
        "option_hiddenDotFilesDirectoryListing_description": "如果启用了提供隐藏/.文件的访问，并勾选此选项，则它们会显示在文件列表中，其中包括<code>.swshtaccess</code>文件。",
        "option_htaccess": "启用.swshttaccess配置文件",
        "option_htaccess_description": "您可以使用<code>.swshtaccess</code>文件 设置每个目录的附加规则。 参见 <a href='https://simplewebserver.org/docs/swsaccess.html'>高级配置.swshtaccess文件</a>.<br><br>此功能是实验性的，可能会在将来的版本中移除。考虑使用 <a href='https://simplewebserver.org/docs/plugins.html'>插件</a> 取而代之.",
        "section_error_pages": "错误页面",
        "option_custom404": "自定义404页文件",
        "option_custom404_description": "自定义404页面的文件路径。如果此值为空或指定的路径无效，将使用通用404页。",
        "option_custom403": "自定义403页文件",
        "option_custom403_description": "自定义403页面的文件路径。如果此值为空或指定的路径无效，将使用通用403页。",
        "option_custom401": "自定义401页文件",
        "option_custom401_description": "自定义401页面的文件。如果此值为空或指定的路径无效，将使用通用401页。",
        "option_customErrorReplaceString": "自定义error path变量",
        "option_customErrorReplaceString_description": "(可选)指定将在错误页面中查找并替换为当前路径的自定义字符串。 例如：您的自定义404页面内容中包含：<code>\"位于{{PATH}}的文件不存在\"</code>这样的字符串，并且您将此选项设置为<code>{{PATH}}</code>(默认)，则当您的自定义页面被提供时，它将显示<code>位于/example.txt的文件不不存在</code>。",
        "section_security": "安全",
        "option_https": "使用 HTTPS",
        "option_https_description": "使服务器只能通过安全连接(HTTPS)而不是HTTP访问。服务使用单个端口，因此您不能同时同时使用HTTP和HTTPS。 参见 <a href='https://simplewebserver.org/docs/https.html'>使用 HTTPS</a>.",
        "option_https_abbreviation": "HTTPS",
        "option_httpsCert": "SSL/TLS 证书",
        "option_httpsCert_description": "可以选择重写此选项以使用自定义 HTTPS 证书。 参见 <a href='https://simplewebserver.org/docs/https.html'>使用 HTTPS</a>.",
        "option_httpsKey": "SSL/TLS 私钥",
        "option_httpsKey_description": "可以选择重写此选项以使用自定义 HTTPS 私钥。 参见 <a href='https://simplewebserver.org/docs/https.html'>使用 HTTPS</a>.",
        "generate_crypto": "生成虚拟证书",
        "generate_crypto_overwrite": "是否覆盖证书和私钥？",
        "generate_crypto_overwrite_description": "证书和私钥已存在。此操作将覆盖它们。",
        "option_httpAuth": "启用HTTP基本身份验证",
        "option_httpAuth_description": "需要使用HTTP基本身份验证协议进行身份验证。在HTTP基本身份验证用户名和密码选项中设定用户名和密码。如果用户名或密码项缺失或无效，Web服务器将无法访问。",
        "option_httpAuthUsername": "HTTP基本身份验证用户名",
        "option_httpAuthUsername_description": "HTTP基本身份验证的用户名。不能包含冒号(<code>:</code>)字符。",
        "httpAuthUsername_invalid": "用户名不能包含 <code>:</code>",
        "option_httpAuthPassword": "HTTP基本身份验证密码",
        "option_httpAuthPassword_description": "HTTP基本身份验证的密码。以纯文本形式存储。",
        "option_ipThrottling": "每个IP地址的最大连接数",
        "option_ipThrottling_description": "限制每个IP地址的传入连接数。0表示无限制。",
        "ipThrottling_invalid": "输入大于或等于0的数字",
        "state_stopped": "已停止",
        "state_starting": "启动中...",
        "state_running": "运行中",
        "state_error": "错误",
        "update_available": "有 Simple Web Server 的新版本可用",
        "enabled_switch": "启用",
        "no_servers": "您尚未创建任何服务器",
        "error_port_in_use": "使用中的端口",
        "error_port_in_use_description": "Web服务器无法启动，因为端口[PORT]已被其他程序使用。",
        "error_file_system": "文件系统错误",
        "error_plugins": "启动插件时出错",
        "error_generic": "错误",
        "version": "版本",
        "documentation": "文档",
        "issues_and_suggestions": "疑问与建议",
        "web_server_url": "Web server URL",
        "ignore_update": "忽略此更新"
    }
}