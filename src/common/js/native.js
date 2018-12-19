// 获取网络状态
export const getNetWorkInfo = () => {
	var types = {}
	let network = { no: 1, name: "无网络" }
	types[plus.networkinfo.CONNECTION_UNKNOW] = "Unknown connection"
	types[plus.networkinfo.CONNECTION_NONE] = "None connection"
	types[plus.networkinfo.CONNECTION_ETHERNET] = "Ethernet connection"
	types[plus.networkinfo.CONNECTION_WIFI] = "WiFi connection"
	types[plus.networkinfo.CONNECTION_CELL2G] = "Cellular 2G connection"
	types[plus.networkinfo.CONNECTION_CELL3G] = "Cellular 3G connection"
	types[plus.networkinfo.CONNECTION_CELL4G] = "Cellular 4G connection"
	let status = plus.networkinfo.getCurrentType()
	if(status === 3) { network = { no: 3, name: "WIFI网络" } }
	if(status > 3) { network = { no: 2, name: "移动流量" } }
	if(status === 1) { network = { no: 1, name: "无网络" } }
	return network
}