---
title: 'Dynamic Routing and Static Generation'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-12-09T05:35:07.322Z'
author:
  name: Bojan Petkovski
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.

Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

### Lorem Ipsum

Tristique `console.log()` senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.

> Nice blockquote here with some nice message

> Some multiline blockquote.
> 
> Across few lines nice and easy.

```javascript[class="line-numbers"]
function useUndo(initialPresent) {
    const [past, setPast] = React.useState([])
    const [present, setPresent] = React.useState(initialPresent)
    const [future, setFuture] = React.useState([])
    const canUndo = past.length !== 0
    const canRedo = future.length !== 0
    
    const undo = React.useCallback(() => {
        if (!canUndo) return
        const previous = past[past.length - 1]
        const newPast = past.slice(0, past.length - 1)
        setPast(newPast)
        setPresent(previous)
        setFuture([present, ...future])
    }, [canUndo, future, past, present])
    
    const redo = React.useCallback(() => {
        if (!canRedo) return
        const next = future[0]
        const newFuture = future.slice(1)
        setPast([...past, present])
        setPresent(next)
        setFuture(newFuture)
    }, [canRedo, future, past, present])
    
    const set = React.useCallback(
        newPresent => {
            if (newPresent === present) {
                return
            }
            setPast([...past, present])
            setPresent(newPresent)
            setFuture([])
        },
        [past, present],
    )
    
    const reset = React.useCallback(newPresent => {
        setPast([])
        setPresent(newPresent)
        setFuture([])
    }, [])
    
    return [
        {past, present, future},
        {set, reset, undo, redo, canUndo, canRedo},
    ]
}
```
