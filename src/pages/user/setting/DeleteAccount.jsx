import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/joy';
import { DeleteForeverRounded } from '@mui/icons-material';

const DeleteAccount = () => {
    const formik = useFormik({
        initialValues: {
           tick: false,
        },
        validationSchema: Yup.object({
            tick: Yup.boolean().required('Required'),
        }),
        onSubmit: (values) => {
            console.log(values);
              try {
                //
              }
                catch (error) {
                console.log(error);
                }
        },
    });


    return (
        <>
            <div className="user-panel-main-bar">
                <div className="user-panel">
                    <div className="d-flex flex-column justify-content-between align-items-between p-4">
                        <div className="">
                            <h3 className="fs-22 text-danger fw-bold">
                                Delete Account
                            </h3>
                            <p className="pb-3 pt-2 lh-22 fs-15">
                                Before confirming that you would like your profile
                                deleted, we'd like to take a moment to explain the
                                implications of deletion:
                            </p>
                            <ul className="generic-list-item generic-list-item-bullet fs-15">
                                <li>
                                    Deletion is irreversible, and you will have no
                                    way to regain any of your original content,
                                    should this deletion be carried out and you
                                    change your mind later on.
                                </li>
                                <li>
                                    Your questions and answers will remain on the
                                    site, but will be disassociated and anonymized
                                    (the author will be listed as "user15319675")
                                    and will not indicate your authorship even if
                                    you later return to the site.
                                </li>
                            </ul>
                            <p className="pb-3 pt-2 lh-22 fs-15">
                                Once you delete your account, there is no going
                                back. Please be certain.
                            </p>
                            <div className="custom-control custom-checkbox fs-15 mb-4">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="delete-terms"
                                />
                                <label
                                    className="custom-control-label custom--control-label lh-22"
                                    htmlFor="delete-terms"
                                >
                                    I have read the information stated above and
                                    understand the implications of having my profile
                                    deleted. I wish to proceed with the deletion of
                                    my profile.
                                </label>
                            </div>
                            {/* <button
                                type="button"
                                className="btn btn-danger fw-medium"
                                data-toggle="modal"
                                data-target="#deleteModal"
                                id="delete-button"
                                disabled
                            >
                                <i className="la la-trash mr-1" /> Delete your
                                account
                            </button> */}
                            
                        </div>
                        <div className="">
                        <Button variant='solid' color='danger'
                            disabled
                            startDecorator={<DeleteForeverRounded/>}
                            >Delete your account</Button>
                        </div>
                    </div>
                </div>
                {/* end user-panel */}
            </div>
        </>
    )
}

export default DeleteAccount;