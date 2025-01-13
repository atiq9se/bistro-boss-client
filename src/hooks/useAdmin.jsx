import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const useAdmin = ()=>{
    const {user} = useAuth();

    const {data} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async()=>{
            const res = await useAxiosSecure.get(`/users/admin/${user.email}`)
            result = user ? 
        }
    })
}