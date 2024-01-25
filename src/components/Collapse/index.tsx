import React, { useLayoutEffect, useState, ReactNode } from 'react'

interface CollapseProps {
  opened: boolean
  children: ReactNode
}

const Collapse: React.FC<CollapseProps> = ({ opened, children }) => {
  const [height, setHeight] = useState<number | null>(null)

  useLayoutEffect(() => {
    if (opened) {
      setHeight(null)
      const contentHeight = contentRef.current?.scrollHeight
      if (contentHeight) {
        setHeight(contentHeight)
      }
    } else {
      setHeight(contentRef.current?.scrollHeight || null)
    }
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
        transition: 'height 0.3s ease',
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div ref={contentRef}>{opened && children}</div>
    </div>
  )
}

export default Collapse
