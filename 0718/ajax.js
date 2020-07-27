ajax({
    method: 'get',
    data: {
        page: 2
    },
    url: 'http://192.168.1.131:3000',
    success: function (data) {
        console.log(data);
    },
    error: function (err) {
        console.log(err);
    },
    async: true
});

function ajax(option) {
    var xhr = new XMLHttpRequest();
    var {
        method,
        data,
        success,
        error,
        async
    } = option;

    if (method == 'get' || method == 'GET') {
        url = url + '?';
        for (var x in data) {
            url += `${x}=${data[x]}&`;
        }
        url = url.slice(0, url.length - 1);

        xhr.open(method, url, async);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                var res = xhr.response;
                success(res)
            } else {
                error(xhr)
            }
        }
    }

    if (method == 'post' || method == 'POST') {
        var params = '';
        for (var x in data) {
            params += `${x}=${data[x]}&`;
        }
        params = params.slice(0, params.length - 1);

        xhr.open(method, url, true);
        xhr.send(params);

        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                var res = xhr.response;
                success(res);
            } else {
                error(xhr);
            }
        }
    }
}