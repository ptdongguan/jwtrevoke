/* .... */
app
	.use(cors())
	.use(errorHandle)
	.use(require('./middlewares/headerAuth'))
	.use(jwt({
		secret,
		isRevoked: require('./isRevoked')
	}).unless({
		path: require('./igpaths'),
	}))
/* .....  */