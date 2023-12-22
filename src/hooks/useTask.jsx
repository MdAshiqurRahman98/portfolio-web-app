import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useTask = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/tasks?email=${user.email}`);
            return res.data;
        }
    })

    return [tasks, refetch];
};

export default useTask;