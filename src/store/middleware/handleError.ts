import { createStandaloneToast } from "@chakra-ui/toast";
import { isRejectedWithValue, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { clearSession } from "../auth/authSlice";
const { toast } = createStandaloneToast();
export const handleApiError: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if(isRejectedWithValue(action)) {
    console.log(action.payload);
    const errorPayload = (action.payload as { data: {error: string; status: string }, status: number });
    if(errorPayload.status === 401) {
        toast({
            title: 'Sessão expirada',
            description: 'Faça login novamente',
            status: 'error',
            duration: 5000,
            position: 'top'
        });
        setTimeout(() => api.dispatch(clearSession()), 4000);
    }

    if(errorPayload.status === 403) {
        toast({
            title: 'Erro ao efetuar a operação',
            description: errorPayload.data.error,
            status: 'error',
            duration: 5000,
            position: 'top'
        })
    }
  }
  return next(action)
}