import create from "zustand"

import cursors from "../components/cursor/cursors"

const useStore = create(set => ({
  cursor: cursors.default,
  setCursor: (value) => set({cursor: value}),
  autoplay: true,
  setAutoplay: (value) => set({autoplay: value}),
  browser: 0,
  setBrowser: (value) => set({browser: value}),
  preview: false,
  setPreview: (value) => set({
    autoplay: !value,
    preview: value
  })
}))

export default useStore
