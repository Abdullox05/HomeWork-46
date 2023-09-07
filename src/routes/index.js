const admminRouter = require('./admin.route')
const serviceRouter = require('./service.route')
const blogRouter = require('./blog.route')
const feedbackRouter = require('./feedback.route')
const contactRouter = require('./contact.route')

module.exports = [
    admminRouter,
    serviceRouter,
    blogRouter,
    feedbackRouter,
    contactRouter
]