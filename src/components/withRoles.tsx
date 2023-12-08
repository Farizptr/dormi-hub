import { useRouter } from "next/navigation";
import useAuth from '@hooks/useAuth'

export default function withRoles(Component: any, requiredPermissions: number[]) {
  return function WithRolesWrapper(props: any) {
    const router = useRouter()
    const { auth } = useAuth()

    if (requiredPermissions.includes(auth.role)) {
      return (
        <Component {...props} />
      )
    } else {
      router.push('/')
    }
  }
}