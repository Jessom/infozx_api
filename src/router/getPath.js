const fs = require('fs')

var ro = getRouter()

fs.writeFile('router.js', `export default { router: ${JSON.stringify(ro)} }`, 'utf8', err => {
	if(err) throw err

	console.log('8946513')
})


function getRouter(path='../views') {
	let arr = []

	run(path)

	function run(p) {
		let resDir = fs.readdirSync(p)

		for(let i in resDir) {
			const file = resDir[i]
			let road = `${p}/${file}`
			// 获取 stat 所有属性
			// let res = fs.statSync(road)

			// 是文件夹
			// if(res.isDirectory()) {
			if(!road.includes('.vue')) {
				run(road)
			} else {
				let paths = road.split('/')
				let name = paths[paths.length-1].split('.')[0]
				arr.push({
					component: road,
					name,
					path: `/${paths[paths.length-2]}/${name}`,
				})
			}
		}
	}

	return arr
}
