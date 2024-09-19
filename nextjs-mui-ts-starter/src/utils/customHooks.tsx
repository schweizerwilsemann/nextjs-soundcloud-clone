import { useState, useEffect } from "react";

export const useHasMounted = () => {
    const [hasMounted, setHasMounted] = useState<Boolean>(false);
    useEffect(() => {
        setHasMounted(true);

    }, []);

    return hasMounted;
}