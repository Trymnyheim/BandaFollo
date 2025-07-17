import { useCallback } from "react";

const useScrollWithOffset = () => {
    return useCallback((el) => {
        const yOffset = -76 - 50 - 38;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }, []);
}

export default useScrollWithOffset;