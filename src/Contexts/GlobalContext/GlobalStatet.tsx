import { useRouter } from 'next/router'
import { FC } from 'react'
import { GlobalContext } from './GlobalContext'

interface Props {
  children: React.ReactNode
}

export const GlobalState: FC<Props> = ({ children }) => {
  const router = useRouter()
  const path = router.pathname
  const goToPath = (path: string) => {
    router.push(path)
  }

  const goToExternalUrl = (url: string) => {
    window.location.replace(url)
  }

  const getPath = (): string => {
    console.log(router)
    return router.pathname
  }

  return (
    <GlobalContext.Provider
      value={{ path, goToPath, goToExternalUrl, getPath }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
