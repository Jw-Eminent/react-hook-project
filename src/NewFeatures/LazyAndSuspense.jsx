import React, { Component, lazy, Suspense} from 'react';

// 组件懒加载
// 使用 React.lazy 方法懒加载组件且该组件必须使用Suspense包裹并提供fallback属性
const LazyLoad = lazy(() => 
	import(/*webpackChunkName: 'lazyLoad'*/'./LazyLoad')
);


// ErrorBoundary 错误边界
// componentDidCatch 打印错误信息 & static getDerivedStateFromError() 渲染备用UI
// 开发模式下 可以捕获到错误 但是页面还是被中断了   生产模式正常?
class LazyLoadDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasErr: false
		};
	}

	static getDerivedStateFromError(err) {
		return {
			hasErr: true
		};
	}
	
	componentDidCatch(err, info) {
		console.log('hasErr:', err);
	}

	render() {
		if (this.state.hasErr) {
			return <div>Something is wrong...</div>;
		}
		return (
			<Suspense fallback={<div>Loading...</div>}>
				<LazyLoad />
			</Suspense>
		);
	}
}

export default LazyLoadDemo;