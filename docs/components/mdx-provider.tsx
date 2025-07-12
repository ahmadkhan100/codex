'use client'

import { MDXProvider } from '@mdx-js/react'
import { ReactNode } from 'react'

interface MDXProviderWrapperProps {
  children: ReactNode
}

const MDXProviderWrapper = ({ children }: MDXProviderWrapperProps) => {
  return (
    <MDXProvider>
      {children}
    </MDXProvider>
  )
}

export { MDXProviderWrapper } 