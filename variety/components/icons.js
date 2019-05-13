import SvgIcon from 'svgIcon'

const requireAll = requireContext => requireContext.keys().map(requireContext)

const req = require.context('../assets/icons', false, /\.svg$/)// 查找icons直接子目录下所有.svg文件，返回的是一个函数

requireAll(req)

export default SvgIcon
