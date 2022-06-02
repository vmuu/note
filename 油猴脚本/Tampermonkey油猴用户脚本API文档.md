> 官方文档地址： [www.tampermonkey.net/documentati…](http://www.javashuo.com/link?url=https://www.tampermonkey.net/documentation.php?ext=dhdg#GM_openInTab)php

> GDPR 通常数据保护条例（General Data Protection Regulation，简称GDPR）css

[@name](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_name)

[@namespace](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_namespace)

[@version](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_version)

[@author](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_author)

[@description](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_description)

[@homepage, @homepageURL, @website and @source](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_homepage)

[@icon, @iconURL and @defaulticon](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_icon)

[@icon64 and @icon64URL](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_icon64_and_icon64URL)[@updateURL](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_updateURL)[@downloadURL](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_downloadURL)

[@supportURL](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_supportURL)[@include](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_include)[@match](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_match)[@exclude](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_exclude)[@require](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_require)[@resource](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_resource)[@connect](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_connect)[@run-at](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_run_at)[@grant](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_grant)[@antifeature](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_antifeature)[@noframes](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_noframes)[@unwrap](https://www.tampermonkey.net/documentation.php?version=4.16.1&ext=dhdg&show=dhdg#_unwrap)

## 用户脚本 Header

### `@name`

脚本的名称html（脚本的名称，可以自己取一个）

### `@namesapce`

命名空间，类似于Java的包名，用来区分相同名称的脚本，一般写成作者名字或者网址

### `@version`

脚本版本，油猴脚本的升级会读取这个版本号

### `@author`

脚本作者。

### `@description`

描述（一个简短的说明），用来告诉用户这个脚本是干什么用的

### `@homepage, @homepageURL, @website and @source`

在“选项”页上用于从脚本名链接到给定页的作者主页。请注意，如果@namespace标记以“http://”开头，则其内容也将用于此操作。

### `@icon, @iconURL and @defaulticon`

低分率的脚本会在脚本管理列表上显示

### `@icon64 and @icon64URL`

脚本icon 64*64 如果给了这个标签，但给了图标，则图标图像将在选项页的某些位置缩放

### `@updateURL`

更新脚本的地址，注意：只有存在@version标签才会去更新

### `@downloadURL`

定义检测到更新时将从中下载脚本的URL。如果值为none，则不会执行更新检查。

### `@supportURL`

定义使用者报告issues和个人支持的地址



### `@include`

设置脚本在哪些网页中能够运行，容许设置多个标签。 `@include` 不支持URL hash参数。express

```
// @include http://123.com/*
// @include https://123.com/*
// @include https://*
// @include /^https:\/\/www\.tampermonkey\.net\/.*$/ // @include *
```

### `@match`

与 `@include` 标签相似，容许设置多个。安全脚本匹配的域名，可以使用`*`作为通配符（如 https://www.xiaoz.me/* ）

`// @match http://*` 相当于在以 http 开头的所有网页中启用该脚本

`*`相当于在所有网页中启用该脚本

`https://*` 相当于在以 https开头的所有网页中启用该脚本

`http://www.baidu.com/*` 相当于在以 [http://www.baidu.com](http://www.baidu.com/) 开头的所有网页中启用该脚本，即在和百度相关的网页中启用该脚本

`// @match *://blog.csdn.net/*` 相当于在以 在csdn 的所有网页中启用该脚本

可以设置多个match，如下（表示此脚本在CSDN，知乎、bilibili中执行）：

```
// @match        *://blog.csdn.net/*
// @match        *://www.zhihu.com/*
// @match        *://www.bilibili.com/*
```

### `@exclude`

排除的URL， 在这些页面不运行脚本， 即便地址包含在 `@include`或`@match`标签内。容许设置多个。

### `@require`

表示在运行脚本前须要加载和运行的JavaScript文件。容许设置多个。 注：若是加载的脚本使用`use strict`模式，用户脚本可能也会受严格模式影响ide

```
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @require https://code.jquery.com/jquery-2.1.3.min.js#sha256=23456...
// @require https://code.jquery.com/jquery-2.1.2.min.js#md5=34567...,sha256=6789..
```

### `@resource`

定义一些须要预加载的资源文件，这些资源能够在脚本中经过`GM_getResourceURL`，`GM_getResourceText`访问。容许设置多个。

```
// @resource icon2 /images/icon.png
// @resource html http://www.tampermonkey.net/index.html
// @resource xml http://www.tampermonkey.net/crx/tampermonkey.xml
// @resource SRIsecured1 http://www.tampermonkey.net/favicon.ico#md5=123434...
```

### `@connect`

设置容许经过`GM_xmlhttpRequest`链接访问的域名（包括子域名）。

```
// @connect <value>
// @connect *
// @connect *://*.qidian.com/
```

`@connect` 标签容许设置的值：

- 域名，如`tampermonkey.net`, 设置后该域名下的全部子域名都是容许访问的
- 子域名，如`safari.tampermonkey.net`
- `self` 当前脚本正在运行的域名
- `localhost`
- `1.2.3.4` 容许链接的IP地址
- `*` 全部域名

如果无法声明用户脚本可能连接到的所有域，则最好执行以下操作：

**声明所有已知或至少所有可能由脚本连接的公共域**。这样，大多数用户都可以避免确认对话框。

另外在脚本中添加“**@connect***”。通过这样做，tampermonkey仍然会询问用户是否允许下一个连接到未提及的域，但也会提供一个“**总是允许所有域**”按钮。如果用户单击此按钮，则将自动允许所有未来的请求。

用户还可以通过在“脚本设置”选项卡的用户域白名单中添加“*”来白名单所有请求。

注意：

初始url和最终的url都会被检查， 为了向后兼容scriptish@domain标记也会被解释。

允许多个标记实例。

### `@run-at`

定义脚本被注入的时间，与其他脚本处理相反，**@run-at** 定义了脚本要运行的第一可能时间。

这意味着，使用**@require**标记的脚本可能会在文档已加载后执行，因为获取所需脚本花费了很长时间。无论如何，在给定的注入时刻之后发生的所有domnodeinserted和domcontentloaded事件都将被缓存，并在注入时传递给脚本。

- `@run-at document-start` 脚本将以最快的速度注入。
- `@run-at document-body` 如果body元素存在，则将注入脚本。
- `@run-at document-end` 在调度DOMContentLoaded事件时或之后，将注入脚本。
- `@run-at document-idle` 该脚本将在调度DOMContentLoaded事件后注入。如果未给出@run at标记，则这是默认值。
- `@run-at content-menu` 如果在浏览器上下文菜单中单击脚本（仅限基于桌面Chrome的浏览器），则会注入脚本。

### `@grant`

用于设置脚本权限，@grant用于白名单GM_*函数、unsafeWindow对象和一些强大的窗口函数。如果没有给@grant标记，则默认需要。

```
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_setClipboard
// @grant unsafeWindow
// @grant window.close
// @grant window.focus
```



| 权限名                                                       | 功能                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| unsafeWindow                                                 | 允许脚本可以完整访问原始页面，包括原始页面的脚本和变量。     |
| GM_getValue(name,defaultValue)                               | 从油猴扩展的存储中访问数据。可以设置默认值，在没成功获取到数据的时候当做初始值。假如保存的是日期等类型的话，取出来的数据会变成文本，需要自己转换一下。 |
| GM_setValue(name,value)                                      | 将数据保存到存储中                                           |
| GM_xmlhttpRequest(details)                                   | 异步访问网页数据的API，这个方法比较复杂，有大量参数和回调，介绍请参考官方文档。 |
| GM_setClipboard(data, info)                                  | 将数据复制到剪贴板中，第一个参数是要复制的数据，第二个参数是MIME类型，用于指定复制的数据类型。 |
| GM_log(message)                                              | 将日志打印到控制台中，可以使用F12开发者工具查看。            |
| GM_addStyle(css)                                             | 像网页中增加自己的样式表。                                   |
| GM_notification(details, ondone), GM_notification(text, title, image, onclick) | 设置网页通知，请参考文档获取用法。                           |
| GM_openInTab(url, loadInBackground)                          | 在浏览器中打开网页，可以设置能否在后端打开等几个选项         |

### `@antifeature`

此标签允许脚本开发人员披露他们是否将脚本商业化。例如，需要付费使用。

`<type> `可以具有以下值：

- ads
- tracking
- miner

```javascript
// @antifeature ads We show you ads
// @antifeature:fr ads Nous vous montrons des publicités
// @antifeature tracking We have some sort of analytics included
// @antifeature miner We use your computer's resources to mine a crypto currency
```

### `@noframes`

此标记使脚本在主页上运行，但不在iFrame上运行。

### `@unwrap`

将不带任何包装器和沙盒的用户脚本注入页面，这对于scriptlet可能很有用。



## API

### `unsafeWindow`

设置后经过`unsafeWindow`对象访问页面的js方法和变量

### `Subresource Integrity`

`@require``@resource`标签设置URL的hash部分

```
// @require https://code.jquery.com/jquery-2.1.1.min.js#md5=45eef...
// @require https://code.jquery.com/jquery-2.1.2.min.js#md5=ac56d...,sha256=6e789.
```

### `GM_addStyle(css)`

将给定样式添加到文档并返回注入的样式元素。

Adds the given style to the document and returns the injected style element.

### `GM_addElement(tag_name, attributes), GM_addElement(parent_node, tag_name, attributes)`

Creates an HTML element specified by 'tag_name' and applies all given 'attributes' and returns the injected HTML element. If a 'parent_node' is given, then it is attached to it or to document head or body otherwise.

For suitable 'attributes', please consult the appropriate documentation. For example:

- [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- [img tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [style tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)

```javascript
GM_addElement('script', {
  textContent: 'window.foo = "bar";'
});

GM_addElement('script', {
  src: 'https://example.com/script.js',
  type: 'text/javascript'
});

GM_addElement(document.getElementsByTagName('div')[0], 'img', {
  src: 'https://example.com/image.png'
});

GM_addElement(shadowDOM, 'style', {
  textContent: 'div { color: black; };'
});
```

Note: this feature is experimental and the API may change.

### `GM_deleteValue(name)`

从存储器中删除“name”。

Deletes 'name' from storage.

### `GM_listValues()`

列出存储的所有名称。

List all names of the storage.

### `GM_addValueChangeListener(name, function(name, old_value, new_value, remote) {})`

对storage存储的变量添加监听器，返回监听器ID。 `name`参数是要监听的变量名

### `GM_removeValueChangeListener(listener_id)`

移除监听器

### `GM_setValue(name, value)`

Set the value of 'name' to the storage.

### `GM_getValue(name, defaultValue)`

从storage里面获取'name'的值

### `GM_log(message)`

控制台输出日志

### `GM_getResourceText(name)`

获取在脚本头部用`@resource`标签预约义的的内容

### `GM_getResourceURL(name)`

获取在脚本头部用`@resource`标签预约义的的base64编码的URI

### `GM_registerMenuCommand(name, fn, accessKey)`

在脚本运行页面的Tampermonkey菜单中注册新的菜单，返回菜单command ID

### `GM_unregisterMenuCommand(menuCmdId)`

注销用`GM_registerMenuCommand`注册的菜单

### `GM_openInTab(url, options), GM_openInTab(url, loadInBackground)`

在新标签页打开URL。`options`可选的值：

- `active` 定义焦点是否在新标签页上
- `insert`
- `setParent`

### `GM_xmlhttpRequest(details)`

Make an xmlHttpRequest.

### `GM_download(details), GM_download(url, name)`

下载URL指定资源到本地磁盘

`details` 能够有以下属性:

- `url` - 下载地址 (必需)
- `name` - 文件名 - 因为安全缘由须要在Tampermonkey的配置页把文件扩展名设为白名单（*for security reasons the file extension needs to be whitelisted at Tampermonkey's options page*） (必需)
- `headers` - 参见 `GM_xmlhttpRequest`
- `saveAs` - `boolean`, 弹出“保存为”的弹框
- `onerror` - 下载失败的回调
- `onload` - 下载完成回调
- `onprogress` 下载进度变化时的回调
- `ontimeout` 因为超时致使下载失败时的回调

`onerror` 回调函数的参数：

- ```
  error
  ```

   

  \- 失败缘由

  - `not_enabled` - 用户不能使用下载功能
  - `not_whitelisted` - 下载文件后缀不在白名单内
  - `not_permitted` - the user enabled the download feature, but did not give the downloads permission
  - `not_supported` - the download feature isn't supported by the browser/version
  - `not_succeeded` - the download wasn't started or failed, the details attribute may provide more information

- `details` 关于错误的详细信息

下载扩展白名单设置以下：

> Chrome 能够使用 Tampermonkey 的 GM_download 函数绕过 CSP(Content Security Policy) 的限制

### `GM_getTab(callback)`

Get a object that is persistent as long as this tab is open.

### `GM_saveTab(tab)`

Save the tab object to reopen it after a page unload.

### `GM_getTabs(callback)`

Get all tab objects as a hash to communicate with other script instances.

### `GM_notification(details, ondone)` `GM_notification(text, title, image, onlick)`

显示一个H5桌面通知，并/或 高亮显示当前Tab

`details` 有以下特性:

- `text` - 通知的文本 (须要 `highlight` 设置为`false`)
- `title` - 通知的标题
- `image` - 图片
- `highlight` - `boolean` 是否高亮发送通知的标签页 (未设置`text`时)
- `silent` - `boolean` 是否播放提示音
- `timeout` - `timeout` 设置的时间以后通知会被隐藏 (0 = disabled)
- `ondone` - 通知被关闭时调用 (no matter if this was triggered by a timeout or a click) or the tab was highlighted
- `onclick` - 用户点击通知时调用

### `GM_setClipborad(data, info)`

复制内容到剪贴板，The parameter 'info' can be an object like "{ type: 'text', mimetype: 'text/plain'}" or just a string expressing the type ("text" or "html")

### `GM_info`

获取关于脚本和GM的一些信息



### `<><![CDATA[your_text_here]]></>`



原文链接：[Tampermonkey油猴用户脚本API文档](https://juejin.cn/post/6844903997698998285)

