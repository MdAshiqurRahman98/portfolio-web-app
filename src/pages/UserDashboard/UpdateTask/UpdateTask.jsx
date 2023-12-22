import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const UpdateTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const task = useLoaderData();
    const { _id, title, description, deadline, priority } = task || {};

    const getCurrentTimestamp = () => {
        const currentDate = new Date();
        return currentDate.toISOString();
    }

    const onSubmit = async (data) => {
        const updatedTask = {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority,
            status: 'to-do',
            email: user.email,
            timestamp: getCurrentTimestamp()
        };

        console.log(updatedTask);

        // Send data to the server
        axiosSecure.patch(`/api/v1/update-product/${_id}?email=${user?.email}`, updatedTask)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <>
            <Helmet>
                <title>Update Task | TaskFlow</title>
            </Helmet>
            <div className="bg-base-200 p-24 mt-12 mb-9">
                <h3 className="text-3xl font-bold mb-7">Update a Task</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* form title and description row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" {...register("title", { required: true })} placeholder="Enter task title" defaultValue={title} className="input input-bordered w-full" />
                                {errors.title && <span className="text-red-500 text-right">Title is required</span>}
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" {...register("description", { required: true })} placeholder="Enter task description" defaultValue={description} className="input input-bordered w-full" />
                                {errors.description && <span className="text-red-500 text-right">Description is required</span>}
                            </label>
                        </div>
                    </div>
                    {/* form deadline and priority row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="date" {...register("deadline", { required: true })} placeholder="Select deadline" defaultValue={deadline} className="input input-bordered w-full" />
                                {errors.deadline && <span className="text-red-500 text-right">Deadline is required</span>}
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-medium">Priority</span>
                            </label>
                            <select {...register("priority", { required: true })} defaultValue={priority} className="select select-bordered">
                                <option disabled selected>Select priority level</option>
                                <option>Low</option>
                                <option>Moderate</option>
                                <option>High</option>
                            </select>
                            {errors.priority && <span className="text-red-500 text-right">Priority is required</span>}
                        </div>
                    </div>
                    <input type="submit" value="Add Task" className="btn btn-block text-white bg-teal-500 hover:bg-teal-500 normal-case" />
                </form>
            </div>
        </>
    );
};

export default UpdateTask;