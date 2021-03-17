const config = {
    APP: {
        PORT: process.env.PORT || '3000',
        WINSTON_LOG_LEVEL: process.env.WINSTON_LOG_LEVEL || 'debug'
    }
}

module.exports = config