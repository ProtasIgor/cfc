
const Server = () => {
    $.browserSync.init({
        server: {
            baseDir: $.path.server,
        }
    })
}


module.exports = Server;