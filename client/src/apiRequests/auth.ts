import CommonConstants from "@/constants/common";
import http from "@/lib/https";

interface User {
    id: string;
    name: string;
    email: string;
}

const authApiRequest = {
    login: async (credential: string) => {
        const res = await http.post<{
            accessToken: string;
            expiresAt: string;
            user: User;
        }>(CommonConstants.API_APP_LOGIN_PATH, { credential });

        const { accessToken, expiresAt, user } = res;

        await fetch('/api/auth/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', 
            body: JSON.stringify({
                accessToken,
                expiresAt,
                userInfo: user,
            }),
        });

        return res;
    },

    logout: async () => http.post(CommonConstants.API_APP_LOGOUT_PATH, {}),
}

export default authApiRequest;