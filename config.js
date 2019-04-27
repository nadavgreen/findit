const dbName = 'tvwatchlistapp'
const dbAddr = process.env.DATABASE_URL || `postgres://localhost/${dbName}`

module.exports = dbAddr
