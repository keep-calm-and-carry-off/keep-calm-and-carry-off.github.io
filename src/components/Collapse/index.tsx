import React, { useLayoutEffect, useState, ReactNode } from 'react'

export interface CollapseProps {
  opened: boolean
  children: ReactNode
}

const Collapse: React.FC<CollapseProps> = ({ opened, children }) => {
  const [height, setHeight] = useState<number | null>(null)

  useLayoutEffect(() => {
    const contentHeight = contentRef.current?.scrollHeight || null;
    setHeight(contentHeight)
  }, [opened])

  const contentRef = React.createRef<HTMLDivElement>()

  const handleTransitionEnd = () => {
    if (!opened) {
      setHeight(null)
    }
  }

  return (
    <div
      style={{
        overflow: 'hidden',
        height: opened ? `${height}px` : '0',
        transition: 'height 0.5s ease',
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  )
}

export default Collapse
