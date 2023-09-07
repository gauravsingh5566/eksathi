import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import { Checkbox, Divider, FormHelperText, ModalClose, Option, Textarea } from '@mui/joy';
import Select, { selectClasses } from '@mui/joy/Select';
import { KeyboardArrowDown } from '@mui/icons-material'; import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormGroup } from '@mui/material';
import './Modal.css';
import { useFormik } from 'formik';
import { useGlobalContext } from 'global/context';

export default function AddExperience({ open = false, setOpen, action, edit = false, data }) {
    const [isTillPresent, setIsTillPresent] = React.useState(false);

    const { userData, api } = useGlobalContext();
    const formik = useFormik({
        initialValues: {
            title: data?.title || "",
            description: data?.description || "",
            organization: data?.organization || "",
            ctc: data?.ctc || "",
            subject: data?.subject || "",
            standard: data?.standard || "",
            location: data?.location || "",
            employment_type: data?.employment_type || "full-time",
            is_working: data?.is_working || "",
            start_date: data?.start_date || new Date().getDate(),
            end_date: data?.end_date || new Date().getDate()
        },
        onSubmit: async (values) => {
            values = { ...values, user_id: userData?.id };
            console.log("Add experience: ", values);
            try {
                if (edit) {
                    const res = await api.put(`/app/candidates/experiences/${data?.id}`, values);
                    if (res?.status === 200) {
                        console.log("Successfully Updated");
                        setOpen(false);
                    }
                } else {
                    const res = await api.post(`/app/candidates/experiences/${userData?.id}`, values);
                    if (res?.status === 200) {
                        console.log("Successfully Added");
                        setOpen(false);
                    }
                }

            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <React.Fragment>
            <Modal open={open} onClose={() => setOpen(false)} >
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                    layout='center'

                // sx={{ maxWidth: 500 }}
                // variant="plain"
                >
                    <ModalClose />
                    <div className="px-3 my-3">
                        <Typography id="basic-modal-dialog-title" component="h2" fontWeight={'lg'}>
                            {edit ? 'Edit experience' : 'Add new experience'}
                        </Typography>
                        <Typography id="basic-modal-dialog-description" textColor="text.tertiary" level="body3">
                            Share wher you worked on this profile
                        </Typography>
                    </div>
                    <FormGroup
                        onSubmit={formik.handleSubmit}
                        className='scroll-bar-hidden'
                        sx={{
                            overflow: 'scroll',
                            mx: 'calc(-1 * var(--ModalDialog-padding))',
                            px: 'var(--ModalDialog-padding)',
                        }}
                    >
                        <Stack spacing={2} >
                            <div className="row px-3">
                                <FormControl className='col'>
                                    <FormLabel>Title*</FormLabel>
                                    <Input autoFocus required
                                        placeholder="Eg - Manager"
                                        name='title'
                                        value={formik.values.title}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                            </div>
                            <div className="row d-flex flex-wrap">
                                <FormControl className='col'>
                                    <FormLabel>Organisation*</FormLabel>
                                    <Input required
                                        placeholder='ABC University'
                                        name='organization'
                                        value={formik.values.organization}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                                <FormControl className='col'>
                                    <FormLabel>CTC*</FormLabel>
                                    <Input required
                                        placeholder='Eg - 5 LPA'
                                        name='ctc'
                                        value={formik.values.ctc}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                            </div>
                            <div className="row d-flex flex-wrap">

                                <FormControl className='col '>
                                    <FormLabel>Subject</FormLabel>
                                    <Input required
                                        placeholder='Eg - Mathematics'
                                        name='subject'
                                        value={formik.values.subject}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                                <FormControl className='col '>
                                    <FormLabel>Class</FormLabel>
                                    <Input required
                                        placeholder='Eg - Intermediate'
                                        name='standard'
                                        value={formik.values.standard}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                            </div>
                            <div className="row d-flex flex-wrap">
                                <FormControl className='col'>
                                    <FormLabel>Location*</FormLabel>
                                    <Input required
                                        placeholder='Bangalore'
                                        name='location'
                                        value={formik.values.location}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                                <FormControl className='col '>
                                    <FormLabel>Employment*</FormLabel>
                                    <Select
                                        required
                                        placeholder="Select a type…"
                                        indicator={<KeyboardArrowDown />}
                                        sx={{
                                            width: 220,
                                            [`& .${selectClasses.indicator}`]: {
                                                transition: '0.2s',
                                                [`&.${selectClasses.expanded}`]: {
                                                    transform: 'rotate(-180deg)',
                                                },
                                            },
                                        }}
                                        name='employment_type'
                                        value={formik.values.employment_type}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    >
                                        <Option value="full-time">Full Time</Option>
                                        <Option value="part-time">Part Time</Option>
                                        <Option value="guest">Guest</Option>
                                    </Select>
                                </FormControl>
                            </div>
                            <FormControl className="row">
                                <div className="col">
                                    <FormLabel>Description</FormLabel>
                                    <Textarea minRows={3}
                                        placeholder="Describe your responsibilities in concise statements led by strong verbs"
                                        name='description'
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                    <FormHelperText>100 Charecters left</FormHelperText>
                                </div>
                            </FormControl>
                            <div className="row">
                                <Checkbox className='col' label="I am currently working in this role" variant="outlined"
                                    // onChange={(e) => {
                                    //     setIsTillPresent(e.target.checked);
                                    // }}
                                    name='is_working'
                                    value={formik.values.is_working}
                                    onChange={formik.handleChange}
                                    onError={formik.handleError}
                                />
                            </div>
                            <div className="row d-flex flex-wrap">
                                <FormControl className='col'>
                                    <FormLabel>Start date*</FormLabel>
                                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker className='rounded-3' views={['month', 'year']} />
                                    </LocalizationProvider> */}
                                    <Input type='date' required
                                        name='start_date'
                                        value={formik.values.start_date}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                                <FormControl className='col ' disabled={formik.values.is_working}>
                                    <FormLabel>End date*</FormLabel>
                                    <Input type='date' required
                                        name='end_date'
                                        value={formik.values.end_date}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                            </div>


                        </Stack>
                    </FormGroup>
                    <div className="row g-2 d-flex px-4 mt-3">
                        {/* <Button type="button" variant='outlined' className='col'>Save as draft</Button> */}

                        <Button type="button" className=' col' onClick={formik.handleSubmit}>{edit ? 'Save changes' : 'Add Experience'}</Button>
                    </div>
                </ModalDialog>
            </Modal>

        </React.Fragment>
    );
}