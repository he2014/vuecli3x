
export const AsyncComponent = AsyncView => {
  const AsyncHandler = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: AsyncView,
    // 异步组件加载时使用的组件
    loading: require('./LoadingComponent').default,
    // 加载失败时使用的组件
    error: require('./ErrorComponent').default,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 10,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 10000
  })
  return Promise.resolve({
    functional: true,
    render(
      h,
      {
        //h => createElement; const {data,children} = context;
        data,
        children
      }
    ) {
      return h(AsyncHandler, data, children)
    }
  })
}
export const AsyncComponent = (AsyncView) => {
    const AsyncHandler = () => ({
        // 需要加载的组件 (应该是一个 `Promise` 对象)
        component: AsyncView,
        // 异步组件加载时使用的组件
        loading: require('./LoadingComponent').default,
        // 加载失败时使用的组件
        error: require('./ErrorComponent').default,
        // 展示加载时组件的延时时间。默认值是 200 (毫秒)
        delay: 10,
        // 如果提供了超时时间且组件加载也超时了，
        // 则使用加载失败时使用的组件。默认值是：`Infinity`
        timeout: 10000
    });
    return Promise.resolve({
        functional: true,
        render(h, { //h => createElement; const {data,children} = context;
            data,
            children
        }) {
            return h(AsyncHandler, data, children);
        }
    });
}

