const API_BASE = '/api';
let refreshPromise: Promise<boolean> | null = null;
let isRedirectingToLogin = false;

async function clearAuthCookies(): Promise<void> {
    try {
        await fetch(`${API_BASE}/auth/logout`, {
            method: 'POST',
            credentials: 'include'
        });
    } catch {}
}

export async function authFetch(url: string, options: RequestInit = {}): Promise<Response> {
    const headers = new Headers(options.headers);
    if (options.body && !headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/json');
    }

    const response = await fetch(`${API_BASE}${url}`, {
        ...options,
        headers,
        credentials: 'include'
    });

    // refresh token(unauthorized)
    if (response.status === 401) {
        const refreshSuccessful = await refreshToken();

        if (refreshSuccessful) {
            return fetch(`${API_BASE}${url}`, {
                ...options,
                headers,
                credentials: 'include'
            });
        } else {
            // Refresh failed(to login)
            if (typeof window !== 'undefined' && !isRedirectingToLogin) {
                isRedirectingToLogin = true;
                await clearAuthCookies();
                if (window.location.pathname !== '/login') {
                    window.location.href = '/login';
                }
            }
        }
    }

    return response;
}

async function refreshToken(): Promise<boolean> {
    if (refreshPromise) {
        return refreshPromise;
    }

    refreshPromise = (async () => {
        try {
            const response = await fetch(`${API_BASE}/auth/refresh`, {
                method: 'POST',
                credentials: 'include'
            });

            return response.ok;
        } catch (error) {
            console.error('Token refresh failed:', error);
            return false;
        } finally {
            refreshPromise = null;
        }
    })();

    return refreshPromise;
}

export async function authGet(url: string): Promise<Response> {
    return authFetch(url, { method: 'GET' });
}

export async function authPost(url: string, body?: unknown): Promise<Response> {
    return authFetch(url, {
        method: 'POST',
        body: body ? JSON.stringify(body) : undefined
    });
}

export async function authPut(url: string, body?: unknown): Promise<Response> {
    return authFetch(url, {
        method: 'PUT',
        body: body ? JSON.stringify(body) : undefined
    });
}

export async function authDelete(url: string): Promise<Response> {
    return authFetch(url, { method: 'DELETE' });
}
