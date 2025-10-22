import React from 'react'

export function Label({ children, className = '', ...props }: React.HTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={'block text-sm mb-1 text-foreground/80 ' + className} {...props}>{children}</label>
  )
}
