import { useEffect, useState, useCallback } from 'react';

const MOBILE_BREAKPOINT = 758;

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    const checkMobile = useCallback(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }, []);

    useEffect(() => {
        setMounted(true);
        checkMobile();
        
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
            setMounted(false);
        };
    }, [checkMobile]);

    return mounted ? isMobile : false;
}