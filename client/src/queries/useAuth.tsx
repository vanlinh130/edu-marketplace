import authApiRequest from '@/apiRequests/auth';
import { useMutation } from '@tanstack/react-query';

export const useLoginMatation = () => {
    return useMutation({
        mutationFn: ({ credential }: { credential: string }) =>
            authApiRequest.login(credential),
    })
}

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.logout,
  });
};