import { computed } from "vue";
import { useRoute } from "vue-router";
import { UserRole } from "@/types";

export const useGlobalState = () => {
  const route = useRoute();
  const userRole = computed(() => {
    if (![UserRole.FREE, UserRole.ADMIN].includes(route.query.role as UserRole)) {
      return UserRole.FREE;
    }
    return route.query.role as UserRole;
  });

  return {
    userRole,
  };
};