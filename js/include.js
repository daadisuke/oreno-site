function header(rootDir){
    $.ajax({
        url: rootDir + "_include/header.html", // ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html);
        }
    });
}

function footer(rootDir){
    $.ajax({
        url: rootDir + "_include/footer.html", // ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html);
        }
    });
}