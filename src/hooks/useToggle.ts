import { useState, useCallback } from 'react'

const useToggle = (
  initialState = false
): [boolean, () => void, (b: boolean) => void] => {
  const [state, setState] = useState(initialState)
  const toggle = useCallback(() => setState((state) => !state), [])
  const forceToggle = useCallback((bool: boolean) => setState(bool), [])

  return [state, toggle, forceToggle]
}

export default useToggle
