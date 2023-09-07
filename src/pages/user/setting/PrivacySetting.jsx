import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { useGlobalContext } from 'global/context';

const PrivacySetting = () => {
    const { api, userData } = useGlobalContext();
    const [privacySettings, setPrivacySettings] = useState({});
    const formik = useFormik({
        initialValues: {
            email: privacySettings?.email,
            avatar: privacySettings?.avatar,
            country: privacySettings?.country,
            bio: privacySettings?.bio,
            social_links: privacySettings?.social_links,
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            email: Yup.string().required('Required'),
            avatar: Yup.string().required('Required'),
            country: Yup.string().required('Required'),
            bio: Yup.string().required('Required'),
            social_links: Yup.string().required('Required'),
        }),

        onSubmit: async (values) => {
            console.log(values);
            try {
                const res = await api.patch(`/app/settings/privacy/${userData?.id}`, values);
                if (res?.status === 200) {
                    toast.success(res?.data?.message);
                }
            } catch (error) {
                console.log(error);
                toast.error(error?.response?.data?.message);
            }
        },
    });


    const getPrivacySettings = async () => {
        try {
            const res = await api.get(`/app/settings/privacy/${userData?.id}`);
            if (res?.status === 200) {
                console.log("Privacy: ", res?.data);
                toast.success(res?.data?.message);
                setPrivacySettings(res?.data?.privacySettings);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    }


    useEffect(() => {
        getPrivacySettings();
    }, []);

    return (
        <>
            <div className="user-panel-main-bar px-4">
                <div className="user-panel">
                    <div className="bg-gray p-3 rounded-rounded">
                        <h3 className="fs-17">Privacy Settings</h3>
                        <p className="fs-13">
                            Select who may see your profile details
                        </p>
                    </div>
                    <form onSubmit={formik.handleSubmit}  className="pt-20px">
                        <div className="settings-item">
                            <div className="input-box">
                                <label className="fs-13 text-black lh-20 fw-medium">
                                    Profile Picture
                                </label>
                                <div className="form-group">
                                    <select className="custom-select custom--select"
                                        name='avatar'
                                        value={formik.values.avatar}
                                        onChange={formik.handleChange}
                                    >
                                        <option defaultValue="public">
                                            Public
                                        </option>
                                        <option value="connections">My Connections</option>
                                        <option value="myself">Only me</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-box">
                                <label className="fs-13 text-black lh-20 fw-medium">
                                    Email
                                </label>
                                <div className="form-group">
                                    <select className="custom-select custom--select"
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    >
                                        <option defaultValue="public">
                                            Public
                                        </option>
                                        <option value="connections">My Connections</option>
                                        <option value="myself">Only me</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-box">
                                <label className="fs-13 text-black lh-20 fw-medium">
                                    Country
                                </label>
                                <div className="form-group">
                                    <select className="custom-select custom--select"
                                        name='country'
                                        value={formik.values.country}
                                        onChange={formik.handleChange}
                                    >
                                        <option defaultValue="public">
                                            Public
                                        </option>
                                        <option value="connections">My Connections</option>
                                        <option value="myself">Only me</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-box">
                                <label className="fs-13 text-black lh-20 fw-medium">
                                    Biography
                                </label>
                                <div className="form-group">
                                    <select className="custom-select custom--select"
                                        name='bio'
                                        value={formik.values.bio}
                                        onChange={formik.handleChange}
                                    >
                                        <option defaultValue="public">
                                            Public
                                        </option>
                                        <option value="connections">My Connections</option>
                                        <option value="myself">Only me</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-box">
                                <label className="fs-13 text-black lh-20 fw-medium">
                                    Social links
                                </label>
                                <div className="form-group">
                                    <select className="custom-select custom--select"
                                        name='social_links'
                                        value={formik.values.social_links}
                                        onChange={formik.handleChange}
                                    >
                                        <option defaultValue="public">
                                            Public
                                        </option>
                                        <option value="connections">My Connections</option>
                                        <option value="myself">Only me</option>
                                    </select>
                                </div>
                            </div>
                            <div className="submit-btn-box pt-3">
                                <button className="btn theme-btn" type="submit">
                                    Save changes
                                </button>
                            </div>
                        </div>
                        {/* end settings-item */}
                    </form>
                </div>
                {/* end user-panel */}
            </div>
        </>
    )
}

export default PrivacySetting;