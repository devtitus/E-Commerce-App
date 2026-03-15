import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '@/store/cartSlice';

const loadState = () => {
    if (typeof window === 'undefined') return undefined;
    try {
        const serialized = localStorage.getItem("cart");
        return serialized ? JSON.parse(serialized) : undefined;
    } catch {
        return undefined;
    }
};

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadState(),
    },
});

if (typeof window !== 'undefined') {
    store.subscribe(() => {
        localStorage.setItem(
            "cart",
            JSON.stringify(store.getState().cart)
        );
    });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;