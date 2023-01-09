nextJS mutation, react 18 inline loading

```js
const router = useRouter()
const [isPending, startTransition] = useTransition()
const [isFetching, setIsFetching] = useState(false)

// Create inline loading UI
const isMutating = isFetching || isPending

async function handleChange() {
  setIsFetching(true)
  // Mutate external data source
  await fetch(`https://api.example.com/todo/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed: !todo.completed }),
  })
  setIsFetching(false)

  startTransition(() => {
    // Refresh the current route and fetch new data from the server without
    // losing client-side browser or React state.
    router.refresh()
  })
}
```
