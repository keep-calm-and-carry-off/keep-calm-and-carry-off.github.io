import { useState, useEffect, RefObject } from "react";

const useResizeObserver = (ref: RefObject<Element>) => {
    const [height, setHeight] = useState<number | null>(null);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            if (entries && entries.length > 0) {
                const newHeight = entries[0].contentRect.height;
                setHeight(newHeight);
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return height;
};

export default useResizeObserver;
