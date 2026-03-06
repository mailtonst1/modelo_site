import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const [cursorType, setCursorType] = useState('default');

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Move cursor logic
        const moveCursor = (e) => {
            // Use GSAP for smooth tracking instead of instant translate
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: "power2.out",
                overwrite: "auto"
            });
        };

        // Hover logic
        const handleMouseOver = (e) => {
            // Check if we are hovering over an interactive element
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-interactive')
            ) {
                setCursorType('hover');
            } else if (target.closest('.cursor-reveal-area')) {
                setCursorType('reveal');
            } else {
                setCursorType('default');
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        // Initial position fix
        gsap.set(cursor, {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`custom-cursor ${cursorType} hidden md:block`}
        />
    );
}
