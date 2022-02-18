import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { selectAllJobs , fetchJobs} from '../../features/job/jobSlice';

const JobContainer = () => {
    const [filter, setFilter] = useState({limit: 10, offset: 0});
    const dispatch = useDispatch();
    const jobs = useSelector(selectAllJobs);

    const jobStatus = useSelector((state) => state.jobs.status);

    useEffect(() => {
        dispatch(fetchJobs(filter));
    },[dispatch, filter]);

    return <div>{jobStatus}
    {jobs.map(job => <div key={job.id}>{job.id} </div>)}</div>
}

export default JobContainer;