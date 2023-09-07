import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const EmailSetting = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            feature: false,
            eksathi: false,
            tips: false,
            inbox: false,
            community: false,
            research: false,
            recommended: false,
            company: false,

        },
        validationSchema: Yup.object({ email: Yup.string().email('Invalid email address').required('Required') }),
        features: Yup.object({ feature: Yup.boolean().required('Required') }),
        eksathi: Yup.object({ eksathi: Yup.boolean().required('Required') }),
        tips: Yup.object({ tips: Yup.boolean().required('Required') }),
        inbox: Yup.object({ inbox: Yup.boolean().required('Required') }),
        community: Yup.object({ community: Yup.boolean().required('Required') }),
        research: Yup.object({ research: Yup.boolean().required('Required') }),
        recommended: Yup.object({ recommended: Yup.boolean().required('Required') }),
        company: Yup.object({ company: Yup.boolean().required('Required') }),
        
        

        onSubmit: async (values) => {
            console.log(values)
            try {
                // const res = await axios.post('http://localhost:5000/api/user/register', values)
                // console.log(res)
            } catch (error) {   
                console.log(error)
            }
        },
    })
    return (
        <>
            <div className="user-panel-main-bar p-4">
                <div className="user-panel">
                    <div className="bg-gray p-3 rounded-rounded">
                        <h3 className="fs-17">Email Settings</h3>
                    </div>
                    <form method="post" className="pt-20px">
                        <div className="settings-item mb-30px border-bottom border-bottom-gray pb-30px">
                            <label className="fs-13 text-black lh-20 fw-medium">
                                Email Address
                            </label>
                            <div className="input-group">
                                <input
                                    className="form-control form--control"
                                    type="email"
                                    name="email"
                                    defaultValue="ardensmith81@gmail.com"
                                />
                                <div className="input-group-append">
                                    <button className="btn theme-btn" type="button">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* end settings-item */}
                        <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                                <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                    Features &amp; Announcements
                                </label>
                                <span className="fs-13 d-block lh-18 pb-3">
                                    New products and feature updates, as well as
                                    occasional company announcements
                                </span>
                                <div className="form-group">
                                    <div
                                        className="btn-group btn--group btn-group-toggle"
                                        data-toggle="buttons"
                                    >
                                        <label className="btn active">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option1"
                                                defaultChecked
                                            />{" "}
                                            Off
                                        </label>
                                        <label className="btn">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option2"
                                            />{" "}
                                            On
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end settings-item */}
                        <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                                <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                    The EkSathi
                                </label>
                                <span className="fs-13 d-block lh-18 pb-3">
                                    An email rounding up the best news,
                                    entertainment, and culture from the world of
                                    software development
                                </span>
                                <div className="form-group">
                                    <div
                                        className="btn-group btn--group btn-group-toggle"
                                        data-toggle="buttons"
                                    >
                                        <label className="btn active">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option3"
                                                defaultChecked
                                            />{" "}
                                            Off
                                        </label>
                                        <label className="btn">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option4"
                                            />{" "}
                                            On
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end settings-item */}
                        <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                                <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                    Tips &amp; Reminders
                                </label>
                                <span className="fs-13 d-block lh-18 pb-3">
                                    Timely advice and reminders to help you make the
                                    most of our features
                                </span>
                                <div className="form-group">
                                    <div
                                        className="btn-group btn--group btn-group-toggle"
                                        data-toggle="buttons"
                                    >
                                        <label className="btn">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option5"
                                            />{" "}
                                            Off
                                        </label>
                                        <label className="btn active">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option6"
                                                defaultChecked
                                            />{" "}
                                            On
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end settings-item */}
                        <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                                <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                    Inbox
                                </label>
                                <span className="fs-13 d-block lh-18 pb-3">
                                    Answers to your questions, comments, chat
                                    notifications, and more
                                </span>
                                <div className="form-group">
                                    <div
                                        className="btn-group btn--group btn-group-toggle"
                                        data-toggle="buttons"
                                    >
                                        <label className="btn">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option7"
                                            />{" "}
                                            Off
                                        </label>
                                        <label className="btn">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option8"
                                                defaultChecked
                                            />{" "}
                                            Weekly
                                        </label>
                                        <label className="btn active">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option9"
                                            />{" "}
                                            Daily
                                        </label>
                                        <label className="btn">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option10"
                                            />{" "}
                                            3 hrs
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end settings-item */}
                        <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                                <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                    Community Milestones
                                </label>
                                <span className="fs-13 d-block lh-18 pb-3">
                                    Notifications about bounties, reputation and
                                    more. Hint: sometimes involves swag.
                                </span>
                                <div className="form-group">
                                    <div
                                        className="btn-group btn--group btn-group-toggle"
                                        data-toggle="buttons"
                                    >
                                        <label className="btn">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option11"
                                            />{" "}
                                            Off
                                        </label>
                                        <label className="btn active">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option12"
                                                defaultChecked
                                            />{" "}
                                            On
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end settings-item */}
                        <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                                <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                    Research
                                </label>
                                <span className="fs-13 d-block lh-18 pb-3">
                                    Invitations to participate in surveys, usability
                                    tests, and more. Only a few per year.
                                </span>
                                <div className="form-group">
                                    <div
                                        className="btn-group btn--group btn-group-toggle"
                                        data-toggle="buttons"
                                    >
                                        <label className="btn active">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option13"
                                                defaultChecked
                                            />{" "}
                                            Off
                                        </label>
                                        <label className="btn">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option14"
                                            />{" "}
                                            On
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end settings-item */}
                        <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                                <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                    Recommended Jobs
                                </label>
                                <span className="fs-13 d-block lh-18 pb-3">
                                    Occasional emails highlighting special jobs and
                                    companies
                                </span>
                                <div className="form-group">
                                    <div
                                        className="btn-group btn--group btn-group-toggle"
                                        data-toggle="buttons"
                                    >
                                        <label className="btn active">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option15"
                                                defaultChecked
                                            />{" "}
                                            Off
                                        </label>
                                        <label className="btn">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option16"
                                            />{" "}
                                            On
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end settings-item */}
                        <div className="settings-item">
                            <div className="input-box">
                                <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                    Company Alerts
                                </label>
                                <span className="fs-13 d-block lh-18 pb-3">
                                    Content from companies you follow
                                </span>
                                <div className="form-group">
                                    <div
                                        className="btn-group btn--group btn-group-toggle"
                                        data-toggle="buttons"
                                    >
                                        <label className="btn active">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option17"
                                                defaultChecked
                                            />{" "}
                                            Off
                                        </label>
                                        <label className="btn">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option18"
                                            />{" "}
                                            Weekly
                                        </label>
                                    </div>
                                </div>
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

export default EmailSetting;