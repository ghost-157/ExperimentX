class Debug{
    static debugInfo(message, data = '$$$'){
        console.info(`$$$ debug - ${new Date().toLocaleString()} ${message}`, data)
    }
}

module.exports = Debug
