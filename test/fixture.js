function view (state, dispatch) {
  return (
    h('div', null, [
      h('button', {'ev-click': dispatch({ type: 'DECREMENT' })}, ["-"]),
      h('span', null, [state.get('count')]),
      h('button', {'ev-click': dispatch({ type: 'INCREMENT' })}, ["+"])
    ])
  )
}
