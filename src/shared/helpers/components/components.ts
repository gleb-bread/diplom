import { ref } from 'vue';

export const mouseOverHandler = function (timeout: number = 200) {
    const isActive = ref(false);
    const timeoutId = ref<number | null>(null);

    const handleMouseEnter = () => {
        if (timeoutId.value) {
            clearTimeout(timeoutId.value);
        }
        isActive.value = true;
    };

    const handleMouseLeave = () => {
        timeoutId.value = setTimeout(() => {
            isActive.value = false;
        }, timeout);
    };

    // Обработчики для меню
    const handleMenuMouseEnter = () => {
        if (timeoutId.value) {
            clearTimeout(timeoutId.value);
        }
        isActive.value = true;
    };

    const handleMenuMouseLeave = () => {
        timeoutId.value = setTimeout(() => {
            isActive.value = false;
        }, timeout);
    };

    return {
        handleMouseEnter,
        handleMouseLeave,
        handleMenuMouseEnter,
        handleMenuMouseLeave,
        isActive,
    };
};
