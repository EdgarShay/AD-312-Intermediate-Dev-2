import { useEffect, useState } from "react";

// Custom hook to get the current window size
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Update the window size state when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

    // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        handleResize();

        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
}

export default useWindowSize;