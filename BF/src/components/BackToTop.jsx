import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";

function BackToTop({ text }) {
    const buttonRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [originalTop, setOriginalTop] = useState(null);

    const toTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const buttonStyle = {
        width: "100%",
        fontWeight: "bold",
        borderRadius: "0",
        position: isSticky ? "fixed" : "static",
        top: isSticky ? "76px" : "auto",
        left: isSticky ? "0" : "auto",
        zIndex: isSticky ? 500 : "auto"
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!buttonRef.current) return;

            const rect = buttonRef.current.getBoundingClientRect();
            const scrollTop = window.scrollY;

            if (originalTop !== null) {
                setIsSticky(scrollTop > originalTop - 76);
            }
        };

        const setInitialTop = () => {
            if (buttonRef.current) {
                const offsetTop = buttonRef.current.offsetTop;
                setOriginalTop(offsetTop);
            }
        };

        setInitialTop();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", setInitialTop); // Recalculate on resize

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", setInitialTop);
        };
    }, [originalTop]);

    return (
        <div ref={buttonRef}>
            <Button onClick={toTop} variant="secondary" style={buttonStyle}>
                {text} &uarr;
            </Button>
        </div>
    );
}

export default BackToTop;
