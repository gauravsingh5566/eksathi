
import { Button } from '@mui/joy';
import React, { useEffect } from 'react';
import CertificationCard from './CertificationCard';
import AddCertification from 'pages/user/profile/components/Modals/AddCertification';
import { useState } from 'react';
import { useGlobalContext } from 'global/context';
import { useParams } from 'react-router-dom';

const Certification = ({userId}) => {
    const { api, userData } = useGlobalContext();
    const { publicId } = useParams();
    const [openAddCertification, setOpenAddCertification] = useState(false);
    const [certifications, setCertifications] = useState([]);
    const [edit, setEdit] = useState(false);
    const getCertifications = async () => {
        try {
            const res = await api.get(`/app/candidates/certifications/${userId || userData?.id}`);
            if (res?.status === 200) {
                console.log("certifications : ", res?.data?.results);
                setCertifications(res?.data?.results);
            }
        } catch (e) {
            console.log(e);
            setCertifications([]); 
        }
    }

    useEffect(() => {
        getCertifications();
        console.log("Params Got: ", publicId);
    }, []);

    useEffect(() => {
        getCertifications();
        // console.log("hello", certifications)
    }, [userId, publicId]);
    return (
        <>
            <div className="job-container">
                <div className="job-header mb-4 d-flex flex-wrap align-items-center justify-content-between">
                    <h4>Certification</h4>
                    {
                        userId === userData?.id ?
                        <Button variant='soft' onClick={() => setOpenAddCertification(true)}>Add Certification</Button>
                        : null 
                    }
                </div>
                {
                    certifications?.length ?
                        <div className="job-list">
                            {
                                certifications?.map(certification => (
                                    <CertificationCard certification={certification} key={certification?.id} />
                                ))
                            }
                            {/* <CertificationCard setOpenAddCertification={setOpenAddCertification} />
                    <CertificationCard />
                    <CertificationCard />
                    <CertificationCard /> */}
                        </div> : null
                }
                <AddCertification open={openAddCertification} setOpen={setOpenAddCertification} getCertifications={getCertifications}/>
            </div>
        </>
    )
}

export default Certification