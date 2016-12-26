function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function resolveResultAndShow(result){
var jsonobj = JSON.parse(result);
var datas = jsonobj.data;
if(datas.length == 0){
    document.getElementById('ip_div').innerHTML = "<strong>current host has not come yet.</strong>";
    return;
}
var temp='<p><strong>total ' + datas.length + ' 条</strong></p><ul>';
for(var i = 0;i<datas.length;i++){
    temp = temp + "<li><div>" + datas[i].time +  " -- " +datas[i].id + "</div>" +
        "<div>" + datas[i].content + "</div>" +
        //"<div><img src='" + datas[i].image + "' width='100%' height='300%'>" + "</div>" +
        "<div>" + datas[i].image + "</div>" +
        "</li>"
}
    temp = temp + "</ul>";
    document.getElementById('ip_div').innerHTML = temp;
}

/*var jsonstr = '{"data": [{"idx": 0,"id": "321702","content": "<STRONG style=\\"COLOR: black; TEXT-DECORATION: none\\"><SPAN style=\\"COLOR: #ff0000\\">\u5927\u5bb6\u65e9\u4e0a\u597d<\\/SPAN><\\/STRONG>","time": "07:46","image": "http://i5.jrjimg.cn//201612//23//zhibo//zhibo_14824999073681.jpg"}' +
    ',{"idx": 0,"id": "321727","content": "<BR><SPAN style=\\"COLOR: #ff0000\\">\u3010\u4eca\u65e5\u91cd\u70b9\u5173\u6ce8\u7684\u8d22\u7ecf\u6570\u636e\u4e0e\u4e8b\u4ef6\u30112016\u5e7412\u670823\u65e5 \u5468\u4e94<BR>\uff08\u65e5\u672c\u56e0\u5929\u7687\u8bde\u8fb0\u4f11\u5e02\u3001\u82f1\u56fd\u80a1\u5e02\u56e0\u5723\u8bde\u8282\u63d0\u65e9\u4f11\u5e02\uff09<BR>\u2460 15:00 \u5fb7\u56fd1\u6708Gfk\u6d88\u8d39\u8005\u4fe1\u5fc3\u6307\u6570<BR>\u2461 15:45 \u6cd5\u56fd\u7b2c\u4e09\u5b63\u5ea6GDP\u5e74\u7387\u7ec8\u503c<BR>\u2462 16:00 \u745e\u58eb12\u6708KOF\u7ecf\u6d4e\u9886\u5148\u6307\u6807<BR>\u2463 17:00 \u4fc4\u7f57\u65af\u603b\u7edf\u666e\u4eac\u53ec\u5f00\u5e74\u5ea6\u65b0\u95fb\u53d1\u5e03\u4f1a<BR>\u2464 17:30 \u82f1\u56fd\u7b2c\u4e09\u5b63\u5ea6\u7ecf\u5e38\u5e10\u3001\u82f1\u56fd\u7b2c\u4e09\u5b63\u5ea6GDP\u5e74\u7387\u7ec8\u503c<BR>\u2465 21:30 \u52a0\u62ff\u592710\u6708GDP\u6708\u7387<BR>\u2466 23:00 \u7f8e\u56fd11\u6708\u65b0\u5c4b\u9500\u552e\u603b\u6570\u5e74\u5316\u3001\u7f8e\u56fd12\u6708\u5bc6\u6b47\u6839\u5927\u5b66\u6d88\u8d39\u8005\u4fe1\u5fc3\u6307\u6570\u7ec8\u503c<BR>\u2467 \u6b21\u65e502:00 \u7f8e\u56fd\u81f312\u670823\u65e5\u5f53\u5468\u77f3\u6cb9\u94bb\u4e95\u603b\u6570<\\/SPAN>","time": "08:34","image": ""}' +
    '' +
    ']}';
*/
//resolveResultAndShow(jsonstr);

var url = "http://zhibo.jrj.com.cn/index.php/Vip/masterViewpoint/type/new/rid/4686/lid/321129";
//var url = "http://zhibo.jrj.com.cn/index.php/Vip/masterViewpoint/type/new/rid/1690/lid/318054";
httpRequest(url, resolveResultAndShow);


