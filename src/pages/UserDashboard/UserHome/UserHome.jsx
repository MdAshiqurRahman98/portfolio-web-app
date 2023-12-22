import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTask from "../../../hooks/useTask";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const [tasks, refetch] = useTask();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/v1/delete-task/${_id}?email=${user?.email}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Task has been deleted',
                                'success'
                            )
                            refetch();
                        }
                    })
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>Dashboard | TaskFlow</title>
            </Helmet>
            <div className="mb-11">
                <h3 className="text-3xl font-bold text-center mt-14 mb-9">Dashboard</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-base">
                                <th>Title</th>
                                <th>Description</th>
                                <th>Deadline</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Update Task</th>
                                <th>Delete Task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task) => <tr key={task._id}>
                                    <th>{task.title}</th>
                                    <td>{task.description}</td>
                                    <td>{task.deadline}</td>
                                    <td>{task.priority}</td>
                                    <td>{task.status}</td>
                                    <td>
                                        <Link to={`/dashboard/update-task/${task._id}`}>
                                            <button className="btn btn-sm normal-case text-white bg-teal-500 hover:bg-teal-500">Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(task._id)} className="btn btn-sm normal-case text-white bg-teal-500 hover:bg-teal-500">Delete</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default UserHome;