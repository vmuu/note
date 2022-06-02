// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();

function() {
  var data = $(this).data();
  var userId = data.userid;
  if (!userId) {
    dialog('login');
  } else {

    if (data.contentType == 'products') {
      var url = '/cart/buycourse/' + data.contentId;
      window.open(url);

    } else {
      var append = '';
      var btn = '';
      btn = '<input type="button" value="购买课程 ￥' + data.prodPrice + '" data-prodid="' + data.prodId + '" data-user="' + userId + '"  class="btn buyCourse br5 colorWhite bgBlue">';
      if (data.contentPrice > 0) {
        append = "<p class='tc colorBlue'>" + data.contentType + ":" + data.contentTitle + "</p>";
        btn += ' <input type="button"  data-prod-id="' + data.prodId + '" data-content-id="' + data.contentId + '" data-content-price="' + data.contentPrice + '" data-content-type="' + data.contentType + '" data-content-name="' + data.contentTitle + '" data-prod-name="' + data.prodName + '" value="单个内容 ￥' + data.contentPrice + '"  class="btn br5 colorWhite buycontent bgBlue">'
      }
      $("#byContent").find('#prodContent').html(append + '<div class="flex">' + btn + '</div>');
      openContent($("#byContent"));
    }

  }
}

function() {

  if (timer) {
    startTimer(true);
  }
  var videoID = $(this).data('videoid');
  if (curVideo == videoID) {
    $.toast('正在播放此视频');
    return;
  }
  var isLive = $(this).data("is-live");
  var title = $(this).parents('.video_dd').find("p").find("a").text();
  $("#viedoTitle").text(title);
  prodID = $(this).data('prod-id');
  contentID = $(this).data('content-id');
  var type = $(this).data('content-type');
  var teacherID = $(this).data('teacher-id');
  if (contentID && type) {
    if (type != 'videos' && type != '视频') {
      dialog('downloadApp');
    } else {

      if (isLive) {
        let status = $(this).data('live-status');
        let channel = $(this).data('channel');
        if (status == '直播中') {

          window.location.href = '/live/' + prodID + '/' + contentID + '/' + channel;
        } else {
          message('直播暂未开始');
        }

      } else {
        $.toast('正在切换视频,请稍后', 60 * 1000);
        player && player.j2s_pauseVideo();
        createPlayer(prodID, contentID, type, videoID, teacherID);
      }

    }
  } else {
    window.location.href = '/product/' + prodID;
  }
  event.stopPropagation();
}